<template>
    <div class="home">
        <div class="title">舒伯特方格</div>
        <div class="sub-title">开始游戏后系统会生成1~99之间任意数字，您共有7次机会猜数字</div>
        <div class="submit" @click="start" v-show="!game.state">开始游戏</div>
        <div class="describe" v-show="game.duration>0">本次成绩：{{(game.duration/1000).toFixed(2)}}s</div>
        <div class="cube-container" v-show="game.state">
            <div class="cube" v-for="item in game.list" :key="item" @click="submit(item)">{{item}}</div>
        </div>
        <div class="toast" v-show="toast.show">{{toast.txt}}</div>
    </div>
</template>

<script>
  import tools from '../utils/tools';
  import CubeGame from '../utils/CubeGame';

  export default {
    name: 'Home',
    data() {
      return {
        game: {},
        toast:{
          show:false,
          txt:""
        }
      };
    },
    methods: {
      submit(number) {
        const result = this.game.submit(number);
        if (result) this.showToast(result);
        console.log(number, this.game.next);
      },
      start() {
        this.game = new CubeGame(tools);
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

    .describe {
        color: #FFFFFF;
        font-size: 14px;
        margin: 10px;
    }

    .cube-container {
        width: 300px;
        height: 300px;
        display: flex;
        flex-wrap: wrap;
        align-self: center;
        border: 1px solid #FFFFFF;
    }

    .cube {
        width: 60px;
        height: 60px;
        box-sizing: border-box;
        border: 1px solid #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ff9900;
        color: #FFFFFF;
        font-size: 16px;
        font-weight: bold;
    }

    .cube:hover.cube:active {
        background-color: #db8400;
    }

</style>