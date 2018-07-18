/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"82564ECE-8A14-4E39-839B-BA9C901C36E1"}
 */
var _codRegola = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D78DA88F-B4EA-4615-B2C9-C536C75F67B0"}
 */
var _descRegola = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"65A69901-78F4-41B4-BF54-334E05F55E5D"}
 */
var _descRiga = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D8EE921D-DCDA-4AA7-8BDD-65932B01AD4B",variableType:4}
 */
var _idRegola = -1;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"18CE2577-963B-4219-A661-1EB619AD3362"}
 */
var _riga = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"4008EF6B-40BA-4561-A8AE-74EE5F7AEBFC"}
 */
var _valoreAgg = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"AA58C82A-0825-45B5-A557-F587D34D3D39"}
 */
var _oldCodRegola = '';

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"E3C2A528-2D21-496F-83C7-CB5292F98F7F"}
 */
function FiltraDittaRO(_fs) {

	var idDittaLegame; 
	
	//nel caso di ditta esterna di tipo interinale
	if(forms.agl_dd_main.lavoratori_to_ditte.tipologia == 1
			&& forms.agl_dd_main.lavoratori_to_ditte.ditte_to_ditte_legami.tipoesterni == 0)
			idDittaLegame = forms.agl_dd_main.lavoratori_to_ditte.ditte_to_ditte_legami.iddittariferimento;
	else
		idDittaLegame = forms.agl_dd_main.idditta;
	
	_fs.addFoundSetFilterParam('idditta','=', idDittaLegame);
	return _fs;

}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"D8AB6CEE-BF8A-4D14-B214-A3ECE1722ADA"}
 */
function FiltraRegola(_fs) {

	_fs.addFoundSetFilterParam('idregole','=',forms.agl_dd_dtl_l._valore);
	return _fs;

}

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"84EFC7F5-225B-4B46-A2B3-93272C3CD26C"}
 * @AllowToRunInFind
 */
function AggiornaRegola(_rec) {
	
	_idRegola = _rec['idregole'];
	_codRegola = _rec['codiceregola'];
	_descRegola = _rec['descrizioneregola'];
    
//	TODO AggiornaRegola verifica esistenza decorrenza
    if(!forms.agl_dd_dtl_l._decorrenza)
	{
		globals.ma_utl_showWarningDialog('Controllare la data di assunzione','Aggiornamento regola');
		return;
	}
	
	// se la regola è cambiata o non è ancora stato inserito un giorno di partenza va aggiornato il giorno di partenza stesso
	if (!_valoreAgg || _codRegola != _oldCodRegola) 
	{
		_valoreAgg = forms.agl_dd_dtl_l._valore = _rec['idregole'];

		var sqlRigaRegola = 'SELECT dbo.F_Regola_DefaultPartenza(?,?)';
		var arrRigaRegola = [_rec['idregole'], utils.dateFormat(forms.agl_dd_dtl_l._decorrenza, globals.ISO_DATEFORMAT)];
		var dsRigaRegola = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, sqlRigaRegola, arrRigaRegola, 1);
		var riga = dsRigaRegola.getValue(1, 1);

		//aggiorniamo automaticamente il giorno di partenza della regola
		var fsGiorno = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.REGOLE_FASCE);
		if (fsGiorno.find())
		{
			fsGiorno['idregole'] = _rec['idregole'];
			fsGiorno['riga'] = riga;
			fsGiorno.search();
		}
		_valoreAgg = riga;
		_descRiga = fsGiorno['e2regolefasce_to_e2fo_fasceorarie']['descrizione'] ? fsGiorno['e2regolefasce_to_e2fo_fasceorarie']['descrizione'] : fsGiorno['e2regolefasce_to_e2fo_fasceorarie']['descrizautogenerata'];
	}
}

/** 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"24F15F8A-02C2-453C-8B63-D2726596691F"}
 */
function AggiornaRiga(_rec) {

	_valoreAgg = _rec['riga'];
	_descRiga = _rec['e2regolefasce_to_e2fo_fasceorarie']['descrizione'] ?
    _rec['e2regolefasce_to_e2fo_fasceorarie']['descrizione'] :
	_rec['e2regolefasce_to_e2fo_fasceorarie']['descrizautogenerata'];

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
 * @properties={typeid:24,uuid:"588B0A0A-486E-4032-BCDF-CBB3A4E15299"}
 * @AllowToRunInFind
 */
function onDataChangeRegola(oldValue, newValue, event) {
	
	/** @type {JSFoundSet<db:/ma_presenze/e2regole>} */
	var _foundset = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,
		                                        globals.Table.REGOLE);

	if(_foundset.find())
	{
		_foundset.idditta = forms.agl_dd_main.idditta;
		_foundset.codiceregola = newValue;
	    _foundset.search();
	}
	if (_foundset.getSize() == 1)
	{
		_oldCodRegola = oldValue;
		AggiornaRegola(_foundset.getSelectedRecord());
		
	} else
		showLkpRegoleOrarie(event);
	
	return true;
}

/**
 * @param {JSEvent}  event
 * 
 * @properties={typeid:24,uuid:"6D9AADB7-E3CB-48D0-AD08-32A27C746A5D"}
 */
function showLkpRegoleOrarie(event)
{
	_oldCodRegola = _codRegola;
	globals.svy_nav_showLookupWindow(event, null, 'LEAF_Lkp_Regoleorarie', 'AggiornaRegola',
	  	                             'FiltraDittaRO', null, null, '', true);
	
}

/**
 * @properties={typeid:24,uuid:"4EA73791-A95A-4E9C-908B-69077BA67479"}
 * @AllowToRunInFind
 */
function validaRegola()
{
	if(_idRegola && _codRegola && _valoreAgg)
	{
		/** @type {JSFoundSet<db:/ma_presenze/e2regole>} */
		var _foundset = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,
			                                        globals.Table.REGOLE);

		if(_foundset.find())
		{
			var _idditta = (forms.agl_dd_main.lavoratori_to_ditte.tipologia == 1 
			               && forms.agl_dd_main.lavoratori_to_ditte.ditte_to_ditte_legami.tipoesterni == 0) ?
					    forms.agl_dd_main.lavoratori_to_ditte.ditte_to_ditte_legami.iddittariferimento :
					    forms.agl_dd_main.idditta;	
			_foundset.idditta = _idditta;
			_foundset.codiceregola = _codRegola;
		    _foundset.search();
		}
		if (_foundset.getSize() == 1)
		return true;
	}
	
	return false;
}
