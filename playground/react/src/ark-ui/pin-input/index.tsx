import { PinInput } from "@ark-ui/react/pin-input";

export const Basic = () => {
  return (
    <PinInput.Root onValueComplete={(e) => alert(e.valueAsString)}>
      <PinInput.Label>Label</PinInput.Label>
      <PinInput.Control>
        {[0, 1, 2].map((id, index) => (
          <PinInput.Input key={id} index={index} />
        ))}
      </PinInput.Control>
      <PinInput.HiddenInput />
    </PinInput.Root>
  );
};
