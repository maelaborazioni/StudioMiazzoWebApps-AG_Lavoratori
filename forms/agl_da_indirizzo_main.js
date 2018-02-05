/**
 * @properties={typeid:24,uuid:"52A31404-3C01-4CB8-BF83-2C151E5364CD"}
 */
function getEditFormName()
{
	return forms.agl_indirizzo_edit.controller.getName();
}

/**
 * @properties={typeid:24,uuid:"6DEAF749-A586-4A7E-A551-38858AE95F34"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
	
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: _enabled };
		btnObj.btn_edit = { enabled: _enabled };
		btnObj.btn_delete = { enabled: _enabled };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"E42A9CA8-2922-4058-AFC3-513A9ABF5409"}
*/
function dc_new(_event, _triggerForm, _forceForm) {
	return _super.dc_new(_event, _triggerForm, _forceForm)
}

/**
*
* @param event
* @param triggerForm
* @param forceForm
*
* @properties={typeid:24,uuid:"5DB2A50C-E9F2-4469-8998-8D8947C38E6B"}
*/
function dc_edit(event, triggerForm, forceForm) {
	return _super.dc_edit(event, triggerForm, forceForm)
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
* @param {Boolean} _noConfirm
*
* @properties={typeid:24,uuid:"06440325-749C-4122-A0C6-9F10E7723605"}
*/
function dc_delete(_event, _triggerForm, _forceForm, _noConfirm) {
	return _super.dc_delete(_event, _triggerForm, _forceForm, _noConfirm)
}
