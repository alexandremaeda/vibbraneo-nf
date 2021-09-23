(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-16d0a08a"],{2026:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-breadcrumb",{attrs:{items:t.breadCrumbItems}}),a("card",[a("h2",{staticClass:"card-title mb-3",attrs:{slot:"header"},slot:"header"},[t._v("Despesas")]),a("p",[t._v("em breve")]),a("b-skeleton-table",{attrs:{rows:5,columns:4,"table-props":{bordered:!0,striped:!0}}})],1)],1)],1)],1)])},s=[],n={data:function(){return{breadCrumbItems:[{text:"Dashboard",to:{name:"Home"}},{text:"Despesas",active:!0}]}}},o=n,c=a("2877"),i=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=i.exports},4632:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},s=[],n=a("2877"),o={},c=Object(n["a"])(o,r,s,!1,null,null,null);e["default"]=c.exports},b0c5:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-breadcrumb",{attrs:{items:t.breadCrumbItems}}),a("card",[a("h2",{staticClass:"card-title mb-3",attrs:{slot:"header"},slot:"header"},[t._v("Notas Fiscais")]),a("div",{staticClass:"mb-5"},[a("b-button",{attrs:{variant:"primary",to:{name:"Adicionar Nota Fiscal"}}},[t._v("Lançar Nota Fiscal")])],1),a("b-alert",{attrs:{variant:"success",dismissible:"",fade:""},model:{value:t.alert,callback:function(e){t.alert=e},expression:"alert"}},[t._v(" "+t._s(t.alertMessage)+" ")]),a("div",{staticClass:"table-responsive"},[a("b-table",{attrs:{hover:"",items:t.notasFiscais,fields:t.fields,"show-empty":"","empty-text":"nenhum dado encontrado"},scopedSlots:t._u([{key:"empty",fn:function(e){return[a("h4",[t._v(t._s(e.emptyText))])]}},{key:"cell(descricaoServico)",fn:function(e){return[a("div",{attrs:{title:e.item.descricaoServico}},[t._v(" "+t._s(t.longTextChecker(e.item.descricaoServico))+" ")])]}},{key:"cell(actions)",fn:function(e){return[a("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"info"},on:{click:function(a){return t.update(e.item)}}},[t._v(" Editar ")]),a("b-button",{attrs:{size:"sm",variant:"warning"},on:{click:function(a){return t.remove(e.item)}}},[t._v(" Remover ")])]}}])})],1)],1)],1)],1)],1)])},s=[],n=a("1da1"),o=a("5530"),c=(a("96cf"),a("fb6a"),a("2f62")),i=Object(c["a"])("notasFiscais"),l=i.mapState,u=i.mapActions,m={data:function(){return{breadCrumbItems:[{text:"Dashboard",to:{name:"Home"}},{text:"Notas Fiscais",active:!0}],alert:!1,alertMessage:"",fields:[{key:"numero",label:"Número"},{key:"valor",label:"Valor",formatter:function(t){return parseFloat(t||0).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}},{key:"mes",label:"Mês"},{key:"dataRecebimento",label:"Data de Recebimento",formatter:function(t){try{return new Date(t).toLocaleDateString("pt-BR",{timeZone:"UTC"})}catch(e){return console.error(e),t}}},{key:"descricaoServico",label:"Descrição do Serviço Prestado"},{excludeFilter:!0,key:"actions",label:"",class:"action"}]}},computed:Object(o["a"])({},l(["notasFiscais"])),methods:Object(o["a"])(Object(o["a"])({},u(["removeNotaFiscal","updateNotaFiscal"])),{},{longTextChecker:function(t){return t&&t.length>100?"".concat(t.slice(0,60),"..."):t},update:function(t){this.$router.push({name:"Atualizar Nota Fiscal",params:{id:t.id}})},remove:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$swal({title:"Atenção!",text:"Deseja realmente Remover a Nota Fiscal número: ".concat(t.numero,"?"),icon:"warning",showCancelButton:!0,confirmButtonColor:"#DD6B55",confirmButtonText:"Sim",cancelButtonText:"Não"});case 2:if(r=a.sent,r.value){a.next=5;break}return a.abrupt("return");case 5:e.removeNotaFiscal(t.id),e.alert=!0,e.alertMessage="Nota Fiscal número: ".concat(t.numero,", removida.");case 8:case"end":return a.stop()}}),a)})))()}})},d=m,b=a("2877"),v=Object(b["a"])(d,r,s,!1,null,null,null);e["default"]=v.exports},b99d:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("div",{staticClass:"container-fluid"},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-breadcrumb",{attrs:{items:t.breadCrumbItems}}),a("card",[a("h2",{staticClass:"card-title mb-3",attrs:{slot:"header"},slot:"header"},[t._v("Preferências")]),a("p",[t._v("em breve")]),a("b-card",[a("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),a("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),a("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1)],1)],1)],1)])},s=[],n={data:function(){return{breadCrumbItems:[{text:"Dashboard",to:{name:"Home"}},{text:"Preferências",active:!0}]}}},o=n,c=a("2877"),i=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-16d0a08a.6e00439b.js.map