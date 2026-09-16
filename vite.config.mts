import { defineConfig } from "vite-plus";
export default defineConfig({
  test: { clearMocks: false },
  run: {
    enablePrePostScripts: true,
    cache: {
      scripts: false,
      tasks: true,
    },
  },
});
