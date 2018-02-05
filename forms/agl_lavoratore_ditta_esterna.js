/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"B168B565-AC98-4713-9DFE-276523BED16A"}
 */
function AggiornaSelezioneDitta(_rec){

	_idDitta = _rec['idditta'];
	_codiceDitta = _rec['codice'];
	_ragioneSocialeDitta = _rec['ragionesociale'];
	
	_idDittaLegata = _rec['ditte_to_ditte_legami']['iddittariferimento'];
	_idInpsDitta = _rec['ditte_to_ditte_legami']['ditte_legami_to_ditte_inps']['iddittainps'];
	_idDittaInailPosizione = _rec['ditte_to_ditte_legami']['ditte_legami_to_ditte_inailposizioni']['iddittainailposizione'];
	
	// selezione automatica del codice dipendente con codice di valore numerico pari
	// al valore max correntemente presente più uno
	var sqlMax = "SELECT MAX(Codice) FROM Lavoratori"; //" WHERE idDitta = ?";
	var arrMax = []; //[_idDitta];
	var dsMax = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE,sqlMax,arrMax,-1);
	var currMaxCod = dsMax.getValue(1,1);
	_codiceDip = currMaxCod + 1;
}

/**
 * @param fsDitta
 *
 * @properties={typeid:24,uuid:"58632CBA-A5FD-4097-A720-032365CF34A3"}
 */
function filtraDitta(fsDitta)
{
	fsDitta.addFoundSetFilterParam('tipologia','=',globals.Tipologia.ESTERNA);
	return fsDitta;
}

/**
 * Filtra le sedi di lavoro della ditta selezionata
 * 
 * @param {JSFoundset} fsSdl
 *
 * @properties={typeid:24,uuid:"8011260A-6338-4136-AC4B-BA1868C92294"}
 */
function filtraSediLavoroDitta(fsSdl)
{
	fsSdl.addFoundSetFilterParam('idditta','=',_idDittaLegata);
	fsSdl.addFoundSetFilterParam('codtiposede','=',globals.TipiSedeLavoro.SEDE_OPERATIVA);
	return fsSdl;
}

/**
 * Filtra le posizioni INPS del dipendente
 * 
 * @param {JSFoundset} fsInps
 *
 * @properties={typeid:24,uuid:"B3F1AEAD-ED3F-4BBF-8CDC-C0FA5BA111B5"}
 */
function filtraPosInpsDitta(fsInps)
{
	fsInps.addFoundSetFilterParam('idditta','=',_idDittaLegata);
	return fsInps;
}

/**
 * Filtra le posizioni INAIL per il dipendente
 * 
 * @param {JSFoundset} fsInail
 *
 * @properties={typeid:24,uuid:"73DD53DB-2B1E-48AB-8447-D93593E12DAB"}
 */
function filtraPosInailDitta(fsInail)
{
	fsInail.addFoundSetFilterParam('idditta','=',_idDittaLegata);
	return fsInail;
}

/**
 * Filtra le regole selezionabili per la ditta indicata
 * 
 * @param {JSFoundset} fsRegola
 *
 * @properties={typeid:24,uuid:"D217DCD6-05B9-41EE-B5B0-F14BF871F379"}
 */
function filtraRegola(fsRegola)
{
	fsRegola.addFoundSetFilterParam('idditta','=', _idDittaLegata);
	return fsRegola;
}

/**
 * 
 * Filtra i contratti assegnabili al dipendente
 * 
 * @param {JSFoundset} fsCtr
 *
 * @properties={typeid:24,uuid:"0FF79A9F-6E47-4A2E-AA4B-55210A3494EF"}
 * @AllowToRunInFind
 */
function filtraContrattoDitta(fsCtr)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/ditte_contratti>}*/
	var fsCtrDitta = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.DITTE_CONTRATTI); 
	fsCtrDitta.find();
	fsCtrDitta.idditta = _idDittaLegata;
	fsCtrDitta.search();
	fsCtr.addFoundSetFilterParam('radicecontratto','IN',globals.foundsetToArray(fsCtrDitta,'codcontratto'));
	return fsCtr;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"92BCDF11-98F5-40BE-9525-78805E071439"}
 */
function confermaNuovoDipEsterno(event) {
	if (validaDatiDip())
	{
		var params = {
	        processFunction: process_save_lavoratore_esterno,
	        message: '', 
	        opacity: 0.5,
	        paneColor: '#434343',
	        textColor: '#EC1C24',
	        showCancelButton: false,
	        cancelButtonText: '',
	        dialogName : '',
	        fontType: 'Arial,4,25',
	        processArgs: [event]
	    };
		plugins.busy.block(params);
	}
}

