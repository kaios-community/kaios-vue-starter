<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
import { ref } from "vue";

let info = ref("getting weather info of London...");
(async () => {
	console.log(info.value);
	let e = await fetch("https://weatherdbi.herokuapp.com/data/weather/London");
	let text = await e.json();
	console.log(text);
	info.value = "async/await works!";
	console.log(info.value);
})();
</script>

<template>
	<p>{{ info }}</p>
	<img alt="Vue logo" src="./assets/logo.png" />
	<HelloWorld msg="VueJS KaiOS starter" />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>
<style scoped>
img {
	width: 20vw;
}
</style>
