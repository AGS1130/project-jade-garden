import type { Meta } from "@storybook/svelte";
import SbBasic from "./index.svelte";

export default {
  title: "Bits UI / Toggle Group"
} satisfies Meta;

export const Basic = {
  render: () => ({
    Component: SbBasic
  })
};
