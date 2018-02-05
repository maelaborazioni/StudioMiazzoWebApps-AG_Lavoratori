/**
 * @properties={typeid:24,uuid:"5875BC97-CD54-4508-B1F0-2C359E5A3A83"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { visible: _enabled, enabled: _enabled };
		btnObj.btn_edit = { visible: _enabled, enabled: _enabled };
		btnObj.btn_delete = { visible: _enabled, enabled: _enabled };
		btnObj.btn_duplicate = { visible: false, enabled: false };
		
	return btnObj;
}
