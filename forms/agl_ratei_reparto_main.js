/**
 * @type {Date}
 * 
 * @properties={typeid:35,uuid:"CA712883-A910-4E33-AF6A-795D13432E0C",variableType:93}
 */
var dataFormattata = null;

/**
 * 
 * @type {Date}
 * 
 * @properties={typeid:35,uuid:"EC4434A8-1E79-4C7C-987C-F00211280E23",variableType:93}
 */
var dataSituazioneAlGiorno = new Date();

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
 * @properties={typeid:24,uuid:"9F3B4A9C-C6A4-47A7-AB0E-3E3B3DD8173B"}
 */
function onDataChange(oldValue, newValue, event) 
{	
	// metodo mantenuto ma non più attivo 
	return false;
}

/** *
 * @param _event
 * @param _form
 *
 * @properties={typeid:24,uuid:"DB52B576-E330-4449-9171-71B59363CFA2"}
 */
function onRecordSelection(_event, _form) {
	return _super.onRecordSelection(_event, _form)
}

/**
 *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"531685FF-1B0E-47BF-9E39-EF4416173376"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
    _super.onShowForm(firstShow, event, svyNavBaseOnShow);
    
//    var visible = globals.getTipologiaDitta(forms.agl_header_dtl.idditta) == globals.Tipologia.ESTERNA
//            || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
    
//    elements.lbl_gestione_ratei.visible = 
//   		elements.btn_gestione_ratei.visible = visible;
    
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"84990ACB-1CDE-4B80-805B-B0EDAA6BBD22"}
 */
function onActionGestioneRatei(event)
{
	var frm = forms.agl_ratei_movimenti_main;
	frm.vIdLavoratore = idlavoratore;
	globals.ma_utl_showFormInDialog(frm.controller.getName(),'Gestione ratei');
}
