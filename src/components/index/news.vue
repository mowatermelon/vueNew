<template>
  <transition name="slide">
      <div class="showNew">
          <ul class="list-group">
            <li class="list-group-item col-xs-12"  v-for="(item,index) in newsData" :id="'new-' + index">
              <a class="newlist">
                <span class="col-xs-2 newListLeft">
                  <p class="lead h3">{{item.name.substring(0,1)}}</p>
                </span>
                <span class="col-xs-10">
                  新闻发布时间：<span class="text-muted">{{item.upTime}}<br/></span>
                  <p class="h4 help-block">{{item.name}}<br/></p>
                  <p class="h5 help-block">{{item.newTest.substring(0,20)}}<br/></p>
                  <span class="row help-block">
                    <span class="col-xs-3 glyphicon glyphicon-thumbs-up text-nowrap" @click.stop="toggle(item,'loveNum','checkedL')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedL}">{{item.loveNum}}</span>
                    <span class="col-xs-3 glyphicon glyphicon-thumbs-down text-nowrap"  @click.stop="toggle(item,'hateNum','checkedH')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedH}">{{item.hateNum}}</span>
                    <span class="col-xs-6 text-nowrap"  @click.stop="++item.visitNum">阅读量({{item.visitNum}})</span>
                  </span>
                </span>
              </a>
            </li>
            <p class="col-xs-12 text-center last-p">我是有底线的</p>
            <p class="col-xs-12" v-show="!newsData.length">新闻列表为空</p>
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
  name: 'news',
  data () {
    return {
      newsData: {},
      checkM: {
        'checkedL': false,
        'checkedH': false
      },
      selectNew: ''
    };
  },
  created () {
    this.$http.get('/api/news').then(response => {
    response = response.body;
    if (response.errno === ERR_OK) {
      this.newsData = response.data;
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
      for (var i in this.newsData) {
        if (this.newsData[i].newId.indexOf(item.newId) > -1) {
          if (paracheck === 'checkedL' && paraNum === 'loveNum') {
              this.checkM.checkedL = !this.checkM.checkedL;
              if (this.checkM.checkedL) {
                ++this.newsData[i].loveNum;
              } else {
                --this.newsData[i].loveNum;
              }
          } else if (paracheck === 'checkedH' && paraNum === 'hateNum') {
              this.checkM.checkedH = !this.checkM.checkedH;
              if (this.checkM.checkedH) {
                ++this.newsData[i].hateNum;
              } else {
                --this.newsData[i].hateNum;
              }
          }
        }

      }

    }

  }
};
</script>

<style>
.list-group-item:first-child {
    border-top-right-radius: 0px;
    border-top-left-radius: 0px;
    border-top-width: 0;
}

.list-group-item{
  border-width: 1px 0;
  padding: 0 15px;
}
.newlist{
  cursor: pointer;
}
.newlist .lead.h3{
  color: var(--c);
  line-height: 50px;
}
.newlist .newListLeft{
  padding:20px 0;
  text-align: center;
  background:#fff url(../../../static/img/MSHKLogo.jpg)  no-repeat;
  background-position: center center;
  background-size:100% 100%;
  border-color: var(--c);
  border-radius: 20px;
  box-sizing: border-box;
}
.newlist .newListLeft::before {
    content: "";
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    /*-1 可以当背景*/
    -webkit-filter: blur(5rem);
    filter: blur(5rem);
    background: url(../../../static/img/MSHKLogo.jpg) center top;
    background-size: cover;
    /*平铺*/
    background-attachment: fixed;
    /*位置固定*/
}
</style>
