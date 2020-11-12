export const currentDate = new Date(Date.now());
const month = currentDate.getMonth();
const year = currentDate.getFullYear();

export const tasks = [
 {
   "id": 1,
   "parentId": 0,
   "title": "Apsardzes signalizācija",
   "amount": null,
   'start': new Date("2020-10-21T05:00:00.000Z"),
   'end': new Date("2020-11-21T05:00:00.000Z"),
   "progress": 31,
   "count": ""
 },
 {
   "id": 2,
   "parentId": 1,
   "title": "Metāliskais kommutācijas korpuss ",
   "amount": 47.63,
   'start': new Date("2020-10-21T05:00:00.000Z"),
   'end': new Date("2020-11-21T05:00:00.000Z"),
   "progress": 60,
   "count": "1"
 },
 {
   "id": 3,
   "parentId": 1,
   "title": "Apsardzes signalizācijas kontroles panelis,  (no 1 līdz 192 - zonas.)  DIGIPLEX EVO192",
   "amount": 100.2,
   'start': new Date("2020-10-21T05:00:00.000Z"),
   'end': new Date("2020-11-21T05:00:00.000Z"),
   "progress": 100,
   "count": "1"
 },
 {
   "id": 4,
   "parentId": 1,
   "title": "Tampers + Slēdzis ar atslēgām",
   "amount": 14.96,
   'start': new Date("2020-10-21T10:00:00.000Z"),
   'end': new Date("2020-11-21T10:00:00.000Z"),
   "progress": 100,
   "count": "1"
 },
 {
   "id": 5,
   "parentId": 1,
   "title": "Transformātors  ~220V ->16V 40W  TSZZB",
   "amount": 21.94,
   'start': new Date("2020-10-22T10:00:00.000Z"),
   'end': new Date("2020-11-22T10:00:00.000Z"),
   "progress": 60,
   "count": "1"
 },
 {
   "id": 6,
   "parentId": 1,
   "title": "Akumulatros 12Vdc, 7A/st",
   "amount": 13.12,
   'start': new Date("2020-10-25T10:00:00.000Z"),
   'end': new Date("2020-11-25T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 7,
   "parentId": 1,
   "title": "Apsardzes signalizācijas līdz 8 zonu paplāšīnātājs DIGIPLEX ZX8",
   "amount": 125.46,
   'start': new Date("2020-10-26T10:00:00.000Z"),
   'end': new Date("2020-11-26T10:00:00.000Z"),
   "progress": 80,
   "count": "2"
 },
 {
   "id": 8,
   "parentId": 1,
   "title": "Vadības pultis (touchscreen) ar LCD displēju ",
   "amount": 189.14,
   'start': new Date("2020-10-26T10:00:00.000Z"),
   'end': new Date("2020-11-26T10:00:00.000Z"),
   "progress": 100,
   "count": "2"
 },
 {
   "id": 9,
   "parentId": 1,
   "title": "Infrasarkanais kustības detektors un stikla plīšanas ",
   "amount": 346.9,
   'start': new Date("2020-10-05T10:00:00.000Z"),
   'end': new Date("2020-11-05T10:00:00.000Z"),
   "progress": 100,
   "count": "10"
 },
 {
   "id": 10,
   "parentId": 1,
   "title": "Infrasarkanais kustības detektors",
   "amount": 23.19,
   'start': new Date("2020-10-21T05:00:00.000Z"),
   'end': new Date("2020-11-21T05:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 11,
   "parentId": 1,
   "title": "Sienas kronšteins",
   "amount": 20.9,
   'start': new Date("2020-10-21T05:00:00.000Z"),
   'end': new Date("2020-11-21T05:00:00.000Z"),
   "progress": 0,
   "count": "11"
 },
 {
   "id": 12,
   "parentId": 1,
   "title": "Magnētiskais kontakts (Herkons) durvīm",
   "amount": 64.95,
   'start': new Date("2020-10-21T10:00:00.000Z"),
   'end': new Date("2020-11-21T10:00:00.000Z"),
   "progress": 0,
   "count": "3"
 },
 {
   "id": 13,
   "parentId": 1,
   "title": "Iekšējā signalizacijas sirēna ar lampu ",
   "amount": 42.54,
   'start': new Date("2020-10-22T10:00:00.000Z"),
   'end': new Date("2020-11-22T10:00:00.000Z"),
   "progress": 0,
   "count": "2"
 },
 {
   "id": 14,
   "parentId": 1,
   "title": "Signalizācijas kabelis 6x0.22",
   "amount": 289.8,
   'start': new Date("2020-10-25T10:00:00.000Z"),
   'end': new Date("2020-11-25T10:00:00.000Z"),
   "progress": 0,
   "count": "420"
 },
 {
   "id": 15,
   "parentId": 1,
   "title": "Signalizācijas kabelis 4x0.22",
   "amount": 62,
   'start': new Date("2020-10-26T10:00:00.000Z"),
   'end': new Date("2020-11-26T10:00:00.000Z"),
   "progress": 0,
   "count": "100"
 },
 {
   "id": 16,
   "parentId": 1,
   "title": "Gofrēta caurule ∅20 mm",
   "amount": 126,
   'start': new Date("2020-10-26T10:00:00.000Z"),
   'end': new Date("2020-11-26T10:00:00.000Z"),
   "progress": 0,
   "count": "150"
 },
 {
   "id": 17,
   "parentId": 1,
   "title": "Pārējie izdevumi (skrūves, metal. stiprinājumi, el.kārbas un citi materiāli,  transports, regulēšanas un programēšanas darbi.)",
   "amount": 333.86,
   'start': new Date("2020-10-05T10:00:00.000Z"),
   'end': new Date("2020-11-05T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 18,
   "parentId": 0,
   "title": "Datoru sistēma",
   "amount": null,
   'start': new Date("2020-11-21T05:00:00.000Z"),
   'end': new Date("2020-12-21T05:00:00.000Z"),
   "progress": 30,
   "count": ""
 },
 {
   "id": 19,
   "parentId": 18,
   "title": "Komutācijas panelis 24xRJ45 kat.6",
   "amount": 164.97,
   'start': new Date("2020-11-21T05:00:00.000Z"),
   'end': new Date("2020-12-21T05:00:00.000Z"),
   "progress": 0,
   "count": "3"
 },
 {
   "id": 20,
   "parentId": 18,
   "title": "Wi-Fi piekļuves punkts PoE",
   "amount": 299.6,
   'start': new Date("2020-11-21T10:00:00.000Z"),
   'end': new Date("2020-12-21T10:00:00.000Z"),
   "progress": 0,
   "count": "4"
 },
 {
   "id": 21,
   "parentId": 18,
   "title": "Plaukts skapī ",
   "amount": 23.05,
   'start': new Date("2020-11-22T10:00:00.000Z"),
   'end': new Date("2020-12-22T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 22,
   "parentId": 18,
   "title": "PoE inžektors",
   "amount": 124.64,
   'start': new Date("2020-11-25T10:00:00.000Z"),
   'end': new Date("2020-12-25T10:00:00.000Z"),
   "progress": 0,
   "count": "4"
 },
 {
   "id": 23,
   "parentId": 18,
   "title": "Tīkla maršrutētājs, ar 5 portiem un Wi-FI",
   "amount": 68.68,
   'start': new Date("2020-11-26T10:00:00.000Z"),
   'end': new Date("2020-12-26T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 24,
   "parentId": 18,
   "title": "Komutācijas skapis ar piederumiem 15U 750x600x600 ",
   "amount": 214,
   'start': new Date("2020-11-26T10:00:00.000Z"),
   'end': new Date("2020-12-26T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 25,
   "parentId": 18,
   "title": "Ventilators (2 gab.) ar termostatu",
   "amount": 68.82,
   'start': new Date("2020-12-05T10:00:00.000Z"),
   'end': new Date("2020-12-15T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 26,
   "parentId": 18,
   "title": "Kabeļu organizātors ",
   "amount": 10.86,
   'start': new Date("2020-11-26T10:00:00.000Z"),
   'end': new Date("2020-12-26T10:00:00.000Z"),
   "progress": 0,
   "count": "2"
 },
 {
   "id": 27,
   "parentId": 18,
   "title": "Datoru rozete 2xRJ45 (mehānissms, pārsēgs)",
   "amount": 473.52,
   'start': new Date("2020-11-26T10:00:00.000Z"),
   'end': new Date("2020-12-26T10:00:00.000Z"),
   "progress": 0,
   "count": "12"
 },
 {
   "id": 28,
   "parentId": 18,
   "title": "Datoru rozete 1xRJ45 (mehānissms, pārsēgs)",
   "amount": 350.16,
   'start': new Date("2020-11-05T10:00:00.000Z"),
   'end': new Date("2020-12-05T10:00:00.000Z"),
   "progress": 0,
   "count": "12"
 },
 {
   "id": 29,
   "parentId": 18,
   "title": "Datoru rozete 2xRJ45 grīdas kārbā (mehānissms)",
   "amount": 7.22,
   'start': new Date("2020-11-21T05:00:00.000Z"),
   'end': new Date("2020-12-21T05:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 30,
   "parentId": 18,
   "title": "Datoru rozete 1xRJ45 grīdas kārbā (mehānissms)",
   "amount": 5.75,
   'start': new Date("2020-11-21T05:00:00.000Z"),
   'end': new Date("2020-12-21T05:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 31,
   "parentId": 18,
   "title": "Montāžas kārba sienā rozetēm ",
   "amount": 47.04,
   'start': new Date("2020-11-21T10:00:00.000Z"),
   'end': new Date("2020-12-21T10:00:00.000Z"),
   "progress": 0,
   "count": "24"
 },
 {
   "id": 32,
   "parentId": 18,
   "title": "Savienošanas kabelis 0.5m, kat.6",
   "amount": 65.4,
   'start': new Date("2020-11-22T10:00:00.000Z"),
   'end': new Date("2020-12-22T10:00:00.000Z"),
   "progress": 0,
   "count": "60"
 },
 {
   "id": 33,
   "parentId": 18,
   "title": "Tīikla komutātors 48 port/ 1Gbit/s PoE",
   "amount": 1592.06,
   'start': new Date("2020-11-25T10:00:00.000Z"),
   'end': new Date("2020-12-25T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 34,
   "parentId": 18,
   "title": "Tīikla komutātors 24 port/ 1Gbit/s PoE",
   "amount": 723.17,
   'start': new Date("2020-11-26T10:00:00.000Z"),
   'end': new Date("2020-12-26T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 35,
   "parentId": 18,
   "title": "Datoru kabelis UTP kat.6",
   "amount": 1748,
   'start': new Date("2020-11-26T10:00:00.000Z"),
   'end': new Date("2020-12-26T10:00:00.000Z"),
   "progress": 0,
   "count": "########"
 },
 {
   "id": 36,
   "parentId": 18,
   "title": "Kabeļu aizsardzības caurules d=25mm ",
   "amount": 260.4,
   'start': new Date("2020-11-05T10:00:00.000Z"),
   'end': new Date("2020-12-05T10:00:00.000Z"),
   "progress": 0,
   "count": "280"
 },
 {
   "id": 37,
   "parentId": 18,
   "title": "Pārējie izdevumi (skrūves, metal. stiprinājumi, el.kārbas un citi materiāli,  transports, regulēšanas un programēšanas darbi.)",
   "amount": 761.5,
   'start': new Date("2020-11-21T05:00:00.000Z"),
   'end': new Date("2020-12-21T05:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 38,
   "parentId": 0,
   "title": "Piekļuves kontroles sistēma",
   "amount": null,
   'start': new Date("2020-12-21T05:00:00.000Z"),
   'end': new Date("2021-01-21T05:00:00.000Z"),
   "progress": 0,
   "count": ""
 },
 {
   "id": 39,
   "parentId": 38,
   "title": "Piekļuves kontroles karšu nolasitājs un kodu šifrātors",
   "amount": 437.85,
   'start': new Date("2020-12-21T10:00:00.000Z"),
   'end': new Date("2021-01-21T10:00:00.000Z"),
   "progress": 0,
   "count": "9"
 },
 {
   "id": 40,
   "parentId": 38,
   "title": "Divu durvju vadības kontroleiris",
   "amount": 855.35,
   'start': new Date("2020-12-22T10:00:00.000Z"),
   'end': new Date("2021-01-22T10:00:00.000Z"),
   "progress": 0,
   "count": "5"
 },
 {
   "id": 41,
   "parentId": 38,
   "title": "Programnodrošinājums ar darbu laika uzskaites iespējām",
   "amount": 1208.75,
   'start': new Date("2020-12-25T10:00:00.000Z"),
   'end': new Date("2021-01-25T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 42,
   "parentId": 38,
   "title": "Čip-Kartes",
   "amount": 87.9,
   'start': new Date("2020-12-26T10:00:00.000Z"),
   'end': new Date("2021-01-26T10:00:00.000Z"),
   "progress": 0,
   "count": "30"
 },
 {
   "id": 43,
   "parentId": 38,
   "title": "Portatīvais dators I3. 2Gb RAM, 1Tb HDD, 17\" LCD",
   "amount": 628.88,
   'start': new Date("2020-12-26T10:00:00.000Z"),
   'end': new Date("2021-01-26T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 44,
   "parentId": 38,
   "title": "Akumulatoru baterija 12Vdc 7A",
   "amount": 87.95,
   'start': new Date("2020-12-05T10:00:00.000Z"),
   'end': new Date("2021-01-05T10:00:00.000Z"),
   "progress": 0,
   "count": "5"
 },
 {
   "id": 45,
   "parentId": 38,
   "title": "El. sprūds (NO) ar metāl. plāksni",
   "amount": 4030.11,
   'start': new Date("2020-12-21T05:00:00.000Z"),
   'end': new Date("2021-01-21T05:00:00.000Z"),
   "progress": 0,
   "count": "9"
 },
 {
   "id": 46,
   "parentId": 38,
   "title": "Kabelis UTP kat.5e",
   "amount": 254.6,
   'start': new Date("2020-12-21T05:00:00.000Z"),
   'end': new Date("2021-01-21T05:00:00.000Z"),
   "progress": 0,
   "count": "380"
 },
 {
   "id": 47,
   "parentId": 38,
   "title": "Kabelis 2x0.8",
   "amount": 204,
   'start': new Date("2020-12-21T10:00:00.000Z"),
   'end': new Date("2021-01-21T10:00:00.000Z"),
   "progress": 0,
   "count": "300"
 },
 {
   "id": 48,
   "parentId": 38,
   "title": "Kabeļu aizsardzības caurules d=20mm ",
   "amount": 4.2,
   'start': new Date("2020-12-22T10:00:00.000Z"),
   'end': new Date("2021-01-22T10:00:00.000Z"),
   "progress": 0,
   "count": "5"
 },
 {
   "id": 49,
   "parentId": 38,
   "title": "Pārējie izdevumi (skrūves, metal. stiprinājumi, el.kārbas un citi materiāli,  transports, regulēšanas un programēšanas darbi.)",
   "amount": 817.39,
   'start': new Date("2020-12-25T10:00:00.000Z"),
   'end': new Date("2021-01-25T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 50,
   "parentId": 38,
   "title": "Videonovērošanas sistēma",
   "amount": null,
   'start': new Date("2020-12-26T10:00:00.000Z"),
   'end': new Date("2021-01-26T10:00:00.000Z"),
   "progress": 0,
   "count": ""
 },
 {
   "id": 51,
   "parentId": 38,
   "title": "Videonovērošanas datu ierakstītājs 16 kamerām (NVR) ",
   "amount": 277.25,
   'start': new Date("2020-12-26T10:00:00.000Z"),
   'end': new Date("2021-01-26T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 52,
   "parentId": 38,
   "title": "Cietais disks 6Tb ",
   "amount": 338.5,
   'start': new Date("2020-12-05T10:00:00.000Z"),
   'end': new Date("2021-01-05T10:00:00.000Z"),
   "progress": 0,
   "count": "2"
 },
 {
   "id": 53,
   "parentId": 38,
   "title": "Kupolaina videonovērošanas kamera 4MPix ar iebūvētu mikrofonu, PoE barošana",
   "amount": 2001.78,
   'start': new Date("2020-12-21T05:00:00.000Z"),
   'end': new Date("2021-01-21T05:00:00.000Z"),
   "progress": 0,
   "count": "11"
 },
 {
   "id": 54,
   "parentId": 38,
   "title": "Montāžas kārba",
   "amount": 141.79,
   'start': new Date("2020-12-21T05:00:00.000Z"),
   'end': new Date("2021-01-21T05:00:00.000Z"),
   "progress": 0,
   "count": "11"
 },
 {
   "id": 55,
   "parentId": 38,
   "title": "Datoru kabelis UTP kat.6 / кабель",
   "amount": 288.8,
   'start': new Date("2020-12-21T10:00:00.000Z"),
   'end': new Date("2021-01-21T10:00:00.000Z"),
   "progress": 0,
   "count": "380"
 },
 {
   "id": 56,
   "parentId": 38,
   "title": "Kabeļu aizsardzības caurules d=20mm",
   "amount": 33.6,
   'start': new Date("2020-12-22T10:00:00.000Z"),
   'end': new Date("2021-01-22T10:00:00.000Z"),
   "progress": 0,
   "count": "40"
 },
 {
   "id": 57,
   "parentId": 38,
   "title": "Pārējie izdevumi (skrūves, metal. stiprinājumi, el.kārbas un citi materiāli,  transports, regulēšanas un programēšanas darbi.)",
   "amount": 427.62,
   'start': new Date("2020-12-25T10:00:00.000Z"),
   'end': new Date("2021-01-25T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 58,
   "parentId": 0,
   "title": "WC izsaukšanas sistēma",
   "amount": null,
   'start': new Date("2020-12-26T10:00:00.000Z"),
   'end': new Date("2021-01-26T10:00:00.000Z"),
   "progress": 0,
   "count": ""
 },
 {
   "id": 59,
   "parentId": 58,
   "title": "Vides pieejamību personām ar funkcionāliem traucējumiem wc izsaukšanas sistēmas vadības panelis (10 zonas) ",
   "amount": 205.88,
   'start': new Date("2021-01-26T10:00:00.000Z"),
   'end': new Date("2021-02-26T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 60,
   "parentId": 58,
   "title": "Barošanas bloks 1A 12Vdc",
   "amount": 73.51,
   'start': new Date("2021-01-05T10:00:00.000Z"),
   'end': new Date("2021-02-05T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 61,
   "parentId": 58,
   "title": "Akumulatoru baterija 12V 7Ast",
   "amount": 17.59,
   'start': new Date("2021-01-21T05:00:00.000Z"),
   'end': new Date("2021-02-21T05:00:00.000Z"),
   "progress": 0,
   "count": "1"
 },
 {
   "id": 62,
   "parentId": 58,
   "title": "Gaismas un skaņas signalizātors virs durvīm",
   "amount": 120.66,
   'start': new Date("2021-01-21T05:00:00.000Z"),
   'end': new Date("2021-02-21T05:00:00.000Z"),
   "progress": 0,
   "count": "3"
 },
 {
   "id": 63,
   "parentId": 58,
   "title": "Sienas atjaunošanas poga ",
   "amount": 91.74,
   'start': new Date("2021-01-21T10:00:00.000Z"),
   'end': new Date("2021-02-21T10:00:00.000Z"),
   "progress": 0,
   "count": "3"
 },
 {
   "id": 64,
   "parentId": 58,
   "title": "Traukses izsaukšanas poga ",
   "amount": 199.44,
   'start': new Date("2021-01-22T10:00:00.000Z"),
   'end': new Date("2021-02-22T10:00:00.000Z"),
   "progress": 0,
   "count": "6"
 },
 {
   "id": 65,
   "parentId": 58,
   "title": "Z/A kārba pogām",
   "amount": 28.44,
   'start': new Date("2021-01-25T10:00:00.000Z"),
   'end': new Date("2021-02-25T10:00:00.000Z"),
   "progress": 0,
   "count": "9"
 },
 {
   "id": 66,
   "parentId": 58,
   "title": "Signalizācijas kabelis JY-Y(st)Y 2x2x0.8",
   "amount": 110.6,
   'start': new Date("2021-01-26T10:00:00.000Z"),
   'end': new Date("2021-02-26T10:00:00.000Z"),
   "progress": 0,
   "count": "140"
 },
 {
   "id": 67,
   "parentId": 58,
   "title": "Gofrēta caurule d=16mm",
   "amount": 45,
   'start': new Date("2021-01-26T10:00:00.000Z"),
   'end': new Date("2021-02-26T10:00:00.000Z"),
   "progress": 0,
   "count": "60"
 },
 {
   "id": 68,
   "parentId": 58,
   "title": "Pārējie izdevumi (skrūves, stipinājumi un citi materiāli, regulēšanas darbi utt.)",
   "amount": 509.5,
   'start': new Date("2021-01-05T10:00:00.000Z"),
   'end': new Date("2021-02-05T10:00:00.000Z"),
   "progress": 0,
   "count": "1"
 }
]


export const dependencies = [{
  'id': 1,
  'predecessorId': 3,
  'successorId': 4,
  'type': 0
}, {  'id': 18,
   'predecessorId': 30,
   'successorId': 40,
   'type': 0
},  {
  'id': 2,
  'predecessorId': 4,
  'successorId': 5,
  'type': 0
}, {
  'id': 3,
  'predecessorId': 5,
  'successorId': 6,
  'type': 0
}, {
  'id': 4,
  'predecessorId': 6,
  'successorId': 7,
  'type': 0
}, {
  'id': 5,
  'predecessorId': 7,
  'successorId': 9,
  'type': 0
}, {
  'id': 6,
  'predecessorId': 9,
  'successorId': 10,
  'type': 0
}, {
  'id': 7,
  'predecessorId': 10,
  'successorId': 11,
  'type': 0
}, {
  'id': 8,
  'predecessorId': 11,
  'successorId': 12,
  'type': 0
}, {
  'id': 9,
  'predecessorId': 12,
  'successorId': 13,
  'type': 0
}, {
  'id': 10,
  'predecessorId': 13,
  'successorId': 14,
  'type': 0
}];

export const resources = [{
  'id': 1,
  'text': 'Brigade Janka'
}, {
  'id': 2,
  'text': 'Brigade Ilja'
}, {
  'id': 3,
  'text': 'Brigade Andris'
}, {
  'id': 4,
  'text': 'Brigade Sandis'
}, {
  'id': 5,
  'text': 'Brigade Andrejs'
}, {
  'id': 6,
  'text': 'Brigade Solovjovs'
}, {
  'id': 7,
  'text': 'Brigade Ozols'
}, {
  'id': 8,
  'text': 'Brigade Dmitrijs'
}];

export const resourceAssignments = [{
  'id': 0,
  'taskId': 3,
  'resourceId': 1
}, {
  'id': 1,
  'taskId': 4,
  'resourceId': 1
}, {
  'id': 2,
  'taskId': 5,
  'resourceId': 2
}, {
  'id': 3,
  'taskId': 6,
  'resourceId': 2
}, {
  'id': 4,
  'taskId': 7,
  'resourceId': 3
}, {
  'id': 5,
  'taskId': 10,
  'resourceId': 3
}, {
  'id': 6,
  'taskId': 11,
  'resourceId': 2
}, {
  'id': 7,
  'taskId': 12,
  'resourceId': 2
}, {
  'id': 8,
  'taskId': 12,
  'resourceId': 3
}, {
  'id': 9,
  'taskId': 13,
  'resourceId': 3
}];
