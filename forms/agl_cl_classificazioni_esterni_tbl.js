/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DC47F9F0-4296-424C-9ADE-C06AE6C9C882"}
 * @AllowToRunInFind
 */
function onRecordSelection(event) 
{
	updateData();
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"91172585-7870-488A-A449-80F61F353E48"}
 */
function updateData()
{
	var frm = forms.agl_cl_dettaglio_esterni_main;
	var fs = frm.foundset;
	
	if(foundset && foundset.getSize() && fs.find())
	{
		fs['idlavoratore'] = forms.agl_header_esterni_dtl.idlavoratore;
		fs['codtipoclassificazione'] = foundset.getSelectedRecord().codice;
		fs.search();
		fs.sort('codice asc');
	}
	else
		fs.clear();
}
