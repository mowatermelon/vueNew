<template>
  <transition name="fade">
    <div class="mdui-container-fulid">
        <ul class="mdui-list">
          <li class="mdui-list-item showMood"  v-for="(item,index) in moodData" :id="'mood-' + index">
            <a class="newlist" @click="godetail(item)">
                  心情发布时间：<span class="text-muted">{{item.upTime}}<br/><br/><br/></span>
                  <span>{{item.name}}<br/></span>
                  <div class="mdui-row">
                    <span class="mdui-col-xs-3 text-nowrap" @click.stop="toggle(item,'loveNum','checkedL')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedL}"><i class="mdui-icon material-icons">thumb_up</i>{{item.loveNum}}</span>
                    <span class="mdui-col-xs-3 text-nowrap"  @click.stop="toggle(item,'hateNum','checkedH')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedH}"><i class="mdui-icon material-icons">thumb_down</i>{{item.hateNum}}</span>
                    <span class="mdui-col-xs-6 text-nowrap"  @click.stop="++item.visitNum">阅读量({{item.visitNum}})</span>
                  </div>
            </a>
          </li>
          <p class="mdui-col-xs-12 mdui-text-center last-p">我是有底线的</p>
          <p class="mdui-col-xs-12" v-show="!moodData.length">心情列表为空</p>
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
  name: 'mood',
  data () {
    return {
      moodData: {},
      checkM: {
        'checkedL': false,
        'checkedH': false
      },
      selectNew: ''
    };
  },
  created () {
    this.$http.get('/api/mood').then(response => {
    response = response.body;
    if (response.errno === ERR_OK) {
      this.moodData = response.data;
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
.mdui-list-item.showMood{
	  color: #757575;
	  background-color: var(--c);
    background-image: url(../../../static/img/MSHKLogo.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
}
.mdui-list-item:hover{
    background-size: 150% 150%;
}
.text-nowrap .mdui-icon{
  font-size: 1rem;
}
</style>
