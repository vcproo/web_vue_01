/*
 * @Author: han hants666@163.com
 * @Date: 2021-07-03 09:22:30
 * @LastEditors: han hants666@163.com
 * @LastEditTime: 2022-10-28 11:31:01
 * @FilePath: \web_vue_01\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
