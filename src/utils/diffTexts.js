import { diff_match_patch } from "diff-match-patch";

export function diffTexts(textA, textB) {
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(textA, textB);
  dmp.diff_cleanupSemantic(diffs);

  const resultA = [];
  const resultB = [];

  for (const [op, data] of diffs) {
    const isWhitespace = /^\s+$/.test(data);

    if (op === 0) {
      // unchanged → add to both
      resultA.push({ text: data, type: "same" });
      resultB.push({ text: data, type: "same" });
    }
    if (op === -1 && !isWhitespace) {
      // removed → only in A
      resultA.push({ text: data, type: "removed" });
    }
    if (op === 1 && !isWhitespace) {
      // added → only in B
      resultB.push({ text: data, type: "added" });
    }
  }

  return { resultA, resultB };
}
