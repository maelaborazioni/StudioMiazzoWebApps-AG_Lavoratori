/**
 * @properties={typeid:24,uuid:"1DB885D9-0A4E-427F-B6D5-2695A4DC9910"}
 */
function getRequiredFieldsProgram()
{
	return 'AG_Req_StatoCivile';
}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"91668722-1D93-4639-99BF-9C7D1994E6E0"}
 */
function filterData(fs)
{
	fs = lavoratori_to_persone.persone_to_persone_statocivile;
	if(fs && fs.find())
	{
		fs.datadecorrenza = '^||<=' + globals.formatForFind(globals.TODAY);
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"99D48F55-156E-4AD3-B929-36EDC488C400"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_persone.persone_to_persone_statocivile;
	if(fs)
	{
		fs.loadAllRecords();
	}
}

/**
 * @properties={typeid:24,uuid:"AB208C37-61EE-4559-995F-87313EF7955B"}
 */
function getEditFormName()
{
	return forms.agl_statocivile_edit.controller.getName();
}

/**
 * @properties={typeid:24,uuid:"F0525C6F-7A46-49ED-84D1-154D84E76D52"}
 */
function getEditFoundset()
{
	return lavoratori_to_persone.persone_to_persone_statocivile;
}

/**
 * @properties={typeid:24,uuid:"4D7876C6-F631-401E-A3A0-EF033AEC2404"}
 */
function isHistoryEnabled()
{
	return false;
}
