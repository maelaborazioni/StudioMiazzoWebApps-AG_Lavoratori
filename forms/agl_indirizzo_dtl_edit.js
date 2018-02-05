/**
 * @type {Boolean}
 *
 * @properties={typeid:35,uuid:"97AA05F5-177E-44A6-832A-4036A6B26485",variableType:-4}
 */
var _close = false;

/**
 * // TODO generated, please specify type and doc for the params
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"4371507C-7713-42CD-9BB6-996633D1CC82"}
 */
function onHide(event)
{
	if(_super.onHide(event))
		return _close
		
	return false
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"3884D554-C7EF-45CF-80BA-771F9F3EEE61"}
 */
function confermaIndirizzo(event)
{
	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	globals.svy_mod_closeForm(event);
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C27992C4-4E7B-45A6-9E1F-86CC9AAE6456"}
 */
function annullaIndirizzo(event)
{
	globals.ma_utl_setStatus(globals.Status.BROWSE,controller.getName());
	globals.svy_mod_closeForm(event);
}
