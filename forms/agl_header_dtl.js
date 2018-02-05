/**
 * @properties={typeid:35,uuid:"9B55F46A-D8BD-491D-B638-9CD93B4B368B",variableType:-4}
 */
var _lkpPk = null;

/**
 * @properties={typeid:24,uuid:"91DE192D-CAA2-4FC5-A76F-99FC9868AC3B"}
 */
function filterLavoratori()
{
	if(_lkpPk)
	{
		foundset.removeFoundSetFilterParam('ftrLavoratori');
		foundset.addFoundSetFilterParam('idditta', '=', _lkpPk, 'ftrLavoratori');
		foundset.loadAllRecords();
		_lkpPk = null;
	}
}

/**
 * @properties={typeid:24,uuid:"166C22FB-9A60-413F-905A-3A1D90B3DA8F"}
 */
function getButtonObject()
{
	var btnObj = _super.getButtonObject();
	return btnObj;
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"1C19EF84-DCE4-4EB7-B634-C6266D453701"}
 */
function aggiornaDitta(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	
	_filter.filter_value = _rec['idditta']
		    
	var _progObj = globals.nav.program['AGL_DatiAnagrafici']
	_progObj.filter = [_filter]  
	_progObj.foundset = null
	
    globals.openProgram('AGL_DatiAnagrafici',null,true);
	
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 *
 *
 * @properties={typeid:24,uuid:"344600E0-4677-47AF-82B1-09D6C6D44924"}
 */
function onRecordSelection(event, _form)
{
	_super.onRecordSelection(event, _form);	
	
	globals.vEmployeeCurrentEmployerID = idditta;
	globals.vEmployeeCurrentEmployerConvertedID = idditta_sede;
	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FFF905E7-2D3D-4018-B05C-4994ADAC2BD9"}
 */
function onActionBtnDitta(event) 
{
	var pkDitta = globals.ma_utl_showLkpWindow({ event: event, lookup: 'AG_Lkp_Ditta', allowInBrowse: true });
	if(pkDitta)
	{
		foundset.removeFoundSetFilterParam('ftr_idditta');
		foundset.addFoundSetFilterParam('idditta', '=', pkDitta, 'ftr_idditta');
		foundset.loadAllRecords();
	}
}

/**
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"DA7BF142-9029-4D0C-810C-A72DE3386665"}
 */
function dc_new(_event, _triggerForm)
{
	var _frm;
	var _msg;
	
	if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
	{ 
		_frm = forms.agl_lavoratore_ditta_esterna;
	    _msg = 'Aggiungi un lavoratore esterno';
	}
	else
	{
		_frm = forms.agl_lavoratore_ditta;
		_msg = 'Aggiungi un lavoratore';
	}
	
	if(idditta)
	{
		_frm._idDitta = idditta;
		_frm._codiceDitta = codditta;
		_frm._ragioneSocialeDitta = globals.getRagioneSociale(idditta);
	}
	globals.ma_utl_showFormInDialog(_frm.controller.getName(),_msg);
}

/**
 * Procede con l'eliminazione del dipendente, non solo dell'anagrafica ma anche di eventuali dati relativi 
 * alla giornaliera ed altre tabelle 
 * 
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"B43FA87C-D699-426F-9F23-D39435F93900"}
 */
function dc_delete(_event)
{
	var answer = globals.ma_utl_showYesNoQuestion('Procedere con l\'elimiazione del dipendente? Tutti i suoi dati non saranno più disponibili.','Eliminazione dipendente');
	if(!answer)
		return;
	
	scopes.giornaliera.eliminazioneDipendente(idlavoratore);
}

/** *
 * @param _event
 *
 * @properties={typeid:24,uuid:"623372B4-08E2-4DFE-9EDC-7385179E2C95"}
 */
function dc_rec_next(_event)
{
	if(foundset.getSelectedIndex() == foundset.getSize())
	   globals.ma_utl_showInfoDialog("E\' stato raggiunto l\'ultimo dipendente.","Vai al dipendente successivo");
	else
	  _super.dc_rec_next(_event);
}

/** *
 * @param _event
 *
 * @properties={typeid:24,uuid:"ECFF21AF-B4A8-48F1-B6B7-5E1E4A2E5F80"}
 */
function dc_rec_prev(_event) {
	
	if(foundset.getSelectedIndex() == 1)
	   globals.ma_utl_showInfoDialog("E\' stato raggiunto il primo dipendente.","Vai al dipendente precedente");
	else
	  _super.dc_rec_prev(_event)
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E46310F8-4770-4332-ACDC-54F9E7E26683"}
 */
function apriPopUpDitta(event) {
	
	globals.apriPopupAnaDitta(event,idditta);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F288DC9E-B8F1-40F9-AC83-50BA7158BFC6"}
 */
function apriPopUpLav(event) {
	
	globals.apriPopupAnaLav(event,idditta,idlavoratore,foundset);
}

/** 
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"3E7C3C8B-D6FD-46D5-A4D0-A9082011A93D"}
 */
function onShowForm(_firstShow, _event) 
{
	_super.onShowForm(_firstShow, _event);
   
	if(foundset.getSize() == 1)
	{
		elements.btn_anagditta.enabled = false;
		elements.btn_anaglav.enabled = false;
	}
	else
	{
		elements.btn_anagditta.enabled = true;
	    elements.btn_anaglav.enabled = true;
	    
	    if(foundset.getSize() == 0)
	       dc_new(_event,controller.getName());
	}
	    
}
