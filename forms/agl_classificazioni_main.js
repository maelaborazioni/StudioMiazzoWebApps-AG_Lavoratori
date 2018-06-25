/**
 * @param {Number}
 * 
 * @properties={typeid:35,uuid:"DF0C9EF6-374B-4A20-B56D-4E8773A1C931",variableType:-4}
 */
var _idDittaClassificazione = null;

/**
 * @param {String}
 * 
 * @properties={typeid:35,uuid:"4E7FFC26-F86E-4F7E-813A-837AA9681DCB",variableType:-4}
 */
var _codDittaClassificazione = null;

/**
 * @param {Number}
 * 
 * @properties={typeid:35,uuid:"A9645A26-E070-4970-A762-52FEA13BAB2F",variableType:-4}
 */
var _idDitta = null;

/**
 * @param {Boolean}
 * 
 * @properties={typeid:35,uuid:"665C63C8-0244-48A0-9FA7-F75433060149",variableType:-4}
 */
var _isDittaEsterna = false;

/**
 * @private
 *
 * @properties={typeid:24,uuid:"11B2EB9A-CF0B-4C29-87D5-76CBC3A7B4F3"}
 */
function onRecordSelection(event, form) 
{
	_super.onRecordSelection(event, form);
	if(_isDittaEsterna)
       forms.agl_cl_classificazioni_esterni_tbl.updateData();		
}

/**
 * @properties={typeid:24,uuid:"D3B6C847-8EFC-4D96-9909-77FDBD2F5364"}
 */
