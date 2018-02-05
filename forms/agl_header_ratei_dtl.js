/**
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2ACD0B87-346E-4ACF-BDC2-A333275CD5D7"}
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
 * Mostra il menu contestuale dell'anagrafica lavoratori
 * 
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C83A81F1-8182-4613-9C05-FDBC5355ED7D"}
 */
function apriPopUpLav(event) {
	
	globals.apriPopupAnaLav(event,idditta,idlavoratore,foundset);
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 *
 * @private
 *
 * @properties={typeid:24,uuid:"0956E882-6656-4FEA-83C0-F75A9CDB660B"}
 */
function onRecordSelection(event, _form)
{
	_super.onRecordSelection(event, _form);
	
	var anno;
	var mese;
	/** @type {Date} */
	var dataUltimoPeriodoPredisposto;
	var proiezioneRatei = globals.getParameterValue(globals.getDitta(idlavoratore),'CRM') == 'C' ? true : false;
	if(proiezioneRatei)
	{
		var ultimoPeriodoPredisposto = globals.getUltimoPeriodoPredisposto(idlavoratore).toString();
	    anno = parseInt(utils.stringLeft(ultimoPeriodoPredisposto,4),10);
        mese = parseInt(utils.stringRight(ultimoPeriodoPredisposto,2),10);
        
        if(mese == 12)
        {
        	anno++;
        	mese = 1;
        }
        
        dataUltimoPeriodoPredisposto = globals.getLastDatePeriodo(anno * 100 + mese);
	}
	else
		dataUltimoPeriodoPredisposto = globals.TODAY;
		
	forms.agl_ratei_main.gestisciTabRateiTbl('agl_ratei_main'
		                                     ,'tabSitRatei'
											 ,'agl_ratei_main_tbl'
											 ,dataUltimoPeriodoPredisposto
											 ,idlavoratore);
}

/** *
 * @param _firstShow
 * @param _event
 *
 * @properties={typeid:24,uuid:"2FC873AE-CD89-40B4-B7E8-59C6213F83BC"}
 */
function onShowForm(_firstShow, _event) {
	
//	_super.onShowForm(_firstShow, _event);
	
//	forms.agl_ratei_main.gestisciTabRateiTbl('agl_ratei_main'
//                                             ,'tabSitRatei'
//	                                         ,'agl_ratei_main_tbl'
//	                                         ,forms.agl_ratei_main.dataSituazioneAlGiorno
//	                                         ,idlavoratore);
}


