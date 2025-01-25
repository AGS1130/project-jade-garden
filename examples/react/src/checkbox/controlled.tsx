import { Checkbox } from "@ark-ui/react/checkbox";
import { minimal, park, shadcn } from "@spark-css/themes";
import { clsx } from "clsx";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Controlled = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme(
    { minimal: minimal.checkbox, park: park.checkbox, shadcn: shadcn.checkbox },
    theme
  );
  const [checked, setChecked] = useState<Checkbox.CheckedState>(true);

  return (
    <Checkbox.Root checked={checked} onCheckedChange={(e) => setChecked(e.checked)} className={clsx(styledSlots.root)}>
      <Checkbox.Label className={clsx(styledSlots.label)}>Checkbox</Checkbox.Label>
      <Checkbox.Control className={clsx(styledSlots.control)}>
        <Checkbox.Indicator className={clsx(styledSlots.indicator)}>
          <CheckIcon />
        </Checkbox.Indicator>
      </Checkbox.Control>
      <Checkbox.HiddenInput />
    </Checkbox.Root>
  );
};
