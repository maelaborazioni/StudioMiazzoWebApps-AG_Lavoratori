/**
 * @properties={type:12,typeid:36,uuid:"E84C5ECD-886D-4312-BC96-C608821EBA23"}
 */
function tooltip_prog_turni_dip()
{
	var txt = "<html><head></head><body>Assunto il : ";
	txt += utils.dateFormat(assunzione,'dd/MM/yyyy');
	txt += "<br/>Cessato il : ";
	txt += utils.dateFormat(cessazione,'dd/MM/yyyy');
	txt += "<br/>Sede di lavoro : ";
	txt += lavoratori_to_ditte_sedi.descrizione;
	txt += "</body></html>";
	return txt;
}

/**
 * @properties={type:4,typeid:36,uuid:"DABC30EB-2D3C-48C9-9A62-535F9D0C3781"}
 */
function contr_ins_num()
{
	parseInt(codcontrattoinserimento, 10);
}

/**
 * @properties={type:12,typeid:36,uuid:"D02C4A81-C962-45CA-8076-6856AE6507DF"}
 */
function codturnista_num()
{
	return globals.getCodiceTurnista(idlavoratore);
}

/**
 * @properties={type:4,typeid:36,uuid:"64FFB61C-74BB-4878-B4B8-0388F56EACF1"}
 */
function codcatpart_num()
{
	return parseInt(codcategoriaparticolare,10);
}
