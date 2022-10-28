<!--
 * @Author: han hants666@163.com
 * @Date: 2021-07-03 09:22:30
 * @LastEditors: han hants666@163.com
 * @LastEditTime: 2022-10-28 17:05:23
 * @FilePath: \web_vue_01\src\App.vuenpm install babel-plugin-component -D
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
     <!-- 头部 -->
     <WebHeader></WebHeader>
    <el-container style="height: 800px; border: 1px solid #eee">
      <!-- 导航 -->
      <Navigation></Navigation>
      <!-- 内容 -->
      <Content></Content>
    </el-container>
    <!-- 底部 -->
    <WebFooter></WebFooter>
  </div>
</template>

<script>
import WebHeader from './components/WebHeader.vue';
import Navigation from './components/Navigation.vue';
import Content from './components/Content.vue';
import WebFooter from './components/WebFooter.vue';
export default {
  name: 'App',
  components:{
    Navigation,
    Content,
    WebHeader,
    WebFooter
  },

}
</script>

<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
