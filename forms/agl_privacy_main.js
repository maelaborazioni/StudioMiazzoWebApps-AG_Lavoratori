/**
 * @properties={typeid:24,uuid:"19D2C54E-043A-4FA6-B565-30EC3A32025A"}
 */
function getButtonObject()
{
	var btnObj = _super.getButtonObject();
		btnObj.btn_new = { enabled: lavoratori_to_lavoratori_privacy && lavoratori_to_lavoratori_privacy.getSize() === 0 ? true : false };
		btnObj.btn_edit = { enabled: lavoratori_to_lavoratori_privacy && lavoratori_to_lavoratori_privacy.getSize() > 0 ? true : false };
		btnObj.btn_delete = { enabled: lavoratori_to_lavoratori_privacy && lavoratori_to_lavoratori_privacy.getSize() > 0 ? true : false };
		
	return btnObj;
}

/**
 * @properties={typeid:24,uuid:"5DA7D86A-2FC2-418C-9047-43AFB7835096"}
 */
function dc_new(event, triggerForm, forceForm)
{
	var fs = forms[elements.datigenerali_tabless.getTabFormNameAt(1)].foundset;
	if(fs && fs.newRecord() > -1)
		globals.ma_utl_showEditDialog(forms.agl_privacy_datigenerali_dtl_edit.controller.getName(), fs, 'HR_Req_PrivacyLavoratori', 'Dati generali', globals.Status.ADD);
}

/**
 * @properties={typeid:24,uuid:"1DF4E4FF-F7FA-4F58-936F-3F0DA2B96A07"}
 */
function dc_edit(event, triggerForm, forceForm)
{
	globals.ma_utl_showEditDialog(forms.agl_privacy_datigenerali_dtl_edit.controller.getName(), lavoratori_to_lavoratori_privacy, 'HR_Req_PrivacyLavoratori', 'Dati generali', globals.Status.ADD);
}

/**
 * @properties={typeid:24,uuid:"52B95F74-EC49-4993-A2CD-B2C5369AB344"}
 */
function dc_delete(event,triggerForm,forceForm,noConfirm)
{
	_super.dc_delete(event,triggerForm,elements.datigenerali_tabless.getTabFormNameAt(1),noConfirm);
}
