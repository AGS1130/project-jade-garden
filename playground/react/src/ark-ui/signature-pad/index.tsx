import { SignaturePad } from "@ark-ui/react/signature-pad";

export const Basic = () => {
  return (
    <SignaturePad.Root>
      <SignaturePad.Label>Sign below</SignaturePad.Label>
      <SignaturePad.Control>
        <SignaturePad.Segment />
        <SignaturePad.ClearTrigger>Clear</SignaturePad.ClearTrigger>
        <SignaturePad.Guide />
      </SignaturePad.Control>
    </SignaturePad.Root>
  );
};
