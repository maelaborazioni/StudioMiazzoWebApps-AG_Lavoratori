/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AECF88EF-D106-4D06-8E91-462084FA0DF7",variableType:12}
 */
var _codTurnista = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"44CADA96-1CDD-4666-AEB4-D6E19B5E8D1C",variableType:12}
 */
var _descTurnista = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"42C86B9E-75D9-4B9E-B49E-6B8D4FEB001B",variableType:4}
 */
var _idTurnista = -1;

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"55B5863F-C587-4B2C-8686-19DCDCF95D78"}
 * @AllowToRunInFind
 */
function AggiornaTurno(_rec) {
	
	//portare aggiornamento relativamente alla gestione turni
	_codTurnista = _rec['codice'];
	_descTurnista = _rec['descrizione'];
	_idTurnista = _rec['idtabtipiturno'];

}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"91B6A9CA-239E-453D-8FD2-85DDE0BDD2AD"}
 * @AllowToRunInFind
 */
function onDataChangeTurno(oldValue, newValue, event) {
	
	/** @type {JSFoundset<db:/ma_presenze/e2tabtipiturno>} */
	var _foundset = databaseManager.getFoundSet(globals.nav.program['AG_Lkp_TipiTurno'].server_name,
		                                        globals.nav.program['AG_Lkp_TipiTurno'].table_name);

	if(_foundset.find())
		_foundset.codice = newValue;
	_foundset.search();

	if (_foundset.getSize() > 0) {

	    AggiornaTurno(_foundset.getSelectedRecord());
		
	} else {
		globals.svy_nav_showLookupWindow(event, null, 'AG_Lkp_TipiTurno', 'AggiornaTurno',
		  	                             null, null, null, '', true);
	}
	
	return true;
}
