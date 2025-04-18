// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/toast/index.tsx

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://kobalte.dev/docs/core/components/toast#anatomy)
 */
export const slots = [
  "closeButton",
  "description",
  "list",
  "progressFill",
  "progressTrack",
  "region",
  "title",
  "toaster"
] as const;

/**
 * **Toast**
 * @description A succinct message that is displayed temporarily.
 * @see [source](https://kobalte.dev/docs/core/components/toast#anatomy)
 */
export type Slots = (typeof slots)[number];
