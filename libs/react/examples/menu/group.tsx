import { Menu } from "@ark-ui/react/menu";
import { menuStyledSlots as minimal } from "@spark-css/theme-minimal";
import { menuStyledSlots as park } from "@spark-css/theme-park";
import { menuStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { type Theme, getTheme } from "../utils";

export const Group = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);

  return (
    <Menu.Root>
      <Menu.Trigger className={clsx(styledSlots.trigger)}>
        Open menu <Menu.Indicator className={clsx(styledSlots.indicator)}>➡️</Menu.Indicator>
      </Menu.Trigger>
      <Menu.Positioner className={clsx(styledSlots.positioner)}>
        <Menu.Content className={clsx(styledSlots.content)}>
          <Menu.ItemGroup className={clsx(styledSlots.itemGroup)}>
            <Menu.ItemGroupLabel className={clsx(styledSlots.itemGroupLabel)}>JS Frameworks</Menu.ItemGroupLabel>
            <Menu.Item value="react" className={clsx(styledSlots.item)}>
              React
            </Menu.Item>
            <Menu.Item value="solid" className={clsx(styledSlots.item)}>
              Solid
            </Menu.Item>
            <Menu.Item value="vue" className={clsx(styledSlots.item)}>
              Vue
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup className={clsx(styledSlots.itemGroup)}>
            <Menu.ItemGroupLabel className={clsx(styledSlots.itemGroupLabel)}>CSS Frameworks</Menu.ItemGroupLabel>
            <Menu.Item value="panda" className={clsx(styledSlots.item)}>
              Panda
            </Menu.Item>
            <Menu.Item value="tailwind" className={clsx(styledSlots.item)}>
              Tailwind
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};
