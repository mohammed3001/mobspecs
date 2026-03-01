export function translate(text: string, sourceLang: "en" | "ar", targetLang: "en" | "ar"): string {
  if (sourceLang === targetLang) {
    return text;
  }

  return targetLang === "ar" ? `[ترجمة ذكية] ${text}` : `[Smart translation] ${text}`;
}
