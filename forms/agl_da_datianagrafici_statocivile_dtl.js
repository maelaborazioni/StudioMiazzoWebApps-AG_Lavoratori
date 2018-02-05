/**
 * @properties={typeid:24,uuid:"1B91CE2F-F506-487E-9165-73C2CA2920BE"}
 */
function gotoEdit()
{
	_super.gotoEdit()
	
	if(!manuale)
	{
		elements.btn_statocivile.enabled = false
	}
}

/**
 * @param {JSFoundset} _foundset
 *
 * @properties={typeid:24,uuid:"53B254CB-8606-4328-BC5B-B5DE6A9A407B"}
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
