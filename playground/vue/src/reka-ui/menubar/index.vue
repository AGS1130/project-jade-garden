<script setup lang="ts">
import { Icon } from "@iconify/vue";
import type { MenubarItemEmits } from "reka-ui";
import {
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarItemIndicator,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarRoot,
  MenubarSeparator,
  MenubarTrigger,
  useEmitAsProps,
} from "reka-ui";
import { ref } from "vue";

const emits = defineEmits<MenubarItemEmits>();
const currentMenu = ref("");
const checkboxOne = ref(false);
const checkboxTwo = ref(false);
const person = ref("pedro");
function handleClick() {
  // eslint-disable-next-line no-alert
  alert("hello!");
}
</script>

<template>
  <div>
    <MenubarRoot v-model="currentMenu" :loop="true">
      <MenubarMenu value="file">
        <MenubarTrigger> File </MenubarTrigger>
        <MenubarPortal to="#here">
          <MenubarContent align="start" :side-offset="5" :align-offset="-3">
            <MenubarItem v-bind="useEmitAsProps(emits)">
              New Tab
              <div>⌘ T</div>
            </MenubarItem>
            <MenubarItem>
              New Window
              <div>⌘ N</div>
            </MenubarItem>
            <MenubarItem disabled> New Incognito Window </MenubarItem>
            <MenubarSeparator />
            <!-- <MenubarSub>
            <MenubarSubTrigger
             
            >
              Share
              <div
               
              >
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </MenubarSubTrigger>
            <MenubarPortal to="#here">
              <MenubarSubContent
               
                :align-offset="-5"
              >
                <MenubarItem
                 
                >
                  Email Link
                </MenubarItem>
                <MenubarItem
                 
                >
                  Messages
                </MenubarItem>
                <MenubarItem
                 
                >
                  Notes
                </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub> -->
            <MenubarSeparator />
            <MenubarItem>
              Print…
              <div>⌘ P</div>
            </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger> Edit </MenubarTrigger>
        <MenubarPortal to="#here">
          <MenubarContent align="start" :side-offset="5" :align-offset="-3">
            <MenubarItem>
              Undo
              <div>⌘ Z</div>
            </MenubarItem>
            <MenubarItem>
              Redo
              <div>⇧ ⌘ Z</div>
            </MenubarItem>
            <MenubarSeparator />
            <!-- <MenubarSub>
            <MenubarSubTrigger
             
            >
              Find
              <div
               
              >
                <Icon icon="radix-icons:chevron-right" />
              </div>
            </MenubarSubTrigger>

            <MenubarPortal to="#here">
              <MenubarSubContent
               
                :align-offset="-5"
              >
                <MenubarItem
                 
                >
                  Search the web…
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem
                 
                >
                  Find…
                </MenubarItem>
                <MenubarItem
                 
                >
                  Find Next
                </MenubarItem>
                <MenubarItem
                 
                >
                  Find Previous
                </MenubarItem>
              </MenubarSubContent>
            </MenubarPortal>
          </MenubarSub> -->
            <MenubarSeparator />
            <MenubarItem> Cut </MenubarItem>
            <MenubarItem> Copy </MenubarItem>
            <MenubarItem> Paste </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger> View </MenubarTrigger>
        <MenubarPortal to="#here">
          <MenubarContent align="start" :side-offset="5" :align-offset="-14">
            <MenubarCheckboxItem v-model="checkboxOne">
              <MenubarItemIndicator>
                <Icon icon="radix-icons:check" />
              </MenubarItemIndicator>
              Show Bookmarks
              <div>⌘+B</div>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem v-model="checkboxTwo">
              <MenubarItemIndicator>
                <Icon icon="radix-icons:check" />
              </MenubarItemIndicator>
              Show Full URLs
            </MenubarCheckboxItem>
            <MenubarSeparator />
            <MenubarItem>
              Reload
              <div>⌘ R</div>
            </MenubarItem>
            <MenubarItem disabled>
              Force Reload
              <div>⇧ ⌘ R</div>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem> Toggle Fullscreen </MenubarItem>
            <MenubarSeparator />
            <MenubarItem> Hide Sidebar </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>

      <MenubarMenu>
        <MenubarTrigger> Profiles </MenubarTrigger>
        <MenubarPortal to="#here">
          <MenubarContent align="start" :side-offset="5" :align-offset="-14">
            <MenubarRadioGroup v-model="person">
              <MenubarRadioItem value="pedro">
                <MenubarItemIndicator>
                  <Icon icon="radix-icons:dot-filled" />
                </MenubarItemIndicator>
                Pedro Duarte
              </MenubarRadioItem>
              <MenubarRadioItem value="colm">
                <MenubarItemIndicator>
                  <Icon icon="radix-icons:dot-filled" />
                </MenubarItemIndicator>
                Colm Tuite
              </MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSeparator />
            <MenubarItem @click="handleClick"> Edit… </MenubarItem>
            <MenubarSeparator />
            <MenubarItem> Add Profile… </MenubarItem>
          </MenubarContent>
        </MenubarPortal>
      </MenubarMenu>
    </MenubarRoot>

    <div id="here" />
  </div>
</template>
