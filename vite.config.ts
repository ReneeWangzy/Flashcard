import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import UnpluginSvgComponent from 'unplugin-svg-component/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            'createFetch',
            'useInfiniteScroll',
            'refDebounced',
            'useScroll',
            'useLocalStorage',
          ],
        },
      ],
      dts: './src/types/auto-imports.d.ts',
      dirs: ['./src/**/*'],
      vueTemplate: true,
    }),

    Components({
      dirs: ['./src/components', './src/layout', './src/views'],
      dts: './src/types/components.d.ts',
    }),
    UnpluginSvgComponent({
      iconDir: './src/assets',
      dts: true,
      dtsDir: './src/types',
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
