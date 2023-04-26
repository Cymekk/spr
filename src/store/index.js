import { createStore } from "vuex"

const store = createStore({
	state: {
		resultsArray: [
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
		],

		actualsArray: [
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
		],

		playersArray: [
			{
				name: "Adrian Kaźmierczak",
				role: "Rozgrywający",
				number: "10",
				imgSrc: "Adrian_Kaźmierczak.png",
			},

			{
				name: "Alicja Łukasik",
				role: "Trener Zespołu",
				imgSrc: "Alicja_Łukasik.png",
			},
			{
				name: "Bartosz Wróblewski",
				role: "Rozgrywający",
				number: "23",
				imgSrc: "Bartosz_Wroblewski.png",
			},
			{
				name: "Kacper Gołda",
				role: "Rozgrywający",
				number: "5",
				imgSrc: "Kacper_Gołda.png",
			},
			{
				name: "Konrad Andrzejewski",
				role: "Rozgrywający",
				number: "16",
				imgSrc: "Konrad_Andrzejewski.png",
			},
			{
				name: "Krzysztof Zubko",
				role: "Obrotowy",
				number: "42",
				imgSrc: "Krzysiek_Zubko.png",
			},
			{
				name: "Maciej Batura",
				role: "Rozgrywający",
				number: "6",
				imgSrc: "Maciej_Batura.png",
			},
			{
				name: "Michał Wysocki",
				role: "Skrzydłowy",
				number: "20",
				imgSrc: "Michal_Wysocki.png",
			},
			{
				name: "Paweł Wojtusik",
				role: "Bramkarz",
				number: "1",
				imgSrc: "Pawel_Wojtusik.png",
			},
			{
				name: "Piotr Massopust",
				role: "Obrotowy",
				number: "94",
				imgSrc: "Piotr_Massopust.png",
			},
			{
				name: "Sebastian Ostrówka",
				role: "Rozgrywający",
				number: "69",
				imgSrc: "Sebastian_Ostrówka.png",
			},
			{
				name: "Tomasz Wasilewicz",
				role: "Bramkarz",
				number: "85",
				imgSrc: "Tomasz_Wasilewicz.png",
			},
		],
	},
	getters: {},
	mutations: {},
	actions: {},
})

export default store
