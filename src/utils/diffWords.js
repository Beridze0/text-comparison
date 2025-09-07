// export function diffTexts(textA, textB) {
//   const wordsA = textA.trim().split(/\s+/);
//   const wordsB = textB.trim().split(/\s+/);

//   const maxLength = Math.max(wordsA.length, wordsB.length);
//   const resultA = [];
//   const resultB = [];

//   for (let i = 0; i < maxLength; i++) {
//     const a = wordsA[i] || "";
//     const b = wordsB[i] || "";

//     if (a === b) {
//       resultA.push({ word: a, same: true });
//       resultB.push({ word: b, same: true });
//     } else {
//       if (a) resultA.push({ word: a, same: false });
//       if (b) resultB.push({ word: b, same: false });
//     }
//   }

//   return { resultA, resultB };
// }

///// 2 ////

// export function diffTexts(textA, textB) {
//   const wordsA = textA.trim().split(/\s+/);
//   const wordsB = textB.trim().split(/\s+/);

//   const maxLength = Math.max(wordsA.length, wordsB.length);
//   const resultA = [];
//   const resultB = [];

//   for (let i = 0; i < maxLength; i++) {
//     const a = wordsA[i] || "";
//     const b = wordsB[i] || "";

//     if (a === b) {
//       resultA.push({ text: a, same: true });
//       resultB.push({ text: b, same: true });
//     } else {
//       if (a) resultA.push({ text: a, same: false });
//       if (b) resultB.push({ text: b, same: false });
//     }
//   }

//   return { resultA, resultB };
// }

// utils/diffWords.js
function lcs(a, b) {
  const n = a.length,
    m = b.length;
  const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] =
        a[i] === b[j]
          ? 1 + dp[i + 1][j + 1]
          : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const ops = [];
  let i = 0,
    j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) {
      ops.push({ type: "equal", a: a[i], b: b[j] });
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      ops.push({ type: "delete", a: a[i] });
      i++;
    } else {
      ops.push({ type: "insert", b: b[j] });
      j++;
    }
  }
  while (i < n) {
    ops.push({ type: "delete", a: a[i++] });
  }
  while (j < m) {
    ops.push({ type: "insert", b: b[j++] });
  }
  return ops;
}

export function diffWords(textA, textB) {
  const wordsA = textA.trim().length ? textA.trim().split(/\s+/) : [];
  const wordsB = textB.trim().length ? textB.trim().split(/\s+/) : [];

  const ops = lcs(wordsA, wordsB);
  const resultA = [];
  const resultB = [];

  for (const op of ops) {
    if (op.type === "equal") {
      resultA.push({ text: op.a, same: true });
      resultB.push({ text: op.b, same: true });
    } else if (op.type === "delete") {
      // appears in A but not in B → removed (red) in A
      resultA.push({ text: op.a, same: false, removed: true });
    } else if (op.type === "insert") {
      // appears in B but not in A → added (green) in B
      resultB.push({ text: op.b, same: false, added: true });
    }
  }

  return { resultA, resultB };
}
