const config = require('tailwindcss/defaultConfig')
const merge = require('deepmerge')

module.exports = merge(config, {
  purge: {
    enabled: process.env.NODE_ENV !== 'development',
    content: [
      './src/**/*.html',
      './src/**/*.tsx',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {},
      animation: {}
    },
    colors: {
      'fff': '#fff',
    },
    backgroundColor: theme => ({
      ...theme('colors'),
    }),
    backgroundImage:{},
    borderColor: theme => ({
      ...theme('colors'),
    }),
    textColor: theme => ({
      ...theme('colors'),
    }),
    spacing: {
      5: '5px',
      10: '10px',
      20: '20px',
      30: '30px',
      40: '40px',
      50: '50px',
      80: '80px',
      100: '100px',
      150: '150px',
      200: '200px'
    },
    screens: {
      // 'portrait': {'raw': '(orientation:portrait) and (max-width:2400px)'},
      // 'landscape': {'raw': '(orientation:landscape) and (max-width:3200px)'},
      // 'piano': {'raw': '(width:3840px) and (height:1080px)'}
    },
    maxHeight:{
 
    },
    minWidth: {
 
    },
    borderWidth: {
 
    },
    borderRadius: {
 
    },
    fontSize: (theme) => {
      return {
        // 生成 偶数字号大小的字体配置
        ...Array(41).fill(null).reduce((a, n, k) => ({...a, [k * 2]: `${k * 2}px`}), {})
      }
    },
    lineHeight: (theme) => {
      return {...theme('spacing')}
    },
    boxShadow: {
 
    },
    opacity: {
    }
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    // ...
   container: false,
  },
  plugins: [],
})