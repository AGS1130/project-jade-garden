import { type Slots, createSlots } from "@spark-css/core/signature-pad";

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 *
 * @returns
 * ```js
 * {
 *   base: "signature-pad",
 *   root: "signature-pad__root",
 *   control: "signature-pad__control",
 *   segment: "signature-pad__segment",
 *   segmentPath: "signature-pad__segment-path",
 *   guide: "signature-pad__guide",
 *   clearTrigger: "signature-pad__clear-trigger",
 *   label: "signature-pad__label"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/signature-pad#anatomy)
 */
const slots = createSlots({});

const styledSlots = {
  base: "signature-pad",
  root: "signature-pad__root",
  control: "signature-pad__control",
  segment: "signature-pad__segment",
  segmentPath: "signature-pad__segment-path",
  guide: "signature-pad__guide",
  clearTrigger: "signature-pad__clear-trigger",
  label: "signature-pad__label"
} satisfies Record<Slots, string | string[]>;

/**
 * **Signature Pad**
 * @description A component that allows users to draw a signature using a signature pad.
 *
 * @example
 * ```css
 * .signature-pad { }
 *
 * .signature-pad__root { }
 *
 * .signature-pad__control { }
 *
 * .signature-pad__segment { }
 *
 * .signature-pad__segment-path { }
 *
 * .signature-pad__guide { }
 *
 * .signature-pad__clear-trigger { }
 *
 * .signature-pad__label { }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/signature-pad#anatomy)
 */
export const signaturePad = styledSlots;
