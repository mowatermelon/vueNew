<template>
  <transition name="slide">
    <div class="showPic">
        <div id="myCarousel" class="carousel">
          <swipe class="my-swipe" :speed="100" :show-indicators="false" :no-drag="true">
            <swipe-item v-for="(pic, idx) in img" key="idx"><img :src="pic.src"/></swipe-item>
          </swipe>
        </div>
        <ul class="list-unstyled">
          <li class="col-xs-6"  v-for="(item,index) in picData" :id="'pic-' + index">
            <a class="thumbnail" @click="godetail(item)" :title='item.newTest.substring(0,20)'>

            	<p class="h6">{{item.name}}<br/></p>
            	<p class="text-muted">{{item.upTime}}</p>
            </a>

          </li>
          <p class="col-xs-12 text-center last-p">我是有底线的</p>
          <p class="col-xs-12" v-show="!picData.length">新闻列表为空</p>
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

<style>
#myCarousel{
  height: 200px;
}
#myCarousel .my-swipe .mint-swipe-items-wrap .mint-swipe-item img{
  height: 100%;
  width: 100%;
}
.showPic .list-unstyled .thumbnail{
    text-align: center;
    background-image: url(../../../static/img/MSHKLogo.jpg);
    background-size: 80% 60%;
    background-repeat: no-repeat;
    background-position: center 0.5em;
    margin-bottom: 10px;
    padding-top: 6.5em;
}
</style>
