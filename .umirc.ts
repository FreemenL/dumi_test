import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'xxx的博客',
  mode: 'site',
  menus: {
    '/blog': [
      {
        title: '简介',
      },
      {
        title: '辟邪剑谱',
        children: ['blog/sword/test'],
      },
      {
        title: '降龙十八掌',
        children: ['blog/eighteen/test'],
      },
    ],
    '/components': [
      {
        title: '简介',
      },
    ]
  },
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
});
