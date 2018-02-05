/**
 * @properties={type:4,typeid:36,uuid:"022C5B34-6801-44C6-9627-5295B5B0405C"}
 */
function id_legato_int()
{
	return parseInt(id_legato,10);
}

/**
 * @properties={type:12,typeid:36,uuid:"8D47F2BC-6191-43E2-9576-A2B7B6850E6E"}
 */
function valore_mostrato()
{
	if(iddcg_campi == 3 && e2dcg_decorrenza_to_e2regole &&  e2dcg_decorrenza_to_e2regole.getSize() > 0)
		return e2dcg_decorrenza_to_e2regole.codiceregola;
	else 
		return valore;
}
