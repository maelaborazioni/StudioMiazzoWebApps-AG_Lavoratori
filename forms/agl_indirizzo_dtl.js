/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"6DB99FC5-9457-484E-9A76-E643245DE40E",variableType:-4}
 */
var _close = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"2F1BEB37-E4D5-4BD2-ABA5-99977C22DC05"}
 */
function onHide(event)
{
	if(_super.onHide(event))
		return _close
		
	return false
}
