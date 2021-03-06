dataSource:"db:/ma_anagrafiche/lavoratori_vociauto",
extendsID:"0",
items:[
{
horizontalAlignment:0,
labelFor:"fld_quantita",
location:"460,0",
name:"lbl_quantita",
size:"60,20",
styleClass:"table_header",
text:"Quantità",
transparent:false,
typeid:7,
uuid:"1828AF88-92BC-47E2-B592-037374B1D8EB"
},
{
horizontalAlignment:0,
labelFor:"fld_base",
location:"520,0",
name:"lbl_base",
size:"60,20",
styleClass:"table_header",
text:"Base",
transparent:false,
typeid:7,
uuid:"32BC22C1-AEF3-459F-9440-75F71EAAE277"
},
{
horizontalAlignment:0,
labelFor:"fld_idevento",
location:"0,0",
name:"lbl_evento",
size:"50,20",
styleClass:"table_header",
text:"Evento",
transparent:false,
typeid:7,
uuid:"3CDAC086-9758-402A-945C-8CF6574AEDCA"
},
{
dataProviderID:"base",
editable:true,
format:"#.###,##",
horizontalAlignment:4,
location:"520,20",
margin:"0,0,0,2",
name:"fld_base",
size:"60,20",
styleClass:"table",
typeid:4,
uuid:"3DAF8641-15A4-4719-B491-BE04A8CB68B0"
},
{
dataProviderID:"finevalidita",
displayType:0,
editable:true,
horizontalAlignment:0,
location:"720,20",
name:"fld_finevalidita",
size:"80,20",
styleClass:"table",
typeid:4,
uuid:"3FD9B9B5-244A-4EB5-B514-69ED5881AFD3"
},
{
dataProviderID:"lavoratori_vociauto_to_e2eventi.evento",
editable:true,
horizontalAlignment:0,
location:"0,20",
name:"fld_idevento",
size:"50,20",
styleClass:"table",
typeid:4,
uuid:"4ABA3EEB-B63D-4DB5-B52D-651189D8206E"
},
{
dataProviderID:"importo",
editable:true,
format:"#.###,##",
horizontalAlignment:4,
location:"580,20",
margin:"0,0,0,2",
name:"fld_importo",
size:"60,20",
styleClass:"table",
typeid:4,
uuid:"4E2E0C5B-64ED-4CF3-92D0-5DDEF268505C"
},
{
dataProviderID:"lavoratori_vociauto_to_e2eventi.descriz",
editable:false,
horizontalAlignment:2,
location:"50,20",
name:"fld_descrizione",
size:"410,20",
styleClass:"table",
typeid:4,
uuid:"53D2D2EB-4E0D-4595-8E3C-7357D61E4DE8"
},
{
dataProviderID:"quantita",
editable:true,
format:"#.###,##",
horizontalAlignment:4,
location:"460,20",
margin:"0,0,0,2",
name:"fld_quantita",
size:"60,20",
styleClass:"table",
typeid:4,
uuid:"5C781BC4-8059-4727-88F6-B888CA0AD283"
},
{
dataProviderID:"iniziovalidita",
displayType:0,
editable:true,
horizontalAlignment:0,
location:"640,20",
name:"fld_iniziovalidita",
size:"80,20",
styleClass:"table",
typeid:4,
uuid:"663F40F2-902E-4BED-81C0-16573F510332"
},
{
horizontalAlignment:0,
labelFor:"fld_importo",
location:"580,0",
name:"lbl_importo",
size:"60,20",
styleClass:"table_header",
text:"Importo",
transparent:false,
typeid:7,
uuid:"6B377B2E-D7EE-405A-AB3D-3C6A1B63BF95"
},
{
horizontalAlignment:2,
labelFor:"fld_descrizione",
location:"50,0",
name:"lbl_descrizione",
size:"410,20",
styleClass:"table_header",
text:"Descrizione",
transparent:false,
typeid:7,
uuid:"A00E1458-AAA1-4E07-AFB1-0D4FCE75E3A0"
},
{
horizontalAlignment:0,
labelFor:"fld_finevalidita",
location:"720,0",
name:"lbl_finevalidita",
size:"80,20",
styleClass:"table_header",
text:"Valido al",
transparent:false,
typeid:7,
uuid:"A6F7222B-3504-49A5-88DA-288311410713"
},
{
height:40,
partType:5,
typeid:19,
uuid:"CEC1423E-5AFE-48CD-B045-C18E5BB38A7C"
},
{
horizontalAlignment:0,
labelFor:"fld_iniziovalidita",
location:"640,0",
name:"lbl_iniziovalidita",
printable:true,
size:"80,20",
styleClass:"table_header",
text:"Valido dal",
transparent:false,
typeid:7,
uuid:"EC774C21-0565-4C81-986A-D239D4F7FD8E"
}
],
name:"agl_va_tbl",
size:"800,40",
styleName:"leaf_style",
typeid:3,
uuid:"060C50D4-65EE-449F-AFEE-8467CA745948",
view:3