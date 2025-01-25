import { type Slots, createSlots } from "@spark-css/core/switch";

/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 *
 * @returns
 * ```js
 * {
 *   base: "switch",
 *   root: "switch__root",
 *   label: "switch__label",
 *   control: "switch__control",
 *   thumb: "switch__thumb"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/switch#anatomy)
 */
const slots = createSlots({});

const styledSlots = {
  base: "switch",
  root: "switch__root",
  label: "switch__label",
  control: "switch__control",
  thumb: "switch__thumb"
} satisfies Record<Slots, string | string[]>;

/**
 * **Switch**
 * @description A control element that allows for a binary selection.
 *
 * @example
 * ```css
 * .switch { }
 *
 * .switch__root { }
 *
 * .switch__label { }
 *
 * .switch__control { }
 *
 * .switch__thumb { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/switch#anatomy)
 */
export const switchStyles = styledSlots;
