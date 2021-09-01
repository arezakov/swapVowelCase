function swapVowelCase(str) {
  return str.replace(/([aeoui])|([AEOUI])/g, (match, p1, p2) => {
    if (p1) return p1.toUpperCase();
    return p2.toLowerCase();
  });
}
