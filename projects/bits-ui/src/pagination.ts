// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/pagination/exports.ts

/**
 * **Pagination**
 * @description Facilitates navigation between pages.
 * @see [source](https://www.bits-ui.com/docs/components/pagination#api-reference)
 */
export const slots = ["root", "prevButton", "nextButton", "page"] as const;

/**
 * **Pagination**
 * @description Facilitates navigation between pages.
 * @see [source](https://www.bits-ui.com/docs/components/pagination#api-reference)
 */
export type Slots = (typeof slots)[number];
