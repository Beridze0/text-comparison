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
      resultA.push({ text: data, type: "same" });
      resultB.push({ text: data, type: "same" });
    }
    if (op === -1 && !isWhitespace) {
      resultA.push({ text: data, type: "removed" });
    }
    if (op === 1 && !isWhitespace) {
      resultB.push({ text: data, type: "added" });
    }
  }

  return { resultA, resultB };
}
