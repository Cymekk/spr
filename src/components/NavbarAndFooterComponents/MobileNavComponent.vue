<template>
	<nav class="mobile">
		<div class="mobile__shadow"></div>
		<div class="mobile__nav">
			<router-link to="/" @click="showMobileNav">Strona Główna</router-link>
			<router-link to="/kadra" @click="showMobileNav">Kadra</router-link>
			<router-link to="/terminarz" @click="showMobileNav"
				>Terminarz</router-link
			>
			<router-link to="/tabela" @click="showMobileNav">Tabela</router-link>
			<router-link to="/kontakt" @click="showMobileNav">Kontakt</router-link>

			<img class="big-img" src="../../assets/biale-logo.png" alt="" />
			<img class="small-img" src="../../assets/biale-logo.png" alt="" />
		</div>
	</nav>
</template>
<script>
export default {
	name: "MobileNavComponent",
	emits: ["show-mobile-nav"],

	setup(props, { emit }) {
		function showMobileNav() {
			emit("show-mobile-nav")
		}

		return { showMobileNav }
	},
}
</script>
<style lang="scss" scoped>
.mobile {
	position: fixed;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 100svh;
	left: 150%;
	transition: left 0.3s ease-in;
	z-index: 10;

	&__shadow {
		width: 40%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.6);
	}

	&__nav {
		position: relative;
		width: 60%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #19376d;
		background-image: linear-gradient(326deg, #19376d 0%, #0b2447 74%);

		a {
			position: relative;
			text-decoration: none;
			color: #fff;
			margin: 1em 2em;
			font-size: 1.2rem;
			z-index: 1;

			&::after {
				position: absolute;
				content: "";
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-bottom: 2px solid #fff;
			}
		}

		.small-img {
			position: absolute;
			top: 120px;
			right: 50%;
			height: 60px;
			animation: rotate 4s infinite reverse linear;
		}
		.big-img {
			position: absolute;
			bottom: 40px;
			left: 50%;
			height: 50px;
			animation: rotate 4s infinite linear;
		}
	}
}

.active {
	left:  0;
}

@keyframes rotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
