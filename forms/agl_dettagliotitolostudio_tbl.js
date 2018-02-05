///**

// * @properties={typeid:24,uuid:"2F7DE9E1-6280-4A15-AA2C-A037E1F046FD"}

// */

//function dc_save_validate(fs, program)

//{

//	return _super.dc_save_validate(fs, 'HR_Req_Titolostudio');

//}

//

///**

// * @properties={typeid:24,uuid:"90B31713-25AC-4A89-8B1A-13F64D705471"}

// */

//function dc_save_pre(fs)

//{

//	// Imposta la data di rilevazione uguale alla data di decorrenza, se presente

//	if(_super.dc_save_pre(fs) !== -1)

//		fs['datarilevazione'] = fs['datadecorrenza'] || new Date();

//	else

//		return -1;

//		

//	return 0;

//}

/**
 * @properties={typeid:24,uuid:"B31ED381-E9B8-48C6-B637-BAF0DCA4B772"}
 */
function filterDettaglio(fs)
{
	if(fs)
		fs.addFoundSetFilterParam('codtitolostudio', globals.ComparisonOperator.EQ, codtitolostudio);
	
	return fs;
}

/**
 * @properties={typeid:24,uuid:"9D0E5F4F-97CF-417C-A17D-0F252B01D0C1"}
 */
function filterSpecializzazione(fs)
{
	if(fs)
	{
		fs.addFoundSetFilterParam('codtitolostudio'			, globals.ComparisonOperator.EQ, codtitolostudio);
		fs.addFoundSetFilterParam('codtitolostudiodettaglio', globals.ComparisonOperator.EQ, codtitolostudiodettaglio);
	}
	
	return fs;
}
