/**
 * @properties={typeid:24,uuid:"06804F5B-E0D8-4D77-A02E-386F919EE06B"}
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
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"AB4BAFE8-C6E7-46C6-8AC8-B1891F74D0BE"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	controller.readOnly = true;
	_super.onShowForm(firstShow, event, true);
}
