/**
 * @properties={typeid:24,uuid:"764C6A91-6821-4F34-BF7C-C0D485011BD9"}
 */
function getEditFormName()
{
	var dataForm = elements.data_tabless.getTabFormNameAt(1);
	return dataForm.substr(0, dataForm.length - 3) + 'edit';
}

/**
 * @properties={typeid:24,uuid:"131E4E1D-3C1C-4A74-90C3-D70049DB2CD9"}
 */
function getEditFoundset()
{
	return forms[elements.data_tabless.getTabFormNameAt(1)].foundset;
}

/**
 * @properties={typeid:24,uuid:"83AC49A1-3E16-4A5E-B23A-74C8761433FD"}
 */
function isHistoryEnabled()
{
	if(lavoratori_to_ditte.tipologia != 0)
		return 0;
	else
	    return lavoratori_to_ditte && lavoratori_to_ditte.ditte_to_ditte_storico && lavoratori_to_ditte.ditte_to_ditte_storico.abilitatastorico;
}

/**
 * @properties={typeid:24,uuid:"A854DEAE-3D05-4562-B4A7-DADF7C8C6F09"}
 */
function filterData(fs)
{
	return forms[elements.data_tabless.getTabFormNameAt(1)].foundset;
}

/**
 * @properties={typeid:24,uuid:"826DC2E0-25E5-4D7A-B989-BC7C8525DA95"}
 */
function unfilterData(fs)
{
	forms[elements.data_tabless.getTabFormNameAt(1)].foundset.loadAllRecords();
}
