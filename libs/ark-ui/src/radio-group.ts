// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/radio-group/radio-group.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export const slots = ["root", "label", "item", "itemText", "itemControl", "indicator"] as const;

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Radio Group**
 * @description Allows single selection from multiple options.
 * @see [source](https://ark-ui.com/vue/docs/components/radio-group#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
