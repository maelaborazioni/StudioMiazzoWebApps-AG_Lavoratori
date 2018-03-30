/**
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"87E154E9-54C6-4C6D-AEA2-5FBF39DE09EE",variableType:4}
 */
var currDitta = -1;
/**
 * @type {Array}
 *
 * @properties={typeid:35,uuid:"787ADB73-AD94-4F08-A962-E69E31150612",variableType:-4}
 */
var currIds = [];
/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"55B02884-F214-4597-AACC-F47CB99D5268"}
 */
var lkpLAVORATORI = 'AG_Lkp_Lavoratori';

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E1EF8683-A419-4F08-9594-66AB4351380A"}
 */
var lkpLAVORATORI_DAELIMINARE = 'AG_Lkp_Lavoratori_DaEliminare';

/**
 * @properties={typeid:24,uuid:"754D1823-691E-44C5-A70E-EE225CD1C04A"}
 * @AllowToRunInFind
 */
function apriElencoRecapitiIndirizzoLavoratore(fs, codice)
{
// TODO apriElencoRecapitiIndirizzoLavoratore : da eliminare?	
//	var formName = forms.agl_recapiti_main.controller.getName();
//	
//	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori_datianagrafici>} */
//	var lavoratoriDomiciliFs = fs;
//	
//	/**
//	 * We need to perform the find on the table Lavoratori_DatiAnagrafici, since
//	 * working directly on Persone_Recapiti by following the existing relation would
//	 * miss all other contacts
//	 */
//	var lavoratoriRecapitiFs = lavoratoriDomiciliFs && lavoratoriDomiciliFs.lavoratori_datianagrafici_to_lavoratori_datianagrafici_recapiti;
//	if(lavoratoriRecapitiFs && lavoratoriRecapitiFs.find())
//	{
//		lavoratoriRecapitiFs.lavoratori_datianagrafici_to_v_lavoratori_recapiti.codtipoindirizzo = codice;
//		lavoratoriRecapitiFs.lavoratori_datianagrafici_to_v_lavoratori_recapiti.datarilevazioneindirizzo = lavoratoriDomiciliFs.lavoratori_datianagrafici_to_persone_domicili.datarilevazione;
//		
//		if(lavoratoriRecapitiFs.search() > 0)
//		{
//			lavoratoriRecapitiFs.sort('lavoratori_datianagrafici_to_persone_recapiti.persone_recapiti_to_tab_tipirecapito.ordine');
//			globals.ma_utl_showFormInDialog(formName, 'Recapiti', lavoratoriRecapitiFs);
//		}
//		else
//		{
//			globals.ma_utl_showInfoDialog('i18n:ma.msg.norecord');
//		}
//	}
		}

/**
 * @properties={typeid:24,uuid:"01DF5148-CE83-43B2-9844-05E7F1ACB53A"}
 */
function selezione_DAL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriDAL(recSingolaDitta);
	else if (globals._filtroSuDitta != null)
	{
		currDitta = globals._filtroSuDitta;
		
		ApriDAL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriDAL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"80CE5645-BA3B-4E09-A680-3C7845A3263B"}
 */
function selezione_DAL_esterna()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.ESTERNA);
	if(recSingolaDitta)
		ApriDAL(recSingolaDitta);
	else if (globals._filtroSuDitta 
			&& globals.getTipologiaDitta(globals._filtroSuDitta) == globals.Tipologia.ESTERNA) {

		currDitta = globals._filtroSuDitta;
		
		ApriDAL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriDAL', 'FiltraLavoratoriDittaEsterna', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"4CFC6056-EDB9-42A4-8998-979A8ACEA159"}
 */
function selezione_PRL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriPRL(recSingolaDitta);
	else if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriPRL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriPRL', 'FiltraLavoratoriDittaStandard', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"11AFD0FA-DA25-4BAD-9FD1-4764C1EA9F9D"}
 */
function selezione_PRL_esterna()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.ESTERNA);
	if(recSingolaDitta)
		ApriPRL(recSingolaDitta);
	else if (globals._filtroSuDitta
			&& globals.getTipologiaDitta(globals._filtroSuDitta) == globals.Tipologia.ESTERNA) {

		currDitta = globals._filtroSuDitta;
		
		ApriPRL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriPRL', 'FiltraLavoratoriDittaEsterna', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"F12859CF-643D-4861-8E94-065EAB9D0CC3"}
 */
function selezione_RDLL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriRDLL(recSingolaDitta);
	else if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriRDLL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriRDLL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"E801610F-3E80-4F4C-966A-0E3ABCFC1B37"}
 */
function selezione_RDLL_esterna()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.ESTERNA);
	if(recSingolaDitta)
		ApriRDLL(recSingolaDitta);
	else if (globals._filtroSuDitta
			&& globals.getTipologiaDitta(globals._filtroSuDitta) == globals.Tipologia.ESTERNA) {

		currDitta = globals._filtroSuDitta;
		
		ApriRDLL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriRDLL', 'FiltraLavoratoriDittaEsterna', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"08D039DF-EBA9-4CA3-8799-405B69C97165"}
 */
function selezione_INPSL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriINPSL(recSingolaDitta);
	else if (globals._filtroSuDitta != null)
	{
		currDitta = globals._filtroSuDitta;
		
		ApriINPSL(null)
		
	} else 
	{
		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriINPSL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"097A1824-8893-4FFA-A7C2-8ED51747A067"}
 */
function selezione_INAILL()
{
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriINAILL(recSingolaDitta);
	else if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriINAILL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriINAILL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"A7902B24-4164-4DF8-80FF-C7FE269CE24E"}
 */
function selezione_VAL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriVAL(recSingolaDitta);
	else if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriVAL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriVAL', 'FiltraLavoratoriDittaStandard', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"FE79F308-70D5-4C4F-93FC-70F0F48D899F"}
 */
function selezione_RL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriRL(recSingolaDitta);
	else if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriRL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriRL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"3F728FA8-65C9-4B99-AD6A-4C7941299BA5"}
 */
function selezione_PL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriPL(recSingolaDitta);
	else if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriPL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriPL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"1F4C9F20-0ACF-4C6A-A03C-F413F03EAB10"}
 */
function selezione_DDL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriDDL(recSingolaDitta);
	else
	if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriDDL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriDDL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"8A5719B8-7E46-4FDD-9D0C-EC84D43B87D8"}
 */
