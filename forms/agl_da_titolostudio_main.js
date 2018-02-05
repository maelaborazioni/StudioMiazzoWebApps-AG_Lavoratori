/**
 * @properties={typeid:24,uuid:"5264B1DD-E29C-463C-994B-52193493A660"}
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
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"FD6E8C2D-F8DE-4D75-AD93-77866BA4845A"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	controller.readOnly = true;
	_super.onShowForm(firstShow, event, false);
}
