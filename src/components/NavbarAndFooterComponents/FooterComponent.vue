<template>
	<footer class="footer">
		<div class="footer__content">
			<div class="footer__content--year">&copy; {{ currentYear }}</div>
			<div class="footer__content--links">
				<router-link to="/" @click="showMobileNav">Strona Główna</router-link>
				<router-link to="/kadra" @click="showMobileNav">Kadra</router-link>
				<router-link to="/terminarz" @click="showMobileNav"
					>Terminarz</router-link
				>
				<router-link to="/tabela" @click="showMobileNav">Tabela</router-link>
				<router-link to="/kontakt" @click="showMobileNav">Kontakt</router-link>
			</div>
		</div>
	</footer>
</template>
<script>
export default {
	name: "FooterComponent",

	setup() {
		const currentYear = new Date().getFullYear()
		return { currentYear }
	},
}
</script>
<style lang="scss">
.footer {
	position: static;
	width: 100%;
	bottom: 0;
	min-height: 10svh;
	background-color: rgba(0, 0, 0, 0.8);
	color: #fff;

	&__content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 80%;
		height: 10svh;
		margin: 0 auto;
		font-size: 0.6rem;

		&--links {
			padding: 0.5em;
			display: flex;
			flex-direction: row;

			a {
				padding: 5px;
				text-decoration: none;
				color: #fff;
			}
		}
	}
}
</style>
