/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"693D0734-4C59-4BA5-B195-86D243CD98F8"}
 */
var vCodTitoloStudio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"20EE8645-A431-409C-AA84-9B9C321240C9"}
 */
var vCodTitoloStudioDettaglio = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"05F7195F-539F-49B6-B73E-A95924760369"}
 */
var vCodTitoloStudioSpecializzazione = '';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"3069B386-9949-45E6-BCE3-2F81E32A78BC"}
 */
var requiredFields = 'AG_Req_TitoloStudio';

/**
 * @properties={typeid:24,uuid:"E6B326A8-F6DB-45AB-A048-A30405EF593C"}
 */
function dc_save_validate(fs, program)
{
	return _super.dc_save_validate(fs, requiredFields);
}

/**
 * @properties={typeid:24,uuid:"A4F3BF9B-DD83-4581-9557-C5C6AD1E6AE7"}
 */
function dc_save_pre(fs)
{
	// Imposta la data di rilevazione uguale alla data di decorrenza, se presente
	if(_super.dc_save_pre(fs) !== -1)
		fs['datarilevazione'] = fs['datadecorrenza'] || new Date();
	else
		return -1;
		
	return 0;
}

/**
 * @properties={typeid:24,uuid:"3FA0316B-B6DB-40EF-83D0-98D1991275EA"}
 */
function dc_save_post(fs)
{
	if(_super.dc_save_post(fs) !== -1)
	{
		forms.agl_dettagliotitolostudio_main.init(false);
		return 0;
	}
	
	return -1;
}

/**
 * @properties={typeid:24,uuid:"6605D914-492E-4726-8C7B-926220A5FD4B"}
 */
function filterDettaglio(fs)
{
	if(fs)
		fs.addFoundSetFilterParam('codtitolostudio', globals.ComparisonOperator.EQ, codtitolostudio);
	
	return fs;
}

/**
 * @properties={typeid:24,uuid:"B53A4477-8977-4BAF-8D1E-1B7861662C39"}
 */
