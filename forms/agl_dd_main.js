/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"33CD0D95-57DD-45AF-80C4-D797CDBADE26",variableType:-4}
 */
var _isNuovaDecorrenza = false;

/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"E9D25185-E6F1-4366-B5D8-A6CF6D9FEF91",variableType:-4}
 */
var _isDaCancel = false;

/**
 * @properties={typeid:24,uuid:"54CCB3E5-EDD1-4BAB-9B6C-5B4DE24BB99A"}
 */
function gotoBrowse()
{
	_super.gotoBrowse();
}

/** 
 * @param _foundset
 *
 * @properties={typeid:24,uuid:"197D785E-80E7-4304-924F-901F87A6B300"}
 */
function validaDec(_foundset) {
	
	var aMsg = '';
	var dataDec = forms.agl_dd_dtl_l._decorrenza;
	var tipoDec = forms.agl_dd_dtl_l._iddcgcampi;
	
	// validazione data inserita
	if (dataDec != null && dataDec != '') {
		// validazione iniziale
		if (tipoDec === null || tipoDec === undefined) {
			aMsg = 'Selezionare il tipo di decorrenza da inserire';
		}
		// validazione caso badge
		if (tipoDec == 2 || tipoDec == 12 || tipoDec == 16) {

			var numBadge = forms.agl_dd_dtl_r_singolo._valore;

			if (numBadge != null) {
				if (numBadge.toString().length > 10)
					aMsg = 'Il valore del Badge deve essere di massimo 10 cifre.';
				else if (isNaN(numBadge))
					aMsg = 'Il valore del Badge deve essere numerico.';
			} else
				aMsg = 'Impossibile inserire un valore vuoto per il badge!';
			// controllo valori badges esistenti
			var obj = globals.isBadgeAssegnato(numBadge,dataDec,globals.getGruppoInstallazioneLavoratore(idlavoratore));
			if(obj.value)
			   aMsg = obj.message;
		}
		// validazione caso regola
		else if (tipoDec == 3) {
			
			var regola = forms.agl_dd_dtl_r_doppio._codRegola;
			var ggRegola = forms.agl_dd_dtl_r_doppio._valoreAgg;

			if (regola != '') {
				if (ggRegola == '')
					aMsg = 'Impossibile inserire un valore vuoto per il giorno di partenza!';
			} else
				aMsg = 'Impossibile inserire un valore vuoto per la regola!';
				
			if(!forms.agl_dd_dtl_r_doppio.validaRegola())
				aMsg = 'Controllare i valori inseriti per la regola';
		}
	} else
		aMsg = 'Inserire una data valida per la decorrenza';
	
	if(aMsg == '')
	   return true;
	else 
	{
		globals.ma_utl_showWarningDialog(aMsg,'Inserimento decorrenze');
		return false;
	}
}

/** *
 * @param _foundset
 *
 * @properties={typeid:24,uuid:"5D3414F0-E103-43EF-AAA5-738AD57BEE83"}
 */
function dc_save_post(_foundset) {
	//TODO Inserire aggiornamento fasce in giornaliera
	return true; //_super.dc_save_post(_foundset);
}

/** 
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"31BEE18C-5DF0-4668-A5ED-CE11DCD51414"}
 */
function dc_new(_event, _triggerForm) 
{
	databaseManager.setAutoSave(false);
    
    if(elements.decorrenza_dtl_tabless.getMaxTabIndex() === 0)
    {	
    	elements.decorrenza_dtl_tabless.addTab('agl_dd_dtl');
        globals.ma_utl_setStatus(globals.Status.EDIT,'agl_dd_dtl');
    }
    
    forms.agl_dd_tbl.foundset.newRecord(false);
	
	_isNuovaDecorrenza = true;
	_isDaCancel = false;
	forms.agl_dd_dtl_l._decorrenzaOld = null;
	
	//rimuoviamo la parte a dx
	forms.agl_dd_dtl.elements.right_tabless.removeAllTabs();
	
	//resettiamo i valori delle variabili da inserire ed abilitiamo il pulsante di scelta decorrenza
	forms.agl_dd_dtl_l._decorrenza = null;
	forms.agl_dd_dtl_l._iddcgcampi = null;
	forms.agl_dd_dtl_l._descIdcgCampi = '';
	forms.agl_dd_dtl_l.elements.btn_tipo_decorrenza.enabled = true

	forms.agl_dd_dtl_l.elements.fld_iddcg_campi.enabled = true;
	forms.agl_dd_dtl_l.elements.fld_iddcg_campi.editable = true;
	forms.agl_dd_dtl_l.elements.fld_tipodecorrenza.enabled = true;
	forms.agl_dd_dtl_l.elements.fld_tipodecorrenza.editable = true;
	
	globals.ma_utl_setStatus(globals.Status.EDIT,'agl_dd_dtl_l');
	
	//abilitiamo i pulsanti sulla buttonbar per confermare/annullare
	forms.svy_nav_fr_buttonbar_viewer.elements.btn_save.enabled = true;
	forms.svy_nav_fr_buttonbar_viewer.elements.btn_cancel.enabled = true;
	
	return; 
}

