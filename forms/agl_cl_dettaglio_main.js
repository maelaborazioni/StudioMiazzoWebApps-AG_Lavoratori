/**
 * @properties={typeid:24,uuid:"A0D4D61B-0A45-48D0-AFB7-685404E25D26"}
 * @AllowToRunInFind
 */
function filterData(fs)
{
//	fs = getHistoryFoundset();
//	
//	if(fs && fs.find())
//	{
//		fs.idlavoratore = forms.agl_header_dtl.idlavoratore//forms.agl_header_dtl.idlavoratore_sede;
//		fs.search();
//		
//		fs.getSize() > 0 && fs.sort(sortFunction);
//		
//		var firstRecordPk = fs.iddettaglio;
//		if(fs && fs.find())
//		{
//			fs.iddettaglio = firstRecordPk;
//			fs.idlavoratore = forms.agl_header_dtl.idlavoratore//forms.agl_header_dtl.idlavoratore_sede
//			fs.search();
//		}
//	}
}

/**
 * @properties={typeid:24,uuid:"6DFB27DF-FDDB-4F54-8845-8F9A8D16B087"}
 * @AllowToRunInFind
 */
function unfilterData(fs)
{
//	fs = getHistoryFoundset();
//	if(fs && fs.find())
//	{
//		fs.idlavoratore = forms.agl_header_dtl.idlavoratore//forms.agl_header_dtl.idlavoratore_sede;
//		fs.search();
//		
//		fs.getSize() > 0 && fs.sort(sortFunction);
//	}
}

/**
 * @return {JSFoundset<db:/ma_anagrafiche/v_storico_lavoratori_raggruppamenti>}
 * 
 * @properties={typeid:24,uuid:"C08E55E3-BC84-4537-8E24-3AD62AC75C46"}
 */
function getHistoryFoundset()
{
	return foundset;//v_ditte_raggruppamenti_to_v_storico_lavoratori_raggruppamenti;
}

/**
 * @properties={typeid:24,uuid:"67DA4E30-BFB8-4EEC-8EFD-0DE1680251C5"}
 */
function sortFunction(first, second)
{
	return globals.nullFirstComparator(first, second, 'decorrenza', globals.OrderType.DESC);
}

/**
 * @properties={typeid:24,uuid:"230BCE0D-2958-449B-83BE-9BCF13058559"}
 */
function isHistoryEnabled()
{
	return false;
//	return globals.getTipologiaDitta(idditta) == globals.Tipologia.STANDARD
//	       && v_ditte_raggruppamenti_to_ditte_storico 
//	       && v_ditte_raggruppamenti_to_ditte_storico.abilitatastorico === 1;
}
