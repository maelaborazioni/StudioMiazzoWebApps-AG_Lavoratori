/**
 * @AllowToRunInFind
 *
 * @properties={typeid:24,uuid:"132A1893-9F93-490D-A24F-9DB1EDFC224A"}
 */
function filterData(fs)
{
	fs = lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_documenti;
	if(fs && fs.find())
	{
		// La data di decorrenza deve essere anteriore alla data odierna
		fs.datadecorrenza = '^||<=' + globals.formatForFind(globals.TODAY);
		
		// Le date di scadenza e rinnovo scadenza devono essere posteriori alla data odierna.
		fs.rilasciatoscadenza = '^||>=' + globals.formatForFind(globals.TODAY);
		fs.rinnovoscadenza = '^||>=' + globals.formatForFind(globals.TODAY);
		
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"62054193-CDBB-4EF1-830F-8AB98A9EEB36"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_persone && lavoratori_to_persone.persone_to_persone_documenti;
	if(fs)
	{
		fs.loadAllRecords();
	}
}

/**
 * @properties={typeid:24,uuid:"0C19CFCE-EBD5-49B2-BEE1-A8B49C9AA344"}
 */
function getButtonObject()
{
	var _enabled = globals.getTipologiaDitta(idditta) == globals.Tipologia.ESTERNA
	               || globals.ma_utl_hasKey(globals.Key.GEST_ANAG_LAV);
	
	var btnObj = _super.getButtonObject();
	
		btnObj.btn_new = { enabled: _enabled };
		btnObj.btn_edit = { enabled: _enabled };
		btnObj.btn_delete = { enabled: _enabled };
		btnObj.btn_duplicate = { enabled: false };
		
	return btnObj;
}