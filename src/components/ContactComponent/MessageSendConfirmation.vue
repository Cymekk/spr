<template>
	<div class="confirmation">
		<div class="confirmation__body">
			<div>
				<img src="../../assets/buttons/check.svg" alt="" />
			</div>

			<h3>Twoja wiadomość została wysłana</h3>
			<button class="close-popup" @click="handlePopup"></button>
		</div>
	</div>
</template>
<script>
export default {
	name: "MessageSendConfirmation",
	emits: ["handle-popup"],
	setup(props, { emit }) {
		function handlePopup() {
			emit("handle-popup")
		}
		return { handlePopup }
	},
}
</script>
<style lang="scss">
.confirmation {
	position: fixed;
	top: -150%;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	transition: top 0.5s ease-in;

	&__body {
		position: relative;
		width: 90%;
		height: 50vh;
		background-color: #bdd4e7;
		background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 10px;

		div {
			width: 100px;
			height: 100px;
			background-color: #0cbaba;
			background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			border-radius: 50%;
		}

		h3 {
			margin-top: 2em;
		}

		.close-popup {
			width: 50px;
			height: 50px;
			position: absolute;
			right: 0;
			top: 0;
			background: none;
			background-image: url("../../assets/buttons/x.svg");
			background-repeat: no-repeat;
			background-position: center;
			border: none;
			cursor: pointer;
		}
	}
}

.active {
	top: 0;
}
</style>
