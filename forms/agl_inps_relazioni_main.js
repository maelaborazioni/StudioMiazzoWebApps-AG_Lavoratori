/**
 * @properties={typeid:24,uuid:"ECD54639-06DE-40F6-B3A2-FF37591C3A52"}
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
 * @properties={typeid:24,uuid:"C0DC3342-8424-4BA9-9D94-2D1F4702E29C"}
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
 * @properties={typeid:24,uuid:"958F1C63-A901-4D3D-AADA-21883178EB20"}
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
* @properties={typeid:24,uuid:"30CCD5CB-BD38-49CD-874C-17A294F18876"}
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
* @properties={typeid:24,uuid:"5730E137-6D96-48C6-9DA0-1FDAE5F8B077"}
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
* @properties={typeid:24,uuid:"9B5694DF-9A06-4326-810F-E2A6D4EED3E4"}
*/
function dc_delete(_event, _triggerForm, _forceForm, _noConfirm) {
	return _super.dc_delete(_event, _triggerForm, _forceForm, _noConfirm)
}

/**
 * Apre la lookup che gestisce l'assegnazione della posizione INPS 
 * 
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"E6C7CB0F-1A97-4B97-88DB-883C70E16852"}
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
 * @properties={typeid:24,uuid:"B237D77A-5E82-4447-AF6A-A330CF0F997A"}
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
 * @properties={typeid:24,uuid:"A35060F4-12A0-48D0-B63F-0605F5662EAC"}
 */
function FiltraInpsPosizioni(_fs)
{
	_fs.addFoundSetFilterParam('idditta','=',idditta);
	return _fs;
}
