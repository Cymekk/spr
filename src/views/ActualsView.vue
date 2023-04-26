<template>
	<div v-if="exist">
		<SingleActualComponent :index="index" :array="actualsArray" />
	</div>
	<div class="error" v-else>
		Zasób do którego próbujesz się dostać nie jest dostępny.
	</div>
</template>
<script>
import { useStore } from "vuex"
import SingleActualComponent from "../components/ActualsComponent/SingleActualComponent.vue"
import { ref, computed } from "vue"

export default {
	components: { SingleActualComponent },

	props: {
		id: { type: String, required: true },
	},

	setup(props) {
		window.scrollTo(0, 0)
		const store = useStore()
		let exist = ref(true)
		const index = ref(props.id - 1)
		const actualsArray = computed(() => store.state.actualsArray)

		function returnIndex() {
			console.log(actualsArray.value[index.value])
		}

		if (props.id > actualsArray.value.length) {
			exist.value = false
		} else {
			exist.value = true
		}

		return { returnIndex, actualsArray, index, exist }
	},
}
</script>
<style lang="scss" scoped>
button {
	width: 50%;
	height: 20%;
}

.error {
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 2rem;
	min-height: 75vh;
	padding-top: 3em;
}
</style>
