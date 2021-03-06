dataSource:"db:/ma_anagrafiche/persone_titolostudio",
extendsID:"3C076162-6D45-4034-9F27-2ADA00E4841B",
items:[
{
extendsID:"AAAC08F8-0270-4E48-995F-E7066E036521",
height:130,
typeid:19,
uuid:"100730D5-6DE5-41B9-B8CA-A1B031989816"
},
{
labelFor:"fld_titolostudio",
location:"100,0",
name:"lbl_titolostudio",
size:"150,20",
text:"Titolo di studio",
transparent:true,
typeid:7,
uuid:"11456EA1-B4E9-40C2-95C5-881561579680"
},
{
dataProviderID:"persone_titolostudio_to_tab_titolistudio.descrizione",
editable:false,
enabled:false,
location:"160,20",
name:"fld_titolostudio",
size:"400,20",
tabSeq:-2,
typeid:4,
uuid:"186BB514-021D-4F32-9270-94E4598233C8"
},
{
dataProviderID:"codtitolostudiodettaglio",
horizontalAlignment:0,
location:"100,60",
name:"fld_coddettagliotitolostudio",
onDataChangeMethodID:"D4FF261C-384E-4E3A-A568-E00D42602D20",
size:"40,20",
tabSeq:3,
typeid:4,
uuid:"26846D81-4D02-4E7E-804D-130083CABBAF"
},
{
dataProviderID:"persone_titolostudio_to_tab_titolistudiodettaglio.descrizione",
editable:false,
enabled:false,
location:"160,60",
name:"fld_dettagliotitolostudio",
size:"400,20",
tabSeq:-2,
typeid:4,
uuid:"565BDCB6-1C81-4869-8EF3-2CE6E8C5A37F"
},
{
height:135,
partType:5,
typeid:19,
uuid:"5C452916-490D-4F3E-8947-AFF4E1EDB821"
},
{
customProperties:"",
formIndex:1,
horizontalAlignment:0,
labelFor:"fld_decorrenza",
location:"70,20",
name:"btn_decorrenza",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_calendar",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"81B2CB39-CAF5-428C-9369-00D508727AFA"
},
{
formIndex:65,
labelFor:"fld_decorrenza",
location:"10,0",
name:"lbl_decorrenza",
size:"80,20",
text:"Decorrenza",
transparent:true,
typeid:7,
uuid:"83728B0E-12D6-43EE-BA0C-746A8EDEA7DE"
},
{
dataProviderID:"persone_titolostudio_to_tab_titolistudiospecializzazioni.descrizione",
editable:false,
enabled:false,
location:"160,100",
name:"fld_specializzazione",
size:"400,20",
tabSeq:-2,
typeid:4,
uuid:"83B5A111-F3C0-4E20-B9FE-EEEB3CE751ED"
},
{
labelFor:"fld_specializzazione",
location:"100,80",
name:"lbl_specializzazione",
size:"150,20",
text:"Specializzazione",
transparent:true,
typeid:7,
uuid:"9A7E45C4-38A8-4FF1-BE76-4A83D9A59564"
},
{
labelFor:"fld_dettagliotitolostudio",
location:"100,40",
name:"lbl_dettagliotitolostudio",
size:"150,20",
text:"Dettaglio titolo di studio",
transparent:true,
typeid:7,
uuid:"9BAA179E-E773-4CFC-B07B-71C60C3120A6"
},
{
customProperties:"",
formIndex:64,
horizontalAlignment:0,
labelFor:"fld_codspecializzazione",
location:"140,100",
name:"btn_specializzazione",
onActionMethodID:"C7DD551B-5D7B-4B7B-BEF3-989DEAC4A9B4",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"A18C7710-19D4-46F7-9642-4DE41FFD5B83"
},
{
dataProviderID:"datadecorrenza",
format:"dd/MM/yyyy|mask",
location:"10,20",
name:"fld_decorrenza",
size:"80,20",
tabSeq:1,
typeid:4,
uuid:"A707A855-69B5-46E4-9AF5-CFA61ECDA9F3"
},
{
dataProviderID:"codtitolostudio",
horizontalAlignment:0,
location:"100,20",
name:"fld_codtitolostudio",
onDataChangeMethodID:"4C756F7B-D190-4189-8BAF-5F6D76042264",
size:"40,20",
tabSeq:2,
typeid:4,
uuid:"AA601A29-E6D7-4F60-BE48-45F8C2D9E858"
},
{
dataProviderID:"codtitolostudiospecializzazione",
horizontalAlignment:0,
location:"100,100",
name:"fld_codspecializzazione",
onDataChangeMethodID:"60BA4731-6417-40F2-B70E-06D847C88733",
size:"40,20",
tabSeq:4,
typeid:4,
uuid:"B5E58140-1FF4-4D34-AF1F-57ABAC57212B"
},
{
customProperties:"",
formIndex:64,
horizontalAlignment:0,
labelFor:"fld_coddettagliotitolostudio",
location:"140,60",
name:"btn_dettagliotitolostudio",
onActionMethodID:"A47692F6-851B-4A19-978A-8DADFEBFDE36",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"BC5BFD1E-01B4-4FAA-942C-712F956E68EE"
},
{
customProperties:"",
formIndex:64,
horizontalAlignment:0,
labelFor:"fld_codtitolostudio",
location:"140,20",
name:"btn_titolostudio",
onActionMethodID:"CF169623-11CA-44F6-9ABB-951F0E660E28",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
tabSeq:-2,
transparent:true,
typeid:7,
uuid:"DE00DB79-C5A2-4737-B94B-5A38BBE38A12"
}
],
name:"agl_dettagliotitolostudio_dtl",
size:"570,135",
styleName:"leaf_style",
typeid:3,
uuid:"2BF83124-C0A0-4466-AA04-5ED3CB05A575"