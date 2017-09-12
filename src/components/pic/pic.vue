<template>
  <transition name="slide">
    <div class="mdui-container-fulid">
        <div id="myCarousel" class="carousel">
          <swipe class="my-swipe" :speed="100" :show-indicators="false" :no-drag="true">
            <swipe-item v-for="(pic, idx) in img" key="idx"><img :src="pic.src"/></swipe-item>
          </swipe>
        </div>
        <ul class="mdui-list">
          <li class="mdui-col-xs-6 mdui-col-sm-4 mdui-list-item"  v-for="(item,index) in picData" :id="'pic-' + index">
            <a class="thumbnail" @click="godetail(item)" :title='item.newTest.substring(0,20)'>
              <div class="mdui-card">
                <div class="mdui-card-media">
                  <img :src="item.imgUrl"/>
                  <div class="mdui-card-media-covered">
                    <div class="mdui-card-primary showPic">
                      <div class="mdui-card-primary-title">{{item.name}}</div>
                      <div class="mdui-card-primary-subtitle">{{item.upTime}}</div>
                    </div>
                  </div>
                </div>
                <div class="mdui-card-actions  mdui-center">
                  <a class="mdui-col" @click.stop="toggle(item,'loveNum','checkedL')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedL}"><i class="mdui-icon material-icons">thumb_up</i>{{item.loveNum}}</a>
                  <a class="mdui-col"  @click.stop="toggle(item,'hateNum','checkedH')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedH}"><i class="mdui-icon material-icons">thumb_down</i>{{item.hateNum}}</a>
                </div>
              </div>
            </a>
          </li>
          <p class="mdui-col-xs-12 mdui-text-center last-p">我是有底线的</p>
          <p class="mdui-col-xs-12" v-show="!picData.length">新闻列表为空</p>
        </ul>
    </div>
</transition>
</template>

<script>

require('./vue-swipe.js');
import vueSwipe from './swipe';
import vueSwipeItem from './swipe-item';
import VueResource from 'vue-resource';
import Vue from 'vue';
const ERR_OK = 0;

Vue.use(VueResource);
Vue.component('swipe', vueSwipe);
Vue.component('swipe-item', vueSwipeItem);
export default {
  name: 'pic',
  data () {
    return {
      picData: {},
      checkM: {
        'checkedL': false,
        'checkedH': false
      },
      selectNew: '',
      img: [
        {src: '../../../static/img/view_01.jpg'},
        {src: '../../../static/img/view_02.jpg'},
        {src: '../../../static/img/view_03.jpg'}
      ]
    };
  },
  created () {
    this.$http.get('/api/pic').then(response => {
    response = response.body;
    if (response.errno === ERR_OK) {
      this.picData = response.data;
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
      for (var i in this.picData) {
        if (this.picData[i].newId.indexOf(item.newId) > -1) {
          if (paracheck === 'checkedL' && paraNum === 'loveNum') {
              this.checkM.checkedL = !this.checkM.checkedL;
              if (this.checkM.checkedL) {
                ++this.picData[i].loveNum;
              } else {
                --this.picData[i].loveNum;
              }
          } else if (paracheck === 'checkedH' && paraNum === 'hateNum') {
              this.checkM.checkedH = !this.checkM.checkedH;
              if (this.checkM.checkedH) {
                ++this.picData[i].hateNum;
              } else {
                --this.picData[i].hateNum;
              }
          }
        }

      }

    }

  }
};
</script>

<style rel='stylesheet/stylus'>
#myCarousel{
  height: 200px;
}
#myCarousel .my-swipe .mint-swipe-items-wrap .mint-swipe-item img{
  height: 100%;
  width: 100%;
}
.thumbnail .mdui-card {
  margin: 0.5rem;
}
.thumbnail .mdui-card .mdui-card-media{
  margin: 0.1rem;
}
.mdui-col{
  padding: 0;
}
.mdui-col .mdui-icon{
  font-size: 0.5rem;
  padding: 0;
}
.mdui-card-primary.showPic{
    padding: 0.3rem 0.5rem 0 0.5rem;
}
.mdui-card-primary.showPic .mdui-card-primary-title {
    font-size: 1rem;
    line-height: 1rem;
}
.mdui-card-primary.showPic .mdui-card-primary-subtitle {
    font-size: 0.5rem;
    line-height: 1rem;
}
</style>
