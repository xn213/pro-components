<template>
  <Rate v-bind="$attrs"
        v-on="$listeners"
        custom-icon="iconfont icon-star" />
</template>

<script>
import { Rate } from "iview";
export default {
  name: "XRate",
  components: {
    Rate,
  },
};
</script>
