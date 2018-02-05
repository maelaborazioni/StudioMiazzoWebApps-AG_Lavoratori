/**
 * @properties={typeid:24,uuid:"F03A91B0-7E7E-4C51-AC67-248AD093750E"}
 * @AllowToRunInFind
 */
function filterData(fs)
{
	fs = lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_statocivile;
	if(fs && fs.find())
	{
		fs.datadecorrenza = '^||<=' + globals.formatForFind(globals.TODAY);
		fs.datarilevazione = '^||<=' + globals.formatForFind(globals.TODAY);
		
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"0AC5ADFF-688D-4967-B06A-6B2A7506B8EF"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_statocivile;
	if(fs)
	{
		fs.loadAllRecords();
	}
}
