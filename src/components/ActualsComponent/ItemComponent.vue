<template>
	<div class="wrapper">
		<div class="result">
			<h2 class="result__title" v-if="isDisabled">Najbliższy mecz</h2>
			<h2 class="result__title" v-if="!isDisabled">Ostatni mecz</h2>

			<div class="result__box">
				<div class="box home-team">
					<div class="home-team__logo">
						<img
							:src="require(`../../assets/teams/${array[index].homeLogo}`)"
							:alt="array[index].homeDesc" />
					</div>
					<div class="text home-team__name">{{ array[index].homeTeam }}</div>
				</div>

				<div class="box score-and-date" v-if="array[index].date">
					<div class="text score" v-if="array[index].score">
						{{ array[index].score }}
					</div>
					<div class="text date">
						{{ array[index].date }} {{ array[index].time }}
					</div>
				</div>

				<div class="box away-team">
					<div class="away-team__logo">
						<img
							:src="require(`../../assets/teams/${array[index].awayLogo}`)"
							:alt="array[index].awayDesc" />
					</div>
					<div class="text away-team__name">{{ array[index].awayTeam }}</div>
				</div>

				<button
					class="button left"
					@click="decreaseIndex()"
					:disabled="!isDisabled"></button>
				<button
					class="button right"
					@click="increaseIndex()"
					:disabled="isDisabled"></button>
			</div>
			<router-link to="/terminarz" @click="showMobileNav"
				>Pełny terminarz</router-link
			>
		</div>
	</div>
</template>
<script>
import { ref } from "vue"

export default {
	name: "ItemComponent",

	props: {
		array: {
			type: Object,
			default: () => ({}),
		},

		index: {
			type: Number,
			default: 0,
		},
	},

	emits: ["change-index"],
	setup(props, { emit }) {
		let isDisabled = ref(true)

		function decreaseIndex() {
			emit("decrease-index")
			if (isDisabled.value == true) {
				isDisabled.value = false
			} else {
				isDisabled.value = true
			}
		}
		function increaseIndex() {
			emit("increase-index")
			if (isDisabled.value == false) {
				isDisabled.value = true
			} else {
				isDisabled.value = false
			}
		}

		return { decreaseIndex, increaseIndex, isDisabled }
	},
}
</script>
<style lang="scss" scoped>
.result {
	position: relative;
	padding: 2em 2em;
	background-color: lightgray;

	&__title {
		font-size: 1.2rem;
		position: relative;
		text-align: center;

	}

	&__box {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
		align-content: center;
		.box {
			width: 80%;
			margin: 1.5em;

			img {
				height: 80px;
				display: block;
				margin: 0 auto;
				mix-blend-mode: multiply;
			}
		}

		.text {
			margin-top: 0.5em;
			font-size: 0.8rem;
			text-align: center;
		}
	}

	.button {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 50px;
		height: 50px;
		border: 1px solid transparent;
		background: transparent;
		background-repeat: no-repeat;
		background-position: center;
		cursor: pointer;

		&:disabled {
			opacity: 0.2;
		}
	}

	.left {
		left: 0;
		background-image: url("../../assets/buttons/chevron-left.svg");
	}

	.right {
		right: 0;
		background-image: url("../../assets/buttons/chevron-right.svg");
	}

	a{
		position: absolute;
		bottom: 5px;
		right: 5px;
	}

	@media(min-width: 576px){

		.result__title{
			font-size: 1.3rem;
		}
		.result__box{
			flex-direction: row;

			.box{
				width: 30%;
			}

			.text {
			margin-top: 0.8em;
			font-size: 0.9rem;
			text-align: center;
		}
		}
	}
}
</style>
