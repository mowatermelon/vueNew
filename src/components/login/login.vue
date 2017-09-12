<style>
.login-text {
  padding-top: 2rem;
}
.mdui-container .mdui-text-center[class$="mdui-typo-title"] {
  padding-top: 2rem;
}
.submitBtn {
  border-color: var(--c);
}
.submitBtn:hover,
.submitBtn:focus,
.submitBtn.focus {
  background-color: var(--c);
  color: #fff;
}
.checkBtn {
  color: var(--c);
}
.loginIcon {
  background: var(--c);
  color: #fff;
  border-radius: 100%;
  padding: 25px;
  font-size: 40px;
  margin-bottom: 30px;
}
.col-xs-10.has-feedback {
  padding-left: 0;
  padding-right: 0;
}
</style>

<template>

<transition name="fade">
    <div class="mdui-container">
        <p v-if="$route.query.redirect">
            You need to login first.
        </p>
        <p class="mdui-text-center mdui-typo-title" :class="[!error?'hide':'']" v-text="errorInfo"></p>
        <p class="mdui-text-center mdui-typo-title" :class="[!success?'hide':'']" v-text="successInfo"></p>

        <form @submit.prevent="login">
            <div class="login-text">
                <div class="h1 mdui-text-center" v-if="!gores">
                    <i class="mdui-icon material-icons mdui-typo-display-2">account_circle</i>
                </div>
                <div class="h1 mdui-text-center" v-if="gores">
                    <i class="mdui-icon material-icons mdui-typo-display-2">group_add</i>
                </div>

                <div class="mdui-textfield mdui-textfield-floating-label" :class="checkForm">
                    <label class="mdui-textfield-label">用户名</label>
                    <input class="mdui-textfield-input" type="text" id="userName" v-model="uname" required/>
                    <div class="mdui-textfield-error">用户名不能为空</div>
                </div>

                <div class="mdui-textfield mdui-textfield-floating-label" :class="checkForm">
                    <label class="mdui-textfield-label">密码</label>
                    <input class="mdui-textfield-input" type="password" id="userPwd" v-model="password" required/>
                    <div class="mdui-textfield-error">密码不能为空</div>
                </div>

                <div class="mdui-textfield mdui-textfield-floating-label" v-if="gores" :class="checkForm">
                    <label class="mdui-textfield-label">确认密码</label>
                    <input class="mdui-textfield-input" type="password" id="userrPwd" v-model="rpassword" required/>
                    <div class="mdui-textfield-error">确认密码不能为空</div>
                </div>

                <div class="mdui-textfield mdui-textfield-floating-label" v-if="gores" :class="checkForm">
                    <label class="mdui-textfield-label">邮箱</label>
                    <input class="mdui-textfield-input" type="email" id="email" v-model="email " required/>
                    <div class="mdui-textfield-error">邮箱格式不正确</div>
                </div>

                <div v-if="!gores">
                    <button class="mdui-btn mdui-ripple mdui-col-xs-12 mdui-ripple-white submitBtn" @click="login">登陆账户</button>
                    <button class="mdui-btn mdui-ripple mdui-ripple-white mdui-float-right" @click="goReg()">用户注册</button>
                </div>
                <div v-if="gores">
                    <button class="mdui-btn mdui-ripple mdui-col-xs-12 mdui-ripple-white submitBtn" @click="checkReg()">注册账户</button>
                    <button class="mdui-btn mdui-ripple mdui-ripple-white mdui-float-right" @click="goLogin()">已有帐号去登陆</button>
                </div>
            </div>
        </form>
    </div>
</transition>

</template>

<script>

const news = resolve => require(['@/components/index/news'], resolve);
import auth from '../../../static/js/auth';

export default {
    name: 'login',
    data() {
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
        loginInfo() {
                return '你输入的用户名是' + this.uname + '你输入的密码是' + this.password;
            },
            checkForm() {
                return {
                    'has-success': this.success,
                    'has-error': this.error
                };

            },
            checkInput() {
                return {
                    'glyphicon-ok': this.success,
                    'glyphicon-remove': this.error
                };
            }
    },
    methods: {
        checkLogin() {
                const key = '123';
                if (this.password === key && this.uname === key) {
                    this.error = false;
                    this.success = true;
                    this.successInfo = '登录成功正在跳转....';
                    this.$router.push({
                        path: '/v-news',
                        name: 'v-news',
                        component: news,
                        params: {
                            username: this.uname
                        }
                    });
                } else {
                    this.error = true;
                    this.errorInfo = '用户名或者帐号输入错误请确认';
                }
            },
            checkReg() {
                if (this.password !== '' && this.password === this.rpassword) {
                    this.gores = false;
                } else {
                    this.error = true;
                    this.errorInfo = '用户名或者密码输入不匹配请确认';
                }
            },
            goReg() {
                this.errorInfo = '';
                this.uname = '';
                this.password = '';
                this.error = false;
                this.gores = true;
            },
            goLogin() {
                this.uname = '';
                this.password = '';
                this.rpassword = '';
                this.email = '';
                this.error = false;
                this.gores = false;
            },
            goIndex() {
                this.$router.push({
                    path: '/v-news',
                    name: 'v-news',
                    component: news,
                    params: {
                        username: this.uname
                    }
                });
            },
            goUrl(url) {
                window.location.href = url;
            },
            goBack() {
                this.$router.go(-1);
            },
            login() {
                auth.login(this.uname, this.pass, loggedIn => {
                    if (!loggedIn) {
                        this.error = true;
                    } else {
                        this.$router.replace(this.$route.query.redirect || '/');
                    }
                });
            }
    }
};

</script>
