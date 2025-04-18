// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/popover/index.tsx

/**
 * **Popover**
 * @description A popover positioned relative to an anchor element.
 * @see [source](https://kobalte.dev/docs/core/components/popover#anatomy)
 */
export const slots = ["root", "anchor", "arrow", "closeButton", "content", "description", "title", "trigger"] as const;

/**
 * **Popover**
 * @description A popover positioned relative to an anchor element.
 * @see [source](https://kobalte.dev/docs/core/components/popover#anatomy)
 */
export type Slots = (typeof slots)[number];
