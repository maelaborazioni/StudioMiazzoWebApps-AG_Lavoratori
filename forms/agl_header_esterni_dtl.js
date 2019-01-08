/**
 * @properties={typeid:24,uuid:"7BBCD564-E4DF-4217-8EE4-18CFA6FEA894"}
 */
function getButtonObject()
{
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { visible: true, enabled: true };
		btnObj.btn_edit = { visible: true, enabled: true };
		btnObj.btn_delete = { visible: true, enabled: true };
		btnObj.btn_duplicate = { visible: false, enabled: false };
		
	return btnObj;
}

/**
 * @properties={typeid:24,uuid:"0EB59900-EBD0-4F1C-86EC-1E1FEFF55F42"}
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
 * @param {JSFoundset} fs
 *
 * @properties={typeid:24,uuid:"56794F14-DE14-4760-BF72-0ED902EC10CE"}
 */
function filterLkpLavoratoriEsterni(fs)
{
	fs.addFoundSetFilterParam('idditta', '=', idditta);
	return fs;
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"86172A29-126B-4CBE-9465-E4BFB83A381C"}
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
 * @private
 *
 * @properties={typeid:24,uuid:"7CF95C08-E69A-4976-AD72-4626EEA858AF"}
 */
function onRecordSelection(event, _form)
{
	_super.onRecordSelection(event, _form);	
	globals.vEmployeeCurrentEmployerID = idditta;
//	globals.vEmployeeCurrentEmployerConvertedID = idditta_sede;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"261F9048-5D86-44C4-A33B-7F22761C88F6"}
 */
function onActionBtnDitta(event) 
{
	var pkDitta = globals.ma_utl_showLkpWindow({ event: event, lookup: 'AG_Lkp_Ditta', allowInBrowse: true });
	if(pkDitta)
	{
		foundset.removeFoundSetFilterParam('ftr_idditta');
		foundset.addFoundSetFilterParam('idditta', '=', pkDitta, 'ftr_idditta');
		foundset.addFoundSetFilterParam('tipologia', '=', 1, 'ftr_dittaesterna');
		foundset.loadAllRecords();
	}
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"85BF37C4-E9D1-46D5-8AAD-96E98A3FD5B0"}
 */
function onActionBtnLavoratori(event)
{
	var pkLavoratore = globals.ma_utl_showLkpWindow({ event: event, lookup: 'AG_Lkp_LavoratoriEsterni', methodToAddFoundsetFilter: 'filterLkpLavoratoriEsterni', allowInBrowse: true });
	if(pkLavoratore)
		globals.lookupFoundset(pkLavoratore, foundset);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4ED0AE28-9ED8-4B67-B152-5668D675C7C9"}
 */
function apriPopUpDitta(event) {
	
	globals.apriPopupAnaDitta(event,idditta);
}

/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E02D2E6E-3E7C-4EFC-989C-36B4CFDE17C9"}
 */
function apriPopUpLav(event) {
	
	globals.apriPopupAnaLav(event,idditta,idlavoratore,foundset);
}

/**
 * @param {Object} _event
 * @param {Object} _triggerForm
 *
 * @properties={typeid:24,uuid:"2B937423-B2E9-41CC-B00A-1C85565A0627"}
 */
function dc_new(_event, _triggerForm)
{
	var _frm 				  	  = forms.agl_lavoratore_ditta_esterna;
		_frm._idDitta 			  = idditta;
		_frm._idDittaLegata 	  = lavoratori_to_ditte.ditte_to_ditte_legami.iddittariferimento;
		_frm._idInpsDitta 		  = lavoratori_to_ditte.ditte_to_ditte_legami.ditte_legami_to_ditte_inps.iddittainps;
		_frm._codiceDitta 		  = lavoratori_to_ditte.codice;
		_frm._ragioneSocialeDitta = lavoratori_to_ditte.ragionesociale;
		
		_frm.fs 				  = foundset;
	
	globals.ma_utl_showFormInDialog(_frm.controller.getName(), 'Inserisci lavoratore esterno');
}

/** *
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"8012DB19-3613-46EC-B18C-EEA3111CAF00"}
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
	}
}

/**
 * Handle changed data, return false if the value should not be accepted. In NGClient you can return also a (i18n) string, instead of false, which will be shown as a tooltip.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D3E3D81D-84F7-4A35-B026-80442249921E"}
 */
function onDataChangeDataCessazione(oldValue, newValue, event) 
{
	if(newValue != null)
		if(newValue < assunzione)
		   return false;
	return true;
}

/**
 * @param event
 * @param triggerForm
 *
 * @properties={typeid:24,uuid:"A3F6E887-4459-4ACD-BF42-8D9524E4AE45"}
 */
function dc_save(event,triggerForm)
{
	elements.fld_codicefiscale.editable =
		elements.fld_cognome.editable =
			elements.fld_nome.editable =
	    		elements.fld_dataassunzione.editable =
	    			elements.fld_datacessazione.editable = false;
    elements.btn_dataassunzione.enabled =
    	elements.btn_datacessazione.enabled = false;
	 
    // rielaborazione campo nominativo Ticket #14651	
    lavoratori_to_lavoratori_personeesterne.nominativo = lavoratori_to_lavoratori_personeesterne.cognome + " " + lavoratori_to_lavoratori_personeesterne.nome;	
    	
    // control if save operation has correctly been done 	
	if(_super.dc_save(event,triggerForm,false) == -1)
		return;
	
	globals.rendiTimbratureRiassegnabili(idlavoratore,cessazione);
	globals.pulisciGiornaliera(idlavoratore,cessazione);
}
/**
 * @param {JSEvent} [_event]
 * @param {String} [_triggerForm]
 * @param {String} [_forceForm]
 *
 * @return {Object}
 *
 * @properties={typeid:24,uuid:"C7B8A8DC-79EE-4DFD-A1CE-E557A04B3D3A"}
 */
function dc_edit(_event, _triggerForm, _forceForm) 
{
    elements.fld_codicefiscale.editable =
    	elements.fld_cognome.editable =
    		elements.fld_nome.editable =
	    		elements.fld_dataassunzione.editable =
	    			elements.fld_datacessazione.editable = true;
	elements.btn_dataassunzione.enabled =
    	elements.btn_datacessazione.enabled = true;    	
    	
	return _super.dc_edit(_event, _triggerForm, _forceForm);
}

/**
 * @param _event
 * @param _triggerForm
 * @param _noConfirm
 *
 * @properties={typeid:24,uuid:"45F55806-7AB8-4EF0-97E4-9DEFE4C6805E"}
 */
function dc_cancel(_event, _triggerForm, _noConfirm) 
{
	elements.fld_codicefiscale.editable =
		elements.fld_cognome.editable =
			elements.fld_nome.editable =
	    		elements.fld_dataassunzione.editable =
	    			elements.fld_datacessazione.editable = false;

	elements.btn_dataassunzione.enabled =
    	elements.btn_datacessazione.enabled = false;
    	
	return _super.dc_cancel(_event, _triggerForm, _noConfirm);
}
