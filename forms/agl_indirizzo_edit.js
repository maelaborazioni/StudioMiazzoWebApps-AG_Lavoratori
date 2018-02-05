/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"0B5B612F-FA49-4AC5-BD65-7A6DD887AC64"}
 */
function confermaNuovoIndirizzo(event)
{
	databaseManager.startTransaction();
	
	/** @type {JSFoundset<db:/ma_anagrafiche/persone_domicili>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.PERSONE_DOMICILI);
	var rec;
	if(_isInEdit)
	{
		fs.loadRecords(_idIndEdit);
		rec = fs.getSelectedRecord();
	}
	else
	   rec = fs.getRecord(fs.newRecord());
	
	rec.cap = _cap;
	rec.codcomune = _codComune
	rec.codicefiscale = forms.agl_header_dtl.codicefiscale;
	rec.codstatoestero = _codStatoEstero;
	rec.codtipoindirizzo = _codTipoIndirizzo;
	rec.datadecorrenza = _dataDecorrenza;
	rec.datarilevazione = globals.TODAY;
    rec.indirizzo = _indirizzo;
    rec.manuale = 1;
 
    if(!databaseManager.commitTransaction())
	{
		var failedrecordsInd = databaseManager.getFailedRecords();
		if (failedrecordsInd && failedrecordsInd.length > 0)
		{
			for(var fInd = 0; fInd < failedrecordsInd.length; fInd++)
				application.output(failedrecordsInd[fInd].exception.getErrorCode() + ' - ' + failedrecordsInd[fInd].exception.getMessage(),LOGGINGLEVEL.WARNING);
		}
		databaseManager.rollbackTransaction();
		globals.ma_utl_showErrorDialog('Inserimento indirizzo non riuscito');
	    return;
	}
    
	databaseManager.refreshRecordFromDatabase(fs,-1);

	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	globals.svy_mod_closeForm(event);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"076F78E9-EEF6-4D89-A72C-0941E78FA52A"}
 */
function annullaNuovoIndirizzo(event)
{
	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	globals.svy_mod_closeForm(event);
}

/**
*
* @param {Boolean} firstShow
* @param {JSEvent} event
* @param {Boolean} svyNavBaseOnShow
*
* @properties={typeid:24,uuid:"05769CEF-7A8C-4342-A8F2-31063C02A773"}
* @AllowToRunInFind
*/
function onShowForm(firstShow, event, svyNavBaseOnShow)
{
	_super.onShowForm(firstShow, event, svyNavBaseOnShow);
	globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName());
	
	if(_isInEdit)
	{
		/** @type {JSFoundset<db:/ma_anagrafiche/persone_domicili>} */
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.PERSONE_DOMICILI);
		fs.find();
		fs.idpersonadomicilio = _idIndEdit;
		fs.search();
		_codComune = fs.codcomune;
		_cap = fs.cap;
		_codStatoEstero = fs.codstatoestero;
		_codTipoIndirizzo = fs.codtipoindirizzo;
		_comune = fs.persone_domicili_to_tab_comuniitalia.descrizione;
		_dataDecorrenza = fs.datadecorrenza;
		_indirizzo = fs.indirizzo;
		_provincia = fs.persone_domicili_to_tab_comuniitalia.provincia;
		_statoEstero = fs.persone_domicili_to_tab_statiesteri ? fs.persone_domicili_to_tab_statiesteri.descrizione : '';
	}
	else
	{
		_codComune = null;
		_cap = null;
		_codStatoEstero = null;
		_comune = null;
		_dataDecorrenza = null;
		_indirizzo = null;
		_provincia = null;
		_statoEstero = null;
	}
	
}
