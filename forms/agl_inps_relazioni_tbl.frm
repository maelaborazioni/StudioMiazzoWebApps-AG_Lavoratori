dataSource:"db:/ma_anagrafiche/lavoratori_relazioni",
extendsID:"-1",
items:[
{
dataProviderID:"datainizio",
editable:false,
format:"dd/MM/yyyy",
horizontalAlignment:0,
location:"250,20",
name:"fld_datainizio",
size:"80,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"08E588FA-CCE9-4AFB-B592-CAA04D9C1161"
},
{
dataProviderID:"datafine",
editable:false,
format:"dd/MM/yyyy",
horizontalAlignment:0,
location:"410,20",
name:"fld_datafine",
size:"80,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"1A10AC17-468E-4AB0-AC4E-08E871B096C0"
},
{
height:40,
partType:5,
typeid:19,
uuid:"36EAA5EC-6BE2-4159-A5BE-1FBA8818DF7F"
},
{
dataProviderID:"lavoratori_relazioni_to_ditte_inps.posizioneinps",
editable:false,
horizontalAlignment:0,
location:"0,20",
name:"fld_posinps",
size:"40,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"4E4AA1B4-ABD3-4455-AEBA-8C6D60EB3F4D"
},
{
horizontalAlignment:0,
labelFor:"fld_posinps",
location:"0,0",
name:"lb_posizioneinps",
size:"40,20",
styleClass:"table_header",
text:"Pos.",
typeid:7,
uuid:"4EEAED24-5A8B-4D85-95C7-85CEDE306C64"
},
{
dataProviderID:"lavoratori_relazioni_to_ditte_inps.ditte_inps_to_ditte_attivita.descrizioneateco",
editable:false,
horizontalAlignment:2,
location:"40,20",
name:"fld_descrizioneattivita",
size:"210,20",
styleClass:"table",
toolTipText:"%%lavoratori_relazioni_to_ditte_inps.ditte_inps_to_tab_settoriattivita.descrizione%%",
transparent:true,
typeid:4,
uuid:"50BF3769-FA48-4192-96D2-8B7AA8360AA0"
},
{
horizontalAlignment:0,
labelFor:"fld_datafine",
location:"410,0",
name:"lbl_datafine",
size:"80,20",
styleClass:"table_header",
text:"Data fine",
typeid:7,
uuid:"6FDFEAD4-B44C-4C49-A89A-EC8FCCEB6AEC"
},
{
dataProviderID:"coddipendente",
editable:false,
format:"#",
horizontalAlignment:0,
location:"330,20",
name:"fld_medaglia",
size:"80,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"997B1E86-3E5C-4FFE-B53F-5F88CBD74136"
},
{
dataProviderID:"note",
editable:false,
horizontalAlignment:2,
location:"490,20",
name:"fld_annotazioni",
size:"310,20",
styleClass:"table",
transparent:true,
typeid:4,
uuid:"A99960EB-F253-4BFE-A437-D9B04B0FA548"
},
{
horizontalAlignment:0,
labelFor:"fld_medaglia",
location:"330,0",
name:"lbl_medaglia",
size:"80,20",
styleClass:"table_header",
text:"Medaglia",
typeid:7,
uuid:"AC880505-E3FA-41AE-96A6-68E07AC82159"
},
{
horizontalAlignment:0,
labelFor:"fld_datainizio",
location:"250,0",
name:"lbl_datainizio",
size:"80,20",
styleClass:"table_header",
text:"Data inizio",
typeid:7,
uuid:"B97A4958-A0AB-454C-A487-C4194A9AEA92"
},
{
horizontalAlignment:2,
labelFor:"fld_descrizioneattivita",
location:"40,0",
name:"lbl_descrizioneattivita",
size:"210,20",
styleClass:"table_header",
text:"Descrizione attività",
typeid:7,
uuid:"C55B64D2-F656-4656-9A2C-05847BBB2248"
},
{
horizontalAlignment:2,
labelFor:"fld_annotazioni",
location:"490,0",
name:"lbl_annotazioni",
size:"310,20",
styleClass:"table_header",
text:"Annotazioni",
typeid:7,
uuid:"E9E59D9B-B5F2-46A7-B33F-77917631EB37"
}
],
name:"agl_inps_relazioni_tbl",
showInMenu:true,
size:"800,40",
styleName:"leaf_style",
typeid:3,
uuid:"92F37636-E8C6-4B6C-838B-75A9345DBCB0",
view:3