/**
 * @properties={typeid:24,uuid:"8B4B1F06-A610-4E6C-B61B-597A95C268EA"}
 */
function process_save_lavoratore_esterno(event)
{
	try 
	{
		var autosave = databaseManager.getAutoSave();

		databaseManager.setAutoSave(false);
		databaseManager.startTransaction();

		/**
		 * Crea il lavoratore
		 */
		fs = fs || databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.LAVORATORI);

		/** @type {JSRecord<db:/ma_anagrafiche/lavoratori>} */
		var newLavoratore = fs.getRecord(fs.newRecord());
		if (!newLavoratore)
			throw new Error('Errore durante la creazione del lavoratore');

		newLavoratore.idditta = _idDitta;
		newLavoratore.iddittainps = _idInpsDitta || globals.getIdDittaInpsDefault(_idDitta);
		newLavoratore.iddittainailposizione = _idDittaInailPosizione;
		newLavoratore.codditta = _codiceDitta;
		newLavoratore.posizioneinps = _codiceInpsDip || globals.getCodDittaInpsDefault(_idDitta);
		newLavoratore.codice = _codiceDip;
//		newLavoratore.codicefiscale = _codiceFiscale;
		newLavoratore.iddittasede = _idDittaSede;
		newLavoratore.codcontratto = _codGrContr;
		newLavoratore.codqualifica = _codQualifica;
		newLavoratore.codcategoriaparticolare = '0';
		newLavoratore.codtiporapporto = 'I';
		newLavoratore.codgestionepresenze = '0';
		newLavoratore.codtipopaga = '0';
		newLavoratore.codturnista = '0';
		newLavoratore.percentualept = _percPartTime > 0 ? _percPartTime : 0;
		newLavoratore.percentualedisc = 0;
		newLavoratore.stagionale = 0;
		newLavoratore.utilizzamensa = _utilizzaMensa ? 1 : 0;
		newLavoratore.personaleviaggiante = 0;
		newLavoratore.areadirigenziale = 0;
		newLavoratore.facchino = 0;
		newLavoratore.provenienzaanag = 0;

		if (_dataAssunzione)
			newLavoratore.assunzione = _dataAssunzione;

		/**
		 * Crea la persona esterna
		 */
		var newPersonaEsterna = newLavoratore.lavoratori_to_lavoratori_personeesterne.getRecord(newLavoratore.lavoratori_to_lavoratori_personeesterne.newRecord());
		if (!newPersonaEsterna)
			throw new Error('Errore durante la creazione della persona fisica');

		newPersonaEsterna.cognome = _cognome ? _cognome : "";
		newPersonaEsterna.nome = _nome ? _nome : "";
		newPersonaEsterna.sesso = _sesso;
		newPersonaEsterna.nominativo = newPersonaEsterna.cognome + ' ' + newPersonaEsterna.nome;
		newPersonaEsterna.codicefiscale = _codiceFiscale;
				
		/**
		 * Crea il lavoratore di job
		 */
		/** JSRecord<db:/ma_anagrafiche/lavoratori_job> */
		var newLavoratoreJob = newLavoratore.lavoratori_to_lavoratori_job.getRecord(newLavoratore.lavoratori_to_lavoratori_job.newRecord());
		if (!newLavoratoreJob)
			throw new Error('Errore durante la creazione del lavoratore job');

		var sql = 'SELECT TOP 1 FinaleContratto FROM E2TabQualifiche WHERE RadiceQualifica = ?';
		var arr = [_codQualifica];
		var ds = databaseManager.getDataSetByQuery(globals.getSwitchedServer(globals.Server.MA_PRESENZE), sql, arr, -1);
		var _finaleContratto = ds.getValue(1, 1);

		newLavoratoreJob.codcontratto = _codGrContr + '00' + _finaleContratto;
		newLavoratoreJob.qualificaassicurativa = 1;

		/**
		 * Crea i record necessari per l'inquadramento
		 */
		// CONTRATTO
		var newContratto = newLavoratore.lavoratori_to_lavoratori_tipicampo.getRecord(newLavoratore.lavoratori_to_lavoratori_tipicampo.newRecord());
		if (!newContratto)
			throw new Error('Errore durante la creazione del contratto');

		newContratto.codtipocampo = globals.TipiCampo.CONTRATTO;
		newContratto.valore = newLavoratoreJob.codcontratto;
		newContratto.decorrenza = newLavoratore.assunzione;

		/**
		 * Committa la parte di anagrafica
		 */
		var success = databaseManager.commitTransaction();
		if (!success) {
			var failedRecords = databaseManager.getFailedRecords();
			if (failedRecords && failedRecords.length > 0)
				throw new Error('Errore durante la creazione del lavoratore esterno: ' + failedRecords[0].exception.getMessage());
		}

		/**
		 * Crea il record per la decorrenza della regola
		 */
		if (_idRegola != null) {
			/** @type {JSFoundset<db:/ma_presenze/e2dcg_decorrenza>}*/
			var fsDecRegola = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.LAVORATORI_DECORRENZE)
			var newRegola = fsDecRegola.getRecord(fsDecRegola.newRecord());
			if (!newRegola)
				throw new Error('Errore durante la creazione della decorrenza regola');
			newRegola.iddcg_campi = 3;
			newRegola.id_legato = newLavoratore.idlavoratore_string;
			newRegola.decorrenza = _regolaDal;
			newRegola.valore = _idRegola;
			newRegola.stato = 0;
			newRegola.valoreagg = _valoreAgg;
			newRegola.richiestoil = globals.TODAY;
			newRegola.richiestoda = _to_sec_user$user_id.user_name;
		}

		/**
		 * Crea il record per la decorrenza del badge
		 */
		if (_badge != null) {
			/** @type {JSFoundset<db:/ma_presenze/e2dcg_decorrenza>}*/
			var fsDecBadge = databaseManager.getFoundSet(globals.Server.MA_PRESENZE, globals.Table.LAVORATORI_DECORRENZE)
			var newBadge = fsDecBadge.getRecord(fsDecBadge.newRecord());
			if (!newBadge)
				throw new Error('Errore durante la creazione della decorrenza badge');
			newBadge.id_legato = newLavoratore.idlavoratore_string;
			newBadge.iddcg_campi = 2;
			newBadge.decorrenza = _badgeDal;
			newBadge.valore = _badge;
			newBadge.stato = 0;
			newBadge.richiestoil = globals.TODAY;
			newBadge.richiestoda = _to_sec_user$user_id.user_name;
		}

		/**
		 * Committa la parte relativa alle decorrenze
		 */
		var successDec = databaseManager.commitTransaction();
		if (!successDec) {
			var failedRecordsDec = databaseManager.getFailedRecords();
			if (failedRecordsDec && failedRecordsDec.length > 0)
				throw new Error('Errore durante la creazione delle decorrenze del lavoratore esterno: ' + failedRecordsDec[0].exception.getMessage());
		}

		databaseManager.refreshRecordFromDatabase(fs, -1);
		globals.lookupFoundset(newLavoratore.idlavoratore, forms.agl_header_esterni_dtl.foundset);
		globals.ma_utl_setStatus(globals.Status.BROWSE, controller.getName());
		globals.svy_mod_closeForm(event);

	} catch (ex) {
		application.output(ex.message, LOGGINGLEVEL.ERROR);
		databaseManager.rollbackTransaction();
		setStatusError(ex.message,null,1500);
	} finally {
		databaseManager.setAutoSave(autosave);
		plugins.busy.unblock();
	}
	    
}

