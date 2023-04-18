<template>
	<div class="box">
		<h2 class="box__title">Kolejka {{ index + 1 }}</h2>
		<div class="box__result">
			<div class="box__result--flex">
				<img
					:src="require(`../../assets/teams/${array[index].homeLogo}`)"
					:alt="array[index].homeDesc" />
				<span>{{ array[index].homeTeam }}</span>
			</div>
			<div class="box__result--flex">
				<span>{{ array[index].score }}</span>
				<span>{{ array[index].date }}</span>
			</div>
			<div class="box__result--flex">
				<img
					:src="require(`../../assets/teams/${array[index].awayLogo}`)"
					:alt="array[index].awayDesc" />
				<span>{{ array[index].awayTeam }}</span>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: "ScheduleItemComponent",

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
}
</script>
<style lang="scss">
.box {
	width: 100%;

	&__title {
		padding-top: 1em;
		text-align: center;
	}

	&__result {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		&--flex {
			padding: 1em;
			display: flex;
			flex-direction: column;
			align-items: center;
			width: 25%;
			font-size: 0.8rem;

			img {
				height: 60px;
				mix-blend-mode: multiply;
			}

			span {
				margin-top: 0.5em;
				text-align: center;
			}
		}
	}
}
</style>
