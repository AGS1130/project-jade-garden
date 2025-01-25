import { type Slots, createSlots } from "@spark-css/core/checkbox";

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 *
 * @returns
 * ```js
 * {
 *   base: "checkbox",
 *   root: "checkbox__root",
 *   label: "checkbox__label",
 *   control: "checkbox__control",
 *   indicator: "checkbox__indicator",
 *   group: "checkbox__group"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
const slots = createSlots({});

/**
 * @typedef {import("@spark-css/core/checkbox").Slots} Slots
 * @type {Record<Slots, string | string[]>}
 */
const styledSlots = {
  base: "checkbox",
  root: "checkbox__root",
  label: "checkbox__label",
  control: "checkbox__control",
  indicator: "checkbox__indicator",
  group: "checkbox__group"
} satisfies Record<Slots, string | string[]>;

/**
 * **Checkbox**
 * @description A control element that allows for multiple selections within a set.
 *
 * @example
 * ```css
 * .checkbox { }
 *
 * .checkbox__root { }
 *
 * .checkbox__label { }
 *
 * .checkbox__control { }
 *
 * .checkbox__indicator { }
 *
 * .checkbox__group { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/checkbox#anatomy)
 */
export const checkbox = styledSlots;
