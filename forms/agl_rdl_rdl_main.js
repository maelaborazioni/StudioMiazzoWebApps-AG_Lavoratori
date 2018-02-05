/**
 * @properties={typeid:24,uuid:"53FD0B7D-10D2-44C8-835C-7DB84E9D71E0"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: false };
		btnObj.btn_edit = { enabled: _enabled };
		btnObj.btn_delete = { enabled: false };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}
/**
 *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"6B00DBC6-41D5-4D3D-A0DF-C0AB68A2160B"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	controller.readOnly = true;
	_super.onShowForm(firstShow, event, false);
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"C6C70636-C4B0-4158-9EF7-A6AF390837A5"}
*/
function dc_edit(_event, _triggerForm, _forceForm) 
{
	_super.dc_edit(_event, _triggerForm, _forceForm);
	controller.readOnly = false;
    globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName(),null,null,null,true);
}