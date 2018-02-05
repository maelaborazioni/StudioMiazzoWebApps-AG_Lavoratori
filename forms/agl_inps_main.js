/**
 * @properties={typeid:24,uuid:"A16C8F5A-A265-4B78-9A86-89B5B794DC57"}
 * @AllowToRunInFind
 */
function filterData(fs)
{
	fs = lavoratori_to_lavoratori_relazioni;
	if(fs && fs.find())
	{
		fs.datafine = '^||>=' + globals.formatForFind(globals.TODAY);
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"6AFE55C8-E38A-4D78-967C-33B06840094B"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_lavoratori_relazioni;
	if(fs)
	{
		fs.loadAllRecords();
	}
}

/**
 * @properties={typeid:24,uuid:"BFF522DC-D2AE-463D-980E-945DDE274F1A"}
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
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"930EDA64-1BD5-4665-B742-4DA207750DFA"}
*/
function dc_new(_event, _triggerForm, _forceForm) {
	apriGestionePosizioniInps(_event);
}

/**
*
* @param event
* @param triggerForm
* @param forceForm
*
* @properties={typeid:24,uuid:"88BEEA2C-16E0-47CC-8A4E-1C5DAF8B37BF"}
*/
function dc_edit(event, triggerForm, forceForm) {
	apriGestionePosizioniInps(event);
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
* @param {Boolean} _noConfirm
*
* @properties={typeid:24,uuid:"FB18103D-34D3-4868-81C3-3B03EC50B169"}
*/
function dc_delete(_event, _triggerForm, _forceForm, _noConfirm) {
	return _super.dc_delete(_event, _triggerForm, _forceForm, _noConfirm)
}

/**
 * Apre la lookup che gestisce l'assegnazione della posizione INPS 
 * 
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"2A105F06-14CA-45B4-A135-98D644EF4840"}
 */
function apriGestionePosizioniInps(_event)
{
	var params = {
		event : _event,
		returnForm : controller.getName(),
		lookup : 'AG_Lkp_PosizioneInps',
		allowInBrowse : true,
		methodToExecuteAfterSelection : 'AggiornaSelezionePosizioneInps',
		methodToAddFoundsetFilter : 'FiltraInpsPosizioni'
	}
	
	globals.ma_utl_showLkpWindow(params);
	
}

/**
 * Aggiorna la posizione INPS del dipendente dopo la selezione
 * 
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"38D39E03-C6A7-46EE-932F-D152706C81D2"}
 */
function AggiornaSelezionePosizioneInps(_rec)
{
	iddittainps = _rec['iddittainps'];
}

/**
 * Filtra le posizioni INPS selezionabili per l'utente corrente
 * 
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"061FCB5B-7C43-44CF-9C96-B6AF1FCE4ABC"}
 */
function FiltraInpsPosizioni(_fs)
{
	_fs.addFoundSetFilterParam('idditta','=',idditta);
	return _fs;
}