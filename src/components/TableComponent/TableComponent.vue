<template>
	<div class="wrapper">
		<div class="table">
			<h2 class="table__title">tabela</h2>
			<div class="table__content">
				<table>
					<thead>
						<tr>
							<td>Msc.</td>
							<td>Nazwa drużynya</td>
							<td>M</td>
							<td>Pu</td>
							<td>Zw</td>
							<td>Pr</td>
							<td>Rw</td>
							<td>Rp</td>
						</tr>
					</thead>

					<tbody>
						<tr v-for="(item, index) in tableArray" :key="index">
							<td>{{ tableArray[index].place }}</td>
							<td>{{ tableArray[index].team }}</td>
							<td>{{ tableArray[index].playedMatches }}</td>
							<td>{{ tableArray[index].points }}</td>
							<td>{{ tableArray[index].winner }}</td>
							<td>{{ tableArray[index].loses }}</td>
							<td>{{ tableArray[index].penaltyWinner }}</td>
							<td>{{ tableArray[index].penaltyLoses }}</td>
						</tr>
					</tbody>
				</table>
				<button class="show-popup" @click="handlePopup"></button>
			</div>
		</div>
	</div>
	<teleport to="#table-popup">
		<TablePopup @close-popup="handlePopup" :class="{ active: popup }" />
	</teleport>
</template>
<script>
import TablePopup from "./TablePopup.vue"
import { ref } from "vue"

export default {
	name: "TableComponent",

	components: { TablePopup },
	setup() {
		const tableArray = ref([
			{
				place: "1",
				team: "SPR GOKiS Kąty Wrocławskie",
				playedMatches: "22",
				points: "60",
				winner: "20",
				loses: "2",
				penaltyWinner: "0",
				penaltyLoses: "0",
			},
			{
				place: "2",
				team: "MSPR Siódemka-Miedź-Huras Legnica",
				playedMatches: "21",
				points: "54",
				winner: "18",
				loses: "3",
				penaltyWinner: "0",
				penaltyLoses: "0",
			},
			{
				place: "3",
				team: "TS Zew Świebodzin",
				playedMatches: "21",
				points: "44",
				winner: "15",
				loses: "6",
				penaltyWinner: "1",
				penaltyLoses: "0",
			},
			{
				place: "4",
				team: "SPR BÓR-JOYNEXT Oborniki Śląskie",
				playedMatches: "23",
				points: "43",
				winner: "15",
				loses: "8",
				penaltyWinner: "2",
				penaltyLoses: "0",
			},
			{
				place: "5",
				team: "WKS Grunwald Poznań",
				playedMatches: "21",
				points: "41",
				winner: "13",
				loses: "8",
				penaltyWinner: "0",
				penaltyLoses: "2",
			},
			{
				place: "6",
				team: "UKS Trójka Nowa Sól",
				playedMatches: "22",
				points: "36",
				winner: "12",
				loses: "10",
				penaltyWinner: "1",
				penaltyLoses: "1",
			},
			{
				place: "7",
				team: "MKS Real-Astromal Leszno",
				playedMatches: "23",
				points: "34",
				winner: "12",
				loses: "11",
				penaltyWinner: "4",
				penaltyLoses: "2",
			},
			{
				place: "8",
				team: "ŚKPR Świdnica",
				playedMatches: "21",
				points: "30",
				winner: "9",
				loses: "12",
				penaltyWinner: "0",
				penaltyLoses: "3",
			},
			{
				place: "9",
				team: "AZS Uniwersytetu Zielonogórskiego",
				playedMatches: "23",
				points: "29",
				winner: "10",
				loses: "13",
				penaltyWinner: "1",
				penaltyLoses: "0",
			},
			{
				place: "10",
				team: "EUCO-UKS Dziewiątka Legnica",
				playedMatches: "22",
				points: "29",
				winner: "10",
				loses: "12",
				penaltyWinner: "1",
				penaltyLoses: "0",
			},
			{
				place: "11",
				team: "MKS Tęcza Folplast Kościan",
				playedMatches: "22",
				points: "22",
				winner: "7",
				loses: "15",
				penaltyWinner: "0",
				penaltyLoses: "1",
			},
			{
				place: "12",
				team: "SPR GOKiS Kąty Wrocławskie",
				playedMatches: "22",
				points: "60",
				winner: "20",
				loses: "2",
				penaltyWinner: "0",
				penaltyLoses: "0",
			},
			{
				place: "13",
				team: "UKS Olimp Grodków",
				playedMatches: "24",
				points: "21",
				winner: "7",
				loses: "17",
				penaltyWinner: "1",
				penaltyLoses: "1",
			},
			{
				place: "14",
				team: "DIOZ SPR Gorzyce Wielkie",
				playedMatches: "23",
				points: "2",
				winner: "1",
				loses: "22",
				penaltyWinner: "1",
				penaltyLoses: "0",
			},
		])
		let popup = ref(false)

		function handlePopup() {
			if (popup.value == true) {
				popup.value = false
			} else {
				popup.value = true
			}
		}

		return { tableArray, handlePopup, popup }
	},
}
</script>
<style lang="scss">
.wrapper {
	max-width: 1200px;
	margin: 0 auto;
}

.table {
	min-height: 80svh;

	&__title {
		margin: 2em 0;
		text-align: center;
		text-transform: uppercase;
	}

	&__content {
		position: relative;
		width: 95%;
		margin: 0 auto;

		table {
			width: 100%;
			border-spacing: 0;
			overflow: hidden;
			border-radius: 10px;
			font-size: 0.8rem;

			thead {
				width: 100%;
				background-color: #0cbaba;
				background-image: linear-gradient(315deg, #0cbaba 0%, #380036 74%);

				td {
					color: #fff;
					padding: 10px 5px;
					text-align: center;
					border: none;
				}
			}

			tbody {
				tr {
					background-color: #ddd;
					td {
						text-align: center;
						padding: 5px;
						border: none;
					}
				}

				tr:nth-child(odd) {
					background-color: #fafafa;
				}

				tr:first-child {
					font-weight: bold;
				}
			}
		}

		.show-popup {
			width: 30px;
			height: 30px;
			background: none;
			background-image: url("../../assets/buttons/help-circle.svg");
			border: none;
			background-position: center;
			background-repeat: no-repeat;
			position: absolute;
			right: 0;
			top: -2.5em;
			cursor: pointer;
		}
	}
}

@media (min-width: 576px) {
	.table {
		&__title {
			margin: 2em;
			text-align: center;
			text-transform: uppercase;
		}

		&__content {
			width: 90%;
		}
	}
}

@media (min-width: 768px) {
	.table {
		&__title {
			margin: 2em;
			text-align: center;
			text-transform: uppercase;
		}

		&__content {
			width: 90%;
			table {
				thead {
					td {
						padding: 10px;
					}
				}

				tbody {
					tr {
						td {
							padding: 10px;
						}
					}
				}
			}
		}
	}
}

@media (min-width: 992px) {
	.table {
		&__title {
			margin: 3em;
			text-align: center;
			text-transform: uppercase;
		}

		&__content {
			width: 85%;
		}
	}
}

@media (min-width: 1200px) {
	.table {
		margin-bottom: 2em;
		&__title {
			margin: 2em;
			font-size: 2rem;
			text-align: center;
			text-transform: uppercase;
		}

		&__content {
			width: 80%;
			table{
				font-size: 1.1rem;
			}
		}
	}
}
</style>
