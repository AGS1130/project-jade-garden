// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/popover/exports.ts

/**
 * **Popover**
 * @description Display supplementary content or information when users interact with specific elements.
 * @see [source](https://www.bits-ui.com/docs/components/popover#api-reference)
 */
export const slots = ["root", "arrow", "content", "contentStatic", "trigger", "close"] as const;

/**
 * **Popover**
 * @description Display supplementary content or information when users interact with specific elements.
 * @see [source](https://www.bits-ui.com/docs/components/popover#api-reference)
 */
export type Slots = (typeof slots)[number];
