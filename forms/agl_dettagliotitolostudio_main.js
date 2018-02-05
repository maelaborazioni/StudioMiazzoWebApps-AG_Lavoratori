/**
 * @properties={typeid:24,uuid:"1F6CE1D0-1942-464E-B9B7-C6B6E1132D1F"}
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
 * @properties={typeid:24,uuid:"6906A8FE-B6CE-499E-88CE-F46A5D1770C4"}
 */
function resetDetail()
{
	forms.agl_dettagliotitolostudio_dtl.reset();
}

/**
 * @param [fs]
 * @param [sort]
 * 
 * @properties={typeid:24,uuid:"6689C0B8-F16D-4F7E-8FE7-5925F6478F08"}
 */
function sortFoundset(fs, sort)
{
	return _super.sortFoundset(fs || getEditFoundset());
}

/**
 * @properties={typeid:24,uuid:"51C5AA23-2335-4323-AC04-434C65A412B0"}
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
 * @properties={typeid:24,uuid:"377807C1-A40A-4B66-9001-AB3371394577"}
 */
function setFormButtons(add, edit, del)
{
	var fs = getEditFoundset();
	_super.setFormButtons(true, fs && fs.getSize() > 0, fs && fs.getSize() > 0);
}

/**
 * @properties={typeid:24,uuid:"9ACCFAA1-14BD-4D3A-9C63-956101E74020"}
 */
function getEditFormName()
{
	return forms.agl_dettagliotitolostudio_edit.controller.getName();
}

/**
 * @properties={typeid:24,uuid:"C5555D57-FB9B-4503-B6DB-35CAB4C0F3F2"}
 */
function getEditFoundset()
{
	return lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_titolostudio;
}

/**
 * @properties={typeid:24,uuid:"A5F40F73-2A87-411A-BD76-A3FFE0A9523F"}
 */
function getRequiredFieldsProgram()
{
	return forms.agl_dettagliotitolostudio_edit.requiredFields;
}

/**
 * @properties={typeid:24,uuid:"AB57C722-1397-4B8A-B927-80F660549ABB"}
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
 * @properties={typeid:24,uuid:"8D34F706-ED7B-4190-B44C-A98E7B1435A4"}
 */
function unfilterData(fs)
{
	return _super.unfilterData(getEditFoundset());
}
