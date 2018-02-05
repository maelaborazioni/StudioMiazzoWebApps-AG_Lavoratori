/**
 * @param {Number}
 * 
 * @properties={typeid:35,uuid:"FF3EF134-CCA9-4573-A648-B4B989D379C5",variableType:-4}
 */
var _idDittaClassificazione = null;

/**
 * @param {String}
 * 
 * @properties={typeid:35,uuid:"8E831338-C550-4561-ACFC-1D8581DC4D33",variableType:-4}
 */
var _codDittaClassificazione = null;

/**
 * @private
 *
 * @properties={typeid:24,uuid:"7B022CC3-84D4-48ED-8A8E-4C54B888DB35"}
 */
function onRecordSelection(event, form) 
{
	_super.onRecordSelection(event, form);
	forms[elements.detail_tabless.getTabFormNameAt(1)].onRecordSelection(event, form);
}

/**
 * @properties={typeid:24,uuid:"09402EDF-2BCB-4371-AC42-CCE9B9D867B4"}
 */
function getButtonObject()
{
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: true };
		btnObj.btn_edit = { enabled: false };
		btnObj.btn_delete = { enabled: true };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"09A5D86A-26D7-4AEC-A3F5-09DAC36D9EF5"}
*/
function dc_new(_event, _triggerForm, _forceForm) 
{
	var params = {
		event : _event,
		returnForm : controller.getName(),
		lookup : 'AG_Lkp_Classificazioni',
		allowInBrowse : true,
		methodToExecuteAfterSelection : 'AggiornaClassificazioni',
		methodToAddFoundsetFilter : 'FiltraClassificazioni'
	}
	
	globals.ma_utl_showLkpWindow(params);
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"BE8996F3-E75B-425A-81E2-E6022F00602B"}
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
		methodToAddFoundsetFilter : 'FiltraClassificazioniDettaglio',
		disabledElements : []
	}
	
	globals.ma_utl_showLkpWindow(params);
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"A5AFD5D2-9C3E-43E8-972F-BC592EADCAF8"}
 */
function AggiornaClassificazioniDettaglio(_rec)
{
	databaseManager.startTransaction();
	
	var rec = lavoratori_to_lavoratori_classificazioni.getRecord(lavoratori_to_lavoratori_classificazioni.newRecord());
    rec.idditta = idditta;
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
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"CB1902EF-A5A4-4A1B-A3DE-F0FEC06361FF"}
 */
function FiltraClassificazioni(_fs)
{
	_fs.addFoundSetFilterParam('idditta','=',idditta);
	return _fs;
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"1EE9EE31-F84B-49CB-8226-28B68117D0A3"}
 */
function FiltraClassificazioniDettaglio(_fs)
{
	_fs.addFoundSetFilterParam('iddittaclassificazione','=',_idDittaClassificazione);
	return _fs;
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
* @param {Boolean} _noConfirm
*
* @properties={typeid:24,uuid:"DD9A48FE-F17E-44B4-801B-95BFABAAE732"}
*/
function dc_delete(_event, _triggerForm, _forceForm, _noConfirm) {
	return _super.dc_delete(_event, _triggerForm, _forceForm, _noConfirm)
}
