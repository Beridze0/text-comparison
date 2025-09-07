export function diffChars(textA, textB) {
  const max = Math.max(textA.length, textB.length);
  const resultA = [];
  const resultB = [];

  for (let i = 0; i < max; i++) {
    const a = textA[i] ?? "";
    const b = textB[i] ?? "";

    if (a === b) {
      if (a) {
        resultA.push({ text: a, same: true });
        resultB.push({ text: b, same: true });
      }
    } else {
      // special case for spaces: don't color them
      if (a === " " || b === " ") {
        if (a) resultA.push({ text: a, same: true });
        if (b) resultB.push({ text: b, same: true });
      } else {
        if (a) resultA.push({ text: a, same: false });
        if (b) resultB.push({ text: b, same: false });
      }
    }
  }

  return { resultA, resultB };
}
