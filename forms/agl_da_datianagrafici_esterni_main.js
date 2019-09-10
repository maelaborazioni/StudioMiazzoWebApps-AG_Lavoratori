/**
 * @properties={typeid:24,uuid:"1F69E341-6461-44BA-9DEA-D29CCCB132D2"}
 */
function getButtonObject()
{
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: false };
		btnObj.btn_edit = { enabled: true };
		btnObj.btn_delete = { enabled: false };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}

/**
 * @properties={typeid:24,uuid:"24919B00-D171-4AFF-B61C-182311148655"}
 */
function dc_edit(event, triggerForm, forceForm)
{
	setEditStatus(true);
	_super.dc_edit(event, triggerForm, forceForm);
	
	return; 
}

/**
 * TODO generated, please specify type and doc for the params
 * @param event
 * @param triggerForm
 * @param forceForm
 *
 * @properties={typeid:24,uuid:"C4F4E3BF-79A7-49CD-859F-C67479B8DF41"}
 * @override
 */
function dc_save(event,triggerForm,forceForm)
{
	setEditStatus(false);
	
	if(foundset.getSelectedRecord().lavoratori_to_lavoratori_statoanag 
			&& foundset.getSelectedRecord().lavoratori_to_lavoratori_statoanag.getSize() == 1)
		foundset.lavoratori_to_lavoratori_statoanag.cittadinanzastranieraverificata = 0;
	
	_super.dc_save(event,triggerForm,forceForm);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _event
 * @param _triggerForm
 * @param _noConfirm
 *
 * @properties={typeid:24,uuid:"AEAFFBF7-3D16-4C1E-A44E-87E41364F697"}
 * @override
 */
function dc_cancel(_event,_triggerForm,_noConfirm)
{
    setEditStatus(false);
	_super.dc_cancel(_event,_triggerForm,_noConfirm);
}

/**
 * Aggiorna situazione di modifica dei campi/pulsanti interessati
 * 
 * @param {Boolean} enable
 *
 * @properties={typeid:24,uuid:"BEAE3FF1-1487-4A26-9646-64AC3DCAB5F7"}
 */
function setEditStatus(enable)
{
	var frmDatiAnagEst = forms.agp_datianagrafici_esterni_dtl;
	var elemDatiAnagEst = frmDatiAnagEst.elements;
	frmDatiAnagEst.controller.readOnly = !enable;
	
	elemDatiAnagEst.fld_cognome.enabled =
	elemDatiAnagEst.fld_nome.enabled = 
	elemDatiAnagEst.fld_sesso.enabled = 	
	elemDatiAnagEst.btn_datanascita.enabled =
	elemDatiAnagEst.btn_luogonascita.enabled =
	elemDatiAnagEst.btn_statoestero.enabled = 
	elemDatiAnagEst.fld_codicefiscale.enabled = 
	elemDatiAnagEst.fld_datanascita.enabled = 
	elemDatiAnagEst.fld_luogonascita.enabled =
	elemDatiAnagEst.fld_statoestero.enabled = enable;
	
	var frmAltriDatiAnag = forms.agl_da_altridatianagrafici_dtl;
	var elemAltriDatiAnag = frmAltriDatiAnag.elements;
	frmAltriDatiAnag.controller.readOnly = !enable;
	
	elemAltriDatiAnag.btn_cittadinanza.enabled = 
	elemAltriDatiAnag.btn_statocivile.enabled = enable;

	globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName());
}