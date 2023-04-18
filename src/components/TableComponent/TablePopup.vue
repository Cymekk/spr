<template>
	<div class="popup">
		<div class="popup__body">
			<ul>
				<li>M - rozegrane mecze</li>
				<li>Pu - zdobyte punkty</li>
				<li>Zw - odniesione zwycięstwa</li>
				<li>Pr - odniesione porażki</li>
				<li>Rw - zwycięstwo po karnych</li>
				<li>Rp - porażka po karnych</li>
			</ul>

			<button class="close-popup" @click="closePopup"></button>
		</div>
	</div>
</template>
<script>
export default {
	name: "TablePopup",

	emits: ["close-popup"],

	setup(props, { emit }) {
		function closePopup() {
			emit("close-popup")
		}

		return { closePopup }
	},
}
</script>
<style lang="scss" scoped>
.popup {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: -150%;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.8);
	color: #fff;
	z-index: 2;
	transition: top 0.3s ease-in;

	&__body {
		padding: 1em;
		position: relative;
		width: 80%;
		background-color: #0cbaba;
		background-image: linear-gradient(315deg, #0cbaba 0%, #380036 52%);
		border-radius: 10px;

		ul {
			list-style: none;

			li {
				padding: 5px;
			}
		}

		.close-popup {
			position: absolute;
			right: 0;
			top: 0;
			width: 40px;
			height: 50px;
			background: none;
			border: none;
			background-image: url("../../assets/buttons/x.svg");
			background-position: center;
			background-repeat: no-repeat;
			cursor: pointer;
		}
	}
}
.active {
	top: 0;
}

@media(min-width: 992px)
{
	.popup__body{
		width: 60%;

		ul {
			font-size: 1.1rem;

			li{
				padding: 7px;
			}
		}
	}
}
</style>
