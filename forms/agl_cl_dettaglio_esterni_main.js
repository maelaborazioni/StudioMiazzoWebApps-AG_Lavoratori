/**
 * @properties={typeid:24,uuid:"B3DE4DE1-7BB6-4F9B-8C2E-8EF853321C6B"}
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
 * @properties={typeid:24,uuid:"D8784A74-E9DF-44B6-9122-9F32C5FD0441"}
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
 * @properties={typeid:24,uuid:"6A5E7EF5-AB03-4E6C-8F17-02B63A8DE944"}
 */
function getHistoryFoundset()
{
	return foundset;//v_ditte_raggruppamenti_to_v_storico_lavoratori_raggruppamenti;
}

/**
 * @properties={typeid:24,uuid:"218CE65A-272B-4E9D-9D71-42D654A94E9F"}
 */
function sortFunction(first, second)
{
	return globals.nullFirstComparator(first, second, 'decorrenza', globals.OrderType.DESC);
}

/**
 * @properties={typeid:24,uuid:"2018FF3C-F3CD-4B62-9F4D-56AB65152A68"}
 */
function isHistoryEnabled()
{
	return false;
//	return globals.getTipologiaDitta(idditta) == globals.Tipologia.STANDARD
//	       && v_ditte_raggruppamenti_to_ditte_storico 
//	       && v_ditte_raggruppamenti_to_ditte_storico.abilitatastorico === 1;
}
