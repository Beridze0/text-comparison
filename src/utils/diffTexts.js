import { diff_match_patch } from "diff-match-patch";

export function diffTexts(textA, textB) {
  const dmp = new diff_match_patch();
  const diffs = dmp.diff_main(textA, textB);
  dmp.diff_cleanupSemantic(diffs);

  const resultA = [];
  const resultB = [];

  for (const [op, data] of diffs) {
    if (op === 0) {
      // same → show in both
      resultA.push({ text: data, same: true });
      resultB.push({ text: data, same: true });
    }
    if (op === -1) {
      // deletion → show only in A (red)
      resultA.push({ text: data, removed: true });
    }
    if (op === 1) {
      // insertion → show only in B (green)
      resultB.push({ text: data, added: true });
    }
  }

  return { resultA, resultB };
}
