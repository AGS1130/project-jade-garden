import type { ClassValue as CV } from "clsx";

/* ==================== Types ==================== */

/**
 * Represents the `class` and `className` props for `cva` and `sva`.
 * Ensures that only one of `class` or `className` is present.
 */
export type ClassProp =
  | {
      class?: ClassValue;
      className?: never;
    }
  | {
      class?: never;
      className?: ClassValue;
    };

/**
 * **This is the `ClassValue` type from [clsx](https://github.com/lukeed/clsx/tree/master)**.
 * - Represents a value that can be used as a class name.
 * - It can be a `string`, `number`, `bigint`, `null`, `boolean`, `undefined`, an array of ClassValue, or a Record with values of `any`.
 */
export type ClassValue = CV;

/**
 * Represents a function that merges class names.
 *
 * @param {...ClassValue[]} classes - An array of class names to merge.
 * @returns {string} - The merged class name string.
 */
export type MergeClassFn = (...classes: ClassValue[]) => string;

/**
 * Removes undefined from a type.
 *
 * @template T - The type to omit undefined from.
 * @returns {T extends undefined ? never : T} The type with undefined removed.
 */
type OmitUndefined<T> = T extends undefined ? never : T;

/**
 * Configuration for raw class name generation.
 *
 * @property {("camel" | "kebab" | "pascal" | "snake")=} caseConvention - The case convention to use.
 * @property {string=} prefix - The prefix to prepend to the class name.
 */
export type RawConfig = {
  caseConvention?: "camel" | "kebab" | "pascal" | "snake";
  prefix?: string;
};

/**
 * Represents a dictionary where keys are strings and values are ClassValue.
 */
export type RecordClassValue = Record<string, ClassValue>;

/**
 * Converts "true" or "false" string literals to boolean types.
 * Otherwise, returns the original type.
 *
 * @template T - The type to convert.
 * @returns {T extends "true" | "false" ? boolean : T} - The converted type.
 */
export type StringToBoolean<T> = T extends "true" | "false" ? boolean : T;

/**
 * Extracts the variant props from a component's props type, excluding `class` and `className`.
 *
 * @template Component - The type of the component function.
 * @returns {Omit<OmitUndefined<Parameters<Component>[0]>, "class" | "className">} The extracted variant props type.
 */
export type VariantProps<Component extends (...args: any) => any> = Omit<
  OmitUndefined<Parameters<Component>[0]>,
  "class" | "className"
>;
