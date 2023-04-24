function extractLanguage(locale) {
  return locale.split('_')[0];
}

// Examples:
console.log(extractLanguage('en_US.UTF-8'));
console.log(extractLanguage('en_GB.UTF-8'));
console.log(extractLanguage('ko_KR.UTF-16'));