/** 
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"17AB53D8-5B07-4929-9897-76AF99156EDE"}
 */
function dc_save(_event, _triggerForm) {

	var _fs = forms.agl_dd_tbl.foundset;

	if (validaDec(_fs)) 
	{
		var answer = true;
		        
		// controllo per eventuali errori di digitazione della decorrenza (capita che sbaglino anno
		// e l'aggiornamento in giornaliera diventi lungo...) : controllo su 30 giorni di differenza
		var numGiorniDiff = Math.abs(globals.dateDiff(globals.TODAY, forms.agl_dd_dtl_l._decorrenza, 1000 * 60 * 60 * 24));
		if (numGiorniDiff >= 30)
			answer = globals.ma_utl_showYesNoQuestion('La decorrenza inserita si discosta di almeno 30 giorni dalla data odierna. Proseguire comunque?', 'Controllo decorrenza');
		if (!answer) {
			dc_cancel(_event, _triggerForm);
			return;
		}
		
		// controllo presenza di eventuali fasce precedentemente programmate ed interessate dalla nuova/modifica decorrenza 
        if(forms.agl_dd_dtl_l._iddcgcampi == 3)
        {
        	 var objProgFasce = verificaProgFasce(forms.agl_dd_main.idlavoratore,forms.agl_dd_dtl_l._decorrenza,forms.agl_dd_dtl_l._decorrenzaOld);
        	 if(objProgFasce['response'])
        	    answer = globals.ma_utl_showYesNoQuestion(objProgFasce['message'],'Controllo decorrenza');
        	 if(!answer)
        	 {
        		 dc_cancel(_event, _triggerForm);
     			 return;
        	 }        		 
        }
		
		_fs.id_legato = forms.agl_dd_main.idlavoratore.toString();
		_fs.iddcg_campi = forms.agl_dd_dtl_l._iddcgcampi;
		_fs.decorrenza = forms.agl_dd_dtl_l._decorrenza;

		switch (forms.agl_dd_dtl_l._iddcgcampi) {
		case 3:
			_fs.valore = forms.agl_dd_dtl_l._valore.toString();
			_fs.valoreagg = forms.agl_dd_dtl_r_doppio._valoreAgg;
			forms.agl_dd_dtl_r_doppio.elements.lbl_field_1_a.enabled = false;
			forms.agl_dd_dtl_r_doppio.elements.lbl_field_2_a.enabled = false;
			break;
		case 23:
			_fs.valore = forms.agl_dd_dtl_r_turnista._codTurnista;
			_fs.valoreagg = null;
			forms.agl_dd_dtl_r_turnista.elements.lbl_field_1_a.enabled = false;
			break;
		case 24:
			_fs.valore = forms.agl_dd_dtl_r_classificazione._idClassifDett;
			_fs.valoreagg = null;
			break;
		default:
			_fs.valore = forms.agl_dd_dtl_r_singolo._valore.toString();
			_fs.valoreagg = null;
			break;

		}
		//TODO qual'è la differenza tra stato 0 e stato 1?
		_fs.stato = '0';
		//TODO AUTORIZZAZIONI inserire l'utente corretto
		_fs.richiestoda = security.getUserName();
		_fs.richiestoil = new Date();
		//id cliente sempre null
		_fs.idcliente = null;
		//}
		if (_fs.iddcg_campi === 2) {
			_fs.valoreagg = null;
		}

		var saved = _super.dc_save(_event, 'agl_dd_tbl', false);

		if (saved != -1) {

			var _params = globals.inizializzaParametriDecorrenza(foundset.idditta,
				foundset.idlavoratore,
				_fs.decorrenza.getFullYear() * 100 + _fs.decorrenza.getMonth() + 1,
				_fs.decorrenza,
				forms.agl_dd_dtl_l._decorrenzaOld,
				true);

			switch (_fs.iddcg_campi) {
			case 3:

				//aggiornamento regola in giornaliera
				if (!globals.aggiornaRegolaGiornaliera(_params))
					globals.ma_utl_showErrorDialog('Aggiornamento giornaliera non completato, riprovare', 'Aggiornamento giornaliera per cambio regola');
				break;

			case 23:

				//aggiornamento turno in giornaliera
				if (!globals.aggiornaTurnoGiornaliera(_params))
					globals.ma_utl_showErrorDialog('Aggiornamento giornaliera non completato, riprovare', 'Aggiornamento giornaliera per cambio turno');
				break;

			default:
				break;
			}

			_isNuovaDecorrenza = false;
			_isDaCancel = false;
			forms.agl_dd_dtl_l._decorrenzaOld = null;

			globals.ma_utl_setStatus(globals.Status.BROWSE, 'agl_dd_dtl_l');
			globals.ma_utl_setStatus(globals.Status.BROWSE, 'agl_dd_dtl_r_singolo');
			globals.ma_utl_setStatus(globals.Status.BROWSE, 'agl_dd_dtl_r_doppio');
			globals.ma_utl_setStatus(globals.Status.BROWSE, 'agl_dd_dtl_r_turnista');
			globals.ma_utl_setStatus(globals.Status.BROWSE, 'agl_dd_dtl_r_classificazione');
		}

	} else {
		globals.ma_utl_showErrorDialog('Salvataggio decorrenza non riuscito', 'Salvataggio decorrenza');
		_isDaCancel = true;
	}

}

