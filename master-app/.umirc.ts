import { defineConfig } from 'umi';
import Routes from './src/routes'

export default defineConfig({
  title: '主应用',
  nodeModulesTransform: {
    type: 'none',
  },
  define: {
    H5_ENV: 'production',
  },
  base: '/',
  publicPath: '/',
  hash: true,
  routes: [
    ...Routes,
  ],
  extraPostCSSPlugins: [
    // require('postcss-import'),
    require('tailwindcss'),
    // require('postcss-nested'), // or require('postcss-nesting')
    require('autoprefixer'),
  ],
  fastRefresh: {},
  qiankun:{
    master: {
      apps: [
        {
          name: 'app-1',
          entry: '//localhost:8001'
        }
      ]
    }
  }
});
