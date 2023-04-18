<template>
	<div class="wrapper">
		<HeaderComponent />
		<ResultsComponent />
		<ActualsComponent />
	</div>
</template>

<script>
// @ is an alias to /src

import ActualsComponent from "../components/ActualsComponent/ActualsComponent.vue"
import HeaderComponent from "../components/MainPageComponents/HeaderComponent.vue"
import ResultsComponent from "../components/ActualsComponent/ResultsComponent.vue"

export default {
	name: "HomeView",
	components: { HeaderComponent, ResultsComponent, ActualsComponent },
}
</script>

<style lang="scss" scoped>
.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}
</style>