/** 
 * @param _event
 * @param _triggerForm
 *
 * @properties={typeid:24,uuid:"E2C682A7-D7DA-4F61-B0DC-6A1F611151E1"}
 */
function dc_cancel(_event, _triggerForm) 
{    
	_isNuovaDecorrenza = false;
	_isDaCancel = true;
	forms.agl_dd_dtl_l._decorrenzaOld = null;
	
	var frmName = forms.agl_dd_dtl.elements.right_tabless.getTabFormNameAt(1);
	switch(frmName)
	{
		case 'agl_dd_dtl_r_doppio':
		case 'agl_dd_dtl_r_classificazione':	
			forms[frmName].elements['lbl_field_1_a'].enabled = false;
			forms[frmName].elements['lbl_field_2_a'].enabled = false;
			break;
		case 'agl_dd_dtl_r_turnista':
		    forms[frmName].elements['lbl_field_1_a'].enabled = false;
		    break;
	    default:
	    	break;
	}
    
	globals.ma_utl_setStatus(globals.Status.BROWSE,'agl_dd_dtl_l');
	globals.ma_utl_setStatus(globals.Status.BROWSE,frmName);
	
	_super.dc_cancel(_event, 'agl_dd_tbl',true);
	svuotaFormSenzaRecord(_event);
	forms.agl_dd_tbl.updateDetail();
}

/**
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"1116D4F6-D707-4356-8B84-252B19AA4DC6"}
 */
function dc_delete(_event) 
{
	if (forms.agl_dd_tbl.foundset.getSize() > 0) 
	{
		if (forms.agl_dd_tbl.foundset.getSelectedRecord().e2dcg_decorrenza_to_e2dcg_campi.rilevantecliente) {
			//salvataggio informazione post delete
			var _decorrenza = forms.agl_dd_dtl_l._decorrenza;
			//	var _decorrenzaOld = forms.agl_dd_dtl_l._decorrenzaOld;
			var _iddcgcampi = forms.agl_dd_dtl_l._iddcgcampi;

			// controllo presenza di eventuali fasce precedentemente programmate ed interessate dalla nuova/modifica decorrenza 
	        if(_iddcgcampi == 3)
	        {
	        	var objProgFasce = verificaProgFasce(forms.agl_dd_main.idlavoratore,forms.agl_dd_dtl_l._decorrenza,forms.agl_dd_dtl_l._decorrenza);
	        	 if(objProgFasce['response'])
	        	 {   
	        		 var answer = globals.ma_utl_showYesNoQuestion(objProgFasce['message'],'Controllo decorrenza');
		        	 if(!answer)
		        	 {
		        		 dc_cancel(_event,null);
		     			 return;
		        	 }
	        	 }
	        }
	        
			_super.dc_delete(_event, 'svy_nav_fr_buttonbar_viewer', 'agl_dd_tbl', false);

			var _params = globals.inizializzaParametriDecorrenza(foundset.idditta,
				foundset.idlavoratore,
				_decorrenza.getFullYear() * 100 + _decorrenza.getMonth() + 1,
				_decorrenza,
				null,
				true);

			switch (_iddcgcampi) {
			case 3:

				//aggiornamento regola in giornaliera
				if (!globals.aggiornaRegolaGiornaliera(_params))
					globals.ma_utl_showErrorDialog('Aggiornamento giornaliera non completato, riprovare', 'Aggiornamento giornaliera per cambio regola');
				break;

			case 23:

				//aggiornamento regola in giornaliera
				if (!globals.aggiornaTurnoGiornaliera(_params))
					globals.ma_utl_showErrorDialog('Aggiornamento giornaliera non completato, riprovare', 'Aggiornamento giornaliera per cambio turno');

				break;

			default:
				break;
			}

			svuotaFormSenzaRecord(_event);
			_isDaCancel = true;
		} else
			globals.ma_utl_showWarningDialog('La decorrenza non è eliminabile manualmente', 'Modifica decorrenze');
	} else
		globals.ma_utl_showWarningDialog('Non esistono decorrenze da modificare', 'Modifica decorrenze');
}


