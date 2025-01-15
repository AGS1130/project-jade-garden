import { Menu } from "@ark-ui/react/menu";
import { menuStyledSlots as minimal } from "@spark-css/theme-minimal";
import { menuStyledSlots as park } from "@spark-css/theme-park";
import { menuStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useState } from "react";
import { type Theme, getTheme } from "../utils";

export const Checkbox = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [checked, setChecked] = useState(false);

  return (
    <Menu.Root>
      <Menu.Trigger className={clsx(styledSlots.trigger)}>Open menu</Menu.Trigger>
      <Menu.Positioner className={clsx(styledSlots.positioner)}>
        <Menu.Content className={clsx(styledSlots.content)}>
          <Menu.CheckboxItem checked={checked} onCheckedChange={setChecked} value="checked">
            <Menu.ItemIndicator className={clsx(styledSlots.itemIndicator)}>✅</Menu.ItemIndicator>
            <Menu.ItemText className={clsx(styledSlots.itemText)}>Check me</Menu.ItemText>
          </Menu.CheckboxItem>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
