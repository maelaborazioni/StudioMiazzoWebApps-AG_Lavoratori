/**
 * @properties={type:12,typeid:36,uuid:"DF624ADF-A63A-4C86-B859-6C1D17F923A3"}
 */
function iddittariferimento()
{
	return globals.getDittaRiferimento(idditta) || idditta;
}

/**
 * @properties={type:8,typeid:36,uuid:"1C46A1F8-4C5D-4FD7-91C0-FC17D1DDCADB"}
 */
function iddittaclassificazione()
{
	return lavoratori_classificazioni_to_ditte_classificazioni.iddittaclassificazione;
}
