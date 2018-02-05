/**
 * @properties={typeid:24,uuid:"8037F651-95AC-4D32-85AE-F2B48FD32EFA"}
 * @AllowToRunInFind
 */
function filterData(fs)
{
	fs = lavoratori_to_lavoratori_vociauto;
	if(fs && fs.find())
	{
		fs.finevalidita = '^||<=' + globals.formatForFind(globals.TODAY);
		fs.search();
	}
}

/**
 * @properties={typeid:24,uuid:"AB8E13BB-0D67-4279-9F13-46D6A6CEF30F"}
 */
function unfilterData(fs)
{
	fs = lavoratori_to_lavoratori_vociauto;
	if(fs)
	{
		fs.loadAllRecords();
	}
}
