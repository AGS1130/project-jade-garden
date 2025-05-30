// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/pagination/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Pagination**
 * @description Allows the user to select a specific page from a range of pages.
 * @see [source](https://kobalte.dev/docs/core/components/pagination#anatomy)
 */
export const slots = ["root", "ellipsis", "item", "items", "next", "previous"] as const;

/**
 * **Pagination**
 * @description Allows the user to select a specific page from a range of pages.
 * @see [source](https://kobalte.dev/docs/core/components/pagination#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Pagination**
 * @description Allows the user to select a specific page from a range of pages.
 * @see [source](https://kobalte.dev/docs/core/components/pagination#api-reference)
 */
export type Traits = SVATraits<Slots, { root: {}; ellipsis: {}; item: {}; items: {}; next: {}; previous: {} }>;
