<template>
  <div class="home h-100 w-100">
    <div class="d-flex justify-content-center align-items-center w-100 h-100">
      <div class="w-100">
        <div class="rounded m-4 text-start card p-3">
          このサンプルARページは、Progressive Web
          Application(PWA)技術を使って構築されています。オフラインで利用することができ、ホーム画面にインストールすることができます。
        </div>

        <router-link
          class="btn btn-lg btn-outline-secondary h-25 w-50 align-middle"
          to="/about"
          >ARページへ
        </router-link>

        <div class="my-4">
          <a
            class="btn btn-lg btn-outline-secondary h-25 w-50 align-middle"
            href="https://google.com"
            >PWAでのキャッシュ外（google）にリンクします。</a
          >
        </div>

        <pwa-installer />
      </div>
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
