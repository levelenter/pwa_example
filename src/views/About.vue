<template>
  <iframe
    :src="'./ar.html'"
    allow="camera; microphone"
    style="height: 100vh; width: 100%"
  />
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default defineComponent({
  components: {},
  props: {},
  setup: () => {
    /**
     * 動的ラベル
     */
    const title = ref("About");
    /**
     * プロパティ
     */
    const router = useRouter();

    return {
      title,
    };
  },
});
</script>
