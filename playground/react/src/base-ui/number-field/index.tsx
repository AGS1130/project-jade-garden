import { NumberField } from "@base-ui-components/react/number-field";
import * as React from "react";

function CursorGrowIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="26"
      height="14"
      viewBox="0 0 24 14"
      fill="black"
      stroke="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Cursor Grow Icon</title>
      <path d="M19.5 5.5L6.49737 5.51844V2L1 6.9999L6.5 12L6.49737 8.5L19.5 8.5V12L25 6.9999L19.5 2V5.5Z" />
    </svg>
  );
}

function PlusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Plus Icon</title>
      <path d="M0 5H5M10 5H5M5 5V0M5 5V10" />
    </svg>
  );
}

function MinusIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentcolor"
      strokeWidth="1.6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Minus Icon</title>
      <path d="M0 5H10" />
    </svg>
  );
}

export const Basic = () => {
  const id = React.useId();
  return (
    <NumberField.Root id={id} defaultValue={100}>
      <NumberField.ScrubArea>
        <label htmlFor={id}>Amount</label>
        <NumberField.ScrubAreaCursor>
          <CursorGrowIcon />
        </NumberField.ScrubAreaCursor>
      </NumberField.ScrubArea>

      <NumberField.Group>
        <NumberField.Decrement>
          <MinusIcon />
        </NumberField.Decrement>
        <NumberField.Input />
        <NumberField.Increment>
          <PlusIcon />
        </NumberField.Increment>
      </NumberField.Group>
    </NumberField.Root>
  );
};
