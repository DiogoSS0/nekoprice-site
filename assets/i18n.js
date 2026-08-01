/* NekoPrice country-driven interface localisation. */
(() => {
  "use strict";

  const PROFILE_STORAGE_KEY = "nekopriceUserProfile";
  const COUNTRY_LOCALES = Object.freeze({
    PT: "pt-PT",
    BR: "pt-BR",
    JP: "ja-JP",
    ES: "es-ES",
    MX: "es-MX",
    FR: "fr-FR",
    DE: "de-DE",
    AT: "de-AT",
    CH: "de-CH",
    IT: "it-IT",
    NL: "nl-NL",
    BE: "nl-BE",
    FI: "fi-FI",
    PL: "pl-PL",
    CZ: "cs-CZ",
    SE: "sv-SE",
    NO: "no-NO",
    DK: "da-DK",
    UK: "en-GB",
    US: "en-US",
    CA: "en-CA",
    AU: "en-AU",
    NZ: "en-NZ",
    SG: "en-SG",
    PH: "en-PH",
    IE: "en-IE",
    INTL: "en"
  });
  const REGION_CODES = Object.freeze({ UK: "GB" });
  const TRANSLATABLE_ATTRIBUTES = ["aria-label", "placeholder", "title"];
  const SKIPPED_TAGS = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "CODE", "PRE", "TEXTAREA"]);
  const dictionaries = window.NEKO_TRANSLATIONS || {};
  const patternRows = Array.isArray(window.NEKO_I18N_PATTERNS) ? window.NEKO_I18N_PATTERNS : [];
  const originalText = new WeakMap();
  const renderedText = new WeakMap();
  const originalAttributes = new WeakMap();
  const renderedAttributes = new WeakMap();
  let observer = null;
  let currentCountry = readSavedCountry();
  let currentLocale = COUNTRY_LOCALES[currentCountry] || COUNTRY_LOCALES.INTL;

  function readSavedCountry() {
    try {
      const saved = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || "{}");
      const country = saved?.country === "GB" ? "UK" : String(saved?.country || "PT").toUpperCase();
      return COUNTRY_LOCALES[country] ? country : "PT";
    } catch (error) {
      return "PT";
    }
  }

  function catalogueLanguage(locale = currentLocale) {
    if (locale.toLowerCase() === "pt-pt") return "pt-PT";
    if (locale.toLowerCase() === "pt-br") return "pt-BR";
    return locale.split("-")[0].toLowerCase();
  }

  function normalizeSource(value) {
    return String(value ?? "").replace(/\s+/g, " ").trim();
  }

  function interpolate(value, variables = {}) {
    return String(value ?? "").replace(/\{\{([^{}]+)\}\}/g, (match, key) => {
      const replacement = variables[key];
      return replacement === undefined || replacement === null ? match : String(replacement);
    });
  }

  function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function compilePattern(row) {
    const source = normalizeSource(row?.source);
    if (!source || !source.includes("{{")) return null;
    const placeholderOrder = [];
    const numericLeadingPlaceholder = /^\{\{\d+\}\}\s+(?:figures?|stores?|offers?|matches?|items?|franchises?|products?|points?)\b/i.test(source);
    let cursor = 0;
    let expression = "^";
    const matcher = /\{\{(\d+)\}\}/g;
    let match;
    while ((match = matcher.exec(source))) {
      expression += escapeRegExp(source.slice(cursor, match.index));
      expression += numericLeadingPlaceholder && match.index === 0 ? "([\\d.,+]+)" : "(.*?)";
      placeholderOrder.push(match[1]);
      cursor = match.index + match[0].length;
    }
    expression += escapeRegExp(source.slice(cursor));
    expression += "$";
    try {
      return {
        source,
        targets: row.targets || {},
        placeholderOrder,
        regexp: new RegExp(expression, "iu")
      };
    } catch (error) {
      return null;
    }
  }

  const compiledPatterns = patternRows
    .map(compilePattern)
    .filter(Boolean)
    .sort((left, right) => right.source.replace(/\{\{\d+\}\}/g, "").length - left.source.replace(/\{\{\d+\}\}/g, "").length);

  function translatePattern(source, language) {
    for (const pattern of compiledPatterns) {
      const match = source.match(pattern.regexp);
      if (!match) continue;
      const target = pattern.targets?.[language];
      if (!target) continue;
      const variables = {};
      pattern.placeholderOrder.forEach((key, index) => {
        variables[key] = match[index + 1];
      });
      return interpolate(target, variables);
    }
    return source;
  }

  function translate(source, variables) {
    const normalized = normalizeSource(source);
    if (!normalized) return normalized;
    const language = catalogueLanguage();
    if (language === "en") return interpolate(normalized, variables);
    const dictionary = dictionaries[language] || {};
    let target = dictionary[normalized] || "";
    if (!target) {
      const punctuation = normalized.match(/^(.+?)([:：])$/u);
      if (punctuation) {
        const translatedBase = dictionary[punctuation[1]] || translatePattern(punctuation[1], language);
        if (translatedBase && translatedBase !== punctuation[1]) {
          target = `${translatedBase}${language === "ja" ? "：" : punctuation[2]}`;
        }
      }
    }
    if (!target) target = translatePattern(normalized, language);
    return interpolate(target || normalized, variables);
  }

  function translateKeepingWhitespace(rawSource) {
    const raw = String(rawSource ?? "");
    const normalized = normalizeSource(raw);
    if (!normalized) return raw;
    const leading = raw.match(/^\s*/)?.[0] || "";
    const trailing = raw.match(/\s*$/)?.[0] || "";
    return `${leading}${translate(normalized)}${trailing}`;
  }

  function shouldSkipNode(node) {
    const parent = node?.parentElement;
    if (!parent || SKIPPED_TAGS.has(parent.tagName)) return true;
    return Boolean(parent.closest("[data-i18n-skip]"));
  }

  function translateTextNode(node) {
    if (!node || node.nodeType !== Node.TEXT_NODE || shouldSkipNode(node)) return;
    const current = String(node.nodeValue || "");
    if (!normalizeSource(current)) return;
    const priorOutput = renderedText.get(node);
    let source = originalText.get(node);
    if (!source || (priorOutput !== undefined && current !== priorOutput && current !== source)) {
      source = current;
      originalText.set(node, source);
    }
    const output = translateKeepingWhitespace(source);
    renderedText.set(node, output);
    if (current !== output) node.nodeValue = output;
  }

  function attributeState(store, element) {
    let state = store.get(element);
    if (!state) {
      state = new Map();
      store.set(element, state);
    }
    return state;
  }

  function translateAttribute(element, attribute) {
    if (!element?.hasAttribute?.(attribute) || element.closest?.("[data-i18n-skip]")) return;
    const current = element.getAttribute(attribute) || "";
    if (!normalizeSource(current)) return;
    const originals = attributeState(originalAttributes, element);
    const outputs = attributeState(renderedAttributes, element);
    const priorOutput = outputs.get(attribute);
    let source = originals.get(attribute);
    if (!source || (priorOutput !== undefined && current !== priorOutput && current !== source)) {
      source = current;
      originals.set(attribute, source);
    }
    const output = translate(source);
    outputs.set(attribute, output);
    if (current !== output) element.setAttribute(attribute, output);
  }

  function translateElement(element) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE || SKIPPED_TAGS.has(element.tagName)) return;
    TRANSLATABLE_ATTRIBUTES.forEach((attribute) => translateAttribute(element, attribute));
    for (const child of element.childNodes) {
      if (child.nodeType === Node.TEXT_NODE) translateTextNode(child);
    }
  }

  function apply(root = document) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      translateTextNode(root);
      return;
    }
    if (root.nodeType === Node.ELEMENT_NODE) translateElement(root);
    const owner = root.ownerDocument || document;
    const walker = owner.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();
    while (node) {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node);
      else translateElement(node);
      node = walker.nextNode();
    }
    document.documentElement.lang = currentLocale;
    document.documentElement.dataset.country = currentCountry;
    document.documentElement.dataset.locale = currentLocale;
  }

  function countryName(countryCode, fallback = "") {
    const normalized = String(countryCode || "").toUpperCase();
    if (normalized === "INTL") return translate("International");
    const region = REGION_CODES[normalized] || normalized;
    try {
      return new Intl.DisplayNames([currentLocale], { type: "region" }).of(region) || fallback || normalized;
    } catch (error) {
      return fallback || normalized;
    }
  }

  function currencyName(currencyCode, fallback = "") {
    const normalized = String(currencyCode || "").toUpperCase();
    try {
      return new Intl.DisplayNames([currentLocale], { type: "currency" }).of(normalized) || fallback || normalized;
    } catch (error) {
      return fallback || normalized;
    }
  }

  function setCountry(countryCode, options = {}) {
    const normalized = String(countryCode || "").toUpperCase() === "GB"
      ? "UK"
      : String(countryCode || "PT").toUpperCase();
    currentCountry = COUNTRY_LOCALES[normalized] ? normalized : "PT";
    currentLocale = COUNTRY_LOCALES[currentCountry];
    apply(document);
    if (!options.silent) {
      window.dispatchEvent(new CustomEvent("neko:localechange", {
        detail: { country: currentCountry, locale: currentLocale, language: catalogueLanguage() }
      }));
    }
    return currentLocale;
  }

  function observe() {
    if (observer || !document.documentElement) return;
    observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.type === "characterData") {
          translateTextNode(mutation.target);
          continue;
        }
        if (mutation.type === "attributes") {
          translateAttribute(mutation.target, mutation.attributeName);
          continue;
        }
        mutation.addedNodes.forEach((node) => apply(node));
      }
    });
    observer.observe(document.documentElement, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: TRANSLATABLE_ATTRIBUTES
    });
  }

  window.NekoI18n = Object.freeze({
    apply,
    countryName,
    currencyName,
    getCountry: () => currentCountry,
    getLanguage: () => catalogueLanguage(),
    getLocale: () => currentLocale,
    setCountry,
    t: translate
  });

  apply(document);
  observe();
})();
