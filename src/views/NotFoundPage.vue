<template>
	<div class="wrapper">
		<div class="not-found-page">
			<img src="../assets/buttons/frown.svg" alt="smutna minka" />
			<h2>Error 404</h2>
			<div>
				Strona do której próbujesz się dostać nie istnieje lub jest nie
				osiągalna
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "NotFoundPage",
}
</script>
<style lang="scss" scoped>
.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}

.not-found-page {
	padding: 1em;
	min-height: 80svh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	img {
		width: 50%;
	}

	h2 {
		margin: 1.5em;
	}

	h2,
	div {
		text-align: center;
	}
}

@media (min-width: 576px) {
	.not-found-page {
		img {
			width: 40%;
		}

		h2 {
			margin: 1.5em;
			font-size: 1.8rem;
		}

		div {
            font-size: 1.2rem;
			font-weight: bold;
		}
	}
}

@media (min-width: 992px) {
	.not-found-page {
		img {
			width: 30%;
		}

		h2 {
			font-size: 2rem;
		}

		div {
            font-size: 1.4rem;
			font-weight: bold;
		}
	}
}
</style>
