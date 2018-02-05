/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"E93B9A99-BEB5-4F51-A2DB-DC1EB836B737"}
 */
var descRateo = null;

/**
 * TODO generated, please specify type and doc for the params
 * @param {JSFoundset} _fs
 *
 * @properties={typeid:24,uuid:"83E651C6-AC80-4ED6-A571-31D01D2AFA16"}
 */
function FiltraDittaRateo(_fs)
{
	_fs.addFoundSetFilterParam('idditta','=',globals.getDitta(forms.agl_ratei_movimenti_main.vIdLavoratore));
	return _fs;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param _rec
 *
 * @properties={typeid:24,uuid:"D7B9F325-1E2B-4F6E-8738-192EBA43A97C"}
 */
function AggiornaRateo(_rec)
{
	codicerateo = _rec['codice'];
	descRateo = _rec['descrizione'];
}
/**
 *
 * @param {JSEvent} _event
 * @param {String} _form
 *
 * @properties={typeid:24,uuid:"6A831B37-96B7-4AFA-A44B-8C47E66BDBAD"}
 */
function onRecordSelection(_event, _form) 
{
	_super.onRecordSelection(_event, _form);
	descRateo = e2rateimovimenti_to_ditte_ratei ? e2rateimovimenti_to_ditte_ratei.descrizione : '';
}