function selezione_DDL_esterna()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.ESTERNA);
	if(recSingolaDitta)
		ApriDDL(recSingolaDitta);
	else
	if (globals._filtroSuDitta 
			&& globals.getTipologiaDitta(globals._filtroSuDitta) == globals.Tipologia.ESTERNA) {

		currDitta = globals._filtroSuDitta;
		
		ApriDDL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriDDLEsterna', 'FiltraLavoratoriDittaEsterna', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"CE996F9A-2273-48E5-9FB4-6EAF22592CDA"}
 */
function selezione_CLL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriCLL(recSingolaDitta);
	else
	if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriCLL(null);
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriCLL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"E32D783F-A3DE-43A0-8538-2506F79C0804"}
 */
function selezione_CLL_esterna()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.ESTERNA);
	if(recSingolaDitta)
		ApriCLL(recSingolaDitta);
	else
	if (globals._filtroSuDitta
			&& globals.getTipologiaDitta(globals._filtroSuDitta) == globals.Tipologia.ESTERNA)
	{
		currDitta = globals._filtroSuDitta;
		ApriCLL(null);
	} else
	{
		currDitta = -1
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriCLL', 'FiltraLavoratoriDittaEsterna', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"35A442A2-24BC-4BC5-9FFD-F737F3E31E5D"}
 */
function selezione_SSL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriSSL(recSingolaDitta);
	else if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriSSL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriSSL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"9398C398-A65A-4D17-84BE-CB8A239A681D"}
 */
function selezione_SSL_esterna()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.ESTERNA);
	if(recSingolaDitta)
		ApriSSL(recSingolaDitta);
	else
	if (globals._filtroSuDitta 
			&& globals.getTipologiaDitta(globals._filtroSuDitta) == globals.Tipologia.ESTERNA) {

		currDitta = globals._filtroSuDitta;
		
		ApriSSL(null)
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriSSL', 'FiltraLavoratoriDittaEsterna', null, null, '', true);
	}
}

/**
 * @properties={typeid:24,uuid:"10C318D3-9B34-4452-83A3-B4650A32CBE6"}
 */
function selezione_PVL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriPVL(recSingolaDitta);
	else
	if (globals._filtroSuDitta != null) 
	{
		currDitta = globals._filtroSuDitta;
		ApriPVL(null);
	} 
	else
	{
		currDitta = -1
		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriPVL', 'FiltraLavoratoriDittaStandard', null, null, '', true);
	}
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"61669779-70D7-4271-A859-F5551DC313C1"}
 * 
 * @AllowToRunInFind
 */
function ApriDAL(_rec)
{
	var _filter = new Object();
	_filter.filter_name = 'ftr_idditta';
	_filter.filter_field_name = 'idditta';
	_filter.filter_operator = '=';
	if(_rec)
		_filter.filter_value = _rec['idditta'];
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta }
	}
	 
	var _programName = '';
	if(globals.getTipologiaDitta(_filter.filter_value) == globals.Tipologia.ESTERNA)
	{	
		_programName = 'AGL_DatiAnagrafici_Esterni';
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Dati anagrafici lavoratori esterni');
	            return;
	    	}
	    }
	}
	else
	    _programName = 'AGL_DatiAnagrafici';
	    	
	var _progObj = globals.nav.program[_programName];
	_progObj.filter = [_filter];  
	_progObj.foundset = null;
	
	globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"F0E9AB82-3C18-4F30-8744-5DCAA1F2E705"}
 * @AllowToRunInFind
 */
function ApriPRL(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	if(_rec)
		_filter.filter_value = _rec['idditta']
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta };
	}   
	var _programName = '';
	if(globals.getTipologiaDitta(_filter.filter_value)  == globals.Tipologia.ESTERNA)
	{	
		_programName = 'AGL_PagamentoRetribuzioni_Esterni';
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Dati decorrenza lavoratori esterni');
	            return;
	    	}
	    }
	}
	else
	    _programName = 'AGL_PagamentoRetribuzioni';
	    
	var _progObj = globals.nav.program[_programName];
		_progObj.filter = [_filter];  
	    _progObj.foundset = null;
		
	globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"32596BDC-1191-4C3E-93BA-29D9650EEF3D"}
 * @AllowToRunInFind
 */
function ApriRDLL(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	if(_rec)
		_filter.filter_value = _rec['idditta']
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta };
	}
	    
	var _programName = '';
	if(globals.getTipologiaDitta(_filter.filter_value) == globals.Tipologia.ESTERNA)
	{	
		_programName = 'AGL_RapportoDiLavoro_Esterni';
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Dati decorrenza lavoratori esterni');
	            return;
	    	}
	    }
	}
	else
	    _programName = 'AGL_RapportoDiLavoro';
	
    var _progObj = globals.nav.program[_programName];
		_progObj.filter = [_filter];  
		_progObj.foundset = null;
		
    globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"25796A31-B08D-407A-9791-D18A15E505D9"}
 */
function ApriINPSL(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	if(_rec)
		_filter.filter_value = _rec['idditta']
	else 
	    _filter.filter_value = currDitta;
	
	var _programName = 'AGL_Inps';    
	var _progObj = globals.nav.program[_programName];
	_progObj.filter = [_filter]  
	_progObj.foundset = null
	
    globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"6243B93A-DEDD-422E-99F5-8A8DDA677B43"}
 */
function ApriINAILL(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	if(_rec)
		_filter.filter_value = _rec['idditta']
	else 
	    _filter.filter_value = currDitta;
	 
	var _programName = 'AGL_Inail';    
	var _progObj = globals.nav.program[_programName]
	_progObj.filter = [_filter]  
	_progObj.foundset = null
	
    globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"B0239D37-1F02-493B-9B36-40CC2E6F4C48"}
 */
function ApriVAL(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	if(_rec)
		_filter.filter_value = _rec['idditta']
	else 
	    _filter.filter_value = currDitta;
	
	var _programName = 'AGL_VociAutomatiche';    
	var _progObj = globals.nav.program[_programName];
	_progObj.filter = [_filter]  
	_progObj.foundset = null
	
    globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"C118143A-54EE-44F9-9773-5F0DFFE82DA0"}
 */
