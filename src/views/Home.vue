<template>
    <div class="home">
        <div class="title">猜数字游戏</div>
        <div class="sub-title">开始游戏后系统会生成1~99之间任意数字，您共有7次机会猜数字</div>
        <input type="text" class="number" v-model="number" v-show="game.state" autofocus maxlength="2"/>
        <div class="submit" @click="submit" v-show="game.state">确认<span>剩余<u>{{game.chance}}</u>次机会</span></div>
        <div class="submit" @click="start" v-show="!game.state">开始游戏</div>
        <div class="toast" v-show="toast.show">{{toast.txt}}</div>
    </div>
</template>

<script>
  import GuessNumberGame from '../utils/GuessNumberGame';
  export default {
    name: 'Home',
    data() {
      return {
        number: "",
        game: {},
        toast:{
          show:false,
          txt:""
        }
      };
    },
    methods: {
      submit() {
        const result = this.game.guess(this.number);
        this.showToast(result);
      },
      start() {
        this.game = new GuessNumberGame();
      },
      showToast(str) {
        this.toast.txt = str;
        this.toast.show = true;
        setTimeout(() => {
          this.toast.show = false;
        }, 1500);
      }
    }
  };
</script>

<style scoped>
    .home {
        background-color: #3395ff;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }

    .title {
        font-size: 28px;
        font-weight: bold;
        color: #ffffff;
    }

    .sub-title {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
        margin: 10px 0 10px 0;
    }

    input {
        width: 200px;
        outline: none;
        border: none;
        height: 50px;
        background-color: #ffffff;
        text-align: center;
        align-self: center;
        font-size: 24px;
        font-weight: bold;
        color: #666666;
    }

    .submit {
        width: 200px;
        margin-top: 10px;
        align-self: center;
        background-color: #ff9900;
        height: 50px;
        line-height: 50px;
        color: #ffffff;
        cursor: pointer;
    }

    .submit:hover {
        background-color: #ef9201;
    }


    .submit span {
        font-size: 12px;
        color: rgba(255, 255, 255, 0.5);
    }

    .submit span u {
        text-decoration: none;
        font-weight: bold;
        color: rgba(255, 255, 255, 1);
    }

    .toast {
        position: fixed;
        z-index: 2000;
        left: 50%;
        top: 80%;
        transition: all .5s;
        -webkit-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -ms-transform: translateX(-50%) translateY(-50%);
        -o-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        border-radius: 5px;
        color: #FFF;
        background: rgba(17, 17, 17, 0.7);
        height: 40px;
        line-height: 40px;
        padding: 0 15px;
    }

</style>