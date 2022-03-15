import { defineConfig } from 'umi';

export default defineConfig({
  title: '测试-主应用',
  define: {
    H5_ENV: 'test'
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