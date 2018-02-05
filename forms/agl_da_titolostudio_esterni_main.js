/**
 * @properties={typeid:24,uuid:"91668059-88C9-4D84-8427-3FC0411A6812"}
 */
function gotoEdit()
{
	_super.gotoEdit();
	
	/**
	 * Crea i record correlati qualora necessario
	 */
	
	if(globals.isEmpty(lavoratori_to_lavoratori_statoanag))
		lavoratori_to_lavoratori_statoanag.newRecord();
	
	if(globals.isEmpty(lavoratori_to_lavoratori_studiincorso))
		lavoratori_to_lavoratori_studiincorso.newRecord();
	
	globals.ma_utl_setStatus(globals.Status.BROWSE, forms.agl_dettagliotitolostudio_esterni_main.controller.getName(), null, null, true);
}
