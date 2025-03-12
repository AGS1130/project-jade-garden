// * https://github.com/huntabyte/bits-ui/blob/main/packages/bits-ui/src/lib/bits/scroll-area/exports.ts
import type { ClassValue } from "tailwind-variants";

/**
 * **Scroll Area**
 * @description Provides a consistent scroll area across platforms.
 * @see [source](https://www.bits-ui.com/docs/components/scroll-area#api-reference)
 */
export const slots = ["root", "viewport", "scrollbar", "thumb", "corner"] as const;

/**
 * **Scroll Area**
 * @description Provides a consistent scroll area across platforms.
 * @see [source](https://www.bits-ui.com/docs/components/scroll-area#api-reference)
 */
export type Slots = (typeof slots)[number];

/**
 * **Scroll Area**
 * @description Provides a consistent scroll area across platforms.
 * @see [source](https://www.bits-ui.com/docs/components/scroll-area#api-reference)
 */
export type TVSlots = Record<Slots, ClassValue>;
