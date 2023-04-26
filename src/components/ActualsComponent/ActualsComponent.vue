<template>
	<main class="actuals">
		<h2 class="actuals__title">Aktualności</h2>
		<div class="actuals__container">
			<router-link
				v-for="(item, index) in actualsArray"
				:key="index"
				:to="{
					name: 'ActualsView',
					params: { id: index + 1 },
				}">
				<ActualsItemComponent :array="actualsArray" :index="index" />
			</router-link>
		</div>
	</main>
</template>
<script>
import { useStore } from "vuex"
import { computed } from "vue"
import ActualsItemComponent from "./ActualsItemComponent.vue"

export default {
	name: "ActualsComponent",
	components: { ActualsItemComponent },

	setup() {
		const store = useStore()
		const actualsArray = computed(() => store.state.actualsArray)

		return { actualsArray }
	},
}
</script>
<style lang="scss" scoped>
.actuals {
	padding: 0 2em;
	margin-bottom: 4em;
	&__title {
		margin-top: 2em;
		text-align: center;
		text-transform: uppercase;
	}

	&__container {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	a {
		margin-top: 2em;
		width: 90%;
		text-decoration: none;
		color: #000;
		overflow: hidden;
	}
}

@media (min-width: 576px) {
	.actuals {
		a {
			width: 80%;
			text-decoration: none;
			color: #000;
			overflow: hidden;
		}
	}
}
@media (min-width: 768px) {
	.actuals {
		&__title {
			text-align: center;
			text-transform: uppercase;
			font-size: 2rem;
		}

		&__container {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-evenly;
		}

		a {
			margin-top: 2em;
			width: 90%;
			text-decoration: none;
			color: #000;
			overflow: hidden;
		}
	}
}

@media (min-width: 992px) {
	.actuals {
		&__container {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: space-evenly;
		}

		a {
			margin-top: 2em;
			width: 45%;
			text-decoration: none;
			color: #000;
			overflow: hidden;
		}
	}
}
</style>
