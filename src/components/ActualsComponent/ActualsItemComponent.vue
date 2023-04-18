<template>
	<div class="actuals__box">
		<h3 class="actuals__box--title">{{ array[index].title }}</h3>
		<img
			:src="require(`../../assets/${array[index].imgSrc}`)"
			:alt="array[index].imgAlt" />
	</div>
</template>
<script>
export default {
	name: "ActualsItemComponent",

	props: {
		index: {
			type: Number,
			default: 0,
		},

		array: {
			type: Object,
			default: () => ({}),
		},
	},
}
</script>
<style lang="scss" scoped>
.actuals__box {
	&--title {
		text-align: center;
		padding: 1em;
	}

	img {
		width: 100%;
		border-radius: 10px;
	}
}

@media (min-width: 768px) {
	.actuals__box {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		&--title {
			text-align: center;
			font-size: 1.5rem;
			padding: 1em;
		}
	}
}
</style>
