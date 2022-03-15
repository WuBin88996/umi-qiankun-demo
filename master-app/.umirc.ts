import { defineConfig } from 'umi';
import {MicroApp} from './src/config'
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
  routes: [
    ...Routes,
    ...MicroApp
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
