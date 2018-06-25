
/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} [svyNavBaseOnShow]
 *
 * @properties={typeid:24,uuid:"F31D55EC-4AAA-4B1F-AFF9-560AD664D96F"}
 * @AllowToRunInFind
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	_super.onShowForm(firstShow, event, svyNavBaseOnShow);
	
	_isDittaEsterna = true;
	
	var frm = forms.agl_cl_classificazioni_esterni_tbl;
	var fs = frm.foundset;
	
	if(fs.find())
	{
		fs.idditta = idditta;
		if(globals.getDitteInterinali().indexOf(idditta) != -1)
		{
			// la relazione deve tener conto delle classificazioni relative direttamente alla ditta
			// più quelle relative alla ditta legata (che non siano esclusive di quest'ultima)
			fs.newRecord();
			fs.idditta = lavoratori_to_ditte.ditte_to_ditte_legami.iddittariferimento;
		    fs.codice_int = '<=10';
		}
				
		fs.search();
	}	
}
