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
import { ref, computed } from "vue"
import { useStore } from "vuex"
import TeamItemComponent from "../TeamComponent/TeamItemComponent.vue"

export default {
	name: "TeamComponent",
	components: { TeamItemComponent },

	setup() {
		const store = useStore()
		let index = ref(0)
		const playersArray = computed(() => store.state.playersArray)

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
