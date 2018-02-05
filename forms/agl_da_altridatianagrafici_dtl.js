/**
 * @properties={typeid:24,uuid:"3DB44261-E7E3-4EE9-A2CA-D64FF83F24DD"}
 */
function updateCittadinanza(record)
{
	var fs = foundset, cittadinanza;
	
	if(globals.ma_utl_isFoundSetNullOrEmpty(fs))
		cittadinanza = fs.getRecord(fs.newRecord());
	else
		cittadinanza = foundset.getSelectedRecord();
	
	cittadinanza.datarilevazione = cittadinanza.decorrenza = new Date();
	cittadinanza.codcittadinanza = record.codice;
}

/**
 * @properties={typeid:24,uuid:"4DEDF0B1-D111-4D07-A080-3CC8C702E955"}
 */
function updateStatoCivile(record)
{
	var fs = foundset, statocivile;
	
	if(globals.ma_utl_isFoundSetNullOrEmpty(fs))
		statocivile = fs.getRecord(fs.newRecord());
	else
		statocivile = foundset.getSelectedRecord();
	
	statocivile.datarilevazione = statocivile.decorrenza = new Date();
	statocivile.codstatocivile = record.codice;
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @param {Boolean} svyNavBaseOnShow
 *
 * @properties={typeid:24,uuid:"3B1B824D-AF1B-44CC-9338-F81D2257D9BB"}
 */
function onShowForm(firstShow, event, svyNavBaseOnShow) 
{
	controller.readOnly = true;
	_super.onShowForm(firstShow, event, false);
}
