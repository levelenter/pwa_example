<template>
  <div style="border: solid 1px gray; border-radius: 10px" class="mx-3 h-100">
    <iframe
      title="ar"
      :src="'./ar.html'"
      allow="camera; microphone"
      style="height: 100vh"
      class="w-100"
    ></iframe>
  </div>
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
