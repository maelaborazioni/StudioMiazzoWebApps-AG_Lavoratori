/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"CB08432D-3501-4F35-9A7E-BD39B8D3D6B6",variableType:93}
 */
var _decorrenza = null;

/**
 * @type {Date}
 * 
 * @properties={typeid:35,uuid:"0D54EB0A-6A94-48A5-AE47-91475C46BFC6",variableType:93}
 */
var _decorrenzaOld = null;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"C1690D17-1616-418E-B0A4-561BF53B83BB"}
 */
var _descIdcgCampi = '';

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"5F058B25-FDEE-4968-9116-B850EFE63FB1",variableType:4}
 */
var _iddcgcampi = -1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"2D469240-5EEC-4925-8BF7-F89D4CD065B0",variableType:4}
 */
var _idLegato = -1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"1628990B-9F2E-4743-AB86-1615E853A7E2",variableType:4}
 */
var _valore = -1;

/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"54457549-30AD-46C2-A902-B7B126D1617B",variableType:4}
 */
var _valoreAgg = -1;

/**
 * @param {JSRecord} _rec
 * @param {Number} [_tipoDec]
 * @properties={typeid:24,uuid:"85036E9A-B1D7-419A-A384-B1C20CFC7672"}
 */
function AggiornaTipoDecorrenza(_rec,_tipoDec) {

	var rightPanel = null;
	
	forms.agl_dd_dtl.elements.right_tabless.removeAllTabs();
	
	// caso regola
    if((_tipoDec != null && _tipoDec == 3)|| _rec['iddcg_campi'] == 3) 
    {
    	rightPanel = 'agl_dd_dtl_r_doppio';
    	forms['agl_dd_dtl_l']['_iddcgcampi'] = _rec['iddcg_campi']; 
        forms['agl_dd_dtl_l']['_descIdcgCampi'] = _rec['descrizionecampo'];
        forms[rightPanel].elements['label_1']['text'] = _rec['descrizionecampo'];
        forms[rightPanel].elements['label_2']['text'] = 'Giorno di partenza della regola';
        forms[rightPanel]['_codRegola'] = '';
        forms[rightPanel]['_descRegola'] = '';
        forms[rightPanel]['_valoreAgg'] = '';
        forms[rightPanel]['_descRiga'] = '';
	}
    // caso turnista
	else if((_tipoDec != null && _tipoDec == 23)|| _rec['iddcg_campi'] == 23) 
    {
    	rightPanel = 'agl_dd_dtl_r_turnista';
    	forms['agl_dd_dtl_l']['_iddcgcampi'] = _rec['iddcg_campi']; 
        forms['agl_dd_dtl_l']['_descIdcgCampi'] = _rec['descrizionecampo'];
        forms[rightPanel].elements['label_1']['text'] = 'Tipo turnista';
        forms[rightPanel]['_codTurnista'] = '';
        forms[rightPanel]['_descTurnista'] = '';
    }
    // caso dettaglio classificazione
    else if((_tipoDec != null && _tipoDec == 24)|| _rec['iddcg_campi'] == 24) 
    {
    	rightPanel = 'agl_dd_dtl_r_classificazione';
    	forms['agl_dd_dtl_l']['_iddcgcampi'] = _rec['iddcg_campi']; 
        forms['agl_dd_dtl_l']['_descIdcgCampi'] = _rec['descrizionecampo'];
        forms[rightPanel].elements['label_1']['text'] = _rec['descrizionecampo'];
        forms[rightPanel].elements['label_2']['text'] = 'Dettaglio classificazione';
        forms[rightPanel]['_codClassif'] = '';
        forms[rightPanel]['_descClassif'] = '';
        forms[rightPanel]['_codClassifDett'] = '';
        forms[rightPanel]['_descClassifDett'] = '';
	}
    // caso singolo (badge,etc..)
   	else
   	{
   		rightPanel = 'agl_dd_dtl_r_singolo';
    	forms[rightPanel].elements['label_1']['text'] = _rec['descrizionecampo'];
		forms[rightPanel]['_valore'] = null;
        forms['agl_dd_dtl_l']['_iddcgcampi'] = _rec['iddcg_campi']; 
        forms['agl_dd_dtl_l']['_descIdcgCampi'] = _rec['descrizionecampo'];			
	}
	
	//una volta selezionato il tipo di decorrenza o si conferma o si annulla l'inserimento
	forms.agl_dd_dtl_l.elements.btn_tipo_decorrenza.enabled = false;
	
	//posizioniamo il cursore sul primo campo del nuovo tab
	forms[rightPanel].controller.focusFirstField();
	
	forms.agl_dd_dtl.elements.right_tabless.addTab(rightPanel);
	if(forms[rightPanel].elements['lbl_field_1_a'])
		forms[rightPanel].elements['lbl_field_1_a'].enabled = true;
    if(forms[rightPanel].elements['lbl_field_2_a'])
    	forms[rightPanel].elements['lbl_field_2_a'].enabled = true;
	globals.ma_utl_setStatus(globals.Status.EDIT,rightPanel);
	
}