function ApriRL(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	if(_rec)
		_filter.filter_value = _rec['idditta']
	else 
	    _filter.filter_value = currDitta;
	    
	var _programName = 'AGL_Ratei';    
	var _progObj = globals.nav.program[_programName];
	_progObj.filter = [_filter];  
	_progObj.foundset = null;
	
    globals.openProgram(_programName,true);
	
}

/**
 * @properties={typeid:24,uuid:"2D855F93-C72F-4447-95D6-1F20D8DFE09E"}
 */
function ApriPL(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	if(_rec)
		_filter.filter_value = _rec['idditta']
	else 
	    _filter.filter_value = currDitta;
	 
	var _programName = 'AGL_Privacy';    
	var _progObj = globals.nav.program[_programName]
	_progObj.filter = [_filter]  
	_progObj.foundset = null
	
   globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 * @param {Number} [_idditta]
 * 
 * @properties={typeid:24,uuid:"406EF9FE-B05B-46E3-B20A-C49DAA71EB05"}
 * @AllowToRunInFind
 */
function ApriDDL(_rec,_idditta)
{
	var _filter = new Object();
	_filter.filter_name = 'ftr_idditta';
	_filter.filter_field_name = 'idditta';
	_filter.filter_operator = '=';
	if(_rec)
		_filter.filter_value = _rec['idditta'];
	else if(_idditta)
	{
		_filter.filter_value =_idditta;
		_rec = { idditta : _idditta}
	}
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta };
	}
	    
	var _programName = '';
	if(globals.getTipologiaDitta(_filter.filter_value) == globals.Tipologia.ESTERNA)
	{	
		_programName = 'AGL_DatiDecorrenza_Esterni';
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,
			                                 globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Dati decorrenza lavoratori esterni');
	            return;
	    	}
	    }
	}
	else
	    _programName = 'AGL_DatiDecorrenza';
	
    var _progObj = globals.nav.program[_programName];
		_progObj.filter = [_filter];  
		_progObj.foundset = null;
	
    globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"1251F434-D1A4-41BB-AED1-1A3FACE64261"}
 * @AllowToRunInFind
 */
function ApriDDLEsterna(_rec)
{
	var _filter = new Object();
	_filter.filter_name = 'ftr_idditta';
	_filter.filter_field_name = 'idditta';
	_filter.filter_operator = '=';
	if(_rec)
		_filter.filter_value = _rec['idditta'];
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta };
	}
	    
	var _progObj = globals.nav.program['AGL_DatiDecorrenza_Esterni'];
	_progObj.filter = [_filter]; 
	_progObj.foundset = null;
	
	if(globals.getTipologiaDitta(_filter.filter_value) == globals.Tipologia.ESTERNA)
	{	
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE, globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Dati anagrafici lavoratori esterni');
	            return;
	    	}
	    }
	}
	
    globals.openProgram('AGL_DatiDecorrenza_Esterni',true);
}
/**
 * @properties={typeid:24,uuid:"E9CFB130-41BB-4B29-B0FE-B37A53BCCFF9"}
 * @AllowToRunInFind
 */
function ApriCLL(_rec)
{
	var _filter = new Object();
	_filter.filter_name = 'ftr_idditta';
	_filter.filter_field_name = 'idditta';
	_filter.filter_operator = '=';
	if(_rec)
		_filter.filter_value = _rec['idditta'];
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta };
	}
	    
	var _programName = '';
	if(globals.getTipologiaDitta(_filter.filter_value) == globals.Tipologia.ESTERNA)
	{	
		_programName = 'AGL_Classificazioni_Esterni';
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Classificazioni lavoratori esterni');
	            return;
	    	}
	    }
	}
	else
	    _programName = 'AGL_Classificazioni';
	    
	var _progObj = globals.nav.program[_programName];
		_progObj.filter = [_filter];  
		_progObj.foundset = null;    
	
    globals.openProgram(_programName,true);
	
}

/**
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"4DA92188-389A-4ACA-835C-4C01CB7267DC"}
 * @AllowToRunInFind
 */
function ApriSSL(_rec)
{
	var _filter = new Object()
	_filter.filter_name = 'ftr_idditta'
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	if(_rec)
		_filter.filter_value = _rec['idditta']
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta };
	}
	    
	var _programName = '';
	if(globals.getTipologiaDitta(_filter.filter_value) == globals.Tipologia.ESTERNA)
	{	
		_programName = 'AGL_SchedaStorica_Esterni';
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Dati decorrenza lavoratori esterni');
	            return;
	    	}
	    }
	}
	else
	    _programName = 'AGL_SchedaStorica';
	
	var _progObj = globals.nav.program[_programName];
		_progObj.filter = [_filter];  
		_progObj.foundset = null;    
	    	
    globals.openProgram(_programName,true);	
}

/**
 * @properties={typeid:24,uuid:"E5679D52-8BAE-4BCC-8ABC-FE4A4C0DE383"}
 * @AllowToRunInFind
 */
function ApriPVL(_rec)
{
	var _filter = new Object();
	_filter.filter_name = 'ftr_idditta';
	_filter.filter_field_name = 'idditta';
	_filter.filter_operator = '=';
	if(_rec)
		_filter.filter_value = _rec['idditta'];
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta };
	}
	    
	var _progObj = globals.nav.program['AGL_PannelloVariazioni'];
	_progObj.filter = [_filter]; 
	_progObj.foundset = null;
	
	if(globals.getTipologiaDitta(_filter.filter_value) == globals.Tipologia.ESTERNA)
	{	
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Dati anagrafici lavoratori esterni');
	            return;
	    	}
	    }
	}
	
    globals.openProgram('AGL_PannelloVariazioni',true);	
}

/**
 * @AllowToRunInFind
 * 
 * TODO generated, please specify type and doc for the params
 * @param _rec
 *
 * @properties={typeid:24,uuid:"451CB7EB-10B9-4320-8241-2C73AA0D276E"}
 */