/** 
 * @param {JSEvent} _event
 * @param {String} _triggerForm
 *
 * @properties={typeid:24,uuid:"9179DEF5-A72B-46F7-81D3-15B946B1D8E9"}
 */
function dc_edit(_event, _triggerForm) {

	if (forms.agl_dd_tbl.foundset.getSize() > 0) {

		// se la decorrenza selezionata è visibile dal cliente (...) 
		if (forms.agl_dd_tbl.foundset.getSelectedRecord().e2dcg_decorrenza_to_e2dcg_campi.rilevantecliente) 
		{
			// facciamo in modo che vada in edit tutta la parte che non può essere selezionata durante la modifica
			//dc_edit(_event, _triggerForm);

			databaseManager.setAutoSave(false);

			_isNuovaDecorrenza = false;
			_isDaCancel = false;

			forms.agl_dd_dtl_l.elements.fld_iddcg_campi.enabled = false;
			forms.agl_dd_dtl_l.elements.fld_iddcg_campi.editable = false;
			forms.agl_dd_dtl_l.elements.fld_tipodecorrenza.enabled = false;
			forms.agl_dd_dtl_l.elements.fld_tipodecorrenza.editable = false;

			var frmName = forms.agl_dd_dtl.elements.right_tabless.getTabFormNameAt(1);
			switch (frmName) {
			case 'agl_dd_dtl_r_doppio':
			case 'agl_dd_dtl_r_classificazione':	
				forms[frmName].elements['lbl_field_1_a'].enabled = true;
				forms[frmName].elements['lbl_field_2_a'].enabled = true;
				break;
			case 'agl_dd_dtl_r_turnista':
				forms[frmName].elements['lbl_field_1_a'].enabled = true;
				break;
			default:
				break;
			}

			globals.ma_utl_setStatus(globals.Status.EDIT, 'agl_dd_dtl_l');
			globals.ma_utl_setStatus(globals.Status.EDIT, frmName);

			//abilitiamo i pulsanti sulla buttonbar per confermare/annullare
			forms.svy_nav_fr_buttonbar_viewer.elements.btn_save.enabled = true;
			forms.svy_nav_fr_buttonbar_viewer.elements.btn_cancel.enabled = true;
		} else
			globals.ma_utl_showWarningDialog('La decorrenza non è modificabile manualmente', 'Modifica decorrenze');
	} else
		globals.ma_utl_showWarningDialog('Non esistono decorrenze da modificare', 'Modifica decorrenze');

}



/**
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"8DD28AD2-53BE-4A65-A1FD-68A4FBD84C71"}
 */
function svuotaFormSenzaRecord(_event)
{
	if(lavoratori_to_e2dcg_decorrenza.getSize() === 0)
    	elements.decorrenza_dtl_tabless.removeAllTabs();
	else if(!solutionModel.getForm('agl_dd_dtl'))
		elements.decorrenza_dtl_tabless.addTab(forms.agl_dd_dtl);
}

/** *
 * @param _event
 * @param _form
 *
 * @properties={typeid:24,uuid:"02AE2436-270F-41E8-AD36-7C234B3395C4"}
 */
function onRecordSelection(_event, _form) 
{
	_super.onRecordSelection(_event, _form);
	foundset.lavoratori_to_e2dcg_decorrenza.sort('decorrenza desc');
    svuotaFormSenzaRecord(_event);
}

/** *
 * @properties={typeid:24,uuid:"B9BB5043-EA39-43C4-8042-4CC66EC9F28D"}
 */
