import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "@vant/auto-import-resolver";
import fs from 'fs';
import path from 'path';
// 读取和解析 JSON 文件
const configPath = path.resolve(__dirname, 'public', 'appconfig.json');
const configData = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      registerType: 'autoUpdate',
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },


      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },

      manifest: {
        name: 'pwaapp',
        short_name: 'pwaapp',
        description: 'pwaapp',
        theme_color: '#ffffff',
        display: "standalone",
        orientation: "any",
        scope: "/",
        start_url: "/", 

        screenshots: [
          {
            src: 'app-screenshots-1.png',
            type: "image/png",
            sizes: "360x640",
            form_factor: "narrow"
          },
          {
            src: 'app-screenshots-2.png',
            type: "image/png",
            sizes: "360x640",
            form_factor: "narrow"
          },
          {
            src: 'app-screenshots-3.png',
            type: "image/png",
            sizes: "360x640",
            form_factor: "narrow"
          }
        ],
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: ['any', 'maskable'],
          },
        ],
      },


      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    })
  ],
  css: {
    postcss: {
      plugins: [
        // postcssmobileforever({
        //   appSelector: "#app", // 页面最外层选择器，例如“#app”，用于设置在桌面端和移动端横屏时的居中样式
        //   maxDisplayWidth: 750, // 限制视口单位的最大宽度
        // }),
        // postcsspxtoviewport8plugin({
        //   unitToConvert: 'px',
        //   viewportWidth: 750,
        //   unitPrecision: 5, // 单位转换后保留的精度
        //   propList: ['*'], // 能转化为vw的属性列表
        //   viewportUnit: 'vw', // 希望使用的视口单位
        //   fontViewportUnit: 'vw', // 字体使用的视口单位
        //   selectorBlackList: [], // 需要忽略的CSS选择器，不会转为视口单位，使用原有的px等单位。
        //   minPixelValue: 1, // 设置最小的转换数值，如果为1的话，只有大于1的值会被转换
        //   mediaQuery: true, // 媒体查询里的单位是否需要转换单位
        //   replace: true, //  是否直接更换属性值，而不添加备用属性
        //   exclude: [/node_modules\/ant-design-vue/], // 忽略某些文件夹下的文件或特定文件，例如 'node_modules' 下的文件
        //   include: [], // 如果设置了include，那将只有匹配到的文件才会被转换
        //   landscape: false, // 是否添加根据 landscapeWidth 生成的媒体查询条件 @media (orientation: landscape)
        //   landscapeUnit: 'vw', // 横屏时使用的单位
        //   landscapeWidth: 1024, // 横屏时使用的视口宽度
        // }),
      ],
    },
  },
  // 将配置数据通过自定义的全局变量暴露
  define: {
    'global.config': JSON.stringify(configData), // 直接将配置作为全局变量
  },
})