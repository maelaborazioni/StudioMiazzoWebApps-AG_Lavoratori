/**
 * @properties={typeid:24,uuid:"C39900A0-ECBD-4BE7-946A-DE36DFC9D2EF"}
 */
function onShowForm(event, firstShow)
{
	foundset && foundset.getSize() && foundset.sort(sortFunction);
}

/**
 * @properties={typeid:24,uuid:"D180ADE7-2240-4A26-886D-679409521A63"}
 */
function onRecordSelection(event, triggerForm)
{
	foundset && foundset.getSize() && foundset.sort(sortFunction);
}

/**
 * @param {JSRecord} first
 * @param {JSRecord} second
 *
 * @properties={typeid:24,uuid:"0DA593E1-DD04-425E-A4DF-9053A7CC129E"}
 */
function sortFunction(first, second)
{
	var firstComparison = globals.nullFirstComparator(first, second, 'datadecorrenza', globals.OrderType.DESC);
	var secondComparison = globals.nullFirstComparator(first, second, 'lavoratori_datianagrafici_to_persone_domicili.datadecorrenza', globals.OrderType.DESC);
	var thirdComparison = globals.nullFirstComparator(first, second, 'lavoratori_datianagrafici_to_persone_domicili.datarilevazione', globals.OrderType.DESC);
	
	return firstComparison || secondComparison || thirdComparison;
}
