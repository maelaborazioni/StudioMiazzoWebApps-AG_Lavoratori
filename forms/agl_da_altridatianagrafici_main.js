/**
 * @properties={typeid:24,uuid:"CB067841-7E39-4647-82FF-E8CE7C28FEB4"}
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
 * @param {Boolean} _firstShow
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"9F9CEC56-EDD2-4268-B4E6-5FFFD22933AE"}
 */
function onShowForm(_firstShow, _event) 
{
	application.output('Showing form agl_da_altridatianagrafici_main');
	application.output('Event source : ' + _event.getSource(),LOGGINGLEVEL.WARNING);
	application.output('Form source : ' + _event.getFormName(),LOGGINGLEVEL.WARNING);
	application.output('Event type : ' + _event.getType(),LOGGINGLEVEL.WARNING);
	_super.onShowForm(_firstShow, _event);
}
