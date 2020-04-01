import { ApplyPluginsType } from '/Users/jiayali/Desktop/umitest/node_modules/_@umijs_runtime@3.0.14@@umijs/runtime/dist/index.js';
import { plugin } from './plugin';

const routes = [
  {
    "path": "/",
    "component": (props) => require('react').createElement(require('/Users/jiayali/Desktop/umitest/node_modules/_@umijs_preset-dumi@1.0.13@@umijs/preset-dumi/lib/themes/default/layout.js').default, {
      ...{"menus":{"*":{"*":[{"path":"/","title":"Index","meta":{}}],"/blog":[{"title":"简介"},{"title":"辟邪剑谱","children":[{"path":"/blog/sword/test","title":"辟邪剑谱"}]},{"title":"降龙十八掌","children":[{"path":"/blog/eighteen/test","title":"降龙十八掌"}]}],"/components":[{"title":"简介"}]}},"locales":[],"navs":{"*":[{"path":"/blog","title":"Blog"},{"path":"/components","title":"Components"}]},"title":"xxx的博客","mode":"site"},
      ...props,
    }),
    "routes": [
      {
        "path": "/",
        "component": require('../../../docs/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
          "updatedTime": 1585709683299,
          "hero": {
            "title": "XXX的博客",
            "desc": "XXX的简介",
            "actions": [
              {
                "text": "开始启动",
                "link": "/blog"
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "Feature 1",
              "desc": "<div class=\"markdown\"><p>高内聚</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "Feature 2",
              "desc": "<div class=\"markdown\"><p>低耦合</p></div>"
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "Feature 3",
              "desc": "<div class=\"markdown\"><p>可伸缩</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": [],
          "title": "Index"
        },
        "title": "Index"
      },
      {
        "path": "/blog",
        "component": require('../../../docs/blog/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/index.md",
          "updatedTime": 1585708688518,
          "slugs": [
            {
              "depth": 1,
              "value": "简介",
              "heading": "简介"
            }
          ],
          "title": "简介",
          "nav": {
            "path": "/blog",
            "title": "Blog"
          }
        },
        "title": "简介"
      },
      {
        "path": "/blog/eighteen/test",
        "component": require('../../../docs/blog/eighteen/test.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/eighteen/test.md",
          "updatedTime": 1585484592786,
          "slugs": [
            {
              "depth": 1,
              "value": "降龙十八掌",
              "heading": "降龙十八掌"
            },
            {
              "depth": 3,
              "value": "亢龙有悔",
              "heading": "亢龙有悔"
            },
            {
              "depth": 3,
              "value": "飞龙在天",
              "heading": "飞龙在天"
            },
            {
              "depth": 3,
              "value": "见龙在田",
              "heading": "见龙在田"
            },
            {
              "depth": 3,
              "value": "潜龙勿用",
              "heading": "潜龙勿用"
            },
            {
              "depth": 3,
              "value": "震惊百里",
              "heading": "震惊百里"
            },
            {
              "depth": 3,
              "value": "或跃在渊",
              "heading": "或跃在渊"
            },
            {
              "depth": 3,
              "value": "突如其来",
              "heading": "突如其来"
            },
            {
              "depth": 3,
              "value": "双龙取水",
              "heading": "双龙取水"
            },
            {
              "depth": 3,
              "value": "神龙摆尾",
              "heading": "神龙摆尾"
            },
            {
              "depth": 3,
              "value": "利涉大川、鸿渐于陆",
              "heading": "利涉大川、鸿渐于陆"
            },
            {
              "depth": 3,
              "value": "密云不雨",
              "heading": "密云不雨"
            }
          ],
          "title": "降龙十八掌",
          "nav": {
            "path": "/blog",
            "title": "Blog"
          },
          "group": {
            "title": "Eighteen",
            "path": "/blog/eighteen"
          }
        },
        "title": "降龙十八掌"
      },
      {
        "path": "/blog/sword/test",
        "component": require('../../../docs/blog/sword/test.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/blog/sword/test.md",
          "updatedTime": 1585484600764,
          "slugs": [
            {
              "depth": 1,
              "value": "辟邪剑谱",
              "heading": "辟邪剑谱"
            }
          ],
          "title": "辟邪剑谱",
          "nav": {
            "path": "/blog",
            "title": "Blog"
          },
          "group": {
            "title": "Sword",
            "path": "/blog/sword"
          }
        },
        "title": "辟邪剑谱"
      },
      {
        "path": "/components",
        "component": require('../../../docs/components/index.md').default,
        "exact": true,
        "meta": {
          "filePath": "docs/components/index.md",
          "updatedTime": 1585712109650,
          "slugs": [
            {
              "depth": 1,
              "value": "antd 组件",
              "heading": "antd-组件"
            }
          ],
          "title": "antd 组件",
          "nav": {
            "path": "/components",
            "title": "Components"
          }
        },
        "title": "antd 组件"
      },
      {
        "path": "/blog/eighteen",
        "meta": {},
        "exact": true,
        "redirect": "/blog/eighteen/test"
      },
      {
        "path": "/blog/sword",
        "meta": {},
        "exact": true,
        "redirect": "/blog/sword/test"
      }
    ],
    "title": "xxx的博客"
  }
];

// allow user to extend routes
plugin.applyPlugins({
  key: 'patchRoutes',
  type: ApplyPluginsType.event,
  args: { routes },
});

export { routes };
