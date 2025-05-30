// * https://github.com/unovue/reka-ui/blob/v2/packages/core/src/Tree/index.ts
import type { SVATraits } from "jade-garden";

/**
 * **Tree**
 * @description A tree view widget displays a hierarchical list of items that can be expanded or collapsed to show or hide their child items, such as in a file system navigator.
 * @see [source](https://reka-ui.com/docs/components/tree#anatomy)
 */
export const slots = ["root", "item", "virtualizer"] as const;

/**
 * **Tree**
 * @description A tree view widget displays a hierarchical list of items that can be expanded or collapsed to show or hide their child items, such as in a file system navigator.
 * @see [source](https://reka-ui.com/docs/components/tree#anatomy)
 */
export type Slots = (typeof slots)[number];

/**
 * **Tree**
 * @description A tree view widget displays a hierarchical list of items that can be expanded or collapsed to show or hide their child items, such as in a file system navigator.
 * @see [source](https://reka-ui.com/docs/components/tree#api-reference)
 */
export type Traits = SVATraits<
  Slots,
  {
    item: {
      indent: "number";
      expanded: "";
      selected: "";
    };
  }
>;