function ApriPSL(_rec)
{
	var _filter = new Object();
	_filter.filter_name = 'ftr_idditta';
	_filter.filter_field_name = 'idditta';
	_filter.filter_operator = '=';
	if(_rec)
		_filter.filter_value = _rec['idditta'];
	else 
	{
	    _filter.filter_value = currDitta;
	    _rec = { idditta: currDitta };
	}
	    
	var _programName = '';
	if(globals.getTipologiaDitta(_filter.filter_value) == globals.Tipologia.ESTERNA)
	{	
		_programName = 'AGL_Presenze';
		var fs = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.LAVORATORI);
	    if(fs.find())
	    {
	    	fs['idditta'] = _rec['idditta'];
	    	if(fs.search() == 0)
	    	{
	    		globals.ma_utl_showWarningDialog('Nessun lavoratore inserito per la ditta selezionata','Classificazioni lavoratori esterni');
	            return;
	    	}
	    }
	}
	else
	    _programName = 'AGL_Presenze';
	    
	var _progObj = globals.nav.program[_programName];
		_progObj.filter = [_filter];  
		_progObj.foundset = null;    
	
    globals.openProgram(_programName,true);
	
}

/**
 * @properties={typeid:24,uuid:"6DDA0E76-FB3F-473E-AB86-66B3BEB171A0"}
 */
function selezione_PSL()
{	
	var recSingolaDitta = globals.getSingolaDitta(globals.Tipologia.STANDARD);
	if(recSingolaDitta)
		ApriPSL(recSingolaDitta);
	else
	if (globals._filtroSuDitta != null) {

		currDitta = globals._filtroSuDitta;
		
		ApriPSL(null);
		
	} else {

		currDitta = -1

		globals.svy_nav_showLookupWindow(new JSEvent, "currDitta", globals.lkpDITTA,
			                             'ApriPSL', 'FiltraLavoratoriDittaControllateNonEsterne', null, null, '', true);
	}
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"91C6C034-3922-4840-96A2-5FA99136AD64"}
 */
function FiltraLavoratoriDittaStandard(_fs)
{
	_fs.addFoundSetFilterParam('tipologia','=',0);
	return _fs;
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"6ED818DE-C738-4F1E-A007-33996A5B8D92"}
 */
function FiltraLavoratoriDittaControllate(_fs)
{
	_fs.addFoundSetFilterParam('tipologia','IN',[globals.Tipologia.STANDARD,globals.Tipologia.ESTERNA,globals.Tipologia.GESTITA_UTENTE]);
	return _fs;
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"875FC744-36F6-41AC-A9D8-A6BED402FEF3"}
 */
function FiltraLavoratoriDittaControllateNonEsterne(_fs)
{
	_fs.addFoundSetFilterParam('tipologia','IN',[globals.Tipologia.STANDARD,globals.Tipologia.GESTITA_UTENTE]);
	return _fs;
}

/**
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"91D66C0B-A523-4E1B-9EF8-C4E4A0327970"}
 */
function FiltraLavoratoriDittaEsterna(_fs)
{
	_fs.addFoundSetFilterParam('tipologia','=',1);
	return _fs;
}

/**
 * @param {Object} _params
 * 
 * @return {Boolean} 
 * 
 * @properties={typeid:24,uuid:"E0E9FA8A-7675-4059-8300-C3C5084C6249"}
 */
function aggiornaRegolaGiornaliera(_params)
{	
	var url = globals.WS_URL + "/Decorrenze/AggiornamentoRegolaGiornaliera";
	return getWebServiceResponse(url,_params)['returnValue'];
}

/**
 * @param {Object} _params
 *
 * @return  {Boolean}
 * 
 * @properties={typeid:24,uuid:"C6809346-91BE-4152-8EE4-36728BA8B5D9"}
 */
function aggiornaTurnoGiornaliera(_params)
{	
	var url = globals.WS_URL + "/Decorrenze/AggiornamentoTurnoGiornaliera";
	var retVal = getWebServiceResponse(url,_params)['returnValue'];
	
	if(!retVal)
		return retVal;
	
	var ret = false;
	
	// recupero max decorrenza relativa al codice turnista
	var sqlMax = " SELECT MAX(Decorrenza) FROM E2DCG_Decorrenza WHERE idDCG_Campi = 23 AND id_Legato = ?";
	var arrMax = _params['iddipendenti'];
	var dsMax = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,sqlMax,arrMax,-1);
	var valMax = dsMax.getValue(1,1);
	
	var sqlTurno;
	// se esiste almeno una decorrenza 
	if (valMax)
	{
		// recupero codice turnista attuale della relativa decorrenza
		var valDec = getCodiceTurnistaAttuale(arrMax[0],valMax);
        sqlTurno = "UPDATE Lavoratori SET CodTurnista = " + valDec + " WHERE idLavoratore = " + arrMax[0];
	}
	// altrimenti ripristiniamo il valore di default che è 0
	else
		sqlTurno = "UPDATE Lavoratori SET CodTurnista = 0 WHERE idLavoratore = " + arrMax[0];
		
	var bSql = plugins.rawSQL.executeSQL(globals.customer_db_name, globals.Table.LAVORATORI, sqlTurno, null);
	if (bSql)
	{
		ret = true;
		plugins.rawSQL.flushAllClientsCache(globals.Server.MA_ANAGRAFICHE, globals.Table.LAVORATORI);
	}
	else 
		globals.ma_utl_showErrorDialog(plugins.rawSQL.getException().getMessage(), 'Aggiornamento turnista');
	
	return ret;
}

/**
 * @param {Number} iddip
 * @param {Date} decorrenza
 * 
 * @return {Number}
 * 
 * @properties={typeid:24,uuid:"DF84A4C2-EC35-4A7D-858F-6CE4195CE5DF"}
 */
function getCodiceTurnistaAttuale(iddip,decorrenza)
{
	var sqlDec = "SELECT Valore FROM E2DCG_Decorrenza WHERE idDCG_Campi = 23 AND id_Legato = ? AND Decorrenza = ?";
    var arrDec = [iddip,decorrenza];
    var dsDec = databaseManager.getDataSetByQuery(globals.Server.MA_ANAGRAFICHE,sqlDec,arrDec,-1);
    var valDec = dsDec.getValue(1,1) ? dsDec.getValue(1,1) : 0;
    
    return valDec;
}

/**
 * 
 * @param {Number} _idditta
 * @param {Number} _iddip
 * @param {Number} _periodo
 * @param {Date} _newDecorrenza
 * @param {Date} _oldDecorrenza
 * @param {Boolean} _elimina
 *
 * @properties={typeid:24,uuid:"991AB950-8578-40E5-91F6-E8F8B9E1DB9B"}
 */
