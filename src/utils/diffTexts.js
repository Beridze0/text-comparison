export function diffTexts(textA, textB) {
  const wordsA = textA.trim().split(/\s+/);
  const wordsB = textB.trim().split(/\s+/);

  const maxLength = Math.max(wordsA.length, wordsB.length);
  const resultA = [];
  const resultB = [];

  for (let i = 0; i < maxLength; i++) {
    const a = wordsA[i] || "";
    const b = wordsB[i] || "";

    if (a === b) {
      resultA.push({ word: a, same: true });
      resultB.push({ word: b, same: true });
    } else {
      if (a) resultA.push({ word: a, same: false });
      if (b) resultB.push({ word: b, same: false });
    }
  }

  return { resultA, resultB };
}
