// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import hwlever from 'hwlever'

hwlever.config({
	cdn: '//24haowan-cdn.shanyougame.com/public/js/vconsole.min.js',  //vconsole的CDN地址
	entry: "EasterEgg",          //请点击这个DOM元素6次召唤vConsole。//你可以通过AlloyLever.entry('#entry2')设置多个机关入口召唤神龙
	vueObj: Vue,
	ravenId: 'http://56d67d26f9854c21a1f8e7b83854fecd@sentry.24haowan.com/12',
	extraConf: {
	    tags: {
	        from: 'hwlever online demo'
	    }
	},
	type: ['touch', 'click', 'swipe', 'shake']
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
