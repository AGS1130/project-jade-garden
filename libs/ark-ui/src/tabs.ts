// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/tabs/tabs.anatomy.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export const slots = ["root", "list", "trigger", "content", "indicator"] as const;

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tabs**
 * @description Flexible navigation tool with various modes and features.
 * @see [source](https://ark-ui.com/vue/docs/components/tabs#anatomy)
 */
export type TVSlots = Record<Slots, ClassValue>;