function inizializzaParametriDecorrenza(_idditta,_iddip,_periodo,_newDecorrenza,_oldDecorrenza,_elimina)
{
	var params = {
		user_id                 : security.getUserName(), 
		client_id               : security.getClientID(),
		idditta                 : _idditta,
		idlavoratore            : _iddip,
		iddipendenti            : [_iddip],
		periodo                 : _periodo,
		datanuovadecorrenza     : utils.dateFormat(_newDecorrenza,globals.EU_DATEFORMAT),
		datavecchiadecorrenza   : _oldDecorrenza === null ? "" : utils.dateFormat(_oldDecorrenza,globals.EU_DATEFORMAT),
		eliminadecorrenza       : _elimina,
		tipoconnessione         : globals._tipoConnessione
	}
	
	return params;
}

/**
 * @properties={typeid:24,uuid:"8B83FF4B-B561-4E28-8F33-28DC28399723"}
 */
function apriDettagliVociINAILLavoratore(event)
{
	var vociTariffaForm = forms.agl_inail_vocitariffa_dtl;
	globals.ma_utl_showFormInDialog(vociTariffaForm.controller.getName(), 'Dettagli voce tariffa', forms[event.getFormName()].foundset);
}

/**
 * @properties={typeid:24,uuid:"0610141D-947A-446F-BC3D-A7DB886B7A2D"}
 */
function aggiungi_lavoratore_ditta()
{
	var frm = forms.agl_lavoratore_ditta;
    globals.ma_utl_showFormInDialog(frm.controller.getName(),'Inserisci lavoratore ditta');	
}

/**
 * @properties={typeid:24,uuid:"9BB8A47A-BD49-4240-A25B-1E7FA2D5C933"}
 */
function aggiungi_lavoratore_ditta_esterna()
{
	var frm = forms.agl_lavoratore_ditta_esterna;
    globals.ma_utl_showFormInDialog(frm.controller.getName(),'Inserisci lavoratore ditta esterna');	
}

/**
 * Perform the element default action.
 *
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event the event that triggered the action
 * @param {Number} _idditta
 * @param {Number} _oldIdLav
 * @param {JSFoundset} _fs
 * 
 * @properties={typeid:24,uuid:"F8CDAF97-899C-4C99-9D42-376F57A3CB2B"}
 */
function apriCambiaLavoratore(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event, _idditta,_oldIdLav, _fs)
{
	currDitta = _idditta;
	var methodToFilter;
	var arrIds = [];
	if(event.getElementName() == 'btn_anaglavgiorn')
	{
	   methodToFilter = 'filterLkpLavoratoriGiorn';	
	   for(var i=1; i<=_fs.getSize(); i++){
	   	   arrIds.push(_fs.getRecord(i)['idlavoratore']);
	   }
	} 
	else
		methodToFilter = 'filterLkpLavoratori'; 
	
	currIds = arrIds;
	
	var lkpName = globals.getTipologiaDitta(_idditta) == globals.Tipologia.ESTERNA ?
			      'AG_Lkp_LavoratoriEsterni' : 'AG_Lkp_Lavoratori';
	
	var pkLavoratore = globals.ma_utl_showLkpWindow({ event: event
		                                              , lookup: lkpName
													  , methodToAddFoundsetFilter: methodToFilter
													  , disabledElements : [_oldIdLav]
													  , allowInBrowse : true });
	
	if(pkLavoratore)
	   globals.lookupFoundset(pkLavoratore, _fs);
	
}


/**
 * @param {JSFoundset} fs
 * 
 * @properties={typeid:24,uuid:"42E8D1E9-694E-409C-8A8C-72F2D240DAC5"}
 */
function filterLkpLavoratori(fs)
{
	fs.addFoundSetFilterParam('idditta', '=', currDitta, 'ftr_LkpLavoratori');
	return fs;
}

/**
 * @param {JSFoundset} fs
 *
 * @properties={typeid:24,uuid:"269DA26E-D299-49D9-87F1-59CE3D999106"}
 */
function filterLkpLavoratoriGiorn(fs)
{
	fs.addFoundSetFilterParam('idditta','=',currDitta);
	fs.addFoundSetFilterParam('idlavoratore','IN',currIds);
	return fs;
}

/**
 * 
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 * @param {JSFoundset} fs
 * 
 * @properties={typeid:24,uuid:"E06A0C84-2754-4B78-9A44-F00D8288BFFE"}
 */
function apriPopupAnaLav(event,idditta,idlavoratore,fs)
{
	var source = event.getSource();
	var frm = event.getFormName();
	
	var popUpMenu = plugins.window.createPopupMenu();
	
	if(frm != forms['giorn_header'].controller.getName()
	   && frm != forms['comm_lav_header_dtl'].controller.getName())
	{
		var cambiaDip = popUpMenu.addMenuItem('Cambia dipendente',apriCambiaLavoratore);
		    cambiaDip.methodArguments = [event,idditta,idlavoratore,fs];
		    popUpMenu.addSeparator();
	}   
	var datiAnag = popUpMenu.addMenuItem('Dati anagrafici',apriDatiAnagLav);
	    datiAnag.methodArguments = [event,idditta,idlavoratore];
	var pagRetr = popUpMenu.addMenuItem('Pagamento retribuzioni',apriPagamentoRetribuzioni);
	    pagRetr.methodArguments = [event,idditta,idlavoratore];    
	var rappLav = popUpMenu.addMenuItem('Rapporto di lavoro',apriRapportoLavoro);
	    rappLav.methodArguments = [event,idditta,idlavoratore];
	var classificazioni = popUpMenu.addMenuItem('Classificazioni',apriClassificazioni);
	    classificazioni.methodArguments = [event,idditta,idlavoratore];
	var inps = popUpMenu.addMenuItem('INPS',apriINPS);
        inps.methodArguments = [event,idditta,idlavoratore];
        if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
	    	inps.enabled = false;
	var inail = popUpMenu.addMenuItem('INAIL',apriINAIL);
        inail.methodArguments = [event,idditta,idlavoratore];
        if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
	    	inail.enabled = false;
    var vociAuto = popUpMenu.addMenuItem('Voci automatiche',apriVociAuto);
	    vociAuto.methodArguments = [event,idditta,idlavoratore];
	    if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
	    	vociAuto.enabled = false;
	var ratei = popUpMenu.addMenuItem('Ratei',apriRatei);
	    ratei.methodArguments = [event,idditta,idlavoratore];
	    if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
	    	ratei.enabled = false;
	var datiDecorrenza = popUpMenu.addMenuItem('Dati decorrenza',apriDatiDecorrenza);
	    datiDecorrenza.methodArguments = [event,idditta,idlavoratore];
	var schedaStorica = popUpMenu.addMenuItem('Scheda storica',apriSchedaStorica);
	    schedaStorica.methodArguments = [event,idditta,idlavoratore];    
//	var privacy = popUpMenu.addMenuItem('Privacy',apriPrivacy);
//	    privacy.methodArguments = [event];
		    
	if(source != null)
	   popUpMenu.show(forms[frm].elements[event.getElementName()].getLocationX() + forms[frm].elements[event.getElementName()].getWidth() + 100,
		              forms[frm].elements[event.getElementName()].getLocationY() + forms[frm].elements[event.getElementName()].getHeight() + 100);	    
}

