import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
    VitePWA({
      // PWAのインストールプロンプトの表示方法を指定
      // 'prompt'の場合、ユーザーがPWAをインストールするかどうかを選択できる
      registerType: 'autoUpdate',
      devOptions: {
        // 開発環境でもPWA有効化
        enabled: true
      },
      manifest: {
        name: 'どっちお得くん',
        short_name: 'どっちお得くん',
        description: '物価上昇を耐え抜け',
        theme_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ]
});
