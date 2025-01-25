import { type Slots, createSlots } from "@spark-css/core/splitter";

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 *
 * @returns
 * ```js
 * {
 *   base: "splitter",
 *   root: "splitter__root",
 *   panel: "splitter__panel",
 *   resizeTrigger: "splitter__resize-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef {import("@spark-css/core/splitter").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: "splitter",
  root: "splitter__root",
  panel: "splitter__panel",
  resizeTrigger: "splitter__resize-trigger"
} satisfies Record<Slots, string | string[]>;

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 *
 * @example
 * ```css
 * .splitter { }
 *
 * .splitter__root { }
 *
 * .splitter__panel { }
 *
 * .splitter__resize-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
export const splitter = styledSlots;