/**   
 * Apre i dati anagrafici del dipendente di cui si sta visualizzando la giornaliera
 *  
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt  
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"5114A87A-9A12-4B41-9FDB-D6D1915513A5"}
 */
function apriDatiAnagLav(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filterDitta = new Object();
	_filterDitta.filter_field_name = 'idditta';
	_filterDitta.filter_operator = '=';
	_filterDitta.filter_value = idditta;
	
//	var _filterDip = new Object();
//	_filterDip.filter_field_name = 'idlavoratore';
//	_filterDip.filter_operator = '=';
//	_filterDip.filter_value = idlavoratore;
	
	var _progName = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA ?
			        'AGL_DatiAnagrafici_Esterni' : 'AGL_DatiAnagrafici';
	var _progObj = globals.nav.program[_progName];
	_progObj.filter = [_filterDitta] //, _filterDip];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
	
	globals.openProgram(_progName,_parArr,true);
	
    globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);
		
}

/**
 * Apre la gestione del pagamento retribuzione del dipendente di cui si sta visualizzando la giornaliera
 * 
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"6BF68B8B-E86B-466C-AE82-2F557857466D"}
 */
function apriPagamentoRetribuzioni(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filterDitta = new Object()
	_filterDitta.filter_field_name = 'idditta'
	_filterDitta.filter_operator = '='
	_filterDitta.filter_value = idditta
	
	var _progName = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA ?
			        'AGL_PagamentoRetribuzioni_Esterni' : 'AGL_PagamentoRetribuzioni';
	var _progObj = globals.nav.program[_progName];
	_progObj.filter = [_filterDitta];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
	
	globals.openProgram(_progName,_parArr);
	
	globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);
	
}

/**
 * Apre la gestione del rapporto di lavoro del dipendente di cui si sta visualizzando la giornaliera
 * 
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"BF378C90-909A-4C2C-90FC-D4CD534AE091"}
 */
function apriRapportoLavoro(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filterDitta = new Object()
	_filterDitta.filter_field_name = 'idditta'
	_filterDitta.filter_operator = '='
	_filterDitta.filter_value = idditta
	
	var _progName = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA ?
			        'AGL_RapportoDiLavoro_Esterni' : 'AGL_RapportoDiLavoro';
	var _progObj = globals.nav.program[_progName];
	_progObj.filter = [_filterDitta];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
	
	globals.openProgram(_progName,_parArr);

	globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);
	
}

/**
 * Apre la gestione delle classificazioni del dipendente di cui si sta visualizzando la giornaliera
 * 
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore 
 *
 * @properties={typeid:24,uuid:"719DC948-FA6E-41D4-B420-8298078300C9"}
 */
function apriClassificazioni(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filterDitta = new Object()
	_filterDitta.filter_field_name = 'idditta'
	_filterDitta.filter_operator = '='
	_filterDitta.filter_value = idditta
		
	var _progName = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA ? 'AGL_Classificazioni_Esterni' : 'AGL_Classificazioni';
	var _progObj = globals.nav.program[_progName];
	_progObj.filter = [_filterDitta];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
	
	globals.openProgram(_progName,_parArr);
	
	globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);
}

/**
 * Apre la gestione delle posizioni INPS del dipendente di cui si sta visualizzando la giornaliera
 * 
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"76CD6C0B-9E93-46C4-A42D-B77F7EEA2BB0"}
 */
function apriINPS(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filterDitta = new Object()
	_filterDitta.filter_field_name = 'idditta'
	_filterDitta.filter_operator = '='
	_filterDitta.filter_value = idditta
	
	var _progObj = globals.nav.program['AGL_Inps'];
	_progObj.filter = [_filterDitta];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
		
	if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
		globals.openProgram('AGL_Inps_Esterni',_parArr);
	else
	   globals.openProgram('AGL_Inps',_parArr);
	   
	   globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);   
	
}

/**
 * Apre la gestione delle posizioni INAIL del dipendente di cui si sta visualizzando la giornaliera
 * 
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"3C8A35F9-180A-402F-BE2B-5E8FBFB8BDE7"}
 */
function apriINAIL(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filterDitta = new Object()
	_filterDitta.filter_field_name = 'idditta'
	_filterDitta.filter_operator = '='
	_filterDitta.filter_value = idditta
	
	var _progObj = globals.nav.program['AGL_Inail'];
	_progObj.filter = [_filterDitta];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
		
	if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
		globals.openProgram('AGL_Inail_Esterni',_parArr);
	else
	    globals.openProgram('AGL_Inail',_parArr);
	
	globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);    
}

/**
 * Apre la gestione delle posizioni INPS del dipendente di cui si sta visualizzando la giornaliera
 *
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"8142765B-DE88-44C0-B7EE-39043EDC161F"}
 */
function apriVociAuto(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filter = new Object()
	_filter.filter_field_name = 'idditta'
	_filter.filter_operator = '='
	_filter.filter_value = idditta
	
	var _progObj = globals.nav.program['AGL_VociAutomatiche']
	_progObj.filter = [_filter]  
	_progObj.foundset = null	

	/** @type {Array<Object>} */
	var _parArr = new Array();
		
	if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
		globals.openProgram('AGL_VociAutomatiche_Esterni',_parArr);
	else
	    globals.openProgram('AGL_VociAutomatiche',_parArr);
	    
	    globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);    
}

