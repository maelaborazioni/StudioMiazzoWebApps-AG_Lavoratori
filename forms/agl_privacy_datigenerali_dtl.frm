dataSource:"db:/ma_hr/lavoratori_privacy",
extendsID:"3C076162-6D45-4034-9F27-2ADA00E4841B",
items:[
{
formIndex:54,
labelFor:"inizio_nomina",
location:"10,40",
name:"lbl_inizionomina",
size:"80,10",
text:"Inizio nomina",
transparent:true,
typeid:7,
uuid:"106B4E98-5657-4BE1-910D-6114B29232E4"
},
{
anchors:11,
background:"#efefef",
borderType:"SpecialMatteBorder,0.0,0.0,1.0,0.0,#434343,#000000,#434343,#000000,0.0,",
horizontalAlignment:4,
location:"0,0",
size:"650,30",
typeid:7,
uuid:"41696CA2-1310-4593-9EA2-C8E8C82FCBC7"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:1,
horizontalAlignment:0,
labelFor:"firma_nomina",
location:"255,55",
mediaOptions:2,
name:"btn_firmanomina",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"60234BF5-4E9A-497F-8608-6A5930243F0C",
verticalAlignment:0
},
{
formIndex:54,
labelFor:"protocollo_aziendale",
location:"285,40",
name:"lbl_protocolloaziendale",
size:"123,10",
text:"Protocollo aziendale",
transparent:true,
typeid:7,
uuid:"6569E61E-04D1-4D30-944F-BF65A18420A5"
},
{
formIndex:1,
labelFor:"incaricato",
location:"10,10",
name:"lbl_incaricato",
size:"60,10",
text:"Incaricato",
transparent:true,
typeid:7,
uuid:"8BB69102-A23B-4DDC-A9C6-331C66DF4BD2"
},
{
formIndex:54,
labelFor:"fine_nomina",
location:"100,40",
name:"lbl_finenomina",
size:"80,10",
text:"Fine nomina",
transparent:true,
typeid:7,
uuid:"9CB62A65-695C-4E26-A427-A932BB54A0A3"
},
{
borderType:"EmptyBorder,0,0,0,0",
dataProviderID:"incaricatotrattamento",
displayType:4,
editable:false,
formIndex:2,
horizontalAlignment:0,
location:"70,6",
name:"incaricato",
size:"20,20",
transparent:true,
typeid:4,
uuid:"A8DDEAC8-24BC-486A-91BC-B38E3B9A73C6"
},
{
dataProviderID:"firmanomina",
format:"dd/MM/yyyy|mask",
location:"190,55",
name:"firma_nomina",
size:"85,20",
typeid:4,
uuid:"BEE99B46-B9DC-4A92-817A-EF57B6051D54"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:1,
horizontalAlignment:0,
labelFor:"fine_nomina",
location:"160,55",
mediaOptions:2,
name:"btn_finenomina",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"BF503AE5-8384-4BB2-ADD8-AB262A4ADBBF",
verticalAlignment:0
},
{
formIndex:54,
labelFor:"firma_nomina",
location:"190,40",
name:"lbl_firmanomina",
size:"90,10",
text:"Firma lett.nomina",
transparent:true,
typeid:7,
uuid:"C99B73BA-96CB-4DE6-8AB4-2F5C86C9F28F"
},
{
dataProviderID:"protocolloaziendale",
formIndex:56,
format:"********************",
location:"285,55",
name:"protocollo_aziendale",
size:"355,20",
typeid:4,
uuid:"CD1F3ACB-D498-4278-9564-0CDE6A377475"
},
{
height:480,
partType:5,
typeid:19,
uuid:"E0AE7615-FE0B-427C-8B85-FB7FE16BD792"
},
{
extendsID:"AAAC08F8-0270-4E48-995F-E7066E036521",
height:85,
typeid:19,
uuid:"E5E5463C-656F-44C9-A09B-650A6A28AB69"
},
{
borderType:"EmptyBorder,0,0,0,0",
formIndex:1,
horizontalAlignment:0,
labelFor:"inizio_nomina",
location:"70,55",
mediaOptions:2,
name:"btn_inizionomina",
onActionMethodID:"763FDDFF-2CFE-46E2-A447-E7F60173BC57",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
rolloverCursor:12,
showClick:false,
showFocus:false,
size:"20,20",
styleClass:"btn_calendar",
transparent:true,
typeid:7,
uuid:"EE287774-99B5-4414-AE5A-8D61D4F81D01",
verticalAlignment:0
},
{
dataProviderID:"inizionomina",
format:"dd/MM/yyyy|mask",
location:"10,55",
name:"inizio_nomina",
size:"80,20",
typeid:4,
uuid:"F07F93E9-DE9D-4839-9C7B-369EDB6471A5"
},
{
dataProviderID:"finenomina",
format:"dd/MM/yyyy|mask",
location:"100,55",
name:"fine_nomina",
size:"80,20",
typeid:4,
uuid:"F283BCD1-90EB-4499-B87B-92AA55456BC0"
}
],
name:"agl_privacy_datigenerali_dtl",
size:"650,480",
styleName:"leaf_style",
typeid:3,
uuid:"E12C6430-AC68-4E33-8387-19947BF991C0"