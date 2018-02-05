/**
 * @properties={typeid:24,uuid:"669F36A0-D357-41E9-819E-E0195D478342"}
 */
function deleteRecord(event)
{
	var fs      = getEditFoundset();
	if(!globals.deleteRecord(fs))
		globals.ma_utl_showErrorDialog('Errore durante l\'eliminazione, riprovare');
	
	if (!isInShowHistory && fs.getSize() === 0)
		resetDetail();
	
	setFormButtons();
}

/**
 * @properties={typeid:24,uuid:"754A4721-37EE-41B7-BFA3-3994E7434E3A"}
 */
function resetDetail()
{
	forms.agl_dettagliotitolostudio_dtl.reset();
}

/**
 * @param [fs]
 * @param [sort]
 * 
 * @properties={typeid:24,uuid:"60115B1C-A74C-4BC2-8050-7526FD364E00"}
 */
function sortFoundset(fs, sort)
{
	return _super.sortFoundset(fs || getEditFoundset());
}

/**
 * @properties={typeid:24,uuid:"67736315-131F-4A5A-A3B4-2E84158D39CD"}
 */
function sortFunction(first, second)
{
	var order =          globals.nullFirstComparator(first, second, 'datadecorrenza' , globals.OrderType.DESC);
		order = order || globals.nullFirstComparator(first, second, 'datarilevazione', globals.OrderType.DESC);
		order = order || 
				first.persone_titolostudio_to_tab_titolistudio.descrizione < second.persone_titolostudio_to_tab_titolostudio.descrizione;
		order = order || 
				first.persone_titolostudio_to_tab_titolistudiodettaglio.descrizione < second.persone_titolostudio_to_tab_titolistudiodettaglio.descrizione;
		order = order || 
				first.persone_titolostudio_to_tab_titolistudiospecializzazioni.descrizione < second.persone_titolostudio_to_tab_titolistudiospecializzazioni.descrizione;		
	
		return order;
}

/**
 * @param {Boolean} [add]
 * @param {Boolean} [edit]
 * @param {Boolean} [del]
 * 
 * @properties={typeid:24,uuid:"2D0F4A5D-0480-4B7F-9847-895DDC9680CC"}
 */
function setFormButtons(add, edit, del)
{
	var fs = getEditFoundset();
	_super.setFormButtons(true, fs && fs.getSize() > 0, fs && fs.getSize() > 0);
}

/**
 * @properties={typeid:24,uuid:"88261B12-F4F2-4F8D-AFA7-785C3B9D63E8"}
 */
function getEditFormName()
{
	return forms.agl_dettagliotitolostudio_edit.controller.getName();
}

/**
 * @properties={typeid:24,uuid:"4A7B3A97-4CFE-4428-885D-2E2B5E0900FD"}
 */
function getEditFoundset()
{
	return lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_titolostudio;
}

/**
 * @properties={typeid:24,uuid:"925DED3D-4387-4092-9E33-14E8B7C72DA9"}
 */
function getRequiredFieldsProgram()
{
	return forms.agl_dettagliotitolostudio_edit.requiredFields;
}

/**
 * @properties={typeid:24,uuid:"7E7763B8-5763-461A-BFB2-E993530F2920"}
 * @AllowToRunInFind
 */
function filterData(fs)
{
	/**
	 * Just sort the foundset so the most recent record get displayed first
	 */
	fs = getEditFoundset();
    if(fs && fs.getSize() > 0)
    	sortFoundset(fs);
}

/**
 * @properties={typeid:24,uuid:"CEFA67C3-D19B-4F99-ABD5-A5746A73D8C3"}
 */
function unfilterData(fs)
{
	return _super.unfilterData(getEditFoundset());
}
