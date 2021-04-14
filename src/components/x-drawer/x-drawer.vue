<template>
  <div class='x-drawer'>
    <Drawer v-bind="$attrs"
            v-on="$listeners">
      <!-- ↓↓ 插槽内容 ↓↓ -->
      <template>
        <slot></slot>
      </template>
      <!-- ↑↑ 插槽内容 ↑↑ -->

      <!-- trigger -->
      <div class="x-drawer-trigger-wrapper">
        <slot name="trigger"></slot>
      </div>

    </Drawer>
  </div>
</template>

<script>
import { Drawer } from "iview";
export default {
  name: "XDrawer",
  props: {},
  components: {
    Drawer,
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>
