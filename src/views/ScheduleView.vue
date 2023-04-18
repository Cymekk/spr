<template>
	<div class="wrapper">
		<ScheduleComponent />
	</div>
</template>
<script>
import ScheduleComponent from "../components/ScheduleComponent/ScheduleComponent.vue"

export default { components: { ScheduleComponent } }
</script>
<style lang="scss" scoped>
.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}
</style>
