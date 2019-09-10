/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"A5DD87A8-6D74-42E3-9B63-47C17EC0AC8F"}
 * @AllowToRunInFind
 */
function onRecordSelection(event) 
{
	updateData();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"F80E7743-3564-4FC3-9573-424CD3B5462F"}
 */
function updateData()
{
	var frm = forms.agl_cl_dettaglio_main;
	var fs = frm.foundset;
	var frmTbl = forms.agl_cl_dettaglio_tbl;
	var fsTbl = frmTbl.foundset;
	
	if(foundset && foundset.getSize() && fs.find())
	{
		fs.codtipoclassificazione = foundset.codice;
		if(fs.search())
		{
			fsTbl.find();
			fsTbl.iddittaclassificazione = foundset.iddittaclassificazione;
			fsTbl.codice = fs.codclassificazione;
			fsTbl.search();
			fsTbl.sort('codice asc');
		}
		else
			fsTbl.clear();
	}
	else
		fsTbl.clear();	
}