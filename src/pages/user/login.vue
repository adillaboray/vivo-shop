<template>
  <div class="register">
    <div class="register-1">
      <img
        src="https://accountstatic.vivo.com.cn/accountstatic.vivo.com.cn/static/img/logo.3c33210.png.webp"
        alt
      >
      <p>Login</p>
    </div>
    <div class="register-2">
      <label for>
        <span>Username</span>
        <input type="text" v-model="user.name" placeholder="Silakan masukkan akun/nama pengguna">
      </label>

      <label for>
        <span>Password</span>
        <input type="password" v-model="user.password" placeholder="Silakan masukkan kata sandi">
      </label>
    </div>
    <div class="register-3">
      <input type="button" class="btn" @click="login" value="Masuk">
    </div>
    <div class="register-3">
      <input type="button" class="btn" @click="jumpRegister" value="Daftar">
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      user: {
        name: "",
        password: ""
      }
    };
  },
  mounted() {
  },
  methods: {
    login() {
      if(!JSON.parse(localStorage.getItem('user'))) {
        Toast({
          message: "pengguna tidak ada",
          duration: 950
        });
        return false
      }

      if (this.user.name == "") {
        Toast({
          message: "silakan masukkan nama pengguna",
          duration: 950
        });
        return false
      }

      if (this.user.password == "") {
        Toast({
          message: "Silakan masukkan kata sandi",
          duration: 950
        });
        return false
      }

      if (this.user.name != JSON.parse(localStorage.getItem('user')).name) {
        Toast({
          message: "Nama pengguna salah",
          duration: 950
        });
        return false
      }

       if (this.user.password != JSON.parse(localStorage.getItem('user')).password) {
        Toast({
          message: "kata kunci Salah",
          duration: 950
        });
        return false
      }
      Toast({
        message: "Pendaratan yang sukses",
        duration: 950
      });
      this.$router.push("/main");
    },

    jumpRegister() {
     this.$router.push("/register");
    }
  }
}
</script>

<style>
.register {
  width: 100%;
  height: 100%;
  position: fixed;
  background: white;
  left: 0;
  top: 0;
}
.register-1{
  margin-top: 2rem
}
.register-1 img {
  width: 3rem;
  display: block;
  margin: 0.6rem auto;
}
.register-1 p {
  color: black;
  text-align: center;
  font-size: 0.5rem;
}
.register-2 {
  /* display: flex;
  flex-direction: column; */
  margin-top: 0.6rem;
  margin-bottom: 0.6rem
}
.register-2 label {
  width: 90%;
  margin: auto;
  height: 1.5rem;
  border-bottom: 0.03rem solid #f2f2f2;
  display: flex;
}
.register-2 label span {
  width: 20%;
  font-size: 0.5rem;
  line-height: 1.5rem;
  display: block;
  float: left;
}

.register-2 label input {
  width: 80%;
  font-size: 0.4rem;
  padding-left: 0.3rem;
}
.register-3 {
  display: flex;
}
.btn {
  width: 9rem;
  height: 1.1rem;
  margin: 0 auto;
  /* margin-top: 0.72rem; */
  margin-bottom: 0.3rem;
  text-align: center;
  line-height: 1.1rem;
  font-size: 0.45rem;
  color: #fff;
  border-radius: 0.6rem;
  background-color: #46a1fa;
  background-image: linear-gradient(90deg, #418eff, #4566ff);
}
</style>

