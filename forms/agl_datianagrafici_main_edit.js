

/**
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"301BD418-28AB-4723-9399-A8A822C6F5D4"}
 */
function onLoad(event) {
	application.output('onLoad form agl_datianagrafici_main_edit : User (' + _to_sec_organization$lgn.name + ',' + _to_sec_organization$lgn.sec_organization_to_sec_user_org.sec_user_org_to_sec_organization.name + 
                        ',' + _to_sec_organization$lgn.sec_organization_to_sec_owner.name + ') ',LOGGINGLEVEL.WARNING);
	return _super.onLoad(event)
}

/**
*
* @param {Boolean} firstShow
* @param {JSEvent} event
* @param {Boolean} svyNavBaseOnShow
*
* @properties={typeid:24,uuid:"C8AD76F6-ED4A-4EA3-A574-D9E2FAD7F250"}
*/
function onShowForm(firstShow, event, svyNavBaseOnShow) {
	application.output('onShowForm form agl_datianagrafici_main_edit : User (' + _to_sec_organization$lgn.name + ',' + _to_sec_organization$lgn.sec_organization_to_sec_user_org.sec_user_org_to_sec_organization.name + 
    ',' + _to_sec_organization$lgn.sec_organization_to_sec_owner.name + ') ',LOGGINGLEVEL.WARNING);
	return _super.onShowForm(firstShow, event, svyNavBaseOnShow)
}
