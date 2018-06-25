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
	
	if(foundset && foundset.getSize() && fs.find())
	{
		fs['codtipoclassificazione'] = foundset.getSelectedRecord().codice;
		fs.search();
		fs.sort('codice asc');
	}
	else
		fs.clear();
}