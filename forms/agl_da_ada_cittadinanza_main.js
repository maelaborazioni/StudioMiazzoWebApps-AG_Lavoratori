/**
 * @properties={typeid:24,uuid:"063142AD-3A1F-458D-A62E-F568A1611662"}
 */
function getRequiredFieldsProgram()
{
	return 'AG_Req_Cittadinanza';
}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"A8256E8C-FBBB-4572-A463-FA2E3623885B"}
 */
function filterData(fs)
{
	fs = lavoratori_to_persone.persone_to_persone_cittadinanza;
	if(fs && fs.find())
	{
		fs.datadecorrenza = '^||<=' + globals.formatForFind(globals.TODAY);
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"26A4A396-E4E7-4D37-AB7A-6FDABAE73929"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_persone.persone_to_persone_cittadinanza;
	if(fs)
	{
		fs.loadAllRecords();
	}
}

/**
 * @properties={typeid:24,uuid:"6E2345D7-D9D2-4D84-B899-DDDA0DDB6845"}
 */
function getEditFormName()
{
	// TODO verificare editing cittadinanza
	//return forms.agl_cittadinanza_edit.controller.getName();
}

/**
 * @properties={typeid:24,uuid:"4048FF68-E826-46BD-8BA7-F63D96560A92"}
 */
function getEditFoundset()
{
	return lavoratori_to_persone.persone_to_persone_cittadinanza;
}

/**
 * @properties={typeid:24,uuid:"EB13B5F2-797E-477D-8A37-65E2F39A3128"}
 */
function isHistoryEnabled()
{
	return false;
}