/**
 * Filtra i tipi di decorrenza rilevanti per il cliente
 * 
 * @param {JSFoundset} fs
 *
 * @properties={typeid:24,uuid:"ECBC99DC-63A1-48F8-B95E-CD53831202A9"}
 */
function FiltraDecRilevanteCliente(fs)
{
	//nel caso cliente vengono esposte solo le decorrenze rilevanti per il cliente 
	if(globals._tipoConnessione == globals.Connessione.CLIENTE)
	   fs.addFoundSetFilterParam('rilevantecliente','=',1);
	return fs;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E8F8E738-99D0-429C-8AEF-C0B194D18FB0"}
 * @AllowToRunInFind
 */
function onDataChangeTipoDec(oldValue, newValue, event) {
	
	/** @type {JSFoundSet<db:/ma_presenze/e2dcg_campi>} */
	var _foundset = databaseManager.getFoundSet(globals.nav.program['AG_Lkp_TipoDecorrenza'].server_name,
		                                        globals.nav.program['AG_Lkp_TipoDecorrenza'].table_name);

	if(_foundset.find())
		_foundset.iddcg_campi = newValue;
	_foundset.search();

	if (_foundset.getSize() > 0) {

	    AggiornaTipoDecorrenza(_foundset.getSelectedRecord(),
	    	                   _foundset['iddcg_campi']);
		
	} else {
		globals.svy_nav_showLookupWindow(event, '_iddccgcampi', 'AG_Lkp_TipoDecorrenza', 'AggiornaTipoDecorrenza',
		  	                             'FiltraDecRilevanteCliente', null, null, '', true);
	}
	
	return true;
}

/**
 * Handle changed data.
 *
 * @param oldValue old value
 * @param newValue new value
 * @param {JSEvent} event the event that triggered the action
 *
 * @returns {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"6E5E3827-AFE2-460F-8F78-EFBC06BF2392"}
 */
function onDataChangeDecorrenza(oldValue, newValue, event) 
{
	if(newValue && !validaDecorrenza(newValue))
	{
		setStatusWarning(i18n.getI18NMessage('i18n:ma.msg.not_hired', [utils.dateFormat(newValue, globals.EU_DATEFORMAT)]));
		elements[event.getElementName()].requestFocus();
		
		return false;
	}
	else
		resetStatus();
	
    if(newValue != oldValue)
    	_decorrenzaOld = oldValue;
    else 
    	_decorrenzaOld = null;
	
    return true;
}

/**
 * @param {Date} decorrenza
 *
 * @properties={typeid:24,uuid:"3A298D67-17BD-4260-A958-B9E43B1C32FF"}
 */
function validaDecorrenza(decorrenza)
{
	var dataAssunzione = forms.agl_dd_main.assunzione;
	var dataCessazione = forms.agl_dd_main.cessazione;
	
	return (decorrenza >= dataAssunzione && (dataCessazione ?  decorrenza <= dataCessazione : true));
}