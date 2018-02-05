/**
 * @properties={typeid:24,uuid:"3C3D8E0E-53E7-40CA-B06B-0669B1E79AF9"}
 */
function init(firstShow)
{
	_super.init(firstShow);
	setCodes();
}

/**
 * @properties={typeid:24,uuid:"C7461620-543E-468C-B75B-24D224763FAF"}
 */
function onRecordSelection(event, form)
{
	_super.onRecordSelection(event, form);
	setCodes();
}

/**
 * @properties={typeid:24,uuid:"8696D123-11E4-4843-983B-4BF8E91E3696"}
 */
function setCodes()
{
	// Inizializza le variabili di codice
	vCodTitoloStudio 				 = codtitolostudio || null;
	vCodTitoloStudioDettaglio 		 = codtitolostudiodettaglio || null;
	vCodTitoloStudioSpecializzazione = codtitolostudiospecializzazione || null;
}
