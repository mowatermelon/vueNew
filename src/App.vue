<template>
<div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <div class="tab">
      <div class="tab-item">
        <router-link to='/v-news'>主页</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/v-pic'>美图</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/v-mood'>心情</router-link>
      </div>
      <div class="tab-item">
        <router-link to='/v-setting'>设置</router-link>
      </div>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import header from '@/components/header/header';
import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.component('v-header', header);
Vue.use(VueResource);

export default {
  name: 'app',
  created: function() {
       this.$router.push('/v-login'); // 页面加载时跳转
  }
};
</script>

<style scoped>
a:active,a:hover,a:link,a:visited {
	text-decoration: none
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tab{
    border-top:1px solid var(--c);
    width: 100%;
    display: flex;
    position: fixed;
    bottom: 0;
    background-color: #fff;
}
.tab-item{
  width: 100%;
}
.tab-item a{
  display: block;
  line-height: 40px;
  text-decoration: none;
}
.router-link-active{
  background: rgb(50, 203, 230);
  color:#fff;
}
</style>
