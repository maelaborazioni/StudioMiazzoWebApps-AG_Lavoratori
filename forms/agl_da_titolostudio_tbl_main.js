/**
 * @properties={typeid:24,uuid:"FF1D4FA0-FC11-43EE-B10C-EF266817B665"}
 * @AllowToRunInFind
 */
function filterData(fs)
{
	fs = lavoratori_to_persone.persone_to_persone_titolostudio;
		
	if(fs && fs.find())
	{
		fs.datadecorrenza = '^||<=' + globals.formatForFind(globals.TODAY);
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"C46381A2-AA65-4701-9AB9-02818ECFC6F1"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_persone.persone_to_persone_titolostudio;
	
	if(fs)
	{
		fs.loadAllRecords();
	}
}

/**
 * @properties={typeid:24,uuid:"F84AD85B-EAC7-4C82-AD30-CB808C4CA105"}
 */
function isHistoryEnabled()
{
	return false;
}
