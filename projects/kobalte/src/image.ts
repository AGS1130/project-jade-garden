// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/image/index.tsx

/**
 * **Image**
 * @description An image element with an optional fallback for loading and error status.
 * @see [source](https://kobalte.dev/docs/core/components/image#anatomy)
 */
export const slots = ["fallback", "img"] as const;

/**
 * **Image**
 * @description An image element with an optional fallback for loading and error status.
 * @see [source](https://kobalte.dev/docs/core/components/image#anatomy)
 */
export type Slots = (typeof slots)[number];