function filterSpecializzazione(fs)
{
	if(fs)
	{
		fs.addFoundSetFilterParam('codtitolostudio'			, globals.ComparisonOperator.EQ, codtitolostudio);
		fs.addFoundSetFilterParam('codtitolostudiodettaglio', globals.ComparisonOperator.EQ, codtitolostudiodettaglio);
	}
	
	return fs;
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
 * @protected 
 *
 * @properties={typeid:24,uuid:"4C756F7B-D190-4189-8BAF-5F6D76042264"}
 * @AllowToRunInFind
 */
function onDataChangeCodTitoloStudio(oldValue, newValue, event) 
{
	if(!newValue)
		return false;
	
	/** @type{JSFoundset<db:/ma_anagrafiche/tab_titolistudio>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'tab_titolistudio');
	if (fs && fs.find())
	{
		fs.codice = newValue;
		fs.mostraindettaglio = globals.TRUE;
		
		if(fs.search() > 0)
			updateTitoloStudio(fs.getSelectedRecord());
		else
		{
			var value = lookupTitoloStudio(event);
			if(!value)
				vCodTitoloStudio = null;
		}
	}
	
	resetDettaglio();
	resetSpecializzazione();
	
	return true;
}

/**
 * @properties={typeid:24,uuid:"EAF80D5A-6F5B-44AF-9723-49F34F4BEFDB"}
 */
function updateTitoloStudio(rec)
{
	if(rec)
	{
		vCodTitoloStudio =
		codtitolostudio  = rec.codice;
	}
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
 * @protected 
 *
 * @properties={typeid:24,uuid:"D4FF261C-384E-4E3A-A568-E00D42602D20"}
 * @AllowToRunInFind
 */
function onDataChangeCodTitoloStudioDettaglio(oldValue, newValue, event) 
{
	if(!newValue)
	{
		resetDettaglio();
		resetSpecializzazione();
		return true;
	}
	
	/** @type{JSFoundset<db:/ma_anagrafiche/tab_titolistudiodettaglio>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'tab_titolistudiodettaglio');
	if (fs && fs.find())
	{
		fs.codtitolostudio		    = codtitolostudio;
		fs.codtitolostudiodettaglio = newValue;
		
		if(fs.search() > 0)
			updateDettaglioTitoloStudio(fs.getSelectedRecord());
		else
		{
			var value = lookupDettaglioTitoloStudio(event);
			if(!value)
				vCodTitoloStudioDettaglio = null;
		}
	}
	
	resetSpecializzazione();
	
	return true;
}

/**
 * @properties={typeid:24,uuid:"5CB060B1-3257-4390-AFFB-8ED2452BDEF0"}
 */
function updateDettaglioTitoloStudio(rec)
{
	if(rec)
	{
		vCodTitoloStudioDettaglio =
		codtitolostudiodettaglio  = rec.codtitolostudiodettaglio;
	}
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
 * @protected 
 *
 * @properties={typeid:24,uuid:"60BA4731-6417-40F2-B70E-06D847C88733"}
 * @AllowToRunInFind
 */
function onDataChangeCodTitoloStudioSpecializzazione(oldValue, newValue, event) 
{
	if(!newValue)
	{
		resetSpecializzazione();
		return true;
	}
	
	/** @type{JSFoundset<db:/ma_anagrafiche/tab_titolistudiospecializzazioni>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, 'tab_titolistudiospecializzazioni');
	if (fs && fs.find())
	{
		fs.codtitolostudio				   = codtitolostudio;
		fs.codtitolostudiodettaglio 	   = codtitolostudiodettaglio;
		fs.codtitolostudiospecializzazione = newValue;
		
		if(fs.search() > 0)
			updateSpecializzazioneTitoloStudio(fs.getSelectedRecord());
		else
		{
			var value = lookupSpecializzazioneTitoloStudio(event);
			if(!value)
				vCodTitoloStudioSpecializzazione = null;
		}
	}
	
	return true;
}

/**
 * @properties={typeid:24,uuid:"F3342E3C-3122-4C9D-97DB-E8F4FE93433F"}
 */
function updateSpecializzazioneTitoloStudio(rec)
{
	if(rec)
	{
		vCodTitoloStudioSpecializzazione =
		codtitolostudiospecializzazione  = rec.codtitolostudiospecializzazione;
	}
}

/**
 * @properties={typeid:24,uuid:"25822C05-B368-412B-859B-8FAF105E4451"}
 */
function resetTitoloStudio()
{
	vCodTitoloStudio =
	codtitolostudio  = null;
}

/**
 * @properties={typeid:24,uuid:"751205C5-6DA5-47B7-8C6E-5ABF0DD6991E"}
 */
function resetDettaglio()
{
	vCodTitoloStudioDettaglio =
	codtitolostudiodettaglio  = null;
}

/**
 * @properties={typeid:24,uuid:"23E67892-AFCC-486E-9C5B-E5ED8C600149"}
 */
function resetSpecializzazione()
{
	vCodTitoloStudioSpecializzazione =
	codtitolostudiospecializzazione  = null;
}

/**
 * @properties={typeid:24,uuid:"A7060A4F-13B3-4281-8472-2302E9F1614A"}
 */
function reset()
{
	resetTitoloStudio();
	resetDettaglio();
	resetSpecializzazione();
}

/**
 * @properties={typeid:24,uuid:"CF169623-11CA-44F6-9ABB-951F0E660E28"}
 */
function lookupTitoloStudio(event)
{
	return globals.ma_utl_showLkpWindow
	(
		{
			event							: event,
			lookup							: 'AG_Lkp_TitoloStudio',
			fieldToReturn					: 'codice',
			returnField						: 'codtitolostudio',
			methodToExecuteAfterSelection	: 'updateTitoloStudio',
			methodToAddFoundsetFilter		: 'filterTitoloStudio'
		}
	);
}

/**
 * @properties={typeid:24,uuid:"A47692F6-851B-4A19-978A-8DADFEBFDE36"}
 */
function lookupDettaglioTitoloStudio(event)
{
	return globals.ma_utl_showLkpWindow
	(
		{
			event							: event,
			lookup							: 'AG_Lkp_TitoloStudioDettaglio',
			fieldToReturn					: 'codtitolostudiodettaglio',
			returnField						: 'codtitolostudiodettaglio',
			methodToAddFoundsetFilter		: 'filterDettaglio',
			methodToExecuteAfterSelection	: 'updateDettaglioTitoloStudio'
		}
	);
}

/**
 * @properties={typeid:24,uuid:"C7DD551B-5D7B-4B7B-BEF3-989DEAC4A9B4"}
 */
function lookupSpecializzazioneTitoloStudio(event)
{
	return globals.ma_utl_showLkpWindow
	(
		{
			event							: event,
			lookup							: 'AG_Lkp_TitoloStudioSpecializzazione',
			fieldToReturn					: 'codtitolostudiospecializzazione',
			returnField						: 'codtitolostudiospecializzazione',
			methodToAddFoundsetFilter		: 'filterSpecializzazione',
			methodToExecuteAfterSelection	: 'updateSpecializzazioneTitoloStudio'
		}
	);
}

/**
 * @properties={typeid:24,uuid:"ED632005-6689-4AC1-B2FC-60FC2B75EB10"}
 */
function filterTitoloStudio(fs)
{
	if(fs)
	{
		fs.addFoundSetFilterParam('mostraindettaglio', globals.ComparisonOperator.EQ, globals.TRUE);
	}
	
	return fs;
}
