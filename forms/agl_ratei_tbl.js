
/**
 * Perform the element right-click action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F25A55D5-AEA8-4BE1-8727-70CC7EA8BD57"}
 */
function onRightClickRateo(event) 
{
	var frmName = event.getFormName();
	if(utils.stringRight(frmName,4) != 'temp')
	{
		var index = utils.stringPosition(frmName,'_',1,6);
		var idLavStr = utils.stringMiddle(frmName,index + 1,frmName.length);
		var idlavoratore = parseInt(idLavStr,10);
		
		var popUpMenu = plugins.window.createPopupMenu();
		
		var stampaItem = popUpMenu.addMenuItem('Stampa la situazione ratei del dipendente',stampaSituazioneRateiDipendente);
		stampaItem.methodArguments = [event,idlavoratore];
		
		popUpMenu.show(event.getSource());
	}
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _itemInd
 * @param _parItem
 * @param _isSel
 * @param _parMenTxt
 * @param _menuTxt
 * @param event
 * @param {Number} idLavoratore
 *
 * @properties={typeid:24,uuid:"CA62DCA4-5EAE-4FA1-8B6E-9565C1E97C01"}
 */
function stampaSituazioneRateiDipendente(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idLavoratore)
{
	/** @type {Date}*/
	var limitaAl = forms['rp_list_ratei_reparto'].limitaAl;
	
	var params = new Object();//forms.stampa_situazione_ratei_opzioni.getOptions();
	params['idditta'] = globals.getDitta(idLavoratore);
	params['iddipendenti'] = [idLavoratore];
	params['alladata'] = utils.dateFormat(limitaAl,globals.EU_DATEFORMAT);
	params['daticontrattuali'] = 1;
	params['codicirateoselezionati'] = [];
	params['periodo'] = limitaAl.getFullYear() * 100 + limitaAl.getMonth() + 1;
	params['bExcel'] = 0;
	params['groupContratto'] = false;
	params['groupQualifica'] = false;
	params['groupPosizioneInps'] = false;
	params['groupSedeLavoro'] = false;
	params['groupRaggruppamento'] = false;
	params['groupTipoRaggruppamento'] = 0;

    var url = globals.WS_REPORT_URL + (globals.WS_DOTNET_CASE == globals.WS_DOTNET.CORE ?  "/Report" : "Stampe") + "/StampaSituazioneRatei";
    globals.addJsonWebServiceJob(url, params);
}