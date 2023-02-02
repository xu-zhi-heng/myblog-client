<template>
    <div id="login">
        <div class="container right-panel-active" ref="container">
            <div class="container_from container--signup">
                <div class="from" id="form1">
                    <h2 class="from_title">注册账号</h2>
                    <input type="text" placeholder="用户名" class="input" v-model="register.username">
                    <input type="password" placeholder="密码" class="input" v-model="register.password">
                    <button class="btn" @click.stop.prevent="Register" style="margin-top: 2.5rem">点击注册</button>
                </div>
            </div>
            <div class="container_from container--signin">
                <div class="from" id="form2">
                    <h2 class="from_title">欢迎登陆</h2>
                    <input type="email" placeholder="用户名" class="input" v-model="login.username">
                    <input type="password" placeholder="密码" class="input" v-model="login.password">
                    <a href="#" class="link">忘记密码</a>
                    <button class="btn" @click.stop.prevent="Login">登陆</button>
                </div>
            </div>

            <div class="container_overlay">
                <div class="overlay">
                    <div class="overlay_panel overlay--left">
                        <button class="btn" id="signin" @click.stop.prevent="change('signin')">已有账号,直接登陆</button>
                    </div>
                    <div class="overlay_panel overlay--right">
                        <button class="btn" id="signup" @click.stop.prevent="change('signup')">没有账号,点击注册</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {UserLogin,UserRegister} from '../api/user'
    export default {
        name: "Login",
        data() {
            return {
                login: {
                    username: '',
                    password: '',
                },
                register: {
                    username: '',
                    password: '',
                }
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm=>{
                vm.pathUrl = from.fullPath;
            })
        },
        methods: {
            change(type) {
                let container = this.$refs.container
                if(type === 'signin') {
                    container.classList.remove("right-panel-active")
                }else {
                    container.classList.add("right-panel-active")
                }
            },
            Login() {
                UserLogin(this.login).then(res => {
                   if(res.code == 1) {
                       if(this.pathUrl == '/'){
                           this.$router.push({path:this.pathUrl})
                       }
                       else{
                           this.$router.back();
                       }
                       this.$store.commit('setUser',res.data)
                   }else {
                       this.$message({
                           message: res.msg,
                           type: 'error'
                       });
                   }
                }).catch(err => {
                    console.log(err)
                })
            },
            Register() {
                if(this.register.username === "" || this.register.password === "") {
                    this.$message({
                        message: '信息不能为空',
                        type: 'warning'
                    });
                    return;
                }
                UserRegister(this.register).then(res => {
                    if(res.code == 1) {
                        this.$message({
                            message: res.msg,
                            type: 'success'
                        });
                        this.register.username = ""
                        this.register.password = ""
                    }else {
                        this.$message({
                            message: res.msg,
                            type: 'error'
                        });
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>

<style scoped>
    #login {
        background: url("../assets/image/login.jpg");
        height: 100vh;
        background-repeat: no-repeat;
        background-color: #e9e9e9;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;
        display: grid;
        align-items: center;
        place-items: center;
        font-size: 16px;
        font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Candara,'Open Sans','Helvetica Neue',sans-serif;
        cursor: url(../assets/image/cursor.png), auto;
    }
    .container {
        background-color:#e9e9e9;
        width: 100%;
        border-radius: 0.7rem;
        height: 420px;
        max-width: 758px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 0.9rem 1.7rem rgba(0,0,0,0.25);
    }
    .from_title {
        font-weight: 300;
        margin: 0;
        margin-bottom: 1.2rem;
    }
    .link {
        color: #333;
        font-size: 0.9rem;
        margin: 1.5rem 0;
        text-decoration: none;
    }
    .container_from {
        position: absolute;
        height: 100%;
        top: 0;
        transition: all 0.6s ease-in-out;
    }
    .container--signin {
        left: 0;
        width: 50%;
        z-index: 2;
    }
    .container.right-panel-active .container--signin {
        transform: translateX(100%);
    }
    .container--signup {
        left: 0;
        width: 50%;
        z-index: 1;
        opacity: 0;
    }
    .container.right-panel-active .container--signup {
        animation: show 0.6s;
        opacity: 1;
        transform: translateX(100%);
        z-index: 5;
    }
    .container_overlay {
        height: 100%;
        width: 50%;
        left: 50%;
        position: absolute;
        top: 0;
        overflow: hidden;
        z-index: 100;
        transition: transform 0.6s ease-in-out;
    }
    .container.right-panel-active .container_overlay {
        transform: translateX(-100%);
    }
    .overlay {
        background-color: #008997;
        background: url("../assets/image/login.jpg");
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 100%;
        left: -100%;
        position: relative;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
        width: 200%;
    }
    .container.right-panel-active .overlay {
        transform: translateX(50%);
    }
    .overlay_panel {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        text-align: center;
        top: 0;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
        width: 50%;
        height: 100%;
    }
    .overlay--left {
        transform: translateX(-20%);
    }
    .container.right-panel-active .overlay--left {
        transform: translateX(0);
    }
    .overlay--right {
        right: 0;
        transform: translateX(0);
    }
    .container.right-panel-active .overlay--right {
        transform: translateX(20%);
    }
    .btn {
        background-color: #0267a6;
        background-image: linear-gradient(90deg,#0267a6 0%, #008997 74%);
        border-radius: 20px;
        border: 1px solid #0267a6;
        color: #e9e9e9;
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        padding: 0.9rem 4rem;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
    }
    .form > .btn {
        margin-top: 1.5rem;
    }
    .btn:active {
        transform: scale(0.95);
    }
    .btn:focus {
        outline: none;
    }
    .from {
        background-color: #e9e9e9;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 3rem;
        height: 100%;
        text-align: center;
    }
    .input {
        background: white;
        border: none;
        outline: none;
        margin: 0.5rem 0;
        padding: 0.9rem 0.9rem;
        width: 100%;
    }
    @keyframes show {
        0%,49.99% {
            opacity: 0;
            z-index: 1;
        }
        50%,100% {
            opacity: 1;
            z-index: 5;
        }
    }
    /*input[type=radio] {*/
    /*    float: left;*/
    /*}*/
</style>