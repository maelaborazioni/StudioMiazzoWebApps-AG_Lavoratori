/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8E13568E-F8CE-4988-9437-52EFE02553E3"}
 */
function apriDettaglioTitoloStudio(event)
{
	var form = forms.agp_titolostudio_dtl.controller.getName();
	globals.ma_utl_showFormInDialog(form, 'Dettaglio titolo di studio', foundset);
}
