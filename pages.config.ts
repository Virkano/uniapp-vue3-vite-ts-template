import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [
    {
      name: "Home",
      path: "pages/index/index",
      style: {
        "navigationBarTitleText": "首页"
        // "navigationStyle": "custom"
      },
      meta: {
        "tabBar": true
      }
    },
    {
      name: "Demo",
      path: "pages/demo/index",
      style: {
        "navigationBarTitleText": "Demo"
      },
      meta: {
        "tabBar": true
      }
    },
    {
      name: "About",
      path: "pages/about/index",
      style: {
        "navigationBarTitleText": "关于"
      },
      meta: {
        "ignoreAuth": true,
        "tabBar": true
      }
    },
    {
      name: "Login",
      path: "pages/login/index",
      style: {
        "navigationBarTitleText": "登录"
      },
      meta: {
        "ignoreAuth": true
      }
    },
    {
      name: "Log",
      path: "pages/log/index",
      style: {
        "navigationBarTitleText": "日志"
      }
    },
    {
      name: "NotFound",
      path: "pages/notFound/404",
      style: {
        "navigationBarTitleText": "Not Found"
      },
      meta: {
        "ignoreAuth": true
      }
    },
    {
      name: "NotFound",
      path: "pages/demo/pinia",
      style: {
        "navigationBarTitleText": "pinia + 持久化"
      },
      meta: {
        "ignoreAuth": true
      }
    },
    {
      name: "NotFound",
      path: "pages/demo/mp-weixin-share",
      style: {
        "navigationBarTitleText": "微信分享"
      },
      meta: {
        "ignoreAuth": true
      }
    }
  ],
  subPackages: [
    {
      root: "pagesA",
      pages: [
        {
          path: "list/test1/index",
          style: {
            "navigationBarTitleText": "test1"
          },
          meta: {
            "ignoreAuth": true
          }
        },
        {
          path: "list/test2/index",
          style: {
            "navigationBarTitleText": "test2",
            "navigationStyle": "custom"
          },
          meta: {
            "ignoreAuth": true
          }
        }
      ]
    },
    {
      root: "pagesB",
      pages: [
        {
          path: "detail/index",
          style: {
            "navigationBarTitleText": "Detail"
          },
          meta: {
            "ignoreAuth": true
          }
        }
      ]
    }
  ],
  globalStyle: {
    "navigationBarTextStyle": "black",
    "navigationBarTitleText": "uni-app",
    "navigationBarBackgroundColor": "#F2F2F2",
    "backgroundColor": "#F2F2F2",
    "navigationStyle": "default",
    "renderingMode": "seperated",
    "pageOrientation": "portrait"
  },
  tabBar: {
    color: "#474747",
    selectedColor: "#9BC6FC",
    backgroundColor: "#F2F2F2",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "static/images/tabBar/home.png",
        selectedIconPath: "static/images/tabBar/selectedHome.png"
      },
      {
        pagePath: "pages/demo/index",
        text: "Demo",
        iconPath: "static/images/tabBar/demo.png",
        selectedIconPath: "static/images/tabBar/selectedDemo.png"
      },
      {
        pagePath: "pages/about/index",
        text: "关于",
        iconPath: "static/images/tabBar/about.png",
        selectedIconPath: "static/images/tabBar/selectedAbout.png"
      }
    ]
  },
  easycom: {
    autoscan: true,
    custom: {
      "fui-(.*)": "@/components/firstui/fui-$1/fui-$1.vue"
    }
  }
}
)
