<template>
  <transition name="fade">
    <div class="showMood">
        <ul class="list-group">
          <li class="list-group-item col-xs-12"  v-for="(item,index) in moodData" :id="'mood-' + index">
            <a class="newlist" @click="godetail(item)">
              <span class="col-xs-12">
                心情发布时间：<span class="text-muted">{{item.upTime}}<br/><br/><br/></span>
                <p class="row help-block">
                  <span class="col-xs-3 glyphicon glyphicon-thumbs-up text-nowrap" @click.stop="toggle(item,'loveNum','checkedL')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedL}">{{item.loveNum}}</span>
                  <span class="col-xs-3 glyphicon glyphicon-thumbs-down text-nowrap"  @click.stop="toggle(item,'hateNum','checkedH')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedH}">{{item.hateNum}}</span>
                  <span class="col-xs-6 text-nowrap"  @click.stop="++item.visitNum">阅读量({{item.visitNum}})</span>
                </p>
              </span>
            </a>
          </li>
          <p class="col-xs-12 text-center last-p">我是有底线的</p>
          <p class="col-xs-12" v-show="!moodData.length">心情列表为空</p>
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
.showMood .list-group .list-group-item{
	padding: 0;
}
.showMood .list-group .list-group-item .newlist .col-xs-12{
	  color: #fff;
	  background-color: var(--c);
    background-image: url(../../../static/img/MSHKLogo.jpg);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
}
.showMood .list-group .list-group-item .newlist .col-xs-12:hover{
    background-size: 150% 150%;
}
</style>
