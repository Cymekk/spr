<template>
	<TeamComponent />
</template>
<script>
import TeamComponent from "../components/TeamComponent/TeamComponent.vue"

export default {
	name: "TeamView",

	components: { TeamComponent },
}
</script>
<style lang="scss" scoped>
.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}
</style>
