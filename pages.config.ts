import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'Vitess-Uni',
    navigationStyle: 'custom',
  },
  tabBar: {
    color: '#CCCED5',
    selectedColor: '#5A7EF8',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [{
      pagePath: 'pages/home/index',
      iconPath: 'static/tabbar/home.png',
      selectedIconPath: 'static/tabbar/home-active.png',
      text: '首页',
    }, {
      pagePath: 'pages/mine/index',
      iconPath: 'static/tabbar/mine.png',
      selectedIconPath: 'static/tabbar/mine.png',
      text: '我的',
    }],
  },
})
