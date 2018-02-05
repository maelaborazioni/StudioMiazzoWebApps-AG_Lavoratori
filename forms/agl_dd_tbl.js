/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 *
 * @private
 *
 * @properties={typeid:24,uuid:"75ECC7A9-0159-4C84-869F-4532FA1C544B"}
 * @AllowToRunInFind
 */
function onRecordSelection(event, _form) 
{
    _super.onRecordSelection(event, _form);
    updateDetail();
}

/**
 * @properties={typeid:24,uuid:"627AC53F-7E2C-45E0-9AFC-C19CC29F85AF"}
 * @AllowToRunInFind
 */
function updateDetail()
{
	if (foundset.getSize() > 0)
	{
		var frmDec = forms.agl_dd_dtl_l;
		var rightPanelName;
		switch(foundset.iddcg_campi)
		{
			case 3 : 
				rightPanelName = '_doppio';
				break;
			case 23 :
			    rightPanelName ='_turnista';
				break;
			case 24 :
				rightPanelName = '_classificazione';
				break;
			default :
			    rightPanelName ='_singolo';
			    break;
		}
		
		var rightPanel = 'agl_dd_dtl_r' + rightPanelName;

		frmDec._decorrenza = foundset.decorrenza;
		frmDec._iddcgcampi = foundset.iddcg_campi;
		frmDec._descIdcgCampi = foundset.e2dcg_decorrenza_to_e2dcg_campi != null ? foundset.e2dcg_decorrenza_to_e2dcg_campi.descrizionecampo : '';
		frmDec._idLegato = parseInt(foundset.id_legato, 10);
		frmDec._valore = parseInt(foundset.valore, 10);
		frmDec._valoreAgg = parseInt(foundset.valoreagg, 10);

		if (!forms.agl_dd_main._isNuovaDecorrenza || forms.agl_dd_main._isDaCancel) {

			forms.agl_dd_dtl.elements.right_tabless.removeAllTabs();

			// caso regola
			if (frmDec._iddcgcampi == 3) {

				forms[rightPanel].elements['label_1']['text'] = foundset.e2dcg_decorrenza_to_e2dcg_campi.descrizionecampo;
				forms[rightPanel].elements['label_2']['text'] = foundset.e2dcg_decorrenza_to_e2dcg_campiagg.descrizionecampo;
				forms[rightPanel]['_codRegola'] = foundset.e2dcg_decorrenza_to_e2regole.codiceregola;
				forms[rightPanel]['_descRegola'] = foundset.e2dcg_decorrenza_to_e2regole.descrizioneregola;
				forms[rightPanel]['_valoreAgg'] = frmDec._valoreAgg;

				var asql = 'select descrizione from e2fo_fasceorarie FO inner join e2regolefasce RF' + ' ON FO.idfasciaoraria = RF.idfasceorarie' + ' WHERE RF.idregole = ' + (frmDec._valore ? frmDec._valore : -1) + ' AND RF.riga = ' + (frmDec._valoreAgg ? frmDec._valoreAgg : -1);
                var bsql = 'select descrizautogenerata from e2fo_fasceorarie FO inner join e2regolefasce RF' + ' ON FO.idfasciaoraria = RF.idfasceorarie' + ' WHERE RF.idregole = ' + (frmDec._valore ? frmDec._valore : -1) + ' AND RF.riga = ' + (frmDec._valoreAgg ? frmDec._valoreAgg : -1);    
				if (frmDec._valore)
				{
					var descrizione = globals.RetrieveValueFromQuery(globals.Server.MA_PRESENZE, asql, 'descrizione', null);
					if(descrizione)
					   forms[rightPanel]['_descRiga'] = descrizione //globals.RetrieveValueFromQuery(globals.Server.MA_PRESENZE, asql, 'descrizione', null);
					else
					   forms[rightPanel]['_descRiga'] = globals.RetrieveValueFromQuery(globals.Server.MA_PRESENZE, bsql, 'descrizautogenerata', null);
				}
				else
					forms[rightPanel]['_descRiga'] = '-----------';
			} 
			else if(frmDec._iddcgcampi == 23)
			{
				if (foundset.e2dcg_decorrenza_to_e2dcg_campi != null) {
					
					forms[rightPanel].elements['label_1']['text'] = foundset.e2dcg_decorrenza_to_e2dcg_campi.descrizionecampo;
					forms[rightPanel]['_codTurnista'] = foundset.e2dcg_decorrenza_to_e2tabtipiturno.codice;
					forms[rightPanel]['_descTurnista'] = foundset.e2dcg_decorrenza_to_e2tabtipiturno.descrizione;
					forms[rightPanel]['_idTurnista'] = frmDec._valore;
				}
				
			}
			// caso regola
			else if (frmDec._iddcgcampi == 24) 
			{
                // TODO aggiornamento selezione per classificazione
                /** @type {JSFoundset<db:/ma_anagrafiche/gruppi_classificazionidettaglio>}*/
                var fsClassifDett = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.GRUPPI_CLASSIFICAZIONI_DETTAGLIO);
				if(fsClassifDett.find())
				{
					fsClassifDett.idgruppoclassificazionedettaglio = foundset.valore;
					fsClassifDett.search();
				}
                
				forms[rightPanel].elements['label_1']['text'] = foundset.e2dcg_decorrenza_to_e2dcg_campi.descrizionecampo;
				forms[rightPanel].elements['label_2']['text'] = 'Dettaglio classificazione';
				forms[rightPanel]['_idClassif'] = fsClassifDett.gruppi_classificazionidettaglio_to_gruppi_classificazioni.idgruppoclassificazione;
				forms[rightPanel]['_codClassif'] = fsClassifDett.gruppi_classificazionidettaglio_to_gruppi_classificazioni.codice;
				forms[rightPanel]['_descClassif'] = fsClassifDett.gruppi_classificazionidettaglio_to_gruppi_classificazioni.descrizione;
				forms[rightPanel]['_idClassifDett'] = fsClassifDett.idgruppoclassificazionedettaglio;
				forms[rightPanel]['_codClassifDett'] = fsClassifDett.codice;
				forms[rightPanel]['_descClassifDett'] = fsClassifDett.descrizione; 
				
			}
			else {

				if (foundset.e2dcg_decorrenza_to_e2dcg_campi != null) {
					forms[rightPanel].elements['label_1']['text'] = foundset.e2dcg_decorrenza_to_e2dcg_campi.descrizionecampo;
					forms[rightPanel]['_valore'] = frmDec._valore;
				}
			}

			forms.agl_dd_main._isDaCancel = false;
			forms.agl_dd_dtl.elements.right_tabless.addTab(rightPanel);
		} 
		else 
			forms.agl_dd_dtl.elements.right_tabless.removeAllTabs();
	}
	else
		forms.agl_dd_main.elements.decorrenza_dtl_tabless.removeAllTabs();
}


