/**
 * @properties={typeid:24,uuid:"D4F037A0-8413-4023-B585-D30906F6107A"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA;
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: false };
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
* @properties={typeid:24,uuid:"894CA644-D9EB-4829-822A-95382518E421"}
*/
function dc_edit(_event, _triggerForm, _forceForm)
{
	// TODO creare form di dettaglio per la gestione delle coordinate bancarie del lavoratore...
	globals.ma_utl_showWarningDialog('Under construction...','Pagamento retribuzione lavoratore esterno');
}
