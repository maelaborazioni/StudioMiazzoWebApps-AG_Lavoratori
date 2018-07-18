/**
 * @properties={typeid:24,uuid:"EA040A6D-63A6-4138-BD6B-A5D33B1E8581"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA 
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
	
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: _enabled };
		btnObj.btn_edit = { enabled: false };
		btnObj.btn_delete = { enabled: _enabled };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"F403F8D4-57D5-4450-96EE-1A10A1F47676"}
*/
function dc_new(_event, _triggerForm, _forceForm) 
{
   apriGestionePosizioniInail(_event);
}

/**
*
* @param _event
* @param _triggerForm
* @param _forceForm
*
* @properties={typeid:24,uuid:"D29859B2-4185-4CE5-9BC7-A6938419884B"}
*/
function dc_edit(_event, _triggerForm, _forceForm) 
{
	return _super.dc_edit(_event,_triggerForm,_forceForm)
	//apriGestionePosizioniInail(event);
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
* @param {Boolean} _noConfirm
*
* @properties={typeid:24,uuid:"7744509D-114D-461C-ABB5-112E0DEF2845"}
*/
function dc_delete(_event, _triggerForm, _forceForm, _noConfirm) 
{
	var answer = globals.ma_utl_showYesNoQuestion('Sei davvero sicuro di eliminare questo record?');
	if(answer)
		lavoratori_to_lavoratori_vocitariffa.deleteRecord();
}

/**
 * Apre la lookup che gestisce l'assegnazione della posizione INAIL 
 * 
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"11027B27-0934-4E9D-A1C0-70E0D1AF272E"}
 */
function apriGestionePosizioniInail(_event)
{
	var params = {
		event : _event,
		returnForm : controller.getName(),
		lookup : 'LEAF_Lkp_DitteInailPosizioni',
		allowInBrowse : true,
		methodToExecuteAfterSelection : 'AggiornaSelezioneInailPosizioni',
		methodToAddFoundsetFilter : 'FiltraInailPosizioni'
	}
	
	globals.ma_utl_showLkpWindow(params);
	
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"947D34C2-4EDB-476D-BAE1-8E867F4F37BE"}
 */
function FiltraInailPosizioni(_fs)
{
	_fs.addFoundSetFilterParam('idditta','=',idditta);
	return _fs;
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"2926FEA4-B360-4FB8-94D5-142C9F7F72E1"}
 */
function AggiornaSelezioneInailPosizioni(_rec)
{
	iddittainailposizione = _rec['iddittainailposizione'];
	
	var params = {
		event : new JSEvent,
		returnForm : controller.getName(),
		lookup : 'AG_Lkp_DitteInailVociTariffa',
		allowInBrowse : true,
		methodToExecuteAfterSelection : 'AggiornaSelezioneVociTariffa',
		methodToAddFoundsetFilter : 'FiltraVociTariffa'
	}
	
	globals.ma_utl_showLkpWindow(params);
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"9D396D63-5777-465A-B6CB-F0B05BBB9807"}
 * @AllowToRunInFind
 */
function AggiornaSelezioneVociTariffa(_rec)
{
	var _idInailVoceTariffa = _rec['idinailvocitariffa'];
	var _perc = _rec['percponderazretrib'];
	var _silicosi = _rec['rischiosilicosi'];
		
	/** @type {JSFoundSet<db:/ma_anagrafiche/lavoratori_vocitariffa>}*/
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI_VOCITARIFFA);
	if(fs.find())
	{
		fs.idlavoratore = idlavoratore;
		fs.idinailvocetariffa = _idInailVoceTariffa;
		
		if(fs.search())
		{
			globals.ma_utl_showWarningDialog('Voce di tariffa già inserita in precedenza','Voci di tariffa');
			return;
		}
		else
		{
			databaseManager.startTransaction();
			
			var rec = fs.getRecord(fs.newRecord());
			rec.idlavoratore = idlavoratore;
			rec.idinailvocetariffa = _idInailVoceTariffa;
			rec.percentuale = _perc;
			rec.silicosi = _silicosi;
		}
		
		if(!databaseManager.commitTransaction())
		{
			var failedrecords = databaseManager.getFailedRecords();
			if (failedrecords && failedrecords.length > 0)
			{
				for(var fInd = 0; fInd < failedrecords.length; fInd++)
					application.output(failedrecords[fInd].exception.getErrorCode() + ' - ' + failedrecords[fInd].exception.getMessage(),LOGGINGLEVEL.WARNING);
			}
			databaseManager.rollbackTransaction();
			globals.ma_utl_showErrorDialog('Errore durante l\'inserimento della voce di tariffa','Inserimento voci di tariffa');
			return;
		}
		
		databaseManager.refreshRecordFromDatabase(foundset,-1);
	}
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"A82B725C-BA71-43F3-97BA-8ECD8F2783B9"}
 */
function FiltraVociTariffa(_fs)
{
	_fs.addFoundSetFilterParam('iddittainailposizione','=',iddittainailposizione);
	return _fs;
}