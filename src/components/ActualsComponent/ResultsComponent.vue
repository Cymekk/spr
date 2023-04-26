<template>
	<ItemComponent
		:array="resultsArray"
		:index="index"
		@decrease-index="decreaseIndex"
		@increase-index="increaseIndex" />
</template>
<script>
import ItemComponent from "./ItemComponent.vue"
import { useStore } from "vuex"
import { ref } from "vue"

export default {
	name: "ResultsComponent",

	components: { ItemComponent },

	setup() {
		const store = useStore()
		let index = ref(0)
		const resultsArray = store.state.resultsArray

		index.value = resultsArray.findIndex(object => {
			return (
				Date.parse(object.date.split(".").reverse().join("-")) >= Date.now()
			)
		})

		if (index.value === -1) {
			index.value = resultsArray.value.length - 1
		}

		function increaseIndex() {
			index.value++
		}
		function decreaseIndex() {
			index.value--
		}

		console.log(resultsArray)
		return { resultsArray, index, increaseIndex, decreaseIndex }
	},
}
</script>
<style lang="scss"></style>
