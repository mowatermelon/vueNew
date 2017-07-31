<template>
  <transition name="fade">
    <div class="container">
      <p class="text-center alert alert-danger" :class="[!error?'hide':'']" v-text="errorInfo"></p>
      <p class="text-center alert alert-success"  :class="[!success?'hide':'']" v-text="successInfo"></p>

      <div class="form-horizontal col-xs-11  col-sm-6 col-sm-offset-3">
        <div class="h1 text-center" v-if="!gores">
          <span class="glyphicon glyphicon-user loginIcon" alt="用户登录"></span>
        </div>
        <div class="h1 text-center" v-if="gores">
          <span class="	glyphicon glyphicon-info-sign loginIcon" alt="用户注册"></span>
        </div>
        <div class="form-group" :class="checkForm">
          <label class="input-group-addon glyphicon glyphicon-user col-xs-2 " for="userName"></label>
          <div class="col-xs-10 has-feedback">
            <span class="glyphicon form-control-feedback " :class="checkInput"></span>
            <input type="text" class="form-control" id="userName" placeholder="请输入用户名"  v-model="uname"/>
          </div>
        </div>

        <div class="form-group" :class="checkForm">
          <label class="input-group-addon glyphicon glyphicon-lock col-xs-2" for="userPwd"></label>
          <div class="col-xs-10 has-feedback">
            <span class="glyphicon form-control-feedback" :class="checkInput"></span>
          <input type="password" class="form-control" id="userPwd" placeholder="请输入密码"  v-model="password "/>

          </div>
        </div>

        <div class="form-group" v-if="gores" :class="checkForm">
          <label class="input-group-addon glyphicon glyphicon-asterisk col-xs-2" for="userrPwd"></label>
          <div class="col-xs-10 has-feedback">
            <span class="glyphicon form-control-feedback" :class="checkInput"></span>
            <input type="password" class="form-control" id="userrPwd" placeholder="请再次确认输入密码"  v-model="rpassword "/>
          </div>
        </div>
        <div class="form-group" v-if="gores" :class="checkForm">
          <label class="input-group-addon glyphicon glyphicon-envelope col-xs-2" for="email"></label>
          <div class="col-xs-10 has-feedback">
            <span class="glyphicon form-control-feedback" :class="checkInput"></span>
          <input type="text" class="form-control" id="email" placeholder="请输入用来收验证码的邮箱"  v-model="email "/>
          </div>
        </div>
        <div v-if="!gores">
          <button class="btn btn-block submitBtn" @click="checkLogin()">登陆账户</button>
          <button class="btn btn-link pull-right" @click="goReg()">用户注册</button>
        </div>
        <div v-if="gores">
          <button class="btn btn-block submitBtn" @click="checkReg()">注册账户</button>
          <button class="btn btn-link pull-right" @click="goLogin()">已有帐号去登陆</button>
        </div>
      </div>
    </div>
</transition>
</template>

<script>
const news = resolve => require(['@/components/index/news'], resolve);

export default {
  name: 'login',
  data () {
    return {
      uname: '',
      password: '',
      rpassword: '',
      success: false,
      error: false,
      errorInfo: '',
      successInfo: '',
      gores: false,
      email: '',
      copyright: 'Copyright © 2017 cover by WaterMelon <br />鄂ICP备66666666号-5<br />出其东门，有女如云，虽则如云，匪我思存。'
    };
  },
  computed: {
    loginInfo () {
      return '你输入的用户名是' + this.uname + '你输入的密码是' + this.password;
    },
    checkForm () {
      return {
        'has-success': this.success,
        'has-error': this.error
      };

    },
    checkInput () {
      return {
      'glyphicon-ok': this.success,
      'glyphicon-remove': this.error
      };
    }
  },
  methods: {
    checkLogin () {
      const key = '123';
      if (this.password === key && this.uname === key) {
        this.error = false;
        this.success = true;
        this.successInfo = '登录成功正在跳转....';
        this.$router.push({path: '/v-news', name: 'v-news', component: news, params: { username: this.uname }});
      } else {
        this.error = true;
        this.errorInfo = '用户名或者帐号输入错误请确认';
      }
    },
    checkReg () {
      if (this.password !== '' && this.password === this.rpassword) {
        this.gores = false;
      } else {
        this.error = true;
        this.errorInfo = '用户名或者密码输入不匹配请确认';
      }
    },
    goReg () {
      this.uname = '';
      this.password = '';
       this.error = false;
       this.gores = true;
    },
    goLogin () {
      this.uname = '';
      this.password = '';
      this.rpassword = '';
      this.email = '';
      this.error = false;
      this.gores = false;
    },
    goIndex () {
      this.$router.push({path: '/v-news', name: 'v-news', component: news, params: { username: this.uname }});
    },
    goUrl (url) {
      window.location.href = url;
    },
    goBack () {
      this.$router.go(-1);
    }
  }
};

</script>

<style>
.form-horizontal.col-xs-10{
  margin-top:10%;
}
@media (max-width:768px){
  .form-horizontal.col-xs-10{
    margin-left:6%;
  }
}
.submitBtn{
  border-color:var(--c);
}
.submitBtn:hover,
.submitBtn:focus,
.submitBtn.focus {
  background-color: var(--c);
  color: #fff;
}
.checkBtn{
  color:var(--c);
}
.loginIcon{
  background: var(--c);
  color:#fff;
  border-radius: 100%;
  padding: 25px;
  font-size: 40px;
  margin-bottom: 30px;
}
.col-xs-10.has-feedback{
  padding-left: 0;
  padding-right: 0;
}
</style>
