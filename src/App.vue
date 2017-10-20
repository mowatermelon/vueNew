<template>
<div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <div class="fixbottom mdui-headroom">
      <div class="mdui-bottom-nav">
        <router-link class="mdui-ripple" to='/v-news'>
          <i class="mdui-icon material-icons">home</i>
          <label>主页</label>
        </router-link>
        <router-link class="mdui-ripple" to='/v-pic'>
          <i class="mdui-icon material-icons">picture_in_picture</i>
          <label>美图</label>
        </router-link>
        <router-link class="mdui-ripple" to='/v-mood'>
          <i class="mdui-icon material-icons">mood</i>
          <label>心情</label>
        </router-link>
        <router-link class="mdui-ripple" to='/v-setting'>
          <i class="mdui-icon material-icons">settings</i>
          <label>设置</label>
        </router-link>
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
#app,body{
  overflow: hidden;
}
#app div:nth-child(2){
  margin: 4.7em auto 7em auto;
}
.fixbottom{
  border-top: 1px solid var(--c);
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  z-index: 2;
  background-color: #fff;
}
</style>
