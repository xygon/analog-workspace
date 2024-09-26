// analog-app/vite.config.ts
import analog from "file:///C:/work/git/xygon/analog-workspace/node_modules/.pnpm/@analogjs+platform@1.8.1_67bzvrjvyibpfqp4ufxs5cqxge/node_modules/@analogjs/platform/src/index.js";
import { defineConfig, splitVendorChunkPlugin } from "file:///C:/work/git/xygon/analog-workspace/node_modules/.pnpm/vite@5.4.8_@types+node@22.7.0_less@4.1.3_sass@1.79.3_stylus@0.59.0_terser@5.31.6/node_modules/vite/dist/node/index.js";
import { nxViteTsPaths } from "file:///C:/work/git/xygon/analog-workspace/node_modules/.pnpm/@nx+vite@19.8.0_@babel+traverse@7.25.6_@types+node@22.7.0_nx@19.8.0_typescript@5.4.5_vite@5.4_3y6nr6wwtpgbpgvwthju35r3ru/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
var __vite_injected_original_dirname = "C:\\work\\git\\xygon\\analog-workspace\\analog-app";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    root: __vite_injected_original_dirname,
    cacheDir: `../node_modules/.vite`,
    build: {
      outDir: "../dist/./analog-app/client",
      reportCompressedSize: true,
      target: ["es2020"]
    },
    server: {
      fs: {
        allow: ["."]
      }
    },
    plugins: [analog(), nxViteTsPaths(), splitVendorChunkPlugin()],
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["src/test-setup.ts"],
      include: ["**/*.spec.ts"],
      reporters: ["default"]
    },
    define: {
      "import.meta.vitest": mode !== "production"
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYW5hbG9nLWFwcC92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXHdvcmtcXFxcZ2l0XFxcXHh5Z29uXFxcXGFuYWxvZy13b3Jrc3BhY2VcXFxcYW5hbG9nLWFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcd29ya1xcXFxnaXRcXFxceHlnb25cXFxcYW5hbG9nLXdvcmtzcGFjZVxcXFxhbmFsb2ctYXBwXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi93b3JrL2dpdC94eWdvbi9hbmFsb2ctd29ya3NwYWNlL2FuYWxvZy1hcHAvdml0ZS5jb25maWcudHNcIjsvLy8gPHJlZmVyZW5jZSB0eXBlcz1cInZpdGVzdFwiIC8+XG5cbmltcG9ydCBhbmFsb2cgZnJvbSAnQGFuYWxvZ2pzL3BsYXRmb3JtJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgUGx1Z2luLCBzcGxpdFZlbmRvckNodW5rUGx1Z2luIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBueFZpdGVUc1BhdGhzIH0gZnJvbSAnQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW4nO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4ge1xuICByZXR1cm4ge1xuICAgIHJvb3Q6IF9fZGlybmFtZSxcbiAgICBjYWNoZURpcjogYC4uL25vZGVfbW9kdWxlcy8udml0ZWAsXG5cbiAgICBidWlsZDoge1xuICAgICAgb3V0RGlyOiAnLi4vZGlzdC8uL2FuYWxvZy1hcHAvY2xpZW50JyxcbiAgICAgIHJlcG9ydENvbXByZXNzZWRTaXplOiB0cnVlLFxuICAgICAgdGFyZ2V0OiBbJ2VzMjAyMCddLFxuICAgIH0sXG4gICAgc2VydmVyOiB7XG4gICAgICBmczoge1xuICAgICAgICBhbGxvdzogWycuJ10sXG4gICAgICB9LFxuICAgIH0sXG4gICAgcGx1Z2luczogW2FuYWxvZygpLCBueFZpdGVUc1BhdGhzKCksIHNwbGl0VmVuZG9yQ2h1bmtQbHVnaW4oKV0sXG4gICAgdGVzdDoge1xuICAgICAgZ2xvYmFsczogdHJ1ZSxcbiAgICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgICAgc2V0dXBGaWxlczogWydzcmMvdGVzdC1zZXR1cC50cyddLFxuICAgICAgaW5jbHVkZTogWycqKi8qLnNwZWMudHMnXSxcbiAgICAgIHJlcG9ydGVyczogWydkZWZhdWx0J10sXG4gICAgfSxcbiAgICBkZWZpbmU6IHtcbiAgICAgICdpbXBvcnQubWV0YS52aXRlc3QnOiBtb2RlICE9PSAncHJvZHVjdGlvbicsXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUVBLE9BQU8sWUFBWTtBQUNuQixTQUFTLGNBQXNCLDhCQUE4QjtBQUM3RCxTQUFTLHFCQUFxQjtBQUo5QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUN4QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixVQUFVO0FBQUEsSUFFVixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixzQkFBc0I7QUFBQSxNQUN0QixRQUFRLENBQUMsUUFBUTtBQUFBLElBQ25CO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixJQUFJO0FBQUEsUUFDRixPQUFPLENBQUMsR0FBRztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTLENBQUMsT0FBTyxHQUFHLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQztBQUFBLElBQzdELE1BQU07QUFBQSxNQUNKLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFlBQVksQ0FBQyxtQkFBbUI7QUFBQSxNQUNoQyxTQUFTLENBQUMsY0FBYztBQUFBLE1BQ3hCLFdBQVcsQ0FBQyxTQUFTO0FBQUEsSUFDdkI7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLHNCQUFzQixTQUFTO0FBQUEsSUFDakM7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
