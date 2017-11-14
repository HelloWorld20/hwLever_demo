<template>
  <div class="hello" @touchmove.prevent>
    <h1 id="EasterEgg">画叉、摇一摇、点下左下角再点右下角或者点击该标题6次唤醒vconsole。</h1>
    <p @click="reflash"><a href="?vconsole=show">或者直接访问这条带有?vconsole=show参数的链接唤醒。</a></p>
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
  mounted() {
	  document.querySelector('body').addEventListener('touchmove', function(e) {
		  e.preventDefault()
	  }, false)
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
*{
	padding: 0;
	margin: 0;
}
html, body{
	width: 100%;
	height: 100%;
}
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
