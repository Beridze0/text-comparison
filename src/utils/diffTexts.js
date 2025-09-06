// utils/diffTexts.js
export function diffTexts(textA, textB) {
  const wordsA = textA.trim().split(/\s+/);
  const wordsB = textB.trim().split(/\s+/);

  const maxLength = Math.max(wordsA.length, wordsB.length);

  const result = [];

  for (let i = 0; i < maxLength; i++) {
    const wordA = wordsA[i] || "";
    const wordB = wordsB[i] || "";

    if (wordA === wordB) {
      result.push({ word: wordA, same: true });
    } else {
      result.push({ word: wordA || wordB, same: false });
    }
  }

  return result;
}
