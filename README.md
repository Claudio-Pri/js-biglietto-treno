# JS Biglietto treno

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

--chiedere età passeggero= variabile
--chiedere numero di km= variabile

--prezzo base= km * 0.21
---prezzo base= variabile


Prezzo base = prezzo finale

se età passeggero > 18 
--sconto = prezzo base / 100 * 20
--prezzo finale = prezzo base - sconto 

altrimenti se età passeggero >= 65
--sconto = prezzo base / 100 * 40
--prezzo finale = prezzo base - sconto 

altrimenti
--prezzo finale = prezzo base