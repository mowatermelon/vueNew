<template>
  <transition name="slide">
      <div class="mdui-container-fulid">
          <ul class="mdui-list">
            <li class="mdui-list-item"  v-for="(item,index) in newsData" :id="'new-' + index">
              <a class="newlist">
                <div class="mdui-list-item-avatar newListLeft mdui-float-left"></div>
                <div class="mdui-list-item-content">
                  <small class="mdui-typo-caption-opacity">新闻发布时间：{{item.upTime}}<br/></small>
                  <div class="mdui-list-item-title">{{item.name}}</div>
                  <div class="mdui-list-item-text mdui-list-item-one-line">
                     {{item.newTest.substring(0,20)}}
                  </div>
                  <div class="mdui-float-right btn-group">
                    <span class="mdui-col-xs-3 text-nowrap" @click.stop="toggle(item,'loveNum','checkedL')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedL}"><i class="mdui-icon material-icons">thumb_up</i>{{item.loveNum}}</span>
                    <span class="mdui-col-xs-3 text-nowrap"  @click.stop="toggle(item,'hateNum','checkedH')" :class="{'checked-G':(selectNew==item.newId)&&checkM.checkedH}"><i class="mdui-icon material-icons">thumb_down</i>{{item.hateNum}}</span>
                    <span class="mdui-col-xs-6 text-nowrap"  @click.stop="++item.visitNum">阅读量({{item.visitNum}})</span>
                  </div>
                </div>

              </a>

            </li>
            <p class="mdui-col-xs-12 mdui-text-center last-p">我是有底线的</p>
            <p class="mdui-col-xs-12" v-show="!newsData.length">新闻列表为空</p>
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

<style scoped>
.newlist{
  cursor: pointer;
  border-bottom: 1px solid var(--c);
}
.mdui-col-xs-3.text-nowrap .material-icons {
    font-size: 0.5rem;
}
.btn-group{
  color: #6b6868;
  font-size: 0.5rem;
}
.newlist .newListLeft{
  margin: 1rem 0.5rem;
  background: #fff url(/static/img/MSHKLogo.2ab79de.jpg) no-repeat;
  background-position: center center;
  background-size: 100% 100%;
}
.newlist:hover .mdui-list-item{
  background-color: rgba(255, 255, 255, 1);
}
.mdui-list-item:hover {
    background-color: rgba(255, 255, 255, 1);
}
</style>
