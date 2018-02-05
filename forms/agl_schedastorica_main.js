/** 
 * @param _event
 * @param _triggerForm
 *
 *
 * @properties={typeid:24,uuid:"F8580264-2CAB-45FF-8EDF-97A819496993"}
 */
function dc_new(_event, _triggerForm) {
	
	_super.dc_new(_event,_triggerForm);
	
    databaseManager.setAutoSave(false);
    setStatus(globals.Status.EDIT);

    return;
}

/** 
 * @param _event
 * @param _triggerForm
 *
 *
 * @properties={typeid:24,uuid:"7DE4B394-1BE9-418C-A62F-71286473C9E6"}
 */
function dc_save(_event, _triggerForm) {
	
	foundset.iddittaschedastoricadettaglio = forms.agl_ss_dtl._idDittaSchedaStoricaDettaglio;
   	foundset.idlavoratore = forms.agl_header_dtl.idlavoratore;
   	
	if(validaDati())
	{		
        var saved = _super.dc_save(_event,_triggerForm);
	    if(saved == -1)
	       globals.ma_utl_showErrorDialog('Salvataggio non riuscito, riprovare','Scheda storica dipendente');

	}else
		globals.ma_utl_showErrorDialog('Controllare i valori inseriti prima di proseguire','Scheda storica dipendente')
}

/** 
 * @param _event
 * @param _triggerForm
 *
 *
 * @properties={typeid:24,uuid:"D4BBA629-F297-4372-BADC-07330C87138A"}
 */
function dc_cancel(_event, _triggerForm) {
	
	_super.dc_cancel(_event,_triggerForm);
	
	return;
}

/**
 * @param {JSEvent} _event
 *
 * @properties={typeid:24,uuid:"986FAAC6-1958-49E8-AE44-EFA823715D11"}
 */
function dc_delete(_event)
{
	_super.dc_delete(_event, 'svy_nav_fr_buttonbar_viewer');
}

/** 
 *
 * @properties={typeid:24,uuid:"F16F3032-62D7-4FF0-9A84-54B3E99BF470"}
 */
function gotoEdit() {

	_super.gotoEdit();
	setStatus(globals.Status.EDIT);	
}

/**
 *
 * @properties={typeid:24,uuid:"79D55817-AE18-484D-8609-6B24FDC61FC3"}
 */
function gotoBrowse() {
	
	_super.gotoBrowse();
	setStatus(globals.Status.BROWSE);
}


/**
 * @param {String} status
 *
 * @properties={typeid:24,uuid:"48400183-4F00-441A-B7F1-1849C39A00B3"}
 */
function setStatus(status)
{
	var frm = forms.agl_ss_dtl;
	globals.ma_utl_setStatus(status,frm.controller.getName());	
}

/**
 * @properties={typeid:24,uuid:"B4106F2D-76F4-481E-BF82-8D3A54A3E9E9"}
 */
function validaDati()
{
	if(datadecorrenza && datadecorrenza != ''
		&& iddittaschedastoricadettaglio != null 
		&& idlavoratore)
	   return true;
    
    return false;
}