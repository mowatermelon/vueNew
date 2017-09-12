<template>
  <div class="header fixheader mdui-headroom mdui-row">
      <div class="mdui-textfield mdui-textfield-expandable mdui-float-right">
        <button class="mdui-textfield-icon mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">search</i></button>
        <input class="mdui-textfield-input" type="text" placeholder="搜索的内容" id="looKey"/>
        <button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>
      </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'header',
  prop: {
    header: {
      type: 'object'
    }
  }
};
</script>

<style scoped>
.mdui-textfield-expandable.mdui-textfield-expanded {
    width: 60%;
}
.mdui-textfield-expandable.mdui-float-right{
  margin-right: 1rem;
}
.header{
  background:#fff url(../../../static/img/MSHKLogo.png) no-repeat;
  background-size: 4rem 4rem;
  background-position: 2rem center;
  border-bottom: 1px solid var(--c);
  padding: 0.8rem 0;
}
.fixheader{
  position: fixed;
  left:0;
  right:0;
}
.fixheader{
  top:0;
  z-index: 2;
}
</style>
