<template>
	<navbar class="nav">
		<NavbarComponent
			@show-mobile-nav="showNav"
			:class="{ active: isVisible }" />
	</navbar>
	<teleport to="#mobile-nav">
		<MobileNavComponent
			@show-mobile-nav="showNav"
			:class="{ active: isVisible }" />
	</teleport>
	<router-view />
	<ToTopBtnComponent @scroll-to-top="scrollToTop" />
	<FooterComponent />
</template>
<script>
import FooterComponent from "./components/NavbarAndFooterComponents/FooterComponent.vue"
import MobileNavComponent from "./components/NavbarAndFooterComponents/MobileNavComponent.vue"
import NavbarComponent from "./components/NavbarAndFooterComponents/NavbarComponent.vue"
import ToTopBtnComponent from "./components/ToTopBtnComponent.vue"
import { ref } from "vue"

export default {
	components: {
		NavbarComponent,
		MobileNavComponent,
		ToTopBtnComponent,
		FooterComponent,
	},

	setup() {
		let isVisible = ref(false)
		function showNav() {
			if (isVisible.value == false) {
				isVisible.value = true
				console.log(isVisible.value)
			} else {
				isVisible.value = false
				console.log(isVisible.value)
			}
		}

		function scrollToTop() {
			window.scrollTo(0, 0)
		}

		return { showNav, isVisible, scrollToTop }
	},
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
}

body {
	background-image: url("./assets/small_ball.jpg");
	background-repeat: no-repeat;
	background-position-x: center;
	background-attachment: fixed;
	background-size: cover;
	font-family: "Roboto", sans-serif;

	&::after {
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.75);
		z-index: -1;
	}
}

.nav {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: rgba(0, 0, 0);
	height: 10svh;
}

@media (min-width: 992px) {
	body {
		background-image: url("./assets/ball.jpg");
	}
}
</style>