/**
 * @properties={typeid:24,uuid:"7F575126-A80F-4843-BBDE-0B5D1869C1CD"}
 */
function validaDatiDip()
{
	if(!_idDitta)
	{
		setStatusWarning('Inserire la ditta di appartenenza del lavoratore',null,1500);
	    return false;
	}
	if(!_idDittaSede)
	{
		setStatusWarning('Inserire la sede di lavoro per il nuovo lavoratore',null,1500);
	    return false;
	}
	if(!_codiceDip || _codiceDip <= 0)
	{
		setStatusWarning('Inserire il codice del nuovo lavoratore',null,1500);
	    return false;
	}
	if(_dataAssunzione == null)
	{
		setStatusWarning('Inserire la data di assunzione del nuovo lavoratore',null,1500);
	    return false;
	}
	if(!_codiceFiscale)
	{
		setStatusWarning('Inserire il codice fiscale del nuovo lavoratore',null,1500);
	    return false;
	}
//	if(!_idInpsDitta)
//	{
//		setStatusWarning('Inserire la sede INPS del nuovo lavoratore',null,1500);
//	    return false;
//	}
//	if(!_idDittaInailPosizione)
//	{
//		setStatusWarning('Inserire la posizione INAIL del nuovo lavoratore',null,1500);
//	    return false;
//	}
	if(!_codGrContr)
	{
		setStatusWarning('Inserire il codice contrattuale del nuovo lavoratore',null,1500);
	    return false;
	}
//	if(!_codTipoRapporto)
//	{
//		setStatusWarning('Inserire il tipo di rapporto (tempo det./indet. del nuovo lavoratore');
//	    return false;
//	}
	if(!_codQualifica)
	{
		setStatusWarning('Inserire la qualifica del nuovo lavoratore',null,1500);
        return false;
	}
	
	return true;
}
