// * https://github.com/chakra-ui/ark/blob/main/packages/vue/src/components/splitter/splitter.anatomy.ts

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
export const slots = ["root", "panel", "resizeTrigger"] as const;

/**
 * **Splitter**
 * @description A component that divides your interface into resizable sections.
 * @see [source](https://ark-ui.com/vue/docs/components/splitter#anatomy)
 */
export type Slots = (typeof slots)[number];
