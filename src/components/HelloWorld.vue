<template>
  <div class="hello">
    <h1>画叉、摇一摇、点下左下角再点右下角或者点击该标题6次唤醒vconsole。</h1>
    <p id="EasterEgg" @click="reflash"><a href="#?vcosole=show">或者直接访问这条带有特殊参数的链接唤醒。</a></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    reflash() {
      location.reload()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
