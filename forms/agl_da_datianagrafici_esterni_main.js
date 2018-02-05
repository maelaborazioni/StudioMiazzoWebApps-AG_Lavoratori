/**
 * @properties={typeid:24,uuid:"1F69E341-6461-44BA-9DEA-D29CCCB132D2"}
 */
function getButtonObject()
{
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: false };
		btnObj.btn_edit = { enabled: true };
		btnObj.btn_delete = { enabled: false };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}

/**
 * @properties={typeid:24,uuid:"24919B00-D171-4AFF-B61C-182311148655"}
 */
function dc_edit(event, triggerForm, forceForm)
{
	forms.agp_datianagrafici_esterni_dtl.controller.readOnly = false;
	forms.agl_da_altridatianagrafici_dtl.controller.readOnly = false;
	
	// Crea un nuovo record se non presente
	if(!lavoratori_to_lavoratori_statoanag || lavoratori_to_lavoratori_statoanag.getSize() === 0)
		lavoratori_to_lavoratori_statoanag.newRecord();

	globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName())
	return _super.dc_edit(event, triggerForm, forceForm);
}
