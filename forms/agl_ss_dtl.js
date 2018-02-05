/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"6A5BB59F-503E-48EA-9384-7276CB8C6B02",variableType:12}
 */
var _codCategoria 
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C45D98DF-B554-4875-9E93-1111E25D1E04",variableType:12}
 */
var _descrCategoria
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"36AA55F1-EC30-4837-9863-442D39C5C734",variableType:12}
 */
var _codDettaglio
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"02F85A33-569C-461F-A0B1-01451D6A565A",variableType:12}
 */
var _descrDettaglio

/**
 * @type {Number}
 *
 * @param {Number}
 * 
 * @properties={typeid:35,uuid:"2ED42A5F-C23B-44C7-B8B1-3436789B3B2C",variableType:8}
 */
var _idDittaSchedaStorica = null;

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"30B8A08F-1B0A-4EC0-AA3E-FDCE8AAA0E4C",variableType:8}
 */
var _idDittaSchedaStoricaDettaglio = null;
/**
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"D4650E3D-C71D-4317-8A20-AFA8AB7B3139"}
 */
function AggiornaCategoria(_rec)
{
	_idDittaSchedaStorica = _rec['iddittaschedastorica'];
	_codCategoria = _rec['codice'];
	_descrCategoria = _rec['descrizione'];
}

/**
 * 
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"3AFC6580-467D-4BB1-8449-D7CCE26A1C4A"}
 */
function FiltraCategoria(_fs)
{
	_fs.addFoundSetFilterParam('idditta','=',forms.agl_header_dtl.idditta);
	
	return _fs;
}


/**
 * Aggiorna i campi dopo la selezione della categoria
 * 
 * @param {JSRecord} _rec
 *
 *
 * @properties={typeid:24,uuid:"17879F66-3EC3-4014-B8B2-91C95FC4CABA"}
 */
function AggiornaDettaglioCategoria(_rec)
{
	_idDittaSchedaStoricaDettaglio = _rec['iddittaschedastoricadettaglio'];
	_codDettaglio = _rec['codice'];
	_descrDettaglio = _rec['descrizione'];
}

/**
 * Filtra le categorie selezionabili per la ditta 
 * 
 * @param {JSFoundset} _fs
 *
 *
 * @properties={typeid:24,uuid:"2809644E-5ABF-45CF-BF1B-D4DCC08F1C19"}
 */
function FiltraDettaglioCategoria(_fs)
{
	_fs.addFoundSetFilterParam('idditta','=',forms.agl_header_dtl.idditta);
	_fs.addFoundSetFilterParam('iddittaschedastorica','=',_idDittaSchedaStorica);
	
	return _fs;
}