function getButtonObject()
{
	var btnObj = _super.getButtonObject();
	
	var enabled = false; 
	
	// ticket 13106 : setting enable to true...
	enabled = true;
	
	btnObj.btn_new = { enabled : enabled };
	btnObj.btn_edit = { enabled : false };
	btnObj.btn_delete = { enabled : enabled };
	btnObj.btn_duplicate = { enabled : false };
		
	return btnObj;
}
/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"472151B3-0783-4122-A3A2-8D289AAA3B29"}
*/
function dc_new(_event, _triggerForm, _forceForm) 
{
	var frm = _isDittaEsterna ? forms.agl_cl_classificazioni_esterni_tbl : forms.agl_cl_classificazioni_tbl;
	var fs = frm.foundset;
	
	if(fs == null || !fs.getSize())
	{
		globals.ma_utl_showWarningDialog('Nessuna classificazione selezionata a cui aggiungere un dettaglio','Aggiungi dettaglio classificazione lavoratore');
		return;
	}
	
	// controllo codici riservati allo Studio
	if(fs && fs.codice && parseInt(fs.codice,10) <= 10 && !_isDittaEsterna)
	{
		globals.ma_utl_showWarningDialog('Per la gestione delle classificazioni aventi codice tra 1 e 10, rivolgersi al servizio di assistenza dello Studio','Aggiungi dettaglio classificazione lavoratore');
		return;
	}
	
	_idDitta = foundset.idditta;
	AggiornaClassificazioni(fs.getSelectedRecord());
	
//	var params = {
//		event : _event,
//		returnForm : controller.getName(),
//		lookup : 'AG_Lkp_Classificazioni',
//		allowInBrowse : true,
//		methodToExecuteAfterSelection : 'AggiornaClassificazioni',
//		methodToAddFoundsetFilter : 'FiltraClassificazioni'
//	}
//	
//	globals.ma_utl_showLkpWindow(params);
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
* @param {Boolean} _noConfirm
*
* @properties={typeid:24,uuid:"A739C170-088E-455B-AB46-2062936D1E22"}
*/
function dc_delete(_event, _triggerForm, _forceForm, _noConfirm) 
{	
	var frm = _isDittaEsterna ? forms.agl_cl_dettaglio_esterni_tbl : forms.agl_cl_dettaglio_tbl;
    var fs = frm.foundset;
        
    if(fs == null || !fs.getSize())
    {
    	globals.ma_utl_showWarningDialog("Nessun dettaglio di classificazione selezionato da eliminare","Elimina dettaglio classificazione lavoratore");
    	return false;
    }
    
    var frmParent = _isDittaEsterna ? forms.agl_cl_classificazioni_esterni_tbl : forms.agl_cl_classificazioni_tbl;
    var fsParent = frmParent.foundset;
    if(fsParent && fsParent.codice && parseInt(fsParent.codice,10) <= 10 && !_isDittaEsterna)
	{
		globals.ma_utl_showWarningDialog('Per la gestione delle classificazioni aventi codice tra 1 e 10, rivolgersi al servizio di assistenza dello Studio','Elimina classificazione lavoratore');
		return false;
	}
    
    if(fs.deleteRecord(fs.getSelectedRecord()))
    {
    	if(_isDittaEsterna)
    	   databaseManager.refreshRecordFromDatabase(frm.foundset,-1);		
        return true;
    }
    
    return false;
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"E57B39A0-5CCC-423B-A3F2-598009D5414E"}
 */
function AggiornaClassificazioni(_rec)
{	
	_idDittaClassificazione = _rec['iddittaclassificazione'];
	_codDittaClassificazione = _rec['codice'];
	
	var params = {
		event : new JSEvent,
		returnForm : controller.getName(),
		lookup : 'AG_Lkp_ClassificazioniDettaglio',
		allowInBrowse : true,
		methodToExecuteAfterSelection : 'AggiornaClassificazioniDettaglio',
		methodToAddFoundsetFilter : 'FiltraClassificazioniDettaglio'
	}
	
	globals.ma_utl_showLkpWindow(params);
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"9B5673E6-F47E-4E67-AE90-F79FA4EF6F89"}
 */
function AggiornaClassificazioniDettaglio(_rec)
{
	databaseManager.startTransaction();
	
	var rec = lavoratori_to_lavoratori_classificazioni.getRecord(lavoratori_to_lavoratori_classificazioni.newRecord());
    rec.idditta = _idDitta;
    rec.idlavoratore = idlavoratore;
    rec.codtipoclassificazione = _codDittaClassificazione;
    rec.codclassificazione = _rec['codice'];
    
    if(!databaseManager.commitTransaction())
    {
    	var failedrecords = databaseManager.getFailedRecords();
		if (failedrecords && failedrecords.length > 0)
		{
			for(var fInd = 0; fInd < failedrecords.length; fInd++)
				application.output(failedrecords[fInd].exception.getErrorCode() + ' - ' + failedrecords[fInd].exception.getMessage(),LOGGINGLEVEL.WARNING);
		}
		databaseManager.rollbackTransaction();
		globals.ma_utl_showErrorDialog('Errore durante l\'inserimento della classificazione','Inserimento classificazione lavoratore');
		return;
    }
    
    _isDittaEsterna ? databaseManager.refreshRecordFromDatabase(forms.agl_cl_dettaglio_esterni_tbl.foundset,-1) : databaseManager.refreshRecordFromDatabase(lavoratori_to_lavoratori_classificazioni,-1);
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"90D20D7D-E5A8-483F-8D6B-7A4DD9F3F666"}
 */
function FiltraClassificazioni(_fs)
{
	_fs.addFoundSetFilterParam('idditta','=',_idDitta);
	// nel caso di ditta standard il cliente può associare solo classificazioni non gestite dallo Studio 
	if(globals.getTipologiaDitta(idditta) == globals.Tipologia.STANDARD)
		_fs.addFoundSetFilterParam('codice','!=',['1','2','3','4','5','6','7','8','9','10']);
	return _fs;
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"C3633039-D2A9-4ED9-9C42-71F00F3FFEF0"}
 */
function FiltraClassificazioniDettaglio(_fs)
{
	_fs.addFoundSetFilterParam('idditta',"=",_idDitta);
	_fs.addFoundSetFilterParam('iddittaclassificazione','=',_idDittaClassificazione);
	return _fs;
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} [svyNavBaseOnShow]
 *
 * @properties={typeid:24,uuid:"B2839CA7-AE57-413C-9F19-F3AF73C032D7"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	_super.onShowForm(firstShow, event, svyNavBaseOnShow);
	_isDittaEsterna = false;
}
