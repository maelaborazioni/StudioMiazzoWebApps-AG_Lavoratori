/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"54349BF5-B2AD-4630-82F2-8D737BC44D86"}
 */
var valNumPas = "";

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"58562503-F9D7-4E4D-9361-220423948F7C"}
 */
var valPianoAppr = "";

/**
 * @properties={typeid:24,uuid:"ED13B1E2-94CB-4D2E-8323-EDA0ADC87252"}
 */
function settaValori ()
{
	if (foundset.codavanzamento == 0 || foundset.codavanzamento == null)
	{
		forms.agl_rdl_rdl_dtl.valPianoAppr = "Nessuno"
	} 
	else
	{
		forms.agl_rdl_rdl_dtl.valPianoAppr = "Piano apprendisti " + foundset.codavanzamento
	}
	
	if (foundset.numavanzamento == 0 || foundset.numavanzamento == null)
	{
		forms.agl_rdl_rdl_dtl.valNumPas = "Nessuno"
	} 
	else
	{
		forms.agl_rdl_rdl_dtl.valNumPas= foundset.numavanzamento
	}
}

/**
 * @param {JSEvent} _event
 * @param {String} _form
 *
 * @properties={typeid:24,uuid:"8A34B9EE-AD6D-4C81-9D14-E83F23CD57FA"}
 */
function onRecordSelection(_event, _form) 
{
	_super.onRecordSelection(_event, _form);
	settaValori()
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4A38E767-D354-46BC-91F9-06A682D92E91"}
 */
function onDataChangeCessazione(oldValue, newValue, event) 
{
	if(newValue != '' 
		&& newValue < assunzione)
	{
		globals.ma_utl_showWarningDialog('La data di cessazione non può essere precedente alla data di assunzione','Inserimento data di cessazione');
		return false;
	}
	
	if(newValue == '')
		cessazione = null;
	
	// TODO aggiorna la situazione dell'utente corrispondente al lavoratore (se esiste)
	if(globals.ma_utl_hasModule(globals.Module.AUTORIZZAZIONI))
	   scopes.users.updateSecUserLavoratore(idlavoratore);
	
	return true;
}


/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"994B1BF6-95A8-490D-BBD5-51688B4B03B9"}
 * @AllowToRunInFind
 */
function onActionInfoDecorrenzeTurnisti(event) 
{
	var frm = forms.agl_rdl_rdl_tbl;
	var fs = frm.foundset;
	if(fs.find())
	{
		fs.id_legato = idlavoratore;
		fs.iddcg_campi = 23;
		if(fs.search())
		{
			fs.sort('decorrenza desc');
			globals.ma_utl_showFormInDialog(frm.controller.getName(),'Storico decorrenze turnista',null,false,452,150);
		}
		else
			globals.ma_utl_showInfoDialog('Nessuno storico turni per il dipendente selezionato','Storico decorrenze turnista');
	}
		
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"60418E65-6DDE-4706-B05D-8D3DBC358B73"}
 */
function filtraDitta(_fs)
{
	_fs.addFoundSetFilterParam('idditta'
		                       ,'='
							   ,globals.isInterinale(idditta) ? globals.getDittaRiferimento(idditta) : idditta);
	return _fs;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _fs
 *
 * @properties={typeid:24,uuid:"2D5CDADB-940A-4A55-B74F-F4AB1A7DFF46"}
 */
function filtraDittaInail(_fs)
{
	_fs.addFoundSetFilterParam('lavoratori_to_ditte.ditte_to_ditte_inailsede.ditte_inailsedi_to_ditte_inailposizioni.idditta'
		                       ,'='
							   ,globals.isInterinale(idditta) ? globals.getDittaRiferimento(idditta) : idditta);
	return _fs;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _rec
 *
 * @properties={typeid:24,uuid:"2F2DB708-1C32-4668-BAEA-5A8301A407BA"}
 */
function AggiornaQualifica(_rec)
{
	codqualifica = _rec['radicequalifica'];
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _rec
 *
 * @properties={typeid:24,uuid:"254A366B-6B04-4088-9371-174D0E95F510"}
 */
function AggiornaContratto(_rec)
{
	codcontratto = _rec['radicecontratto'];	
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _rec
 *
 * @properties={typeid:24,uuid:"EEB9CBD4-404E-4169-9265-9239E67FFDDC"}
 */
function AggiornaCategoriaProtetta(_rec)
{
	if(lavoratori_to_lavoratori_statoanag && lavoratori_to_lavoratori_statoanag.getSize())
	   lavoratori_to_lavoratori_statoanag.codcategoriaprotetta = _rec['codice'];
	else
	{
		var rec = lavoratori_to_lavoratori_statoanag.getRecord(lavoratori_to_lavoratori_statoanag.newRecord());
		rec.codcategoriaprotetta = _rec['codice'];
		rec.cittadinanzastranieraverificata = 0;
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _rec
 *
 * @properties={typeid:24,uuid:"75D10AFE-A0A4-445A-ACFC-5D7FBE11848D"}
 */
function AggiornaTipoTurnista(_rec)
{
	codturnista = _rec['codice'];
	codturnista_num = _rec['codice'];
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _rec
 *
 * @properties={typeid:24,uuid:"EDC34E95-31EC-4DCF-95B7-FE7176322EE7"}
 */
function AggiornaCategPart(_rec)
{
	codcatpart_num = _rec['codice']; //_rec['idtabcategorieparticolari'];
}
/**
 *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"B9BE94CC-32A5-4123-93D6-CBEB8ACC96E5"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	controller.readOnly = true;
	return _super.onShowForm(firstShow, event, false)
}


