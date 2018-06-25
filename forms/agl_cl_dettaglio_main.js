/**
 * @properties={typeid:24,uuid:"B3A4E484-EDEA-42BF-A6BE-DF4EF142F66B"}
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
 * @properties={typeid:24,uuid:"400B0BDD-C7BC-416D-8618-82744ACE8297"}
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
 * @properties={typeid:24,uuid:"9CFD211B-3186-40CC-84F6-7363A849D9F0"}
 */
function getHistoryFoundset()
{
	return foundset;//v_ditte_raggruppamenti_to_v_storico_lavoratori_raggruppamenti;
}

/**
 * @properties={typeid:24,uuid:"C1DD2232-3E31-435A-8D70-A6771511E538"}
 */
function sortFunction(first, second)
{
	return globals.nullFirstComparator(first, second, 'decorrenza', globals.OrderType.DESC);
}

/**
 * @properties={typeid:24,uuid:"0F38AAAD-76EB-4940-B73F-247B5BCA2AB0"}
 */
function isHistoryEnabled()
{
	return false;
//	return globals.getTipologiaDitta(idditta) == globals.Tipologia.STANDARD
//	       && v_ditte_raggruppamenti_to_ditte_storico 
//	       && v_ditte_raggruppamenti_to_ditte_storico.abilitatastorico === 1;
}
