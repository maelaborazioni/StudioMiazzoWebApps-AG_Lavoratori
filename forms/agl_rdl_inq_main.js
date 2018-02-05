/**
 * @properties={typeid:24,uuid:"D7B81F4D-6B88-4832-858F-FEF59D989A54"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: false };
		btnObj.btn_edit = { enabled: _enabled };
		btnObj.btn_delete = { enabled: false };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}
/**
 * @properties={typeid:24,uuid:"65C8BD5E-8AE0-4BF6-BE3B-E6EE77428CE3"}
 * @AllowToRunInFind
 */
function filterData(fs)
{
	populateActive();
}

/**
 * @properties={typeid:24,uuid:"EE18A1CA-DFF7-4DDC-9B89-DA007AEDD8A1"}
 */
function unfilterData(fs)
{
	populateHistory();
}

/**
 * Perform the element default action.
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D5A9B1B9-8050-4582-B0BE-FF750610EC8B"}
 * @AllowToRunInFind
 */
function populateHistory()
{	
	var dataSource = globals.getStoricoRapporto(idlavoratore, '-');	
	prepareForm(dataSource);
}

/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"ACEECA31-5EF0-4CBF-9E0C-FF57A94223A4"}
 */
function populateActive()
{
	var dataSource = globals.getSituazioneLavoratore(idlavoratore, globals.TODAY);
	prepareForm(dataSource);
}

/**
 * @AllowToRunInFind
 * 
 * @properties={typeid:24,uuid:"E7CDA28F-9489-48B9-9ADA-33ADA0BE4A49"}
 */
function prepareForm(dataSource)
{
	var form = forms.agl_rdl_inq_tbl.controller.getName();
	var cloneForm = form + '_clone';
	
	// Only create the form if not already existent
	if(!forms[cloneForm])
	{
		elements.data_tabless.removeAllTabs();
		
		var jsForm = solutionModel.cloneForm(cloneForm, solutionModel.getForm(form));
			jsForm.dataSource = dataSource;
			jsForm.getField('fld_codcontratto').dataProviderID = 'codcontratto';
			jsForm.getField('fld_contratto').dataProviderID = 'desccontratto';
			jsForm.getField('fld_codqualifica').dataProviderID = 'codqualifica';
			jsForm.getField('fld_qualifica').dataProviderID = 'descqualifica';
			jsForm.getField('fld_livello').dataProviderID = 'codlivello';
			jsForm.getField('fld_parttime').dataProviderID = 'parttime';
			jsForm.getField('fld_tipoparttime').dataProviderID = 'descparttime';
			jsForm.getField('fld_decorrenza').dataProviderID = 'decorrenza';
		
		forms[cloneForm].controller.loadAllRecords();
		elements.data_tabless.addTab(cloneForm ? cloneForm : form, 'inquadramento_tab');
	}
}

/**
 * @properties={typeid:24,uuid:"4C9E5C8A-7477-4296-A1BB-22C9E7D73B8B"}
 */
function sortFunction(first,second)
{
	return globals.nullFirstComparator(first,second,'decorrenza',globals.OrderType.DESC);
}