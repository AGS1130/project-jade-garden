<script setup lang="ts">
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "reka-ui";
</script>

<template>
  <TabsRoot :default-value="1">
    <TabsList aria-label="Manage your account">
      <TabsTrigger :value="1"> Account </TabsTrigger>
      <TabsTrigger value="tab2"> Password </TabsTrigger>
    </TabsList>
    <TabsContent :value="1">
      <p>Make changes to your account here. Click save when you're done.</p>
    </TabsContent>
    <TabsContent value="tab2">
      <p>Change your password here. After saving, you'll be logged out.</p>
    </TabsContent>
  </TabsRoot>
</template>
