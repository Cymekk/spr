<template>
	<div class="wrapper">
		<div class="box">
			<h2 class="title">{{ array[index].title }}</h2>
			<div class="text">
				<span>{{ array[index].firstText }} </span>
				<span>{{ array[index].secondText }} </span>
				<span>{{ array[index].homeName }}</span>
				<span>{{ array[index].homePlayers }}</span>
				<span>{{ array[index].awayName }}</span>
				<span>{{ array[index].awayPlayers }}</span>
			</div>
			<img
				:src="require(`../../assets/${array[index].imgSrc}`)"
				:alt="array[index].imgAlt" />
		</div>
	</div>
</template>
<script>
export default {
	name: "SingleActualComponent",

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
.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}

.box {
	padding: 0 1em;
	margin-bottom: 2em;
	.title {
		margin: 2em;
		text-align: center;
	}

	.text {
		text-align: justify;

		span {
			display: block;
			padding-top: 1em;
		}

		span:nth-child(1),
		span:nth-child(4),
		span:nth-child(6) {
			padding-top: 0;
		}
	}

	img {
		display: block;
		width: 100%;
		margin: 2em auto 0 auto;
		border-radius: 10px;
	}
}

@media (min-width: 576px)
{
	.box{
		padding: 2em;
	}
}

@media (min-width: 768px)
{
	.box{
		

		img{
			width: 80%;
		}
	}
}

@media (min-width: 992px)
{
	.box{
		padding: 3em;

		.title{
			font-size: 1.7rem;
		}

		.text{
			font-size: 1.1rem;
		}
	}
}
</style>
