<template>
	<div v-if="exist">
		<SingleActualComponent :index="index" :array="actualsArray" />
	</div>
	<div class="error" v-else>
		Zasób do którego próbujesz się dostać nie jest dostępny.
	</div>
</template>
<script>
import SingleActualComponent from "../components/ActualsComponent/SingleActualComponent.vue"
import { ref } from "vue"

export default {
	components: { SingleActualComponent },

	props: {
		id: { type: String, required: true },
	},

	setup(props) {
		window.scrollTo(0, 0)
		console.log(props)
		let exist = ref(true)
		const index = ref(props.id - 1)
		const actualsArray = ref([
			{
				title: "Pewna wygrana Kątów",
				firstText: `Dnia 14 kwietnia 2023 roku Kąccy szczyporniści podejmowali na własnym parkiecie drużynę zajmującą ostatnie miejsce w tabeli. Szczypiorniści z Kątów od początku spotkanie narzucili swój styl gry już po pięciu minutach mieli kilku bramkową przewagę. Po pierwszej połowe gospodarze prowadzili 17:9`,
				secondText: `Druga odsłona spotakania to systematyczne powiększanie przewagi. Gospodarze nie oddali prowadzenia ani na chwilę i odnieśli 20 zwycięstwo w tym sezonie. Mecz skończył się wynikiem 36:16`,
				homeName: "Skład SPR GOKiS Kąty Wrocławskie:",
				homePlayers: `Wojtusik Paweł, Wiciak Wiktor(1), Gołda Kacper(1), Batura Maciej(4), Kalinowicz Oliwier(5),
				Kaźmierczak Adrian(5), Andrzejewski Konrad(1), Furman Paweł(4), Wysocki
				Michał(3), Serafin Bartosz(2), Kowalik Michał(2), Andrzejewski Bartosz(1),
				Rogaczewski Patryk(3), Ostrówka Sebastian(4), Wasilewicz Tomasz(2),
			    Ostrowski Krzysztof`,
				awayName: "Skład DIOZ SPR Górzyce Wielkie:",
				awayPlayers: `Kryszczak Gracjan, Kaniewski Michał(2), Salamon Grzegorz(2), Grzegorczyk Leon(1), Biegański Michał(2), Mazurek Dominiki(2), Szabliński Maciej, Iron Joachim(1), Kryszczak Mateusz(2), Szymkowiak Dawid, Błaszczyk Wojciech(4)`,
				imgSrc: "SPR-DIOZ.jpg",
				imgAlt:
					"Zdjęcia drużyny SPR GOKiS Kąty Wrocławskie po wygranym meczu z DIOZ SPR Górzyce Wielkie",
			},
			{
				title: "Twierdza Świebodzin zdobyta",
				firstText: `W dniu 01.04.2023r Kąccy szczypiorniści udali się na wyjazd do
				Świebodzina gdzie zmierzyli się z drużyną stanowiącą trzecią siłę w
				lidze. Mecz był bardzo zacięty, drużyny szły "łeb w łeb" lecz to
				szczypiorniści z Kątów zeszli na przerwę z minimalnym
				prowadzeniem.`,
				secondText: `Druga odsłona meczu także toczyła się "bramka za bramkę" lecz na około
				10 minut do końca spotkania Kąccy szczypiorniści wyszli na kilku
				bramkowe prawadzenie które udało się dowieźć do końca spotkania. Wynik
				końcowy 28:32(11:12)`,
				homeName: "Skład TS Zew Świebodzin:",
				homePlayers: `Święs Tomasz, Gaweł Wojciech, Bryza Przemysław(1), Cenin Maciej,
				Mieszkian Daniel(3), Pielichowski Mikołaj, Cenin Jakub(2), Kobeszko
				Szymon(1), Kwiatkowski Marek, Nogajewski Kamil (7), Jasiński Jędrzej(8),
				Kozłowski Marcin, Rudnicki Przemysław, Piwoński Jakub, Bosy
				Arkadiusz(3), Nowicki Marcin(3)`,
				awayName: "Skład SPR GOKiS Kąty Wrocławskie:",
				awayPlayers: `Gołda Kacper(1), Batura Maciej, Kalinowicz Oliwier(1), Król Dawid(8),
				Kaźmierczak Adrian, Andrzejewski Konrad, Furman Paweł, Wysocki
				Michał(4), Serafin Bartosz, Kowalik Michał(3), Andrzejewski Bartosz(2),
				Rogaczewski Patryk(8), Ostrówka Sebastian(2), Wasilewicz Tomasz(2),
				Massopust Piotr(1), Ostrowski Krzysztof`,
				imgSrc: "SPR-ZEW.jpg",
				imgAlt:
					"Zdjęcia drużyny SPR GOKiS Kąty Wrocławskie po wygranym meczu z TS Zew Świebodzin",
			},
			{
				title: "Kącka twierdza wciąż nie zdobyta",
				firstText: `25 marca br. Kącka drużyna podejmowała na własnej hali szczypiornistów z
				Grodkowa. Od początku spotkania gospodarze narzucili swój styl gry
				prezentując bardzo dobrą grę w obronie oraz punktując przeciwnika raz za
				razem szybkim atakiem. Goście zdobyli pierwszą bramkę dopiero w 12
				minucie spotkania, a wynik po pierwszych 30 minutach gry wynosił 20:7
				dla SPR-u.`,
				secondText: `Drugie 30 minut to pełna kontrola nad spotkaniem przez drużynę
				gospodarzy, ostatecznie Kąccy szczypiorniści pokonali przyjezdnych z
				Grodkowa 37:22 pozostając niepokonaną drużyną na własnym parkiecie`,
				homeName: "Skład SPR GOKiS Kąty Wrocławskie:",
				homePlayers: `Wojtusik Paweł, Wiciak Wiktor,Gołda Kacper(3), Batura Maciej(2),
				Kalinowicz Oliwier(6), Król Dawid(1), Kaźmierczak Adrian(5),
				Andrzejewski Konrad(4), Furman Paweł(1), Wysocki Michał(5), Andrzejewski
				Bartosz(1), Rogaczewski Patryk(6), Ostrówka Sebastian(1), Wasilewicz
				Tomasz, Massopust Piotr(2), Ostrowski Krzysztof`,
				awayName: "Skład UKS Olimp Grodków:",
				awayPlayers: `Wisła Marcin, Pietryka Kacper, Zawadzki Piotr(3), Lechowicz Tomasz,
				Garncarz Łukasz, Drojma Xawier, Wiśniowiecki Mateusz, Dyktyński
				Przemysław(1), Sobstel Karol, Migoń Jakub(2), Maciejewski Maciej(1),
				Kasperski Igor, Kolanko Sebastian(3), Jendryca Daniel(8), Niewiadomski
				Michał(4), Kusek Kamil`,
				imgSrc: "SPR-Grodkow.jpg",
				imgAlt:
					"Zdjęcia drużyny SPR GOKiS Kąty Wrocławskie po wygranym meczu z UKS Olimp Grodków",
			},
			{
				title: "Lokomotywa się nie zatrzymuje",
				firstText: `W ramach 19 kolejki pierwszej ligi piłkarzy ręcznych szczypiorniści z
				Kątów udali się na wyjazd do Zielonej Góry. Od początku spotkania
				szczypiorniści SPR-u kontrolowali przebieg spotkania nie oddając
				prowadzenia ani na chwilę drużynie gospodarzy, wynik po pierwszych 30
				minutach wynosił 8-16 dla Kątów.`,
				secondText: `Druga połowa przyniosła dalszą dominiację przez drużynę z Kątów
				Wrocławskich oraz stopniowe powiększania przewagi która ostatecznie po
				60 minutach wynosiła 11 bramek. Ostatecznie Kąccy szczypiorniści wygrali
				34:23`,
				homeName: "Skład AZS Uniwersytetu Zielonogórskiego:",
				homePlayers: `Kamiński Hubert(2), Kociszewski Cyprian(1), Matela Szymon(2), Ryniec
				Artur(1), Młynkowiac Alan, Osajda Aleksander, Błaszak Beniamin(2),
				Stępień Adam(1), Siedlecki Jakub, Staradubkin Wasili,Reszczyński
				Julian(5), Należyty Maciej(1), Chałupka Tyberiusz(3), Jaszczuk
				Jakub(5)`,
				awayName: "Skład SPR GOKiS Kąty Wrocławskie:",
				awayPlayers: `Wiciak Wiktor,Gołda Kacper(3), Batura Maciej(5), Kalinowicz Oliwier,
				Król Dawid(2), Kaźmierczak Adrian, Andrzejewski Konrad(2), Wysocki
				Michał(3), Serafin Bartosz, Kowalik Michał(1), Andrzejewski Bartosz(3),
				Rogaczewski Patryk(10), Ostrówka Sebastian(2), Wasilewicz Tomasz(1),
				Massopust Piotr(2), Ostrowski Krzysztof`,
				imgSrc: "SPR-AZS.jpg",
				imgAlt:
					"Zdjęcia drużyny SPR GOKiS Kąty Wrocławskie po wygranym meczu z KU AZS Uniwersytetu Zielonogórskiego",
			},
			{
				title: "Pogrom w derbach",
				firstText: `4 marca 2023r Kąccy szczypiorniści podejmowali na własnej hali drużynę z
				Obornik Śląskich. Początek meczu był bardzo nerwowy i żadna z drużyn nie
				potrafiła zdobyć pierwszej bramki, tej sztuki pierwsi dokonali goście
				wychodząc na prowadzenie w 6 minucie, lecz szczypiorniści z Kątów szybko
				odpowiedzieli swoim rywalom. Mecz toczył się "bramka za bramkę" do około
				20 minuty pierwszej połowy. Później gospodarze odskoczyli na kilka
				trafień i na przerwę schodzili z prowadzenie 11:6.`,
				secondText: `Druga część spotkanie to już dominacja oraz pokaż strzelecki drużyny z
				Kątów Wrocławskich, ostatecznie gospodarze zrewanżowali się swoim
				oponentom za przegraną z pierwszej rundy pewnie wygrywająć na własnym
				parkiecie 31:16`,
				homeName: "Skład SPR GOKiS Kąty Wrocławskie:",
				homePlayers: `Wojtusik Paweł, Wiciak Wiktor, Gołda Kacper, Batura Maciej(1),
				Kalinowicz Oliwier, Król Dawid(9), Kaźmierczak Adrian, Andrzejewski
				Konrad, Wysocki Michał(6), Serafin Bartosz, Andrzejewski Bartosz(3),
				Rogaczewski Patryk(8), Ostrówka Sebastian(1), Wasilewicz Tomasz,
				Massopust Piotr(3), Ostrowski Krzysztof`,
				awayName: "Skład SPR BÓR-JOYNEXT Oborniki Śląskie:",
				awayPlayers: `Siemierz Rafał(1), Żubrowski Bartosz(1), Dekarz Kamil, Piróg Piotr(10),
				Skrzypek Maciej, Kaźmirski Adrian, Hałka Borys(1), Krupiarz Michał(1),
				Latko Kacper, Philippe Julien, Fiłon Milan, Wiącek Patryk, Szabat
				Artur(2), Lasota Dominik, Sawicki Eryk, Borzymowski Marcin`,
				imgSrc: "SPR-BOR.jpg",
				imgAlt:
					"Zdjęcia drużyny SPR GOKiS Kąty Wrocławskie po wygranym meczu z SPR BÓR-JOYNEXT Oborniki Śląskie",
			},
		])

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
