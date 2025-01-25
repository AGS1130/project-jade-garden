import { type Slots, createSlots } from "@spark-css/core/toggle";

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 *
 * @returns
 * ```js
 * {
 *   base: "toggle",
 *   root: "toggle__root",
 *   indicator: "toggle__indicator"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export const toggleSlots = createSlots({});

/**
 * **Toggle**
 * @description A two-state button that can be toggled on or off.
 *
 * @example
 * ```css
 * .toggle { }
 *
 * .toggle__root { }
 *
 * .toggle__indicator { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/toggle#anatomy)
 */
export const toggleStyledSlots = {
  base: "toggle",
  root: "toggle__root",
  indicator: "toggle__indicator"
} as const satisfies Record<Slots, string | string[]>;
