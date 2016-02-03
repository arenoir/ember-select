"use strict";define("dummy/app",["exports","ember","dummy/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,n,a,r){var i=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),(0,a["default"])(i,r["default"].modulePrefix),e["default"]=i}),define("dummy/components/app-version",["exports","ember-cli-app-version/components/app-version","dummy/config/environment"],function(e,t,n){var a=n["default"].APP.name,r=n["default"].APP.version;e["default"]=t["default"].extend({version:r,name:a})}),define("dummy/components/ember-collection-select-input",["exports","ember-collection-select/components/ember-collection-select-input"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ember-collection-select-option",["exports","ember-collection-select/components/ember-collection-select-option"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ember-collection-select-selection",["exports","ember-collection-select/components/ember-collection-select-selection"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ember-collection-select",["exports","ember-collection-select/components/ember-collection-select"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ember-collection",["exports","ember-collection/components/ember-collection"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/ember-native-scrollable",["exports","ember-collection/components/ember-native-scrollable"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/components/one-way-input",["exports","ember-one-way-controls/components/one-way-input"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/controllers/application",["exports","ember"],function(e,t){e["default"]=t["default"].Controller.extend({})}),define("dummy/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("dummy/helpers/ember-collection-select-highlight",["exports","ember-collection-select/helpers/ember-collection-select-highlight"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}}),Object.defineProperty(e,"emberCollectionSelectHighlight",{enumerable:!0,get:function(){return t.emberCollectionSelectHighlight}})}),define("dummy/helpers/fixed-grid-layout",["exports","ember","ember-collection/layouts/grid"],function(e,t,n){e["default"]=t["default"].Helper.helper(function(e,t){return new n["default"](e[0],e[1])})}),define("dummy/helpers/mixed-grid-layout",["exports","ember","ember-collection/layouts/mixed-grid"],function(e,t,n){e["default"]=t["default"].Helper.helper(function(e,t){return new n["default"](e[0])})}),define("dummy/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("dummy/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("dummy/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","dummy/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("dummy/initializers/dictionary",["exports","dummy/services/dictionary"],function(e,t){e["default"]={name:"dictionary",initialize:function(e,n){n.register("store:dictionary",t["default"]),n.inject("route","dictionary","store:dictionary")}}}),define("dummy/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,n){function a(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var a,r=n["default"].exportApplicationGlobal;a="string"==typeof r?r:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("dummy/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("dummy/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("dummy/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("dummy/instance-initializers/dictionary",["exports"],function(e){e["default"]={name:"dictionary",initialize:function(e){var t=e.container.lookup("store:dictionary");t.search("a")}}}),define("dummy/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("dummy/routes/application",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({model:function(){return this.dictionary},actions:{search:function(e){var t=this.get("controller"),n=this.dictionary.search(e);t.set("loading",!0),n.then(function(){t.set("loading",!1)})}}})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("dummy/services/dictionary",["exports","ember","dummy/config/environment"],function(e,t,n){var a=t["default"].Service,r=t["default"].RSVP,i=t["default"].computed,l=t["default"].isBlank;e["default"]=a.extend({content:t["default"].A([]),_letters:t["default"].A([]),alphabetical:i("content",function(){var e=this.get("content");return e.sort()}),search:function(e){var a,i=this.get("_letters"),o=this.get("content");return new r.Promise(function(r,d){return l(e)?void r():(a=e.toLowerCase().trim().charAt(0),!/[a-z]/.test(a)||i.contains(a)?void r():void t["default"].$.getJSON(n["default"].baseURL+"dictionary/"+a+".json").then(function(e){i.push(a),o.pushObjects(e),r(e)},d))})}})}),define("dummy/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.3.0",loc:{source:null,start:{line:28,column:8},end:{line:49,column:8}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:2,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n            ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n          ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n          ");e.appendChild(t,n);var n=e.createElement("div"),a=e.createTextNode("\n            ");e.appendChild(n,a);var a=e.createElement("small"),r=e.createTextNode("\n              ");e.appendChild(a,r);var r=e.createComment("");e.appendChild(a,r);var r=e.createTextNode("\n            ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n          ");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(2);return a[0]=e.createMorphAt(e.childAt(t,[1]),1,1),a[1]=e.createMorphAt(e.childAt(t,[3,1]),1,1),a},statements:[["inline","ember-collection-select-highlight",[["get","item.word",["loc",[null,[41,48],[41,57]]]],["get","searchTerm",["loc",[null,[41,58],[41,68]]]]],[],["loc",[null,[41,12],[41,70]]]],["content","item.definition",["loc",[null,[45,14],[45,33]]]]],locals:["item","searchTerm"],templates:[]}}();return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.3.0",loc:{source:null,start:{line:1,column:0},end:{line:65,column:0}},moduleName:"dummy/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createComment("");e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-12");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("h2"),l=e.createTextNode("Ember Select ");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("h5"),l=e.createTextNode("A select control built for Ember.js.");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-sm-12");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("p"),l=e.createTextNode("\n      ");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n  ");e.appendChild(n,a);var a=e.createElement("form"),r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-12");var l=e.createTextNode("\n        ");e.appendChild(i,l);var l=e.createComment("");e.appendChild(i,l);var l=e.createTextNode("\n      ");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-12");var l=e.createTextNode("\n");e.appendChild(i,l);var l=e.createComment("");e.appendChild(i,l);var l=e.createTextNode("\n      ");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","row");var i=e.createTextNode("\n      ");e.appendChild(r,i);var i=e.createElement("div");e.setAttribute(i,"class","col-sm-12");var l=e.createTextNode("\n        ");e.appendChild(i,l);var l=e.createComment("");e.appendChild(i,l);var l=e.createTextNode("\n      ");e.appendChild(i,l),e.appendChild(r,i);var i=e.createTextNode("\n    ");e.appendChild(r,i),e.appendChild(a,r);var r=e.createTextNode("\n\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n\n\n\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0]),r=e.childAt(a,[7]),i=new Array(4);return i[0]=e.createMorphAt(a,1,1),i[1]=e.createMorphAt(e.childAt(r,[1,1]),1,1),i[2]=e.createMorphAt(e.childAt(r,[3,1]),1,1),i[3]=e.createMorphAt(e.childAt(r,[5,1]),1,1),i},statements:[["content","outlet",["loc",[null,[3,2],[3,12]]]],["inline","input",[],["type","text"],["loc",[null,[22,8],[22,29]]]],["block","ember-collection-select",[],["content",["subexpr","@mut",[["get","model.alphabetical",["loc",[null,[29,18],[29,36]]]]],[],[]],"onchange",["subexpr","action",[["subexpr","mut",[["get","selection",["loc",[null,[30,32],[30,41]]]]],[],["loc",[null,[30,27],[30,42]]]]],[],["loc",[null,[30,19],[30,43]]]],"selection",["subexpr","@mut",[["get","selection",["loc",[null,[31,20],[31,29]]]]],[],[]],"optionFunction",["subexpr","@mut",[["get","optionFunction",["loc",[null,[32,25],[32,39]]]]],[],[]],"selectionLabelPath","word","search","search","loading",["subexpr","@mut",[["get","loading",["loc",[null,[35,18],[35,25]]]]],[],[]],"placeholder","Select a word."],0,null,["loc",[null,[28,8],[49,36]]]],["inline","input",[],["type","text"],["loc",[null,[56,8],[56,29]]]]],locals:[],templates:[e]}}())}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("dummy/app")["default"].create({name:"ember-collection-select",version:"0.0.0+104ab827"});