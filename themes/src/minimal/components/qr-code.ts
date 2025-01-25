import { type Slots, createSlots } from "@spark-css/core/qr-code";

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 *
 * @returns
 * ```js
 * {
 *   base: "qr-code",
 *   root: "qr-code__root",
 *   frame: "qr-code__frame",
 *   pattern: "qr-code__pattern",
 *   overlay: "qr-code__overlay",
 *   downloadTrigger: "qr-code__download-trigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
const slots = createSlots({});

const styledSlots = {
  base: "qr-code",
  root: "qr-code__root",
  frame: "qr-code__frame",
  pattern: "qr-code__pattern",
  overlay: "qr-code__overlay",
  downloadTrigger: "qr-code__download-trigger"
} satisfies Record<Slots, string | string[]>;

/**
 * **Qr Code**
 * @description A component that generates a QR code based on the provided data.
 *
 * @example
 * ```css
 * .qr-code { }
 *
 * .qr-code__root { }
 *
 * .qr-code__frame { }
 *
 * .qr-code__pattern { }
 *
 * .qr-code__overlay { }
 *
 * .qr-code__download-trigger { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/qr-code#anatomy)
 */
export const qrCode = styledSlots;
