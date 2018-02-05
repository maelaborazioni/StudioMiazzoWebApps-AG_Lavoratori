/**
 * @type {Number}
 * 
 * @properties={typeid:35,uuid:"281A2DE5-657F-4BAE-BB53-15DE291F5405",variableType:8}
 */
var vIdLavoratore = null;
/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E350CD22-37BC-4224-BC69-05D5EE5FAD1A"}
 */
function onActionAnnulla(event) 
{
	databaseManager.rollbackTransaction();
	var frm = forms.agl_ratei_movimenti_dtl;
    globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
    globals.ma_utl_setStatus(globals.Status.BROWSE,frm.controller.getName());
    
    elements.btn_confirm.enabled =
	elements.btn_annulla.enabled = false;
}

/**
 *
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"8361FCBB-F36E-4BF8-AA94-696FEF3972C7"}
 * @AllowToRunInFind
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	_super.onShowForm(firstShow, event, svyNavBaseOnShow)
    foundset.find();
	foundset.iddip = vIdLavoratore;
	foundset.search();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8BCC97EA-7840-4D80-BFD2-5B7AEE98FD60"}
 */
function addRateo(event) 
{
	setStatus('');
	databaseManager.startTransaction();
    var rec = foundset.getRecord(foundset.newRecord());
    rec.iddip = vIdLavoratore;
    rec.importatodagiornaliera = 0;
    rec.forzatomanuale = 1;
    var frm = forms.agl_ratei_movimenti_dtl;
    globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName());
    globals.ma_utl_setStatus(globals.Status.EDIT,frm.controller.getName());
    elements.btn_confirm.enabled =
    	elements.btn_annulla.enabled = true;
    	
 }

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E07EC557-296B-4310-8021-42B332EB43C6"}
 */
function editRateo(event)
{
	setStatus('');
	if(foundset.getSize())
	{	
		databaseManager.startTransaction();
		var frm = forms.agl_ratei_movimenti_dtl;
	    globals.ma_utl_setStatus(globals.Status.EDIT,controller.getName());
	    globals.ma_utl_setStatus(globals.Status.EDIT,frm.controller.getName());
	}
	else
		addRateo(event);
	
	elements.btn_confirm.enabled =
	elements.btn_annulla.enabled = true;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"FB01CAAF-13FA-4EA7-8FCC-8684DD2EB6DC"}
 */
function deleteRateo(event) 
{
	setStatus('');
	if(foundset.getSize())
	   foundset.deleteRecord();
	else
		setStatusWarning('Nessun rateo eliminabile','',500);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"FBA214E3-355F-4451-BE1B-9950D2FF9913"}
 */
function confermaRateo(event) 
{
     if(!databaseManager.commitTransaction())
     {
    	 databaseManager.rollbackTransaction();
         setStatusError('Errore durante il salvataggio del rateo...riprovare','',500);
     }
     else
     {
	     setStatusSuccess('Salvataggio rateo avvenuto','',1500);
	     var frm = forms.agl_ratei_movimenti_dtl;
	     globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	     globals.ma_utl_setStatus(globals.Status.BROWSE,frm.controller.getName());
	     
	     elements.btn_confirm.enabled =
	 	   elements.btn_annulla.enabled = false;
     }
}

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8A189EDB-91AF-428B-9CE5-DA3286686E69"}
 */
function onHide(event) 
{
	onActionAnnulla(event);
	globals.svy_mod_closeForm(event);
}
