<template>
	<div class="schedule">
		<h2 class="schedule__title">Terminarz</h2>
		<div class="schedule__box">
			<ScheduleItemComponent
				v-for="(item, index) in resultsArray"
				:key="index"
				:array="resultsArray"
				:index="index" />
		</div>
	</div>
</template>
<script>
import { useStore } from "vuex"
import { computed } from "vue"
import ScheduleItemComponent from "../ScheduleComponent/ScheduleItemComponent.vue"

export default {
	name: "ScheduleComponent",
	components: { ScheduleItemComponent },

	setup() {
		const store = useStore()
		const resultsArray = computed(() => store.state.resultsArray)

		return { resultsArray }
	},
}
</script>
<style lang="scss">
.schedule {
	width: 90%;
	margin: 0 auto;
	&__title {
		margin: 2em;
		text-align: center;
		text-transform: uppercase;
	}

	&__box {
		background-color: #fff;
		border-radius: 10px;

		.box:nth-child(even) {
			background-color: rgb(177, 177, 177);
		}
	}
}

@media (min-width: 576px) {
	.schedule {
		&__title {
			margin: 2.5em;
		}
	}
}
@media (min-width: 768px) {
	.schedule {
		&__title {
			margin: 3em;
		}
	}
}
@media (min-width: 992px) {
	.schedule {
		&__title {
			font-size: 1.8rem;
			margin: 2.5em;
		}
	}
}
@media (min-width: 1200px) {
	.schedule {
		&__title {
			font-size: 2rem;
			margin: 2.5em;
		}
	}
}
</style>
