<template>
	<ItemComponent
		:array="resultsArray"
		:index="index"
		@decrease-index="decreaseIndex"
		@increase-index="increaseIndex" />
</template>
<script>
import ItemComponent from "./ItemComponent.vue"
import { ref } from "vue"

export default {
	name: "ResultsComponent",

	components: { ItemComponent },

	setup() {
		let index = ref(0)
		const resultsArray = ref([
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "17.09.2022",
				time: "19:00",
				score: "25:23(12:13)",
				awayTeam: "MKS Tęcza Folplast Kościan",
				awayLogo: "koscian.jpg",
				awayDesc: "Logo MKS Tęcza Folplast Kościan",
			},
			{
				homeTeam: "KPR Wolsztyniak Wolsztyn",
				homeLogo: "wolsztyn.jpg",
				homeDesc: "Logo KPR Wolsztyniak Wolsztyn",
				date: "24.09.2022",
				time: "17:00",
				score: "20:26(12:16)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "01.10.2022",
				time: "19:00",
				score: "40:20(15:11)",
				awayTeam: "	EUCO-UKS Dziewiątka Legnica",
				awayLogo: "dziewiatka.jpg",
				awayDesc: "Logo EUCO-UKS Dziewiątka Legnica",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "08.10.2022",
				time: "19:00",
				score: "22:19(9:7)",
				awayTeam: "WKS Grunwald Poznań",
				awayLogo: "poznan.jpg",
				awayDesc: "Logo WKS Grunwald Poznań",
			},
			{
				homeTeam: "SPR BÓR-JOYNEXT Oborniki Śląskie",
				homeLogo: "oborniki.jpg",
				homeDesc: "Logo SPR BÓR-JOYNEXT Oborniki Śląskie",
				date: "22.10.2022",
				time: "18:30",
				score: "28:25(13:12)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "29.10.2022",
				time: "19:00",
				score: "28:24(14:14)",
				awayTeam: "AZS Uniwersytetu Zielonogórskiego",
				awayLogo: "zielona.jpg",
				awayDesc: "Logo AZS Uniwersytetu Zielonogórskiego",
			},
			{
				homeTeam: "UKS Olimp Grodków",
				homeLogo: "grodkow.jpg",
				homeDesc: "Logo UKS Olimp Grodków",
				date: "05.11.2022",
				time: "18:00",
				score: "24:40(14:18)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "19.11.2022",
				time: "19:00",
				score: "40:33(23:19)",
				awayTeam: "TS Zew Świebodzin",
				awayLogo: "swiebodzin.jpg",
				awayDesc: "Logo TS Zew Świebodzin",
			},
			{
				homeTeam: "DIOZ SPR Gorzyce Wielkie",
				homeLogo: "gorzyce.jpg",
				homeDesc: "Logo DIOZ SPR Gorzyce Wielkie",
				date: "26.11.2022",
				time: "11:00",
				score: "18:44(10:23)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "03.12.2022",
				time: "19:00",
				score: "33:26(17:13)",
				awayTeam: "UKS Trójka Nowa Sól",
				awayLogo: "nowa_sol.jpg",
				awayDesc: "Logo UKS Trójka Nowa Sól",
			},
			{
				homeTeam: "MKS Real-Astromal Leszno",
				homeLogo: "leszno.jpg",
				homeDesc: "Logo MKS Real-Astromal Leszno",
				date: "10.12.2022",
				time: "18:00",
				score: "19:33(12:18)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "17.12.2022",
				time: "19:00",
				score: "27:24(12:12)",
				awayTeam: "ŚKPR Świdnica",
				awayLogo: "swidnica_logo.jpg",
				awayDesc: "Logo ŚKPR Świdnica",
			},
			{
				homeTeam: "MSPR Siódemka-Miedź-Huras Legnica",
				homeLogo: "siodemka.jpg",
				homeDesc: "Logo MSPR Siódemka-Miedź-Huras Legnica",
				date: "28.01.2023",
				time: "18:30",
				score: "26:27(14:13)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "MKS Tęcza Folplast Kościan",
				homeLogo: "koscian.jpg",
				homeDesc: "Logo MKS Tęcza Folplast Kościan",
				date: "04.02.2023",
				time: "14:00",
				score: "19:28(9:9)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "11.02.2023",
				time: "19:00",
				score: "39:18(19:7)",
				awayTeam: "KPR Wolsztyniak Wolsztyn",
				awayLogo: "wolsztyn.jpg",
				awayDesc: "Logo KPR Wolsztyniak Wolsztyn",
			},
			{
				homeTeam: "EUCO-UKS Dziewiątka Legnica",
				homeLogo: "dziewiatka.jpg",
				homeDesc: "Logo EUCO-UKS Dziewiątka Legnica",
				date: "18.02.2023",
				time: "14:00",
				score: "27:26(13:13)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "WKS Grunwald Poznań",
				homeLogo: "poznan.jpg",
				homeDesc: "Logo WKS Grunwald Poznań",
				date: "25.02.2023",
				time: "18:00",
				score: "25:28(12:17)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "04.03.2023",
				time: "19:00",
				score: "31:16(11:6)",
				awayTeam: "SPR BÓR-JOYNEXT Oborniki Śląskie",
				awayLogo: "oborniki.jpg",
				awayDesc: "Logo SPR BÓR-JOYNEXT Oborniki Śląskie",
			},
			{
				homeTeam: "AZS Uniwersytetu Zielonogórskiego",
				homeLogo: "zielona.jpg",
				homeDesc: "Logo AZS Uniwersytetu Zielonogórskiego",
				date: "18.03.2023",
				time: "18:00",
				score: "23:34(8:16)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "25.03.2023",
				time: "19:00",
				score: "37:22(20:7)",
				awayTeam: "UKS Olimp Grodków",
				awayLogo: "grodkow.jpg",
				awayDesc: "Logo UKS Olimp Grodków",
			},
			{
				homeTeam: "TS Zew Świebodzin",
				homeLogo: "swiebodzin.jpg",
				homeDesc: "Logo TS Zew Świebodzin",
				date: "01.04.2023",
				time: "18:00",
				score: "28:32(11:12)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "14.04.2023",
				time: "19:00",
				score: "36:16(17:9)",
				awayTeam: "DIOZ SPR Gorzyce Wielkie",
				awayLogo: "gorzyce.jpg",
				awayDesc: "Logo DIOZ SPR Gorzyce Wielkie",
			},
			{
				homeTeam: "UKS Trójka Nowa Sól",
				homeLogo: "nowa_sol.jpg",
				homeDesc: "Logo UKS Trójka Nowa Sól",
				date: "22.04.2023",
				time: "17:00",
				score: "26:29(14:13)",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "06.05.2023",
				time: "17:00",
				score: "",
				awayTeam: "MKS Real-Astromal Leszno",
				awayLogo: "leszno.jpg",
				awayDesc: "Logo MKS Real-Astromal Leszno",
			},
			{
				homeTeam: "ŚKPR Świdnica",
				homeLogo: "swidnica_logo.jpg",
				homeDesc: "Logo ŚKPR Świdnica",
				date: "13.05.2023",
				time: "18:00",
				score: "",
				awayTeam: "SPR GOKiS Kąty Wrocławskie",
				awayLogo: "logo.jpg",
				awayDesc: "Logo SPR GOKiS Kąty Wrocławskie",
			},
			{
				homeTeam: "SPR GOKiS Kąty Wrocławskie",
				homeLogo: "logo.jpg",
				homeDesc: "Logo SPR GOKiS Kąty Wrocławskie",
				date: "20.05.2023",
				time: "",
				score: "",
				awayTeam: "MSPR Siódemka-Miedź-Huras Legnica",
				awayLogo: "siodemka.jpg",
				awayDesc: "Logo MSPR Siódemka-Miedź-Huras Legnica",
			},
		])

		index.value = resultsArray.value.findIndex(object => {
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
		return { index, resultsArray, increaseIndex, decreaseIndex }
	},
}
</script>
<style lang="scss"></style>
