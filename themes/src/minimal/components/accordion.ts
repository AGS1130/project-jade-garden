import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/accordion";

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 *
 * @returns
 * ```js
 * {
 *   base: "accordion",
 *   root: "accordion__root",
 *   item: "accordion__item",
 *   itemTrigger: "accordion__item-trigger",
 *   itemContent: "accordion__item-content",
 *   itemIndicator: "accordion__item-indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export const slots = createSlots({});

// * Uncomment before styling slots
// createDocs("anatomy", Slots);

/**
 * **Accordion**
 * @description A collapsible component for displaying content in a vertical stack.
 *
 * @example
 * ```css
 * .accordion { }
 *
 * .accordion__root { }
 *
 * .accordion__item { }
 *
 * .accordion__item-trigger { }
 *
 * .accordion__item-content { }
 *
 * .accordion__item-indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/accordion#anatomy)
 */
export const accordionStyledSlots = {
  base: "accordion",
  root: "accordion__root",
  item: "accordion__item",
  itemTrigger: "accordion__item-trigger",
  itemContent: "accordion__item-content",
  itemIndicator: "accordion__item-indicator"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment after styling slots
// createDocs("styled", accordionStyledSlots);
