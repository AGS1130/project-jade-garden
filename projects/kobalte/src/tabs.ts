// * https://github.com/kobaltedev/kobalte/blob/main/packages/core/src/tabs/index.tsx
import type { SVATraits } from "jade-garden";

/**
 * **Tabs**
 * @description A set of layered sections of content, known as tab panels, that display one panel of content at a time.
 * @see [source](https://kobalte.dev/docs/core/components/tabs#anatomy)
 */
export const slots = ["content", "indicator", "list", "trigger"] as const;

/**
 * **Tabs**
 * @description A set of layered sections of content, known as tab panels, that display one panel of content at a time.
 * @see [source](https://kobalte.dev/docs/core/components/tabs#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tabs**
 * @description A set of layered sections of content, known as tab panels, that display one panel of content at a time.
 * @see [source](https://kobalte.dev/docs/core/components/tabs#api-reference)
 */
export type Traits = SVATraits<Slots, { content: {}; indicator: {}; list: {}; trigger: {} }>;
