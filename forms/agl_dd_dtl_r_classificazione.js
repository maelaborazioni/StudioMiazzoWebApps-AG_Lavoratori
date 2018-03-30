/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"4BD08FA9-6FAA-4AA1-95C7-AD21BFD8D528",variableType:8}
 */
var _codClassif = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"A37C4A96-4464-453A-AA1A-ADBBE5FA1897"}
 */
var _descClassif = '';

/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"BF9D405B-6542-4DCE-AB4F-D03B974C53E3",variableType:8}
 */
var _codClassifDett = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7633F51B-918B-4DFA-9A33-9F5F2C97A2CD"}
 */
var _descClassifDett = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"26300979-C2F0-4E3A-8DCB-B9FC4022E7AC",variableType:4}
 */
var _idClassif = null;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"30494B36-9481-4320-BB85-3726AF4AC685",variableType:4}
 */
var _idClassifDett = null;

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"9DBE3CB0-57CE-48E1-A1E3-BB23967045ED"}
 * @AllowToRunInFind
 */
function FiltraClassif(_fs) {

	var idDittaLegame; 
	var arrGruppiDitte = [];
	
	//nel caso di ditta esterna di tipo interinale
	if(forms.agl_dd_main.lavoratori_to_ditte.tipologia == 1
			&& forms.agl_dd_main.lavoratori_to_ditte.ditte_to_ditte_legami.tipoesterni == 0)
			idDittaLegame = forms.agl_dd_main.lavoratori_to_ditte.ditte_to_ditte_legami.iddittariferimento;
	else
		idDittaLegame = forms.agl_dd_main.idditta;
	
	/**@type {JSFoundset<db:/ma_anagrafiche/gruppi_ditte>}*/
	var fsGruppiDitte = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.GRUPPI_DITTE)
	if(fsGruppiDitte.find())
	{
		fsGruppiDitte.idditta = idDittaLegame;
		if(fsGruppiDitte.search())
			arrGruppiDitte = globals.foundsetToArray(fsGruppiDitte,'idgruppo');		
	}
		
	fsGruppiDitte.addFoundSetFilterParam('idgruppo','IN',arrGruppiDitte);
	return _fs;

}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"7F43DFBF-0159-4038-8C36-73B1885BB93E"}
 */
function FiltraClassifDett(_fs) {

	_fs.addFoundSetFilterParam('idgruppoclassificazione','=',_idClassif);
	return _fs;

}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"5A2502BC-3211-4683-8247-086EE6B44EFD"}
 * @AllowToRunInFind
 */
function AggiornaClassif(_rec) {
	
	_idClassif = _rec['idgruppoclassificazione'];
	_codClassif = _rec['codice'];
	_descClassif = _rec['descrizione'];
    
    if(!forms.agl_dd_dtl_l._decorrenza)
	{
		globals.ma_utl_showWarningDialog('Controllare la data di assunzione','Aggiornamento regola');
		return;
	}
}

/** 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"4E02421E-A2E5-4FDA-9FC6-0DA6D6676AD4"}
 */
function AggiornaClassifDett(_rec) {

	_codClassifDett = _rec['codice'];
	_descClassifDett = _rec['descrizione'];
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
 * @properties={typeid:24,uuid:"2C55440D-0436-4019-8469-125CB532DC54"}
 * @AllowToRunInFind
 */
function onDataChangeClassif(oldValue, newValue, event) {
	
	/** @type {JSFoundset<db:/ma_anagrafiche/gruppi_classificazioni>} */
	var _foundset = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,
		                                        globals.Table.GRUPPI_CLASSIFICAZIONI);

	if(_foundset.find())
	{
		_foundset.codice = newValue;
	    _foundset.search();
	}
	if (_foundset.getSize() == 1)
		AggiornaClassif(_foundset.getSelectedRecord());
	else
		showLkpClassif(event);
	
	return true;
}

/**
 * @param {JSEvent}  event
 * 
 * @properties={typeid:24,uuid:"06EB9B43-9ACA-4BBB-AE7B-CC555DD38C45"}
 */
function showLkpClassif(event)
{
	globals.svy_nav_showLookupWindow(event, null, 'AG_Lkp_GruppiClassificazioni', 'AggiornaClassif',
	  	                             'FiltraClassif', null, null, '', true);
	
}

/**
 * @param {JSEvent}  event
 * 
 * @properties={typeid:24,uuid:"24E65BCA-4E41-4A37-A5D1-CC96A8F0BD17"}
 */
function showLkpClassifDett(event)
{
	globals.svy_nav_showLookupWindow(event, null, 'AG_Lkp_GruppiClassificazioniDettaglio', 'AggiornaClassifDett',
	  	                             'FiltraClassifDett', null, null, '', true);
	
}

/**
 * @properties={typeid:24,uuid:"D18E6A3B-989A-4066-9EFF-E003446B4FA3"}
 * @AllowToRunInFind
 */
function validaClassif()
{
	return true;
//	if(_idRegola && _codRegola && _valoreAgg)
//	{
//		/** @type {JSFoundset<db:/ma_presenze/e2regole>} */
//		var _foundset = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,
//			                                        globals.Table.REGOLE);
//
//		if(_foundset.find())
//		{
//			var _idditta = (forms.agl_dd_main.lavoratori_to_ditte.tipologia == 1 
//			               && forms.agl_dd_main.lavoratori_to_ditte.ditte_to_ditte_legami.tipoesterni == 0) ?
//					    forms.agl_dd_main.lavoratori_to_ditte.ditte_to_ditte_legami.iddittariferimento :
//					    forms.agl_dd_main.idditta;	
//			_foundset.idditta = _idditta;
//			_foundset.codiceregola = _codRegola;
//		    _foundset.search();
//		}
//		if (_foundset.getSize() == 1)
//		return true;
//	}
//	
//	return false;
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
 * @properties={typeid:24,uuid:"900B0769-ED17-44FC-820C-C4E63A4995F4"}
 * @AllowToRunInFind
 */
function onDataChangeClassifDett(oldValue, newValue, event) 
{
	/** @type {JSFoundset<db:/ma_anagrafiche/gruppi_classificazionidettaglio>} */
	var _foundset = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,
		                                        globals.Table.GRUPPI_CLASSIFICAZIONI_DETTAGLIO);

	if(_foundset.find())
	{
		_foundset.codice = newValue;
	    _foundset.search();
	}
	if (_foundset.getSize() == 1)
		AggiornaClassifDett(_foundset.getSelectedRecord());
	else
		showLkpClassifDett(event);
	
	return true;
}
