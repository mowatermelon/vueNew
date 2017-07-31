<template>
  <div class="header fixheader">
    <div class="input-group col-xs-8 pull-right">
        <input type="text" placeholder="请输入想要搜索的内容" id="looKey"/>
        <label class="input-group-addon glyphicon glyphicon-search searchIcon"></label>
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

<style>
.header .input-group{
    background: #fff;
    border-radius: 1rem;
}
.header .input-group .searchIcon{
    background: var(--c);
    border: 1px solid var(--c);
    border-left-width: 0;
    color: #fff;
    top:0;
    padding: 5px 12px;
}
.header .input-group #looKey{
  margin-right: 2rem;
  border: 1px solid var(--c);
  border-right-width: 0;
  outline:none;
  line-height: 2;
  border-radius: 1rem 0 0 1rem;
  text-indent: 2rem;
  width: 100%;
}
.header{
  background:#fff url(../../../static/img/MSHKLogo.png) no-repeat;
  background-size: 4rem 4rem;
  background-position: 2rem center;
  border-bottom: 1px solid var(--c);
  padding: 1rem 0;
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
