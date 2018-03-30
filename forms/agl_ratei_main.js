/**
 * @type {Date}
 * 
 * @properties={typeid:35,uuid:"91E3A5FC-ED20-46A0-A7C3-8929341FB9A3",variableType:93}
 */
var dataFormattata = null;

/**
 * 
 * @type {Date}
 * 
 * @properties={typeid:35,uuid:"8428DBF6-3AA2-4EF9-9509-B54365EABED7",variableType:93}
 */
var dataSituazioneAlGiorno = null;

/**
 * @param {String} tabFormName
 * @param {String} tabName
 * @param {String} formName
 * @param {Date}   alladata
 * @param {Number} [iddip]
 * 
 * @properties={typeid:24,uuid:"3FBA772A-7AF3-4359-92A3-D4B059DF81EC"}
 */
function gestisciTabRateiTbl(tabFormName,tabName,formName,alladata,iddip){
	
	var _idDip = iddip != undefined ? iddip : forms.agl_header_dtl.idlavoratore;
	var _proiezioneRatei = globals.getParameterValue(globals.getDitta(iddip),'CRM') == 'C' ? true : false;
	var _vFormName = formName + '_temp';
    var vDatasetRateiDip = globals.ottieniDataSetRateiDip(_idDip,
    	                                                  alladata,
														  tabFormName == 'rp_ratei_dipendente' ? true : false,
														  _proiezioneRatei);    
    var vDataSourceRateiDip = vDatasetRateiDip.createDataSource('vDataSourceRateiDip_' + iddip);
	    
		
	if(forms[tabFormName].elements[tabName])
	       forms[tabFormName].elements[tabName].removeAllTabs();
	
	if(history.removeForm(_vFormName))	
       solutionModel.removeForm(_vFormName);
	
	solutionModel.cloneForm(_vFormName, solutionModel.getForm('agl_ratei_tbl'));
	solutionModel.getForm(_vFormName).dataSource = vDataSourceRateiDip;
    solutionModel.getForm(_vFormName).getField('descrizione').dataProviderID = 'Descrizione';
    solutionModel.getForm(_vFormName).getField('anni_precedenti').dataProviderID = 'Residuo2AP';
    solutionModel.getForm(_vFormName).getField('residuo_iniziale').dataProviderID = 'ResiduoAnnoPrec';
    solutionModel.getForm(_vFormName).getField('maturato_anno').dataProviderID = 'MaturatoAnno';
    solutionModel.getForm(_vFormName).getField('accantonate').dataProviderID = 'Accantonate';
    solutionModel.getForm(_vFormName).getField('goduto_anno').dataProviderID = 'GodutoAnno';
    solutionModel.getForm(_vFormName).getField('liquidato_anno').dataProviderID = 'LiquidatoAnno';	
    solutionModel.getForm(_vFormName).getField('residuo').dataProviderID = 'Residuo';
    
    if(_proiezioneRatei)
    {
    	elements.lbl_fine_maturazione.visible =
    		elements.lbl_disclaimer.visible = true;
	    solutionModel.getForm(_vFormName).getField('damaturare').dataProviderID = 'DaMaturare';
	    solutionModel.getForm(_vFormName).getField('residuofinematurazione').dataProviderID = 'ResiduoFineMaturazione';
	    solutionModel.getForm(_vFormName).getField('periodofinematurazione').dataProviderID = 'PeriodoFineMaturazione';
    }
    
    forms[_vFormName].elements['damaturare'].visible =
    forms[_vFormName].elements['residuofinematurazione'].visible =
    forms[_vFormName].elements['periodofinematurazione'].visible = _proiezioneRatei;
    
 	forms[tabFormName].elements[tabName].addTab(_vFormName);
			
}

/**
 * Handle changed data.
 *
 * @param {Date} oldValue old value
 * @param {Date} newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C45098EA-C4E0-4FCE-AB04-8930A8C25885"}
 */
function onDataChange(oldValue, newValue, event) 
{	
	var anno;
	var mese;
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
	}
	else
	{
		anno = globals.TODAY.getFullYear();
		mese = globals.TODAY.getMonth();
	}
		    
	/** @type {Date}*/
    var dataUltimoPeriodoPredisposto = globals.getLastDatePeriodo(anno * 100 + mese);
	newValue.setHours(0,0,0,0);
    if (proiezioneRatei && newValue > dataUltimoPeriodoPredisposto)
	{
		setStatusWarning('Data non disponibile. Ultima data utile relativa all\'ultimo periodo predisposto per l\'invio : ' + globals.dateFormat(dataUltimoPeriodoPredisposto, globals.EU_DATEFORMAT));
		return false;
	}
	
	resetStatus();
	gestisciTabRateiTbl(controller.getName(),'tabSitRatei','agl_ratei_main_tbl',dataSituazioneAlGiorno,idlavoratore);
	
	return true;
}

/** *
 * @param _event
 * @param _form
 *
 * @properties={typeid:24,uuid:"A12D20E7-1FFE-4A3C-85E3-4B33D821260A"}
 */
function onRecordSelection(_event, _form) 
{
	var anno;
	var mese;
	
	_super.onRecordSelection(_event, _form);
	
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
        
        var data = globals.getLastDatePeriodo(anno * 100 + mese);
        dataSituazioneAlGiorno = data;
	}
	else
	{
		dataSituazioneAlGiorno = globals.TODAY;
	    dataSituazioneAlGiorno.setHours(0,0,0,0);
	}	    
}

/**
 *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"20723D05-61CB-4417-B312-83A86AFCB22F"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
    _super.onShowForm(firstShow, event, svyNavBaseOnShow);
    
    dataSituazioneAlGiorno = new Date();
    dataSituazioneAlGiorno.setHours(0,0,0,0);
    
    var visible = globals.getTipologiaDitta(forms.agl_header_dtl.idditta) == globals.Tipologia.ESTERNA
            || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
    
    elements.lbl_gestione_ratei.visible = 
   		elements.btn_gestione_ratei.visible = visible;
   	   	
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4E2B1EB8-4E1D-4E18-B2C8-CEB7402BEAFC"}
 */
function onActionGestioneRatei(event)
{
	var frm = forms.agl_ratei_movimenti_main;
	frm.vIdLavoratore = idlavoratore;
	globals.ma_utl_showFormInDialog(frm.controller.getName(),'Gestione ratei');
}
