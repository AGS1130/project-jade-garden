import { Combobox, createListCollection } from "@ark-ui/react/combobox";
import { Portal } from "@ark-ui/react/portal";
import { comboboxStyledSlots as minimal } from "@spark-css/theme-minimal";
import { comboboxStyledSlots as park } from "@spark-css/theme-park";
import { comboboxStyledSlots as shadcn } from "@spark-css/theme-shadcn";
import { clsx } from "clsx";
import { useMemo, useState } from "react";

const initialItems = ["React", "Solid", "Vue"];
import { type Theme, getTheme } from "../utils";

export const Basic = ({ theme }: { theme: Theme }) => {
  const styledSlots = getTheme({ minimal, park, shadcn }, theme);
  const [items, setItems] = useState(initialItems);

  const collection = useMemo(() => createListCollection({ items }), [items]);

  const handleInputChange = (details: Combobox.InputValueChangeDetails) => {
    setItems(initialItems.filter((item) => item.toLowerCase().includes(details.inputValue.toLowerCase())));
  };

  return (
    <Combobox.Root className={clsx(styledSlots.root)} collection={collection} onInputValueChange={handleInputChange}>
      <Combobox.Label className={clsx(styledSlots.label)}>Framework</Combobox.Label>
      <Combobox.Control className={clsx(styledSlots.control)}>
        <Combobox.Input className={clsx(styledSlots.input)} />
        <Combobox.Trigger className={clsx(styledSlots.trigger)}>Open</Combobox.Trigger>
        <Combobox.ClearTrigger className={clsx(styledSlots.clearTrigger)}>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner className={clsx(styledSlots.positioner)}>
          <Combobox.Content className={clsx(styledSlots.content)}>
            <Combobox.ItemGroup className={clsx(styledSlots.itemGroup)}>
              <Combobox.ItemGroupLabel className={clsx(styledSlots.itemGroupLabel)}>Frameworks</Combobox.ItemGroupLabel>
              {collection.items.map((item) => (
                <Combobox.Item className={clsx(styledSlots.item)} key={item} item={item}>
                  <Combobox.ItemText className={clsx(styledSlots.itemText)}>{item}</Combobox.ItemText>
                  <Combobox.ItemIndicator className={clsx(styledSlots.itemIndicator)}>✓</Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
};