/**
 * Apre la gestione dei ratei del dipendente di cui si sta visualizzando la giornaliera
 *
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 * 
 * @properties={typeid:24,uuid:"6E77AB4A-C8CA-44B6-B58B-751A13E0997D"}
 */
function apriRatei(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filterDitta = new Object()
	_filterDitta.filter_field_name = 'idditta'
	_filterDitta.filter_operator = '='
	_filterDitta.filter_value = idditta
	
	var _progObj = globals.nav.program['AGL_Ratei'];
	_progObj.filter = [_filterDitta];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
		
	if(globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA)
		globals.openProgram('AGL_Ratei_Esterni',_parArr);
	else
	    globals.openProgram('AGL_Ratei',_parArr);
	    
	globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);    
}

/**
 * Apre la gestione delle decorrenze del dipendente di cui si sta visualizzando la giornaliera
 *
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt 
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"84805DA7-256D-42AE-96AB-1F3FB7DA2CFF"}
 */
function apriDatiDecorrenza(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) 
{
	apriDecorrenzeLavoratore(idditta,idlavoratore);
}

/**
 * Apre il program di gestione delle decorrenze del lavoratore passato come parametro
 * 
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"9FE01227-3471-4C67-9EB8-6170CAAB0A7B"}
 */
function apriDecorrenzeLavoratore(idditta,idlavoratore)
{
	var _filterDitta = new Object()
	_filterDitta.filter_field_name = 'idditta'
	_filterDitta.filter_operator = '='
	_filterDitta.filter_value = idditta
		
	var _progName = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA ?
			        'AGL_DatiDecorrenza_Esterni' : 'AGL_DatiDecorrenza';
	var _progObj = globals.nav.program[_progName];
	_progObj.filter = [_filterDitta];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
	
	globals.openProgram(_progName,_parArr);
	
	globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);
}

/**
 * Apre la gestione della scheda storica del dipendente di cui si sta visualizzando la giornaliera
 * 
 * @param {Number} _itemInd
 * @param {Number} _parItem
 * @param {Boolean} _isSel
 * @param {String} _parMenTxt
 * @param {String} _menuTxt
 * @param {JSEvent} event
 * @param {Number} idditta
 * @param {Number} idlavoratore
 *
 * @properties={typeid:24,uuid:"99B3D2AD-1B35-4E98-A2AD-66C4BA028B5D"}
 */
function apriSchedaStorica(_itemInd, _parItem, _isSel, _parMenTxt, _menuTxt,event,idditta,idlavoratore) {
	
	var _filterDitta = new Object()
	_filterDitta.filter_field_name = 'idditta'
	_filterDitta.filter_operator = '='
	_filterDitta.filter_value = idditta
	
	var _progName = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA ?
			        'AGL_SchedaStorica_Esterni' : 'AGL_SchedaStorica';
	var _progObj = globals.nav.program[_progName];
	_progObj.filter = [_filterDitta];  
    _progObj.foundset = null;	

	/** @type {Array<Object>} */
	var _parArr = new Array();
	
	globals.openProgram(_progName,_parArr);
	
	globals.lookupFoundset(idlavoratore,forms.svy_nav_fr_openTabs.vTabObjects[forms.svy_nav_fr_openTabs.vTabNames[forms.svy_nav_fr_openTabs.vSelectedTab]].foundset);
}

/**
 * Recupera e restituisce il dataset con i dati relativi alle informazioni sui ratei del dipendente alla data scelta
 *
 * @param {Number} idDip
 * @param {Date} allaData
 * @param {Boolean} [soloRateiDipendente]
 * @param {Boolean} [proiezioneRatei]
 * 
 * @return {JSDataSet}
 * 
 * @properties={typeid:24,uuid:"246E7CCA-5781-4D49-A38A-E6BC71E106A4"}
 */
function ottieniDataSetRateiDip(idDip,allaData,soloRateiDipendente,proiezioneRatei)
{	
	var vQuery = proiezioneRatei ? "SELECT * FROM dbo.F_Ratei_Lav_Residui_Calc(?, ?, 3,?,?)" : "SELECT * FROM [dbo].[F_Ratei_Lav_Residui](?,?) ";
	var vArr = new Array();
    vArr.push(idDip);
	vArr.push(utils.dateFormat(allaData,globals.ISO_DATEFORMAT));
	if(proiezioneRatei)
	{
		vArr.push('SRV-EPIWEB');
		vArr.push(globals.customer_dbserver_name);
	}
	if(soloRateiDipendente)
	{
	    vQuery += "  WHERE CodiceRateo IN \
	                 (SELECT \
				       DR.Codice AS CodiceRateo \
				       FROM \
				       Ditte_RateiClassiMaturazione RCM \
				       INNER JOIN E2RateiClassi RC \
				             ON RCM.ClasseRateo = RC.ClasseRateo \
				       INNER JOIN Ditte_Ratei DR \
				             ON DR.idDittaRateo = RCM.idDittaRateo \
				       WHERE \
				       RC.MensSupplementare = 0 \
				       AND DR.idDitta = ? \
				       GROUP BY  \
				       DR.idDitta \
				       , DR.Codice)";
	
		vArr.push(globals.getDitta(idDip));
	}
    var vDatasetRateiDip = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE, vQuery, vArr, -1);    
        vDatasetRateiDip.addColumn('ResiduoAnnoPrec',vDatasetRateiDip.getMaxColumnIndex() + 1,JSColumn.NUMBER);
    
    for(var i=1; i <= vDatasetRateiDip.getMaxRowIndex(); i++)
       	// calcolo residuo
    	vDatasetRateiDip.setValue(i,vDatasetRateiDip.getMaxColumnIndex(),vDatasetRateiDip.getValue(i,5) - vDatasetRateiDip.getValue(i,4));
     
    return vDatasetRateiDip;
}

/**
 * Verifica se il badge è già stato assegnato ad un dipendente in riferimento alla decorrenza del caso
 * 
 * @param nrBadge
 * @param decorrenza
 * @param gruppoInst
 * 
 * @return {Object}
 * 
 * @properties={typeid:24,uuid:"0F999717-B0E8-41FC-B1F4-5E9335541199"}
 * @AllowToRunInFind
 */
