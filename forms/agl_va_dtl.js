/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"CA8DA055-C937-48E0-9F00-A9F8D4BFC378",variableType:4}
 */
var mese1 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"57D70160-5C1A-4D40-810F-ADC6AD7262B1",variableType:4}
 */
var mese10 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D39EAA48-5142-4DF6-8DDF-7BF383F1BDB3",variableType:4}
 */
var mese11 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"3FB9032A-96EC-4F55-8D6E-C0752711E2A4",variableType:4}
 */
var mese12 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"B9B8805D-EE2C-43E3-9FC8-48A07C223D80",variableType:4}
 */
var mese2 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"677B58FB-C813-4FC8-B421-0CC74539690D",variableType:4}
 */
var mese3 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"AFB97E94-973C-4CE3-8B5D-919E67919DFE",variableType:4}
 */
var mese4 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"18EB9B03-0823-4D87-8609-DF5F78DDBBAC",variableType:4}
 */
var mese5 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"D96560E2-95D7-4422-B648-0DC8B316D555",variableType:4}
 */
var mese6 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"7BBAED37-DEEA-44D9-A16D-C3926D2E0EE9",variableType:4}
 */
var mese7 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"BB2808B7-491C-488C-BBC2-AA43D1A26B95",variableType:4}
 */
var mese8 = 0;

/**
 * 
 * @type {Number}
 *
 * @properties={typeid:35,uuid:"865BAE37-1089-4628-807E-DD45276E79BC",variableType:4}
 */
var mese9 = 0;

/**
 * @properties={typeid:24,uuid:"34218CCE-42B8-4336-9E81-A7E5E5DF8652"}
 */
function mesiErogazione() {

 var arrMese = new Array()

 for (var j = 0; j < 12; j++) {
  arrMese[j] = 0
 }

 if (forms.agl_va_dtl.foundset.getSize() != 0) {

  for (var i = 0; i < 12; i++) {
   arrMese[i] = forms.agl_va_dtl.foundset.mesierogazione.charAt(i)
  }
 }
 
 mese1 = arrMese[0]
 mese2 = arrMese[1]
 mese3 = arrMese[2]
 mese4 = arrMese[3]
 mese5 = arrMese[4]
 mese6 = arrMese[5]
 mese7 = arrMese[6]
 mese8 = arrMese[7]
 mese9 = arrMese[8]
 mese10 = arrMese[9]
 mese11 = arrMese[10]
 mese12 = arrMese[11]


}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"D5B61374-A024-4029-AD5B-5BAF69AF355E"}
 */
function onLoad(event) {
 
 //mesiErogazione()
 _super.onLoad(event)
}

/**
 * Handle record selected.
 *
 * @param {JSEvent} event the event that triggered the action
 * @param _form
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2DBE0CFB-522A-4D38-AB3C-2F44E74CE6B2"}
 */
function onRecordSelection(event, _form) 
{
 mesiErogazione()
 _super.onRecordSelection(event, _form)
}
