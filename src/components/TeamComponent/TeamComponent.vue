<template>
	<div class="wrapper">
		<div class="team">
			<h2 class="team__title">Kadra</h2>
			<div class="team__box">
				<TeamItemComponent
					v-for="(item, index) in playersArray"
					:key="index"
					:array="playersArray"
					:index="index" />
			</div>
		</div>
	</div>
</template>
<script>
import { ref } from "vue"
import TeamItemComponent from "../TeamComponent/TeamItemComponent.vue"

export default {
	name: "TeamComponent",
	components: { TeamItemComponent },

	setup() {
		let index = ref(0)
		const playersArray = ref([
			{
				name: "Adrian Kaźmierczak",
				role: "Rozgrywający",
				number: "10",
				imgSrc: "Adrian_Kaźmierczak.png",
			},

			{
				name: "Alicja Łukasik",
				role: "Trener Zespołu",
				imgSrc: "Alicja_Łukasik.png",
			},
			{
				name: "Bartosz Wróblewski",
				role: "Rozgrywający",
				number: "23",
				imgSrc: "Bartosz_Wroblewski.png",
			},
			{
				name: "Kacper Gołda",
				role: "Rozgrywający",
				number: "5",
				imgSrc: "Kacper_Gołda.png",
			},
			{
				name: "Konrad Andrzejewski",
				role: "Rozgrywający",
				number: "16",
				imgSrc: "Konrad_Andrzejewski.png",
			},
			{
				name: "Krzysztof Zubko",
				role: "Obrotowy",
				number: "42",
				imgSrc: "Krzysiek_Zubko.png",
			},
			{
				name: "Maciej Batura",
				role: "Rozgrywający",
				number: "6",
				imgSrc: "Maciej_Batura.png",
			},
			{
				name: "Michał Wysocki",
				role: "Skrzydłowy",
				number: "20",
				imgSrc: "Michal_Wysocki.png",
			},
			{
				name: "Paweł Wojtusik",
				role: "Bramkarz",
				number: "1",
				imgSrc: "Pawel_Wojtusik.png",
			},
			{
				name: "Piotr Massopust",
				role: "Obrotowy",
				number: "94",
				imgSrc: "Piotr_Massopust.png",
			},
			{
				name: "Sebastian Ostrówka",
				role: "Rozgrywający",
				number: "69",
				imgSrc: "Sebastian_Ostrówka.png",
			},
			{
				name: "Tomasz Wasilewicz",
				role: "Bramkarz",
				number: "85",
				imgSrc: "Tomasz_Wasilewicz.png",
			},
		])

		return { playersArray, index }
	},
}
</script>
<style lang="scss" scoped>
.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}

.team {
	padding: 0 2em;
	&__title {
		margin: 2em 0;
		text-transform: uppercase;
		text-align: center;
	}

	&__box {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
	}
}

@media (min-width: 576px) {
	.team {
		&__title {
			font-size: 1.7rem;
		}

		&__box {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-around;
		}
	}
}

@media (min-width: 768px) {
	.team {
		&__title {
			font-size: 1.9rem;
		}

		&__box {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-between;
		}
	}
}


@media (min-width: 992px) {
	.team {
		&__title {
			font-size: 2rem;
		}

	}
}
</style>
