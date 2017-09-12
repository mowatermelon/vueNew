<template>
  <transition name="slide">
      <div class="showSetting mdui-container-fulid">
          <ul>
          	<li class="mdui-text-center bg_root set_title">个人设置</li>
            <li class="mdui-col-xs-12" v-for="sname in settingData"  @click="goUrl(sname.url,sname)"><i class="mdui-icon material-icons">{{sname.icon}}</i>{{sname.text}}</li>
          </ul>
      </div>
</transition>

</template>

<script>
import VueResource from 'vue-resource';
import Vue from 'vue';
const ERR_OK = 0;

Vue.use(VueResource);
export default {
  name: 'setting',
  data () {
    return {
      settingData: {},
      checkM: {
        'checkedL': false,
        'checkedH': false
      },
      selectNew: ''
    };
  },
  created () {
    this.$http.get('/api/setting').then(response => {
    response = response.body;
    if (response.errno === ERR_OK) {
      this.settingData = response.data;
    }

    }, response => {
      console.log(ERR_OK);
    });
  },
  methods: {
    toggle: function (item, paraNum, paracheck) {
      /*
      *@parameter item 获取当前的item
      *@parameter paraNum 获取当前的item对应那个属性值
      *@parameter paracheck 获取当前的item对应那个确认状态
      */
      this.selectNew = item.newId;
      for (var i in this.moodData) {
        if (this.moodData[i].newId.indexOf(item.newId) > -1) {
          if (paracheck === 'checkedL' && paraNum === 'loveNum') {
              this.checkM.checkedL = !this.checkM.checkedL;
              if (this.checkM.checkedL) {
                ++this.moodData[i].loveNum;
              } else {
                --this.moodData[i].loveNum;
              }
          } else if (paracheck === 'checkedH' && paraNum === 'hateNum') {
              this.checkM.checkedH = !this.checkM.checkedH;
              if (this.checkM.checkedH) {
                ++this.moodData[i].hateNum;
              } else {
                --this.moodData[i].hateNum;
              }
          }
        }

      }

    }

  }
};
</script>

<style>
.showSetting ul li{
  height: 40px;
  text-indent: 2em;
  line-height: 30px;
  border-bottom: 1px solid var(--c);
}
.showSetting ul li.set_title{
  height: 40px;
  text-indent: 0;
  line-height: 40px;
  color: #fff;
  border-bottom: 1px solid #fff;
}
</style>
