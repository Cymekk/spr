<template>
	<div class="box">
		<img
			:src="require(`../../assets/players/${array[index].imgSrc}`)"
			:alt="array[index].name" />

		<button @click="showInfoPanel"></button>

		<div class="info" :class="{ active: showInfo }">
			<div class="info__container">
				<h2>{{ array[index].name }}</h2>
				<div>
					<span>Pozycja:</span><span>{{ array[index].role }}</span>
				</div>
				<div v-if="array[index].number">
					<span>Numer:</span><span> {{ array[index].number }}</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { ref } from "vue"

export default {
	name: "TeamItemComponent",

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

	setup() {
		let showInfo = ref(false)

		function showInfoPanel() {
			if (showInfo.value == false) {
				showInfo.value = true
			} else {
				showInfo.value = false
			}
		}

		return { showInfo, showInfoPanel }
	},
}
</script>
<style lang="scss" scoped>
.box {
	max-height: 250px;
	width: 45%;
	position: relative;
	border-radius: 10px;
	overflow: hidden;
	margin-bottom: 2em;

	img {
		width: 100%;
	}

	button {
		position: absolute;
		right: 0;
		top: 0;
		height: 30px;
		width: 30px;
		border: none;
		background: transparent;
		background-image: url("../../assets/buttons/help-circle.svg");
		background-position: center;
		background-repeat: no-repeat;
		cursor: pointer;
		z-index: 2;
	}

	.info {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 255, 255, 0.75);
		clip-path: circle(0 at 50% 80%);
		transition: clip-path 0.5s ease-in;

		&__container {
			width: 100%;
			height: 50%;
			position: absolute;
			top: 50%;
			color: black;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-evenly;

			h2 {
				font-size: 0.9rem;
			}
			div {
				span {
					font-size: 0.8rem;
				}
				span:first-child {
					padding-right: 5px;
					font-weight: bold;
				}
			}
		}
	}

	.active {
		clip-path: circle(120% at 50% 80%);
	}
}

@media (min-width: 576px) {
	.box {
		max-height: 400px;
		margin-bottom: 3em;
		.info {
			&__container {
				height: 30%;
				top: 70%;
			}
		}
	}
}

@media (min-width: 768px) {
	.box {
		width: 30%;
		max-height: 400px;
		margin-bottom: 4em;
		.info {
			&__container {
				height: 30%;
				top: 70%;
				h2{
					font-size: 1.2rem;
				}

				div{
					span{
						font-size: 1.2rem;
					}
				}
			}
		}
	}
}

@media (min-width: 992px) {
	.box {
		width: 30%;
		max-height: 450px;
		margin-bottom: 4em;
	}
}

@media (min-width: 992px) {
	.box {
		width: 30%;
		max-height: 500px;
		margin-bottom: 4em;
	}
}
</style>
