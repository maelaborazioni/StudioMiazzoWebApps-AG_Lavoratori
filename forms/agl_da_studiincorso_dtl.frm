dataSource:"db:/ma_anagrafiche/lavoratori_studiincorso",
extendsID:"3C076162-6D45-4034-9F27-2ADA00E4841B",
items:[
{
customProperties:"methods:{\
onActionMethodID:{\
arguments:[\
null,\
\"'codtipostudiincorso'\",\
\"'AG_Lkp_TipiDiStudi'\"\
]\
}\
}",
formIndex:64,
horizontalAlignment:0,
labelFor:"fld_codtipostudio",
location:"60,20",
name:"btn_titolostudio",
onActionMethodID:"09683411-0331-4A08-BF5E-656611194522",
rolloverCursor:12,
showClick:false,
size:"20,20",
styleClass:"btn_lookup",
transparent:true,
typeid:7,
uuid:"3BAB06B5-4901-4C23-9695-ED90DEAEA6F7"
},
{
extendsID:"AAAC08F8-0270-4E48-995F-E7066E036521",
height:130,
typeid:19,
uuid:"40575368-8DC7-4648-8999-8862732A1878"
},
{
anchors:11,
dataProviderID:"lavoratori_studiincorso_to_e2tipidistudi.descrizionestudioincorso",
editable:false,
location:"80,20",
name:"fld_dettagliotipostudio",
size:"710,20",
typeid:4,
uuid:"4B917530-1C9B-4CE8-A182-D8ABB4604BC1"
},
{
dataProviderID:"codtipostudiincorso",
editable:false,
location:"10,20",
name:"fld_codtipostudio",
size:"50,20",
typeid:4,
uuid:"654FE1F9-0112-4404-BD65-00DB9F20F0AE"
},
{
height:480,
partType:5,
typeid:19,
uuid:"B18910BD-A7D8-4262-8CD2-D246BA31B36D"
},
{
labelFor:"fld_codtipostudio",
location:"10,0",
size:"130,20",
text:"Tipo di studi in corso",
transparent:true,
typeid:7,
uuid:"D83EC0E5-1E00-4690-A36C-C53F5E59D11A"
},
{
anchors:11,
dataProviderID:"dettaglio",
location:"10,60",
name:"fld_annotazioni",
size:"780,60",
typeid:4,
uuid:"E3D58712-CAE4-4B1E-8D72-15C60D5E6469"
},
{
location:"10,40",
size:"80,20",
text:"Annotazioni",
transparent:true,
typeid:7,
uuid:"F8E9E5A3-5CA7-4F32-9EAF-A3C94B4C2CEE"
}
],
name:"agl_da_studiincorso_dtl",
onShowMethodID:"2B85FC8D-2752-4485-8AA6-C84458505F9B",
size:"800,480",
styleName:"leaf_style",
typeid:3,
uuid:"554B5AE5-0F46-4166-AD51-CB2A1E4980C7"