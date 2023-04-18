<template>
	<div class="logo">
		<router-link to="/"
			><img
				src="../../assets/biale-logo.png"
				alt="Logo SPR GOKiS Kąty Wrocławskie"
		/></router-link>
	</div>

	<div class="links">
		<router-link to="/kadra">Kadra</router-link>
		<router-link to="/terminarz">Terminarz</router-link>
		<router-link to="/tabela">Tabela</router-link>
		<router-link to="/kontakt">Kontakt</router-link>
	</div>

	<button class="burger-btn" @click="showMobileNav">
		<div class="bars"></div>
	</button>
</template>
<script>
export default {
	name: "NavbarComponent",
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
.logo {
	margin: 1em 1em;

	img {
		height: 40px;
	}
}

.links {
	width: 60%;
	display: none;
	flex-direction: row;
	justify-content: space-evenly;

	a {
		position: relative;
		text-decoration: none;
		color: #fff;
		font-size: 1.2rem;

		&::after,
		&::before {
			position: absolute;
			content: "";
			bottom: 0;
			width: 0;
			border-bottom: 1px solid #fff;
			transition: width 0.3s ease-in;
		}

		&::after {
			left: 50%;
		}

		&::before {
			right: 50%;
		}

		&:hover::after,
		&:hover::before {
			width: 50%;
		}
	}
}

.burger-btn {
	width: 30px;
	height: 30px;
	margin-right: 2em;
	background: none;
	border: none;
	cursor: pointer;
	padding: 2px;
	border-radius: 5px;
	.bars {
		position: relative;
		width: 100%;
		height: 100%;
		border-top: 2px solid white;

		&::after,
		&::before {
			position: absolute;
			left: 0;
			content: "";
			width: 100%;
			height: 2px;
			background-color: #fff;
		}

		&::after {
			top: 50%;
			transform: translateY(-50%);
		}

		&::before {
			top: 100%;
		}
	}
}

.active {
	.burger-btn {
		.bars {
			opacity: 0;
		}
	}
}

@media (min-width: 992px) {
	.links {
		display: flex;
	}

	.burger-btn {
		display: none;
	}
}
</style>
