import { defineConfig } from 'umi';

export default defineConfig({
  title: '开发-主应用',
  define: {
    H5_ENV: 'development'
  },
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
})