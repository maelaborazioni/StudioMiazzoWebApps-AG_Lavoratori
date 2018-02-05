/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSFoundset} _foundset
 * @param {String} [_program]
 *
 * @properties={typeid:24,uuid:"9C363579-DBB7-47E7-89F9-8D7F8845FCD4"}
 */
function dc_save_validate(_foundset, _program)
{
	return _super.dc_save_validate(_foundset ? _foundset : foundset, _program ? _program : 'HR_Req_titolostudio')
}

/**
 * @param {JSFoundset} _foundset
 *
 * @properties={typeid:24,uuid:"41BDADAE-95D0-4A2E-B42A-D6F74B420033"}
 */
function dc_save_pre(_foundset)
{
	var _fs = _foundset && _foundset.getDataSource() == foundset.getDataSource() ? _foundset : foundset
	if(_super.dc_save_pre(_fs) != -1)
		_fs['datarilevazione'] = _fs['datadecorrenza']
	else
		return -1
		
	return 0
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"69657C5D-49D5-4888-AAD8-11A9A7B6DB3B"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	controller.readOnly = true;
	_super.onShowForm(firstShow, event, false);
}

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSRecord} _rec
 *
 * @properties={typeid:24,uuid:"307B187E-B3DE-46A4-A9D7-BAE909D0AB4D"}
 */
function AggiornaTitoloStudio(_rec)
{
 	codtitolostudio = _rec['idtabtitolostudio'];
}
