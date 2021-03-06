dataSource:"db:/ma_anagrafiche/lavoratori_schedastorica",
extendsID:"3C076162-6D45-4034-9F27-2ADA00E4841B",
items:[
{
labelFor:"fld_datadecorrenza",
location:"10,0",
name:"lbl_datadecorrenza",
size:"80,20",
text:"Decorrenza",
transparent:true,
typeid:7,
uuid:"11FC093B-8008-4D31-864E-E365F72D7B7F"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
null,\
\"'AG_Lkp_DettSchedaStorica'\",\
\"'AggiornaDettaglioCategoria'\",\
\"'FiltraDettaglioCategoria'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
horizontalAlignment:0,
labelFor:"fld_codicedettaglio",
location:"450,20",
mediaOptions:2,
name:"btn_codicedettaglio",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"16304373-6554-4205-B046-EEB82022E2D5",
verticalAlignment:0
},
{
labelFor:"fld_codicedettaglio",
location:"410,0",
name:"lbl_descrizionedettaglio",
size:"300,20",
text:"Dettaglio scheda storica",
transparent:true,
typeid:7,
uuid:"1924CCD5-FF4C-4F51-8D37-D4835D657959"
},
{
height:120,
partType:5,
typeid:19,
uuid:"28DFFAD6-8F56-4879-9026-70CAD54505A1"
},
{
dataProviderID:"_descrCategoria",
editable:false,
location:"160,20",
name:"fld_descrizionecategoria",
size:"240,20",
typeid:4,
uuid:"33C9DB25-5BA1-4F00-AEBE-695D41443698"
},
{
labelFor:"fld_note",
location:"10,45",
name:"lbl_note",
size:"240,20",
text:"Annotazioni",
transparent:true,
typeid:7,
uuid:"354F2C20-8C75-4870-A3B9-72F8D73DF7C3"
},
{
dataProviderID:"_codDettaglio",
format:"#",
horizontalAlignment:0,
location:"410,20",
name:"fld_codicedettaglio",
size:"40,20",
typeid:4,
uuid:"3691C324-4B25-468B-969D-ECB424E32B8D"
},
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
null,\
\"'AG_Lkp_CategSchedaStorica'\",\
\"'AggiornaCategoria'\",\
\"'FiltraCategoria'\",\
null,\
null,\
null,\
\"true\"\
]\
}\
}",
horizontalAlignment:0,
labelFor:"fld_codicecategoria",
location:"140,20",
mediaOptions:2,
name:"btn_codicecategoria",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"41E86829-1071-441B-A31E-8E63E2078867",
verticalAlignment:0
},
{
dataProviderID:"note",
displayType:1,
location:"10,65",
name:"fld_note",
size:"700,40",
typeid:4,
uuid:"440CDAA1-F820-4440-BE52-4A503A51597D"
},
{
dataProviderID:"datadecorrenza",
location:"10,20",
name:"fld_datadecorrenza",
size:"80,20",
typeid:4,
uuid:"5BE795AA-73D2-406B-B01F-943BE1D68468"
},
{
dataProviderID:"_codCategoria",
format:"#",
horizontalAlignment:0,
location:"100,20",
name:"fld_codicecategoria",
size:"40,20",
typeid:4,
uuid:"5CD1DD4C-4141-4770-8D8E-0E3D4547B146"
},
{
labelFor:"fld_codicecategoria",
location:"100,0",
name:"lbl_descrizionecategoria",
size:"300,20",
text:"Categoria scheda storica",
transparent:true,
typeid:7,
uuid:"700C3F5A-090A-43EA-BA81-BEFB62DD34C3"
},
{
dataProviderID:"_descrDettaglio",
editable:false,
location:"470,20",
name:"fld_descrizionedettaglio",
size:"240,20",
typeid:4,
uuid:"D10D78D2-64FE-4FC4-902A-A674202F660A"
},
{
extendsID:"AAAC08F8-0270-4E48-995F-E7066E036521",
height:115,
typeid:19,
uuid:"F0D23AE7-BE49-4BB5-BA61-7B34CD9BBC55"
}
],
name:"agl_ss_dtl",
showInMenu:true,
size:"720,120",
styleName:"leaf_style",
typeid:3,
uuid:"900467AE-6EDF-4A3C-BC11-B65FFC9286E5",
view:0