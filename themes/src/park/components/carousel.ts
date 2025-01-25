// * https://github.com/cschroeter/park-ui/tree/main/packages/panda/src/theme/recipes/carousel.ts
import {
  type Slots,
  // createDocs,
  createSlots
} from "@spark-css/core/carousel";

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 *
 * @returns
 * ```js
 * {
 *   base: "parkCarousel",
 *   root: "parkCarousel__root",
 *   itemGroup: "parkCarousel__itemGroup",
 *   item: "parkCarousel__item",
 *   control: "parkCarousel__control",
 *   nextTrigger: "parkCarousel__nextTrigger",
 *   prevTrigger: "parkCarousel__prevTrigger",
 *   indicatorGroup: "parkCarousel__indicatorGroup",
 *   indicator: "parkCarousel__indicator",
 *   autoplayTrigger: "parkCarousel__autoplayTrigger"
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const carouselSlots = createSlots({ prefix: "park", caseConvention: "camel" });

// * Uncomment before styling slots
// createDocs("anatomy", carouselSlots);

/**
 * **Carousel**
 * @description A slideshow component that cycles through elements.
 *
 * @example
 * ```css
 * .parkCarousel { }
 *
 * .parkCarousel__root { }
 *
 * .parkCarousel__itemGroup {
 *   (@)apply flex;
 * }
 *
 * .parkCarousel__item { }
 *
 * .parkCarousel__control {
 *   (@)apply bg-gray-dark-a12 dark:bg-gray-light-a12 rounded-l2 absolute bottom-4 left-1/2 flex items-center -translate-y-1/2;
 * }
 *
 * .parkCarousel__nextTrigger { }
 *
 * .parkCarousel__prevTrigger { }
 *
 * .parkCarousel__indicatorGroup {
 *   (@)apply flex;
 * }
 *
 * .parkCarousel__indicator {
 *   (@)apply bg-gray-6 [&:is([data-current])]:bg-[--colors-color-palette-default] rounded-full [&:is(:focus-visible,_[data-focus-visible])]:outline [&:is(:focus-visible,_[data-focus-visible])]:outline-2 [&:is(:focus-visible,_[data-focus-visible])]:outline-offset-2 [&:is(:focus-visible,_[data-focus-visible])]:outline-border-outline cursor-pointer;
 * }
 *
 * .parkCarousel__autoplayTrigger {
 *   (@)apply rounded-l2 relative overflow-x-hidden;
 * }
 * ```
 *
 * @see [source](https://ark-ui.com/vue/docs/components/carousel#anatomy)
 */
export const carouselStyledSlots = {
  base: "parkCarousel",
  root: "parkCarousel__root",
  itemGroup: [
    "parkCarousel__itemGroup",

    // Layout
    "flex"
  ],
  item: "parkCarousel__item",
  control: [
    "parkCarousel__control",

    // Backgrounds
    "bg-gray-dark-a12",
    "dark:bg-gray-light-a12",

    // Borders
    "rounded-l2",

    // Layout
    "absolute",
    "bottom-4",
    "left-1/2",
    "flex",

    // Flexbox & Grid
    "items-center",

    // Transforms
    "-translate-y-1/2"
  ],
  nextTrigger: "parkCarousel__nextTrigger",
  prevTrigger: "parkCarousel__prevTrigger",
  indicatorGroup: [
    "parkCarousel__indicatorGroup",

    // Layout
    "flex"
  ],
  indicator: [
    "parkCarousel__indicator",

    // Backgrounds
    "bg-gray-6",
    "[&:is([data-current])]:bg-[--colors-color-palette-default]",

    // Borders
    "rounded-full",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-2",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-offset-2",
    "[&:is(:focus-visible,_[data-focus-visible])]:outline-border-outline",

    // Interactivity
    "cursor-pointer"
  ],
  autoplayTrigger: "parkCarousel__autoplayTrigger"
} as const satisfies Record<Slots, string | string[]>;

// * Uncomment before styling slots
// createDocs("styled", carouselStyledSlots);
