<template>
    <div>
        <el-form
                :model="loginForm"
                :rules="rules"
                class="loginContainer"
                element-loading-background="rgba(0, 0, 0, 0.8)"
                element-loading-spinner="el-icon-loading"
                element-loading-text="正在登录..."
                ref="loginForm"
                v-loading="loading">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <el-input auto-complete="off" placeholder="请输入用户名" size="normal" type="text"
                          v-model="loginForm.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input auto-complete="off" placeholder="请输入密码" size="normal" type="password"
                          v-model="loginForm.password"></el-input>
            </el-form-item>
            <el-checkbox class="loginRemember" size="normal" v-model="checked">记住密码</el-checkbox>
            <el-button @click="submitLogin" size="normal" style="width: 100%;" type="primary">登录</el-button>
        </el-form>
    </div>
</template>

<script>

    export default {
        name: "Login",
        data() {
            return {
                loading: false,
                vcUrl: '/verifyCode?time=' + new Date(),
                loginForm: {
                    username: 'admin',
                    password: '123',
                    code: ''
                },
                checked: true,
                rules: {
                    username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                    code: [{required: true, message: '请输入验证码', trigger: 'blur'}]
                }
            }
        },
        methods: {
            submitLogin() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        if (this.loginForm.username == "admin" && this.loginForm.password == "123") {
                            let path = this.$route.query.redirect;
                            this.$router.replace((path == '/' || path == undefined) ? '/data-check' : path);
                        } else {
                            alert("账号或密码错误！")
                            return false;
                        }
                    } else {
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
    .loginContainer {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;
    }

    .loginTitle {
        margin: 15px auto 20px auto;
        text-align: center;
        color: #505458;
    }

    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }

    .el-form-item__content {
        display: flex;
        align-items: center;
    }
</style>
