<template>
  <div class="container d-flex justify-content-center h-100">
    <div class="align-items-center w-100 h-100 mb-5">
      <div class="px-3">
        <div class="rounded text-start card p-3 w-100">
          このサンプルARページは、Progressive Web
          Application(PWA)技術を使って構築されています。オフラインで利用することができ、ホーム画面にインストールすることができます。
        </div>
      </div>

      <div class="my-4 px-3">
        <router-link
          class="btn btn-lg btn-outline-secondary h-25 w-100 align-middle"
          to="/about"
          >ARページへ
        </router-link>
      </div>

      <div class="my-4 px-3">
        <a
          class="btn btn-lg btn-outline-secondary h-25 w-100 align-middle fs-6"
          href="https://google.com"
          >PWAでのキャッシュ外（google）にリンクします。</a
        >
      </div>

      <pwa-installer class="w-100 h-100 px-3" />

      <div class="h-50"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PwaInstaller from "../components/PwaInstaller.vue";
export default defineComponent({
  components: { PwaInstaller },
});
</script>