function isBadgeAssegnato(nrBadge,decorrenza,gruppoInst)
{
	var _badgeSql = 'SELECT * FROM [dbo].[F_Badge_AppartenenteA](?,?,?) ';
	_badgeSql += 'WHERE Cessazione IS NULL OR Cessazione >= ?';
	var _arrBadge = new Array()
	var _grInst = gruppoInst;
	var _badgeMsg = '';
	var _badgeResp = false;
	
	_arrBadge.push(_grInst,nrBadge.toString(),utils.dateFormat(decorrenza,globals.ISO_DATEFORMAT),utils.dateFormat(decorrenza,globals.ISO_DATEFORMAT));
	
	var _dsBadge = databaseManager.getDataSetByQuery(globals.Server.MA_PRESENZE,_badgeSql,_arrBadge,10)
		
	if(_dsBadge.getMaxRowIndex() > 0)
	{
		/** @type Date*/
		var _decBadge = _dsBadge.getValue(1,7)
		_badgeResp = true;
		_badgeMsg = "<html>Alla data " + decorrenza.getDate() + ' ' + globals.getNomeMese(decorrenza.getMonth() + 1) + ' ' + decorrenza.getFullYear()  +  ' il badge '+ nrBadge + ' risulta appartenente a ' + _dsBadge.getValue(1,10) + ' ' + _dsBadge.getValue(1,11) 
		              + '<br/> dipendente della ditta  ' + _dsBadge.getValue(1,3) + ' - ' + _dsBadge.getValue(1,9) 
					  + '<br/> con decorrenza ' + _decBadge.toLocaleDateString() + "</html>"
		
	}
	else
	{
		_badgeResp = false;
	    _badgeMsg = 'Nessun dipendente trovato per i parametri inseriti'
	}
	
	return { value : _badgeResp, message : _badgeMsg  };
	
//	/** @type{JSFoundset<db:/ma_presenze/e2dcg_decorrenza>} */ 
//	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.LAVORATORI_DECORRENZE);		
//	if(fs.find())
//	{
//		fs.iddcg_campi = [2,12,16]; // corrispondenti ai diversi tipi di badge
//		fs.valore = nrBadge.toString();
//		var recs = fs.search();
//		for(var i = 1; i <= recs; i++)
//		{
//			var rec = fs.getRecord(i);
//			switch(rec.iddcg_campi)
//			{
//				case 2:
//				case 12:
//					if(rec.valore != null
//					   && rec.valore == nrBadge.toString()		
//					   && (rec.e2dcg_decorrenza_to_lavoratori.cessazione == null 
//						   || rec.e2dcg_decorrenza_to_lavoratori.cessazione >= decorrenza))
//					   return "Badge già assegnato al dipendente " + rec.e2dcg_decorrenza_to_lavoratori.codice + 
//						       " - " + (rec.e2dcg_decorrenza_to_lavoratori.lavoratori_to_persone ? 
//						       rec.e2dcg_decorrenza_to_lavoratori.lavoratori_to_persone.nominativo : rec.e2dcg_decorrenza_to_lavoratori.lavoratori_to_lavoratori_personeesterne.nominativo);
//					break;
//				case 16:
//				    if(rec.valore != null
//				    	&& rec.decorrenza > decorrenza)
//					   return "Badge occasionale già assegnato in futuro al dipendente " + rec.e2dcg_decorrenza_to_lavoratori.codice + 
//					       " - " + (rec.e2dcg_decorrenza_to_lavoratori.lavoratori_to_persone ?
//					       rec.e2dcg_decorrenza_to_lavoratori.lavoratori_to_persone.nominativo : rec.e2dcg_decorrenza_to_lavoratori.lavoratori_to_lavoratori_personeesterne.nominativo);
//					break;
//				default:
//					break;
//			}
//		}
//	}
//	return "";
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il record della persona se ne esiste uno avente il codice fiscale uguale a quello passato
 * 
 * @param {String} codiceFiscale
 *
 * @return {JSRecord<db:/ma_anagrafiche/persone>}
 * 
 * @properties={typeid:24,uuid:"9CCFBC80-6EE7-4757-82E7-8F4A3B51A2F1"}
 */
function getPersona(codiceFiscale)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/persone>} */
	var fsPersone = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.PERSONE);
	if(fsPersone.find())
	{
		fsPersone.codicefiscale = codiceFiscale;
		if(fsPersone.search())
			return fsPersone.getSelectedRecord();
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce il record della persona se ne esiste uno avente il codice fiscale uguale a quello passato
 * 
 * @param {String} codiceFiscale
 *
 * @return {JSRecord<db:/ma_anagrafiche/lavoratori_personeesterne>}
 * 
 * @properties={typeid:24,uuid:"A83BB381-2463-4894-B5BE-06C669492EFF"}
 */
function getPersonaEsterna(codiceFiscale)
{
	/** @type {JSFoundset<db:/ma_anagrafiche/lavoratori_personeesterne>} */
	var fsPersone = databaseManager.getFoundSet(globals.Server.MA_ANAGRAFICHE,globals.Table.PERSONE_ESTERNE);
	if(fsPersone.find())
	{
		fsPersone.codicefiscale = codiceFiscale;
		if(fsPersone.search())
			return fsPersone.getSelectedRecord();
	}
	
	return null;
}

/**
 * @AllowToRunInFind
 * 
 * Restituisce lo storico delle decorrenze del lavoratore per il tipo di decorrenza specificato
 *  
 * @param {Number} idlavoratore
 * @param {Number} tipoDecorrenza
 *
 * @return {JSFoundSet<db:/ma_presenze/e2dcg_decorrenza>}
 * 
 * @properties={typeid:24,uuid:"5AFE14E1-0BCB-45A4-A2BB-DCA22EB5B206"}
 */
function getDecorrenzeLavoratore(idlavoratore,tipoDecorrenza)
{
	/** @type {JSFoundSet<db:/ma_presenze/e2dcg_decorrenza>} */
	var fs = databaseManager.getFoundSet(globals.Server.MA_PRESENZE,globals.Table.LAVORATORI_DECORRENZE);

	if(fs.find())
	{
		fs.id_legato = idlavoratore.toString();
		fs.iddcg_campi = tipoDecorrenza;
		
		if(fs.search())
		{
			fs.sort('decorrenza asc');
			return fs;
		}
	}
	return null;
}