/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"FD3D14E0-050D-451F-A7B7-8CF15428E852",variableType:-4}
 */
var _close = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"78FE242A-5912-4EB6-8F43-76843C24C603"}
 */
function onHide(event)
{
	if(_super.onHide(event))
		return _close
		
	return false
}