function onShowForm(_firstShow, _event, svyNavBaseOnShow) 
{
//	plugins.busy.prepare();
	
	_super.onShowForm(_firstShow, _event, svyNavBaseOnShow);
	foundset.lavoratori_to_e2dcg_decorrenza.sort('decorrenza desc');
    svuotaFormSenzaRecord(_event);
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C6F366D7-2CE6-4F45-AD3B-1568D2B4F0D7"}
 */
function onLoad(event) 
{
	_super.onLoad(event);
	
	/**
	 * Register message listeners
	 */
	forms.agl_dd_dtl_l.registerListener
	(
		['error'], function(obj){ setStatusError(obj.message); }
	);
	forms.agl_dd_dtl_l.registerListener
	(
		['warning'], function(obj){ setStatusWarning(obj.message); } 
	);
	forms.agl_dd_dtl_l.registerListener
	(
		['reset'], function(obj){ resetStatus(); } 
	);
}


/**
 * @param message
 * @param [tooltip]
 * @param [hideAfterMs]
 *
 * @properties={typeid:24,uuid:"E45CB833-6464-46D8-A9F8-25E1CE938E81"}
 */
function setStatusWarning(message,tooltip,hideAfterMs)
{
	_super.setStatusWarning(message,tooltip,hideAfterMs);
	forms[elements.tab_ma_status_bar.getTabFormNameAt(1)].setStatusWarning(message, tooltip, hideAfterMs);
}

/**
 * @param message
 * @param [tooltip]
 * @param [hideAfterMs]
 *
 * @properties={typeid:24,uuid:"9A7D65C5-7771-48B6-A78D-C21A62FAE290"}
 */
function setStatusError(message,tooltip,hideAfterMs)
{
	_super.setStatusError(message,tooltip,hideAfterMs);
	forms[elements.tab_ma_status_bar.getTabFormNameAt(1)].setStatusError(message, tooltip, hideAfterMs);
}

/**
 * @properties={typeid:24,uuid:"76E55391-12B8-40E0-B6EE-0309D48ABD8A"}
 */
function resetStatus()
{
	_super.resetStatus();
	forms[elements.tab_ma_status_bar.getTabFormNameAt(1)].resetStatus();
}

/**
 * Verifica la presenza di fasce programmate nel periodo interessato dalla nuova decorrenza
 * 
 * @param {Number} idLavoratore
 * @param {Date} decorrenza
 * @param {Date} [oldDecorrenza]
 * 
 * @return {Object}
 * 
 * @properties={typeid:24,uuid:"791EFA74-95D2-4123-88C9-4BAC3E758E84"}
 */
function verificaProgFasce(idLavoratore,decorrenza,oldDecorrenza)
{
	var response = false;
	var decDal = null;
    var decAl = null;
    var message = '';
	
    var fsDecLav = globals.getDecorrenzeLavoratore(forms.agl_dd_main.idlavoratore,3);
    if(fsDecLav != null)
    {
	    for(var r = 1; r <= fsDecLav.getSize(); r++)
	    {
	    	var rec = fsDecLav.getRecord(r);
	    	
	    	if(oldDecorrenza && rec.decorrenza == oldDecorrenza)
	    		continue;
	    	
	    	if(decorrenza > rec.decorrenza)
	    	{
	    		if(r == fsDecLav.getSize())
	    		{
	    			decDal = decorrenza;
	    			decAl = null;
	    			break;
	    		}
	    		else
	    		{
	    			var recNext = fsDecLav.getRecord(r + 1);
	    			if(decorrenza > recNext.decorrenza)
	    				continue;
	    			else
	    			{
	    				decDal = decorrenza;
	    				decAl = recNext.decorrenza;
	    				continue;
	    			}
	    		}
	    	}
	    	else
	    	{
	    		if(r == 1)
	    		{
	    			decDal = globals.getDataAssunzione(forms.agl_dd_main.idlavoratore);
	    			decAl = decorrenza;
	    		}
	    		else
	    		{
		    		decDal = oldDecorrenza < decorrenza ? oldDecorrenza : decorrenza;
		    		decAl = rec.decorrenza;
	    		}
	    		break;
	    	}
	    }
		
	    var fsProgFasce = globals.getProgrammazioneFasceDalAl(forms.agl_dd_main.idlavoratore,decDal,decAl);
	    if(fsProgFasce && fsProgFasce.getSize())
	    {
	    	response = true;
	    	message = 'La programmazione fasce inserita per il periodo a partire dal giorno ' + globals.dateFormat(decDal,globals.EU_DATEFORMAT);
	    	if(decAl != null)
	    	   message += ' al giorno ' + globals.dateFormat(decAl,globals.EU_DATEFORMAT);
	    	message += ' verr&#224 cancellata. Proseguire comunque?';
	    }
    }
    return {response : response, dal : decDal , al: decAl, message : message};
    
}
