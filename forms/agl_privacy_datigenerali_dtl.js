/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"FBF44584-B49C-482F-9178-C16134AEAAB0"}
 */
var requiredFieldsProgram = 'AG_Req_PrivacyLavoratori';

/**
 * @properties={typeid:24,uuid:"ADAD82A9-2769-4418-B3E2-0E898EE5FDFC"}
 */
function gotoEdit()
{
	_super.gotoEdit();
	
	/** @type{{ required_fields:Object, program_name:String }} */
	var reqFieldsObj = globals.nav.program[requiredFieldsProgram];
	globals.svy_nav_setRequiredFields(reqFieldsObj, controller.getName(), globals.nav.mode);
	incaricatotrattamento = globals.nav.mode === globals.Status.ADD && 1;
}

/** *
 * @param _foundset
 * @param _program
 *
 * @properties={typeid:24,uuid:"543AC0FF-FFD1-47ED-8254-91A50429B9DA"}
 */
function dc_save_validate(_foundset, _program) {
	try
	{
		var _fs = _foundset && _foundset.getDataSource() == foundset.getDataSource() ? _foundset : foundset
		var _prog = _program ? _program : 'AG_Req_PrivacyLavoratori'
		
		/** @type Array<{dateToValidate:Object,dateToCompareWith:Object,operator:Number,errorMessage:String,overwrite:Boolean}>*/
		var validationObjects = 
		[
			{ dateToValidate: 'finenomina', dateToCompareWith: 'inizionomina', operator: globals.ComparisonOperator.GE, errorMessage: 'La data di fine nomina deve essere maggiore o uguale alla data di inizio nomina', overwrite : false },
			{ dateToValidate: 'firmanomina', dateToCompareWith: 'inizionomina', operator: globals.ComparisonOperator.GE, errorMessage: 'La data di firma nomina deve essere maggiore o uguale alla data di inizio nomina', overwrite : false }
		];
		
		return (globals.validateDate(_fs.getSelectedRecord(), validationObjects) && _super.dc_save_validate(_fs, _prog) != -1) ? 0 : -1;
	}
	catch(ex)
	{
		globals.ma_utl_showErrorDialog(ex.message,'i18n:hr.msg.attention')
		return -1
	}
}
