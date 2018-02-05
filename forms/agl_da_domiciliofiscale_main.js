/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"186B8463-79A9-44F5-87C6-7B11D4F7C56F"}
 */
function filterData(fs)
{	
	fs = lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_domicili;
	
	// Recupera l'ultimo indirizzo, non tutti quelli correntemente attivi
	if(fs && fs.find())
	{
		fs.persone_domicili_to_v_persone_ultimoindirizzo.codtipoindirizzo = globals.codDOMICILIOFISCALE;
		fs.search();
	}
}

/**
 * @AllowToRunInFind
 * @properties={typeid:24,uuid:"17AED06D-53B4-4D06-8EB9-C2B8B06EBAF4"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_domicili;
	
	if(fs && fs.find())
	{
		fs.codtipoindirizzo = globals.codDOMICILIOFISCALE;
		fs.search();
	}
}

/**
*
* @param event
* @param triggerForm
* @param forceForm
*
* @properties={typeid:24,uuid:"BC841800-657E-45E6-A20F-078E04A8BCC9"}
*/
function dc_edit(event, triggerForm, forceForm) 
{
	var frm = forms.agl_indirizzo_edit;
	frm._isInEdit = true;
	frm._idIndEdit = lavoratori_to_persone.persone_to_persone_domicili.idpersonadomicilio;
	frm._codTipoIndirizzo = globals.TipiIndirizzoPersona.DOMICILIO_FISCALE;
	globals.ma_utl_showFormInDialog(frm.controller.getName(),'Modifica l\'indirizzo per il domicilio fiscale');
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"BED1071B-548C-4909-BB9B-DEE580959F23"}
*/
function dc_new(_event, _triggerForm, _forceForm)
{
	var frm = forms.agl_indirizzo_edit;
	frm._isInEdit = false;
	frm._codTipoIndirizzo = globals.TipiIndirizzoPersona.DOMICILIO_FISCALE;
	globals.ma_utl_showFormInDialog(frm.controller.getName(),'Inserisci un nuovo indirizzo per il domicilio fiscale');
}
