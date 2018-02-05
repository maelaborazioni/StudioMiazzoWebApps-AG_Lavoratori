/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"84BC963A-5513-4C07-8AAD-4D8D863A7AE6"}
 */
function filterData(fs)
{	
	fs = lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_domicili;
	
	// Recupera l'ultimo indirizzo, non tutti quelli correntemente attivi
	if(fs && fs.find())
	{
		fs.persone_domicili_to_v_persone_ultimoindirizzo.codtipoindirizzo = globals.codRESIDENZA;
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"EE8B2DE5-6FCC-49E4-8089-6B312BC70642"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_DITTA);
	
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: _enabled };
		btnObj.btn_edit = { enabled: _enabled };
		btnObj.btn_delete = { enabled: _enabled };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"9D6D9A7F-E740-4426-BF0A-F1371882C371"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_domicili;
	
	if(fs && fs.find())
	{
		fs.codtipoindirizzo = globals.codRESIDENZA;
		fs.search();
	}
}

/**
*
* @param event
* @param triggerForm
* @param forceForm
*
* @properties={typeid:24,uuid:"576B483C-8AAA-41CF-A0A7-0D482B108D00"}
*/
function dc_edit(event, triggerForm, forceForm) 
{
	var frm = forms.agl_indirizzo_edit;
	frm._isInEdit = true;
	frm._idIndEdit = lavoratori_to_persone.persone_to_persone_domicili.idpersonadomicilio;
	frm._codTipoIndirizzo = globals.TipiIndirizzoPersona.RESIDENZA;
	globals.ma_utl_showFormInDialog(frm.controller.getName(),'Modifica l\'indirizzo per la residenza');
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"E27E97FC-2CB7-465E-8B28-83EFC8CCD96E"}
*/
function dc_new(_event, _triggerForm, _forceForm)
{
	var frm = forms.agl_indirizzo_edit;
	frm._isInEdit = false;
	frm._codTipoIndirizzo = globals.TipiIndirizzoPersona.RESIDENZA;
	globals.ma_utl_showFormInDialog(frm.controller.getName(),'Inserisci un nuovo indirizzo per la residenza');
}
