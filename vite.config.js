import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
  server: {
    port: "3000",
    proxy: {
      "^/api": {
        target:
          "https://yili-music-admin-1571394-1309336797.ap-shanghai.run.tcloudbase.com",
        changeOrigin: true,
      },
    },
  },
});
