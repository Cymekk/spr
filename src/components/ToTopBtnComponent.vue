<template>
	<button class="to-top-btn" v-show="showBtn" @click="toTop"></button>
</template>
<script>
import { ref } from "vue"

export default {
	name: "ToTopBtnComponent",
	emits: ["scroll-to-top"],

	setup(props, { emit }) {
		let showBtn = ref(false)

		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 400) {
				showBtn.value = true
			} else {
				showBtn.value = false
			}
		})

		function toTop() {
			emit("scroll-to-top")
		}

		return { showBtn, toTop }
	},
}
</script>
<style lang="scss" scoped>
.to-top-btn {
	width: 50px;
	height: 50px;
	position: fixed;
	bottom: 20%;
	right: 5px;
	background: transparent;
	background-image: url("../assets/buttons/chevron-up.svg");
	background-position: center;
	background-repeat: no-repeat;
	border: none;
	cursor: pointer;
}
</style>
