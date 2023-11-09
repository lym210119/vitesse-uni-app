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
    navigationBarTitleText: '电子签',
    navigationStyle: 'custom',
  },
  tabBar: {
    color: '#CCCED5',
    selectedColor: '#5A7EF8',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [{
      pagePath: 'pages/home/index',
      iconPath: 'static/images/tabbar/index.png',
      selectedIconPath: 'static/images/tabbar/index-active.png',
      text: '首页',
    }, {
      pagePath: 'pages/audit/index',
      iconPath: 'static/images/tabbar/audit.png',
      selectedIconPath: 'static/images/tabbar/audit-active.png',
      text: '审批',
    }, {
      pagePath: 'pages/contract/index',
      iconPath: 'static/images/tabbar/contract.png',
      selectedIconPath: 'static/images/tabbar/contract-active.png',
      text: '合同',
    }, {
      pagePath: 'pages/my/index',
      iconPath: 'static/images/tabbar/my.png',
      selectedIconPath: 'static/images/tabbar/my-active.png',
      text: '我的',
    }],
  },
})
