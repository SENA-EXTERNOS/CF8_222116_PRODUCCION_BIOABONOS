(function(e){function a(a){for(var o,i,r=a[0],s=a[1],d=a[2],l=0,u=[];l<r.length;l++)i=r[l],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&u.push(c[i][0]),c[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,d||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var r=n[i];0!==c[r]&&(o=!1)}o&&(t.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},c={app:0},t=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"fa532f3e","chunk-0206bfa0":"7eb1678d","chunk-0c047e41":"da2700f5","chunk-13a6037e":"b9b550ab","chunk-18f95272":"d078ffd9","chunk-25b302c8":"7e764b51","chunk-26fc7596":"0223e8d0","chunk-2c06842c":"ae56870c","chunk-2d0e96ec":"e2ca181d","chunk-2d208d90":"760c08b7","chunk-2d21d0e2":"bfeb6d2c","chunk-2d22c123":"a644a972","chunk-2d2747e2":"013e6804","chunk-2e80bb9a":"24a52a86","chunk-319206de":"4c787e88","chunk-32334cb6":"38590270","chunk-3c57cd7b":"e27cc4b3","chunk-3d6834f6":"2680dc22","chunk-4cdd78c0":"49699030","chunk-4f2d402a":"301ae45e","chunk-4fde0a08":"7c15f751","chunk-515a8379":"37cc02fe","chunk-53ccb27e":"98af84a3","chunk-55d286b8":"1e2df45a","chunk-59974754":"6385320f","chunk-6e1e538a":"c4319b8c","chunk-766a929b":"1ad13c3d","chunk-c796899c":"cca6ec61","chunk-e8a7823a":"9f284bb7","chunk-f2df7d2c":"de9c9556","chunk-fde47172":"cdad90b9",comple:"2e02174c",creditos:"82550b37",glosario:"5a76704b",intro:"5738ad7c",referencias:"b4fb4c25",sintesis:"ae42aa8c",tema1:"8f4f5070",tema2:"57b899bc",tema3:"a1b2d08c",tema4:"f7587e0f",tema5:"7384bbf5"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-4fde0a08":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4",tema5:"tema5"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-3c57cd7b":"3babef71","chunk-3d6834f6":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-4fde0a08":"14d1f3e8","chunk-515a8379":"d3abb5ef","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"1a095c20","chunk-6e1e538a":"126808df","chunk-766a929b":"a61d03cb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"73d15757",creditos:"33db8a8c",glosario:"c93972b3",intro:"31d6cfe0",referencias:"aad03c2f",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0",tema5:"31d6cfe0"}[e]+".css",c=s.p+o,t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var d=t[r],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===c))return a()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){d=u[r],l=d.getAttribute("data-href");if(l===o||l===c)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||c,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=c;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){i[e]=0})));var o=c[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=c[e]=[a,n]}));a.push(o[2]=t);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=r(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=c[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}c[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},c=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},r=t,s=n("2877"),d=Object(s["a"])(r,i,c,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),f=n("ae58"),p=n("7e58");u["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema5").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef0"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"ef72"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=b,h=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Producción de bioabonos",descripcionCurso:"Este componente contempla aspectos teóricos y técnicos sobre el bioabono, al diferenciar temáticas desde la selección de insumos y la preparación y el control de calidad, hasta la descripción de su comportamiento como fertilizante del suelo. Igualmente, se relacionan las propiedades físicas, químicas y biológicas que lo integran, destacando, así, las ventajas en su producción y su aporte al medio ambiente.",imagenBannerPrincipal:n("9128"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")},{clases:["banner-principal-decorativo-4"],imagen:n("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Bioabonos",desarrolloContenidos:!0},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Medidas e inspección a insumos para la elaboración de bioabonos",desarrolloContenidos:!0},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Producción de bioabonos",desarrolloContenidos:!0},{nombreRuta:"tema4",icono:"far fa-file-alt",numero:"4",titulo:"Homogeneización del producto",desarrolloContenidos:!0},{nombreRuta:"tema5",icono:"far fa-file-alt",numero:"5",titulo:"Verificación de calidad del proceso de producción de bioabono",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Bioabonos",referencia:"Martínez, M., Pantoja, A. & Román, P. (2013). <i>Manual del compostaje del agricultor</i>. Organización de las Naciones Unidas para la alimentación y la agricultura.",tipo:"Manual",descarga:"/downloads/I3388S.pdf"},{tema:"Medidas e inspección a insumos para la elaboración de bioabonos",referencia:"Resolución 000698 de 2011. [Instituto Colombiano Agropecuario]. Por la cual  se establecen los requisitos para el registro de departamentos técnicos de ensayos de eficacia, productores e importadores de bioinsumos de uso agrícola y se dictan otras disposiciones. Febrero 4 de 2011.",tipo:"Resolución",link:"https://www.ica.gov.co/getattachment/Normatividad/Normas-Ica/Resoluciones-Oficinas-Nacionales/2020/2020R68370/Resolucion-698-de-2011.pdf.aspx?lang=es-CO#:~:text=La%20presente%20Resoluci%C3%B3n%20se%20aplica,su%20comercializaci%C3%B3n%20o%20uso%20directo."},{tema:"Medidas e inspección a insumos para la elaboración de bioabonos",referencia:"Resolución 004754 de 2011. [Instituto Colombiano Agropecuario]. Por la cual se establecen los requisitos para la ampliación de uso de bioinsumos y plaguicidas químicos de uso agrícola en cultivos menores y se dictan otras disposiciones. Diciembre 7 de 2011.",tipo:"Resolución",link:"https://www.ica.gov.co/getattachment/fce8ae88-f7df-4105-b71c-0c52ced85d0b/2011R4754.aspx#:~:text=Establecer%20los%20requisitos%20para%20la,uso%20agr%C3%ADcola%20en%20cultivos%20menores"},{tema:"Homogeneización del producto",referencia:"Garro, J. (2016). <em>El suelo y los abonos orgánicos.</em> Instituto Nacional de Innovación y Transferencia en Tecnología Agropecuaria.",tipo:"Libro",link:"https://www.mag.go.cr/bibliotecavirtual/F04-10872.pdf"}],glosario:[{termino:"Biota:",significado:"conjunto de seres vivos."},{termino:"Bioinsumo",significado:"producto de procedencia biológica que se utiliza en la elaboración de bioabonos."},{termino:"Compost",significado:"técnica que integra diferentes compuestos orgánicos para la producción de abonos."},{termino:"Disgregar",significado:"hace referencia a la separación de las partículas que componen un todo."},{termino:"Fermentación",significado:"proceso que utiliza microorganismos para transformar la materia."},{termino:"Fitosanitario",significado:"está relacionado con ‘fito’ planta y ‘sanitario’, sanidad."},{termino:"Organoléptico",significado:"hace referencia a los órganos sensoriales."},{termino:"Sobrenadante",significado:"hace referencia a un contenido suspendido sobre un líquido."},{termino:"Subproducto",significado:"residuo utilizable resultado de un procedimiento anterior."},{termino:"Tamizar",significado:"acción que separa partículas, de diferentes tamaños, a través de herramientas como el tamiz."}],referencias:[{referencia:"Instituto Colombiano Agropecuario. (2004). <i>Resolución 00375. Por la cual se dictan las disposiciones sobre Registro y Control de los Bioinsumos y Extractos Vegetales de uso agrícola en Colombia</i>.",link:"https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/resoluciones-derogadas/resolucion-375-de-2004.aspx"},{referencia:"Instituto Colombiano Agropecuario. (2020). <i>Resolución 068370. Por medio de la cual se establecen los requisitos para el registro de productor, productor por contrato, envasador, importador y departamentos técnicos de ensayos de eficacia agronómica de Bioinsumos</i>.",link:"https://www.ica.gov.co/getattachment/Areas/Agricola/Servicios/Fertilizantes-y-Bio-insumos-Agricolas/Resolucion-068370-del-27-de-mayo-de-2020.pdf.aspx?lang=es-CO"},{referencia:"Ochoa, R. & Ochoa, V. (2019). <i>Aplicación de microorganismos y sus beneficios en suelos para la producción agrícola</i>. [Tesis de pregrado. Universidad Nacional Abierta y a Distancia]. Repositorio Institucional UNAD.",link:"https://repository.unad.edu.co/jspui/bitstream/10596/25714/1/%20%09rdochoam.pdf"},{referencia:"Tencio, C. (2017). <i>Guía de elaboración y aplicación de bioinsumos para una producción agrícola sostenible</i>. Ministerio de Agricultura y Ganadería de Costa Rica.",link:"http://www.mag.go.cr/bibliotecavirtual/F08-10924.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Álvaro Andrés Angarita Ramirez",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Felipe Varón Molina",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:g,store:h["a"],render:function(e){return e(l)}}).$mount("#app")},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.42b7b6ee.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.8b3d4143.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.6c0e3732.svg"},9128:function(e,a,n){e.exports=n.p+"img/banner-princiapal.5f2a5e52.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"6.3.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"5.3.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.c5ac723a.png"},f53d:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-4.a2f84c3d.svg"}});
//# sourceMappingURL=app.2cedc3fc.js.map