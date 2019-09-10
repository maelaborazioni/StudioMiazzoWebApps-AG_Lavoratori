/**
 * @properties={typeid:24,uuid:"53FD0B7D-10D2-44C8-835C-7DB84E9D71E0"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: false };
		btnObj.btn_edit = { enabled: _enabled };
		btnObj.btn_delete = { enabled: false };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}
/**
 *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"6B00DBC6-41D5-4D3D-A0DF-C0AB68A2160B"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	controller.readOnly = true;
	_super.onShowForm(firstShow, event, false);
}

/**
*
* @param {JSEvent} _event
* @param {String} _triggerForm
* @param {String} _forceForm
*
* @properties={typeid:24,uuid:"C6C70636-C4B0-4158-9EF7-A6AF390837A5"}
*/
function dc_edit(_event, _triggerForm, _forceForm) 
{
	setStatusEdit(true);	
	
	_super.dc_edit(_event, _triggerForm, _forceForm);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param enabled
 *
 * @properties={typeid:24,uuid:"1550183B-B667-485C-946C-8C77AD4C5CA1"}
 */
function setStatusEdit(enabled)
{
	var frmRdlDtl = forms.agl_rdl_rdl_dtl;
	var elems = frmRdlDtl.elements;
	// enable all buttons and fields
	// sezione rdl
	elems.btn_assunzione.enabled = elems.btn_decorrenzatfr.enabled = elems.btn_anzcontributiva.enabled = elems.btn_anzmalattia.enabled =
	elems.btn_anzferie.enabled = elems.btn_cessazione.enabled = 
	// sezione inquadramento
	elems.btn_sdl.enabled = elems.btn_pos_inps.enabled = elems.btn_pos_inail.enabled =
	elems.btn_contratto.enabled = elems.btn_qualifica.enabled = 
	// sezione dettagli
	elems.btn_categoriaparticolare.enabled = elems.btn_categoriaprotetta.enabled = elems.btn_turnista.enabled = elems.btn_contrattoinserimento.enabled =
	enabled;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _event
 * @param _triggerForm
 * @param _noConfirm
 *
 * @properties={typeid:24,uuid:"562944D2-149A-4642-A069-BDF736B3F19A"}
 * @override
 */
function dc_cancel(_event,_triggerForm,_noConfirm)
{
	setStatusEdit(false);
	
	_super.dc_cancel(_event,_triggerForm,_noConfirm);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param triggerForm
 * @param forceForm
 *
 * @properties={typeid:24,uuid:"378D1159-D8C2-40B8-8746-6818411C919B"}
 * @override
 */
function dc_save(event,triggerForm,forceForm)
{
	setStatusEdit(false);
	
	_super.dc_save(event,triggerForm,forceForm);
}