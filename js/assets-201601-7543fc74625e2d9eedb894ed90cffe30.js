(function(window,undefined){var
readyList,rootjQuery,core_strundefined=typeof undefined,document=window.document,location=window.location,_jQuery=window.jQuery,_$=window.$,class2type={},core_deletedIds=[],core_version="1.9.1",core_concat=core_deletedIds.concat,core_push=core_deletedIds.push,core_slice=core_deletedIds.slice,core_indexOf=core_deletedIds.indexOf,core_toString=class2type.toString,core_hasOwn=class2type.hasOwnProperty,core_trim=core_version.trim,jQuery=function(selector,context){return new jQuery.fn.init(selector,context,rootjQuery);},core_pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,core_rnotwhite=/\S+/g,rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,rquickExpr=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,rsingleTag=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rvalidchars=/^[\],:{}\s]*$/,rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g,rvalidescape=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,rvalidtokens=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,rmsPrefix=/^-ms-/,rdashAlpha=/-([\da-z])/gi,fcamelCase=function(all,letter){return letter.toUpperCase();},completed=function(event){if(document.addEventListener||event.type==="load"||document.readyState==="complete"){detach();jQuery.ready();}},detach=function(){if(document.addEventListener){document.removeEventListener("DOMContentLoaded",completed,false);window.removeEventListener("load",completed,false);}else{document.detachEvent("onreadystatechange",completed);window.detachEvent("onload",completed);}};jQuery.fn=jQuery.prototype={jquery:core_version,constructor:jQuery,init:function(selector,context,rootjQuery){var match,elem;if(!selector){return this;}
if(typeof selector==="string"){if(selector.charAt(0)==="<"&&selector.charAt(selector.length-1)===">"&&selector.length>=3){match=[null,selector,null];}else{match=rquickExpr.exec(selector);}
if(match&&(match[1]||!context)){if(match[1]){context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){for(match in context){if(jQuery.isFunction(this[match])){this[match](context[match]);}else{this.attr(match,context[match]);}}}
return this;}else{elem=document.getElementById(match[2]);if(elem&&elem.parentNode){if(elem.id!==match[2]){return rootjQuery.find(selector);}
this.length=1;this[0]=elem;}
this.context=document;this.selector=selector;return this;}}else if(!context||context.jquery){return(context||rootjQuery).find(selector);}else{return this.constructor(context).find(selector);}}else if(selector.nodeType){this.context=this[0]=selector;this.length=1;return this;}else if(jQuery.isFunction(selector)){return rootjQuery.ready(selector);}
if(selector.selector!==undefined){this.selector=selector.selector;this.context=selector.context;}
return jQuery.makeArray(selector,this);},selector:"",length:0,size:function(){return this.length;},toArray:function(){return core_slice.call(this);},get:function(num){return num==null?this.toArray():(num<0?this[this.length+num]:this[num]);},pushStack:function(elems){var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;ret.context=this.context;return ret;},each:function(callback,args){return jQuery.each(this,callback,args);},ready:function(fn){jQuery.ready.promise().done(fn);return this;},slice:function(){return this.pushStack(core_slice.apply(this,arguments));},first:function(){return this.eq(0);},last:function(){return this.eq(-1);},eq:function(i){var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},end:function(){return this.prevObject||this.constructor(null);},push:core_push,sort:[].sort,splice:[].splice};jQuery.fn.init.prototype=jQuery.fn;jQuery.extend=jQuery.fn.extend=function(){var src,copyIsArray,copy,name,options,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==="boolean"){deep=target;target=arguments[1]||{};i=2;}
if(typeof target!=="object"&&!jQuery.isFunction(target)){target={};}
if(length===i){target=this;--i;}
for(;i<length;i++){if((options=arguments[i])!=null){for(name in options){src=target[name];copy=options[name];if(target===copy){continue;}
if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=jQuery.isArray(copy)))){if(copyIsArray){copyIsArray=false;clone=src&&jQuery.isArray(src)?src:[];}else{clone=src&&jQuery.isPlainObject(src)?src:{};}
target[name]=jQuery.extend(deep,clone,copy);}else if(copy!==undefined){target[name]=copy;}}}}
return target;};jQuery.extend({noConflict:function(deep){if(window.$===jQuery){window.$=_$;}
if(deep&&window.jQuery===jQuery){window.jQuery=_jQuery;}
return jQuery;},isReady:false,readyWait:1,holdReady:function(hold){if(hold){jQuery.readyWait++;}else{jQuery.ready(true);}},ready:function(wait){if(wait===true?--jQuery.readyWait:jQuery.isReady){return;}
if(!document.body){return setTimeout(jQuery.ready);}
jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){return;}
readyList.resolveWith(document,[jQuery]);if(jQuery.fn.trigger){jQuery(document).trigger("ready").off("ready");}},isFunction:function(obj){return jQuery.type(obj)==="function";},isArray:Array.isArray||function(obj){return jQuery.type(obj)==="array";},isWindow:function(obj){return obj!=null&&obj==obj.window;},isNumeric:function(obj){return!isNaN(parseFloat(obj))&&isFinite(obj);},type:function(obj){if(obj==null){return String(obj);}
return typeof obj==="object"||typeof obj==="function"?class2type[core_toString.call(obj)]||"object":typeof obj;},isPlainObject:function(obj){if(!obj||jQuery.type(obj)!=="object"||obj.nodeType||jQuery.isWindow(obj)){return false;}
try{if(obj.constructor&&!core_hasOwn.call(obj,"constructor")&&!core_hasOwn.call(obj.constructor.prototype,"isPrototypeOf")){return false;}}catch(e){return false;}
var key;for(key in obj){}
return key===undefined||core_hasOwn.call(obj,key);},isEmptyObject:function(obj){var name;for(name in obj){return false;}
return true;},error:function(msg){throw new Error(msg);},parseHTML:function(data,context,keepScripts){if(!data||typeof data!=="string"){return null;}
if(typeof context==="boolean"){keepScripts=context;context=false;}
context=context||document;var parsed=rsingleTag.exec(data),scripts=!keepScripts&&[];if(parsed){return[context.createElement(parsed[1])];}
parsed=jQuery.buildFragment([data],context,scripts);if(scripts){jQuery(scripts).remove();}
return jQuery.merge([],parsed.childNodes);},parseJSON:function(data){if(window.JSON&&window.JSON.parse){return window.JSON.parse(data);}
if(data===null){return data;}
if(typeof data==="string"){data=jQuery.trim(data);if(data){if(rvalidchars.test(data.replace(rvalidescape,"@")
.replace(rvalidtokens,"]")
.replace(rvalidbraces,""))){return(new Function("return "+data))();}}}
jQuery.error("Invalid JSON: "+data);},parseXML:function(data){var xml,tmp;if(!data||typeof data!=="string"){return null;}
try{if(window.DOMParser){tmp=new DOMParser();xml=tmp.parseFromString(data,"text/xml");}else{xml=new ActiveXObject("Microsoft.XMLDOM");xml.async="false";xml.loadXML(data);}}catch(e){xml=undefined;}
if(!xml||!xml.documentElement||xml.getElementsByTagName("parsererror").length){jQuery.error("Invalid XML: "+data);}
return xml;},noop:function(){},globalEval:function(data){if(data&&jQuery.trim(data)){(window.execScript||function(data){window["eval"].call(window,data);})(data);}},camelCase:function(string){return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);},nodeName:function(elem,name){return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();},each:function(obj,callback,args){var value,i=0,length=obj.length,isArray=isArraylike(obj);if(args){if(isArray){for(;i<length;i++){value=callback.apply(obj[i],args);if(value===false){break;}}}else{for(i in obj){value=callback.apply(obj[i],args);if(value===false){break;}}}}else{if(isArray){for(;i<length;i++){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}else{for(i in obj){value=callback.call(obj[i],i,obj[i]);if(value===false){break;}}}}
return obj;},trim:core_trim&&!core_trim.call("\uFEFF\xA0")?function(text){return text==null?"":core_trim.call(text);}:function(text){return text==null?"":(text+"").replace(rtrim,"");},makeArray:function(arr,results){var ret=results||[];if(arr!=null){if(isArraylike(Object(arr))){jQuery.merge(ret,typeof arr==="string"?[arr]:arr);}else{core_push.call(ret,arr);}}
return ret;},inArray:function(elem,arr,i){var len;if(arr){if(core_indexOf){return core_indexOf.call(arr,elem,i);}
len=arr.length;i=i?i<0?Math.max(0,len+i):i:0;for(;i<len;i++){if(i in arr&&arr[i]===elem){return i;}}}
return-1;},merge:function(first,second){var l=second.length,i=first.length,j=0;if(typeof l==="number"){for(;j<l;j++){first[i++]=second[j];}}else{while(second[j]!==undefined){first[i++]=second[j++];}}
first.length=i;return first;},grep:function(elems,callback,inv){var retVal,ret=[],i=0,length=elems.length;inv=!!inv;for(;i<length;i++){retVal=!!callback(elems[i],i);if(inv!==retVal){ret.push(elems[i]);}}
return ret;},map:function(elems,callback,arg){var value,i=0,length=elems.length,isArray=isArraylike(elems),ret=[];if(isArray){for(;i<length;i++){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}else{for(i in elems){value=callback(elems[i],i,arg);if(value!=null){ret[ret.length]=value;}}}
return core_concat.apply([],ret);},guid:1,proxy:function(fn,context){var args,proxy,tmp;if(typeof context==="string"){tmp=fn[context];context=fn;fn=tmp;}
if(!jQuery.isFunction(fn)){return undefined;}
args=core_slice.call(arguments,2);proxy=function(){return fn.apply(context||this,args.concat(core_slice.call(arguments)));};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;},access:function(elems,fn,key,value,chainable,emptyGet,raw){var i=0,length=elems.length,bulk=key==null;if(jQuery.type(key)==="object"){chainable=true;for(i in key){jQuery.access(elems,fn,i,key[i],true,emptyGet,raw);}}else if(value!==undefined){chainable=true;if(!jQuery.isFunction(value)){raw=true;}
if(bulk){if(raw){fn.call(elems,value);fn=null;}else{bulk=fn;fn=function(elem,key,value){return bulk.call(jQuery(elem),value);};}}
if(fn){for(;i<length;i++){fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));}}}
return chainable?elems:bulk?fn.call(elems):length?fn(elems[0],key):emptyGet;},now:function(){return(new Date()).getTime();}});jQuery.ready.promise=function(obj){if(!readyList){readyList=jQuery.Deferred();if(document.readyState==="complete"){setTimeout(jQuery.ready);}else if(document.addEventListener){document.addEventListener("DOMContentLoaded",completed,false);window.addEventListener("load",completed,false);}else{document.attachEvent("onreadystatechange",completed);window.attachEvent("onload",completed);var top=false;try{top=window.frameElement==null&&document.documentElement;}catch(e){}
if(top&&top.doScroll){(function doScrollCheck(){if(!jQuery.isReady){try{top.doScroll("left");}catch(e){return setTimeout(doScrollCheck,50);}
detach();jQuery.ready();}})();}}}
return readyList.promise(obj);};jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(i,name){class2type["[object "+name+"]"]=name.toLowerCase();});function isArraylike(obj){var length=obj.length,type=jQuery.type(obj);if(jQuery.isWindow(obj)){return false;}
if(obj.nodeType===1&&length){return true;}
return type==="array"||type!=="function"&&(length===0||typeof length==="number"&&length>0&&(length-1)in obj);}
rootjQuery=jQuery(document);var optionsCache={};function createOptions(options){var object=optionsCache[options]={};jQuery.each(options.match(core_rnotwhite)||[],function(_,flag){object[flag]=true;});return object;}
jQuery.Callbacks=function(options){options=typeof options==="string"?(optionsCache[options]||createOptions(options)):jQuery.extend({},options);var
firing,memory,fired,firingLength,firingIndex,firingStart,list=[],stack=!options.once&&[],fire=function(data){memory=options.memory&&data;fired=true;firingIndex=firingStart||0;firingStart=0;firingLength=list.length;firing=true;for(;list&&firingIndex<firingLength;firingIndex++){if(list[firingIndex].apply(data[0],data[1])===false&&options.stopOnFalse){memory=false;break;}}
firing=false;if(list){if(stack){if(stack.length){fire(stack.shift());}}else if(memory){list=[];}else{self.disable();}}},self={add:function(){if(list){var start=list.length;(function add(args){jQuery.each(args,function(_,arg){var type=jQuery.type(arg);if(type==="function"){if(!options.unique||!self.has(arg)){list.push(arg);}}else if(arg&&arg.length&&type!=="string"){add(arg);}});})(arguments);if(firing){firingLength=list.length;}else if(memory){firingStart=start;fire(memory);}}
return this;},remove:function(){if(list){jQuery.each(arguments,function(_,arg){var index;while((index=jQuery.inArray(arg,list,index))>-1){list.splice(index,1);if(firing){if(index<=firingLength){firingLength--;}
if(index<=firingIndex){firingIndex--;}}}});}
return this;},has:function(fn){return fn?jQuery.inArray(fn,list)>-1:!!(list&&list.length);},empty:function(){list=[];return this;},disable:function(){list=stack=memory=undefined;return this;},disabled:function(){return!list;},lock:function(){stack=undefined;if(!memory){self.disable();}
return this;},locked:function(){return!stack;},fireWith:function(context,args){args=args||[];args=[context,args.slice?args.slice():args];if(list&&(!fired||stack)){if(firing){stack.push(args);}else{fire(args);}}
return this;},fire:function(){self.fireWith(this,arguments);return this;},fired:function(){return!!fired;}};return self;};jQuery.extend({Deferred:function(func){var tuples=[["resolve","done",jQuery.Callbacks("once memory"),"resolved"],["reject","fail",jQuery.Callbacks("once memory"),"rejected"],["notify","progress",jQuery.Callbacks("memory")]],state="pending",promise={state:function(){return state;},always:function(){deferred.done(arguments).fail(arguments);return this;},then:function(){var fns=arguments;return jQuery.Deferred(function(newDefer){jQuery.each(tuples,function(i,tuple){var action=tuple[0],fn=jQuery.isFunction(fns[i])&&fns[i];deferred[tuple[1]](function(){var returned=fn&&fn.apply(this,arguments);if(returned&&jQuery.isFunction(returned.promise)){returned.promise()
.done(newDefer.resolve)
.fail(newDefer.reject)
.progress(newDefer.notify);}else{newDefer[action+"With"](this===promise?newDefer.promise():this,fn?[returned]:arguments);}});});fns=null;}).promise();},promise:function(obj){return obj!=null?jQuery.extend(obj,promise):promise;}},deferred={};promise.pipe=promise.then;jQuery.each(tuples,function(i,tuple){var list=tuple[2],stateString=tuple[3];promise[tuple[1]]=list.add;if(stateString){list.add(function(){state=stateString;},tuples[i^1][2].disable,tuples[2][2].lock);}
deferred[tuple[0]]=function(){deferred[tuple[0]+"With"](this===deferred?promise:this,arguments);return this;};deferred[tuple[0]+"With"]=list.fireWith;});promise.promise(deferred);if(func){func.call(deferred,deferred);}
return deferred;},when:function(subordinate){var i=0,resolveValues=core_slice.call(arguments),length=resolveValues.length,remaining=length!==1||(subordinate&&jQuery.isFunction(subordinate.promise))?length:0,deferred=remaining===1?subordinate:jQuery.Deferred(),updateFunc=function(i,contexts,values){return function(value){contexts[i]=this;values[i]=arguments.length>1?core_slice.call(arguments):value;if(values===progressValues){deferred.notifyWith(contexts,values);}else if(!(--remaining)){deferred.resolveWith(contexts,values);}};},progressValues,progressContexts,resolveContexts;if(length>1){progressValues=new Array(length);progressContexts=new Array(length);resolveContexts=new Array(length);for(;i<length;i++){if(resolveValues[i]&&jQuery.isFunction(resolveValues[i].promise)){resolveValues[i].promise()
.done(updateFunc(i,resolveContexts,resolveValues))
.fail(deferred.reject)
.progress(updateFunc(i,progressContexts,progressValues));}else{--remaining;}}}
if(!remaining){deferred.resolveWith(resolveContexts,resolveValues);}
return deferred.promise();}});jQuery.support=(function(){var support,all,a,input,select,fragment,opt,eventName,isSupported,i,div=document.createElement("div");div.setAttribute("className","t");div.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";all=div.getElementsByTagName("*");a=div.getElementsByTagName("a")[0];if(!all||!a||!all.length){return{};}
select=document.createElement("select");opt=select.appendChild(document.createElement("option"));input=div.getElementsByTagName("input")[0];a.style.cssText="top:1px;float:left;opacity:.5";support={getSetAttribute:div.className!=="t",leadingWhitespace:div.firstChild.nodeType===3,tbody:!div.getElementsByTagName("tbody").length,htmlSerialize:!!div.getElementsByTagName("link").length,style:/top/.test(a.getAttribute("style")),hrefNormalized:a.getAttribute("href")==="/a",opacity:/^0.5/.test(a.style.opacity),cssFloat:!!a.style.cssFloat,checkOn:!!input.value,optSelected:opt.selected,enctype:!!document.createElement("form").enctype,html5Clone:document.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:document.compatMode==="CSS1Compat",deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};input.checked=true;support.noCloneChecked=input.cloneNode(true).checked;select.disabled=true;support.optDisabled=!opt.disabled;try{delete div.test;}catch(e){support.deleteExpando=false;}
input=document.createElement("input");input.setAttribute("value","");support.input=input.getAttribute("value")==="";input.value="t";input.setAttribute("type","radio");support.radioValue=input.value==="t";input.setAttribute("checked","t");input.setAttribute("name","t");fragment=document.createDocumentFragment();fragment.appendChild(input);support.appendChecked=input.checked;support.checkClone=fragment.cloneNode(true).cloneNode(true).lastChild.checked;if(div.attachEvent){div.attachEvent("onclick",function(){support.noCloneEvent=false;});div.cloneNode(true).click();}
for(i in{submit:true,change:true,focusin:true}){div.setAttribute(eventName="on"+i,"t");support[i+"Bubbles"]=eventName in window||div.attributes[eventName].expando===false;}
div.style.backgroundClip="content-box";div.cloneNode(true).style.backgroundClip="";support.clearCloneStyle=div.style.backgroundClip==="content-box";jQuery(function(){var container,marginDiv,tds,divReset="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",body=document.getElementsByTagName("body")[0];if(!body){return;}
container=document.createElement("div");container.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";body.appendChild(container).appendChild(div);div.innerHTML="<table><tr><td></td><td>t</td></tr></table>";tds=div.getElementsByTagName("td");tds[0].style.cssText="padding:0;margin:0;border:0;display:none";isSupported=(tds[0].offsetHeight===0);tds[0].style.display="";tds[1].style.display="none";support.reliableHiddenOffsets=isSupported&&(tds[0].offsetHeight===0);div.innerHTML="";div.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";support.boxSizing=(div.offsetWidth===4);support.doesNotIncludeMarginInBodyOffset=(body.offsetTop!==1);if(window.getComputedStyle){support.pixelPosition=(window.getComputedStyle(div,null)||{}).top!=="1%";support.boxSizingReliable=(window.getComputedStyle(div,null)||{width:"4px"}).width==="4px";marginDiv=div.appendChild(document.createElement("div"));marginDiv.style.cssText=div.style.cssText=divReset;marginDiv.style.marginRight=marginDiv.style.width="0";div.style.width="1px";support.reliableMarginRight=!parseFloat((window.getComputedStyle(marginDiv,null)||{}).marginRight);}
if(typeof div.style.zoom!==core_strundefined){div.innerHTML="";div.style.cssText=divReset+"width:1px;padding:1px;display:inline;zoom:1";support.inlineBlockNeedsLayout=(div.offsetWidth===3);div.style.display="block";div.innerHTML="<div></div>";div.firstChild.style.width="5px";support.shrinkWrapBlocks=(div.offsetWidth!==3);if(support.inlineBlockNeedsLayout){body.style.zoom=1;}}
body.removeChild(container);container=div=tds=marginDiv=null;});all=select=fragment=opt=a=input=null;return support;})();var rbrace=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,rmultiDash=/([A-Z])/g;function internalData(elem,name,data,pvt){if(!jQuery.acceptData(elem)){return;}
var thisCache,ret,internalKey=jQuery.expando,getByName=typeof name==="string",isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[internalKey]:elem[internalKey]&&internalKey;if((!id||!cache[id]||(!pvt&&!cache[id].data))&&getByName&&data===undefined){return;}
if(!id){if(isNode){elem[internalKey]=id=core_deletedIds.pop()||jQuery.guid++;}else{id=internalKey;}}
if(!cache[id]){cache[id]={};if(!isNode){cache[id].toJSON=jQuery.noop;}}
if(typeof name==="object"||typeof name==="function"){if(pvt){cache[id]=jQuery.extend(cache[id],name);}else{cache[id].data=jQuery.extend(cache[id].data,name);}}
thisCache=cache[id];if(!pvt){if(!thisCache.data){thisCache.data={};}
thisCache=thisCache.data;}
if(data!==undefined){thisCache[jQuery.camelCase(name)]=data;}
if(getByName){ret=thisCache[name];if(ret==null){ret=thisCache[jQuery.camelCase(name)];}}else{ret=thisCache;}
return ret;}
function internalRemoveData(elem,name,pvt){if(!jQuery.acceptData(elem)){return;}
var i,l,thisCache,isNode=elem.nodeType,cache=isNode?jQuery.cache:elem,id=isNode?elem[jQuery.expando]:jQuery.expando;if(!cache[id]){return;}
if(name){thisCache=pvt?cache[id]:cache[id].data;if(thisCache){if(!jQuery.isArray(name)){if(name in thisCache){name=[name];}else{name=jQuery.camelCase(name);if(name in thisCache){name=[name];}else{name=name.split(" ");}}}else{name=name.concat(jQuery.map(name,jQuery.camelCase));}
for(i=0,l=name.length;i<l;i++){delete thisCache[name[i]];}
if(!(pvt?isEmptyDataObject:jQuery.isEmptyObject)(thisCache)){return;}}}
if(!pvt){delete cache[id].data;if(!isEmptyDataObject(cache[id])){return;}}
if(isNode){jQuery.cleanData([elem],true);}else if(jQuery.support.deleteExpando||cache!=cache.window){delete cache[id];}else{cache[id]=null;}}
jQuery.extend({cache:{},expando:"jQuery"+(core_version+Math.random()).replace(/\D/g,""),noData:{"embed":true,"object":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000","applet":true},hasData:function(elem){elem=elem.nodeType?jQuery.cache[elem[jQuery.expando]]:elem[jQuery.expando];return!!elem&&!isEmptyDataObject(elem);},data:function(elem,name,data){return internalData(elem,name,data);},removeData:function(elem,name){return internalRemoveData(elem,name);},_data:function(elem,name,data){return internalData(elem,name,data,true);},_removeData:function(elem,name){return internalRemoveData(elem,name,true);},acceptData:function(elem){if(elem.nodeType&&elem.nodeType!==1&&elem.nodeType!==9){return false;}
var noData=elem.nodeName&&jQuery.noData[elem.nodeName.toLowerCase()];return!noData||noData!==true&&elem.getAttribute("classid")===noData;}});jQuery.fn.extend({data:function(key,value){var attrs,name,elem=this[0],i=0,data=null;if(key===undefined){if(this.length){data=jQuery.data(elem);if(elem.nodeType===1&&!jQuery._data(elem,"parsedAttrs")){attrs=elem.attributes;for(;i<attrs.length;i++){name=attrs[i].name;if(!name.indexOf("data-")){name=jQuery.camelCase(name.slice(5));dataAttr(elem,name,data[name]);}}
jQuery._data(elem,"parsedAttrs",true);}}
return data;}
if(typeof key==="object"){return this.each(function(){jQuery.data(this,key);});}
return jQuery.access(this,function(value){if(value===undefined){return elem?dataAttr(elem,key,jQuery.data(elem,key)):null;}
this.each(function(){jQuery.data(this,key,value);});},null,value,arguments.length>1,null,true);},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});}});function dataAttr(elem,key,data){if(data===undefined&&elem.nodeType===1){var name="data-"+key.replace(rmultiDash,"-$1").toLowerCase();data=elem.getAttribute(name);if(typeof data==="string"){try{data=data==="true"?true:data==="false"?false:data==="null"?null:+data+""===data?+data:rbrace.test(data)?jQuery.parseJSON(data):data;}catch(e){}
jQuery.data(elem,key,data);}else{data=undefined;}}
return data;}
function isEmptyDataObject(obj){var name;for(name in obj){if(name==="data"&&jQuery.isEmptyObject(obj[name])){continue;}
if(name!=="toJSON"){return false;}}
return true;}
jQuery.extend({queue:function(elem,type,data){var queue;if(elem){type=(type||"fx")+"queue";queue=jQuery._data(elem,type);if(data){if(!queue||jQuery.isArray(data)){queue=jQuery._data(elem,type,jQuery.makeArray(data));}else{queue.push(data);}}
return queue||[];}},dequeue:function(elem,type){type=type||"fx";var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){jQuery.dequeue(elem,type);};if(fn==="inprogress"){fn=queue.shift();startLength--;}
hooks.cur=fn;if(fn){if(type==="fx"){queue.unshift("inprogress");}
delete hooks.stop;fn.call(elem,next,hooks);}
if(!startLength&&hooks){hooks.empty.fire();}},_queueHooks:function(elem,type){var key=type+"queueHooks";return jQuery._data(elem,key)||jQuery._data(elem,key,{empty:jQuery.Callbacks("once memory").add(function(){jQuery._removeData(elem,type+"queue");jQuery._removeData(elem,key);})});}});jQuery.fn.extend({queue:function(type,data){var setter=2;if(typeof type!=="string"){data=type;type="fx";setter--;}
if(arguments.length<setter){return jQuery.queue(this[0],type);}
return data===undefined?this:this.each(function(){var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==="fx"&&queue[0]!=="inprogress"){jQuery.dequeue(this,type);}});},dequeue:function(type){return this.each(function(){jQuery.dequeue(this,type);});},delay:function(time,type){time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||"fx";return this.queue(type,function(next,hooks){var timeout=setTimeout(next,time);hooks.stop=function(){clearTimeout(timeout);};});},clearQueue:function(type){return this.queue(type||"fx",[]);},promise:function(type,obj){var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){if(!(--count)){defer.resolveWith(elements,[elements]);}};if(typeof type!=="string"){obj=type;type=undefined;}
type=type||"fx";while(i--){tmp=jQuery._data(elements[i],type+"queueHooks");if(tmp&&tmp.empty){count++;tmp.empty.add(resolve);}}
resolve();return defer.promise(obj);}});var nodeHook,boolHook,rclass=/[\t\r\n]/g,rreturn=/\r/g,rfocusable=/^(?:input|select|textarea|button|object)$/i,rclickable=/^(?:a|area)$/i,rboolean=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,ruseDefault=/^(?:checked|selected)$/i,getSetAttribute=jQuery.support.getSetAttribute,getSetInput=jQuery.support.input;jQuery.fn.extend({attr:function(name,value){return jQuery.access(this,jQuery.attr,name,value,arguments.length>1);},removeAttr:function(name){return this.each(function(){jQuery.removeAttr(this,name);});},prop:function(name,value){return jQuery.access(this,jQuery.prop,name,value,arguments.length>1);},removeProp:function(name){name=jQuery.propFix[name]||name;return this.each(function(){try{this[name]=undefined;delete this[name];}catch(e){}});},addClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).addClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):" ");if(cur){j=0;while((clazz=classes[j++])){if(cur.indexOf(" "+clazz+" ")<0){cur+=clazz+" ";}}
elem.className=jQuery.trim(cur);}}}
return this;},removeClass:function(value){var classes,elem,cur,clazz,j,i=0,len=this.length,proceed=arguments.length===0||typeof value==="string"&&value;if(jQuery.isFunction(value)){return this.each(function(j){jQuery(this).removeClass(value.call(this,j,this.className));});}
if(proceed){classes=(value||"").match(core_rnotwhite)||[];for(;i<len;i++){elem=this[i];cur=elem.nodeType===1&&(elem.className?(" "+elem.className+" ").replace(rclass," "):"");if(cur){j=0;while((clazz=classes[j++])){while(cur.indexOf(" "+clazz+" ")>=0){cur=cur.replace(" "+clazz+" "," ");}}
elem.className=value?jQuery.trim(cur):"";}}}
return this;},toggleClass:function(value,stateVal){var type=typeof value,isBool=typeof stateVal==="boolean";if(jQuery.isFunction(value)){return this.each(function(i){jQuery(this).toggleClass(value.call(this,i,this.className,stateVal),stateVal);});}
return this.each(function(){if(type==="string"){var className,i=0,self=jQuery(this),state=stateVal,classNames=value.match(core_rnotwhite)||[];while((className=classNames[i++])){state=isBool?state:!self.hasClass(className);self[state?"addClass":"removeClass"](className);}}else if(type===core_strundefined||type==="boolean"){if(this.className){jQuery._data(this,"__className__",this.className);}
this.className=this.className||value===false?"":jQuery._data(this,"__className__")||"";}});},hasClass:function(selector){var className=" "+selector+" ",i=0,l=this.length;for(;i<l;i++){if(this[i].nodeType===1&&(" "+this[i].className+" ").replace(rclass," ").indexOf(className)>=0){return true;}}
return false;},val:function(value){var ret,hooks,isFunction,elem=this[0];if(!arguments.length){if(elem){hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&"get"in hooks&&(ret=hooks.get(elem,"value"))!==undefined){return ret;}
ret=elem.value;return typeof ret==="string"?ret.replace(rreturn,""):ret==null?"":ret;}
return;}
isFunction=jQuery.isFunction(value);return this.each(function(i){var val,self=jQuery(this);if(this.nodeType!==1){return;}
if(isFunction){val=value.call(this,i,self.val());}else{val=value;}
if(val==null){val="";}else if(typeof val==="number"){val+="";}else if(jQuery.isArray(val)){val=jQuery.map(val,function(value){return value==null?"":value+"";});}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){this.value=val;}});}});jQuery.extend({valHooks:{option:{get:function(elem){var val=elem.attributes.value;return!val||val.specified?elem.value:elem.text;}},select:{get:function(elem){var value,option,options=elem.options,index=elem.selectedIndex,one=elem.type==="select-one"||index<0,values=one?null:[],max=one?index+1:options.length,i=index<0?max:one?index:0;for(;i<max;i++){option=options[i];if((option.selected||i===index)&&(jQuery.support.optDisabled?!option.disabled:option.getAttribute("disabled")===null)&&(!option.parentNode.disabled||!jQuery.nodeName(option.parentNode,"optgroup"))){value=jQuery(option).val();if(one){return value;}
values.push(value);}}
return values;},set:function(elem,value){var values=jQuery.makeArray(value);jQuery(elem).find("option").each(function(){this.selected=jQuery.inArray(jQuery(this).val(),values)>=0;});if(!values.length){elem.selectedIndex=-1;}
return values;}}},attr:function(elem,name,value){var hooks,notxml,ret,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
if(typeof elem.getAttribute===core_strundefined){return jQuery.prop(elem,name,value);}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=name.toLowerCase();hooks=jQuery.attrHooks[name]||(rboolean.test(name)?boolHook:nodeHook);}
if(value!==undefined){if(value===null){jQuery.removeAttr(elem,name);}else if(hooks&&notxml&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{elem.setAttribute(name,value+"");return value;}}else if(hooks&&notxml&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{if(typeof elem.getAttribute!==core_strundefined){ret=elem.getAttribute(name);}
return ret==null?undefined:ret;}},removeAttr:function(elem,value){var name,propName,i=0,attrNames=value&&value.match(core_rnotwhite);if(attrNames&&elem.nodeType===1){while((name=attrNames[i++])){propName=jQuery.propFix[name]||name;if(rboolean.test(name)){if(!getSetAttribute&&ruseDefault.test(name)){elem[jQuery.camelCase("default-"+name)]=elem[propName]=false;}else{elem[propName]=false;}}else{jQuery.attr(elem,name,"");}
elem.removeAttribute(getSetAttribute?name:propName);}}},attrHooks:{type:{set:function(elem,value){if(!jQuery.support.radioValue&&value==="radio"&&jQuery.nodeName(elem,"input")){var val=elem.value;elem.setAttribute("type",value);if(val){elem.value=val;}
return value;}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(elem,name,value){var ret,hooks,notxml,nType=elem.nodeType;if(!elem||nType===3||nType===8||nType===2){return;}
notxml=nType!==1||!jQuery.isXMLDoc(elem);if(notxml){name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];}
if(value!==undefined){if(hooks&&"set"in hooks&&(ret=hooks.set(elem,value,name))!==undefined){return ret;}else{return(elem[name]=value);}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){return ret;}else{return elem[name];}}},propHooks:{tabIndex:{get:function(elem){var attributeNode=elem.getAttributeNode("tabindex");return attributeNode&&attributeNode.specified?parseInt(attributeNode.value,10):rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href?0:undefined;}}}});boolHook={get:function(elem,name){var
prop=jQuery.prop(elem,name),attr=typeof prop==="boolean"&&elem.getAttribute(name),detail=typeof prop==="boolean"?getSetInput&&getSetAttribute?attr!=null:ruseDefault.test(name)?elem[jQuery.camelCase("default-"+name)]:!!attr:elem.getAttributeNode(name);return detail&&detail.value!==false?name.toLowerCase():undefined;},set:function(elem,value,name){if(value===false){jQuery.removeAttr(elem,name);}else if(getSetInput&&getSetAttribute||!ruseDefault.test(name)){elem.setAttribute(!getSetAttribute&&jQuery.propFix[name]||name,name);}else{elem[jQuery.camelCase("default-"+name)]=elem[name]=true;}
return name;}};if(!getSetInput||!getSetAttribute){jQuery.attrHooks.value={get:function(elem,name){var ret=elem.getAttributeNode(name);return jQuery.nodeName(elem,"input")?elem.defaultValue:ret&&ret.specified?ret.value:undefined;},set:function(elem,value,name){if(jQuery.nodeName(elem,"input")){elem.defaultValue=value;}else{return nodeHook&&nodeHook.set(elem,value,name);}}};}
if(!getSetAttribute){nodeHook=jQuery.valHooks.button={get:function(elem,name){var ret=elem.getAttributeNode(name);return ret&&(name==="id"||name==="name"||name==="coords"?ret.value!=="":ret.specified)?ret.value:undefined;},set:function(elem,value,name){var ret=elem.getAttributeNode(name);if(!ret){elem.setAttributeNode((ret=elem.ownerDocument.createAttribute(name)));}
ret.value=value+="";return name==="value"||value===elem.getAttribute(name)?value:undefined;}};jQuery.attrHooks.contenteditable={get:nodeHook.get,set:function(elem,value,name){nodeHook.set(elem,value===""?false:value,name);}};jQuery.each(["width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{set:function(elem,value){if(value===""){elem.setAttribute(name,"auto");return value;}}});});}
if(!jQuery.support.hrefNormalized){jQuery.each(["href","src","width","height"],function(i,name){jQuery.attrHooks[name]=jQuery.extend(jQuery.attrHooks[name],{get:function(elem){var ret=elem.getAttribute(name,2);return ret==null?undefined:ret;}});});jQuery.each(["href","src"],function(i,name){jQuery.propHooks[name]={get:function(elem){return elem.getAttribute(name,4);}};});}
if(!jQuery.support.style){jQuery.attrHooks.style={get:function(elem){return elem.style.cssText||undefined;},set:function(elem,value){return(elem.style.cssText=value+"");}};}
if(!jQuery.support.optSelected){jQuery.propHooks.selected=jQuery.extend(jQuery.propHooks.selected,{get:function(elem){var parent=elem.parentNode;if(parent){parent.selectedIndex;if(parent.parentNode){parent.parentNode.selectedIndex;}}
return null;}});}
if(!jQuery.support.enctype){jQuery.propFix.enctype="encoding";}
if(!jQuery.support.checkOn){jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]={get:function(elem){return elem.getAttribute("value")===null?"on":elem.value;}};});}
jQuery.each(["radio","checkbox"],function(){jQuery.valHooks[this]=jQuery.extend(jQuery.valHooks[this],{set:function(elem,value){if(jQuery.isArray(value)){return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>=0);}}});});var rformElems=/^(?:input|select|textarea)$/i,rkeyEvent=/^key/,rmouseEvent=/^(?:mouse|contextmenu)|click/,rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,rtypenamespace=/^([^.]*)(?:\.(.+)|)$/;function returnTrue(){return true;}
function returnFalse(){return false;}
jQuery.event={global:{},add:function(elem,types,handler,data,selector){var tmp,events,t,handleObjIn,special,eventHandle,handleObj,handlers,type,namespaces,origType,elemData=jQuery._data(elem);if(!elemData){return;}
if(handler.handler){handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;}
if(!handler.guid){handler.guid=jQuery.guid++;}
if(!(events=elemData.events)){events=elemData.events={};}
if(!(eventHandle=elemData.handle)){eventHandle=elemData.handle=function(e){return typeof jQuery!==core_strundefined&&(!e||jQuery.event.triggered!==e.type)?jQuery.event.dispatch.apply(eventHandle.elem,arguments):undefined;};eventHandle.elem=elem;}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join(".")},handleObjIn);if(!(handlers=events[type])){handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){if(elem.addEventListener){elem.addEventListener(type,eventHandle,false);}else if(elem.attachEvent){elem.attachEvent("on"+type,eventHandle);}}}
if(special.add){special.add.call(elem,handleObj);if(!handleObj.handler.guid){handleObj.handler.guid=handler.guid;}}
if(selector){handlers.splice(handlers.delegateCount++,0,handleObj);}else{handlers.push(handleObj);}
jQuery.event.global[type]=true;}
elem=null;},remove:function(elem,types,handler,selector,mappedTypes){var j,handleObj,tmp,origCount,t,events,special,handlers,type,namespaces,origType,elemData=jQuery.hasData(elem)&&jQuery._data(elem);if(!elemData||!(events=elemData.events)){return;}
types=(types||"").match(core_rnotwhite)||[""];t=types.length;while(t--){tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||"").split(".").sort();if(!type){for(type in events){jQuery.event.remove(elem,type+types[t],handler,selector,true);}
continue;}
special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");origCount=j=handlers.length;while(j--){handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==="**"&&handleObj.selector)){handlers.splice(j,1);if(handleObj.selector){handlers.delegateCount--;}
if(special.remove){special.remove.call(elem,handleObj);}}}
if(origCount&&!handlers.length){if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){jQuery.removeEvent(elem,type,elemData.handle);}
delete events[type];}}
if(jQuery.isEmptyObject(events)){delete elemData.handle;jQuery._removeData(elem,"events");}},trigger:function(event,data,elem,onlyHandlers){var handle,ontype,cur,bubbleType,special,tmp,i,eventPath=[elem||document],type=core_hasOwn.call(event,"type")?event.type:event,namespaces=core_hasOwn.call(event,"namespace")?event.namespace.split("."):[];cur=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){return;}
if(rfocusMorph.test(type+jQuery.event.triggered)){return;}
if(type.indexOf(".")>=0){namespaces=type.split(".");type=namespaces.shift();namespaces.sort();}
ontype=type.indexOf(":")<0&&"on"+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==="object"&&event);event.isTrigger=true;event.namespace=namespaces.join(".");event.namespace_re=event.namespace?new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;event.result=undefined;if(!event.target){event.target=elem;}
data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){return;}
if(!onlyHandlers&&!special.noBubble&&!jQuery.isWindow(elem)){bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){cur=cur.parentNode;}
for(;cur;cur=cur.parentNode){eventPath.push(cur);tmp=cur;}
if(tmp===(elem.ownerDocument||document)){eventPath.push(tmp.defaultView||tmp.parentWindow||window);}}
i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){event.type=i>1?bubbleType:special.bindType||type;handle=(jQuery._data(cur,"events")||{})[event.type]&&jQuery._data(cur,"handle");if(handle){handle.apply(cur,data);}
handle=ontype&&cur[ontype];if(handle&&jQuery.acceptData(cur)&&handle.apply&&handle.apply(cur,data)===false){event.preventDefault();}}
event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){if((!special._default||special._default.apply(elem.ownerDocument,data)===false)&&!(type==="click"&&jQuery.nodeName(elem,"a"))&&jQuery.acceptData(elem)){if(ontype&&elem[type]&&!jQuery.isWindow(elem)){tmp=elem[ontype];if(tmp){elem[ontype]=null;}
jQuery.event.triggered=type;try{elem[type]();}catch(e){}
jQuery.event.triggered=undefined;if(tmp){elem[ontype]=tmp;}}}}
return event.result;},dispatch:function(event){event=jQuery.event.fix(event);var i,ret,handleObj,matched,j,handlerQueue=[],args=core_slice.call(arguments),handlers=(jQuery._data(this,"events")||{})[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){return;}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){if(!event.namespace_re||event.namespace_re.test(handleObj.namespace)){event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler)
.apply(matched.elem,args);if(ret!==undefined){if((event.result=ret)===false){event.preventDefault();event.stopPropagation();}}}}}
if(special.postDispatch){special.postDispatch.call(this,event);}
return event.result;},handlers:function(event,handlers){var sel,handleObj,matches,i,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&(!event.button||event.type!=="click")){for(;cur!=this;cur=cur.parentNode||this){if(cur.nodeType===1&&(cur.disabled!==true||event.type!=="click")){matches=[];for(i=0;i<delegateCount;i++){handleObj=handlers[i];sel=handleObj.selector+" ";if(matches[sel]===undefined){matches[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>=0:jQuery.find(sel,this,null,[cur]).length;}
if(matches[sel]){matches.push(handleObj);}}
if(matches.length){handlerQueue.push({elem:cur,handlers:matches});}}}}
if(delegateCount<handlers.length){handlerQueue.push({elem:this,handlers:handlers.slice(delegateCount)});}
return handlerQueue;},fix:function(event){if(event[jQuery.expando]){return event;}
var i,prop,copy,type=event.type,originalEvent=event,fixHook=this.fixHooks[type];if(!fixHook){this.fixHooks[type]=fixHook=rmouseEvent.test(type)?this.mouseHooks:rkeyEvent.test(type)?this.keyHooks:{};}
copy=fixHook.props?this.props.concat(fixHook.props):this.props;event=new jQuery.Event(originalEvent);i=copy.length;while(i--){prop=copy[i];event[prop]=originalEvent[prop];}
if(!event.target){event.target=originalEvent.srcElement||document;}
if(event.target.nodeType===3){event.target=event.target.parentNode;}
event.metaKey=!!event.metaKey;return fixHook.filter?fixHook.filter(event,originalEvent):event;},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(event,original){if(event.which==null){event.which=original.charCode!=null?original.charCode:original.keyCode;}
return event;}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(event,original){var body,eventDoc,doc,button=original.button,fromElement=original.fromElement;if(event.pageX==null&&original.clientX!=null){eventDoc=event.target.ownerDocument||document;doc=eventDoc.documentElement;body=eventDoc.body;event.pageX=original.clientX+(doc&&doc.scrollLeft||body&&body.scrollLeft||0)-(doc&&doc.clientLeft||body&&body.clientLeft||0);event.pageY=original.clientY+(doc&&doc.scrollTop||body&&body.scrollTop||0)-(doc&&doc.clientTop||body&&body.clientTop||0);}
if(!event.relatedTarget&&fromElement){event.relatedTarget=fromElement===event.target?original.toElement:fromElement;}
if(!event.which&&button!==undefined){event.which=(button&1?1:(button&2?3:(button&4?2:0)));}
return event;}},special:{load:{noBubble:true},click:{trigger:function(){if(jQuery.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();return false;}}},focus:{trigger:function(){if(this!==document.activeElement&&this.focus){try{this.focus();return false;}catch(e){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===document.activeElement&&this.blur){this.blur();return false;}},delegateType:"focusout"},beforeunload:{postDispatch:function(event){if(event.result!==undefined){event.originalEvent.returnValue=event.result;}}}},simulate:function(type,elem,event,bubble){var e=jQuery.extend(new jQuery.Event(),event,{type:type,isSimulated:true,originalEvent:{}});if(bubble){jQuery.event.trigger(e,null,elem);}else{jQuery.event.dispatch.call(elem,e);}
if(e.isDefaultPrevented()){event.preventDefault();}}};jQuery.removeEvent=document.removeEventListener?function(elem,type,handle){if(elem.removeEventListener){elem.removeEventListener(type,handle,false);}}:function(elem,type,handle){var name="on"+type;if(elem.detachEvent){if(typeof elem[name]===core_strundefined){elem[name]=null;}
elem.detachEvent(name,handle);}};jQuery.Event=function(src,props){if(!(this instanceof jQuery.Event)){return new jQuery.Event(src,props);}
if(src&&src.type){this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=(src.defaultPrevented||src.returnValue===false||src.getPreventDefault&&src.getPreventDefault())?returnTrue:returnFalse;}else{this.type=src;}
if(props){jQuery.extend(this,props);}
this.timeStamp=src&&src.timeStamp||jQuery.now();this[jQuery.expando]=true;};jQuery.Event.prototype={isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(!e){return;}
if(e.preventDefault){e.preventDefault();}else{e.returnValue=false;}},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(!e){return;}
if(e.stopPropagation){e.stopPropagation();}
e.cancelBubble=true;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=returnTrue;this.stopPropagation();}};jQuery.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(orig,fix){jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||(related!==target&&!jQuery.contains(target,related))){event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;}
return ret;}};});if(!jQuery.support.submitBubbles){jQuery.event.special.submit={setup:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.add(this,"click._submit keypress._submit",function(e){var elem=e.target,form=jQuery.nodeName(elem,"input")||jQuery.nodeName(elem,"button")?elem.form:undefined;if(form&&!jQuery._data(form,"submitBubbles")){jQuery.event.add(form,"submit._submit",function(event){event._submit_bubble=true;});jQuery._data(form,"submitBubbles",true);}});},postDispatch:function(event){if(event._submit_bubble){delete event._submit_bubble;if(this.parentNode&&!event.isTrigger){jQuery.event.simulate("submit",this.parentNode,event,true);}}},teardown:function(){if(jQuery.nodeName(this,"form")){return false;}
jQuery.event.remove(this,"._submit");}};}
if(!jQuery.support.changeBubbles){jQuery.event.special.change={setup:function(){if(rformElems.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){jQuery.event.add(this,"propertychange._change",function(event){if(event.originalEvent.propertyName==="checked"){this._just_changed=true;}});jQuery.event.add(this,"click._change",function(event){if(this._just_changed&&!event.isTrigger){this._just_changed=false;}
jQuery.event.simulate("change",this,event,true);});}
return false;}
jQuery.event.add(this,"beforeactivate._change",function(e){var elem=e.target;if(rformElems.test(elem.nodeName)&&!jQuery._data(elem,"changeBubbles")){jQuery.event.add(elem,"change._change",function(event){if(this.parentNode&&!event.isSimulated&&!event.isTrigger){jQuery.event.simulate("change",this.parentNode,event,true);}});jQuery._data(elem,"changeBubbles",true);}});},handle:function(event){var elem=event.target;if(this!==elem||event.isSimulated||event.isTrigger||(elem.type!=="radio"&&elem.type!=="checkbox")){return event.handleObj.handler.apply(this,arguments);}},teardown:function(){jQuery.event.remove(this,"._change");return!rformElems.test(this.nodeName);}};}
if(!jQuery.support.focusinBubbles){jQuery.each({focus:"focusin",blur:"focusout"},function(orig,fix){var attaches=0,handler=function(event){jQuery.event.simulate(fix,event.target,jQuery.event.fix(event),true);};jQuery.event.special[fix]={setup:function(){if(attaches++===0){document.addEventListener(orig,handler,true);}},teardown:function(){if(--attaches===0){document.removeEventListener(orig,handler,true);}}};});}
jQuery.fn.extend({on:function(types,selector,data,fn,one){var type,origFn;if(typeof types==="object"){if(typeof selector!=="string"){data=data||selector;selector=undefined;}
for(type in types){this.on(type,selector,data,types[type],one);}
return this;}
if(data==null&&fn==null){fn=selector;data=selector=undefined;}else if(fn==null){if(typeof selector==="string"){fn=data;data=undefined;}else{fn=data;data=selector;selector=undefined;}}
if(fn===false){fn=returnFalse;}else if(!fn){return this;}
if(one===1){origFn=fn;fn=function(event){jQuery().off(event);return origFn.apply(this,arguments);};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);}
return this.each(function(){jQuery.event.add(this,types,fn,data,selector);});},one:function(types,selector,data,fn){return this.on(types,selector,data,fn,1);},off:function(types,selector,fn){var handleObj,type;if(types&&types.preventDefault&&types.handleObj){handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+"."+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;}
if(typeof types==="object"){for(type in types){this.off(type,selector,types[type]);}
return this;}
if(selector===false||typeof selector==="function"){fn=selector;selector=undefined;}
if(fn===false){fn=returnFalse;}
return this.each(function(){jQuery.event.remove(this,types,fn,selector);});},bind:function(types,data,fn){return this.on(types,null,data,fn);},unbind:function(types,fn){return this.off(types,null,fn);},delegate:function(selector,types,data,fn){return this.on(types,selector,data,fn);},undelegate:function(selector,types,fn){return arguments.length===1?this.off(selector,"**"):this.off(types,selector||"**",fn);},trigger:function(type,data){return this.each(function(){jQuery.event.trigger(type,data,this);});},triggerHandler:function(type,data){var elem=this[0];if(elem){return jQuery.event.trigger(type,data,elem,true);}}});(function(window,undefined){var i,cachedruns,Expr,getText,isXML,compile,hasDuplicate,outermostContext,setDocument,document,docElem,documentIsXML,rbuggyQSA,rbuggyMatches,matches,contains,sortOrder,expando="sizzle"+-(new Date()),preferredDoc=window.document,support={},dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),strundefined=typeof undefined,MAX_NEGATIVE=1<<31,arr=[],pop=arr.pop,push=arr.push,slice=arr.slice,indexOf=arr.indexOf||function(elem){var i=0,len=this.length;for(;i<len;i++){if(this[i]===elem){return i;}}
return-1;},whitespace="[\\x20\\t\\r\\n\\f]",characterEncoding="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",identifier=characterEncoding.replace("w","w#"),operators="([*^$|!~]?=)",attributes="\\["+whitespace+"*("+characterEncoding+")"+whitespace+
"*(?:"+operators+whitespace+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+identifier+")|)|)"+whitespace+"*\\]",pseudos=":("+characterEncoding+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+attributes.replace(3,8)+")*)|.*)\\)|)",rtrim=new RegExp("^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$","g"),rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),rcombinators=new RegExp("^"+whitespace+"*([\\x20\\t\\r\\n\\f>+~])"+whitespace+"*"),rpseudo=new RegExp(pseudos),ridentifier=new RegExp("^"+identifier+"$"),matchExpr={"ID":new RegExp("^#("+characterEncoding+")"),"CLASS":new RegExp("^\\.("+characterEncoding+")"),"NAME":new RegExp("^\\[name=['\"]?("+characterEncoding+")['\"]?\\]"),"TAG":new RegExp("^("+characterEncoding.replace("w","w*")+")"),"ATTR":new RegExp("^"+attributes),"PSEUDO":new RegExp("^"+pseudos),"CHILD":new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+whitespace+
"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+whitespace+
"*(\\d+)|))"+whitespace+"*\\)|)","i"),"needsContext":new RegExp("^"+whitespace+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+
whitespace+"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")},rsibling=/[\x20\t\r\n\f]*[+~]/,rnative=/^[^{]+\{\s*\[native code/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rescape=/'|\\/g,rattributeQuotes=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,runescape=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,funescape=function(_,escaped){var high="0x"+escaped-0x10000;return high!==high?escaped:high<0?String.fromCharCode(high+0x10000):String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);};try{slice.call(preferredDoc.documentElement.childNodes,0)[0].nodeType;}catch(e){slice=function(i){var elem,results=[];while((elem=this[i++])){results.push(elem);}
return results;};}
function isNative(fn){return rnative.test(fn+"");}
function createCache(){var cache,keys=[];return(cache=function(key,value){if(keys.push(key+=" ")>Expr.cacheLength){delete cache[keys.shift()];}
return(cache[key]=value);});}
function markFunction(fn){fn[expando]=true;return fn;}
function assert(fn){var div=document.createElement("div");try{return fn(div);}catch(e){return false;}finally{div=null;}}
function Sizzle(selector,context,results,seed){var match,elem,m,nodeType,i,groups,old,nid,newContext,newSelector;if((context?context.ownerDocument||context:preferredDoc)!==document){setDocument(context);}
context=context||document;results=results||[];if(!selector||typeof selector!=="string"){return results;}
if((nodeType=context.nodeType)!==1&&nodeType!==9){return[];}
if(!documentIsXML&&!seed){if((match=rquickExpr.exec(selector))){if((m=match[1])){if(nodeType===9){elem=context.getElementById(m);if(elem&&elem.parentNode){if(elem.id===m){results.push(elem);return results;}}else{return results;}}else{if(context.ownerDocument&&(elem=context.ownerDocument.getElementById(m))&&contains(context,elem)&&elem.id===m){results.push(elem);return results;}}}else if(match[2]){push.apply(results,slice.call(context.getElementsByTagName(selector),0));return results;}else if((m=match[3])&&support.getByClassName&&context.getElementsByClassName){push.apply(results,slice.call(context.getElementsByClassName(m),0));return results;}}
if(support.qsa&&!rbuggyQSA.test(selector)){old=true;nid=expando;newContext=context;newSelector=nodeType===9&&selector;if(nodeType===1&&context.nodeName.toLowerCase()!=="object"){groups=tokenize(selector);if((old=context.getAttribute("id"))){nid=old.replace(rescape,"\\$&");}else{context.setAttribute("id",nid);}
nid="[id='"+nid+"'] ";i=groups.length;while(i--){groups[i]=nid+toSelector(groups[i]);}
newContext=rsibling.test(selector)&&context.parentNode||context;newSelector=groups.join(",");}
if(newSelector){try{push.apply(results,slice.call(newContext.querySelectorAll(newSelector),0));return results;}catch(qsaError){}finally{if(!old){context.removeAttribute("id");}}}}}
return select(selector.replace(rtrim,"$1"),context,results,seed);}
isXML=Sizzle.isXML=function(elem){var documentElement=elem&&(elem.ownerDocument||elem).documentElement;return documentElement?documentElement.nodeName!=="HTML":false;};setDocument=Sizzle.setDocument=function(node){var doc=node?node.ownerDocument||node:preferredDoc;if(doc===document||doc.nodeType!==9||!doc.documentElement){return document;}
document=doc;docElem=doc.documentElement;documentIsXML=isXML(doc);support.tagNameNoComments=assert(function(div){div.appendChild(doc.createComment(""));return!div.getElementsByTagName("*").length;});support.attributes=assert(function(div){div.innerHTML="<select></select>";var type=typeof div.lastChild.getAttribute("multiple");return type!=="boolean"&&type!=="string";});support.getByClassName=assert(function(div){div.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!div.getElementsByClassName||!div.getElementsByClassName("e").length){return false;}
div.lastChild.className="e";return div.getElementsByClassName("e").length===2;});support.getByName=assert(function(div){div.id=expando+0;div.innerHTML="<a name='"+expando+"'></a><div name='"+expando+"'></div>";docElem.insertBefore(div,docElem.firstChild);var pass=doc.getElementsByName&&doc.getElementsByName(expando).length===2+
doc.getElementsByName(expando+0).length;support.getIdNotName=!doc.getElementById(expando);docElem.removeChild(div);return pass;});Expr.attrHandle=assert(function(div){div.innerHTML="<a href='#'></a>";return div.firstChild&&typeof div.firstChild.getAttribute!==strundefined&&div.firstChild.getAttribute("href")==="#";})?{}:{"href":function(elem){return elem.getAttribute("href",2);},"type":function(elem){return elem.getAttribute("type");}};if(support.getIdNotName){Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&!documentIsXML){var m=context.getElementById(id);return m&&m.parentNode?[m]:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){return elem.getAttribute("id")===attrId;};};}else{Expr.find["ID"]=function(id,context){if(typeof context.getElementById!==strundefined&&!documentIsXML){var m=context.getElementById(id);return m?m.id===id||typeof m.getAttributeNode!==strundefined&&m.getAttributeNode("id").value===id?[m]:undefined:[];}};Expr.filter["ID"]=function(id){var attrId=id.replace(runescape,funescape);return function(elem){var node=typeof elem.getAttributeNode!==strundefined&&elem.getAttributeNode("id");return node&&node.value===attrId;};};}
Expr.find["TAG"]=support.tagNameNoComments?function(tag,context){if(typeof context.getElementsByTagName!==strundefined){return context.getElementsByTagName(tag);}}:function(tag,context){var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==="*"){while((elem=results[i++])){if(elem.nodeType===1){tmp.push(elem);}}
return tmp;}
return results;};Expr.find["NAME"]=support.getByName&&function(tag,context){if(typeof context.getElementsByName!==strundefined){return context.getElementsByName(name);}};Expr.find["CLASS"]=support.getByClassName&&function(className,context){if(typeof context.getElementsByClassName!==strundefined&&!documentIsXML){return context.getElementsByClassName(className);}};rbuggyMatches=[];rbuggyQSA=[":focus"];if((support.qsa=isNative(doc.querySelectorAll))){assert(function(div){div.innerHTML="<select><option selected=''></option></select>";if(!div.querySelectorAll("[selected]").length){rbuggyQSA.push("\\["+whitespace+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)");}
if(!div.querySelectorAll(":checked").length){rbuggyQSA.push(":checked");}});assert(function(div){div.innerHTML="<input type='hidden' i=''/>";if(div.querySelectorAll("[i^='']").length){rbuggyQSA.push("[*^$]="+whitespace+"*(?:\"\"|'')");}
if(!div.querySelectorAll(":enabled").length){rbuggyQSA.push(":enabled",":disabled");}
div.querySelectorAll("*,:x");rbuggyQSA.push(",.*:");});}
if((support.matchesSelector=isNative((matches=docElem.matchesSelector||docElem.mozMatchesSelector||docElem.webkitMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)))){assert(function(div){support.disconnectedMatch=matches.call(div,"div");matches.call(div,"[s!='']:x");rbuggyMatches.push("!=",pseudos);});}
rbuggyQSA=new RegExp(rbuggyQSA.join("|"));rbuggyMatches=new RegExp(rbuggyMatches.join("|"));contains=isNative(docElem.contains)||docElem.compareDocumentPosition?function(a,b){var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));}:function(a,b){if(b){while((b=b.parentNode)){if(b===a){return true;}}}
return false;};sortOrder=docElem.compareDocumentPosition?function(a,b){var compare;if(a===b){hasDuplicate=true;return 0;}
if((compare=b.compareDocumentPosition&&a.compareDocumentPosition&&a.compareDocumentPosition(b))){if(compare&1||a.parentNode&&a.parentNode.nodeType===11){if(a===doc||contains(preferredDoc,a)){return-1;}
if(b===doc||contains(preferredDoc,b)){return 1;}
return 0;}
return compare&4?-1:1;}
return a.compareDocumentPosition?-1:1;}:function(a,b){var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(a===b){hasDuplicate=true;return 0;}else if(!aup||!bup){return a===doc?-1:b===doc?1:aup?-1:bup?1:0;}else if(aup===bup){return siblingCheck(a,b);}
cur=a;while((cur=cur.parentNode)){ap.unshift(cur);}
cur=b;while((cur=cur.parentNode)){bp.unshift(cur);}
while(ap[i]===bp[i]){i++;}
return i?siblingCheck(ap[i],bp[i]):ap[i]===preferredDoc?-1:bp[i]===preferredDoc?1:0;};hasDuplicate=false;[0,0].sort(sortOrder);support.detectDuplicates=hasDuplicate;return document;};Sizzle.matches=function(expr,elements){return Sizzle(expr,null,null,elements);};Sizzle.matchesSelector=function(elem,expr){if((elem.ownerDocument||elem)!==document){setDocument(elem);}
expr=expr.replace(rattributeQuotes,"='$1']");if(support.matchesSelector&&!documentIsXML&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&!rbuggyQSA.test(expr)){try{var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){return ret;}}catch(e){}}
return Sizzle(expr,document,null,[elem]).length>0;};Sizzle.contains=function(context,elem){if((context.ownerDocument||context)!==document){setDocument(context);}
return contains(context,elem);};Sizzle.attr=function(elem,name){var val;if((elem.ownerDocument||elem)!==document){setDocument(elem);}
if(!documentIsXML){name=name.toLowerCase();}
if((val=Expr.attrHandle[name])){return val(elem);}
if(documentIsXML||support.attributes){return elem.getAttribute(name);}
return((val=elem.getAttributeNode(name))||elem.getAttribute(name))&&elem[name]===true?name:val&&val.specified?val.value:null;};Sizzle.error=function(msg){throw new Error("Syntax error, unrecognized expression: "+msg);};Sizzle.uniqueSort=function(results){var elem,duplicates=[],i=1,j=0;hasDuplicate=!support.detectDuplicates;results.sort(sortOrder);if(hasDuplicate){for(;(elem=results[i]);i++){if(elem===results[i-1]){j=duplicates.push(i);}}
while(j--){results.splice(duplicates[j],1);}}
return results;};function siblingCheck(a,b){var cur=b&&a,diff=cur&&(~b.sourceIndex||MAX_NEGATIVE)-(~a.sourceIndex||MAX_NEGATIVE);if(diff){return diff;}
if(cur){while((cur=cur.nextSibling)){if(cur===b){return-1;}}}
return a?1:-1;}
function createInputPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type===type;};}
function createButtonPseudo(type){return function(elem){var name=elem.nodeName.toLowerCase();return(name==="input"||name==="button")&&elem.type===type;};}
function createPositionalPseudo(fn){return markFunction(function(argument){argument=+argument;return markFunction(function(seed,matches){var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){if(seed[(j=matchIndexes[i])]){seed[j]=!(matches[j]=seed[j]);}}});});}
getText=Sizzle.getText=function(elem){var node,ret="",i=0,nodeType=elem.nodeType;if(!nodeType){for(;(node=elem[i]);i++){ret+=getText(node);}}else if(nodeType===1||nodeType===9||nodeType===11){if(typeof elem.textContent==="string"){return elem.textContent;}else{for(elem=elem.firstChild;elem;elem=elem.nextSibling){ret+=getText(elem);}}}else if(nodeType===3||nodeType===4){return elem.nodeValue;}
return ret;};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{"ATTR":function(match){match[1]=match[1].replace(runescape,funescape);match[3]=(match[4]||match[5]||"").replace(runescape,funescape);if(match[2]==="~="){match[3]=" "+match[3]+" ";}
return match.slice(0,4);},"CHILD":function(match){match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==="nth"){if(!match[3]){Sizzle.error(match[0]);}
match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==="even"||match[3]==="odd"));match[5]=+((match[7]+match[8])||match[3]==="odd");}else if(match[3]){Sizzle.error(match[0]);}
return match;},"PSEUDO":function(match){var excess,unquoted=!match[5]&&match[2];if(matchExpr["CHILD"].test(match[0])){return null;}
if(match[4]){match[2]=match[4];}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);}
return match.slice(0,3);}},filter:{"TAG":function(nodeName){if(nodeName==="*"){return function(){return true;};}
nodeName=nodeName.replace(runescape,funescape).toLowerCase();return function(elem){return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;};},"CLASS":function(className){var pattern=classCache[className+" "];return pattern||(pattern=new RegExp("(^|"+whitespace+")"+className+"("+whitespace+"|$)"))&&classCache(className,function(elem){return pattern.test(elem.className||(typeof elem.getAttribute!==strundefined&&elem.getAttribute("class"))||"");});},"ATTR":function(name,operator,check){return function(elem){var result=Sizzle.attr(elem,name);if(result==null){return operator==="!=";}
if(!operator){return true;}
result+="";return operator==="="?result===check:operator==="!="?result!==check:operator==="^="?check&&result.indexOf(check)===0:operator==="*="?check&&result.indexOf(check)>-1:operator==="$="?check&&result.slice(-check.length)===check:operator==="~="?(" "+result+" ").indexOf(check)>-1:operator==="|="?result===check||result.slice(0,check.length+1)===check+"-":false;};},"CHILD":function(type,what,argument,first,last){var simple=type.slice(0,3)!=="nth",forward=type.slice(-4)!=="last",ofType=what==="of-type";return first===1&&last===0?function(elem){return!!elem.parentNode;}:function(elem,context,xml){var cache,outerCache,node,diff,nodeIndex,start,dir=simple!==forward?"nextSibling":"previousSibling",parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType;if(parent){if(simple){while(dir){node=elem;while((node=node[dir])){if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){return false;}}
start=dir=type==="only"&&!start&&"nextSibling";}
return true;}
start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){outerCache=parent[expando]||(parent[expando]={});cache=outerCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=cache[0]===dirruns&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if(node.nodeType===1&&++diff&&node===elem){outerCache[type]=[dirruns,nodeIndex,diff];break;}}}else if(useCache&&(cache=(elem[expando]||(elem[expando]={}))[type])&&cache[0]===dirruns){diff=cache[1];}else{while((node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop())){if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){if(useCache){(node[expando]||(node[expando]={}))[type]=[dirruns,diff];}
if(node===elem){break;}}}}
diff-=last;return diff===first||(diff%first===0&&diff/first>=0);}};},"PSEUDO":function(pseudo,argument){var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error("unsupported pseudo: "+pseudo);if(fn[expando]){return fn(argument);}
if(fn.length>1){args=[pseudo,pseudo,"",argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){var idx,matched=fn(seed,argument),i=matched.length;while(i--){idx=indexOf.call(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);}}):function(elem){return fn(elem,0,args);};}
return fn;}},pseudos:{"not":markFunction(function(selector){var input=[],results=[],matcher=compile(selector.replace(rtrim,"$1"));return matcher[expando]?markFunction(function(seed,matches,context,xml){var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){if((elem=unmatched[i])){seed[i]=!(matches[i]=elem);}}}):function(elem,context,xml){input[0]=elem;matcher(input,null,xml,results);return!results.pop();};}),"has":markFunction(function(selector){return function(elem){return Sizzle(selector,elem).length>0;};}),"contains":markFunction(function(text){return function(elem){return(elem.textContent||elem.innerText||getText(elem)).indexOf(text)>-1;};}),"lang":markFunction(function(lang){if(!ridentifier.test(lang||"")){Sizzle.error("unsupported lang: "+lang);}
lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){var elemLang;do{if((elemLang=documentIsXML?elem.getAttribute("xml:lang")||elem.getAttribute("lang"):elem.lang)){elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+"-")===0;}}while((elem=elem.parentNode)&&elem.nodeType===1);return false;};}),"target":function(elem){var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;},"root":function(elem){return elem===docElem;},"focus":function(elem){return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);},"enabled":function(elem){return elem.disabled===false;},"disabled":function(elem){return elem.disabled===true;},"checked":function(elem){var nodeName=elem.nodeName.toLowerCase();return(nodeName==="input"&&!!elem.checked)||(nodeName==="option"&&!!elem.selected);},"selected":function(elem){if(elem.parentNode){elem.parentNode.selectedIndex;}
return elem.selected===true;},"empty":function(elem){for(elem=elem.firstChild;elem;elem=elem.nextSibling){if(elem.nodeName>"@"||elem.nodeType===3||elem.nodeType===4){return false;}}
return true;},"parent":function(elem){return!Expr.pseudos["empty"](elem);},"header":function(elem){return rheader.test(elem.nodeName);},"input":function(elem){return rinputs.test(elem.nodeName);},"button":function(elem){var name=elem.nodeName.toLowerCase();return name==="input"&&elem.type==="button"||name==="button";},"text":function(elem){var attr;return elem.nodeName.toLowerCase()==="input"&&elem.type==="text"&&((attr=elem.getAttribute("type"))==null||attr.toLowerCase()===elem.type);},"first":createPositionalPseudo(function(){return[0];}),"last":createPositionalPseudo(function(matchIndexes,length){return[length-1];}),"eq":createPositionalPseudo(function(matchIndexes,length,argument){return[argument<0?argument+length:argument];}),"even":createPositionalPseudo(function(matchIndexes,length){var i=0;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"odd":createPositionalPseudo(function(matchIndexes,length){var i=1;for(;i<length;i+=2){matchIndexes.push(i);}
return matchIndexes;}),"lt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;--i>=0;){matchIndexes.push(i);}
return matchIndexes;}),"gt":createPositionalPseudo(function(matchIndexes,length,argument){var i=argument<0?argument+length:argument;for(;++i<length;){matchIndexes.push(i);}
return matchIndexes;})}};for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){Expr.pseudos[i]=createInputPseudo(i);}
for(i in{submit:true,reset:true}){Expr.pseudos[i]=createButtonPseudo(i);}
function tokenize(selector,parseOnly){var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+" "];if(cached){return parseOnly?0:cached.slice(0);}
soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){if(!matched||(match=rcomma.exec(soFar))){if(match){soFar=soFar.slice(match[0].length)||soFar;}
groups.push(tokens=[]);}
matched=false;if((match=rcombinators.exec(soFar))){matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim," ")});soFar=soFar.slice(matched.length);}
for(type in Expr.filter){if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);}}
if(!matched){break;}}
return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);}
function toSelector(tokens){var i=0,len=tokens.length,selector="";for(;i<len;i++){selector+=tokens[i].value;}
return selector;}
function addCombinator(matcher,combinator,base){var dir=combinator.dir,checkNonElements=base&&dir==="parentNode",doneName=done++;return combinator.first?function(elem,context,xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){return matcher(elem,context,xml);}}}:function(elem,context,xml){var data,cache,outerCache,dirkey=dirruns+" "+doneName;if(xml){while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){if(matcher(elem,context,xml)){return true;}}}}else{while((elem=elem[dir])){if(elem.nodeType===1||checkNonElements){outerCache=elem[expando]||(elem[expando]={});if((cache=outerCache[dir])&&cache[0]===dirkey){if((data=cache[1])===true||data===cachedruns){return data===true;}}else{cache=outerCache[dir]=[dirkey];cache[1]=matcher(elem,context,xml)||cachedruns;if(cache[1]===true){return true;}}}}}};}
function elementMatcher(matchers){return matchers.length>1?function(elem,context,xml){var i=matchers.length;while(i--){if(!matchers[i](elem,context,xml)){return false;}}
return true;}:matchers[0];}
function condense(unmatched,map,filter,context,xml){var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){if((elem=unmatched[i])){if(!filter||filter(elem,context,xml)){newUnmatched.push(elem);if(mapped){map.push(i);}}}}
return newUnmatched;}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){if(postFilter&&!postFilter[expando]){postFilter=setMatcher(postFilter);}
if(postFinder&&!postFinder[expando]){postFinder=setMatcher(postFinder,postSelector);}
return markFunction(function(seed,results,context,xml){var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||"*",context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){matcher(matcherIn,matcherOut,context,xml);}
if(postFilter){temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){if((elem=temp[i])){matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);}}}
if(seed){if(postFinder||preFilter){if(postFinder){temp=[];i=matcherOut.length;while(i--){if((elem=matcherOut[i])){temp.push((matcherIn[i]=elem));}}
postFinder(null,(matcherOut=[]),temp,xml);}
i=matcherOut.length;while(i--){if((elem=matcherOut[i])&&(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){seed[temp]=!(results[temp]=elem);}}}}else{matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){postFinder(null,results,matcherOut,xml);}else{push.apply(results,matcherOut);}}});}
function matcherFromTokens(tokens){var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[" "],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){return elem===checkContext;},implicitRelative,true),matchAnyContext=addCombinator(function(elem){return indexOf.call(checkContext,elem)>-1;},implicitRelative,true),matchers=[function(elem,context,xml){return(!leadingRelative&&(xml||context!==outermostContext))||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));}];for(;i<len;i++){if((matcher=Expr.relative[tokens[i].type])){matchers=[addCombinator(elementMatcher(matchers),matcher)];}else{matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){j=++i;for(;j<len;j++){if(Expr.relative[tokens[j].type]){break;}}
return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1)).replace(rtrim,"$1"),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens((tokens=tokens.slice(j))),j<len&&toSelector(tokens));}
matchers.push(matcher);}}
return elementMatcher(matchers);}
function matcherFromGroupMatchers(elementMatchers,setMatchers){var matcherCachedRuns=0,bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,expandContext){var elem,j,matcher,setMatched=[],matchedCount=0,i="0",unmatched=seed&&[],outermost=expandContext!=null,contextBackup=outermostContext,elems=seed||byElement&&Expr.find["TAG"]("*",expandContext&&context.parentNode||context),dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1);if(outermost){outermostContext=context!==document&&context;cachedruns=matcherCachedRuns;}
for(;(elem=elems[i])!=null;i++){if(byElement&&elem){j=0;while((matcher=elementMatchers[j++])){if(matcher(elem,context,xml)){results.push(elem);break;}}
if(outermost){dirruns=dirrunsUnique;cachedruns=++matcherCachedRuns;}}
if(bySet){if((elem=!matcher&&elem)){matchedCount--;}
if(seed){unmatched.push(elem);}}}
matchedCount+=i;if(bySet&&i!==matchedCount){j=0;while((matcher=setMatchers[j++])){matcher(unmatched,setMatched,context,xml);}
if(seed){if(matchedCount>0){while(i--){if(!(unmatched[i]||setMatched[i])){setMatched[i]=pop.call(results);}}}
setMatched=condense(setMatched);}
push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&(matchedCount+setMatchers.length)>1){Sizzle.uniqueSort(results);}}
if(outermost){dirruns=dirrunsUnique;outermostContext=contextBackup;}
return unmatched;};return bySet?markFunction(superMatcher):superMatcher;}
compile=Sizzle.compile=function(selector,group){var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+" "];if(!cached){if(!group){group=tokenize(selector);}
i=group.length;while(i--){cached=matcherFromTokens(group[i]);if(cached[expando]){setMatchers.push(cached);}else{elementMatchers.push(cached);}}
cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));}
return cached;};function multipleContexts(selector,contexts,results){var i=0,len=contexts.length;for(;i<len;i++){Sizzle(selector,contexts[i],results);}
return results;}
function select(selector,context,results,seed){var i,tokens,token,type,find,match=tokenize(selector);if(!seed){if(match.length===1){tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==="ID"&&context.nodeType===9&&!documentIsXML&&Expr.relative[tokens[1].type]){context=Expr.find["ID"](token.matches[0].replace(runescape,funescape),context)[0];if(!context){return results;}
selector=selector.slice(tokens.shift().value.length);}
i=matchExpr["needsContext"].test(selector)?0:tokens.length;while(i--){token=tokens[i];if(Expr.relative[(type=token.type)]){break;}
if((find=Expr.find[type])){if((seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&context.parentNode||context))){tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){push.apply(results,slice.call(seed,0));return results;}
break;}}}}}
compile(selector,match)(seed,context,documentIsXML,results,rsibling.test(selector));return results;}
Expr.pseudos["nth"]=Expr.pseudos["eq"];function setFilters(){}
Expr.filters=setFilters.prototype=Expr.pseudos;Expr.setFilters=new setFilters();setDocument();Sizzle.attr=jQuery.attr;jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[":"]=jQuery.expr.pseudos;jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;})(window);var runtil=/Until$/,rparentsprev=/^(?:parents|prev(?:Until|All))/,isSimple=/^.[^:#\[\.,]*$/,rneedsContext=jQuery.expr.match.needsContext,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({find:function(selector){var i,ret,self,len=this.length;if(typeof selector!=="string"){self=this;return this.pushStack(jQuery(selector).filter(function(){for(i=0;i<len;i++){if(jQuery.contains(self[i],this)){return true;}}}));}
ret=[];for(i=0;i<len;i++){jQuery.find(selector,this[i],ret);}
ret=this.pushStack(len>1?jQuery.unique(ret):ret);ret.selector=(this.selector?this.selector+" ":"")+selector;return ret;},has:function(target){var i,targets=jQuery(target,this),len=targets.length;return this.filter(function(){for(i=0;i<len;i++){if(jQuery.contains(this,targets[i])){return true;}}});},not:function(selector){return this.pushStack(winnow(this,selector,false));},filter:function(selector){return this.pushStack(winnow(this,selector,true));},is:function(selector){return!!selector&&(typeof selector==="string"?rneedsContext.test(selector)?jQuery(selector,this.context).index(this[0])>=0:jQuery.filter(selector,this).length>0:this.filter(selector).length>0);},closest:function(selectors,context){var cur,i=0,l=this.length,ret=[],pos=rneedsContext.test(selectors)||typeof selectors!=="string"?jQuery(selectors,context||this.context):0;for(;i<l;i++){cur=this[i];while(cur&&cur.ownerDocument&&cur!==context&&cur.nodeType!==11){if(pos?pos.index(cur)>-1:jQuery.find.matchesSelector(cur,selectors)){ret.push(cur);break;}
cur=cur.parentNode;}}
return this.pushStack(ret.length>1?jQuery.unique(ret):ret);},index:function(elem){if(!elem){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;}
if(typeof elem==="string"){return jQuery.inArray(this[0],jQuery(elem));}
return jQuery.inArray(elem.jquery?elem[0]:elem,this);},add:function(selector,context){var set=typeof selector==="string"?jQuery(selector,context):jQuery.makeArray(selector&&selector.nodeType?[selector]:selector),all=jQuery.merge(this.get(),set);return this.pushStack(jQuery.unique(all));},addBack:function(selector){return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));}});jQuery.fn.andSelf=jQuery.fn.addBack;function sibling(cur,dir){do{cur=cur[dir];}while(cur&&cur.nodeType!==1);return cur;}
jQuery.each({parent:function(elem){var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;},parents:function(elem){return jQuery.dir(elem,"parentNode");},parentsUntil:function(elem,i,until){return jQuery.dir(elem,"parentNode",until);},next:function(elem){return sibling(elem,"nextSibling");},prev:function(elem){return sibling(elem,"previousSibling");},nextAll:function(elem){return jQuery.dir(elem,"nextSibling");},prevAll:function(elem){return jQuery.dir(elem,"previousSibling");},nextUntil:function(elem,i,until){return jQuery.dir(elem,"nextSibling",until);},prevUntil:function(elem,i,until){return jQuery.dir(elem,"previousSibling",until);},siblings:function(elem){return jQuery.sibling((elem.parentNode||{}).firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,"iframe")?elem.contentDocument||elem.contentWindow.document:jQuery.merge([],elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(until,selector){var ret=jQuery.map(this,fn,until);if(!runtil.test(name)){selector=until;}
if(selector&&typeof selector==="string"){ret=jQuery.filter(selector,ret);}
ret=this.length>1&&!guaranteedUnique[name]?jQuery.unique(ret):ret;if(this.length>1&&rparentsprev.test(name)){ret=ret.reverse();}
return this.pushStack(ret);};});jQuery.extend({filter:function(expr,elems,not){if(not){expr=":not("+expr+")";}
return elems.length===1?jQuery.find.matchesSelector(elems[0],expr)?[elems[0]]:[]:jQuery.find.matches(expr,elems);},dir:function(elem,dir,until){var matched=[],cur=elem[dir];while(cur&&cur.nodeType!==9&&(until===undefined||cur.nodeType!==1||!jQuery(cur).is(until))){if(cur.nodeType===1){matched.push(cur);}
cur=cur[dir];}
return matched;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType===1&&n!==elem){r.push(n);}}
return r;}});function winnow(elements,qualifier,keep){qualifier=qualifier||0;if(jQuery.isFunction(qualifier)){return jQuery.grep(elements,function(elem,i){var retVal=!!qualifier.call(elem,i,elem);return retVal===keep;});}else if(qualifier.nodeType){return jQuery.grep(elements,function(elem){return(elem===qualifier)===keep;});}else if(typeof qualifier==="string"){var filtered=jQuery.grep(elements,function(elem){return elem.nodeType===1;});if(isSimple.test(qualifier)){return jQuery.filter(qualifier,filtered,!keep);}else{qualifier=jQuery.filter(qualifier,filtered);}}
return jQuery.grep(elements,function(elem){return(jQuery.inArray(elem,qualifier)>=0)===keep;});}
function createSafeFragment(document){var list=nodeNames.split("|"),safeFrag=document.createDocumentFragment();if(safeFrag.createElement){while(list.length){safeFrag.createElement(list.pop());}}
return safeFrag;}
var nodeNames="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+
"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",rinlinejQuery=/ jQuery\d+="(?:null|\d+)"/g,rnoshimcache=new RegExp("<(?:"+nodeNames+")[\\s/>]","i"),rleadingWhitespace=/^\s+/,rxhtmlTag=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,rtagName=/<([\w:]+)/,rtbody=/<tbody/i,rhtml=/<|&#?\w+;/,rnoInnerhtml=/<(?:script|style|link)/i,manipulation_rcheckableType=/^(?:checkbox|radio)$/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rscriptType=/^$|\/(?:java|ecma)script/i,rscriptTypeMasked=/^true\/(.*)/,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,wrapMap={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:jQuery.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},safeFragment=createSafeFragment(document),fragmentDiv=safeFragment.appendChild(document.createElement("div"));wrapMap.optgroup=wrapMap.option;wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;jQuery.fn.extend({text:function(value){return jQuery.access(this,function(value){return value===undefined?jQuery.text(this):this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(value));},null,value,arguments.length);},wrapAll:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapAll(html.call(this,i));});}
if(this[0]){var wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){wrap.insertBefore(this[0]);}
wrap.map(function(){var elem=this;while(elem.firstChild&&elem.firstChild.nodeType===1){elem=elem.firstChild;}
return elem;}).append(this);}
return this;},wrapInner:function(html){if(jQuery.isFunction(html)){return this.each(function(i){jQuery(this).wrapInner(html.call(this,i));});}
return this.each(function(){var self=jQuery(this),contents=self.contents();if(contents.length){contents.wrapAll(html);}else{self.append(html);}});},wrap:function(html){var isFunction=jQuery.isFunction(html);return this.each(function(i){jQuery(this).wrapAll(isFunction?html.call(this,i):html);});},unwrap:function(){return this.parent().each(function(){if(!jQuery.nodeName(this,"body")){jQuery(this).replaceWith(this.childNodes);}}).end();},append:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.appendChild(elem);}});},prepend:function(){return this.domManip(arguments,true,function(elem){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.insertBefore(elem,this.firstChild);}});},before:function(){return this.domManip(arguments,false,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this);}});},after:function(){return this.domManip(arguments,false,function(elem){if(this.parentNode){this.parentNode.insertBefore(elem,this.nextSibling);}});},remove:function(selector,keepData){var elem,i=0;for(;(elem=this[i])!=null;i++){if(!selector||jQuery.filter(selector,[elem]).length>0){if(!keepData&&elem.nodeType===1){jQuery.cleanData(getAll(elem));}
if(elem.parentNode){if(keepData&&jQuery.contains(elem.ownerDocument,elem)){setGlobalEval(getAll(elem,"script"));}
elem.parentNode.removeChild(elem);}}}
return this;},empty:function(){var elem,i=0;for(;(elem=this[i])!=null;i++){if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));}
while(elem.firstChild){elem.removeChild(elem.firstChild);}
if(elem.options&&jQuery.nodeName(elem,"select")){elem.options.length=0;}}
return this;},clone:function(dataAndEvents,deepDataAndEvents){dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){return jQuery.clone(this,dataAndEvents,deepDataAndEvents);});},html:function(value){return jQuery.access(this,function(value){var elem=this[0]||{},i=0,l=this.length;if(value===undefined){return elem.nodeType===1?elem.innerHTML.replace(rinlinejQuery,""):undefined;}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&(jQuery.support.htmlSerialize||!rnoshimcache.test(value))&&(jQuery.support.leadingWhitespace||!rleadingWhitespace.test(value))&&!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){value=value.replace(rxhtmlTag,"<$1></$2>");try{for(;i<l;i++){elem=this[i]||{};if(elem.nodeType===1){jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;}}
elem=0;}catch(e){}}
if(elem){this.empty().append(value);}},null,value,arguments.length);},replaceWith:function(value){var isFunc=jQuery.isFunction(value);if(!isFunc&&typeof value!=="string"){value=jQuery(value).not(this).detach();}
return this.domManip([value],true,function(elem){var next=this.nextSibling,parent=this.parentNode;if(parent){jQuery(this).remove();parent.insertBefore(elem,next);}});},detach:function(selector){return this.remove(selector,true);},domManip:function(args,table,callback){args=core_concat.apply([],args);var first,node,hasScripts,scripts,doc,fragment,i=0,l=this.length,set=this,iNoClone=l-1,value=args[0],isFunction=jQuery.isFunction(value);if(isFunction||!(l<=1||typeof value!=="string"||jQuery.support.checkClone||!rchecked.test(value))){return this.each(function(index){var self=set.eq(index);if(isFunction){args[0]=value.call(this,index,table?self.html():undefined);}
self.domManip(args,table,callback);});}
if(l){fragment=jQuery.buildFragment(args,this[0].ownerDocument,false,this);first=fragment.firstChild;if(fragment.childNodes.length===1){fragment=first;}
if(first){table=table&&jQuery.nodeName(first,"tr");scripts=jQuery.map(getAll(fragment,"script"),disableScript);hasScripts=scripts.length;for(;i<l;i++){node=fragment;if(i!==iNoClone){node=jQuery.clone(node,true,true);if(hasScripts){jQuery.merge(scripts,getAll(node,"script"));}}
callback.call(table&&jQuery.nodeName(this[i],"table")?findOrAppend(this[i],"tbody"):this[i],node,i);}
if(hasScripts){doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){node=scripts[i];if(rscriptType.test(node.type||"")&&!jQuery._data(node,"globalEval")&&jQuery.contains(doc,node)){if(node.src){jQuery.ajax({url:node.src,type:"GET",dataType:"script",async:false,global:false,"throws":true});}else{jQuery.globalEval((node.text||node.textContent||node.innerHTML||"").replace(rcleanScript,""));}}}}
fragment=first=null;}}
return this;}});function findOrAppend(elem,tag){return elem.getElementsByTagName(tag)[0]||elem.appendChild(elem.ownerDocument.createElement(tag));}
function disableScript(elem){var attr=elem.getAttributeNode("type");elem.type=(attr&&attr.specified)+"/"+elem.type;return elem;}
function restoreScript(elem){var match=rscriptTypeMasked.exec(elem.type);if(match){elem.type=match[1];}else{elem.removeAttribute("type");}
return elem;}
function setGlobalEval(elems,refElements){var elem,i=0;for(;(elem=elems[i])!=null;i++){jQuery._data(elem,"globalEval",!refElements||jQuery._data(refElements[i],"globalEval"));}}
function cloneCopyEvent(src,dest){if(dest.nodeType!==1||!jQuery.hasData(src)){return;}
var type,i,l,oldData=jQuery._data(src),curData=jQuery._data(dest,oldData),events=oldData.events;if(events){delete curData.handle;curData.events={};for(type in events){for(i=0,l=events[type].length;i<l;i++){jQuery.event.add(dest,type,events[type][i]);}}}
if(curData.data){curData.data=jQuery.extend({},curData.data);}}
function fixCloneNodeIssues(src,dest){var nodeName,e,data;if(dest.nodeType!==1){return;}
nodeName=dest.nodeName.toLowerCase();if(!jQuery.support.noCloneEvent&&dest[jQuery.expando]){data=jQuery._data(dest);for(e in data.events){jQuery.removeEvent(dest,e,data.handle);}
dest.removeAttribute(jQuery.expando);}
if(nodeName==="script"&&dest.text!==src.text){disableScript(dest).text=src.text;restoreScript(dest);}else if(nodeName==="object"){if(dest.parentNode){dest.outerHTML=src.outerHTML;}
if(jQuery.support.html5Clone&&(src.innerHTML&&!jQuery.trim(dest.innerHTML))){dest.innerHTML=src.innerHTML;}}else if(nodeName==="input"&&manipulation_rcheckableType.test(src.type)){dest.defaultChecked=dest.checked=src.checked;if(dest.value!==src.value){dest.value=src.value;}}else if(nodeName==="option"){dest.defaultSelected=dest.selected=src.defaultSelected;}else if(nodeName==="input"||nodeName==="textarea"){dest.defaultValue=src.defaultValue;}}
jQuery.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(name,original){jQuery.fn[name]=function(selector){var elems,i=0,ret=[],insert=jQuery(selector),last=insert.length-1;for(;i<=last;i++){elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);core_push.apply(ret,elems.get());}
return this.pushStack(ret);};});function getAll(context,tag){var elems,elem,i=0,found=typeof context.getElementsByTagName!==core_strundefined?context.getElementsByTagName(tag||"*"):typeof context.querySelectorAll!==core_strundefined?context.querySelectorAll(tag||"*"):undefined;if(!found){for(found=[],elems=context.childNodes||context;(elem=elems[i])!=null;i++){if(!tag||jQuery.nodeName(elem,tag)){found.push(elem);}else{jQuery.merge(found,getAll(elem,tag));}}}
return tag===undefined||tag&&jQuery.nodeName(context,tag)?jQuery.merge([context],found):found;}
function fixDefaultChecked(elem){if(manipulation_rcheckableType.test(elem.type)){elem.defaultChecked=elem.checked;}}
jQuery.extend({clone:function(elem,dataAndEvents,deepDataAndEvents){var destElements,node,clone,i,srcElements,inPage=jQuery.contains(elem.ownerDocument,elem);if(jQuery.support.html5Clone||jQuery.isXMLDoc(elem)||!rnoshimcache.test("<"+elem.nodeName+">")){clone=elem.cloneNode(true);}else{fragmentDiv.innerHTML=elem.outerHTML;fragmentDiv.removeChild(clone=fragmentDiv.firstChild);}
if((!jQuery.support.noCloneEvent||!jQuery.support.noCloneChecked)&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){destElements=getAll(clone);srcElements=getAll(elem);for(i=0;(node=srcElements[i])!=null;++i){if(destElements[i]){fixCloneNodeIssues(node,destElements[i]);}}}
if(dataAndEvents){if(deepDataAndEvents){srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0;(node=srcElements[i])!=null;i++){cloneCopyEvent(node,destElements[i]);}}else{cloneCopyEvent(elem,clone);}}
destElements=getAll(clone,"script");if(destElements.length>0){setGlobalEval(destElements,!inPage&&getAll(elem,"script"));}
destElements=srcElements=node=null;return clone;},buildFragment:function(elems,context,scripts,selection){var j,elem,contains,tmp,tag,tbody,wrap,l=elems.length,safe=createSafeFragment(context),nodes=[],i=0;for(;i<l;i++){elem=elems[i];if(elem||elem===0){if(jQuery.type(elem)==="object"){jQuery.merge(nodes,elem.nodeType?[elem]:elem);}else if(!rhtml.test(elem)){nodes.push(context.createTextNode(elem));}else{tmp=tmp||safe.appendChild(context.createElement("div"));tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+elem.replace(rxhtmlTag,"<$1></$2>")+wrap[2];j=wrap[0];while(j--){tmp=tmp.lastChild;}
if(!jQuery.support.leadingWhitespace&&rleadingWhitespace.test(elem)){nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));}
if(!jQuery.support.tbody){elem=tag==="table"&&!rtbody.test(elem)?tmp.firstChild:wrap[1]==="<table>"&&!rtbody.test(elem)?tmp:0;j=elem&&elem.childNodes.length;while(j--){if(jQuery.nodeName((tbody=elem.childNodes[j]),"tbody")&&!tbody.childNodes.length){elem.removeChild(tbody);}}}
jQuery.merge(nodes,tmp.childNodes);tmp.textContent="";while(tmp.firstChild){tmp.removeChild(tmp.firstChild);}
tmp=safe.lastChild;}}}
if(tmp){safe.removeChild(tmp);}
if(!jQuery.support.appendChecked){jQuery.grep(getAll(nodes,"input"),fixDefaultChecked);}
i=0;while((elem=nodes[i++])){if(selection&&jQuery.inArray(elem,selection)!==-1){continue;}
contains=jQuery.contains(elem.ownerDocument,elem);tmp=getAll(safe.appendChild(elem),"script");if(contains){setGlobalEval(tmp);}
if(scripts){j=0;while((elem=tmp[j++])){if(rscriptType.test(elem.type||"")){scripts.push(elem);}}}}
tmp=null;return safe;},cleanData:function(elems,acceptData){var elem,type,id,data,i=0,internalKey=jQuery.expando,cache=jQuery.cache,deleteExpando=jQuery.support.deleteExpando,special=jQuery.event.special;for(;(elem=elems[i])!=null;i++){if(acceptData||jQuery.acceptData(elem)){id=elem[internalKey];data=id&&cache[id];if(data){if(data.events){for(type in data.events){if(special[type]){jQuery.event.remove(elem,type);}else{jQuery.removeEvent(elem,type,data.handle);}}}
if(cache[id]){delete cache[id];if(deleteExpando){delete elem[internalKey];}else if(typeof elem.removeAttribute!==core_strundefined){elem.removeAttribute(internalKey);}else{elem[internalKey]=null;}
core_deletedIds.push(id);}}}}}});var iframe,getStyles,curCSS,ralpha=/alpha\([^)]*\)/i,ropacity=/opacity\s*=\s*([^)]*)/,rposition=/^(top|right|bottom|left)$/,rdisplayswap=/^(none|table(?!-c[ea]).+)/,rmargin=/^margin/,rnumsplit=new RegExp("^("+core_pnum+")(.*)$","i"),rnumnonpx=new RegExp("^("+core_pnum+")(?!px)[a-z%]+$","i"),rrelNum=new RegExp("^([+-])=("+core_pnum+")","i"),elemdisplay={BODY:"block"},cssShow={position:"absolute",visibility:"hidden",display:"block"},cssNormalTransform={letterSpacing:0,fontWeight:400},cssExpand=["Top","Right","Bottom","Left"],cssPrefixes=["Webkit","O","Moz","ms"];function vendorPropName(style,name){if(name in style){return name;}
var capName=name.charAt(0).toUpperCase()+name.slice(1),origName=name,i=cssPrefixes.length;while(i--){name=cssPrefixes[i]+capName;if(name in style){return name;}}
return origName;}
function isHidden(elem,el){elem=el||elem;return jQuery.css(elem,"display")==="none"||!jQuery.contains(elem.ownerDocument,elem);}
function showHide(elements,show){var display,elem,hidden,values=[],index=0,length=elements.length;for(;index<length;index++){elem=elements[index];if(!elem.style){continue;}
values[index]=jQuery._data(elem,"olddisplay");display=elem.style.display;if(show){if(!values[index]&&display==="none"){elem.style.display="";}
if(elem.style.display===""&&isHidden(elem)){values[index]=jQuery._data(elem,"olddisplay",css_defaultDisplay(elem.nodeName));}}else{if(!values[index]){hidden=isHidden(elem);if(display&&display!=="none"||!hidden){jQuery._data(elem,"olddisplay",hidden?display:jQuery.css(elem,"display"));}}}}
for(index=0;index<length;index++){elem=elements[index];if(!elem.style){continue;}
if(!show||elem.style.display==="none"||elem.style.display===""){elem.style.display=show?values[index]||"":"none";}}
return elements;}
jQuery.fn.extend({css:function(name,value){return jQuery.access(this,function(elem,name,value){var len,styles,map={},i=0;if(jQuery.isArray(name)){styles=getStyles(elem);len=name.length;for(;i<len;i++){map[name[i]]=jQuery.css(elem,name[i],false,styles);}
return map;}
return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);},name,value,arguments.length>1);},show:function(){return showHide(this,true);},hide:function(){return showHide(this);},toggle:function(state){var bool=typeof state==="boolean";return this.each(function(){if(bool?state:isHidden(this)){jQuery(this).show();}else{jQuery(this).hide();}});}});jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){if(computed){var ret=curCSS(elem,"opacity");return ret===""?"1":ret;}}}},cssNumber:{"columnCount":true,"fillOpacity":true,"fontWeight":true,"lineHeight":true,"opacity":true,"orphans":true,"widows":true,"zIndex":true,"zoom":true},cssProps:{"float":jQuery.support.cssFloat?"cssFloat":"styleFloat"},style:function(elem,name,value,extra){if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){return;}
var ret,type,hooks,origName=jQuery.camelCase(name),style=elem.style;name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){type=typeof value;if(type==="string"&&(ret=rrelNum.exec(value))){value=(ret[1]+1)*ret[2]+parseFloat(jQuery.css(elem,name));type="number";}
if(value==null||type==="number"&&isNaN(value)){return;}
if(type==="number"&&!jQuery.cssNumber[origName]){value+="px";}
if(!jQuery.support.clearCloneStyle&&value===""&&name.indexOf("background")===0){style[name]="inherit";}
if(!hooks||!("set"in hooks)||(value=hooks.set(elem,value,extra))!==undefined){try{style[name]=value;}catch(e){}}}else{if(hooks&&"get"in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){return ret;}
return style[name];}},css:function(elem,name,extra,styles){var num,val,hooks,origName=jQuery.camelCase(name);name=jQuery.cssProps[origName]||(jQuery.cssProps[origName]=vendorPropName(elem.style,origName));hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&"get"in hooks){val=hooks.get(elem,true,extra);}
if(val===undefined){val=curCSS(elem,name,styles);}
if(val==="normal"&&name in cssNormalTransform){val=cssNormalTransform[name];}
if(extra===""||extra){num=parseFloat(val);return extra===true||jQuery.isNumeric(num)?num||0:val;}
return val;},swap:function(elem,options,callback,args){var ret,name,old={};for(name in options){old[name]=elem.style[name];elem.style[name]=options[name];}
ret=callback.apply(elem,args||[]);for(name in options){elem.style[name]=old[name];}
return ret;}});if(window.getComputedStyle){getStyles=function(elem){return window.getComputedStyle(elem,null);};curCSS=function(elem,name,_computed){var width,minWidth,maxWidth,computed=_computed||getStyles(elem),ret=computed?computed.getPropertyValue(name)||computed[name]:undefined,style=elem.style;if(computed){if(ret===""&&!jQuery.contains(elem.ownerDocument,elem)){ret=jQuery.style(elem,name);}
if(rnumnonpx.test(ret)&&rmargin.test(name)){width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;}}
return ret;};}else if(document.documentElement.currentStyle){getStyles=function(elem){return elem.currentStyle;};curCSS=function(elem,name,_computed){var left,rs,rsLeft,computed=_computed||getStyles(elem),ret=computed?computed[name]:undefined,style=elem.style;if(ret==null&&style&&style[name]){ret=style[name];}
if(rnumnonpx.test(ret)&&!rposition.test(name)){left=style.left;rs=elem.runtimeStyle;rsLeft=rs&&rs.left;if(rsLeft){rs.left=elem.currentStyle.left;}
style.left=name==="fontSize"?"1em":ret;ret=style.pixelLeft+"px";style.left=left;if(rsLeft){rs.left=rsLeft;}}
return ret===""?"auto":ret;};}
function setPositiveNumber(elem,value,subtract){var matches=rnumsplit.exec(value);return matches?Math.max(0,matches[1]-(subtract||0))+(matches[2]||"px"):value;}
function augmentWidthOrHeight(elem,name,extra,isBorderBox,styles){var i=extra===(isBorderBox?"border":"content")?4:name==="width"?1:0,val=0;for(;i<4;i+=2){if(extra==="margin"){val+=jQuery.css(elem,extra+cssExpand[i],true,styles);}
if(isBorderBox){if(extra==="content"){val-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);}
if(extra!=="margin"){val-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}else{val+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);if(extra!=="padding"){val+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);}}}
return val;}
function getWidthOrHeight(elem,name,extra){var valueIsBorderBox=true,val=name==="width"?elem.offsetWidth:elem.offsetHeight,styles=getStyles(elem),isBorderBox=jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box";if(val<=0||val==null){val=curCSS(elem,name,styles);if(val<0||val==null){val=elem.style[name];}
if(rnumnonpx.test(val)){return val;}
valueIsBorderBox=isBorderBox&&(jQuery.support.boxSizingReliable||val===elem.style[name]);val=parseFloat(val)||0;}
return(val+
augmentWidthOrHeight(elem,name,extra||(isBorderBox?"border":"content"),valueIsBorderBox,styles))+"px";}
function css_defaultDisplay(nodeName){var doc=document,display=elemdisplay[nodeName];if(!display){display=actualDisplay(nodeName,doc);if(display==="none"||!display){iframe=(iframe||jQuery("<iframe frameborder='0' width='0' height='0'/>")
.css("cssText","display:block !important")).appendTo(doc.documentElement);doc=(iframe[0].contentWindow||iframe[0].contentDocument).document;doc.write("<!doctype html><html><body>");doc.close();display=actualDisplay(nodeName,doc);iframe.detach();}
elemdisplay[nodeName]=display;}
return display;}
function actualDisplay(name,doc){var elem=jQuery(doc.createElement(name)).appendTo(doc.body),display=jQuery.css(elem[0],"display");elem.remove();return display;}
jQuery.each(["height","width"],function(i,name){jQuery.cssHooks[name]={get:function(elem,computed,extra){if(computed){return elem.offsetWidth===0&&rdisplayswap.test(jQuery.css(elem,"display"))?jQuery.swap(elem,cssShow,function(){return getWidthOrHeight(elem,name,extra);}):getWidthOrHeight(elem,name,extra);}},set:function(elem,value,extra){var styles=extra&&getStyles(elem);return setPositiveNumber(elem,value,extra?augmentWidthOrHeight(elem,name,extra,jQuery.support.boxSizing&&jQuery.css(elem,"boxSizing",false,styles)==="border-box",styles):0);}};});if(!jQuery.support.opacity){jQuery.cssHooks.opacity={get:function(elem,computed){return ropacity.test((computed&&elem.currentStyle?elem.currentStyle.filter:elem.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":computed?"1":"";},set:function(elem,value){var style=elem.style,currentStyle=elem.currentStyle,opacity=jQuery.isNumeric(value)?"alpha(opacity="+value*100+")":"",filter=currentStyle&&currentStyle.filter||style.filter||"";style.zoom=1;if((value>=1||value==="")&&jQuery.trim(filter.replace(ralpha,""))===""&&style.removeAttribute){style.removeAttribute("filter");if(value===""||currentStyle&&!currentStyle.filter){return;}}
style.filter=ralpha.test(filter)?filter.replace(ralpha,opacity):filter+" "+opacity;}};}
jQuery(function(){if(!jQuery.support.reliableMarginRight){jQuery.cssHooks.marginRight={get:function(elem,computed){if(computed){return jQuery.swap(elem,{"display":"inline-block"},curCSS,[elem,"marginRight"]);}}};}
if(!jQuery.support.pixelPosition&&jQuery.fn.position){jQuery.each(["top","left"],function(i,prop){jQuery.cssHooks[prop]={get:function(elem,computed){if(computed){computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+"px":computed;}}};});}});if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.hidden=function(elem){return elem.offsetWidth<=0&&elem.offsetHeight<=0||(!jQuery.support.reliableHiddenOffsets&&((elem.style&&elem.style.display)||jQuery.css(elem,"display"))==="none");};jQuery.expr.filters.visible=function(elem){return!jQuery.expr.filters.hidden(elem);};}
jQuery.each({margin:"",padding:"",border:"Width"},function(prefix,suffix){jQuery.cssHooks[prefix+suffix]={expand:function(value){var i=0,expanded={},parts=typeof value==="string"?value.split(" "):[value];for(;i<4;i++){expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];}
return expanded;}};if(!rmargin.test(prefix)){jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;}});var r20=/%20/g,rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;jQuery.fn.extend({serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){var elements=jQuery.prop(this,"elements");return elements?jQuery.makeArray(elements):this;})
.filter(function(){var type=this.type;return this.name&&!jQuery(this).is(":disabled")&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!manipulation_rcheckableType.test(type));})
.map(function(i,elem){var val=jQuery(this).val();return val==null?null:jQuery.isArray(val)?jQuery.map(val,function(val){return{name:elem.name,value:val.replace(rCRLF,"\r\n")};}):{name:elem.name,value:val.replace(rCRLF,"\r\n")};}).get();}});jQuery.param=function(a,traditional){var prefix,s=[],add=function(key,value){value=jQuery.isFunction(value)?value():(value==null?"":value);s[s.length]=encodeURIComponent(key)+"="+encodeURIComponent(value);};if(traditional===undefined){traditional=jQuery.ajaxSettings&&jQuery.ajaxSettings.traditional;}
if(jQuery.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){jQuery.each(a,function(){add(this.name,this.value);});}else{for(prefix in a){buildParams(prefix,a[prefix],traditional,add);}}
return s.join("&").replace(r20,"+");};function buildParams(prefix,obj,traditional,add){var name;if(jQuery.isArray(obj)){jQuery.each(obj,function(i,v){if(traditional||rbracket.test(prefix)){add(prefix,v);}else{buildParams(prefix+"["+(typeof v==="object"?i:"")+"]",v,traditional,add);}});}else if(!traditional&&jQuery.type(obj)==="object"){for(name in obj){buildParams(prefix+"["+name+"]",obj[name],traditional,add);}}else{add(prefix,obj);}}
jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup error contextmenu").split(" "),function(i,name){jQuery.fn[name]=function(data,fn){return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);};});jQuery.fn.hover=function(fnOver,fnOut){return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);};var
ajaxLocParts,ajaxLocation,ajax_nonce=jQuery.now(),ajax_rquery=/\?/,rhash=/#.*$/,rts=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,rurl=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,_load=jQuery.fn.load,prefilters={},transports={},allTypes="*/".concat("*");try{ajaxLocation=location.href;}catch(e){ajaxLocation=document.createElement("a");ajaxLocation.href="";ajaxLocation=ajaxLocation.href;}
ajaxLocParts=rurl.exec(ajaxLocation.toLowerCase())||[];function addToPrefiltersOrTransports(structure){return function(dataTypeExpression,func){if(typeof dataTypeExpression!=="string"){func=dataTypeExpression;dataTypeExpression="*";}
var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(core_rnotwhite)||[];if(jQuery.isFunction(func)){while((dataType=dataTypes[i++])){if(dataType[0]==="+"){dataType=dataType.slice(1)||"*";(structure[dataType]=structure[dataType]||[]).unshift(func);}else{(structure[dataType]=structure[dataType]||[]).push(func);}}}};}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){var inspected={},seekingTransport=(structure===transports);function inspect(dataType){var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==="string"&&!seekingTransport&&!inspected[dataTypeOrTransport]){options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;}else if(seekingTransport){return!(selected=dataTypeOrTransport);}});return selected;}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");}
function ajaxExtend(target,src){var deep,key,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){if(src[key]!==undefined){(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];}}
if(deep){jQuery.extend(true,target,deep);}
return target;}
jQuery.fn.load=function(url,params,callback){if(typeof url!=="string"&&_load){return _load.apply(this,arguments);}
var selector,response,type,self=this,off=url.indexOf(" ");if(off>=0){selector=url.slice(off,url.length);url=url.slice(0,off);}
if(jQuery.isFunction(params)){callback=params;params=undefined;}else if(params&&typeof params==="object"){type="POST";}
if(self.length>0){jQuery.ajax({url:url,type:type,dataType:"html",data:params}).done(function(responseText){response=arguments;self.html(selector?jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):responseText);}).complete(callback&&function(jqXHR,status){self.each(callback,response||[jqXHR.responseText,status,jqXHR]);});}
return this;};jQuery.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(i,type){jQuery.fn[type]=function(fn){return this.on(type,fn);};});jQuery.each(["get","post"],function(i,method){jQuery[method]=function(url,data,callback,type){if(jQuery.isFunction(data)){type=type||callback;callback=data;data=undefined;}
return jQuery.ajax({url:url,type:method,dataType:type,data:data,success:callback});};});jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ajaxLocation,type:"GET",isLocal:rlocalProtocol.test(ajaxLocParts[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":allTypes,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":jQuery.parseJSON,"text xml":jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){if(typeof url==="object"){options=url;url=undefined;}
options=options||{};var
parts,i,cacheURL,responseHeadersString,timeoutTimer,fireGlobals,transport,responseHeaders,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks("once memory"),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},state=0,strAbort="canceled",jqXHR={readyState:0,getResponseHeader:function(key){var match;if(state===2){if(!responseHeaders){responseHeaders={};while((match=rheaders.exec(responseHeadersString))){responseHeaders[match[1].toLowerCase()]=match[2];}}
match=responseHeaders[key.toLowerCase()];}
return match==null?null:match;},getAllResponseHeaders:function(){return state===2?responseHeadersString:null;},setRequestHeader:function(name,value){var lname=name.toLowerCase();if(!state){name=requestHeadersNames[lname]=requestHeadersNames[lname]||name;requestHeaders[name]=value;}
return this;},overrideMimeType:function(type){if(!state){s.mimeType=type;}
return this;},statusCode:function(map){var code;if(map){if(state<2){for(code in map){statusCode[code]=[statusCode[code],map[code]];}}else{jqXHR.always(map[jqXHR.status]);}}
return this;},abort:function(statusText){var finalText=statusText||strAbort;if(transport){transport.abort(finalText);}
done(0,finalText);return this;}};deferred.promise(jqXHR).complete=completeDeferred.add;jqXHR.success=jqXHR.done;jqXHR.error=jqXHR.fail;s.url=((url||s.url||ajaxLocation)+"").replace(rhash,"").replace(rprotocol,ajaxLocParts[1]+"//");s.type=options.method||options.type||s.method||s.type;s.dataTypes=jQuery.trim(s.dataType||"*").toLowerCase().match(core_rnotwhite)||[""];if(s.crossDomain==null){parts=rurl.exec(s.url.toLowerCase());s.crossDomain=!!(parts&&(parts[1]!==ajaxLocParts[1]||parts[2]!==ajaxLocParts[2]||(parts[3]||(parts[1]==="http:"?80:443))!=(ajaxLocParts[3]||(ajaxLocParts[1]==="http:"?80:443))));}
if(s.data&&s.processData&&typeof s.data!=="string"){s.data=jQuery.param(s.data,s.traditional);}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(state===2){return jqXHR;}
fireGlobals=s.global;if(fireGlobals&&jQuery.active++===0){jQuery.event.trigger("ajaxStart");}
s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url;if(!s.hasContent){if(s.data){cacheURL=(s.url+=(ajax_rquery.test(cacheURL)?"&":"?")+s.data);delete s.data;}
if(s.cache===false){s.url=rts.test(cacheURL)?cacheURL.replace(rts,"$1_="+ajax_nonce++):cacheURL+(ajax_rquery.test(cacheURL)?"&":"?")+"_="+ajax_nonce++;}}
if(s.ifModified){if(jQuery.lastModified[cacheURL]){jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);}
if(jQuery.etag[cacheURL]){jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);}}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){jqXHR.setRequestHeader("Content-Type",s.contentType);}
jqXHR.setRequestHeader("Accept",s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):s.accepts["*"]);for(i in s.headers){jqXHR.setRequestHeader(i,s.headers[i]);}
if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||state===2)){return jqXHR.abort();}
strAbort="abort";for(i in{success:1,error:1,complete:1}){jqXHR[i](s[i]);}
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){done(-1,"No Transport");}else{jqXHR.readyState=1;if(fireGlobals){globalEventContext.trigger("ajaxSend",[jqXHR,s]);}
if(s.async&&s.timeout>0){timeoutTimer=setTimeout(function(){jqXHR.abort("timeout");},s.timeout);}
try{state=1;transport.send(requestHeaders,done);}catch(e){if(state<2){done(-1,e);}else{throw e;}}}
function done(status,nativeStatusText,responses,headers){var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(state===2){return;}
state=2;if(timeoutTimer){clearTimeout(timeoutTimer);}
transport=undefined;responseHeadersString=headers||"";jqXHR.readyState=status>0?4:0;if(responses){response=ajaxHandleResponses(s,jqXHR,responses);}
if(status>=200&&status<300||status===304){if(s.ifModified){modified=jqXHR.getResponseHeader("Last-Modified");if(modified){jQuery.lastModified[cacheURL]=modified;}
modified=jqXHR.getResponseHeader("etag");if(modified){jQuery.etag[cacheURL]=modified;}}
if(status===204){isSuccess=true;statusText="nocontent";}else if(status===304){isSuccess=true;statusText="notmodified";}else{isSuccess=ajaxConvert(s,response);statusText=isSuccess.state;success=isSuccess.data;error=isSuccess.error;isSuccess=!error;}}else{error=statusText;if(status||!statusText){statusText="error";if(status<0){status=0;}}}
jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+"";if(isSuccess){deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);}else{deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);}
jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",[jqXHR,s,isSuccess?success:error]);}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){globalEventContext.trigger("ajaxComplete",[jqXHR,s]);if(!(--jQuery.active)){jQuery.event.trigger("ajaxStop");}}}
return jqXHR;},getScript:function(url,callback){return jQuery.get(url,undefined,callback,"script");},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,"json");}});function ajaxHandleResponses(s,jqXHR,responses){var firstDataType,ct,finalDataType,type,contents=s.contents,dataTypes=s.dataTypes,responseFields=s.responseFields;for(type in responseFields){if(type in responses){jqXHR[responseFields[type]]=responses[type];}}
while(dataTypes[0]==="*"){dataTypes.shift();if(ct===undefined){ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");}}
if(ct){for(type in contents){if(contents[type]&&contents[type].test(ct)){dataTypes.unshift(type);break;}}}
if(dataTypes[0]in responses){finalDataType=dataTypes[0];}else{for(type in responses){if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){finalDataType=type;break;}
if(!firstDataType){firstDataType=type;}}
finalDataType=finalDataType||firstDataType;}
if(finalDataType){if(finalDataType!==dataTypes[0]){dataTypes.unshift(finalDataType);}
return responses[finalDataType];}}
function ajaxConvert(s,response){var conv2,current,conv,tmp,converters={},i=0,dataTypes=s.dataTypes.slice(),prev=dataTypes[0];if(s.dataFilter){response=s.dataFilter(response,s.dataType);}
if(dataTypes[1]){for(conv in s.converters){converters[conv.toLowerCase()]=s.converters[conv];}}
for(;(current=dataTypes[++i]);){if(current!=="*"){if(prev!=="*"&&prev!==current){conv=converters[prev+" "+current]||converters["* "+current];if(!conv){for(conv2 in converters){tmp=conv2.split(" ");if(tmp[1]===current){conv=converters[prev+" "+tmp[0]]||converters["* "+tmp[0]];if(conv){if(conv===true){conv=converters[conv2];}else if(converters[conv2]!==true){current=tmp[0];dataTypes.splice(i--,0,current);}
break;}}}}
if(conv!==true){if(conv&&s["throws"]){response=conv(response);}else{try{response=conv(response);}catch(e){return{state:"parsererror",error:conv?e:"No conversion from "+prev+" to "+current};}}}}
prev=current;}}
return{state:"success",data:response};}
jQuery.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(text){jQuery.globalEval(text);return text;}}});jQuery.ajaxPrefilter("script",function(s){if(s.cache===undefined){s.cache=false;}
if(s.crossDomain){s.type="GET";s.global=false;}});jQuery.ajaxTransport("script",function(s){if(s.crossDomain){var script,head=document.head||jQuery("head")[0]||document.documentElement;return{send:function(_,callback){script=document.createElement("script");script.async=true;if(s.scriptCharset){script.charset=s.scriptCharset;}
script.src=s.url;script.onload=script.onreadystatechange=function(_,isAbort){if(isAbort||!script.readyState||/loaded|complete/.test(script.readyState)){script.onload=script.onreadystatechange=null;if(script.parentNode){script.parentNode.removeChild(script);}
script=null;if(!isAbort){callback(200,"success");}}};head.insertBefore(script,head.firstChild);},abort:function(){if(script){script.onload(undefined,true);}}};}});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(ajax_nonce++));this[callback]=true;return callback;}});jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?"url":typeof s.data==="string"&&!(s.contentType||"").indexOf("application/x-www-form-urlencoded")&&rjsonp.test(s.data)&&"data");if(jsonProp||s.dataTypes[0]==="jsonp"){callbackName=s.jsonpCallback=jQuery.isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);}else if(s.jsonp!==false){s.url+=(ajax_rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;}
s.converters["script json"]=function(){if(!responseContainer){jQuery.error(callbackName+" was not called");}
return responseContainer[0];};s.dataTypes[0]="json";overwritten=window[callbackName];window[callbackName]=function(){responseContainer=arguments;};jqXHR.always(function(){window[callbackName]=overwritten;if(s[callbackName]){s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);}
if(responseContainer&&jQuery.isFunction(overwritten)){overwritten(responseContainer[0]);}
responseContainer=overwritten=undefined;});return"script";}});var xhrCallbacks,xhrSupported,xhrId=0,xhrOnUnloadAbort=window.ActiveXObject&&function(){var key;for(key in xhrCallbacks){xhrCallbacks[key](undefined,true);}};function createStandardXHR(){try{return new window.XMLHttpRequest();}catch(e){}}
function createActiveXHR(){try{return new window.ActiveXObject("Microsoft.XMLHTTP");}catch(e){}}
jQuery.ajaxSettings.xhr=window.ActiveXObject?function(){return!this.isLocal&&createStandardXHR()||createActiveXHR();}:createStandardXHR;xhrSupported=jQuery.ajaxSettings.xhr();jQuery.support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);xhrSupported=jQuery.support.ajax=!!xhrSupported;if(xhrSupported){jQuery.ajaxTransport(function(s){if(!s.crossDomain||jQuery.support.cors){var callback;return{send:function(headers,complete){var handle,i,xhr=s.xhr();if(s.username){xhr.open(s.type,s.url,s.async,s.username,s.password);}else{xhr.open(s.type,s.url,s.async);}
if(s.xhrFields){for(i in s.xhrFields){xhr[i]=s.xhrFields[i];}}
if(s.mimeType&&xhr.overrideMimeType){xhr.overrideMimeType(s.mimeType);}
if(!s.crossDomain&&!headers["X-Requested-With"]){headers["X-Requested-With"]="XMLHttpRequest";}
try{for(i in headers){xhr.setRequestHeader(i,headers[i]);}}catch(err){}
xhr.send((s.hasContent&&s.data)||null);callback=function(_,isAbort){var status,responseHeaders,statusText,responses;try{if(callback&&(isAbort||xhr.readyState===4)){callback=undefined;if(handle){xhr.onreadystatechange=jQuery.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[handle];}}
if(isAbort){if(xhr.readyState!==4){xhr.abort();}}else{responses={};status=xhr.status;responseHeaders=xhr.getAllResponseHeaders();if(typeof xhr.responseText==="string"){responses.text=xhr.responseText;}
try{statusText=xhr.statusText;}catch(e){statusText="";}
if(!status&&s.isLocal&&!s.crossDomain){status=responses.text?200:404;}else if(status===1223){status=204;}}}}catch(firefoxAccessException){if(!isAbort){complete(-1,firefoxAccessException);}}
if(responses){complete(status,statusText,responses,responseHeaders);}};if(!s.async){callback();}else if(xhr.readyState===4){setTimeout(callback);}else{handle=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};jQuery(window).unload(xhrOnUnloadAbort);}
xhrCallbacks[handle]=callback;}
xhr.onreadystatechange=callback;}},abort:function(){if(callback){callback(undefined,true);}}};}});}
var fxNow,timerId,rfxtypes=/^(?:toggle|show|hide)$/,rfxnum=new RegExp("^(?:([+-])=|)("+core_pnum+")([a-z%]*)$","i"),rrun=/queueHooks$/,animationPrefilters=[defaultPrefilter],tweeners={"*":[function(prop,value){var end,unit,tween=this.createTween(prop,value),parts=rfxnum.exec(value),target=tween.cur(),start=+target||0,scale=1,maxIterations=20;if(parts){end=+parts[2];unit=parts[3]||(jQuery.cssNumber[prop]?"":"px");if(unit!=="px"&&start){start=jQuery.css(tween.elem,prop,true)||end||1;do{scale=scale||".5";start=start/scale;jQuery.style(tween.elem,prop,start+unit);}while(scale!==(scale=tween.cur()/target)&&scale!==1&&--maxIterations);}
tween.unit=unit;tween.start=start;tween.end=parts[1]?start+(parts[1]+1)*end:end;}
return tween;}]};function createFxNow(){setTimeout(function(){fxNow=undefined;});return(fxNow=jQuery.now());}
function createTweens(animation,props){jQuery.each(props,function(prop,value){var collection=(tweeners[prop]||[]).concat(tweeners["*"]),index=0,length=collection.length;for(;index<length;index++){if(collection[index].call(animation,prop,value)){return;}}});}
function Animation(elem,properties,options){var result,stopped,index=0,length=animationPrefilters.length,deferred=jQuery.Deferred().always(function(){delete tick.elem;}),tick=function(){if(stopped){return false;}
var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){animation.tweens[index].run(percent);}
deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){return remaining;}else{deferred.resolveWith(elem,[animation]);return false;}},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{}},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;},stop:function(gotoEnd){var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){return this;}
stopped=true;for(;index<length;index++){animation.tweens[index].run(1);}
if(gotoEnd){deferred.resolveWith(elem,[animation,gotoEnd]);}else{deferred.rejectWith(elem,[animation,gotoEnd]);}
return this;}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){result=animationPrefilters[index].call(animation,elem,props,animation.opts);if(result){return result;}}
createTweens(animation,props);if(jQuery.isFunction(animation.opts.start)){animation.opts.start.call(elem,animation);}
jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation.progress(animation.opts.progress)
.done(animation.opts.done,animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);}
function propFilter(props,specialEasing){var value,name,index,easing,hooks;for(index in props){name=jQuery.camelCase(index);easing=specialEasing[name];value=props[index];if(jQuery.isArray(value)){easing=value[1];value=props[index]=value[0];}
if(index!==name){props[name]=value;delete props[index];}
hooks=jQuery.cssHooks[name];if(hooks&&"expand"in hooks){value=hooks.expand(value);delete props[name];for(index in value){if(!(index in props)){props[index]=value[index];specialEasing[index]=easing;}}}else{specialEasing[name]=easing;}}}
jQuery.Animation=jQuery.extend(Animation,{tweener:function(props,callback){if(jQuery.isFunction(props)){callback=props;props=["*"];}else{props=props.split(" ");}
var prop,index=0,length=props.length;for(;index<length;index++){prop=props[index];tweeners[prop]=tweeners[prop]||[];tweeners[prop].unshift(callback);}},prefilter:function(callback,prepend){if(prepend){animationPrefilters.unshift(callback);}else{animationPrefilters.push(callback);}}});function defaultPrefilter(elem,props,opts){var prop,index,length,value,dataShow,toggle,tween,hooks,oldfire,anim=this,style=elem.style,orig={},handled=[],hidden=elem.nodeType&&isHidden(elem);if(!opts.queue){hooks=jQuery._queueHooks(elem,"fx");if(hooks.unqueued==null){hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){if(!hooks.unqueued){oldfire();}};}
hooks.unqueued++;anim.always(function(){anim.always(function(){hooks.unqueued--;if(!jQuery.queue(elem,"fx").length){hooks.empty.fire();}});});}
if(elem.nodeType===1&&("height"in props||"width"in props)){opts.overflow=[style.overflow,style.overflowX,style.overflowY];if(jQuery.css(elem,"display")==="inline"&&jQuery.css(elem,"float")==="none"){if(!jQuery.support.inlineBlockNeedsLayout||css_defaultDisplay(elem.nodeName)==="inline"){style.display="inline-block";}else{style.zoom=1;}}}
if(opts.overflow){style.overflow="hidden";if(!jQuery.support.shrinkWrapBlocks){anim.always(function(){style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];});}}
for(index in props){value=props[index];if(rfxtypes.exec(value)){delete props[index];toggle=toggle||value==="toggle";if(value===(hidden?"hide":"show")){continue;}
handled.push(index);}}
length=handled.length;if(length){dataShow=jQuery._data(elem,"fxshow")||jQuery._data(elem,"fxshow",{});if("hidden"in dataShow){hidden=dataShow.hidden;}
if(toggle){dataShow.hidden=!hidden;}
if(hidden){jQuery(elem).show();}else{anim.done(function(){jQuery(elem).hide();});}
anim.done(function(){var prop;jQuery._removeData(elem,"fxshow");for(prop in orig){jQuery.style(elem,prop,orig[prop]);}});for(index=0;index<length;index++){prop=handled[index];tween=anim.createTween(prop,hidden?dataShow[prop]:0);orig[prop]=dataShow[prop]||jQuery.style(elem,prop);if(!(prop in dataShow)){dataShow[prop]=tween.start;if(hidden){tween.end=tween.start;tween.start=prop==="width"||prop==="height"?1:0;}}}}}
function Tween(elem,options,prop,end,easing){return new Tween.prototype.init(elem,options,prop,end,easing);}
jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){this.elem=elem;this.prop=prop;this.easing=easing||"swing";this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?"":"px");},cur:function(){var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);},run:function(percent){var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);}else{this.pos=eased=percent;}
this.now=(this.end-this.start)*eased+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this);}
if(hooks&&hooks.set){hooks.set(this);}else{Tween.propHooks._default.set(this);}
return this;}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){var result;if(tween.elem[tween.prop]!=null&&(!tween.elem.style||tween.elem.style[tween.prop]==null)){return tween.elem[tween.prop];}
result=jQuery.css(tween.elem,tween.prop,"");return!result||result==="auto"?0:result;},set:function(tween){if(jQuery.fx.step[tween.prop]){jQuery.fx.step[tween.prop](tween);}else if(tween.elem.style&&(tween.elem.style[jQuery.cssProps[tween.prop]]!=null||jQuery.cssHooks[tween.prop])){jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);}else{tween.elem[tween.prop]=tween.now;}}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){if(tween.elem.nodeType&&tween.elem.parentNode){tween.elem[tween.prop]=tween.now;}}};jQuery.each(["toggle","show","hide"],function(i,name){var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){return speed==null||typeof speed==="boolean"?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);};});jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){return this.filter(isHidden).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);},animate:function(prop,speed,easing,callback){var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){var anim=Animation(this,jQuery.extend({},prop),optall);doAnimation.finish=function(){anim.stop(true);};if(empty||jQuery._data(this,"finish")){anim.stop(true);}};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);},stop:function(type,clearQueue,gotoEnd){var stopQueue=function(hooks){var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);};if(typeof type!=="string"){gotoEnd=clearQueue;clearQueue=type;type=undefined;}
if(clearQueue&&type!==false){this.queue(type||"fx",[]);}
return this.each(function(){var dequeue=true,index=type!=null&&type+"queueHooks",timers=jQuery.timers,data=jQuery._data(this);if(index){if(data[index]&&data[index].stop){stopQueue(data[index]);}}else{for(index in data){if(data[index]&&data[index].stop&&rrun.test(index)){stopQueue(data[index]);}}}
for(index=timers.length;index--;){if(timers[index].elem===this&&(type==null||timers[index].queue===type)){timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);}}
if(dequeue||!gotoEnd){jQuery.dequeue(this,type);}});},finish:function(type){if(type!==false){type=type||"fx";}
return this.each(function(){var index,data=jQuery._data(this),queue=data[type+"queue"],hooks=data[type+"queueHooks"],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.cur&&hooks.cur.finish){hooks.cur.finish.call(this);}
for(index=timers.length;index--;){if(timers[index].elem===this&&timers[index].queue===type){timers[index].anim.stop(true);timers.splice(index,1);}}
for(index=0;index<length;index++){if(queue[index]&&queue[index].finish){queue[index].finish.call(this);}}
delete data.finish;});}});function genFx(type,includeWidth){var which,attrs={height:type},i=0;includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){which=cssExpand[i];attrs["margin"+which]=attrs["padding"+which]=type;}
if(includeWidth){attrs.opacity=attrs.width=type;}
return attrs;}
jQuery.each({slideDown:genFx("show"),slideUp:genFx("hide"),slideToggle:genFx("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(name,props){jQuery.fn[name]=function(speed,easing,callback){return this.animate(props,speed,easing,callback);};});jQuery.speed=function(speed,easing,fn){var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{complete:fn||!fn&&easing||jQuery.isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!jQuery.isFunction(easing)&&easing};opt.duration=jQuery.fx.off?0:typeof opt.duration==="number"?opt.duration:opt.duration in jQuery.fx.speeds?jQuery.fx.speeds[opt.duration]:jQuery.fx.speeds._default;if(opt.queue==null||opt.queue===true){opt.queue="fx";}
opt.old=opt.complete;opt.complete=function(){if(jQuery.isFunction(opt.old)){opt.old.call(this);}
if(opt.queue){jQuery.dequeue(this,opt.queue);}};return opt;};jQuery.easing={linear:function(p){return p;},swing:function(p){return 0.5-Math.cos(p*Math.PI)/2;}};jQuery.timers=[];jQuery.fx=Tween.prototype.init;jQuery.fx.tick=function(){var timer,timers=jQuery.timers,i=0;fxNow=jQuery.now();for(;i<timers.length;i++){timer=timers[i];if(!timer()&&timers[i]===timer){timers.splice(i--,1);}}
if(!timers.length){jQuery.fx.stop();}
fxNow=undefined;};jQuery.fx.timer=function(timer){if(timer()&&jQuery.timers.push(timer)){jQuery.fx.start();}};jQuery.fx.interval=13;jQuery.fx.start=function(){if(!timerId){timerId=setInterval(jQuery.fx.tick,jQuery.fx.interval);}};jQuery.fx.stop=function(){clearInterval(timerId);timerId=null;};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fx.step={};if(jQuery.expr&&jQuery.expr.filters){jQuery.expr.filters.animated=function(elem){return jQuery.grep(jQuery.timers,function(fn){return elem===fn.elem;}).length;};}
jQuery.fn.offset=function(options){if(arguments.length){return options===undefined?this:this.each(function(i){jQuery.offset.setOffset(this,options,i);});}
var docElem,win,box={top:0,left:0},elem=this[0],doc=elem&&elem.ownerDocument;if(!doc){return;}
docElem=doc.documentElement;if(!jQuery.contains(docElem,elem)){return box;}
if(typeof elem.getBoundingClientRect!==core_strundefined){box=elem.getBoundingClientRect();}
win=getWindow(doc);return{top:box.top+(win.pageYOffset||docElem.scrollTop)-(docElem.clientTop||0),left:box.left+(win.pageXOffset||docElem.scrollLeft)-(docElem.clientLeft||0)};};jQuery.offset={setOffset:function(elem,options,i){var position=jQuery.css(elem,"position");if(position==="static"){elem.style.position="relative";}
var curElem=jQuery(elem),curOffset=curElem.offset(),curCSSTop=jQuery.css(elem,"top"),curCSSLeft=jQuery.css(elem,"left"),calculatePosition=(position==="absolute"||position==="fixed")&&jQuery.inArray("auto",[curCSSTop,curCSSLeft])>-1,props={},curPosition={},curTop,curLeft;if(calculatePosition){curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;}else{curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;}
if(jQuery.isFunction(options)){options=options.call(elem,i,curOffset);}
if(options.top!=null){props.top=(options.top-curOffset.top)+curTop;}
if(options.left!=null){props.left=(options.left-curOffset.left)+curLeft;}
if("using"in options){options.using.call(elem,props);}else{curElem.css(props);}}};jQuery.fn.extend({position:function(){if(!this[0]){return;}
var offsetParent,offset,parentOffset={top:0,left:0},elem=this[0];if(jQuery.css(elem,"position")==="fixed"){offset=elem.getBoundingClientRect();}else{offsetParent=this.offsetParent();offset=this.offset();if(!jQuery.nodeName(offsetParent[0],"html")){parentOffset=offsetParent.offset();}
parentOffset.top+=jQuery.css(offsetParent[0],"borderTopWidth",true);parentOffset.left+=jQuery.css(offsetParent[0],"borderLeftWidth",true);}
return{top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)};},offsetParent:function(){return this.map(function(){var offsetParent=this.offsetParent||document.documentElement;while(offsetParent&&(!jQuery.nodeName(offsetParent,"html")&&jQuery.css(offsetParent,"position")==="static")){offsetParent=offsetParent.offsetParent;}
return offsetParent||document.documentElement;});}});jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){var top=/Y/.test(prop);jQuery.fn[method]=function(val){return jQuery.access(this,function(elem,method,val){var win=getWindow(elem);if(val===undefined){return win?(prop in win)?win[prop]:win.document.documentElement[method]:elem[method];}
if(win){win.scrollTo(!top?val:jQuery(win).scrollLeft(),top?val:jQuery(win).scrollTop());}else{elem[method]=val;}},method,val,arguments.length,null);};});function getWindow(elem){return jQuery.isWindow(elem)?elem:elem.nodeType===9?elem.defaultView||elem.parentWindow:false;}
jQuery.each({Height:"height",Width:"width"},function(name,type){jQuery.each({padding:"inner"+name,content:type,"":"outer"+name},function(defaultExtra,funcName){jQuery.fn[funcName]=function(margin,value){var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),extra=defaultExtra||(margin===true||value===true?"margin":"border");return jQuery.access(this,function(elem,type,value){var doc;if(jQuery.isWindow(elem)){return elem.document.documentElement["client"+name];}
if(elem.nodeType===9){doc=elem.documentElement;return Math.max(elem.body["scroll"+name],doc["scroll"+name],elem.body["offset"+name],doc["offset"+name],doc["client"+name]);}
return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);},type,chainable?margin:undefined,chainable,null);};});});window.jQuery=window.$=jQuery;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return jQuery;});}})(window);var lang={'ERROR':'Error','ERROR_SERVER':'Maaf, Permohonan Anda tidak dapat diproses. Mohon dicoba kembali.','LOADING':'Memuat','LOADING_2':'Memuat...','LOADING_DEPOSIT':'Memuat Saldo...','LOADING_COMMENT':'Memuat Komentar...','LOADING_REVIEW':'Memuat Ulasan...','LOADING_TOPPOINTS':'Memuat TopPoints...','SUCCESS':'Sukses','ERROR_SEARCH':'Kata pencarian terlalu pendek.','ERROR_CHOOSE_ORDER':'Tidak ada order yang dipilih.','ERROR_SEARCH_EMPTY':'Silakan masukkan kata pencarian Anda.','Default Image':'Foto Utama','QTY_INVALID':'Kelompok Jumlah tidak valid.','QTY_INCOMPLETE':'Kelompok Jumlah belum lengkap.','PRICE_INCOMPLETE':'Silakan lengkapi harga pas untuk produk.','PRICE_TOO_HIGH':'Harga harus lebih murah dari harga pas.','MINIMUM_PRICE':'Harga produk minimal Rp. 100,-','MAXIMUM_PRICE':'Harga produk maksimal Rp. 25.000.000,-','PRICE_HIGHER_THAN_PREV':'Harga harus lebih murah dari sebelumnya.','Cancel':'Batal','Yes':'Ya','est_date_required':'Estimasi pengiriman harus diisi.','qty_required':'Jumlah barang harus diisi.','reason_required':'Alasan harus diisi.','respond_required':'Pilih respon untuk order ini terlebih dahulu.','thousand':'rb','million':'jt','CHOOSE_USER_MANAGE':'Pilihlah karyawan yang ingin diperpanjang terlebih dahulu.','IMAGE_UPLOAD_ERROR':'Gambar ini gagal diunggah karena telah melebihi batas waktu unggah yang telah ditentukan. Mohon dicoba kembali.','PRICE_BIGGER_THAN_ZERO':'Harga harus lebih besar dari pada 0.','Clear':'Hapus','No_shop':'Saat ini Anda belum mempunyai toko online, Anda harus memiliki toko online terlebih dahulu agar dapat berjualan. Silakan klik \'OK\' untuk membuat toko online Anda.','Jual':'Jual','Detail Transaction':'Detil Transaksi','choose_order_first':'Pilih order terlebih dahulu.','are_you_sure_confirm_order':'Apakah Anda yakin mengkonfirmasi order ini?','are_you_sure_cancel_order':'Apakah Anda yakin membatalkan order ini?','Remark':'Keterangan','remark_required':'Keterangan harus diisi.','ship_ref_required':'Nomor Resi harus diisi.','ship_ref_length_err':'Nomor Resi antara 8 - 17 karakter.','no_price':'Tidak didukung','are_you_sure_confirm_accept_order':'Apakah Anda yakin menerima pesanan yang telah Anda pilih?','ERROR_WRONG_IMAGE_EXTENSION':'Ekstensi file yang diperbolehkan adalah .jpg .jpeg .png.','ERROR_FILE_SIZE':'Ukuran file terlalu besar, ukuran maksimum 10.000 Kilobytes ','ERROR_MIN_RESOLUTION':'Resolusi gambar terlalu kecil, lebar minimal 300 pixel','ERROR_HTTP':'Upload gambar gagal, mohon dicoba kembali atau gunakan gambar lain.','ERROR_UPLOAD':'Unggah Gagal','SELECT_COURIER':'**Pilih Kurir','Process':'Memproses','product':'produk','products':'produk','Stop':'Berhenti','Finish':'Selesai','are_you_sure_re_request':'Anda yakin ingin mengirim ulang data ini?','SUCCESS_JOB':'Anda telah berhasil mendapatkan kode booking','select_city':'**Pilih Kotamadya','select_district':'**Pilih Kecamatan','CONFIRM_DELETE_AD_TITLE':'Hapus Promo','CONFIRM_DELETE_AD_MSG':'Apakah Anda yakin menghapus produk ini?','INFO_AD_SETTING_TITLE':'Konfirmasi pengaturan','INFO_AD_SETTING_MSG':'Silakan pilih opsi pengaturan terlebih dahulu.','INFO_AD_SETTING_MSG_2':'Silakan pilih produk terlebih dahulu.','CONFIRM_DINK_PRODUCT_TITLE':'Pindah Produk','CONFIRM_DINK_PRODUCT_MSG':'Apakah Anda ingin merubah posisi produk ini ke nomor #1 pada toko Anda?','INFO_DINK_PRODUCT_SUCCESS':'Produk Anda telah dipindahkan ke halaman pertama.','ERROR_CHOOSE_KURIR':'Silahkan pilih kurir.','Continuous':'Tidak Dibatasi','of':'dari','Edit Promote':'Ubah Promosi','Show Detail':'Tampilkan Detil','Hide Detail':'Sembunyikan Detil','Detail':'Detil','Daily spent':'Biaya harian','ERROR_KEYWORD_LESS_THAN_3':'Keyword yang anda masukan kurang dari 3 karakter.','please_choose_setting':'Silahkan Pilih Pengaturan','please_select_product':'Silahkan Pilih Produk','SHOP_NOTE_TOO_LONG':'Catatan Toko anda terlalu panjang.','MESSAGE_TOO_LONG':'Pesan anda terlalu panjang.','Invalid Date Format':'Format tanggal salah','ERROR_WRONG_DOCUMENTS_EXTENSION':'Ekstensi file yang diperbolehkan adalah .doc .docx .pdf','ERROR_FILE_SIZE_300KB':'Ukuran file terlalu besar, ukuran maksimum 300 Kilobytes ','ERROR_HTTP_DOCUMENTS':'Upload file gagal, mohon dicoba kembali atau gunakan gambar lain.','DOCUMENT_UPLOAD_ERROR':'Dokumen ini gagal diunggah karena telah melebihi batas waktu unggah yang telah ditentukan. Mohon dicoba kembali.','MOVING':'Memindahkan','DELETING':'Menghapus','SUCCESS_MOVE':'Anda berhasil memindahkan','SUCCESS_DELETE':'Anda berhasil menghapus','SUCCESS_DELETE_FOREVER':'Anda berhasil menghapus','MESSAGE':'pesan','PRINT_DATA':'Cetak Kode Booking','ERROR_UPLOAD_NOT_SUPPORTED':'Mohon maaf, browser ini tidak dapat digunakan untuk mengakses fitur Tokopedia secara optimal. Silakan mencoba browser modern lainnya.','ERROR_MIN_PRICE_MAX_PRICE':'Harga maksimal harus lebih besar dari harga minimal.','Favorite':'Jadikan Favorit','Visit Shop':'Kunjungi Toko','remove_wishlist':'Hapus Wishlist','already_in_wishlist':'Sudah dalam Wishlist','NOTE_PRODUCT_IMAGE3':'Jumlah file: maksimum 5 foto','No Product':'Tidak ada Produk','Shop Status':'Status Toko','Close':'Tutup','Moderated':'Tidak Aktif','Inactive':'Tidak Aktif','Total Transaction':'Total Transaksi','Total Favorite':'Total Favorite','Favorite Shop':'Toko Favorit','Gold Merchant':'Gold Merchant','Search All Shops':'Cari Semua Toko','Page':'Halaman','DEFAULT_META_DESCRIPTION':'Jual beli produk online hanya di Tokopedia. Lengkap, murah, aman dan nyaman.','SEARCH_NOT_FOUND_1':'Oops... hasil pencarian Anda tidak dapat ditemukan.','SEARCH_NOT_FOUND_2':'Silakan melakukan pencarian kembali dengan menggunakan kata kunci lain.','No Catalog':'Tidak ada Katalog','Catalog':'Katalog','View Price':'Lihat Harga','No Seller':'Tidak ada Penjual','DEFAULT_META_DESCRIPTION':'Jual beli online produk hanya di Tokopedia. Lengkap, murah, aman dan nyaman.','Search All Catalog':'Cari Semua Katalog','Page':'Halaman','Sell':'Jual','Category':'Kategori','Like':'Suka','Dislike':'Tidak Suka','Unlike':'Batal Suka','Transaction':'Transaksi','Favourite':'Favorit','badge-speed-off':'Belum ada nilai kecepatan','badge-speed-bad':'Respon Lambat','badge-speed-neutral':'Respon Normal','badge-speed-good':'Respon Cepat','Product List':'Daftar Produk','Catalog List':'Daftar Katalog','Shop List':'Daftar Toko','from':'dari','Starts from':'Mulai dari','Product':'Produk','Search All Product':'Cari Semua Produk','Search All Catalog':'Cari Semua Katalog','Search All Shop':'Cari Semua Toko','Accuracy':'Akurasi','Speed':'Kecepatan','Service':'Pelayanan','Promo':'Promo','Sales':'Penjualan','Talk':'Diskusi','Review':'Review','Newest':'Terbaru','Lowest Price':'Harga Terendah','Highest Price':'Harga Tertinggi','Release Date':'Tanggal Rilis','Most Product':'Produk Terbanyak','No Data':'Tidak Ada Data','Whole Sale':'Grosir','contact_us_help_2_title_1':'Pilih Masalah','contact_us_help_2_title_2':'Pilih Detail Masalah','contact_us_help_1_title':'Pilih Peran','from':'dari','Full Name':'Nama Lengkap','Mobile Number':'Nomor Handphone','Gender':'Jenis Kelamin','Date of Birth':'Tanggal Lahir','Email Address':'Alamat Email','Password':'Kata Sandi','Confirm Password':'Ulangi Kata Sandi','ERROR_FIELD_REQUIRED':' harus diisi.','ERROR_FIELD_CHOOSE':' harus dipilih.','ERROR_FIELD_NOT_EQUAL':' tidak sama dengan ','ERROR_FIELD_MIN_CHAR':' terlalu pendek, minimal ','ERROR_FIELD_MAX_CHAR':' terlalu panjang, maksimal ','ERROR_FIELD_MIN_DIGIT':' terlalu pendek, minimal ','ERROR_FIELD_MAX_DIGIT':' terlalu panjang, maksimal ','ERROR_FIELD_NUMBER':' hanya boleh mengandung angka.','ERROR_FIELD_NOT_VALID':' tidak valid.','ERROR_FIELD_NO_SPECIAL_CHAR_AND_NUMBER':' tidak boleh mengandung karakter khusus atau angka.','Characters':' karakter.','Digits':' angka.','Catalog Search Result':'Hasil Pencarian Katalog','Product Search Result':'Hasil Pencarian Produk','Shop Search Result':'Hasil Pencarian Toko','Did you mean':'Apakah yang Anda maksud','No Product':'Tidak ada Produk','Like':'Suka','Dislike':'Tidak Suka','Unlike':'Batal Suka','Transaction':'Transaksi','Favourite':'Favorit','badge-speed-off':'Belum ada Nilai Kecepatan','badge-speed-bad':'Lambat','badge-speed-neutral':'Normal','badge-speed-good':'Cepat','Show':'Tampilkan','Hide':'Sembunyikan','NOTES_REPUTATION_REVIEW_COMMENT_SINGULAR':'Produk menunggu komentar anda','NOTES_REPUTATION_REVIEW_COMMENT_PLURAL':'Produk menunggu komentar anda','Your Rating':'Penilaian Anda','All reviews are skipped':'Semua review telah dilewati','Reputation':'Reputasi','No':'Tidak','ERROR_LOGISTIC_FARE_NOT_AVAILABLE':'Maaf, kami belum dapat melakukan kalkulasi ongkos kirim menuju alamat Anda. Tim kami akan segera melakukan pemeriksaan.','Product Views':'Product Dilihat','Transaction Numbers':'Jumlah Transaksi','Products Sold':'Produk Terjual','View Graphic By':'Lihat Grafik Berdasarkan','Topads Cost':'Biaya TopAds','Unknown':'Tidak diketahui','TIMEOUT':'Mohon periksa koneksi internet Anda atau coba lagi','Resend Verification Code':'Kirim Ulang Kode Verifikasi','Resend':'Kirim Ulang','Resend OTP to Phone':'Kirim Ulang OTP ke HP','Potential_Cashback':'Potensi cashback','Potential_Cashback_Popup':'Cashback hingga 5% dari total harga produk<br>akan kamu dapatkan setelah produk diterima.','Potential_Cashback_Popup_More':'Keterangan lebih lanjut','lang':'id','ERROR_CODE_NOT_FOUND':'Kode Tidak Ditemukan','Try Again':'Coba Lagi','Product Rejected':'Produk Ditolak','Potential Lost':'Nominal Ditolak','Net Profit':'Pendapatan Bersih','Net Revenue':'Pendapatan Bersih','Order Numbers':'Jumlah Order','Try Again':'Coba Lagi','Buy':'Beli','My Product':'Product Saya','New':'Baru','Used':'Bekas','Offline Presence':'Toko Fisik','Other Products':'Produk Lainnya','Other product from this shop':'Produk lainnya dari toko ini','Shipping Location':'Lokasi Pengiriman','Potential_Cashback_Popup_More':'Keterangan lebih lanjut','Maximum':'Maksimum','characters remaining':'sisa karakter','Remove Image':'Hapus Gambar','Image Description':'Deskripsi Gambar','Quantity range is not valid':'Kelompok Jumlah tidak valid.','Quantity range is not complete':'Kelompok Jumlah belum lengkap.','Please complete the product fixed price':'Silakan lengkapi harga pas untuk produk.','Price should be cheaper than the fixed price':'Harga harus lebih murah dari harga pas.','Price should be cheaper than the previous wholesale price':'Harga harus lebih murah dari harga grosir sebelumnya.','Please fix the previous error first':'Perbaiki error sebelumnya terlebih dahulu.','Insert Image Description':'Masukan Deskripsi Gambar','Save':'Simpan','Bad':'Buruk','Neutral':'Netral','Good':'Bagus','REPUTATION_SCORE_STATUS_1':'Penilaian dari pembeli','REPUTATION_SCORE_STATUS_4':'Penilaian dari penjual','Items per page':'Jumlah produk per halaman','Shop Location':'Lokasi Toko','User':'Pengguna','All':'Semua','My Product':'Produk Saya','Following':'Mengikuti','Unread':'Belum Dibaca','Follow':'Ikuti','Unfollow':'Berhenti Ikuti','Positive':'Positif','Negative':'Negatif','Neutral':'Netral','Talk About It':'Diskusi Produk','Delete':'Hapus','View All':'Lihat Semua','Comment':'Komentar','Shop Location':'Lokasi Toko','ERROR_GOJEK_FARE_NOT_AVAILABLE':'Jarak Anda lebih dari 25 KM. Anda tidak dapat menggunakan kurir GO-KILAT','are_you_sure_pickup_order':'Dengan mengklik tombol "Ya", pihak kurir akan segera melakukan pickup ke tempat Anda.','Maximum item quantity is 999':'Jumlah barang maksimum adalah 999.'};!function($){"use strict";$(function(){$.support.transition=(function(){var transitionEnd=(function(){var el=document.createElement('bootstrap'),transEndEventNames={'WebkitTransition':'webkitTransitionEnd','MozTransition':'transitionend','OTransition':'oTransitionEnd otransitionend','transition':'transitionend'},name;for(name in transEndEventNames){if(el.style[name]!==undefined){return transEndEventNames[name]}}}())
return transitionEnd&&{end:transitionEnd}})()})}(window.jQuery);!function($){"use strict";var dismiss='[data-dismiss="alert"]',Alert=function(el){$(el).on('click',dismiss,this.close)}
Alert.prototype.close=function(e){var $this=$(this),selector=$this.attr('data-target'),$parent
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=$(selector)
e&&e.preventDefault()
$parent.length||($parent=$this.hasClass('alert')?$this:$this.parent())
$parent.trigger(e=$.Event('close'))
if(e.isDefaultPrevented())return
$parent.removeClass('in')
function removeElement(){$parent
.trigger('closed')
.remove()}
$.support.transition&&$parent.hasClass('fade')?$parent.on($.support.transition.end,removeElement):removeElement()}
var old=$.fn.alert
$.fn.alert=function(option){return this.each(function(){var $this=$(this),data=$this.data('alert')
if(!data)$this.data('alert',(data=new Alert(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.alert.Constructor=Alert
$.fn.alert.noConflict=function(){$.fn.alert=old
return this}
$(document).on('click.alert.data-api',dismiss,Alert.prototype.close)}(window.jQuery);!function($){"use strict";var Button=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.button.defaults,options)}
Button.prototype.setState=function(state){var d='disabled',$el=this.$element,data=$el.data(),val=$el.is('input')?'val':'html'
state=state+'Text'
data.resetText||$el.data('resetText',$el[val]())
$el[val](data[state]||this.options[state])
setTimeout(function(){state=='loadingText'?$el.addClass(d).attr(d,d):$el.removeClass(d).removeAttr(d)},0)}
Button.prototype.toggle=function(){var $parent=this.$element.closest('[data-toggle="buttons-radio"]')
$parent&&$parent
.find('.active')
.removeClass('active')
this.$element.toggleClass('active')}
var old=$.fn.button
$.fn.button=function(option){return this.each(function(){var $this=$(this),data=$this.data('button'),options=typeof option=='object'&&option
if(!data)$this.data('button',(data=new Button(this,options)))
if(option=='toggle')data.toggle()
else if(option)data.setState(option)})}
$.fn.button.defaults={loadingText:'loading...'}
$.fn.button.Constructor=Button
$.fn.button.noConflict=function(){$.fn.button=old
return this}
$(document).on('click.button.data-api','[data-toggle^=button]',function(e){var $btn=$(e.target)
if(!$btn.hasClass('btn'))$btn=$btn.closest('.btn')
$btn.button('toggle')})}(window.jQuery);!function($){"use strict";var Carousel=function(element,options){this.$element=$(element)
this.$indicators=this.$element.find('.carousel-indicators')
this.options=options
this.options.pause=='hover'&&this.$element
.on('mouseenter',$.proxy(this.pause,this))
.on('mouseleave',$.proxy(this.cycle,this))}
Carousel.prototype={cycle:function(e){if(!e)this.paused=false
if(this.interval)clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval))
return this},getActiveIndex:function(){this.$active=this.$element.find('.item.active')
this.$items=this.$active.parent().children()
return this.$items.index(this.$active)},to:function(pos){var activeIndex=this.getActiveIndex(),that=this
if(pos>(this.$items.length-1)||pos<0)return
if(this.sliding){return this.$element.one('slid',function(){that.to(pos)})}
if(activeIndex==pos){return this.pause().cycle()}
return this.slide(pos>activeIndex?'next':'prev',$(this.$items[pos]))},pause:function(e){if(!e)this.paused=true
if(this.$element.find('.next, .prev').length&&$.support.transition.end){this.$element.trigger($.support.transition.end)
this.cycle()}
clearInterval(this.interval)
this.interval=null
return this},next:function(){if(this.sliding)return
return this.slide('next')},prev:function(){if(this.sliding)return
return this.slide('prev')},slide:function(type,next){var $active=this.$element.find('.item.active'),$next=next||$active[type](),isCycling=this.interval,direction=type=='next'?'left':'right',fallback=type=='next'?'first':'last',that=this,e
this.sliding=true
isCycling&&this.pause()
$next=$next.length?$next:this.$element.find('.item')[fallback]()
e=$.Event('slide',{relatedTarget:$next[0],direction:direction})
if($next.hasClass('active'))return
if(this.$indicators.length){this.$indicators.find('.active').removeClass('active')
this.$element.one('slid',function(){var $nextIndicator=$(that.$indicators.children()[that.getActiveIndex()])
$nextIndicator&&$nextIndicator.addClass('active')})}
if($.support.transition&&this.$element.hasClass('slide')){this.$element.trigger(e)
if(e.isDefaultPrevented())return
$next.addClass(type)
$next[0].offsetWidth
$active.addClass(direction)
$next.addClass(direction)
this.$element.one($.support.transition.end,function(){$next.removeClass([type,direction].join(' ')).addClass('active')
$active.removeClass(['active',direction].join(' '))
that.sliding=false
setTimeout(function(){that.$element.trigger('slid')},0)})}else{this.$element.trigger(e)
if(e.isDefaultPrevented())return
$active.removeClass('active')
$next.addClass('active')
this.sliding=false
this.$element.trigger('slid')}
isCycling&&this.cycle()
return this}}
var old=$.fn.carousel
$.fn.carousel=function(option){return this.each(function(){var $this=$(this),data=$this.data('carousel'),options=$.extend({},$.fn.carousel.defaults,typeof option=='object'&&option),action=typeof option=='string'?option:options.slide
if(!data)$this.data('carousel',(data=new Carousel(this,options)))
if(typeof option=='number')data.to(option)
else if(action)data[action]()
else if(options.interval)data.pause().cycle()})}
$.fn.carousel.defaults={interval:5000,pause:'hover'}
$.fn.carousel.Constructor=Carousel
$.fn.carousel.noConflict=function(){$.fn.carousel=old
return this}
$(document).on('click.carousel.data-api','[data-slide], [data-slide-to]',function(e){var $this=$(this),href,$target=$($this.attr('data-target')||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,'')),options=$.extend({},$target.data(),$this.data()),slideIndex
$target.carousel(options)
if(slideIndex=$this.attr('data-slide-to')){$target.data('carousel').pause().to(slideIndex).cycle()}
e.preventDefault()})}(window.jQuery);!function($){"use strict";var Collapse=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.collapse.defaults,options)
if(this.options.parent){this.$parent=$(this.options.parent)}
this.options.toggle&&this.toggle()}
Collapse.prototype={constructor:Collapse,dimension:function(){var hasWidth=this.$element.hasClass('width')
return hasWidth?'width':'height'},show:function(){var dimension,scroll,actives,hasData
if(this.transitioning||this.$element.hasClass('in'))return
dimension=this.dimension()
scroll=$.camelCase(['scroll',dimension].join('-'))
actives=this.$parent&&this.$parent.find('> .accordion-group > .in')
if(actives&&actives.length){hasData=actives.data('collapse')
if(hasData&&hasData.transitioning)return
actives.collapse('hide')
hasData||actives.data('collapse',null)}
this.$element[dimension](0)
this.transition('addClass',$.Event('show'),'shown')
$.support.transition&&this.$element[dimension](this.$element[0][scroll])},hide:function(){var dimension
if(this.transitioning||!this.$element.hasClass('in'))return
dimension=this.dimension()
this.reset(this.$element[dimension]())
this.transition('removeClass',$.Event('hide'),'hidden')
this.$element[dimension](0)},reset:function(size){var dimension=this.dimension()
this.$element
.removeClass('collapse')
[dimension](size||'auto')
[0].offsetWidth
this.$element[size!==null?'addClass':'removeClass']('collapse')
return this},transition:function(method,startEvent,completeEvent){var that=this,complete=function(){if(startEvent.type=='show')that.reset()
that.transitioning=0
that.$element.trigger(completeEvent)}
this.$element.trigger(startEvent)
if(startEvent.isDefaultPrevented())return
this.transitioning=1
this.$element[method]('in')
$.support.transition&&this.$element.hasClass('collapse')?this.$element.one($.support.transition.end,complete):complete()},toggle:function(){this[this.$element.hasClass('in')?'hide':'show']()}}
var old=$.fn.collapse
$.fn.collapse=function(option){return this.each(function(){var $this=$(this),data=$this.data('collapse'),options=$.extend({},$.fn.collapse.defaults,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('collapse',(data=new Collapse(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.collapse.defaults={toggle:true}
$.fn.collapse.Constructor=Collapse
$.fn.collapse.noConflict=function(){$.fn.collapse=old
return this}
$(document).on('click.collapse.data-api','[data-toggle=collapse]',function(e){var $this=$(this),href,target=$this.attr('data-target')||e.preventDefault()||(href=$this.attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''),option=$(target).data('collapse')?'toggle':$this.data()
$this[$(target).hasClass('in')?'addClass':'removeClass']('collapsed')
$(target).collapse(option)})}(window.jQuery);!function($){"use strict";var toggle='[data-toggle=dropdown]',Dropdown=function(element){var $el=$(element).on('click.dropdown.data-api',this.toggle)
$('html').on('click.dropdown.data-api',function(){$el.parent().removeClass('open')})}
Dropdown.prototype={constructor:Dropdown,toggle:function(e){var $this=$(this),$parent,isActive
if($this.is('.disabled, :disabled'))return
$parent=getParent($this)
isActive=$parent.hasClass('open')
clearMenus()
if(!isActive){$parent.toggleClass('open')}
$this.focus()
return false},keydown:function(e){var $this,$items,$active,$parent,isActive,index
if(!/(38|40|27)/.test(e.keyCode))return
$this=$(this)
e.preventDefault()
e.stopPropagation()
if($this.is('.disabled, :disabled'))return
$parent=getParent($this)
isActive=$parent.hasClass('open')
if(!isActive||(isActive&&e.keyCode==27)){if(e.which==27)$parent.find(toggle).focus()
return $this.click()}
$items=$('[role=menu] li:not(.divider):visible a',$parent)
if(!$items.length)return
index=$items.index($items.filter(':focus'))
if(e.keyCode==38&&index>0)index--
if(e.keyCode==40&&index<$items.length-1)index++
if(!~index)index=0
$items
.eq(index)
.focus()}}
function clearMenus(){$(toggle).each(function(){getParent($(this)).removeClass('open')})}
function getParent($this){var selector=$this.attr('data-target'),$parent
if(!selector){selector=$this.attr('href')
selector=selector&&/#/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,'')}
$parent=selector&&$(selector)
if(!$parent||!$parent.length)$parent=$this.parent()
return $parent}
var old=$.fn.dropdown
$.fn.dropdown=function(option){return this.each(function(){var $this=$(this),data=$this.data('dropdown')
if(!data)$this.data('dropdown',(data=new Dropdown(this)))
if(typeof option=='string')data[option].call($this)})}
$.fn.dropdown.Constructor=Dropdown
$.fn.dropdown.noConflict=function(){$.fn.dropdown=old
return this}
$(document)
.on('click.dropdown.data-api',clearMenus)
.on('click.dropdown.data-api','.dropdown form',function(e){e.stopPropagation()})
.on('.dropdown-menu',function(e){e.stopPropagation()})
.on('click.dropdown.data-api',toggle,Dropdown.prototype.toggle)
.on('keydown.dropdown.data-api',toggle+', [role=menu]',Dropdown.prototype.keydown)}(window.jQuery);var $allDropdowns=$();$.fn.dropdownHover=function(options){$allDropdowns=$allDropdowns.add(this.parent());return this.each(function(){var $this=$(this).parent(),defaults={delay:200,instantlyCloseOthers:true},data={delay:$(this).data('delay'),instantlyCloseOthers:$(this).data('close-others')},options=$.extend(true,{},defaults,options,data),timeout;$this.hover(function(){if(options.instantlyCloseOthers===true)
$allDropdowns.removeClass('open');window.clearTimeout(timeout);$(this).addClass('open');},function(){timeout=window.setTimeout(function(){$this.removeClass('open');},options.delay);});});};!function($){"use strict";var Modal=function(element,options){this.options=options
this.$element=$(element)
.delegate('[data-dismiss="modal"]','click.dismiss.modal',$.proxy(this.hide,this))
this.options.remote&&this.$element.find('.modal-body').load(this.options.remote)}
Modal.prototype={constructor:Modal,toggle:function(){return this[!this.isShown?'show':'hide']()},show:function(){var that=this,e=$.Event('show')
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass('fade')
if(!that.$element.parent().length){that.$element.appendTo(document.body)}
that.$element.show()
if(transition){that.$element[0].offsetWidth}
that.$element
.addClass('in')
.attr('aria-hidden',false)
that.enforceFocus()
transition?that.$element.one($.support.transition.end,function(){that.$element.focus().trigger('shown')}):that.$element.focus().trigger('shown')})},hide:function(e){e&&e.preventDefault()
var that=this
e=$.Event('hide')
this.$element.trigger(e)
if(!this.isShown||e.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off('focusin.modal')
this.$element
.removeClass('in')
.attr('aria-hidden',true)
$.support.transition&&this.$element.hasClass('fade')?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var that=this
$(document).on('focusin.modal',function(e){if(that.$element[0]!==e.target&&!that.$element.has(e.target).length){that.$element.focus()}})},escape:function(){var that=this
if(this.isShown&&this.options.keyboard){this.$element.on('keyup.dismiss.modal',function(e){e.which==27&&that.hide()})}else if(!this.isShown){this.$element.off('keyup.dismiss.modal')}},hideWithTransition:function(){var that=this,timeout=setTimeout(function(){that.$element.off($.support.transition.end)
that.hideModal()},500)
this.$element.one($.support.transition.end,function(){clearTimeout(timeout)
that.hideModal()})},hideModal:function(){var that=this
this.$element.hide()
this.backdrop(function(){that.removeBackdrop()
that.$element.trigger('hidden')})},removeBackdrop:function(){this.$backdrop.remove()
this.$backdrop=null},backdrop:function(callback){var that=this,animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />')
.appendTo(document.body)
this.$backdrop.click(this.options.backdrop=='static'?$.proxy(this.$element[0].focus,this.$element[0]):$.proxy(this.hide,this))
if(doAnimate)this.$backdrop[0].offsetWidth
this.$backdrop.addClass('in')
if(!callback)return
doAnimate?this.$backdrop.one($.support.transition.end,callback):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one($.support.transition.end,callback):callback()}else if(callback){callback()}}}
var old=$.fn.modal
$.fn.modal=function(option){return this.each(function(){var $this=$(this),data=$this.data('modal'),options=$.extend({},$.fn.modal.defaults,$this.data(),typeof option=='object'&&option)
if(!data)$this.data('modal',(data=new Modal(this,options)))
if(typeof option=='string')data[option]()
else if(options.show)data.show()})}
$.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
$.fn.modal.Constructor=Modal
$.fn.modal.noConflict=function(){$.fn.modal=old
return this}
$(document).on('click.modal.data-api','[data-toggle="modal"]',function(e){var $this=$(this),href=$this.attr('href'),$target=$($this.attr('data-target')||(href&&href.replace(/.*(?=#[^\s]+$)/,''))),option=$target.data('modal')?'toggle':$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data())
e.preventDefault()
$target
.modal(option)
.one('hide',function(){$this.focus()})})}(window.jQuery);!function($){"use strict";var Tooltip=function(element,options){this.init('tooltip',element,options)}
Tooltip.prototype={constructor:Tooltip,init:function(type,element,options){var eventIn,eventOut,triggers,trigger,i
this.type=type
this.$element=$(element)
this.options=this.getOptions(options)
this.enabled=true
triggers=this.options.trigger.split(' ')
for(i=triggers.length;i--;){trigger=triggers[i]
if(trigger=='click'){this.$element.on('click.'+this.type,this.options.selector,$.proxy(this.toggle,this))}else if(trigger!='manual'){eventIn=trigger=='hover'?'mouseenter':'focus'
eventOut=trigger=='hover'?'mouseleave':'blur'
this.$element.on(eventIn+'.'+this.type,this.options.selector,$.proxy(this.enter,this))
this.$element.on(eventOut+'.'+this.type,this.options.selector,$.proxy(this.leave,this))}}
this.options.selector?(this._options=$.extend({},this.options,{trigger:'manual',selector:''})):this.fixTitle()},getOptions:function(options){options=$.extend({},$.fn[this.type].defaults,this.$element.data(),options)
if(options.delay&&typeof options.delay=='number'){options.delay={show:options.delay,hide:options.delay}}
return options},enter:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type)
if(!self.options.delay||!self.options.delay.show)return self.show()
clearTimeout(this.timeout)
self.hoverState='in'
this.timeout=setTimeout(function(){if(self.hoverState=='in')self.show()},self.options.delay.show)},leave:function(e){var self=$(e.currentTarget)[this.type](this._options).data(this.type)
if(this.timeout)clearTimeout(this.timeout)
if(!self.options.delay||!self.options.delay.hide)return self.hide()
self.hoverState='out'
this.timeout=setTimeout(function(){if(self.hoverState=='out')self.hide()},self.options.delay.hide)},show:function(){var $tip,pos,actualWidth,actualHeight,placement,tp,e=$.Event('show')
if(this.hasContent()&&this.enabled){this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip=this.tip()
this.setContent()
if(this.options.animation){$tip.addClass('fade')}
placement=typeof this.options.placement=='function'?this.options.placement.call(this,$tip[0],this.$element[0]):this.options.placement
$tip
.detach()
.css({top:0,left:0,display:'block'})
this.options.container?$tip.appendTo(this.options.container):$tip.insertAfter(this.$element)
pos=this.getPosition()
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight
switch(placement){case'bottom':tp={top:pos.top+pos.height,left:pos.left+pos.width/2-actualWidth/2}
break
case'top':tp={top:pos.top-actualHeight,left:pos.left+pos.width/2-actualWidth/2}
break
case'left':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth}
break
case'right':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width}
break}
this.applyPlacement(tp,placement)
this.$element.trigger('shown')}},applyPlacement:function(offset,placement){var $tip=this.tip(),width=$tip[0].offsetWidth,height=$tip[0].offsetHeight,actualWidth,actualHeight,delta,replace
$tip
.offset(offset)
.addClass(placement)
.addClass('in')
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight
if(placement=='top'&&actualHeight!=height){offset.top=offset.top+height-actualHeight
replace=true}
if(placement=='bottom'||placement=='top'){delta=0
if(offset.left<0){delta=offset.left*-2
offset.left=0
$tip.offset(offset)
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight}
this.replaceArrow(delta-width+actualWidth,actualWidth,'left')}else{this.replaceArrow(actualHeight-height,actualHeight,'top')}
if(replace)$tip.offset(offset)},replaceArrow:function(delta,dimension,position){this
.arrow()
.css(position,delta?(50*(1-delta/dimension)+"%"):'')},setContent:function(){var $tip=this.tip(),title=this.getTitle()
$tip.find('.tooltip-inner')[this.options.html?'html':'text'](title)
$tip.removeClass('fade in top bottom left right')},hide:function(){var that=this,$tip=this.tip(),e=$.Event('hide')
this.$element.trigger(e)
if(e.isDefaultPrevented())return
$tip.removeClass('in')
function removeWithAnimation(){var timeout=setTimeout(function(){$tip.off($.support.transition.end).detach()},500)
$tip.one($.support.transition.end,function(){clearTimeout(timeout)
$tip.detach()})}
$.support.transition&&this.$tip.hasClass('fade')?removeWithAnimation():$tip.detach()
this.$element.trigger('hidden')
return this},fixTitle:function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').attr('title','')}},hasContent:function(){return this.getTitle()},getPosition:function(){var el=this.$element[0]
return $.extend({},(typeof el.getBoundingClientRect=='function')?el.getBoundingClientRect():{width:el.offsetWidth,height:el.offsetHeight},this.$element.offset())},getTitle:function(){var title,$e=this.$element,o=this.options
title=$e.attr('data-original-title')||(typeof o.title=='function'?o.title.call($e[0]):o.title)
return title},tip:function(){return this.$tip=this.$tip||$(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(e){var self=e?$(e.currentTarget)[this.type](this._options).data(this.type):this
self.tip().hasClass('in')?self.hide():self.show()},destroy:function(){this.hide().$element.off('.'+this.type).removeData(this.type)}}
var old=$.fn.tooltip
$.fn.tooltip=function(option){return this.each(function(){var $this=$(this),data=$this.data('tooltip'),options=typeof option=='object'&&option
if(!data)$this.data('tooltip',(data=new Tooltip(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.tooltip.Constructor=Tooltip
$.fn.tooltip.defaults={animation:true,placement:'top',selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:'hover focus',title:'',delay:0,html:false,container:false}
$.fn.tooltip.noConflict=function(){$.fn.tooltip=old
return this}}(window.jQuery);!function($){"use strict";var Popover=function(element,options){this.init('popover',element,options)}
Popover.prototype=$.extend({},$.fn.tooltip.Constructor.prototype,{constructor:Popover,setContent:function(){var $tip=this.tip(),title=this.getTitle(),content=this.getContent()
$tip.find('.popover-title')[this.options.html?'html':'text'](title)
$tip.find('.popover-content')[this.options.html?'html':'text'](content)
$tip.removeClass('fade top bottom left right in')},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var content,$e=this.$element,o=this.options
content=(typeof o.content=='function'?o.content.call($e[0]):o.content)||$e.attr('data-content')
return content},tip:function(){if(!this.$tip){this.$tip=$(this.options.template)}
return this.$tip},destroy:function(){this.hide().$element.off('.'+this.type).removeData(this.type)}})
var old=$.fn.popover
$.fn.popover=function(option){return this.each(function(){var $this=$(this),data=$this.data('popover'),options=typeof option=='object'&&option
if(!data)$this.data('popover',(data=new Popover(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.popover.Constructor=Popover
$.fn.popover.defaults=$.extend({},$.fn.tooltip.defaults,{placement:'right',trigger:'click',content:'',template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'})
$.fn.popover.noConflict=function(){$.fn.popover=old
return this}}(window.jQuery);!function($){"use strict";function ScrollSpy(element,options){var process=$.proxy(this.process,this),$element=$(element).is('body')?$(window):$(element),href
this.options=$.extend({},$.fn.scrollspy.defaults,options)
this.$scrollElement=$element.on('scroll.scroll-spy.data-api',process)
this.selector=(this.options.target||((href=$(element).attr('href'))&&href.replace(/.*(?=#[^\s]+$)/,''))||'')+' .nav li > a'
this.$body=$('body')
this.refresh()
this.process()}
ScrollSpy.prototype={constructor:ScrollSpy,refresh:function(){var self=this,$targets
this.offsets=$([])
this.targets=$([])
$targets=this.$body
.find(this.selector)
.map(function(){var $el=$(this),href=$el.data('target')||$el.attr('href'),$href=/^#\w/.test(href)&&$(href)
return($href&&$href.length&&[[$href.position().top+(!$.isWindow(self.$scrollElement.get(0))&&self.$scrollElement.scrollTop()),href]])||null})
.sort(function(a,b){return a[0]-b[0]})
.each(function(){self.offsets.push(this[0])
self.targets.push(this[1])})},process:function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset,scrollHeight=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,maxScroll=scrollHeight-this.$scrollElement.height(),offsets=this.offsets,targets=this.targets,activeTarget=this.activeTarget,i
if(scrollTop>=maxScroll){return activeTarget!=(i=targets.last()[0])&&this.activate(i)}
for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(!offsets[i+1]||scrollTop<=offsets[i+1])&&this.activate(targets[i])}},activate:function(target){var active,selector
this.activeTarget=target
$(this.selector)
.parent('.active')
.removeClass('active')
selector=this.selector
+'[data-target="'+target+'"],'
+this.selector+'[href="'+target+'"]'
active=$(selector)
.parent('li')
.addClass('active')
if(active.parent('.dropdown-menu').length){active=active.closest('li.dropdown').addClass('active')}
active.trigger('activate')}}
var old=$.fn.scrollspy
$.fn.scrollspy=function(option){return this.each(function(){var $this=$(this),data=$this.data('scrollspy'),options=typeof option=='object'&&option
if(!data)$this.data('scrollspy',(data=new ScrollSpy(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.scrollspy.Constructor=ScrollSpy
$.fn.scrollspy.defaults={offset:10}
$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old
return this}
$(window).on('load',function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this)
$spy.scrollspy($spy.data())})})}(window.jQuery);!function($){"use strict";var Tab=function(element){this.element=$(element)}
Tab.prototype={constructor:Tab,show:function(){var $this=this.element,$ul=$this.closest('ul:not(.dropdown-menu)'),selector=$this.attr('data-target'),previous,$target,e
if(!selector){selector=$this.attr('href')
selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,'')}
if($this.parent('li').hasClass('active'))return
previous=$ul.find('.active:last a')[0]
e=$.Event('show',{relatedTarget:previous})
$this.trigger(e)
if(e.isDefaultPrevented())return
$target=$(selector)
this.activate($this.parent('li'),$ul)
this.activate($target,$target.parent(),function(){$this.trigger({type:'shown',relatedTarget:previous})})},activate:function(element,container,callback){var $active=container.find('> .active'),transition=callback&&$.support.transition&&$active.hasClass('fade')
function next(){$active
.removeClass('active')
.find('> .dropdown-menu > .active')
.removeClass('active')
element.addClass('active')
if(transition){element[0].offsetWidth
element.addClass('in')}else{element.removeClass('fade')}
if(element.parent('.dropdown-menu')){element.closest('li.dropdown').addClass('active')}
callback&&callback()}
transition?$active.one($.support.transition.end,next):next()
$active.removeClass('in')}}
var old=$.fn.tab
$.fn.tab=function(option){return this.each(function(){var $this=$(this),data=$this.data('tab')
if(!data)$this.data('tab',(data=new Tab(this)))
if(typeof option=='string')data[option]()})}
$.fn.tab.Constructor=Tab
$.fn.tab.noConflict=function(){$.fn.tab=old
return this}
$(document).on('click.tab.data-api','[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault()
$(this).tab('show')})}(window.jQuery);!function($){"use strict";var Typeahead=function(element,options){this.$element=$(element)
this.options=$.extend({},$.fn.typeahead.defaults,options)
this.matcher=this.options.matcher||this.matcher
this.sorter=this.options.sorter||this.sorter
this.highlighter=this.options.highlighter||this.highlighter
this.updater=this.options.updater||this.updater
this.source=this.options.source
this.$menu=$(this.options.menu)
this.shown=false
this.listen()}
Typeahead.prototype={constructor:Typeahead,select:function(){var val=this.$menu.find('.active').attr('data-value')
this.$element
.val(this.updater(val))
.change()
return this.hide()},updater:function(item){return item},show:function(){var pos=$.extend({},this.$element.position(),{height:this.$element[0].offsetHeight})
this.$menu
.insertAfter(this.$element)
.css({top:pos.top+pos.height,left:pos.left})
.show()
this.shown=true
return this},hide:function(){this.$menu.hide()
this.shown=false
return this},lookup:function(event){var items
this.query=this.$element.val()
if(!this.query||this.query.length<this.options.minLength){return this.shown?this.hide():this}
items=$.isFunction(this.source)?this.source(this.query,$.proxy(this.process,this)):this.source
return items?this.process(items):this},process:function(items){var that=this
items=$.grep(items,function(item){return that.matcher(item)})
items=this.sorter(items)
if(!items.length){return this.shown?this.hide():this}
return this.render(items.slice(0,this.options.items)).show()},matcher:function(item){return~item.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(items){var beginswith=[],caseSensitive=[],caseInsensitive=[],item
while(item=items.shift()){if(!item.toLowerCase().indexOf(this.query.toLowerCase()))beginswith.push(item)
else if(~item.indexOf(this.query))caseSensitive.push(item)
else caseInsensitive.push(item)}
return beginswith.concat(caseSensitive,caseInsensitive)},highlighter:function(item){var query=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,'\\$&')
return item.replace(new RegExp('('+query+')','ig'),function($1,match){return'<strong>'+match+'</strong>'})},render:function(items){var that=this
items=$(items).map(function(i,item){i=$(that.options.item).attr('data-value',item)
i.find('a').html(that.highlighter(item))
return i[0]})
items.first().addClass('active')
this.$menu.html(items)
return this},next:function(event){var active=this.$menu.find('.active').removeClass('active'),next=active.next()
if(!next.length){next=$(this.$menu.find('li')[0])}
next.addClass('active')},prev:function(event){var active=this.$menu.find('.active').removeClass('active'),prev=active.prev()
if(!prev.length){prev=this.$menu.find('li').last()}
prev.addClass('active')},listen:function(){this.$element
.on('focus',$.proxy(this.focus,this))
.on('blur',$.proxy(this.blur,this))
.on('keypress',$.proxy(this.keypress,this))
.on('keyup',$.proxy(this.keyup,this))
if(this.eventSupported('keydown')){this.$element.on('keydown',$.proxy(this.keydown,this))}
this.$menu
.on('click',$.proxy(this.click,this))
.on('mouseenter','li',$.proxy(this.mouseenter,this))
.on('mouseleave','li',$.proxy(this.mouseleave,this))},eventSupported:function(eventName){var isSupported=eventName in this.$element
if(!isSupported){this.$element.setAttribute(eventName,'return;')
isSupported=typeof this.$element[eventName]==='function'}
return isSupported},move:function(e){if(!this.shown)return
switch(e.keyCode){case 9:case 13:case 27:e.preventDefault()
break
case 38:e.preventDefault()
this.prev()
break
case 40:e.preventDefault()
this.next()
break}
e.stopPropagation()},keydown:function(e){this.suppressKeyPressRepeat=~$.inArray(e.keyCode,[40,38,9,13,27])
this.move(e)},keypress:function(e){if(this.suppressKeyPressRepeat)return
this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break
case 9:case 13:if(!this.shown)return
this.select()
break
case 27:if(!this.shown)return
this.hide()
break
default:this.lookup()}
e.stopPropagation()
e.preventDefault()},focus:function(e){this.focused=true},blur:function(e){this.focused=false
if(!this.mousedover&&this.shown)this.hide()},click:function(e){e.stopPropagation()
e.preventDefault()
this.select()
this.$element.focus()},mouseenter:function(e){this.mousedover=true
this.$menu.find('.active').removeClass('active')
$(e.currentTarget).addClass('active')},mouseleave:function(e){this.mousedover=false
if(!this.focused&&this.shown)this.hide()}}
var old=$.fn.typeahead
$.fn.typeahead=function(option){return this.each(function(){var $this=$(this),data=$this.data('typeahead'),options=typeof option=='object'&&option
if(!data)$this.data('typeahead',(data=new Typeahead(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1}
$.fn.typeahead.Constructor=Typeahead
$.fn.typeahead.noConflict=function(){$.fn.typeahead=old
return this}
$(document).on('focus.typeahead.data-api','[data-provide="typeahead"]',function(e){var $this=$(this)
if($this.data('typeahead'))return
$this.typeahead($this.data())})}(window.jQuery);!function($){"use strict";var Affix=function(element,options){this.options=$.extend({},$.fn.affix.defaults,options)
this.$window=$(window)
.on('scroll.affix.data-api',$.proxy(this.checkPosition,this))
.on('click.affix.data-api',$.proxy(function(){setTimeout($.proxy(this.checkPosition,this),1)},this))
this.$element=$(element)
this.checkPosition()}
Affix.prototype.checkPosition=function(){if(!this.$element.is(':visible'))return
var scrollHeight=$(document).height(),scrollTop=this.$window.scrollTop(),position=this.$element.offset(),offset=this.options.offset,offsetBottom=offset.bottom,offsetTop=offset.top,reset='affix affix-top affix-bottom',affix
if(typeof offset!='object')offsetBottom=offsetTop=offset
if(typeof offsetTop=='function')offsetTop=offset.top()
if(typeof offsetBottom=='function')offsetBottom=offset.bottom()
affix=this.unpin!=null&&(scrollTop+this.unpin<=position.top)?false:offsetBottom!=null&&(position.top+this.$element.height()>=scrollHeight-offsetBottom)?'bottom':offsetTop!=null&&scrollTop<=offsetTop?'top':false
if(this.affixed===affix)return
this.affixed=affix
this.unpin=affix=='bottom'?position.top-scrollTop:null
this.$element.removeClass(reset).addClass('affix'+(affix?'-'+affix:''))}
var old=$.fn.affix
$.fn.affix=function(option){return this.each(function(){var $this=$(this),data=$this.data('affix'),options=typeof option=='object'&&option
if(!data)$this.data('affix',(data=new Affix(this,options)))
if(typeof option=='string')data[option]()})}
$.fn.affix.Constructor=Affix
$.fn.affix.defaults={offset:0}
$.fn.affix.noConflict=function(){$.fn.affix=old
return this}
$(window).on('load',function(){$('[data-spy="affix"]').each(function(){var $spy=$(this),data=$spy.data()
data.offset=data.offset||{}
data.offsetBottom&&(data.offset.bottom=data.offsetBottom)
data.offsetTop&&(data.offset.top=data.offsetTop)
$spy.affix(data)})})}(window.jQuery);(function($){$.timeago=function(timestamp){if(timestamp instanceof Date)return inWords(timestamp);else if(typeof timestamp=="string")return inWords($.timeago.parse(timestamp));else return inWords($.timeago.datetime(timestamp));};var $t=$.timeago;$.extend($.timeago,{settings:{refreshMillis:60000,allowFuture:false,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"yang lalu",suffixFromNow:"dari sekarang",seconds:"kurang dari satu menit",minute:"sekitar satu menit",minutes:"%d menit",hour:"sekitar satu jam",hours:"sekitar %d jam",day:"satu hari",days:"%d hari",month:"sekitar satu bulan",months:"%d bulan",year:"sekitar satu tahun",years:"%d tahun",numbers:[]}},inWords:function(distanceMillis){var $l=this.settings.strings;var prefix=$l.prefixAgo;var suffix=$l.suffixAgo;if(this.settings.allowFuture){if(distanceMillis<0){prefix=$l.prefixFromNow;suffix=$l.suffixFromNow;}
distanceMillis=Math.abs(distanceMillis);}
var seconds=distanceMillis/1000;var minutes=seconds/60;var hours=minutes/60;var days=hours/24;var years=days/365;function substitute(stringOrFunction,number){var string=$.isFunction(stringOrFunction)?stringOrFunction(number,distanceMillis):stringOrFunction;var value=($l.numbers&&$l.numbers[number])||number;return string.replace(/%d/i,value);}
var words=seconds<45&&substitute($l.seconds,Math.round(seconds))||seconds<90&&substitute($l.minute,1)||minutes<45&&substitute($l.minutes,Math.round(minutes))||minutes<90&&substitute($l.hour,1)||hours<24&&substitute($l.hours,Math.round(hours))||hours<48&&substitute($l.day,1)||days<30&&substitute($l.days,Math.floor(days))||days<60&&substitute($l.month,1)||days<365&&substitute($l.months,Math.floor(days/30))||years<2&&substitute($l.year,1)||substitute($l.years,Math.floor(years));return $.trim([prefix,words,suffix].join(" "));},parse:function(iso8601){var s=$.trim(iso8601);s=s.replace(/\.\d\d\d+/,"");s=s.replace(/-/,"/").replace(/-/,"/");s=s.replace(/T/," ").replace(/Z/," +0700");s=s.replace(/([\+-]\d\d)\:?(\d\d)/," $1$2");return new Date(s);},datetime:function(elem){var isTime=$(elem).get(0).tagName.toLowerCase()=="time";var iso8601=isTime?$(elem).attr("datetime"):$(elem).attr("title");return $t.parse(iso8601);}});$.fn.timeago=function(){var self=this;self.each(refresh);var $s=$t.settings;if($s.refreshMillis>0){setInterval(function(){self.each(refresh);},$s.refreshMillis);}
return self;};function refresh(){var data=prepareData(this);if(!isNaN(data.datetime)){$(this).text(inWords(data.datetime));}
return this;}
function prepareData(element){element=$(element);if(!element.data("timeago")){element.data("timeago",{datetime:$t.datetime(element)});var text=$.trim(element.text());if(text.length>0)element.attr("title",text);}
return element.data("timeago");}
function inWords(date){return $t.inWords(distance(date));}
function distance(date){return(new Date().getTime()-date.getTime());}
document.createElement("abbr");document.createElement("time");})(jQuery);var JSON;if(!JSON){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/
.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@')
.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']')
.replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());(function(jQuery,window,undefined){$.fn.jqm=function(options){var o=$.extend(true,$.jqm.params,options);return this.each(function(){var e=$(this),jqm=$(this).data('jqm');if(!jqm)jqm={ID:I++};e.data('jqm',$.extend(o,jqm)).addClass('jqm-init');o.trigger&&$(this).jqmAddTrigger(o.trigger);});};$.fn.jqmAddTrigger=function(trigger){return this.each(function(){if(!addTrigger($(this),'jqmShow',trigger))
err("jqmAddTrigger must be called on initialized modals")});};$.fn.jqmAddClose=function(trigger){return this.each(function(){if(!addTrigger($(this),'jqmHide',trigger))
err("jqmAddClose must be called on initialized modals")});};$.fn.jqmShow=function(trigger){return this.each(function(){!this._jqmShown&&show($(this),trigger);});};$.fn.jqmHide=function(trigger){return this.each(function(){this._jqmShown&&hide($(this),trigger);});};var
err=function(msg){if(window.console&&window.console.error)window.console.error(msg);},show=function(e,t){var o=e.data('jqm'),t=t||window.event,z=(parseInt(e.css('z-index'))),z=(z>0)?z:3000,v=$('<div></div>').addClass(o.overlayClass).css({height:'100%',width:'100%',position:'fixed',left:0,top:0,'z-index':z-1,opacity:o.overlay/100}),h={w:e,c:o,o:v,t:t};e.css('z-index',z);if(o.ajax){var target=o.target||e,url=o.ajax;target=(typeof target=='string')?$(target,e):$(target);if(url.substr(0,1)=='@')url=$(t).attr(url.substring(1));open(h);target.html(o.ajaxText).load(url,function(){o.onLoad&&o.onLoad.call(this,h);});}
else{open(h);}},hide=function(e,t){var o=e.data('jqm'),t=t||window.event,h={w:e,c:o,o:e.data('jqmv'),t:t};close(h);},onShow=function(hash){if(hash.c.overlay>0)
hash.o.prependTo('body');hash.w.show();$.jqm.focusFunc(hash.w);return true;},onHide=function(hash){hash.w.hide()&&hash.o&&hash.o.remove();return true;},addTrigger=function(e,key,trigger){if(!e.data('jqm'))return false;return $(trigger).each(function(){this[key]=this[key]||[];this[key].push(e);}).click(function(){var trigger=this;$.each(this[key],function(i,e){e[key](trigger);});return false;});},open=function(h){var e=h.w,v=h.o,o=h.c;if(o.onShow(h)!==false){e[0]._jqmShown=true;if(o.modal){!A[0]&&F('bind');A.push(e);}
else e.jqmAddClose(v);o.closeClass&&e.jqmAddClose($('.'+o.closeClass,e));o.toTop&&v&&e.before('<span id="jqmP'+o.ID+'"></span>').insertAfter(v);e.data('jqmv',v);}},close=function(h){var e=h.w,v=h.o,o=h.c;if(o.onHide(h)!==false){e[0]._jqmShown=false;if(o.modal){A.pop();!A[0]&&F('unbind');}
o.toTop&&v&&$('#jqmP'+o.ID).after(e).remove();}},F=function(t){$(document)[t]("keypress keydown mousedown",X);},X=function(e){var modal=$(e.target).data('jqm')||$(e.target).parents('.jqm-init:first').data('jqm'),activeModal=A[A.length-1].data('jqm');if(modal&&modal.ID==activeModal.ID)return true;return $.jqm.focusFunc(activeModal);},I=0,A=[];$.jqm={params:{overlay:50,overlayClass:'jqmOverlay',closeClass:'jqmClose',trigger:'.jqModal',ajax:false,target:false,ajaxText:'',modal:false,toTop:false,onShow:onShow,onHide:onHide,onLoad:false},focusFunc:function(e){$(':input:visible:first',e).focus();return false;}};})(jQuery,window);(function($){$.fn.autoResize=function(options){var settings=$.extend({onResize:function(){},animate:true,animateDuration:150,animateCallback:function(){},extraSpace:20,limit:1000},options);this.filter('textarea').each(function(){var textarea=$(this).css({resize:'none','overflow-y':'hidden'}),origHeight=textarea.height(),clone=(function(){var props=['height','width','lineHeight','textDecoration','letterSpacing'],propOb={};$.each(props,function(i,prop){propOb[prop]=textarea.css(prop);});return textarea.clone().removeAttr('id').removeAttr('name').css({position:'absolute',top:0,left:-9999}).css(propOb).attr('tabIndex','-1').insertBefore(textarea);})(),lastScrollTop=null,updateSize=function(){clone.height(0).val($(this).val()).scrollTop(10000);var scrollTop=Math.max(clone.scrollTop(),origHeight)+settings.extraSpace,toChange=$(this).add(clone);if(lastScrollTop===scrollTop){return;}
lastScrollTop=scrollTop;if(scrollTop>=settings.limit){$(this).css('overflow-y','');return;}
settings.onResize.call(this);settings.animate&&textarea.css('display')==='block'?toChange.stop().animate({height:scrollTop},settings.animateDuration,settings.animateCallback):toChange.height(scrollTop);};textarea
.unbind('.dynSiz')
.bind('keyup.dynSiz',updateSize)
.bind('keydown.dynSiz',updateSize)
.bind('change.dynSiz',updateSize);});return this;};})(jQuery);;(function($){var SelectBox=this.SelectBox=function(select,options){if(select instanceof jQuery){if(select.length>0){select=select[0];}else{return;}}
this.typeTimer=null;this.typeSearch='';this.isMac=navigator.platform.match(/mac/i);options='object'===typeof options?options:{};this.selectElement=select;if(!options.mobile&&navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i)){return false;}
if('select'!==select.tagName.toLowerCase()){return false;}
this.init(options);};SelectBox.prototype.version='1.2.0';SelectBox.prototype.init=function(options){var select=$(this.selectElement);if(select.data('selectBox-control')){return false;}
var control=$('<a class="selectBox" />'),inline=select.attr('multiple')||parseInt(select.attr('size'))>1,settings=options||{},tabIndex=parseInt(select.prop('tabindex'))||0,self=this;control
.width(select.outerWidth())
.addClass(select.attr('class'))
.attr('title',select.attr('title')||'')
.attr('tabindex',tabIndex)
.css('display','inline-block')
.bind('focus.selectBox',function(){if(this!==document.activeElement&&document.body!==document.activeElement){$(document.activeElement).blur();}
if(control.hasClass('selectBox-active')){return;}
control.addClass('selectBox-active');select.trigger('focus');})
.bind('blur.selectBox',function(){if(!control.hasClass('selectBox-active')){return;}
control.removeClass('selectBox-active');select.trigger('blur');});if(!$(window).data('selectBox-bindings')){$(window)
.data('selectBox-bindings',true)
.bind('scroll.selectBox',(settings.hideOnWindowScroll)?this.hideMenus:$.noop)
.bind('resize.selectBox',this.hideMenus);}
if(select.attr('disabled')){control.addClass('selectBox-disabled');}
select.bind('click.selectBox',function(event){control.focus();event.preventDefault();});if(inline){options=this.getOptions('inline');control
.append(options)
.data('selectBox-options',options).addClass('selectBox-inline selectBox-menuShowing')
.bind('keydown.selectBox',function(event){self.handleKeyDown(event);})
.bind('keypress.selectBox',function(event){self.handleKeyPress(event);})
.bind('mousedown.selectBox',function(event){if(1!==event.which){return;}
if($(event.target).is('A.selectBox-inline')){event.preventDefault();}
if(!control.hasClass('selectBox-focus')){control.focus();}})
.insertAfter(select);if(!select[0].style.height){var size=select.attr('size')?parseInt(select.attr('size')):5;var tmp=control
.clone()
.removeAttr('id')
.css({position:'absolute',top:'-9999em'})
.show()
.appendTo('body');tmp.find('.selectBox-options').html('<li><a>\u00A0</a></li>');var optionHeight=parseInt(tmp.find('.selectBox-options A:first').html('&nbsp;').outerHeight());tmp.remove();control.height(optionHeight*size);}
this.disableSelection(control);}else{var label=$('<span class="selectBox-label" />'),arrow=$('<span class="selectBox-arrow" />');label.attr('class',this.getLabelClass()).text(this.getLabelText());options=this.getOptions('dropdown');options.appendTo('BODY');control
.data('selectBox-options',options)
.addClass('selectBox-dropdown')
.append(label)
.append(arrow)
.bind('mousedown.selectBox',function(event){if(1===event.which){if(control.hasClass('selectBox-menuShowing')){self.hideMenus();}else{event.stopPropagation();options
.data('selectBox-down-at-x',event.screenX)
.data('selectBox-down-at-y',event.screenY);self.showMenu();}}})
.bind('keydown.selectBox',function(event){self.handleKeyDown(event);})
.bind('keypress.selectBox',function(event){self.handleKeyPress(event);})
.bind('open.selectBox',function(event,triggerData){if(triggerData&&triggerData._selectBox===true){return;}
self.showMenu();})
.bind('close.selectBox',function(event,triggerData){if(triggerData&&triggerData._selectBox===true){return;}
self.hideMenus();})
.insertAfter(select);var labelWidth=control.width()
-arrow.outerWidth()
-(parseInt(label.css('paddingLeft'))||0)
-(parseInt(label.css('paddingRight'))||0);label.width(labelWidth);this.disableSelection(control);}
select
.addClass('selectBox')
.data('selectBox-control',control)
.data('selectBox-settings',settings)
.hide();};SelectBox.prototype.getOptions=function(type){var options;var select=$(this.selectElement);var self=this;var _getOptions=function(select,options){select.children('OPTION, OPTGROUP').each(function(){if($(this).is('OPTION')){if($(this).length>0){self.generateOptions($(this),options);}else{options.append('<li>\u00A0</li>');}}else{var optgroup=$('<li class="selectBox-optgroup" />');optgroup.text($(this).attr('label'));options.append(optgroup);options=_getOptions($(this),options);}});return options;};switch(type){case'inline':options=$('<ul class="selectBox-options" />');options=_getOptions(select,options);options
.find('A')
.bind('mouseover.selectBox',function(event){self.addHover($(this).parent());})
.bind('mouseout.selectBox',function(event){self.removeHover($(this).parent());})
.bind('mousedown.selectBox',function(event){if(1!==event.which){return}
event.preventDefault();if(!select.selectBox('control').hasClass('selectBox-active')){select.selectBox('control').focus();}})
.bind('mouseup.selectBox',function(event){if(1!==event.which){return;}
self.hideMenus();self.selectOption($(this).parent(),event);});this.disableSelection(options);return options;case'dropdown':options=$('<ul class="selectBox-dropdown-menu selectBox-options" />');options=_getOptions(select,options);options
.data('selectBox-select',select)
.css('display','none')
.appendTo('BODY')
.find('A')
.bind('mousedown.selectBox',function(event){if(event.which===1){event.preventDefault();if(event.screenX===options.data('selectBox-down-at-x')&&event.screenY===options.data('selectBox-down-at-y')){options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');if(/android/i.test(navigator.userAgent.toLowerCase())&&/chrome/i.test(navigator.userAgent.toLowerCase())){self.selectOption($(this).parent());}
self.hideMenus();}}})
.bind('mouseup.selectBox',function(event){if(1!==event.which){return;}
if(event.screenX===options.data('selectBox-down-at-x')&&event.screenY===options.data('selectBox-down-at-y')){return;}else{options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');}
self.selectOption($(this).parent());self.hideMenus();})
.bind('mouseover.selectBox',function(event){self.addHover($(this).parent());})
.bind('mouseout.selectBox',function(event){self.removeHover($(this).parent());});var classes=select.attr('class')||'';if(''!==classes){classes=classes.split(' ');for(var i=0;i<classes.length;i++){options.addClass(classes[i]+'-selectBox-dropdown-menu');}}
this.disableSelection(options);return options;}};SelectBox.prototype.getLabelClass=function(){var selected=$(this.selectElement).find('OPTION:selected');return('selectBox-label '+(selected.attr('class')||'')).replace(/\s+$/,'');};SelectBox.prototype.getLabelText=function(){var selected=$(this.selectElement).find('OPTION:selected');return selected.text()||'\u00A0';};SelectBox.prototype.setLabel=function(){var select=$(this.selectElement);var control=select.data('selectBox-control');if(!control){return;}
control
.find('.selectBox-label')
.attr('class',this.getLabelClass())
.text(this.getLabelText());};SelectBox.prototype.destroy=function(){var select=$(this.selectElement);var control=select.data('selectBox-control');if(!control){return;}
var options=control.data('selectBox-options');options.remove();control.remove();select
.removeClass('selectBox')
.removeData('selectBox-control')
.data('selectBox-control',null)
.removeData('selectBox-settings')
.data('selectBox-settings',null)
.show();};SelectBox.prototype.refresh=function(){var select=$(this.selectElement),control=select.data('selectBox-control'),type=control.hasClass('selectBox-dropdown')?'dropdown':'inline',options;control.data('selectBox-options').remove();options=this.getOptions(type);control.data('selectBox-options',options);switch(type){case'inline':control.append(options);break;case'dropdown':this.setLabel();$("BODY").append(options);break;}
if('dropdown'===type&&control.hasClass('selectBox-menuShowing')){this.showMenu();}};SelectBox.prototype.showMenu=function(){var self=this,select=$(this.selectElement),control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),options=control.data('selectBox-options');if(control.hasClass('selectBox-disabled')){return false;}
this.hideMenus();var borderBottomWidth=parseInt(control.css('borderBottomWidth'))||0;var borderTopWidth=parseInt(control.css('borderTopWidth'))||0;var pos=control.offset(),topPositionCorrelation=(settings.topPositionCorrelation)?settings.topPositionCorrelation:0,bottomPositionCorrelation=(settings.bottomPositionCorrelation)?settings.bottomPositionCorrelation:0,optionsHeight=options.outerHeight(),controlHeight=control.outerHeight(),maxHeight=parseInt(options.css('max-height')),scrollPos=$(window).scrollTop(),heightToTop=pos.top-scrollPos,heightToBottom=$(window).height()-(heightToTop+controlHeight),posTop=(heightToTop>heightToBottom)&&(settings.keepInViewport==null?true:settings.keepInViewport),top=posTop?pos.top-optionsHeight+borderTopWidth+topPositionCorrelation:pos.top+controlHeight-borderBottomWidth-bottomPositionCorrelation;if(heightToTop<maxHeight&&heightToBottom<maxHeight){if(posTop){var maxHeightDiff=maxHeight-(heightToTop-5);options.css({'max-height':maxHeight-maxHeightDiff+'px'});top=top+maxHeightDiff;}else{var maxHeightDiff=maxHeight-(heightToBottom-5);options.css({'max-height':maxHeight-maxHeightDiff+'px'});}}
options.data('posTop',posTop);options
.width(control.innerWidth())
.css({top:top,left:control.offset().left})
.addClass('selectBox-options selectBox-options-'+(posTop?'top':'bottom'));if(select.triggerHandler('beforeopen')){return false;}
var dispatchOpenEvent=function(){select.triggerHandler('open',{_selectBox:true});};switch(settings.menuTransition){case'fade':options.fadeIn(settings.menuSpeed,dispatchOpenEvent);break;case'slide':options.slideDown(settings.menuSpeed,dispatchOpenEvent);break;default:options.show(settings.menuSpeed,dispatchOpenEvent);break;}
if(!settings.menuSpeed){dispatchOpenEvent();}
var li=options.find('.selectBox-selected:first');this.keepOptionInView(li,true);this.addHover(li);control.addClass('selectBox-menuShowing selectBox-menuShowing-'+(posTop?'top':'bottom'));$(document).bind('mousedown.selectBox',function(event){if(1===event.which){if($(event.target).parents().andSelf().hasClass('selectBox-options')){return;}
self.hideMenus();}});};SelectBox.prototype.hideMenus=function(){if($(".selectBox-dropdown-menu:visible").length===0){return;}
$(document).unbind('mousedown.selectBox');$(".selectBox-dropdown-menu").each(function(){var options=$(this),select=options.data('selectBox-select'),control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),posTop=options.data('posTop');if(select.triggerHandler('beforeclose')){return false;}
var dispatchCloseEvent=function(){select.triggerHandler('close',{_selectBox:true});};if(settings){switch(settings.menuTransition){case'fade':options.fadeOut(settings.menuSpeed,dispatchCloseEvent);break;case'slide':options.slideUp(settings.menuSpeed,dispatchCloseEvent);break;default:options.hide(settings.menuSpeed,dispatchCloseEvent);break;}
if(!settings.menuSpeed){dispatchCloseEvent();}
control.removeClass('selectBox-menuShowing selectBox-menuShowing-'+(posTop?'top':'bottom'));}else{$(this).hide();$(this).triggerHandler('close',{_selectBox:true});$(this).removeClass('selectBox-menuShowing selectBox-menuShowing-'+(posTop?'top':'bottom'));}
options.css('max-height','');options.removeClass('selectBox-options-'+(posTop?'top':'bottom'));options.data('posTop',false);});};SelectBox.prototype.selectOption=function(li,event){var select=$(this.selectElement);li=$(li);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings');if(control.hasClass('selectBox-disabled')){return false;}
if(0===li.length||li.hasClass('selectBox-disabled')){return false;}
if(select.attr('multiple')){if(event.shiftKey&&control.data('selectBox-last-selected')){li.toggleClass('selectBox-selected');var affectedOptions;if(li.index()>control.data('selectBox-last-selected').index()){affectedOptions=li
.siblings()
.slice(control.data('selectBox-last-selected').index(),li.index());}else{affectedOptions=li
.siblings()
.slice(li.index(),control.data('selectBox-last-selected').index());}
affectedOptions=affectedOptions.not('.selectBox-optgroup, .selectBox-disabled');if(li.hasClass('selectBox-selected')){affectedOptions.addClass('selectBox-selected');}else{affectedOptions.removeClass('selectBox-selected');}}else if((this.isMac&&event.metaKey)||(!this.isMac&&event.ctrlKey)){li.toggleClass('selectBox-selected');}else{li.siblings().removeClass('selectBox-selected');li.addClass('selectBox-selected');}}else{li.siblings().removeClass('selectBox-selected');li.addClass('selectBox-selected');}
if(control.hasClass('selectBox-dropdown')){control.find('.selectBox-label').text(li.text());}
var i=0,selection=[];if(select.attr('multiple')){control.find('.selectBox-selected A').each(function(){selection[i++]=$(this).attr('rel');});}else{selection=li.find('A').attr('rel');}
control.data('selectBox-last-selected',li);if(select.val()!==selection){select.val(selection);this.setLabel();select.trigger('change');}
return true;};SelectBox.prototype.addHover=function(li){li=$(li);var select=$(this.selectElement),control=select.data('selectBox-control'),options=control.data('selectBox-options');options.find('.selectBox-hover').removeClass('selectBox-hover');li.addClass('selectBox-hover');};SelectBox.prototype.getSelectElement=function(){return this.selectElement;};SelectBox.prototype.removeHover=function(li){li=$(li);var select=$(this.selectElement),control=select.data('selectBox-control'),options=control.data('selectBox-options');options.find('.selectBox-hover').removeClass('selectBox-hover');};SelectBox.prototype.keepOptionInView=function(li,center){if(!li||li.length===0){return;}
var select=$(this.selectElement),control=select.data('selectBox-control'),options=control.data('selectBox-options'),scrollBox=control.hasClass('selectBox-dropdown')?options:options.parent(),top=parseInt(li.offset().top-scrollBox.position().top),bottom=parseInt(top+li.outerHeight());if(center){scrollBox.scrollTop(li.offset().top-scrollBox.offset().top+scrollBox.scrollTop()-
(scrollBox.height()/2));}else{if(top<0){scrollBox.scrollTop(li.offset().top-scrollBox.offset().top+scrollBox.scrollTop());}
if(bottom>scrollBox.height()){scrollBox.scrollTop((li.offset().top+li.outerHeight())-scrollBox.offset().top+
scrollBox.scrollTop()-scrollBox.height());}}};SelectBox.prototype.handleKeyDown=function(event){var select=$(this.selectElement),control=select.data('selectBox-control'),options=control.data('selectBox-options'),settings=select.data('selectBox-settings'),totalOptions=0,i=0;if(control.hasClass('selectBox-disabled')){return;}
switch(event.keyCode){case 8:event.preventDefault();this.typeSearch='';break;case 9:case 27:this.hideMenus();this.removeHover();break;case 13:if(control.hasClass('selectBox-menuShowing')){this.selectOption(options.find('LI.selectBox-hover:first'),event);if(control.hasClass('selectBox-dropdown')){this.hideMenus();}}else{this.showMenu();}
break;case 38:case 37:event.preventDefault();if(control.hasClass('selectBox-menuShowing')){var prev=options.find('.selectBox-hover').prev('LI');totalOptions=options.find('LI:not(.selectBox-optgroup)').length;i=0;while(prev.length===0||prev.hasClass('selectBox-disabled')||prev.hasClass('selectBox-optgroup')){prev=prev.prev('LI');if(prev.length===0){if(settings.loopOptions){prev=options.find('LI:last');}else{prev=options.find('LI:first');}}
if(++i>=totalOptions){break;}}
this.addHover(prev);this.selectOption(prev,event);this.keepOptionInView(prev);}else{this.showMenu();}
break;case 40:case 39:event.preventDefault();if(control.hasClass('selectBox-menuShowing')){var next=options.find('.selectBox-hover').next('LI');totalOptions=options.find('LI:not(.selectBox-optgroup)').length;i=0;while(0===next.length||next.hasClass('selectBox-disabled')||next.hasClass('selectBox-optgroup')){next=next.next('LI');if(next.length===0){if(settings.loopOptions){next=options.find('LI:first');}else{next=options.find('LI:last');}}
if(++i>=totalOptions){break;}}
this.addHover(next);this.selectOption(next,event);this.keepOptionInView(next);}else{this.showMenu();}
break;}};SelectBox.prototype.handleKeyPress=function(event){var select=$(this.selectElement),control=select.data('selectBox-control'),options=control.data('selectBox-options'),self=this;if(control.hasClass('selectBox-disabled')){return;}
switch(event.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:if(!control.hasClass('selectBox-menuShowing')){this.showMenu();}
event.preventDefault();clearTimeout(this.typeTimer);this.typeSearch+=String.fromCharCode(event.charCode||event.keyCode);options.find('A').each(function(){if($(this).text().substr(0,self.typeSearch.length).toLowerCase()===self.typeSearch.toLowerCase()){self.addHover($(this).parent());self.selectOption($(this).parent(),event);self.keepOptionInView($(this).parent());return false;}});this.typeTimer=setTimeout(function(){self.typeSearch='';},1000);break;}};SelectBox.prototype.enable=function(){var select=$(this.selectElement);select.prop('disabled',false);var control=select.data('selectBox-control');if(!control){return;}
control.removeClass('selectBox-disabled');};SelectBox.prototype.disable=function(){var select=$(this.selectElement);select.prop('disabled',true);var control=select.data('selectBox-control');if(!control){return;}
control.addClass('selectBox-disabled');};SelectBox.prototype.setValue=function(value){var select=$(this.selectElement);select.val(value);value=select.val();if(null===value){value=select.children().first().val();select.val(value);}
var control=select.data('selectBox-control');if(!control){return;}
var settings=select.data('selectBox-settings'),options=control.data('selectBox-options');this.setLabel();options.find('.selectBox-selected').removeClass('selectBox-selected');options.find('A').each(function(){if(typeof(value)==='object'){for(var i=0;i<value.length;i++){if($(this).attr('rel')==value[i]){$(this).parent().addClass('selectBox-selected');}}}else{if($(this).attr('rel')==value){$(this).parent().addClass('selectBox-selected');}}});if(settings.change){settings.change.call(select);}};SelectBox.prototype.setOptions=function(options){var select=$(this.selectElement),control=select.data('selectBox-control');switch(typeof(options)){case'string':select.html(options);break;case'object':select.html('');for(var i in options){if(options[i]===null){continue;}
if(typeof(options[i])==='object'){var optgroup=$('<optgroup label="'+i+'" />');for(var j in options[i]){optgroup.append('<option value="'+j+'">'+options[i][j]+'</option>');}
select.append(optgroup);}else{var option=$('<option value="'+i+'">'+options[i]+'</option>');select.append(option);}}
break;}
if(control){this.refresh();}};SelectBox.prototype.disableSelection=function(selector){$(selector).css('MozUserSelect','none').bind('selectstart',function(event){event.preventDefault();});};SelectBox.prototype.generateOptions=function(self,options){var li=$('<li />'),a=$('<a />');li.addClass(self.attr('class'));li.data(self.data());a.attr('rel',self.val()).text(self.text());li.append(a);if(self.attr('disabled')){li.addClass('selectBox-disabled');}
if(self.attr('selected')){li.addClass('selectBox-selected');}
options.append(li);};$.extend($.fn,{selectBox:function(method,options){var selectBox;switch(method){case'control':return $(this).data('selectBox-control');case'settings':if(!options){return $(this).data('selectBox-settings');}
$(this).each(function(){$(this).data('selectBox-settings',$.extend(true,$(this).data('selectBox-settings'),options));});break;case'options':if(undefined===options){return $(this).data('selectBox-control').data('selectBox-options');}
$(this).each(function(){if(selectBox=$(this).data('selectBox')){selectBox.setOptions(options);}});break;case'value':if(undefined===options){return $(this).val();}
$(this).each(function(){if(selectBox=$(this).data('selectBox')){selectBox.setValue(options);}});break;case'refresh':$(this).each(function(){if(selectBox=$(this).data('selectBox')){selectBox.refresh();}});break;case'enable':$(this).each(function(){if(selectBox=$(this).data('selectBox')){selectBox.enable(this);}});break;case'disable':$(this).each(function(){if(selectBox=$(this).data('selectBox')){selectBox.disable();}});break;case'destroy':$(this).each(function(){if(selectBox=$(this).data('selectBox')){selectBox.destroy();$(this).data('selectBox',null);}});break;case'instance':return $(this).data('selectBox');default:$(this).each(function(idx,select){if(!$(select).data('selectBox')){$(select).data('selectBox',new SelectBox(select,method));}});break;}
return $(this);}});})(jQuery);;(function(window,document,$){var isOperaMini=Object.prototype.toString.call(window.operamini)=='[object OperaMini]';var isInputSupported='placeholder' in document.createElement('input')&&!isOperaMini;var isTextareaSupported='placeholder' in document.createElement('textarea')&&!isOperaMini;var prototype=$.fn;var valHooks=$.valHooks;var propHooks=$.propHooks;var hooks;var placeholder;if(isInputSupported&&isTextareaSupported){placeholder=prototype.placeholder=function(){return this;};placeholder.input=placeholder.textarea=true;}else{placeholder=prototype.placeholder=function(){var $this=this;$this
.filter((isInputSupported?'textarea':':input')+'[placeholder]')
.not('.placeholder')
.bind({'focus.placeholder':clearPlaceholder,'blur.placeholder':setPlaceholder})
.data('placeholder-enabled',true)
.trigger('blur.placeholder');return $this;};placeholder.input=isInputSupported;placeholder.textarea=isTextareaSupported;hooks={'get':function(element){var $element=$(element);var $passwordInput=$element.data('placeholder-password');if($passwordInput){return $passwordInput[0].value;}
return $element.data('placeholder-enabled')&&$element.hasClass('placeholder')?'':element.value;},'set':function(element,value){var $element=$(element);var $passwordInput=$element.data('placeholder-password');if($passwordInput){return $passwordInput[0].value=value;}
if(!$element.data('placeholder-enabled')){return element.value=value;}
if(value==''){element.value=value;if(element!=safeActiveElement()){setPlaceholder.call(element);}}else if($element.hasClass('placeholder')){clearPlaceholder.call(element,true,value)||(element.value=value);}else{element.value=value;}
return $element;}};if(!isInputSupported){valHooks.input=hooks;propHooks.value=hooks;}
if(!isTextareaSupported){valHooks.textarea=hooks;propHooks.value=hooks;}
$(function(){$(document).delegate('form','submit.placeholder',function(){var $inputs=$('.placeholder',this).each(clearPlaceholder);setTimeout(function(){$inputs.each(setPlaceholder);},10);});});$(window).bind('beforeunload.placeholder',function(){$('.placeholder').each(function(){this.value='';});});}
function args(elem){var newAttrs={};var rinlinejQuery=/^jQuery\d+$/;$.each(elem.attributes,function(i,attr){if(attr.specified&&!rinlinejQuery.test(attr.name)){newAttrs[attr.name]=attr.value;}});return newAttrs;}
function clearPlaceholder(event,value){var input=this;var $input=$(input);if(input.value==$input.attr('placeholder')&&$input.hasClass('placeholder')){if($input.data('placeholder-password')){$input=$input.hide().next().show().attr('id',$input.removeAttr('id').data('placeholder-id'));if(event===true){return $input[0].value=value;}
$input.focus();}else{input.value='';$input.removeClass('placeholder');input==safeActiveElement()&&input.select();}}}
function setPlaceholder(){var $replacement;var input=this;var $input=$(input);var id=this.id;if(input.value==''){if(input.type=='password'){if(!$input.data('placeholder-textinput')){try{$replacement=$input.clone().attr({'type':'text'});}catch(e){$replacement=$('<input>').attr($.extend(args(this),{'type':'text'}));}
$replacement
.removeAttr('name')
.data({'placeholder-password':$input,'placeholder-id':id})
.bind('focus.placeholder',clearPlaceholder);$input
.data({'placeholder-textinput':$replacement,'placeholder-id':id})
.before($replacement);}
$input=$input.removeAttr('id').hide().prev().attr('id',id).show();}
$input.addClass('placeholder');$input[0].value=$input.attr('placeholder');}else{$input.removeClass('placeholder');}}
function safeActiveElement(){try{return document.activeElement;}catch(exception){}}}(this,document,jQuery));!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=function(){},f=this,g={ajaxSettings:{},autoSelectFirst:!1,appendTo:document.body,serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:b.formatResult,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:e,onSearchComplete:e,onSearchError:e,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:function(a,b,c){return-1!==a.value.toLowerCase().indexOf(c)},paramName:"query",transformResult:function(b){return"string"==typeof b?a.parseJSON(b):b},showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1};f.element=c,f.el=a(c),f.suggestions=[],f.badQueries=[],f.selectedIndex=-1,f.currentValue=f.element.value,f.intervalId=0,f.cachedResponse={},f.onChangeInterval=null,f.onChange=null,f.isLocal=!1,f.suggestionsContainer=null,f.noSuggestionsContainer=null,f.options=a.extend({},g,d),f.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},f.hint=null,f.hintValue="",f.selection=null,f.initialize(),f.setOptions(d)}var c=function(){return{escapeRegExChars:function(a){return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),d={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40};b.utils=c,a.Autocomplete=b,b.formatResult=function(a,b){var d=a.value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),e="("+c.escapeRegExChars(b)+")";return d.replace(new RegExp(e,"gi"),"<strong>$1</strong>")},b.prototype={killerFn:null,initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.killerFn=function(b){0===a(b.target).closest("."+d.options.containerClass).length&&(d.killSuggestions(),d.disableKillerFn())},d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo),"auto"!==g.width&&c.width(g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),0===a.options.minChars&&0===a.el.val().length&&a.onValueChange()},onBlur:function(){this.enableKillerFn()},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=c.options;a.extend(d,b),c.isLocal=a.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearInterval(a.onChangeInterval),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if(i.top+="top"===e?-f:g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()-2+"px"),c.css(i)}},enableKillerFn:function(){var b=this;a(document).on("click.autocomplete",b.killerFn)},disableKillerFn:function(){var b=this;a(document).off("click.autocomplete",b.killerFn)},killSuggestions:function(){var a=this;a.stopKillSuggestions(),a.intervalId=window.setInterval(function(){a.hide(),a.stopKillSuggestions()},50)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:document.selection?(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length):!0},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===d.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case d.ESC:b.el.val(b.currentValue),b.hide();break;case d.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case d.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(-1===b.selectedIndex)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case d.RETURN:if(-1===b.selectedIndex)return void b.hide();b.select(b.selectedIndex);break;case d.UP:b.moveUp();break;case d.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case d.UP:case d.DOWN:return}clearInterval(b.onChangeInterval),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeInterval=setInterval(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearInterval(b.onChangeInterval),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,d=h.ignoreParams?null:h.params,h.onSearchStart.call(g.element,h.params)!==!1){if(a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&a.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearInterval(b.onChangeInterval),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(0===this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a){var c=a.data[e];return b===c?"":(b=c,'<div class="autocomplete-group"><strong>'+b+"</strong></div>")};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=a(b.suggestionsContainer),d=a(b.noSuggestionsContainer);this.adjustContainerWidth(),d.detach(),c.empty(),c.append(d),b.fixPosition(),c.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width&&(b=c.el.outerWidth()-2,e.width(b>0?b:300))},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),-1===a.inArray(b,["auto","bottom","top"])&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&0===a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,-1!==d.selectedIndex&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(-1!==b.selectedIndex)return 0===b.selectedIndex?(a(b.suggestionsContainer).children().first().removeClass(b.classes.selected),b.selectedIndex=-1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,f>e?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||c.el.val(c.getValue(c.suggestions[b].value)),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),b.disableKillerFn(),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.autocomplete=a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return 0===arguments.length?this.first().data(e):this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))})}});$(document).ready(function(){var _l={id:{'di':'di','Semua kategori':'Semua kategori'},en:{'di':'in','Semua kategori':'All categories'}};var lang='id';var dl=document.cookie.match(/(^|\s|;)lang=(en|id)/);if(dl){lang=dl[2];}
var _al=_l[lang];var _dm={'general':'','hotlist':'<span>Hot List</span>','catalog':'<span>Catalogs</span>'};function acTransformResult(response){response=JSON.parse(response);var r={suggestions:[]};if(!response||!response["domains"])return r;var domains=response["domains"];for(var d in domains){for(var i=0;i<domains[d].length;i++){var t={value:domains[d][i].title,data:{category:_dm[d],belong:''},data2:domains[d][i]};if(!t.data2.url.match(/(&|\?)source=jahe/)){t.data2.url+=(t.data2.url.indexOf('?')<0?'?':'&')+'source=jahe';}
r.suggestions.push(t);}}
return r;}
function acFormatResult(suggestion,currentValue){var terms=$('#search-keyword').val().trim().split(/ +/g);var value=$('<div/>').text(suggestion.value).html().split(/ +/g);for(var i=0;i<value.length;i++){value[i]=value[i].
replace(new RegExp('^('+terms.join('|')+')','gi'),function(match){return'<strong>'+match+'</strong>';});}
return value.join('&nbsp;')+' '+suggestion.data.belong;}
function acOnSelect(suggestion){location.href=''+suggestion.data2.url;}
$('#search-keyword').autocomplete({serviceUrl:self.AUTOCOMPLETE_SERVICE_URL,paramName:'q',transformResult:acTransformResult,formatResult:acFormatResult,onSelect:acOnSelect,groupBy:'category',ajaxSettings:{beforeSend:function(xhr,settings){settings.url=settings.url.replace(/\?q=([^&]+)/,function(m){return'/'+encodeURI(decodeURIComponent(m.substr(3).replace(/\+/g,' ')));});}},triggerSelectOnValidInput:false,appendTo:$('#div_autocomplete'),noCache:true});});(function(f){function A(a,b,d){var c=a[0],g=/er/.test(d)?_indeterminate:/bl/.test(d)?n:k,e=d==_update?{checked:c[k],disabled:c[n],indeterminate:"true"==a.attr(_indeterminate)||"false"==a.attr(_determinate)}:c[g];if(/^(ch|di|in)/.test(d)&&!e)x(a,g);else if(/^(un|en|de)/.test(d)&&e)q(a,g);else if(d==_update)for(var f in e)e[f]?x(a,f,!0):q(a,f,!0);else if(!b||"toggle"==d){if(!b)a[_callback]("ifClicked");e?c[_type]!==r&&q(a,g):x(a,g)}}function x(a,b,d){var c=a[0],g=a.parent(),e=b==k,u=b==_indeterminate,v=b==n,s=u?_determinate:e?y:"enabled",F=l(a,s+t(c[_type])),B=l(a,b+t(c[_type]));if(!0!==c[b]){if(!d&&b==k&&c[_type]==r&&c.name){var w=a.closest("form"),p='input[name="'+c.name+'"]',p=w.length?w.find(p):f(p);p.each(function(){this!==c&&f(this).data(m)&&q(f(this),b)})}u?(c[b]=!0,c[k]&&q(a,k,"force")):(d||(c[b]=!0),e&&c[_indeterminate]&&q(a,_indeterminate,!1));D(a,e,b,d)}c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"default");g[_add](B||l(a,b)||"");g.attr("role")&&!u&&g.attr("aria-"+(v?n:k),"true");g[_remove](F||l(a,s)||"")}function q(a,b,d){var c=a[0],g=a.parent(),e=b==k,f=b==_indeterminate,m=b==n,s=f?_determinate:e?y:"enabled",q=l(a,s+t(c[_type])),r=l(a,b+t(c[_type]));if(!1!==c[b]){if(f||!d||"force"==d)c[b]=!1;D(a,e,s,d)}!c[n]&&l(a,_cursor,!0)&&g.find("."+C).css(_cursor,"pointer");g[_remove](r||l(a,b)||"");g.attr("role")&&!f&&g.attr("aria-"+(m?n:k),"false");g[_add](q||l(a,s)||"")}function E(a,b){if(a.data(m)){a.parent().html(a.attr("style",a.data(m).s||""));if(b)a[_callback](b);a.off(".i").unwrap();f(_label+'[for="'+a[0].id+'"]').add(a.closest(_label)).off(".i")}}function l(a,b,f){if(a.data(m))return a.data(m).o[b+(f?"":"Class")]}function t(a){return a.charAt(0).toUpperCase()+a.slice(1)}function D(a,b,f,c){if(!c){if(b)a[_callback]("ifToggled");a[_callback]("ifChanged")[_callback]("if"+t(f))}}var m="iCheck",C=m+"-helper",r="radio",k="checked",y="un"+k,n="disabled";_determinate="determinate";_indeterminate="in"+_determinate;_update="update";_type="type";_click="click";_touch="touchbegin.i touchend.i";_add="addClass";_remove="removeClass";_callback="trigger";_label="label";_cursor="cursor";_mobile=/ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);f.fn[m]=function(a,b){var d='input[type="checkbox"], input[type="'+r+'"]',c=f(),g=function(a){a.each(function(){var a=f(this);c=a.is(d)?c.add(a):c.add(a.find(d))})};if(/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(a))return a=a.toLowerCase(),g(this),c.each(function(){var c=f(this);"destroy"==a?E(c,"ifDestroyed"):A(c,!0,a);f.isFunction(b)&&b()});if("object"!=typeof a&&a)return this;var e=f.extend({checkedClass:k,disabledClass:n,indeterminateClass:_indeterminate,labelHover:!0},a),l=e.handle,v=e.hoverClass||"hover",s=e.focusClass||"focus",t=e.activeClass||"active",B=!!e.labelHover,w=e.labelHoverClass||"hover",p=(""+e.increaseArea).replace("%","")|0;if("checkbox"==l||l==r)d='input[type="'+l+'"]';-50>p&&(p=-50);g(this);return c.each(function(){var a=f(this);E(a);var c=this,b=c.id,g=-p+"%",d=100+2*p+"%",d={position:"absolute",top:g,left:g,display:"block",width:d,height:d,margin:0,padding:0,background:"#fff",border:0,opacity:0},g=_mobile?{position:"absolute",visibility:"hidden"}:p?d:{position:"absolute",opacity:0},l="checkbox"==c[_type]?e.checkboxClass||"icheckbox":e.radioClass||"i"+r,z=f(_label+'[for="'+b+'"]').add(a.closest(_label)),u=!!e.aria,y=m+"-"+Math.random().toString(36).substr(2,6),h='<div class="'+l+'" '+(u?'role="'+c[_type]+'" ':"");u&&z.each(function(){h+='aria-labelledby="';this.id?h+=this.id:(this.id=y,h+=y);h+='"'});h=a.wrap(h+"/>")[_callback]("ifCreated").parent().append(e.insert);d=f('<ins class="'+C+'"/>').css(d).appendTo(h);a.data(m,{o:e,s:a.attr("style")}).css(g);e.inheritClass&&h[_add](c.className||"");e.inheritID&&b&&h.attr("id",m+"-"+b);"static"==h.css("position")&&h.css("position","relative");A(a,!0,_update);if(z.length)z.on(_click+".i mouseover.i mouseout.i "+_touch,function(b){var d=b[_type],e=f(this);if(!c[n]){if(d==_click){if(f(b.target).is("a"))return;A(a,!1,!0)}else B&&(/ut|nd/.test(d)?(h[_remove](v),e[_remove](w)):(h[_add](v),e[_add](w)));if(_mobile)b.stopPropagation();else return!1}});a.on(_click+".i focus.i blur.i keyup.i keydown.i keypress.i",function(b){var d=b[_type];b=b.keyCode;if(d==_click)return!1;if("keydown"==d&&32==b)return c[_type]==r&&c[k]||(c[k]?q(a,k):x(a,k)),!1;if("keyup"==d&&c[_type]==r)!c[k]&&x(a,k);else if(/us|ur/.test(d))h["blur"==d?_remove:_add](s)});d.on(_click+" mousedown mouseup mouseover mouseout "+_touch,function(b){var d=b[_type],e=/wn|up/.test(d)?t:v;if(!c[n]){if(d==_click)A(a,!1,!0);else{if(/wn|er|in/.test(d))h[_add](e);else h[_remove](e+" "+t);if(z.length&&B&&e==v)z[/ut|nd/.test(d)?_remove:_add](w)}if(_mobile)b.stopPropagation();else return!1}})})}})(window.jQuery||window.Zepto);$('.icheck').iCheck({checkboxClass:'icheckbox_square-green'});$('.iradio').iCheck({radioClass:'iradio_flat-green-med'});$('.icheck').focusin(function(){$('.icheckbox_square-green').css({"outline":"-webkit-focus-ring-color auto 5px","box-shadow":"0 0 5px rgba(81, 203, 238, 1)"});});$('.icheck').focusout(function(){$('.icheckbox_square-green').css({"outline":"-webkit-focus-ring-color auto 0px","box-shadow":"0 0 5px rgba(81, 203, 238, 0)"});});var clover={};clover.show_dialog=function(member,expire_time,url_info,f,callback,tipe){var lang=tokopedia.loc('lang');var word={id:{CONGRATS:"Selamat",SUCCESS_GOT_LUCKY_BUYER:"Anda berhasil menjadi Lucky Buyer",SUCCESS_GOT_LUCKY_MERCHANT:"Anda berhasil menjadi Lucky Merchant",SUCCESS_GOT_EXTENSION_BUYER:"Masa berlaku Lucky Buyer Anda diperpanjang hingga "+expire_time+" hari",SUCCESS_GOT_EXTENSION_MERCHANT:"Masa berlaku Lucky Merchant Anda diperpanjang hingga "+expire_time+" hari",HERE:"di sini",VALID_UNTIL:"Berlaku sampai",DAY_AHEAD:"hari ke depan",INFO_DETAIL:"Info lebih lanjut klik",BENEFIT_BUYER:"Dapatkan diskon up to 20% dan cashback up to 5%<br/>ditanggung Tokopedia",BENEFIT_EXTENSION_BUYER:"Terus belanja di Lucky Merchant dan dapatkan cashback up to 5%",BENEFIT_MERCHANT:"Kesempatan mendapatkan pesanan lebih banyak setiap harinya",FIRST_TP:"Anda juga dapat bonus Rp 5 ribu TopPoints yang aktif selama 30 hari",},en:{CONGRATS:"Congrats",SUCCESS_GOT_LUCKY_BUYER:"You successfully become Lucky Buyer",SUCCESS_GOT_EXTENSION_BUYER:"Your Lucky Buyer period got extended to "+expire_time+" days",SUCCESS_GOT_EXTENSION_MERCHANT:"Your Lucky Merchant period got extended to "+expire_time+" days",SUCCESS_GOT_LUCKY_MERCHANT:"You successfully become Lucky Merchant",HERE:"here",VALID_UNTIL:"Valid until",DAY_AHEAD:"days ahead",INFO_DETAIL:"Info details click",BENEFIT_BUYER:"Get discount up to 20% and cashback up to 5%<br/>from Tokopedia",BENEFIT_EXTENSION_BUYER:"Keep shopping at Lucky Merchant and get cashback up to 5% from Tokopedia",BENEFIT_MERCHANT:"Chance to getting more orders every day",FIRST_TP:"You've got Rp 5 ribu TopPoints bonus, valid for 30 days",}};var valid_info=word[lang].VALID_UNTIL+' '+expire_time+' '+word[lang].DAY_AHEAD;var success;var benefit;if(member=='buyer'){if(tipe===1){success=word[lang].SUCCESS_GOT_LUCKY_BUYER;benefit=word[lang].BENEFIT_BUYER;}else if(tipe===2){success=word[lang].SUCCESS_GOT_EXTENSION_BUYER;benefit=word[lang].BENEFIT_EXTENSION_BUYER;valid_info='';}}else if(member=='merchant'){if(tipe===1){success=word[lang].SUCCESS_GOT_LUCKY_MERCHANT;}else if(tipe===2){success=word[lang].SUCCESS_GOT_EXTENSION_MERCHANT;valid_info='';}
benefit=word[lang].BENEFIT_MERCHANT;}
var ftp="";if(member=='buyer'&&f)ftp=word[lang].FIRST_TP;var info='';if(url_info){info='<p class="fs-12 font-grey">'+word[lang].INFO_DETAIL+' <a href="'+url_info+'" target="_blank">'+word[lang].HERE+'</a></p>';}
var modal=''+
'<div class="relative mr-modal mr-modal--desktop hide" id="modal-1">'+
'<div class="mr-wrap">'+
'<div class="ml-15 mr-15 relative">'+
'<div class="close-top close-top--desktop">&#10006;</div>'+
'<div class="mr-header mr-header--'+member+'">'+
'<svg class="badge-mr-modal" version="1.1" width="32px" height="32px">'+
'<g>'+
'<g>'+
'<path fill="#FFFFFF" d="M12.813,1.913C12.091,1.382,9.928,0.33,7.744,1.607c-2.154,1.198-1.8,4.031-1.8,4.031S3.462,5.757,2.481,6.742c-1.334,1.339-2.269,3.486-0.538,5.579c3.734,4.514,14.029,3.499,14.029,3.499S16.206,4.276,12.813,1.913z"></path>'+
'<path fill="#FFFFFF" d="M16.18,16.028c0,0-1.014,10.295,3.499,14.029c2.092,1.729,4.239,0.795,5.58-0.54c0.985-0.979,1.103-3.462,1.103-3.462s2.832,0.354,4.031-1.801c1.277-2.184,0.225-4.346-0.306-5.067C27.724,15.794,16.18,16.028,16.18,16.028z"></path>'+
'<path fill="#FFFFFF" d="M1.914,19.188c-0.531,0.722-1.583,2.884-0.306,5.067c1.2,2.155,4.031,1.801,4.031,1.801s0.118,2.482,1.102,3.462c1.342,1.335,3.489,2.27,5.581,0.54c4.513-3.734,3.499-14.029,3.499-14.029S4.276,15.794,1.914,19.188z"></path>'+
'<path fill="#FFFFFF" d="M30.057,12.321c1.731-2.093,0.796-4.24-0.539-5.579c-0.98-0.985-3.462-1.104-3.462-1.104s0.354-2.833-1.8-4.031c-2.184-1.277-4.347-0.226-5.069,0.306c-3.393,2.363-3.159,13.907-3.159,13.907S26.323,16.835,30.057,12.321z"></path>'+
'</g>'+
'<circle fill="#CCCCCC" cx="15.941" cy="15.785" r="1.487"></circle>'+
'<path fill="#E6E6E6" d="M16.916,15.787c0,0.54-0.437,0.979-0.976,0.979c-0.54,0-0.976-0.438-0.976-0.979c0-0.538,0.436-0.975,0.976-0.975c0.38,0,0.708,0.214,0.87,0.533C16.877,15.479,16.916,15.628,16.916,15.787z"></path>'+
'</g>'+
'</svg>'+
'<h3 class="mr-header__title">'+word[lang].CONGRATS+'!</h3>'+
'<div class="mr-header__sub-title fs-16">'+success+'</div>'+
'</div>'+
'<div class="mr-content">'+
'<p class="mb-10 fs-14">'+benefit+'</p>'+
'<p class="mb-0 fs-12">'+ftp+' '+info+'</p>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'<div class="mr-overlay mr-overlay--desktop hide"></div>';$('body').append(modal);$('.mr-overlay--desktop').fadeIn(400);$('.mr-modal--desktop').fadeIn(400);$('.close-top--desktop').fadeIn(400).delay(800);$('html').addClass('dialog-mode');$('.close-top').click(function(){$('.mr-overlay--desktop').fadeOut().remove();$('.mr-modal--desktop').fadeOut().remove();$('html').removeClass('dialog-mode');if(callback){callback();}})};clover.notify=function(url,user_id,shop_id,days,url_info,show_dialog){if(user_id||shop_id){$.ajax({url:url,type:"GET",dataType:"json",data:{'user_id':user_id,'shop_id':shop_id,},success:function(result){if(result.data){var attr=result.data.attributes;var notify_buyer=attr.notify_buyer;var expiry_time_lucky_buyer=attr.expiry_time_lucky_buyer;var notify_merchant=attr.notify_merchant;var expiry_time_lucky_merchant=attr.expiry_time_lucky_merchant;var f=(typeof(attr.first)=='undefined')?0:attr.first;if(notify_buyer>0&&show_dialog==1){clover.show_dialog('buyer',expiry_time_lucky_buyer,url_info,f,function(){if(notify_merchant>0&&show_dialog==1){clover.show_dialog('merchant',expiry_time_lucky_merchant,url_info,f,0,1);}},1);}else{if(notify_merchant>0&&show_dialog==1){clover.show_dialog('merchant',expiry_time_lucky_merchant,url_info,f,0,1);}}}}});}};var tokopedia=new Object();tokopedia.processAjax=0;tokopedia.click_name='';tokopedia.eventTouch=0;tokopedia.loc=function(msg){return(lang[msg])?lang[msg]:msg;};var on_show_dialog=function(hash){hash.o.prependTo('body');hash.w.show();$("#dialog .jqm-inner").width('500px');$("html").addClass('dialog-mode');};var on_show_dialog_ajax=function(hash){hash.o.prependTo('body');hash.w.show();$('#dialog .title').html('');$("#dialog .jqm-inner").width('500px');$("html").addClass('dialog-mode');$('#dialog #rf').addClass('dialog-ajax-loader');$('#dialog .alert').remove();};var on_hide_dialog=function(hash){hash.w.hide();hash.o.remove();$("html").removeClass('dialog-mode');};tokopedia.alert=function(title,msg,uri_redirect){$('#dialog').jqm({ajax:false,overlay:20,modal:true,onShow:on_show_dialog,onHide:on_hide_dialog});tokopedia.dialog_title(title);$('#dialog #rf').html('');tokopedia.dialog_clear_message();tokopedia.remove_ajax_loader();$('#dialog #dc').prepend(''+msg+'');$('#dialog #rf').append('<div class="dialog-footer"><button class="btn btn-action jqmClose" type="submit">Ok</button></div>');$("#dialog .jqmClose").click(function(){tokopedia.dialog_close();if(uri_redirect){location.href=uri_redirect;}});$('#dialog').jqmShow();$('#dialog .jqmClose').blur();};tokopedia.alert_error=function(){var message_error=tokopedia.loc('ERROR_SERVER');if($('#dialog').is(':visible')){var message_error=tokopedia.render_message('error',message_error);tokopedia.dialog_set_message(message_error);}
else{$('#dialog').jqm({ajax:false,overlay:20,modal:true,onShow:on_show_dialog,onHide:on_hide_dialog});$('#dialog #rf').html('');tokopedia.dialog_clear_message();tokopedia.dialog_title('');$('#dialog #dc').prepend('<div class="alert alert-error"><ul><li>'+message_error+'</li></ul></div>');$('#dialog #rf').append('<div class="dialog-footer"><button class="btn btn-action jqmClose" type="submit">Ok</button></div>');$('#dialog').jqmShow();$('#dialog .jqmClose').blur();}};tokopedia.show_confirmation_dialog=function(title,msg,function_name,function_params){$('#dialog').jqm({ajax:false,overlay:20,modal:true,onShow:on_show_dialog,onHide:on_hide_dialog});if(title){tokopedia.dialog_title(title);}
$('#dialog #rf').html('');tokopedia.dialog_clear_message();$('.dialog-msg-confirm').remove();$('#dialog #dc').prepend('<div class="dialog-msg-confirm ml-10">'+msg+'</div>');$('#dialog #rf').append('<div class="dialog-footer"><button class="btn jqmClose" type="submit">'+tokopedia.loc('Cancel')+'</button> <button class="btn btn-action jqmYES" type="submit">'+tokopedia.loc('Yes')+'</button></div>');$("#dialog .jqmClose").click(function(){tokopedia.dialog_close();});$("#dialog .jqmYES").click(function(){tokopedia.eval_code(function_name,function_params);});$('#dialog').jqmShow();$('#dialog .jqmClose').blur();};tokopedia.eval_code=function(callback,params){callback(params);};tokopedia.dialog_ajax=function(uri,func){tokopedia.dialog_title('');var o_uri=parseUri(uri);if(o_uri.query){uri=uri+'&v='+new Date().getTime();}
else{uri=uri+'?v='+new Date().getTime();}
uri=encodeURI(uri);$('#dialog').jqm({ajax:uri,target:'#rf',modal:true,onLoad:function(hash){$('#dialog #rf').removeClass('dialog-ajax-loader');tokopedia.init_button_submit();$('.dialog-header_title').attr('style','');$('#dialog').jqmAddClose('.jqmClose');if(func){func();}},onShow:on_show_dialog_ajax,onHide:on_hide_dialog});$('#dialog').jqmShow();};tokopedia.dialog_xdomain_ajax=function(uri,options){tokopedia.dialog_title('');$('#dialog .dialog-msg-confirm').remove();var beforeajaxfunc=options&&options.beforeajaxfunc||null;var beforeshowfunc=options&&options.beforeshowfunc||null;var aftershowfunc=options&&options.aftershowfunc||null;var lazyloadscript=options&&options.lazyloadscript||null;var extparam=options&&options.extparam||new Object();var animatedload=1;if(options&&options.animatedload==0){animatedload=0;}
var o_uri=parseUri(uri);if(o_uri.query){uri=uri+'&v='+new Date().getTime();}
else{uri=uri+'?v='+new Date().getTime();}
uri=encodeURI(uri);if(beforeajaxfunc){beforeajaxfunc(extparam);}
$.ajax({url:uri,global:true,type:'GET',dataType:"json",xhrFields:{withCredentials:true},success:function(result){if(result.message_error){var message_error=tokopedia.render_message('error',result.message_error);tokopedia.dialog_set_message(message_error);}
if(result.html){$('#dialog').jqm({ajax:false,overlay:20,target:'#rf',modal:true,onShow:on_show_dialog,onHide:on_hide_dialog});$('#dialog .alert').remove();$('#dialog #rf').removeClass('dialog-ajax-loader');tokopedia.init_button_submit();$('.dialog-header_title').attr('style','');$('#dialog').jqmAddClose('.jqmClose');var jvscript=new Array();$('#dialog #rf')[0].innerHTML=result.html;$('#dialog #rf').find("script").each(function(i){var scjs=$(this).text();if(lazyloadscript){jvscript.push(scjs);}
else{$.globalEval(scjs);}});extparam.result=result;if(beforeshowfunc){beforeshowfunc(extparam);}
$('#dialog').jqmShow();if(lazyloadscript){for(i in jvscript){$.globalEval(jvscript[i]);}}
if(aftershowfunc){aftershowfunc(extparam);}}
else{tokopedia.alert_error();}},beforeSend:function(){if(animatedload){tokopedia.show_ajax_loader();}
tokopedia.process_ajax();},error:function(XMLHttpRequest,textStatus,errorThrown){tokopedia.alert_error();},complete:function(){tokopedia.processAjax=0;if(animatedload){tokopedia.remove_ajax_loader();}
$("#dialog .jqmClose").click(function(){tokopedia.dialog_close();});}});};tokopedia.process_ajax=function(delay){delay=(delay)?delay:2000;tokopedia.processAjax++;setTimeout("tokopedia.clear_process_ajax()",delay);};tokopedia.clear_process_ajax=function(){tokopedia.processAjax=0;};tokopedia.show_ajax_loader=function(){$('body').prepend('<div class="ajax-loader">'+tokopedia.loc('LOADING_2')+'</div>');};tokopedia.show_spinner_ajax_loader=function(){$('.deposit-link').hide();$('.deposit-link').attr('toggle',1);$('.header-deposit-container').prepend('<div class="header-ajax-loader-container"><div class="spinner-ajax-loader"></div><span class="loading_text">'+tokopedia.loc('LOADING_DEPOSIT')+'</span></div>');$('.sidebar-deposit-container').prepend('<div class="sidebar-ajax-loader-container"><div class="spinner-ajax-loader"></div><span class="loading_text">'+tokopedia.loc('LOADING_DEPOSIT')+'</span></div>');};tokopedia.show_spinner_ajax_loader_lp=function(){$('.lp-link').hide();$('.lp-link').attr('toggle',1);$('.header-lp-container').prepend('<div class="header-ajax-loader-container"><div class="spinner-ajax-loader"></div><span class="loading_text">'+tokopedia.loc('Loyalty Point Loading')+'</span></div>');$('.sidebar-lp-container').prepend('<div class="sidebar-ajax-loader-container"><div class="spinner-ajax-loader"></div><span class="loading_text">'+tokopedia.loc('Loyalty Point Loading')+'</span></div>');};tokopedia.remove_ajax_loader=function(){$('.ajax-loader').remove();};tokopedia.back_to_top=function(p){if(!p){p=0;}
$('body,html').animate({scrollTop:p},400);};tokopedia.dialog_close=function(){$('#dialog').jqmHide();};tokopedia.dialog_title=function(title){if(title){$('#dialog .dialog-header_title').html(title);$('#dialog .dialog-header').css("border-bottom","1px solid #EEEEEE");}
else{$('#dialog .dialog-header_title').html('');$('#dialog .dialog-header').css("border-bottom","none");}};tokopedia.dialog_width=function(wi){if(wi){$('#dialog .jqm-inner').width(wi);}};tokopedia.dialog_set_message=function(message){$('#dialog .alert').remove();$('.dialog-msg-confirm').remove();$('#dialog #dc').prepend(message);};tokopedia.dialog_clear_message=function(message){$('#dialog .alert').remove();$('.dialog-msg-confirm').remove();};tokopedia.render_message=function(type,message){if(type&&message){var content;var class_message=["alert"];if(type=='status'){class_message.push("alert-success");}
else if(type=='error'){class_message.push("alert-error");}
else{class_message.push("alert-success");}
var list_message;if($.isArray(message)){for(var i in message)
{if(list_message){list_message=list_message+'<li>'+message[i]+'</li>'}
else{list_message='<li>'+message[i]+'</li>'}}}
else{list_message='<li>'+message+'</li>'}
list_message='<ul class="square">'+list_message+'</ul>';content='<div class="'+class_message.join(' ')+'">'+list_message+'</div>';return content;}
else{return;}};tokopedia.init_button_submit=function(){$("button[type=submit]").on('click',function(){tokopedia.dialog_clear_message();var submit_value=$(this).get(0).getAttributeNode('value');if(submit_value){tokopedia.click_name=submit_value.value;}});$('.submit-textarea').keydown(function(e){if(e.keyCode==13&&e.ctrlKey){var parent_form=$(this).closest('form');parent_form.submit();}});};tokopedia.init_search=function(){var cat=$("#navbar-search select").find(":selected").text();$("#navbar-search select").parent().find('.cat-result-toggle').html(cat);$("#navbar-search select").on('change',function(){var cat=$(this).find(":selected").text();$(this).parent().find('.cat-result-toggle').html(cat);$("#navbar-search input").focus();});$("#navbar-search .cat-wrapper").hover(function(){$(this).addClass('active');},function(){$(this).removeClass('active');});};tokopedia.init_numeric=function(){$(document.body).on('keydown','.number-only',function(ev){if((ev.keyCode>=48&&ev.keyCode<=57)||(ev.keyCode>=96&&ev.keyCode<=105)||(ev.keyCode==8||ev.keyCode==9||ev.keyCode==46)||(ev.keyCode==35||ev.keyCode==36)||(ev.keyCode==116)||(ev.keyCode==37||ev.keyCode==39)||(ev.keyCode==190)){return true;}else{return false;}});};tokopedia.focus_message=function(){if($(".alert-error, .alert-success").length>0){if($(window).scrollTop()>$(".alert-error, .alert-success").offset().top){$('html, body').animate({scrollTop:$(".alert-error, .alert-success").offset().top-80},'fast');}}};function parseUri(str){var	o=parseUri.options,m=o.parser[o.strictMode?"strict":"loose"].exec(str),uri={},i=14;while(i--)uri[o.key[i]]=m[i]||"";uri[o.q.name]={};uri[o.key[12]].replace(o.q.parser,function($0,$1,$2){if($1)uri[o.q.name][$1]=$2;});return uri;};jQuery.parseQuery=function(qs,options){var q=(typeof qs==='string'?qs:window.location.search),o={'f':function(v){return unescape(v).replace(/\+/g,' ');}},options=(typeof qs==='object'&&typeof options==='undefined')?qs:options,o=jQuery.extend({},o,options),params={};jQuery.each(q.match(/^\??(.*)$/)[1].split('&'),function(i,p){p=p.split('=');p[1]=o.f(p[1]);params[p[0]]=params[p[0]]?((params[p[0]]instanceof Array)?(params[p[0]].push(p[1]),params[p[0]]):[params[p[0]],p[1]]):p[1];});return params;};parseUri.options={strictMode:false,key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}};function supportsSVG(){return!!document.createElementNS&&!!document.createElementNS('http://www.w3.org/2000/svg','svg').createSVGRect;}
tokopedia.update_notification_counter=function(){var ttl=0;var over,sales_over,purchase_over;var sales=0;$('.sales-ntf').find('.cv').each(function(){if(isNaN($(this).html())){sales_over='1'+lang.thousand+'+';}
else{sales+=parseInt($(this).html());if(sales>1000){sales_over='1'+lang.thousand+'+';}}});var purchase=0;$('.purchase-ntf').find('.cv').each(function(){if(!$(this).hasClass('count-purchase-reorder-value')){if(isNaN($(this).html())){purchase_over='1'+lang.thousand+'+';}
else{purchase+=parseInt($(this).html());if(purchase>1000){purchase_over='1'+lang.thousand+'+';}}}});var sales_print=sales_over?sales_over:sales;var purchase_print=purchase_over?purchase_over:purchase;if(sales_print!=0){$('#accordion-shop').find('.sales-total-counter').html('<span class="count"><span class="count-sales-total-value">'+sales_print+'</span></span>');$('#shop-tab').find('.sales-total-value').html('<span class="count"><span class="count-sales-total-value">'+sales_print+'</span></span>');}
if(purchase_print!=0){$('#accordion-profile').find('.purchase-count-total').html('<span class="count"><span class="count-purchase-total-value">'+purchase_print+'</span></span>');$('#user-tab').find('.purchase-total-value').html('<span class="count"><span class="count-purchase-total-value">'+purchase_print+'</span></span>');}
$('#notification span.cv').each(function(){var cnt=$(this).html();if(isNaN(cnt)){over='1'+lang.thousand+'+';}
else{cnt.replace(/\,/g,'');cnt.replace(/\./g,'');if(cnt){ttl=ttl+parseInt(cnt);}
if(ttl>=1000){over='1'+lang.thousand+'+';}}});if(over){ttl=over;}
var notif=$("#notification");if(ttl){notif.find('.notification-counter').html(ttl);notif.find('.notification-counter').show();}
else{notif.find('.notification-counter').hide();}};var get_notification=function(is_interval){var flag_mongo=0;if($("#mongodb-flag-div").length){flag_mongo=1;}
var notif=$("#notification");var ld=$("#notification .dropdown-toggle").parent().find('li.loading');if(is_interval!=1){is_interval=0;if(notif.find('.notification-counter').hasClass("new-counter")){notif.find('.notification-counter').removeClass('new-counter').addClass('old-counter');$.get('/ajax/notification.pl?action=reset_notif');}}
if(tokopedia.notif_interval){return 0;}
tokopedia.notif_interval=1;window.setTimeout('tokopedia.notif_interval = 0;',tokopedia.notif_interval_time);if((ld.length==1||(is_interval==1&&notif.length==1))){var dt=new Object();dt.action=(flag_mongo==1)?'reload_data_mongo':'reload_data';dt.is_interval=is_interval;$.ajax({url:'/ajax/notification.pl',global:false,type:"GET",data:(dt),dataType:"json",success:function(result){tokopedia.notif_counter++;if(result.notification){if(ld.length==1){ld.parent().html(result.notification);}
else{notif.find('#notification-ul').html(result.notification);}
if(window.process_admin_sidebar){var sidebar_jq_object=$('<div/>').html(result.notification).contents();process_admin_sidebar(sidebar_jq_object);}}
tokopedia.update_notification_counter();if(result.new_notif){notif.find('.notification-counter').removeClass('old-counter').addClass('new-counter');}
else{notif.find('.notification-counter').removeClass('new-counter').addClass('old-counter');}
if(result.reload){location.reload();}},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){},complete:function(){}});$.ajax({url:'/ajax/nav-deposit.pl',global:false,type:"GET",data:(dt),dataType:"json",success:function(result){$('#header-deposit-amount, #include-deposit').html(result.user_deposit);$('.deposit-link').show();$('.deposit-notif').html(result.is_updated);},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){if($('.deposit-link').attr('toggle')!=1){tokopedia.show_spinner_ajax_loader();}},complete:function(){$('.header-ajax-loader-container').remove();$('.sidebar-ajax-loader-container').remove();}});var lp=new Object();lp.action='get_lp_url';var api_url;var token;var ut;var qs;var is_updated;var data;$.ajax({url:'/ajax/nav_lp.pl',global:false,type:"GET",data:(lp),dataType:"json",success:function(result){api_url=result.api_url;token=result.token;ut=result.ut;qs=result.qs;is_updated=result.is_updated;},error:function(XMLHttpRequest,textStatus,errorThrown){},complete:function(){$.ajax({url:api_url,type:"GET",data:(qs),dataType:"json",timeout:5000,success:function(result){data=result.data.attributes;var lp_idr=format_price(data.amount,'Rp');if(!lp_idr){$('#header-lp-amount, #include-lp').html(data.amount);$('#header-lp-amount, #include-lp').priceFormat({prefix:'Rp ',thousandsSeparator:'.',centsSeparator:'',centsLimit:''});}else{$('#header-lp-amount, #include-lp').html(lp_idr);}
if(data.lucky_details.buyer==1){$('#badge-point').attr("class","pull-left");};$('.lp-link').show();$('.lp-notif').html(is_updated);},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){if($('.lp-link').attr('toggle')!=1){tokopedia.show_spinner_ajax_loader_lp();}},complete:function(){$('.header-ajax-loader-container').remove();$('.sidebar-ajax-loader-container').remove();}});}});}};$.fn.serializeObject=function()
{var o={};var a=this.serializeArray();$.each(a,function(){if(o[this.name]!==undefined){if(!o[this.name].push){o[this.name]=[o[this.name]];}
o[this.name].push(this.value||'');}else{o[this.name]=this.value||'';}});return o;};(function($){$.fn.limitChars=function(options){options=$.extend({maxCount:140},options);var countable=this;var countCheck=function(){var text=$(this).val();var textlength=text.length;if(textlength>options.maxCount){$(this).val(text.substr(0,options.maxCount));return false;}
else{return true;}};countCheck();countable.keyup(countCheck);};})(jQuery);tokopedia.init_nl=function(){$('textarea').each(function(){var txt=$(this).val();txt=txt.replace(/\n/g,'');txt=txt.replace(/\[nl\]/g,"\n");txt=txt.replace(/<br\/>/g,"\n");$(this).html(txt);});};tokopedia.focus_element=function(element,no_check_top){if($(element).length>0){if($(window).scrollTop()>$(element).offset().top||no_check_top){$('html, body').animate({scrollTop:$(element).offset().top-80},'fast');}}};tokopedia.init_select=function(){$('select.select-medium').each(function(){$(this).selectBox();$(this).removeClass('select-medium');});$('select.select-normal').each(function(){$(this).selectBox();$(this).removeClass('select-normal');});};tokopedia.init_select_custom=function(s,w){$(s).selectBox();if(w){$(s).on('mousedown',function(e){var select_style=$('ul'+s+'-selectBox-dropdown-menu').attr('style');$('ul'+s+'-selectBox-dropdown-menu').attr('style',select_style+' width: '+w+'px;');});}};tokopedia.init_notification=function(){$("#notification .dropdown-toggle").mouseenter(get_notification).click(0,get_notification);tokopedia.notif_max=1;tokopedia.notif_counter=0;tokopedia.notif_interval_time=30000;get_notification(1);tokopedia.bind_scroll();};tokopedia.bind_scroll=function(){$(window).scroll(function(){if(!tokopedia.notif_interval){get_notification(1);}});};tokopedia.unbind_scroll=function(){$(window).unbind('scroll');tokopedia.timeout=setTimeout('tokopedia.bind_scroll();',tokopedia.notif_interval_time);};tokopedia.init_dialog_gold_merchant=function(){$(document).on('click',".dialog-gold-subscribe",function(){tokopedia.dialog_ajax('/ajax/gold-merchant.pl?action=show_dialog_gold_merchant');return false;});$(document).on('click',".dialog-gold-subscribe-stat",function(){tokopedia.dialog_ajax('/ajax/gold-merchant.pl?action=show_dialog_gold_merchant_stat');return false;});};tokopedia.init_switch_language=function(){$(document).on('click',".switch-lang",function(){var switch_to=$(this).attr('id');var url=location.href;var uri=parseUri(url);var query=uri.queryKey;if(switch_to=='lang-id'){query.lang='id';}
else{query.lang='en';}
var switch_to_url=uri.protocol+'://'+uri.host+uri.path+'?'+decodeURIComponent($.param(query));window.location.href=switch_to_url;});};tokopedia.init_auto_navbar=function(){var width=$(window).width();var curr_width=962;if(width>window.innerWidth){width=window.innerWidth;}
curr_width=(document.documentElement.clientWidth<curr_width)?curr_width:document.documentElement.clientWidth;if(width<curr_width){$('.navbar').css('position','absolute');$('.navbar').css('width',curr_width+'px');}else{$('.navbar').css('position','');$('.navbar').css('width','');}};tokopedia.init_resize_navbar=function(){$(window).on('resize',function(){tokopedia.init_auto_navbar();});$(window).bind("touchstart",function(e){tokopedia.touchEvent=e.originalEvent.touches.length;if(e.originalEvent.touches.length==2){tokopedia.init_auto_navbar();}});$(window).bind("touchend",function(e){if(tokopedia.touchEvent==2){tokopedia.init_auto_navbar();}});};tokopedia.init_button_login=function(){$(document).on('keydown','#inputEmail,#inputPassword',function(e){if(e.keyCode==38||e.keyCode==40){e.stopImmediatePropagation();}});var cUrl=window.location.href;if(cUrl.toLowerCase().indexOf('login.pl')>-1){$('#header-frm-login').remove();$('#login-ddl-link').bind('click',function(e){$('#inputEmail').focus();return false;});}};tokopedia.init_button_login();$(document).ready(function(){$("#login-ddl-link").focus(function(){setTimeout(function(){$("#inputEmail").focus();},1);});});$(document).ready(function(){$('input, textarea').placeholder();$('.dropdown-toggle:not(#login-ddl-link)').dropdownHover();if(supportsSVG()){document.documentElement.className+=' svg';}else{document.documentElement.className+=' no-svg';}
tokopedia.init_notification();tokopedia.init_button_submit();tokopedia.init_search();tokopedia.init_numeric();tokopedia.init_nl();tokopedia.init_select();tokopedia.init_dialog_gold_merchant();tokopedia.init_switch_language();tokopedia.init_auto_navbar();tokopedia.init_resize_navbar();$('#notification, #shop-tab, #cart-review').hover(function(){$('.cat-select').hide();},function(){$('.cat-select').show();});});$(document).ready(function(){$('.dropdown-topbar-category').hover(function(){$('.cat-select').hide();},function(){$('.cat-select').show();});});function format_price(n,currency){return currency+" "+n.toFixed(0).replace(/./g,function(c,i,a){return i>0&&c!==","&&(a.length-i)%3===0?"."+c:c;});}(function(){function getCookie(cname){var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{var c=ca[i].trim();if(c.indexOf(name)==0)return c.substring(name.length,c.length);}
return"";}
function setCookie(name,value,milisecond){var expires;if(milisecond){var date=new Date();date.setTime(date.getTime()+(time));expires="; expires="+date.toGMTString();}
else{expires="";}
var domain=_tkq.domain_collect;domain=domain.replace(/[^.]+/,'');document.cookie=name+"="+value+expires+";domain="+domain+";path=/";}
function init_verify_number(){var is_verify=getCookie('vn_is');var dt=new Object();if($('#verify_number').hasClass('fulls')){dt.is_fluid=1;}else{dt.is_fluid=0;}
var is_on_verification_page=false;if($('#mobile_num_verify_flag').length){is_on_verification_page=true;}
if(is_verify!=1&&dt.msisdn!=''&&is_on_verification_page==false){$.ajax({url:'/ajax/verification_number.pl',global:false,type:"GET",dataType:"json",data:dt,success:function(result){if(result.success){if(result.msisdn.is_verified==1&&result.msisdn.show==0){var now=Date.now();var efective=new Date(result.msisdn.is_verified.effective);var next=Math.abs((+efective-+now));setCookie('vn_is',1,next);}
$('#verify_number').html(result.data);if(typeof $.fn.portamento!=='undefined'){$('.floating-div').portamento({wrapper:$('.floating-wrapper'),gap:71});}}},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){},complete:function(){}})}}
$(document).ready(function(){init_verify_number();});})();function init_banner(){var date=new Date();var time_before_birthday_start=1439226000000;var time_before_birthday_end=1439744399000;var time_before_birthday_last_day=1439658000000;var time_birthday_start=1439744400000;var time_birthday_end=1440521999000;var one_day=86400000;var count=0;var time_now=date.getTime();if(time_now>=time_before_birthday_start&&time_now<=time_before_birthday_end){if(time_now>=time_before_birthday_last_day){count=1;}
else if(time_now>=(time_before_birthday_last_day-one_day)){count=2;}
else if(time_now>=(time_before_birthday_last_day-(one_day*2))){count=3;}
else if(time_now>=(time_before_birthday_last_day-(one_day*3))){count=4;}
else if(time_now>=(time_before_birthday_last_day-(one_day*4))){count=5;}
else if(time_now>=(time_before_birthday_last_day-(one_day*5))){count=6;}
change_banner(count);}
else if(time_now>=time_birthday_start&&time_now<=time_birthday_end){count=-1;change_banner(count);}}
function change_banner(count){if(count>0){if($('.content-container-full').length==0){if($('.sidebar-admin').length>0||$('.home-only').length>0){var div_left='<div class="skin-banner-left"><img src="'+before_login_left+'"></div>';var div_right='<div class="skin-banner-right"><img src="'+before_login_right[count-1]+'"></div>';$('body').addClass('bg-grey');$('.navbar-inner').find('.container').addClass('nav-skin');$('.navbar-fixed-top, #content-container, .footer-wrapper').wrapAll("<div class='skin-wrap'/>");$('.skin-wrap').prepend(div_right);$('.skin-wrap').prepend(div_left);}}}
else if(count==-1){if($('.content-container-full').length==0){if($('.sidebar-admin').length>0||$('.home-only').length>0){$('body').addClass('bg-aniv');$('.site-logo').addClass('logo-aniv');$('.footer-wrapper').addClass('no-margin-bottom');$('.footer-main').addClass('no-margin-bottom');$('.footer-wrapper').find('.muted').addClass('text-white');$('.footer-additional').wrapAll("<div class='content-container bg-green' />");$('.footer-additional').find('img').replaceWith('<span class="toped-aniv pull-left"></span>');$('.image-biznet-logo').wrapAll("<div class='shade' />");var div_right='<div class="skin-banner-right"><img src="'+image_right_birthday+'"></div>';var div_left='<div class="skin-banner-left"><img src="'+image_left_birthday+'"></div>';$('.navbar-fixed-top, #content-container, .footer-wrapper').wrapAll("<div class='skin-wrap'/>");$('.skin-wrap').prepend(div_right);$('.skin-wrap').prepend(div_left);}}}}
$(document).ready(function(){init_banner();});(function(b,k,l,m){function g(a,f){this.element=a;this.$el=b(a);this.options=b.extend({},c,f);this._defaults=c;this._name=d;this.moveInterval;this.moving=this.paused=this.state=0;(this.$el.is("ul")||this.$el.is("ol"))&&this.init()}var d="newsTicker",c={row_height:20,max_rows:3,speed:400,duration:2500,direction:"up",autostart:1,pauseOnHover:1,nextButton:null,prevButton:null,startButton:null,stopButton:null,hasMoved:function(){},movingUp:function(){},movingDown:function(){},start:function(){},stop:function(){},pause:function(){},unpause:function(){}};g.prototype={init:function(){this.$el.height(this.options.row_height*this.options.max_rows).css({overflow:"hidden"});this.checkSpeed();this.options.nextButton&&"undefined"!==typeof this.options.nextButton[0]&&this.options.nextButton.click(function(a){this.moveNext();this.resetInterval()}.bind(this));this.options.prevButton&&"undefined"!==typeof this.options.prevButton[0]&&this.options.prevButton.click(function(a){this.movePrev();this.resetInterval()}.bind(this));this.options.stopButton&&"undefined"!==typeof this.options.stopButton[0]&&this.options.stopButton.click(function(a){this.stop()}.bind(this));this.options.startButton&&"undefined"!==typeof this.options.startButton[0]&&this.options.startButton.click(function(a){this.start()}.bind(this));this.options.pauseOnHover&&this.$el.hover(function(){this.state&&this.pause()}.bind(this),function(){this.state&&this.unpause()}.bind(this));this.options.autostart&&this.start()},start:function(){this.state||(this.state=1,this.resetInterval(),this.options.start())},stop:function(){this.state&&(clearInterval(this.moveInterval),this.state=0,this.options.stop())},resetInterval:function(){this.state&&(clearInterval(this.moveInterval),this.moveInterval=setInterval(function(){this.move()}.bind(this),this.options.duration))},move:function(){this.paused||this.moveNext()},moveNext:function(){"down"===this.options.direction?this.moveDown():"up"===this.options.direction&&this.moveUp()},movePrev:function(){"down"===this.options.direction?this.moveUp():"up"===this.options.direction&&this.moveDown()},pause:function(){this.paused||(this.paused=1);this.options.pause()},unpause:function(){this.paused&&(this.paused=0);this.options.unpause()},moveDown:function(){this.moving||(this.moving=1,this.options.movingDown(),this.$el.children("li:last").detach().prependTo(this.$el).css("marginTop","-"+this.options.row_height+"px").animate({marginTop:"0px"},this.options.speed,function(){this.moving=0;this.options.hasMoved()}.bind(this)))},moveUp:function(){if(!this.moving){this.moving=1;this.options.movingUp();var a=this.$el.children("li:first");a.animate({marginTop:"-"+this.options.row_height+"px"},this.options.speed,function(){a.detach().css("marginTop","0").appendTo(this.$el);this.moving=0;this.options.hasMoved()}.bind(this))}},updateOption:function(a,b){"undefined"!==typeof this.options[a]&&(this.options[a]=b,"duration"==a||"speed"==a)&&(this.checkSpeed(),this.resetInterval())},add:function(a){this.$el.append(b("<li>").html(a))},getState:function(){return paused?2:this.state},checkSpeed:function(){this.options.duration<this.options.speed+25&&(this.options.speed=this.options.duration-25)},destroy:function(){this._destroy()}};b.fn[d]=function(a){var f=arguments;return this.each(function(){var c=b(this),e=b.data(this,"plugin_"+d),h="object"===typeof a&&a;e||c.data("plugin_"+d,e=new g(this,h));"string"===typeof a&&e[a].apply(e,Array.prototype.slice.call(f,1))})}})(jQuery,window,document);(function(window,undefined){function _init_assets(){$('.cursor-default').tooltip();$('.newsticker').newsTicker({row_height:40,max_rows:1,speed:800,duration:5000,direction:'up',autostart:($("#sticky-note li").length>1?1:0),pauseOnHover:1});$('.popper').popover({html:true,container:'body',trigger:'manual',delay:{show:0,hide:100},content:function(){return $(this).next('.popover-content').html();$(this).text(htmlString);}});$(".popover-wrap").mouseenter(function(){$('body').find('.popover').remove();$(this).find('.popper').popover('show');$('body').find('.popover').appendTo(this);$(".popover-wrap").mouseleave(function(){$('body').find('.popper').popover('show');$('body').find('.popover').remove();})});}
function process_ticker(tickers){var count=0;var now=new Date().getTime();for(var i=0;i<tickers.length;i++){if(tickers[i].environment){var expired_date=new Date(tickers[i].expired).getTime();var environment=tickers[i].environment;if(now<expired_date&&(environment==1||environment==2)){if(tickers[i].target==4){if(active_page=='index'){count++;$('#sticky-note-container ul').append("<li class='overflow-hidden content-ticker'><span>"+tickers[i].content+"</span></li>");count++;}}else{count++;$('#sticky-note-container ul').append("<li class='overflow-hidden content-ticker'><span>"+tickers[i].content+"</span></li>");count++;}}}else{localStorage.clear();break;}}
if(count>0){_init_assets();$('#sticky-div').removeClass("none");}}
function init_data_source(){var data_info=new Object();data_info.action='data_source_ticker';$.ajax({url:'/ajax/ticker-e4.pl',global:true,type:"POST",data:(data_info),dataType:"json",success:function(result){if(result.message_error){var message_error=tokopedia.render_message('error',result.message_error);tokopedia.alert('',message_error);}
else if(result.success){if(result.tickers){var tickers=result.tickers;process_ticker(tickers);}
insert_storage(tickers);}
else{tokopedia.alert_error();}},error:function(XMLHttpRequest,textStatus,errorThrown){tokopedia.alert_error();},beforeSend:function(){},complete:function(){}});}
function addMinutes(date,minutes){return new Date(date.getTime()+minutes*60000).getTime();}
function insert_storage(tickers){var ticker_key;if(logged_user_id!=0){ticker_key="tokopedia:tickers:"+logged_user_id;}else{ticker_key="tokopedia:tickers";}
var expired_key=ticker_key+":expired";var expired_time=addMinutes(new Date(),60);var json_tickers=JSON.stringify(tickers);localStorage.setItem(ticker_key,json_tickers);localStorage.setItem(expired_key,expired_time);}
function check_storage(){var ticker_key;if(logged_user_id!=0){ticker_key="tokopedia:tickers:"+logged_user_id;}else{ticker_key="tokopedia:tickers";}
var expired_key=ticker_key+":expired";var expired_time=localStorage.getItem(expired_key);var now=new Date().getTime();expired_time=expired_time?expired_time:0;if(now>expired_time){init_data_source();}else{var tickers=localStorage.getItem(ticker_key);var tickers_obj=JSON.parse(tickers);process_ticker(tickers_obj);}}
$(document).ready(function(){check_storage();});})(window);/**
 * History.js Core
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
(function(window,undefined){"use strict";var
console=window.console||undefined,document=window.document,navigator=window.navigator,sessionStorage=window.sessionStorage||false,setTimeout=window.setTimeout,clearTimeout=window.clearTimeout,setInterval=window.setInterval,clearInterval=window.clearInterval,JSON=window.JSON,alert=window.alert,History=window.History=window.History||{},history=window.history;JSON.stringify=JSON.stringify||JSON.encode;JSON.parse=JSON.parse||JSON.decode;if(typeof History.init!=='undefined'){throw new Error('History.js Core has already been loaded...');}
History.init=function(){if(typeof History.Adapter==='undefined'){return false;}
if(typeof History.initCore!=='undefined'){History.initCore();}
if(typeof History.initHtml4!=='undefined'){History.initHtml4();}
return true;};History.initCore=function(){if(typeof History.initCore.initialized!=='undefined'){return false;}
else{History.initCore.initialized=true;}
History.options=History.options||{};History.options.hashChangeInterval=History.options.hashChangeInterval||100;History.options.safariPollInterval=History.options.safariPollInterval||500;History.options.doubleCheckInterval=History.options.doubleCheckInterval||500;History.options.storeInterval=History.options.storeInterval||1000;History.options.busyDelay=History.options.busyDelay||250;History.options.debug=History.options.debug||false;History.options.initialTitle=History.options.initialTitle||document.title;History.intervalList=[];History.clearAllIntervals=function(){var i,il=History.intervalList;if(typeof il!=="undefined"&&il!==null){for(i=0;i<il.length;i++){clearInterval(il[i]);}
History.intervalList=null;}};History.debug=function(){if((History.options.debug||false)){History.log.apply(History,arguments);}};History.log=function(){var
consoleExists=!(typeof console==='undefined'||typeof console.log==='undefined'||typeof console.log.apply==='undefined'),textarea=document.getElementById('log'),message,i,n,args,arg;if(consoleExists){args=Array.prototype.slice.call(arguments);message=args.shift();if(typeof console.debug!=='undefined'){console.debug.apply(console,[message,args]);}
else{console.log.apply(console,[message,args]);}}
else{message=("\n"+arguments[0]+"\n");}
for(i=1,n=arguments.length;i<n;++i){arg=arguments[i];if(typeof arg==='object'&&typeof JSON!=='undefined'){try{arg=JSON.stringify(arg);}
catch(Exception){}}
message+="\n"+arg+"\n";}
if(textarea){textarea.value+=message+"\n-----\n";textarea.scrollTop=textarea.scrollHeight-textarea.clientHeight;}
else if(!consoleExists){alert(message);}
return true;};History.getInternetExplorerMajorVersion=function(){var result=History.getInternetExplorerMajorVersion.cached=(typeof History.getInternetExplorerMajorVersion.cached!=='undefined')?History.getInternetExplorerMajorVersion.cached:(function(){var v=3,div=document.createElement('div'),all=div.getElementsByTagName('i');while((div.innerHTML='<!--[if gt IE '+(++v)+']><i></i><![endif]-->')&&all[0]){}
return(v>4)?v:false;})();return result;};History.isInternetExplorer=function(){var result=History.isInternetExplorer.cached=(typeof History.isInternetExplorer.cached!=='undefined')?History.isInternetExplorer.cached:Boolean(History.getInternetExplorerMajorVersion());return result;};History.emulated={pushState:!Boolean(window.history&&window.history.pushState&&window.history.replaceState&&!((/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i).test(navigator.userAgent)||(/AppleWebKit\/5([0-2]|3[0-2])/i).test(navigator.userAgent))),hashChange:Boolean(!(('onhashchange' in window)||('onhashchange' in document))||(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<8))};History.enabled=!History.emulated.pushState;History.bugs={setHash:Boolean(!History.emulated.pushState&&navigator.vendor==='Apple Computer, Inc.'&&/AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),safariPoll:Boolean(!History.emulated.pushState&&navigator.vendor==='Apple Computer, Inc.'&&/AppleWebKit\/5([0-2]|3[0-3])/.test(navigator.userAgent)),ieDoubleCheck:Boolean(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(History.isInternetExplorer()&&History.getInternetExplorerMajorVersion()<7)};History.isEmptyObject=function(obj){for(var name in obj){return false;}
return true;};History.cloneObject=function(obj){var hash,newObj;if(obj){hash=JSON.stringify(obj);newObj=JSON.parse(hash);}
else{newObj={};}
return newObj;};History.getRootUrl=function(){var rootUrl=document.location.protocol+'//'+(document.location.hostname||document.location.host);if(document.location.port||false){rootUrl+=':'+document.location.port;}
rootUrl+='/';return rootUrl;};History.getBaseHref=function(){var
baseElements=document.getElementsByTagName('base'),baseElement=null,baseHref='';if(baseElements.length===1){baseElement=baseElements[0];baseHref=baseElement.href.replace(/[^\/]+$/,'');}
baseHref=baseHref.replace(/\/+$/,'');if(baseHref)baseHref+='/';return baseHref;};History.getBaseUrl=function(){var baseUrl=History.getBaseHref()||History.getBasePageUrl()||History.getRootUrl();return baseUrl;};History.getPageUrl=function(){var
State=History.getState(false,false),stateUrl=(State||{}).url||document.location.href,pageUrl;pageUrl=stateUrl.replace(/\/+$/,'').replace(/[^\/]+$/,function(part,index,string){return(/\./).test(part)?part:part+'/';});return pageUrl;};History.getBasePageUrl=function(){var basePageUrl=document.location.href.replace(/[#\?].*/,'').replace(/[^\/]+$/,function(part,index,string){return(/[^\/]$/).test(part)?'':part;}).replace(/\/+$/,'')+'/';return basePageUrl;};History.getFullUrl=function(url,allowBaseHref){var fullUrl=url,firstChar=url.substring(0,1);allowBaseHref=(typeof allowBaseHref==='undefined')?true:allowBaseHref;if(/[a-z]+\:\/\//.test(url)){}
else if(firstChar==='/'){fullUrl=History.getRootUrl()+url.replace(/^\/+/,'');}
else if(firstChar==='#'){fullUrl=History.getPageUrl().replace(/#.*/,'')+url;}
else if(firstChar==='?'){fullUrl=History.getPageUrl().replace(/[\?#].*/,'')+url;}
else{if(allowBaseHref){fullUrl=History.getBaseUrl()+url.replace(/^(\.\/)+/,'');}else{fullUrl=History.getBasePageUrl()+url.replace(/^(\.\/)+/,'');}}
return fullUrl.replace(/\#$/,'');};History.getShortUrl=function(url){var shortUrl=url,baseUrl=History.getBaseUrl(),rootUrl=History.getRootUrl();if(History.emulated.pushState){shortUrl=shortUrl.replace(baseUrl,'');}
shortUrl=shortUrl.replace(rootUrl,'/');if(History.isTraditionalAnchor(shortUrl)){shortUrl='./'+shortUrl;}
shortUrl=shortUrl.replace(/^(\.\/)+/g,'./').replace(/\#$/,'');return shortUrl;};History.store={};History.idToState=History.idToState||{};History.stateToId=History.stateToId||{};History.urlToId=History.urlToId||{};History.storedStates=History.storedStates||[];History.savedStates=History.savedStates||[];History.normalizeStore=function(){History.store.idToState=History.store.idToState||{};History.store.urlToId=History.store.urlToId||{};History.store.stateToId=History.store.stateToId||{};};History.getState=function(friendly,create){if(typeof friendly==='undefined'){friendly=true;}
if(typeof create==='undefined'){create=true;}
var State=History.getLastSavedState();if(!State&&create){State=History.createStateObject();}
if(friendly){State=History.cloneObject(State);State.url=State.cleanUrl||State.url;}
return State;};History.getIdByState=function(newState){var id=History.extractId(newState.url),str;if(!id){str=History.getStateString(newState);if(typeof History.stateToId[str]!=='undefined'){id=History.stateToId[str];}
else if(typeof History.store.stateToId[str]!=='undefined'){id=History.store.stateToId[str];}
else{while(true){id=(new Date()).getTime()+String(Math.random()).replace(/\D/g,'');if(typeof History.idToState[id]==='undefined'&&typeof History.store.idToState[id]==='undefined'){break;}}
History.stateToId[str]=id;History.idToState[id]=newState;}}
return id;};History.normalizeState=function(oldState){var newState,dataNotEmpty;if(!oldState||(typeof oldState!=='object')){oldState={};}
if(typeof oldState.normalized!=='undefined'){return oldState;}
if(!oldState.data||(typeof oldState.data!=='object')){oldState.data={};}
newState={};newState.normalized=true;newState.title=oldState.title||'';newState.url=History.getFullUrl(History.unescapeString(oldState.url||document.location.href));newState.hash=History.getShortUrl(newState.url);newState.data=History.cloneObject(oldState.data);newState.id=History.getIdByState(newState);newState.cleanUrl=newState.url.replace(/\??\&_suid.*/,'');newState.url=newState.cleanUrl;dataNotEmpty=!History.isEmptyObject(newState.data);if(newState.title||dataNotEmpty){newState.hash=History.getShortUrl(newState.url).replace(/\??\&_suid.*/,'');if(!/\?/.test(newState.hash)){newState.hash+='?';}
newState.hash+='&_suid='+newState.id;}
newState.hashedUrl=History.getFullUrl(newState.hash);if((History.emulated.pushState||History.bugs.safariPoll)&&History.hasUrlDuplicate(newState)){newState.url=newState.hashedUrl;}
return newState;};History.createStateObject=function(data,title,url){var State={'data':data,'title':title,'url':url};State=History.normalizeState(State);return State;};History.getStateById=function(id){id=String(id);var State=History.idToState[id]||History.store.idToState[id]||undefined;return State;};History.getStateString=function(passedState){var State,cleanedState,str;State=History.normalizeState(passedState);cleanedState={data:State.data,title:passedState.title,url:passedState.url};str=JSON.stringify(cleanedState);return str;};History.getStateId=function(passedState){var State,id;State=History.normalizeState(passedState);id=State.id;return id;};History.getHashByState=function(passedState){var State,hash;State=History.normalizeState(passedState);hash=State.hash;return hash;};History.extractId=function(url_or_hash){var id,parts,url;parts=/(.*)\&_suid=([0-9]+)$/.exec(url_or_hash);url=parts?(parts[1]||url_or_hash):url_or_hash;id=parts?String(parts[2]||''):'';return id||false;};History.isTraditionalAnchor=function(url_or_hash){var isTraditional=!(/[\/\?\.]/.test(url_or_hash));return isTraditional;};History.extractState=function(url_or_hash,create){var State=null,id,url;create=create||false;id=History.extractId(url_or_hash);if(id){State=History.getStateById(id);}
if(!State){url=History.getFullUrl(url_or_hash);id=History.getIdByUrl(url)||false;if(id){State=History.getStateById(id);}
if(!State&&create&&!History.isTraditionalAnchor(url_or_hash)){State=History.createStateObject(null,null,url);}}
return State;};History.getIdByUrl=function(url){var id=History.urlToId[url]||History.store.urlToId[url]||undefined;return id;};History.getLastSavedState=function(){return History.savedStates[History.savedStates.length-1]||undefined;};History.getLastStoredState=function(){return History.storedStates[History.storedStates.length-1]||undefined;};History.hasUrlDuplicate=function(newState){var hasDuplicate=false,oldState;oldState=History.extractState(newState.url);hasDuplicate=oldState&&oldState.id!==newState.id;return hasDuplicate;};History.storeState=function(newState){History.urlToId[newState.url]=newState.id;History.storedStates.push(History.cloneObject(newState));return newState;};History.isLastSavedState=function(newState){var isLast=false,newId,oldState,oldId;if(History.savedStates.length){newId=newState.id;oldState=History.getLastSavedState();oldId=oldState.id;isLast=(newId===oldId);}
return isLast;};History.saveState=function(newState){if(History.isLastSavedState(newState)){return false;}
History.savedStates.push(History.cloneObject(newState));return true;};History.getStateByIndex=function(index){var State=null;if(typeof index==='undefined'){State=History.savedStates[History.savedStates.length-1];}
else if(index<0){State=History.savedStates[History.savedStates.length+index];}
else{State=History.savedStates[index];}
return State;};History.getHash=function(){var hash=History.unescapeHash(document.location.hash);return hash;};History.unescapeString=function(str){var result=str,tmp;while(true){tmp=window.unescape(result);if(tmp===result){break;}
result=tmp;}
return result;};History.unescapeHash=function(hash){var result=History.normalizeHash(hash);result=History.unescapeString(result);return result;};History.normalizeHash=function(hash){var result=hash.replace(/[^#]*#/,'').replace(/#.*/,'');return result;};History.setHash=function(hash,queue){var adjustedHash,State,pageUrl;if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.setHash,args:arguments,queue:queue});return false;}
adjustedHash=History.escapeHash(hash);History.busy(true);State=History.extractState(hash,true);if(State&&!History.emulated.pushState){History.pushState(State.data,State.title,State.url,false);}
else if(document.location.hash!==adjustedHash){if(History.bugs.setHash){pageUrl=History.getPageUrl();History.pushState(null,null,pageUrl+'#'+adjustedHash,false);}
else{document.location.hash=adjustedHash;}}
return History;};History.escapeHash=function(hash){var result=History.normalizeHash(hash);result=window.escape(result);if(!History.bugs.hashEscape){result=result
.replace(/\%21/g,'!')
.replace(/\%26/g,'&')
.replace(/\%3D/g,'=')
.replace(/\%3F/g,'?');}
return result;};History.getHashByUrl=function(url){var hash=String(url)
.replace(/([^#]*)#?([^#]*)#?(.*)/,'$2');hash=History.unescapeHash(hash);return hash;};History.setTitle=function(newState){var title=newState.title,firstState;if(!title){firstState=History.getStateByIndex(0);if(firstState&&firstState.url===newState.url){title=firstState.title||History.options.initialTitle;}}
try{document.getElementsByTagName('title')[0].innerHTML=title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');}
catch(Exception){}
document.title=title;return History;};History.queues=[];History.busy=function(value){if(typeof value!=='undefined'){History.busy.flag=value;}
else if(typeof History.busy.flag==='undefined'){History.busy.flag=false;}
if(!History.busy.flag){clearTimeout(History.busy.timeout);var fireNext=function(){var i,queue,item;if(History.busy.flag)return;for(i=History.queues.length-1;i>=0;--i){queue=History.queues[i];if(queue.length===0)continue;item=queue.shift();History.fireQueueItem(item);History.busy.timeout=setTimeout(fireNext,History.options.busyDelay);}};History.busy.timeout=setTimeout(fireNext,History.options.busyDelay);}
return History.busy.flag;};History.busy.flag=false;History.fireQueueItem=function(item){return item.callback.apply(item.scope||History,item.args||[]);};History.pushQueue=function(item){History.queues[item.queue||0]=History.queues[item.queue||0]||[];History.queues[item.queue||0].push(item);return History;};History.queue=function(item,queue){if(typeof item==='function'){item={callback:item};}
if(typeof queue!=='undefined'){item.queue=queue;}
if(History.busy()){History.pushQueue(item);}else{History.fireQueueItem(item);}
return History;};History.clearQueue=function(){History.busy.flag=false;History.queues=[];return History;};History.stateChanged=false;History.doubleChecker=false;History.doubleCheckComplete=function(){History.stateChanged=true;History.doubleCheckClear();return History;};History.doubleCheckClear=function(){if(History.doubleChecker){clearTimeout(History.doubleChecker);History.doubleChecker=false;}
return History;};History.doubleCheck=function(tryAgain){History.stateChanged=false;History.doubleCheckClear();if(History.bugs.ieDoubleCheck){History.doubleChecker=setTimeout(function(){History.doubleCheckClear();if(!History.stateChanged){tryAgain();}
return true;},History.options.doubleCheckInterval);}
return History;};History.safariStatePoll=function(){var
urlState=History.extractState(document.location.href),newState;if(!History.isLastSavedState(urlState)){newState=urlState;}
else{return;}
if(!newState){newState=History.createStateObject();}
History.Adapter.trigger(window,'popstate');return History;};History.back=function(queue){if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.back,args:arguments,queue:queue});return false;}
History.busy(true);History.doubleCheck(function(){History.back(false);});history.go(-1);return true;};History.forward=function(queue){if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.forward,args:arguments,queue:queue});return false;}
History.busy(true);History.doubleCheck(function(){History.forward(false);});history.go(1);return true;};History.go=function(index,queue){var i;if(index>0){for(i=1;i<=index;++i){History.forward(queue);}}
else if(index<0){for(i=-1;i>=index;--i){History.back(queue);}}
else{throw new Error('History.go: History.go requires a positive or negative integer passed.');}
return History;};if(History.emulated.pushState){var emptyFunction=function(){};History.pushState=History.pushState||emptyFunction;History.replaceState=History.replaceState||emptyFunction;}
else{History.onPopState=function(event,extra){var stateId=false,newState=false,currentHash,currentState;History.doubleCheckComplete();currentHash=History.getHash();if(currentHash){currentState=History.extractState(currentHash||document.location.href,true);if(currentState){History.replaceState(currentState.data,currentState.title,currentState.url,false);}
else{History.Adapter.trigger(window,'anchorchange');History.busy(false);}
History.expectedStateId=false;return false;}
stateId=History.Adapter.extractEventData('state',event,extra)||false;if(stateId){newState=History.getStateById(stateId);}
else if(History.expectedStateId){newState=History.getStateById(History.expectedStateId);}
else{newState=History.extractState(document.location.href);}
if(!newState){newState=History.createStateObject(null,null,document.location.href);}
History.expectedStateId=false;if(History.isLastSavedState(newState)){History.busy(false);return false;}
History.storeState(newState);History.saveState(newState);History.setTitle(newState);History.Adapter.trigger(window,'statechange');History.busy(false);return true;};History.Adapter.bind(window,'popstate',History.onPopState);History.pushState=function(data,title,url,queue){if(History.getHashByUrl(url)&&History.emulated.pushState){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.pushState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url);if(History.isLastSavedState(newState)){History.busy(false);}
else{History.storeState(newState);History.expectedStateId=newState.id;history.pushState(newState.id,newState.title,newState.url);History.Adapter.trigger(window,'popstate');}
return true;};History.replaceState=function(data,title,url,queue){if(History.getHashByUrl(url)&&History.emulated.pushState){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.replaceState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url);if(History.isLastSavedState(newState)){History.busy(false);}
else{History.storeState(newState);History.expectedStateId=newState.id;history.replaceState(newState.id,newState.title,newState.url);History.Adapter.trigger(window,'popstate');}
return true;};}
if(sessionStorage){try{History.store=JSON.parse(sessionStorage.getItem('History.store'))||{};}
catch(err){History.store={};}
History.normalizeStore();}
else{History.store={};History.normalizeStore();}
History.Adapter.bind(window,"beforeunload",History.clearAllIntervals);History.Adapter.bind(window,"unload",History.clearAllIntervals);History.saveState(History.storeState(History.extractState(document.location.href,true)));if(sessionStorage){History.onUnload=function(){var	currentStore,item;try{currentStore=JSON.parse(sessionStorage.getItem('History.store'))||{};}
catch(err){currentStore={};}
currentStore.idToState=currentStore.idToState||{};currentStore.urlToId=currentStore.urlToId||{};currentStore.stateToId=currentStore.stateToId||{};for(item in History.idToState){if(!History.idToState.hasOwnProperty(item)){continue;}
currentStore.idToState[item]=History.idToState[item];}
for(item in History.urlToId){if(!History.urlToId.hasOwnProperty(item)){continue;}
currentStore.urlToId[item]=History.urlToId[item];}
for(item in History.stateToId){if(!History.stateToId.hasOwnProperty(item)){continue;}
currentStore.stateToId[item]=History.stateToId[item];}
History.store=currentStore;History.normalizeStore();sessionStorage.setItem('History.store',JSON.stringify(currentStore));};History.intervalList.push(setInterval(History.onUnload,History.options.storeInterval));History.Adapter.bind(window,'beforeunload',History.onUnload);History.Adapter.bind(window,'unload',History.onUnload);}
if(!History.emulated.pushState){if(History.bugs.safariPoll){History.intervalList.push(setInterval(History.safariStatePoll,History.options.safariPollInterval));}
if(navigator.vendor==='Apple Computer, Inc.'||(navigator.appCodeName||'')==='Mozilla'){History.Adapter.bind(window,'hashchange',function(){History.Adapter.trigger(window,'popstate');});if(History.getHash()){History.Adapter.onDomLoad(function(){History.Adapter.trigger(window,'hashchange');});}}}};History.init();})(window);/**
 * History.js HTML4 Support
 * Depends on the HTML5 Support
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
(function(window,undefined){"use strict";var
document=window.document,setTimeout=window.setTimeout||setTimeout,clearTimeout=window.clearTimeout||clearTimeout,setInterval=window.setInterval||setInterval,History=window.History=window.History||{};if(typeof History.initHtml4!=='undefined'){throw new Error('History.js HTML4 Support has already been loaded...');}
History.initHtml4=function(){if(typeof History.initHtml4.initialized!=='undefined'){return false;}
else{History.initHtml4.initialized=true;}
History.enabled=true;History.savedHashes=[];History.isLastHash=function(newHash){var oldHash=History.getHashByIndex(),isLast;isLast=newHash===oldHash;return isLast;};History.saveHash=function(newHash){if(History.isLastHash(newHash)){return false;}
History.savedHashes.push(newHash);return true;};History.getHashByIndex=function(index){var hash=null;if(typeof index==='undefined'){hash=History.savedHashes[History.savedHashes.length-1];}
else if(index<0){hash=History.savedHashes[History.savedHashes.length+index];}
else{hash=History.savedHashes[index];}
return hash;};History.discardedHashes={};History.discardedStates={};History.discardState=function(discardedState,forwardState,backState){var discardedStateHash=History.getHashByState(discardedState),discardObject;discardObject={'discardedState':discardedState,'backState':backState,'forwardState':forwardState};History.discardedStates[discardedStateHash]=discardObject;return true;};History.discardHash=function(discardedHash,forwardState,backState){var discardObject={'discardedHash':discardedHash,'backState':backState,'forwardState':forwardState};History.discardedHashes[discardedHash]=discardObject;return true;};History.discardedState=function(State){var StateHash=History.getHashByState(State),discarded;discarded=History.discardedStates[StateHash]||false;return discarded;};History.discardedHash=function(hash){var discarded=History.discardedHashes[hash]||false;return discarded;};History.recycleState=function(State){var StateHash=History.getHashByState(State);if(History.discardedState(State)){delete History.discardedStates[StateHash];}
return true;};if(History.emulated.hashChange){History.hashChangeInit=function(){History.checkerFunction=null;var lastDocumentHash='',iframeId,iframe,lastIframeHash,checkerRunning;if(History.isInternetExplorer()){iframeId='historyjs-iframe';iframe=document.createElement('iframe');iframe.setAttribute('id',iframeId);iframe.style.display='none';document.body.appendChild(iframe);iframe.contentWindow.document.open();iframe.contentWindow.document.close();lastIframeHash='';checkerRunning=false;History.checkerFunction=function(){if(checkerRunning){return false;}
checkerRunning=true;var documentHash=History.getHash()||'',iframeHash=History.unescapeHash(iframe.contentWindow.document.location.hash)||'';if(documentHash!==lastDocumentHash){lastDocumentHash=documentHash;if(iframeHash!==documentHash){lastIframeHash=iframeHash=documentHash;iframe.contentWindow.document.open();iframe.contentWindow.document.close();iframe.contentWindow.document.location.hash=History.escapeHash(documentHash);}
History.Adapter.trigger(window,'hashchange');}
else if(iframeHash!==lastIframeHash){lastIframeHash=iframeHash;History.setHash(iframeHash,false);}
checkerRunning=false;return true;};}
else{History.checkerFunction=function(){var documentHash=History.getHash();if(documentHash!==lastDocumentHash){lastDocumentHash=documentHash;History.Adapter.trigger(window,'hashchange');}
return true;};}
History.intervalList.push(setInterval(History.checkerFunction,History.options.hashChangeInterval));return true;};History.Adapter.onDomLoad(History.hashChangeInit);}
if(History.emulated.pushState){History.onHashChange=function(event){var currentUrl=((event&&event.newURL)||document.location.href),currentHash=History.getHashByUrl(currentUrl),currentState=null,currentStateHash=null,currentStateHashExits=null,discardObject;if(History.isLastHash(currentHash)){History.busy(false);return false;}
History.doubleCheckComplete();History.saveHash(currentHash);if(currentHash&&History.isTraditionalAnchor(currentHash)){History.Adapter.trigger(window,'anchorchange');History.busy(false);return false;}
currentState=History.extractState(History.getFullUrl(currentHash||document.location.href,false),true);if(History.isLastSavedState(currentState)){History.busy(false);return false;}
currentStateHash=History.getHashByState(currentState);discardObject=History.discardedState(currentState);if(discardObject){if(History.getHashByIndex(-2)===History.getHashByState(discardObject.forwardState)){History.back(false);}else{History.forward(false);}
return false;}
History.pushState(currentState.data,currentState.title,currentState.url,false);return true;};History.Adapter.bind(window,'hashchange',History.onHashChange);History.pushState=function(data,title,url,queue){if(History.getHashByUrl(url)){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.pushState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url),newStateHash=History.getHashByState(newState),oldState=History.getState(false),oldStateHash=History.getHashByState(oldState),html4Hash=History.getHash();History.storeState(newState);History.expectedStateId=newState.id;History.recycleState(newState);History.setTitle(newState);if(newStateHash===oldStateHash){History.busy(false);return false;}
if(newStateHash!==html4Hash&&newStateHash!==History.getShortUrl(document.location.href)){History.setHash(newStateHash,false);return false;}
History.saveState(newState);History.Adapter.trigger(window,'statechange');History.busy(false);return true;};History.replaceState=function(data,title,url,queue){if(History.getHashByUrl(url)){throw new Error('History.js does not support states with fragement-identifiers (hashes/anchors).');}
if(queue!==false&&History.busy()){History.pushQueue({scope:History,callback:History.replaceState,args:arguments,queue:queue});return false;}
History.busy(true);var newState=History.createStateObject(data,title,url),oldState=History.getState(false),previousState=History.getStateByIndex(-2);History.discardState(oldState,newState,previousState);History.pushState(newState.data,newState.title,newState.url,false);return true;};}
if(History.emulated.pushState){if(History.getHash()&&!History.emulated.hashChange){History.Adapter.onDomLoad(function(){History.Adapter.trigger(window,'hashchange');});}}};if(typeof History.init!=='undefined'){History.init();}})(window);/**
 * History.js jQuery Adapter
 * @author Benjamin Arthur Lupton <contact@balupton.com>
 * @copyright 2010-2011 Benjamin Arthur Lupton <contact@balupton.com>
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */
(function(window,undefined){"use strict";var
History=window.History=window.History||{},jQuery=window.jQuery;if(typeof History.Adapter!=='undefined'){throw new Error('History.js Adapter has already been loaded...');}
History.Adapter={bind:function(el,event,callback){jQuery(el).bind(event,callback);},trigger:function(el,event,extra){jQuery(el).trigger(event,extra);},extractEventData:function(key,event,extra){var result=(event&&event.originalEvent&&event.originalEvent[key])||(extra&&extra[key])||undefined;return result;},onDomLoad:function(callback){jQuery(callback);}};if(typeof History.init!=='undefined'){History.init();}})(window);/*!
 * JavaScript Cookie v2.0.3
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(factory){if(typeof define==='function'&&define.amd){define(factory);}else if(typeof exports==='object'){module.exports=factory();}else{var _OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=_OldCookies;return api;};}}(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key];}}
return result;}
function init(converter){function api(key,value,attributes){var result;if(arguments.length>1){attributes=extend({path:'/'},api.defaults,attributes);if(typeof attributes.expires==='number'){var expires=new Date();expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e+5);attributes.expires=expires;}
try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result;}}catch(e){}
value=encodeURIComponent(String(value));value=value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);return(document.cookie=[key,'=',value,attributes.expires&&'; expires='+attributes.expires.toUTCString(),attributes.path&&'; path='+attributes.path,attributes.domain&&'; domain='+attributes.domain,attributes.secure?'; secure':''].join(''));}
if(!key){result={};}
var cookies=document.cookie?document.cookie.split('; '):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split('=');var name=parts[0].replace(rdecode,decodeURIComponent);var cookie=parts.slice(1).join('=');if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1);}
try{cookie=converter&&converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie);}catch(e){}}
if(key===name){result=cookie;break;}
if(!key){result[name]=cookie;}}catch(e){}}
return result;}
api.get=api.set=api;api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments));};api.defaults={};api.remove=function(key,attributes){api(key,'',extend(attributes,{expires:-1}));};api.withConverter=init;return api;}
return init();}));;(function($,window,undefined){'use strict';$(document).ready(function(){$('.filter-icon,.help-icon, .info-tooltip').tooltip();var subcatWidth=$('.subcat-etalasedrop').width();$('.dropdown-submenu').each(function(){var a=$(this).find('.subcat-etalasedrop').length;$(this).find('.dropdown-menu').css('width',(a*subcatWidth)+5);});$('.welcome-anchor').click(function(ev){$('.welcome-wrapper').slideToggle(400);$(this).html(($('.welcome-anchor').html()=='Oke, saya mengerti&nbsp;&nbsp;&nbsp;<i class="icon-remove"></i>')?'3 langkah mudah belanja&nbsp;&nbsp;&nbsp;<i class="icon-caret-down"></i>':'Oke, saya mengerti&nbsp;&nbsp;&nbsp;<i class="icon-remove"></i>');return false;});$('.help-affix').affix();$(".product-replyholder-wrapper").mCustomScrollbar({scrollInertia:150});});})(jQuery,this);/*
Copyright 2010-2013 Manos Malihutsakis 

This program is free software: you can redistribute it and/or modify 
it under the terms of the GNU Lesser General Public License as published by 
the Free Software Foundation, either version 3 of the License, or 
any later version. 

This program is distributed in the hope that it will be useful, 
but WITHOUT ANY WARRANTY; without even the implied warranty of 
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the 
GNU Lesser General Public License for more details. 

You should have received a copy of the GNU Lesser General Public License 
along with this program.  If not, see http://www.gnu.org/licenses/lgpl.html. 
*/
(function($){var methods={init:function(options){var defaults={set_width:false,set_height:false,horizontalScroll:false,scrollInertia:950,mouseWheel:true,mouseWheelPixels:"auto",autoDraggerLength:true,autoHideScrollbar:false,snapAmount:null,snapOffset:0,scrollButtons:{enable:false,scrollType:"continuous",scrollSpeed:"auto",scrollAmount:40},advanced:{updateOnBrowserResize:true,updateOnContentResize:false,autoExpandHorizontalScroll:false,autoScrollOnFocus:true,normalizeMouseWheelDelta:false},contentTouchScroll:true,callbacks:{onScrollStart:function(){},onScroll:function(){},onTotalScroll:function(){},onTotalScrollBack:function(){},onTotalScrollOffset:0,onTotalScrollBackOffset:0,whileScrolling:function(){}},theme:"light"},options=$.extend(true,defaults,options);return this.each(function(){var $this=$(this);if(options.set_width){$this.css("width",options.set_width);}
if(options.set_height){$this.css("height",options.set_height);}
if(!$(document).data("mCustomScrollbar-index")){$(document).data("mCustomScrollbar-index","1");}else{var mCustomScrollbarIndex=parseInt($(document).data("mCustomScrollbar-index"));$(document).data("mCustomScrollbar-index",mCustomScrollbarIndex+1);}
$this.wrapInner("<div class='mCustomScrollBox"+" mCS-"+options.theme+"' id='mCSB_"+$(document).data("mCustomScrollbar-index")+"' style='position:relative; height:100%; overflow:hidden; max-width:100%;' />").addClass("mCustomScrollbar _mCS_"+$(document).data("mCustomScrollbar-index"));var mCustomScrollBox=$this.children(".mCustomScrollBox");if(options.horizontalScroll){mCustomScrollBox.addClass("mCSB_horizontal").wrapInner("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />");var mCSB_h_wrapper=mCustomScrollBox.children(".mCSB_h_wrapper");mCSB_h_wrapper.wrapInner("<div class='mCSB_container' style='position:absolute; left:0;' />").children(".mCSB_container").css({"width":mCSB_h_wrapper.children().outerWidth(),"position":"relative"}).unwrap();}else{mCustomScrollBox.wrapInner("<div class='mCSB_container' style='position:relative; top:0;' />");}
var mCSB_container=mCustomScrollBox.children(".mCSB_container");if($.support.touch){mCSB_container.addClass("mCS_touch");}
mCSB_container.after("<div class='mCSB_scrollTools' style='position:absolute;'><div class='mCSB_draggerContainer'><div class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' style='position:relative;'></div></div><div class='mCSB_draggerRail'></div></div></div>");var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");if(options.horizontalScroll){mCSB_dragger.data("minDraggerWidth",mCSB_dragger.width());}else{mCSB_dragger.data("minDraggerHeight",mCSB_dragger.height());}
if(options.scrollButtons.enable){if(options.horizontalScroll){mCSB_scrollTools.prepend("<a class='mCSB_buttonLeft' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonRight' oncontextmenu='return false;'></a>");}else{mCSB_scrollTools.prepend("<a class='mCSB_buttonUp' oncontextmenu='return false;'></a>").append("<a class='mCSB_buttonDown' oncontextmenu='return false;'></a>");}}
mCustomScrollBox.bind("scroll",function(){if(!$this.is(".mCS_disabled")){mCustomScrollBox.scrollTop(0).scrollLeft(0);}});$this.data({"mCS_Init":true,"mCustomScrollbarIndex":$(document).data("mCustomScrollbar-index"),"horizontalScroll":options.horizontalScroll,"scrollInertia":options.scrollInertia,"scrollEasing":"mcsEaseOut","mouseWheel":options.mouseWheel,"mouseWheelPixels":options.mouseWheelPixels,"autoDraggerLength":options.autoDraggerLength,"autoHideScrollbar":options.autoHideScrollbar,"snapAmount":options.snapAmount,"snapOffset":options.snapOffset,"scrollButtons_enable":options.scrollButtons.enable,"scrollButtons_scrollType":options.scrollButtons.scrollType,"scrollButtons_scrollSpeed":options.scrollButtons.scrollSpeed,"scrollButtons_scrollAmount":options.scrollButtons.scrollAmount,"autoExpandHorizontalScroll":options.advanced.autoExpandHorizontalScroll,"autoScrollOnFocus":options.advanced.autoScrollOnFocus,"normalizeMouseWheelDelta":options.advanced.normalizeMouseWheelDelta,"contentTouchScroll":options.contentTouchScroll,"onScrollStart_Callback":options.callbacks.onScrollStart,"onScroll_Callback":options.callbacks.onScroll,"onTotalScroll_Callback":options.callbacks.onTotalScroll,"onTotalScrollBack_Callback":options.callbacks.onTotalScrollBack,"onTotalScroll_Offset":options.callbacks.onTotalScrollOffset,"onTotalScrollBack_Offset":options.callbacks.onTotalScrollBackOffset,"whileScrolling_Callback":options.callbacks.whileScrolling,"bindEvent_scrollbar_drag":false,"bindEvent_content_touch":false,"bindEvent_scrollbar_click":false,"bindEvent_mousewheel":false,"bindEvent_buttonsContinuous_y":false,"bindEvent_buttonsContinuous_x":false,"bindEvent_buttonsPixels_y":false,"bindEvent_buttonsPixels_x":false,"bindEvent_focusin":false,"bindEvent_autoHideScrollbar":false,"mCSB_buttonScrollRight":false,"mCSB_buttonScrollLeft":false,"mCSB_buttonScrollDown":false,"mCSB_buttonScrollUp":false});if(options.horizontalScroll){if($this.css("max-width")!=="none"){if(!options.advanced.updateOnContentResize){options.advanced.updateOnContentResize=true;}}}else{if($this.css("max-height")!=="none"){var percentage=false,maxHeight=parseInt($this.css("max-height"));if($this.css("max-height").indexOf("%")>=0){percentage=maxHeight,maxHeight=$this.parent().height()*percentage/100;}
$this.css("overflow","hidden");mCustomScrollBox.css("max-height",maxHeight);}}
$this.mCustomScrollbar("update");if(options.advanced.updateOnBrowserResize){var mCSB_resizeTimeout,currWinWidth=$(window).width(),currWinHeight=$(window).height();$(window).bind("resize."+$this.data("mCustomScrollbarIndex"),function(){if(mCSB_resizeTimeout){clearTimeout(mCSB_resizeTimeout);}
mCSB_resizeTimeout=setTimeout(function(){if(!$this.is(".mCS_disabled")&&!$this.is(".mCS_destroyed")){var winWidth=$(window).width(),winHeight=$(window).height();if(currWinWidth!==winWidth||currWinHeight!==winHeight){if($this.css("max-height")!=="none"&&percentage){mCustomScrollBox.css("max-height",$this.parent().height()*percentage/100);}
$this.mCustomScrollbar("update");currWinWidth=winWidth;currWinHeight=winHeight;}}},150);});}
if(options.advanced.updateOnContentResize){var mCSB_onContentResize;if(options.horizontalScroll){var mCSB_containerOldSize=mCSB_container.outerWidth();}else{var mCSB_containerOldSize=mCSB_container.outerHeight();}
mCSB_onContentResize=setInterval(function(){if(options.horizontalScroll){if(options.advanced.autoExpandHorizontalScroll){mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();}
var mCSB_containerNewSize=mCSB_container.outerWidth();}else{var mCSB_containerNewSize=mCSB_container.outerHeight();}
if(mCSB_containerNewSize!=mCSB_containerOldSize){$this.mCustomScrollbar("update");mCSB_containerOldSize=mCSB_containerNewSize;}},300);}});},update:function(){var $this=$(this),mCustomScrollBox=$this.children(".mCustomScrollBox"),mCSB_container=mCustomScrollBox.children(".mCSB_container");mCSB_container.removeClass("mCS_no_scrollbar");$this.removeClass("mCS_disabled mCS_destroyed");mCustomScrollBox.scrollTop(0).scrollLeft(0);var mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger");if($this.data("horizontalScroll")){var mCSB_buttonLeft=mCSB_scrollTools.children(".mCSB_buttonLeft"),mCSB_buttonRight=mCSB_scrollTools.children(".mCSB_buttonRight"),mCustomScrollBoxW=mCustomScrollBox.width();if($this.data("autoExpandHorizontalScroll")){mCSB_container.css({"position":"absolute","width":"auto"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({"width":mCSB_container.outerWidth(),"position":"relative"}).unwrap();}
var mCSB_containerW=mCSB_container.outerWidth();}else{var mCSB_buttonUp=mCSB_scrollTools.children(".mCSB_buttonUp"),mCSB_buttonDown=mCSB_scrollTools.children(".mCSB_buttonDown"),mCustomScrollBoxH=mCustomScrollBox.height(),mCSB_containerH=mCSB_container.outerHeight();}
if(mCSB_containerH>mCustomScrollBoxH&&!$this.data("horizontalScroll")){mCSB_scrollTools.css("display","block");var mCSB_draggerContainerH=mCSB_draggerContainer.height();if($this.data("autoDraggerLength")){var draggerH=Math.round(mCustomScrollBoxH/mCSB_containerH*mCSB_draggerContainerH),minDraggerH=mCSB_dragger.data("minDraggerHeight");if(draggerH<=minDraggerH){mCSB_dragger.css({"height":minDraggerH});}else if(draggerH>=mCSB_draggerContainerH-10){var mCSB_draggerContainerMaxH=mCSB_draggerContainerH-10;mCSB_dragger.css({"height":mCSB_draggerContainerMaxH});}else{mCSB_dragger.css({"height":draggerH});}
mCSB_dragger.children(".mCSB_dragger_bar").css({"line-height":mCSB_dragger.height()+"px"});}
var mCSB_draggerH=mCSB_dragger.height(),scrollAmount=(mCSB_containerH-mCustomScrollBoxH)/(mCSB_draggerContainerH-mCSB_draggerH);$this.data("scrollAmount",scrollAmount).mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);var mCSB_containerP=Math.abs(mCSB_container.position().top);$this.mCustomScrollbar("scrollTo",mCSB_containerP,{scrollInertia:0,trigger:"internal"});}else if(mCSB_containerW>mCustomScrollBoxW&&$this.data("horizontalScroll")){mCSB_scrollTools.css("display","block");var mCSB_draggerContainerW=mCSB_draggerContainer.width();if($this.data("autoDraggerLength")){var draggerW=Math.round(mCustomScrollBoxW/mCSB_containerW*mCSB_draggerContainerW),minDraggerW=mCSB_dragger.data("minDraggerWidth");if(draggerW<=minDraggerW){mCSB_dragger.css({"width":minDraggerW});}else if(draggerW>=mCSB_draggerContainerW-10){var mCSB_draggerContainerMaxW=mCSB_draggerContainerW-10;mCSB_dragger.css({"width":mCSB_draggerContainerMaxW});}else{mCSB_dragger.css({"width":draggerW});}}
var mCSB_draggerW=mCSB_dragger.width(),scrollAmount=(mCSB_containerW-mCustomScrollBoxW)/(mCSB_draggerContainerW-mCSB_draggerW);$this.data("scrollAmount",scrollAmount).mCustomScrollbar("scrolling",mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight);var mCSB_containerP=Math.abs(mCSB_container.position().left);$this.mCustomScrollbar("scrollTo",mCSB_containerP,{scrollInertia:0,trigger:"internal"});}else{mCustomScrollBox.unbind("mousewheel focusin");if($this.data("horizontalScroll")){mCSB_dragger.add(mCSB_container).css("left",0);}else{mCSB_dragger.add(mCSB_container).css("top",0);}
mCSB_scrollTools.css("display","none");mCSB_container.addClass("mCS_no_scrollbar");$this.data({"bindEvent_mousewheel":false,"bindEvent_focusin":false});}},scrolling:function(mCustomScrollBox,mCSB_container,mCSB_draggerContainer,mCSB_dragger,mCSB_buttonUp,mCSB_buttonDown,mCSB_buttonLeft,mCSB_buttonRight){var $this=$(this);if(!$this.data("bindEvent_scrollbar_drag")){var mCSB_draggerDragY,mCSB_draggerDragX;if($.support.msPointer){mCSB_dragger.bind("MSPointerDown",function(e){e.preventDefault();$this.data({"on_drag":true});mCSB_dragger.addClass("mCSB_dragger_onDrag");var elem=$(this),elemOffset=elem.offset(),x=e.originalEvent.pageX-elemOffset.left,y=e.originalEvent.pageY-elemOffset.top;if(x<elem.width()&&x>0&&y<elem.height()&&y>0){mCSB_draggerDragY=y;mCSB_draggerDragX=x;}});$(document).bind("MSPointerMove."+$this.data("mCustomScrollbarIndex"),function(e){e.preventDefault();if($this.data("on_drag")){var elem=mCSB_dragger,elemOffset=elem.offset(),x=e.originalEvent.pageX-elemOffset.left,y=e.originalEvent.pageY-elemOffset.top;scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);}}).bind("MSPointerUp."+$this.data("mCustomScrollbarIndex"),function(e){$this.data({"on_drag":false});mCSB_dragger.removeClass("mCSB_dragger_onDrag");});}else{mCSB_dragger.bind("mousedown touchstart",function(e){e.preventDefault();e.stopImmediatePropagation();var	elem=$(this),elemOffset=elem.offset(),x,y;if(e.type==="touchstart"){var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];x=touch.pageX-elemOffset.left;y=touch.pageY-elemOffset.top;}else{$this.data({"on_drag":true});mCSB_dragger.addClass("mCSB_dragger_onDrag");x=e.pageX-elemOffset.left;y=e.pageY-elemOffset.top;}
if(x<elem.width()&&x>0&&y<elem.height()&&y>0){mCSB_draggerDragY=y;mCSB_draggerDragX=x;}}).bind("touchmove",function(e){e.preventDefault();e.stopImmediatePropagation();var touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],elem=$(this),elemOffset=elem.offset(),x=touch.pageX-elemOffset.left,y=touch.pageY-elemOffset.top;scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);});$(document).bind("mousemove."+$this.data("mCustomScrollbarIndex"),function(e){if($this.data("on_drag")){var elem=mCSB_dragger,elemOffset=elem.offset(),x=e.pageX-elemOffset.left,y=e.pageY-elemOffset.top;scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x);}}).bind("mouseup."+$this.data("mCustomScrollbarIndex"),function(e){$this.data({"on_drag":false});mCSB_dragger.removeClass("mCSB_dragger_onDrag");});}
$this.data({"bindEvent_scrollbar_drag":true});}
function scrollbarDrag(mCSB_draggerDragY,mCSB_draggerDragX,y,x){if($this.data("horizontalScroll")){$this.mCustomScrollbar("scrollTo",(mCSB_dragger.position().left-(mCSB_draggerDragX))+x,{moveDragger:true,trigger:"internal"});}else{$this.mCustomScrollbar("scrollTo",(mCSB_dragger.position().top-(mCSB_draggerDragY))+y,{moveDragger:true,trigger:"internal"});}}
if($.support.touch&&$this.data("contentTouchScroll")){if(!$this.data("bindEvent_content_touch")){var touch,elem,elemOffset,y,x,mCSB_containerTouchY,mCSB_containerTouchX;mCSB_container.bind("touchstart",function(e){e.stopImmediatePropagation();touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];elem=$(this);elemOffset=elem.offset();x=touch.pageX-elemOffset.left;y=touch.pageY-elemOffset.top;mCSB_containerTouchY=y;mCSB_containerTouchX=x;});mCSB_container.bind("touchmove",function(e){e.preventDefault();e.stopImmediatePropagation();touch=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0];elem=$(this).parent();elemOffset=elem.offset();x=touch.pageX-elemOffset.left;y=touch.pageY-elemOffset.top;if($this.data("horizontalScroll")){$this.mCustomScrollbar("scrollTo",mCSB_containerTouchX-x,{trigger:"internal"});}else{$this.mCustomScrollbar("scrollTo",mCSB_containerTouchY-y,{trigger:"internal"});}});}}
if(!$this.data("bindEvent_scrollbar_click")){mCSB_draggerContainer.bind("click",function(e){var scrollToPos=(e.pageY-mCSB_draggerContainer.offset().top)*$this.data("scrollAmount"),target=$(e.target);if($this.data("horizontalScroll")){scrollToPos=(e.pageX-mCSB_draggerContainer.offset().left)*$this.data("scrollAmount");}
if(target.hasClass("mCSB_draggerContainer")||target.hasClass("mCSB_draggerRail")){$this.mCustomScrollbar("scrollTo",scrollToPos,{trigger:"internal",scrollEasing:"draggerRailEase"});}});$this.data({"bindEvent_scrollbar_click":true});}
if($this.data("mouseWheel")){if(!$this.data("bindEvent_mousewheel")){mCustomScrollBox.bind("mousewheel",function(e,delta){var scrollTo,mouseWheelPixels=$this.data("mouseWheelPixels"),absPos=Math.abs(mCSB_container.position().top),draggerPos=mCSB_dragger.position().top,limit=mCSB_draggerContainer.height()-mCSB_dragger.height();if($this.data("normalizeMouseWheelDelta")){if(delta<0){delta=-1;}else{delta=1;}}
if(mouseWheelPixels==="auto"){mouseWheelPixels=100+Math.round($this.data("scrollAmount")/2);}
if($this.data("horizontalScroll")){draggerPos=mCSB_dragger.position().left;limit=mCSB_draggerContainer.width()-mCSB_dragger.width();absPos=Math.abs(mCSB_container.position().left);}
if((delta>0&&draggerPos!==0)||(delta<0&&draggerPos!==limit)){e.preventDefault();e.stopImmediatePropagation();}
scrollTo=absPos-(delta*mouseWheelPixels);$this.mCustomScrollbar("scrollTo",scrollTo,{trigger:"internal"});});$this.data({"bindEvent_mousewheel":true});}}
if($this.data("scrollButtons_enable")){if($this.data("scrollButtons_scrollType")==="pixels"){if($this.data("horizontalScroll")){mCSB_buttonRight.add(mCSB_buttonLeft).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);$this.data({"bindEvent_buttonsContinuous_x":false});if(!$this.data("bindEvent_buttonsPixels_x")){mCSB_buttonRight.bind("click",function(e){e.preventDefault();PixelsScrollTo(Math.abs(mCSB_container.position().left)+$this.data("scrollButtons_scrollAmount"));});mCSB_buttonLeft.bind("click",function(e){e.preventDefault();PixelsScrollTo(Math.abs(mCSB_container.position().left)-$this.data("scrollButtons_scrollAmount"));});$this.data({"bindEvent_buttonsPixels_x":true});}}else{mCSB_buttonDown.add(mCSB_buttonUp).unbind("mousedown touchstart MSPointerDown mouseup MSPointerUp mouseout MSPointerOut touchend",mCSB_buttonRight_stop,mCSB_buttonLeft_stop);$this.data({"bindEvent_buttonsContinuous_y":false});if(!$this.data("bindEvent_buttonsPixels_y")){mCSB_buttonDown.bind("click",function(e){e.preventDefault();PixelsScrollTo(Math.abs(mCSB_container.position().top)+$this.data("scrollButtons_scrollAmount"));});mCSB_buttonUp.bind("click",function(e){e.preventDefault();PixelsScrollTo(Math.abs(mCSB_container.position().top)-$this.data("scrollButtons_scrollAmount"));});$this.data({"bindEvent_buttonsPixels_y":true});}}
function PixelsScrollTo(to){if(!mCSB_dragger.data("preventAction")){mCSB_dragger.data("preventAction",true);$this.mCustomScrollbar("scrollTo",to,{trigger:"internal"});}}}else{if($this.data("horizontalScroll")){mCSB_buttonRight.add(mCSB_buttonLeft).unbind("click");$this.data({"bindEvent_buttonsPixels_x":false});if(!$this.data("bindEvent_buttonsContinuous_x")){mCSB_buttonRight.bind("mousedown touchstart MSPointerDown",function(e){e.preventDefault();var scrollButtonsSpeed=ScrollButtonsSpeed();$this.data({"mCSB_buttonScrollRight":setInterval(function(){$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().left)+scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});},17)});});var mCSB_buttonRight_stop=function(e){e.preventDefault();clearInterval($this.data("mCSB_buttonScrollRight"));}
mCSB_buttonRight.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonRight_stop);mCSB_buttonLeft.bind("mousedown touchstart MSPointerDown",function(e){e.preventDefault();var scrollButtonsSpeed=ScrollButtonsSpeed();$this.data({"mCSB_buttonScrollLeft":setInterval(function(){$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().left)-scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});},17)});});var mCSB_buttonLeft_stop=function(e){e.preventDefault();clearInterval($this.data("mCSB_buttonScrollLeft"));}
mCSB_buttonLeft.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonLeft_stop);$this.data({"bindEvent_buttonsContinuous_x":true});}}else{mCSB_buttonDown.add(mCSB_buttonUp).unbind("click");$this.data({"bindEvent_buttonsPixels_y":false});if(!$this.data("bindEvent_buttonsContinuous_y")){mCSB_buttonDown.bind("mousedown touchstart MSPointerDown",function(e){e.preventDefault();var scrollButtonsSpeed=ScrollButtonsSpeed();$this.data({"mCSB_buttonScrollDown":setInterval(function(){$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().top)+scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});},17)});});var mCSB_buttonDown_stop=function(e){e.preventDefault();clearInterval($this.data("mCSB_buttonScrollDown"));}
mCSB_buttonDown.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonDown_stop);mCSB_buttonUp.bind("mousedown touchstart MSPointerDown",function(e){e.preventDefault();var scrollButtonsSpeed=ScrollButtonsSpeed();$this.data({"mCSB_buttonScrollUp":setInterval(function(){$this.mCustomScrollbar("scrollTo",Math.abs(mCSB_container.position().top)-scrollButtonsSpeed,{trigger:"internal",scrollEasing:"easeOutCirc"});},17)});});var mCSB_buttonUp_stop=function(e){e.preventDefault();clearInterval($this.data("mCSB_buttonScrollUp"));}
mCSB_buttonUp.bind("mouseup touchend MSPointerUp mouseout MSPointerOut",mCSB_buttonUp_stop);$this.data({"bindEvent_buttonsContinuous_y":true});}}
function ScrollButtonsSpeed(){var speed=$this.data("scrollButtons_scrollSpeed");if($this.data("scrollButtons_scrollSpeed")==="auto"){speed=Math.round(($this.data("scrollInertia")+100)/40);}
return speed;}}}
if($this.data("autoScrollOnFocus")){if(!$this.data("bindEvent_focusin")){mCustomScrollBox.bind("focusin",function(){mCustomScrollBox.scrollTop(0).scrollLeft(0);var focusedElem=$(document.activeElement);if(focusedElem.is("input,textarea,select,button,a[tabindex],area,object")){var mCSB_containerPos=mCSB_container.position().top,focusedElemPos=focusedElem.position().top,visibleLimit=mCustomScrollBox.height()-focusedElem.outerHeight();if($this.data("horizontalScroll")){mCSB_containerPos=mCSB_container.position().left;focusedElemPos=focusedElem.position().left;visibleLimit=mCustomScrollBox.width()-focusedElem.outerWidth();}
if(mCSB_containerPos+focusedElemPos<0||mCSB_containerPos+focusedElemPos>visibleLimit){$this.mCustomScrollbar("scrollTo",focusedElemPos,{trigger:"internal"});}}});$this.data({"bindEvent_focusin":true});}}
if($this.data("autoHideScrollbar")){if(!$this.data("bindEvent_autoHideScrollbar")){mCustomScrollBox.bind("mouseenter",function(e){mCustomScrollBox.addClass("mCS-mouse-over");functions.showScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));}).bind("mouseleave touchend",function(e){mCustomScrollBox.removeClass("mCS-mouse-over");if(e.type==="mouseleave"){functions.hideScrollbar.call(mCustomScrollBox.children(".mCSB_scrollTools"));}});$this.data({"bindEvent_autoHideScrollbar":true});}}},scrollTo:function(scrollTo,options){var $this=$(this),defaults={moveDragger:false,trigger:"external",callbacks:true,scrollInertia:$this.data("scrollInertia"),scrollEasing:$this.data("scrollEasing")},options=$.extend(defaults,options),draggerScrollTo,mCustomScrollBox=$this.children(".mCustomScrollBox"),mCSB_container=mCustomScrollBox.children(".mCSB_container"),mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),mCSB_draggerContainer=mCSB_scrollTools.children(".mCSB_draggerContainer"),mCSB_dragger=mCSB_draggerContainer.children(".mCSB_dragger"),contentSpeed=draggerSpeed=options.scrollInertia,scrollBeginning,scrollBeginningOffset,totalScroll,totalScrollOffset;if(!mCSB_container.hasClass("mCS_no_scrollbar")){$this.data({"mCS_trigger":options.trigger});if($this.data("mCS_Init")){options.callbacks=false;}
if(scrollTo||scrollTo===0){if(typeof(scrollTo)==="number"){if(options.moveDragger){draggerScrollTo=scrollTo;if($this.data("horizontalScroll")){scrollTo=mCSB_dragger.position().left*$this.data("scrollAmount");}else{scrollTo=mCSB_dragger.position().top*$this.data("scrollAmount");}
draggerSpeed=0;}else{draggerScrollTo=scrollTo/$this.data("scrollAmount");}}else if(typeof(scrollTo)==="string"){var target;if(scrollTo==="top"){target=0;}else if(scrollTo==="bottom"&&!$this.data("horizontalScroll")){target=mCSB_container.outerHeight()-mCustomScrollBox.height();}else if(scrollTo==="left"){target=0;}else if(scrollTo==="right"&&$this.data("horizontalScroll")){target=mCSB_container.outerWidth()-mCustomScrollBox.width();}else if(scrollTo==="first"){target=$this.find(".mCSB_container").find(":first");}else if(scrollTo==="last"){target=$this.find(".mCSB_container").find(":last");}else{target=$this.find(scrollTo);}
if(target.length===1){if($this.data("horizontalScroll")){scrollTo=target.position().left;}else{scrollTo=target.position().top;}
draggerScrollTo=scrollTo/$this.data("scrollAmount");}else{draggerScrollTo=scrollTo=target;}}
if($this.data("horizontalScroll")){if($this.data("onTotalScrollBack_Offset")){scrollBeginningOffset=-$this.data("onTotalScrollBack_Offset");}
if($this.data("onTotalScroll_Offset")){totalScrollOffset=mCustomScrollBox.width()-mCSB_container.outerWidth()+$this.data("onTotalScroll_Offset");}
if(draggerScrollTo<0){draggerScrollTo=scrollTo=0;clearInterval($this.data("mCSB_buttonScrollLeft"));if(!scrollBeginningOffset){scrollBeginning=true;}}else if(draggerScrollTo>=mCSB_draggerContainer.width()-mCSB_dragger.width()){draggerScrollTo=mCSB_draggerContainer.width()-mCSB_dragger.width();scrollTo=mCustomScrollBox.width()-mCSB_container.outerWidth();clearInterval($this.data("mCSB_buttonScrollRight"));if(!totalScrollOffset){totalScroll=true;}}else{scrollTo=-scrollTo;}
var snapAmount=$this.data("snapAmount");if(snapAmount){scrollTo=Math.round(scrollTo/snapAmount)*snapAmount-$this.data("snapOffset");}
functions.mTweenAxis.call(this,mCSB_dragger[0],"left",Math.round(draggerScrollTo),draggerSpeed,options.scrollEasing);functions.mTweenAxis.call(this,mCSB_container[0],"left",Math.round(scrollTo),contentSpeed,options.scrollEasing,{onStart:function(){if(options.callbacks&&!$this.data("mCS_tweenRunning")){callbacks("onScrollStart");}
if($this.data("autoHideScrollbar")){functions.showScrollbar.call(mCSB_scrollTools);}},onUpdate:function(){if(options.callbacks){callbacks("whileScrolling");}},onComplete:function(){if(options.callbacks){callbacks("onScroll");if(scrollBeginning||(scrollBeginningOffset&&mCSB_container.position().left>=scrollBeginningOffset)){callbacks("onTotalScrollBack");}
if(totalScroll||(totalScrollOffset&&mCSB_container.position().left<=totalScrollOffset)){callbacks("onTotalScroll");}}
mCSB_dragger.data("preventAction",false);$this.data("mCS_tweenRunning",false);if($this.data("autoHideScrollbar")){if(!mCustomScrollBox.hasClass("mCS-mouse-over")){functions.hideScrollbar.call(mCSB_scrollTools);}}}});}else{if($this.data("onTotalScrollBack_Offset")){scrollBeginningOffset=-$this.data("onTotalScrollBack_Offset");}
if($this.data("onTotalScroll_Offset")){totalScrollOffset=mCustomScrollBox.height()-mCSB_container.outerHeight()+$this.data("onTotalScroll_Offset");}
if(draggerScrollTo<0){draggerScrollTo=scrollTo=0;clearInterval($this.data("mCSB_buttonScrollUp"));if(!scrollBeginningOffset){scrollBeginning=true;}}else if(draggerScrollTo>=mCSB_draggerContainer.height()-mCSB_dragger.height()){draggerScrollTo=mCSB_draggerContainer.height()-mCSB_dragger.height();scrollTo=mCustomScrollBox.height()-mCSB_container.outerHeight();clearInterval($this.data("mCSB_buttonScrollDown"));if(!totalScrollOffset){totalScroll=true;}}else{scrollTo=-scrollTo;}
var snapAmount=$this.data("snapAmount");if(snapAmount){scrollTo=Math.round(scrollTo/snapAmount)*snapAmount-$this.data("snapOffset");}
functions.mTweenAxis.call(this,mCSB_dragger[0],"top",Math.round(draggerScrollTo),draggerSpeed,options.scrollEasing);functions.mTweenAxis.call(this,mCSB_container[0],"top",Math.round(scrollTo),contentSpeed,options.scrollEasing,{onStart:function(){if(options.callbacks&&!$this.data("mCS_tweenRunning")){callbacks("onScrollStart");}
if($this.data("autoHideScrollbar")){functions.showScrollbar.call(mCSB_scrollTools);}},onUpdate:function(){if(options.callbacks){callbacks("whileScrolling");}},onComplete:function(){if(options.callbacks){callbacks("onScroll");if(scrollBeginning||(scrollBeginningOffset&&mCSB_container.position().top>=scrollBeginningOffset)){callbacks("onTotalScrollBack");}
if(totalScroll||(totalScrollOffset&&mCSB_container.position().top<=totalScrollOffset)){callbacks("onTotalScroll");}}
mCSB_dragger.data("preventAction",false);$this.data("mCS_tweenRunning",false);if($this.data("autoHideScrollbar")){if(!mCustomScrollBox.hasClass("mCS-mouse-over")){functions.hideScrollbar.call(mCSB_scrollTools);}}}});}
if($this.data("mCS_Init")){$this.data({"mCS_Init":false});}}}
function callbacks(cb){this.mcs={top:mCSB_container.position().top,left:mCSB_container.position().left,draggerTop:mCSB_dragger.position().top,draggerLeft:mCSB_dragger.position().left,topPct:Math.round((100*Math.abs(mCSB_container.position().top))/Math.abs(mCSB_container.outerHeight()-mCustomScrollBox.height())),leftPct:Math.round((100*Math.abs(mCSB_container.position().left))/Math.abs(mCSB_container.outerWidth()-mCustomScrollBox.width()))};switch(cb){case"onScrollStart":$this.data("mCS_tweenRunning",true).data("onScrollStart_Callback").call($this,this.mcs);break;case"whileScrolling":$this.data("whileScrolling_Callback").call($this,this.mcs);break;case"onScroll":$this.data("onScroll_Callback").call($this,this.mcs);break;case"onTotalScrollBack":$this.data("onTotalScrollBack_Callback").call($this,this.mcs);break;case"onTotalScroll":$this.data("onTotalScroll_Callback").call($this,this.mcs);break;}}},stop:function(){var $this=$(this),mCSB_container=$this.children().children(".mCSB_container"),mCSB_dragger=$this.children().children().children().children(".mCSB_dragger");functions.mTweenAxisStop.call(this,mCSB_container[0]);functions.mTweenAxisStop.call(this,mCSB_dragger[0]);},disable:function(resetScroll){var $this=$(this),mCustomScrollBox=$this.children(".mCustomScrollBox"),mCSB_container=mCustomScrollBox.children(".mCSB_container"),mCSB_scrollTools=mCustomScrollBox.children(".mCSB_scrollTools"),mCSB_dragger=mCSB_scrollTools.children().children(".mCSB_dragger");mCustomScrollBox.unbind("mousewheel focusin mouseenter mouseleave touchend");mCSB_container.unbind("touchstart touchmove")
if(resetScroll){if($this.data("horizontalScroll")){mCSB_dragger.add(mCSB_container).css("left",0);}else{mCSB_dragger.add(mCSB_container).css("top",0);}}
mCSB_scrollTools.css("display","none");mCSB_container.addClass("mCS_no_scrollbar");$this.data({"bindEvent_mousewheel":false,"bindEvent_focusin":false,"bindEvent_content_touch":false,"bindEvent_autoHideScrollbar":false}).addClass("mCS_disabled");},destroy:function(){var $this=$(this);$this.removeClass("mCustomScrollbar _mCS_"+$this.data("mCustomScrollbarIndex")).addClass("mCS_destroyed").children().children(".mCSB_container").unwrap().children().unwrap().siblings(".mCSB_scrollTools").remove();$(document).unbind("mousemove."+$this.data("mCustomScrollbarIndex")+" mouseup."+$this.data("mCustomScrollbarIndex")+" MSPointerMove."+$this.data("mCustomScrollbarIndex")+" MSPointerUp."+$this.data("mCustomScrollbarIndex"));$(window).unbind("resize."+$this.data("mCustomScrollbarIndex"));}},functions={showScrollbar:function(){this.stop().animate({opacity:1},"fast");},hideScrollbar:function(){this.stop().animate({opacity:0},"fast");},mTweenAxis:function(el,prop,to,duration,easing,callbacks){var callbacks=callbacks||{},onStart=callbacks.onStart||function(){},onUpdate=callbacks.onUpdate||function(){},onComplete=callbacks.onComplete||function(){};var startTime=_getTime(),_delay,progress=0,from=el.offsetTop,elStyle=el.style;if(prop==="left"){from=el.offsetLeft;}
var diff=to-from;_cancelTween();_startTween();function _getTime(){if(window.performance&&window.performance.now){return window.performance.now();}else{if(window.performance&&window.performance.webkitNow){return window.performance.webkitNow();}else{if(Date.now){return Date.now();}else{return new Date().getTime();}}}}
function _step(){if(!progress){onStart.call();}
progress=_getTime()-startTime;_tween();if(progress>=el._time){el._time=(progress>el._time)?progress+_delay-(progress-el._time):progress+_delay-1;if(el._time<progress+1){el._time=progress+1;}}
if(el._time<duration){el._id=_request(_step);}else{onComplete.call();}}
function _tween(){if(duration>0){el.currVal=_ease(el._time,from,diff,duration,easing);elStyle[prop]=Math.round(el.currVal)+"px";}else{elStyle[prop]=to+"px";}
onUpdate.call();}
function _startTween(){_delay=1000/60;el._time=progress+_delay;_request=(!window.requestAnimationFrame)?function(f){_tween();return setTimeout(f,0.01);}:window.requestAnimationFrame;el._id=_request(_step);}
function _cancelTween(){if(el._id==null){return;}
if(!window.requestAnimationFrame){clearTimeout(el._id);}else{window.cancelAnimationFrame(el._id);}
el._id=null;}
function _ease(t,b,c,d,type){switch(type){case"linear":return c*t/d+b;break;case"easeOutQuad":t/=d;return-c*t*(t-2)+b;break;case"easeInOutQuad":t/=d/2;if(t<1)return c/2*t*t+b;t--;return-c/2*(t*(t-2)-1)+b;break;case"easeOutCubic":t/=d;t--;return c*(t*t*t+1)+b;break;case"easeOutQuart":t/=d;t--;return-c*(t*t*t*t-1)+b;break;case"easeOutQuint":t/=d;t--;return c*(t*t*t*t*t+1)+b;break;case"easeOutCirc":t/=d;t--;return c*Math.sqrt(1-t*t)+b;break;case"easeOutSine":return c*Math.sin(t/d*(Math.PI/2))+b;break;case"easeOutExpo":return c*(-Math.pow(2,-10*t/d)+1)+b;break;case"mcsEaseOut":var ts=(t/=d)*t,tc=ts*t;return b+c*(0.499999999999997*tc*ts+-2.5*ts*ts+5.5*tc+-6.5*ts+4*t);break;case"draggerRailEase":t/=d/2;if(t<1)return c/2*t*t*t+b;t-=2;return c/2*(t*t*t+2)+b;break;}}},mTweenAxisStop:function(el){if(el._id==null){return;}
if(!window.requestAnimationFrame){clearTimeout(el._id);}else{window.cancelAnimationFrame(el._id);}
el._id=null;},rafPolyfill:function(){var pfx=["ms","moz","webkit","o"],i=pfx.length;while(--i>-1&&!window.requestAnimationFrame){window.requestAnimationFrame=window[pfx[i]+"RequestAnimationFrame"];window.cancelAnimationFrame=window[pfx[i]+"CancelAnimationFrame"]||window[pfx[i]+"CancelRequestAnimationFrame"];}}}
functions.rafPolyfill.call();$.support.touch=!!('ontouchstart' in window);$.support.msPointer=window.navigator.msPointerEnabled;var _dlp=("https:"==document.location.protocol)?"https:":"http:";$.event.special.mousewheel||document.write('<script src="'+_dlp+'//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.0.6/jquery.mousewheel.min.js"><\/script>');$.fn.mCustomScrollbar=function(method){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}else if(typeof method==="object"||!method){return methods.init.apply(this,arguments);}else{$.error("Method "+method+" does not exist");}};})(jQuery);/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function($){var types=['DOMMouseScroll','mousewheel'];if($.event.fixHooks){for(var i=types.length;i;){$.event.fixHooks[types[--i]]=$.event.mouseHooks;}}
$.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var i=types.length;i;){this.addEventListener(types[--i],handler,false);}}else{this.onmousewheel=handler;}},teardown:function(){if(this.removeEventListener){for(var i=types.length;i;){this.removeEventListener(types[--i],handler,false);}}else{this.onmousewheel=null;}}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta){delta=orgEvent.wheelDelta/120;}
if(orgEvent.detail){delta=-orgEvent.detail/3;}
deltaY=delta;if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=-1*delta;}
if(orgEvent.wheelDeltaY!==undefined){deltaY=orgEvent.wheelDeltaY/120;}
if(orgEvent.wheelDeltaX!==undefined){deltaX=-1*orgEvent.wheelDeltaX/120;}
args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args);}})(jQuery);/*
 * Superfish v1.7.3 - jQuery menu widget
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */;(function($){"use strict";var methods=(function(){var c={bcClass:'sf-breadcrumb',menuClass:'sf-js-enabled',anchorClass:'sf-with-ul',menuArrowClass:'sf-arrows'},ios=(function(){var ios=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(ios){$(window).load(function(){$('body').children().on('click',$.noop);});}
return ios;})(),wp7=(function(){var style=document.documentElement.style;return('behavior' in style&&'fill' in style&&/iemobile/i.test(navigator.userAgent));})(),toggleMenuClasses=function($menu,o){var classes=c.menuClass;if(o.cssArrows){classes+=' '+c.menuArrowClass;}
$menu.toggleClass(classes);},setPathToCurrent=function($menu,o){return $menu.find('li.'+o.pathClass).slice(0,o.pathLevels)
.addClass(o.hoverClass+' '+c.bcClass)
.filter(function(){return($(this).children(o.popUpSelector).hide().show().length);}).removeClass(o.pathClass);},toggleAnchorClass=function($li){$li.children('a').toggleClass(c.anchorClass);},toggleTouchAction=function($menu){var touchAction=$menu.css('ms-touch-action');touchAction=(touchAction==='pan-y')?'auto':'pan-y';$menu.css('ms-touch-action',touchAction);},applyHandlers=function($menu,o){var targets='li:has('+o.popUpSelector+')';if($.fn.hoverIntent&&!o.disableHI){$menu.hoverIntent(over,out,targets);}
else{$menu
.on('mouseenter.superfish',targets,over)
.on('mouseleave.superfish',targets,out);}
var touchevent='MSPointerDown.superfish';if(!ios){touchevent+=' touchend.superfish';}
if(wp7){touchevent+=' mousedown.superfish';}
$menu
.on('focusin.superfish','li',over)
.on('focusout.superfish','li',out)
.on(touchevent,'a',o,touchHandler);},touchHandler=function(e){var $this=$(this),$ul=$this.siblings(e.data.popUpSelector);if($ul.length>0&&$ul.is(':hidden')){$this.one('click.superfish',false);if(e.type==='MSPointerDown'){$this.trigger('focus');}else{$.proxy(over,$this.parent('li'))();}}},over=function(){var $this=$(this),o=getOptions($this);clearTimeout(o.sfTimer);$this.siblings().superfish('hide').end().superfish('show');},out=function(){var $this=$(this),o=getOptions($this);if(ios){$.proxy(close,$this,o)();}
else{clearTimeout(o.sfTimer);o.sfTimer=setTimeout($.proxy(close,$this,o),o.delay);}},close=function(o){o.retainPath=($.inArray(this[0],o.$path)>-1);this.superfish('hide');if(!this.parents('.'+o.hoverClass).length){o.onIdle.call(getMenu(this));if(o.$path.length){$.proxy(over,o.$path)();}}},getMenu=function($el){return $el.closest('.'+c.menuClass);},getOptions=function($el){return getMenu($el).data('sf-options');};return{hide:function(instant){if(this.length){var $this=this,o=getOptions($this);if(!o){return this;}
var not=(o.retainPath===true)?o.$path:'',$ul=$this.find('li.'+o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),speed=o.speedOut;if(instant){$ul.show();speed=0;}
o.retainPath=false;o.onBeforeHide.call($ul);$ul.stop(true,true).animate(o.animationOut,speed,function(){var $this=$(this);o.onHide.call($this);});}
return this;},show:function(){var o=getOptions(this);if(!o){return this;}
var $this=this.addClass(o.hoverClass),$ul=$this.children(o.popUpSelector);o.onBeforeShow.call($ul);$ul.stop(true,true).animate(o.animation,o.speed,function(){o.onShow.call($ul);});return this;},destroy:function(){return this.each(function(){var $this=$(this),o=$this.data('sf-options'),$hasPopUp;if(!o){return false;}
$hasPopUp=$this.find(o.popUpSelector).parent('li');clearTimeout(o.sfTimer);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);$this.off('.superfish').off('.hoverIntent');$hasPopUp.children(o.popUpSelector).attr('style',function(i,style){return style.replace(/display[^;]+;?/g,'');});o.$path.removeClass(o.hoverClass+' '+c.bcClass).addClass(o.pathClass);$this.find('.'+o.hoverClass).removeClass(o.hoverClass);o.onDestroy.call($this);$this.removeData('sf-options');});},init:function(op){return this.each(function(){var $this=$(this);if($this.data('sf-options')){return false;}
var o=$.extend({},$.fn.superfish.defaults,op),$hasPopUp=$this.find(o.popUpSelector).parent('li');o.$path=setPathToCurrent($this,o);$this.data('sf-options',o);toggleMenuClasses($this,o);toggleAnchorClass($hasPopUp);toggleTouchAction($this);applyHandlers($this,o);$hasPopUp.not('.'+c.bcClass).superfish('hide',true);o.onInit.call(this);});}};})();$.fn.superfish=function(method,args){if(methods[method]){return methods[method].apply(this,Array.prototype.slice.call(arguments,1));}
else if(typeof method==='object'||!method){return methods.init.apply(this,arguments);}
else{return $.error('Method '+method+' does not exist on jQuery.fn.superfish');}};$.fn.superfish.defaults={popUpSelector:'ul,.sf-mega',hoverClass:'sfHover',pathClass:'overrideThisToUse',pathLevels:1,delay:800,animation:{opacity:'show'},animationOut:{opacity:'hide'},speed:'normal',speedOut:'fast',cssArrows:true,disableHI:false,onInit:$.noop,onBeforeShow:$.noop,onShow:$.noop,onBeforeHide:$.noop,onHide:$.noop,onIdle:$.noop,onDestroy:$.noop};$.fn.extend({hideSuperfishUl:methods.hide,showSuperfishUl:methods.show});})(jQuery);!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);$(document).ready(function(){init_hover_prd_stat();});function init_hover_prd_stat(){$(document).on('mouseenter','.rating-hover',function(){if(!$(this).find('.hovered').length){var elem_arr=['accuracy-star','speed-star','service-star'];var template=$('.hovered-template-hidden').clone();var this_elem=$(this).find('.hovered-data');$.each(elem_arr,function(key,value){var template_selector=template.find('.'+value+' :first-child');var this_selector=this_elem.find('.'+value+' :first-child');template_selector.addClass(this_selector.attr('class'));});this_elem.replaceWith(template.html());}});}
$(document).on('mouseover','.rating-hover',function(e){var reputation=$(e.target).closest('.rating-hover').find('.hovered-data').html();$('.reput').html(reputation);});function get_pio_product(no_pio,callback){var products=[];if(no_pio){callback(products);}else{var dataLayer=window.dataLayer||[];var userId;for(var i=0;i<dataLayer.length;i++){if(dataLayer[i].contactInfo){userId=dataLayer[i].contactInfo.userId;break;}}
var data_pio={user:'user-'+userId,num:50};var cookie_pio_products=getCookiePioProducts("value");if(cookie_pio_products==null){var xhr=new XMLHttpRequest();xhr.open("POST","https://pio.tokopedia.com/queries.json",true);xhr.setRequestHeader('Content-Type','application/json; charset=UTF-8');xhr.onreadystatechange=function(){if(xhr.readyState==4&&xhr.status==200){var result={};try{result=JSON.parse(xhr.responseText);}catch(e){result={};}
if(result.itemScores){for(var i=0;i<result.itemScores.length;i++){if(result.itemScores[i].typePredict!=1){break;}
var item=result.itemScores[i].item;var splits=item.split('-');products.push(splits[1]);}
createCookiePioProducts(JSON.stringify(products));callback(products);}}};xhr.send(JSON.stringify(data_pio));}
else{var cookie_pio_data=JSON.parse(cookie_pio_products);if(cookie_pio_data!=null){callback(cookie_pio_data);}}}}
function getCookiePioProducts(return_type){var c_name_pio_prod="pio_products";var no_pio_products=0;if(document.cookie.length>0){var c_start_pio_prod=document.cookie.indexOf(c_name_pio_prod+"=");if(c_start_pio_prod!=-1){c_start_pio_prod=c_start_pio_prod+c_name_pio_prod.length+1;var c_end_pio_prod=document.cookie.indexOf("#",c_start_pio_prod);if(c_end_pio_prod==-1){c_end_pio_prod=document.cookie.length;}
if(return_type=="value"){return unescape(document.cookie.substring(c_start_pio_prod,c_end_pio_prod));}
var e_start_pio_prod=c_end_pio_prod+12;var e_end_pio_prod=document.cookie.indexOf(";",e_start_pio_prod);if(e_end_pio_prod==-1){e_end_pio_prod=document.cookie.length;}
if(return_type=="expires"){return unescape(document.cookie.substring(e_start_pio_prod,e_end_pio_prod));}}
else{no_pio_products=1;}}
else{no_pio_products=1;}
return null;}
function createCookiePioProducts(value){var c_name_pio_prod="pio_products";var minutes=10;var expires;var expiresDate;if(minutes){var date_c_pio_prod=new Date();date_c_pio_prod.setTime(date_c_pio_prod.getTime()+(minutes*60*1000));var expDate=date_c_pio_prod.toGMTString();expiresDate="#expireDate="+expDate;expires="; expires="+expDate;}
else{expires="";expiresDate="";}
document.cookie=c_name_pio_prod+"="+value+expiresDate+expires+"; path=/";}
function setCookiePioProducts(value){var c_name_pio_prod="pio_products";var expDate=getCookiePioProducts("expires");if(expDate!=null&&value!=null){var expiresDate="#expireDate="+expDate;var expires="; expires="+expiresDate;document.cookie=c_name_pio_prod+"="+value+expiresDate+expires+"; path=/";}}
function get_ad_product(no_ad){if($(".promo-sponsor-right").length>0){var elem_id=$('.promo-sponsor-right').attr('id');var h=$('.promo-sponsor-right').attr('h');var m_d_id=$('.promo-sponsor-right').attr('m_d_id');var arr_elem_id=elem_id.split('-');var d_id=arr_elem_id.pop();var t=arr_elem_id.pop();var url=location.href;var uri=parseUri(url);var uri_path=uri.path;var anc=uri.anchor;var qs=new Object();if(anc){var anc_uri=parseUri(anc);qs=anc_uri.queryKey;}
else{qs=uri.queryKey;}
if(!d_id){if(qs&&qs.sc){d_id=qs.sc;}}
var url_ad=(no_ad)?product_dink_ajax_url:product_ads_ajax_url;var no_pio=0;if(no_ad==1||!qs.ab||qs.ab!=1){no_pio=1;}
var dt=new Object();get_pio_product(no_pio,function(pio_products){if(pio_products.length>0){dt.pio=pio_products.join(',');}
var ajxgo=(typeof ajax_go==='undefined')?0:ajax_go;if(ajxgo==1){if(qs.page){dt.page=qs.page;}
$.ajax({url:product_ads_ajax_go,global:true,type:"GET",data:(dt),dataType:"json",success:function(result){if(result.data){var dataTopAds=directoryTemplate.constructTopAds(result.data,3);if(dataTopAds.adRight){$('.promo-sponsor-right').html(dataTopAds.adRight);}
if(dataTopAds.adBottom){$('.promo-sponsor-bottom').html(dataTopAds.adBottom);}
$('.cursor-default').tooltip();}}});}else{dt.action='get_product';dt.d_id=d_id;dt.m_d_id=m_d_id;dt.t=t;if($("#filter-spec").length>0){dt.t='a';}
if(qs.q){dt.q=decodeURIComponent(qs.q);}else if(qs.sq){dt.q=decodeURIComponent(qs.sq);}
if(qs.page){dt.page=qs.page;}
if(h){dt.h=h;}
$.ajax({url:url_ad,global:true,type:"GET",data:(dt),dataType:"json",xhrFields:{withCredentials:true},success:function(result){if(result.ad_right){$('.promo-sponsor-right').html(result.ad_right);}
else{if(result.topads==1){get_ad_product(1);}}
if(result.ad_bottom){$('.promo-sponsor-bottom').html(result.ad_bottom);}
if(result.ad_gtm_script){$('.promo-sponsor-right').append(result.ad_gtm_script);}
$('.cursor-default').tooltip();}});}});}}
$(document).ready(function(){$(document).on('mousedown','.promo-sponsor-right a, .promo-sponsor-bottom a',function(){var uri_ad=$(this).siblings('a').attr('href');$(this).attr('href',uri_ad);});$('.promo-sponsor-right').on('DOMNodeInserted',function(){$('.popper').popover({html:true,selector:'.popover-wrap',trigger:'manual',delay:{show:0,hide:100},content:function(){return $(this).next('.popover-content').html();}});});$(document).on('mouseenter','.popover-wrap',function(){$('body').find('.popover').remove();$(this).find('.popper').popover('show');$('body').find('.popover').appendTo(this);$(".popover-wrap").mouseleave(function(){$('body').find('.popper').popover('show');$('body').find('.popover').remove();})});$('.promo-sponsor-bottom').on('DOMNodeInserted',function(){$('.popper2').popover({html:true,selector:'.popover-wrap2',trigger:'manual',delay:{show:0,hide:100},content:function(){return $(this).next('.popover-content2').html();}});});$(document).on('mouseenter','.popover-wrap2',function(){$('body').find('.popover').remove();$(this).find('.popper2').popover('show');$('body').find('.popover').appendTo(this);$(".popover-wrap2").mouseleave(function(){$('body').find('.popper2').popover('show');$('body').find('.popover').remove();})});});(function(window,undefined){function init_assets_slides_before_login(slides){var carousel;if(slides.length>0){var dots_option=false;var loop_option=false;var nav_option=false;if(slides.length>1){dots_option=true;loop_option=true;nav_option=true;}
var slides_string=slides.join('');var div_insert='<div class="home-slider"><div class="home-slider_carousel">'+
slides_string+
'</div><div class="home-slider_nav"><a class="prev"><i class="icon-chevron-left-alt"></i></a><a class="next"><i class="icon-chevron-right-alt"></i></a></div></div>';if($('.skin-wrap').length==0){div_insert='<div class="row-fluid">'+div_insert+'</div>';}
$(div_insert).insertBefore('section.container:first');if(!($('.skin-wrap').length==0&&slides.length==1)){carousel=$(".home-slider_carousel");carousel.owlCarousel({items:1,autoplay:true,touchDrag:false,autoplayHoverPause:true,animateOut:'fadeOut',dots:dots_option,loop:loop_option});}}
$(".home-slider_nav .prev").click(function(){carousel.trigger('prev.owl.carousel');});$(".home-slider_nav .next").click(function(){carousel.trigger('next.owl.carousel');});}
function init_assets_slides_login(slides){var carousel;if(slides.length>0){var dots_option=false;var loop_option=false;if(slides.length>1){dots_option=true;loop_option=true;}
var slides_string=slides.join('');var div_insert='<div class="home-slider-after"><div class="home-slider_carousel">'+
slides_string+
'</div><div class="home-slider_nav"><a class="prev"><i class="icon-chevron-left-alt"></i></a><a class="next"><i class="icon-chevron-right-alt"></i></a></div></div>';$('.maincontent-admin').prepend(div_insert);if(slides.length>1){carousel=$(".home-slider_carousel");carousel.owlCarousel({items:1,autoplay:true,touchDrag:false,autoplayHoverPause:true,animateOut:'fadeOut',dots:dots_option,loop:loop_option});}}
$(".home-slider_nav .prev").click(function(){carousel.trigger('prev.owl.carousel');});$(".home-slider_nav .next").click(function(){carousel.trigger('next.owl.carousel');});}
function process_slides(slides){var user_tab=$("#user-tab").html();var slides_arr=new Array();var slides_length=slides.length;var now=new Date().getTime();if(slides_length>0){for(var i=0;i<slides_length;i++){var expired_date=new Date(slides[i].expire_time).getTime();var target_user=slides[i].target;var is_show=0;if(now<expired_date){if(target_user==65535){is_show=1;}
else if(target_user==1){if(!logged_in_user_id){is_show=1;}}
else if(target_user==2){if(logged_in_user_id!=0){is_show=1;}}
else if(target_user==4){if(logged_in_shop_id!=0){is_show=1;}}
else if(target_user==8){if(logged_in_gold_merchant!=0){is_show=1;}}
if(is_show==1){slides_arr.push('<div class="item"> <a href="'+slides[i].redirect_url+'" target="_blank"><img src="'+slides[i].image_url+'"></a></div>');}}}}
if(user_tab){init_assets_slides_login(slides_arr);}else{init_assets_slides_before_login(slides_arr);}}
function get_slides(){$.ajax({"dataType":'json',"type":"GET","url":slides_go_url,"success":function(result){if(result.success||result.meta){if(result.data){if((result.data.slides).length>0){process_slides(result.data.slides);}}
insert_storage(result.data.slides);}},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){},complete:function(){}});}
function addMinutes(date,minutes){return new Date(date.getTime()+minutes*60000).getTime();}
function insert_storage(slides){var slides_key;if(logged_in_user_id!=0){slides_key="tokopedia:slides:"+logged_in_user_id;}else{slides_key="tokopedia:slides";}
var expired_key=slides_key+":expired";var expired_time=addMinutes(new Date(),60);var json_slides=JSON.stringify(slides);localStorage.setItem(slides_key,json_slides);localStorage.setItem(expired_key,expired_time);}
function check_storage(){var slides_key;if(logged_in_user_id!=0){slides_key="tokopedia:slides:"+logged_in_user_id;}else{slides_key="tokopedia:slides";}
var expired_key=slides_key+":expired";var expired_time=localStorage.getItem(expired_key);var now=new Date().getTime();expired_time=expired_time?expired_time:0;if(now>expired_time){get_slides();}else{var slides=localStorage.getItem(slides_key);var slides_obj=JSON.parse(slides);process_slides(slides_obj);}}
$(document).ready(function(){check_storage();});})(window);var arr_select=new Array();var History=window.History;var url=location.href;var uri=parseUri(url);var qs=uri.query;var uri_path=uri.path;var uri_params={qs:encodeURIComponent(qs),uri_path:encodeURIComponent(uri_path)};uri_params=$.param(uri_params);$(document).on('change','.checkall',function(e){if(this.checked){$('.conf-single').each(function(){var values=this.value;var idx=$.inArray(values,arr_select);if(idx==-1){arr_select.push(values);}
                        <div class="span4 relative"> \
                            <div class="toko border"> \
                                <div class="row-fluid pm0"> \
                                    <a href="'+gm[i].s_uri_ad+'" target="_blank" onmousedown=\''+gm[i].topads_gtm_click+'\'> \
                                        <div class="span12 pm0 row-img"> \
                                            <div class="row-fluid pm0"> \
                                                <div class="span6 pm0 evenimg"> \
                                                    <div class="row-fluid"> \
                                                        <div class="span12 pm0 evenimg100"><img src="'+gm[i].p_img[0].img_url+'" alt="'+gm[i].p_img[0].product_name+'"></div> \
                                                    </div> \
                                                </div> \
                                                <div class="span6 pm0 evenimg"> \
                                                    <div class="row-fluid pm0"> \
                                                        <div class="span6 pm0 evenimg"> \
                                                            <img src="'+gm[i].p_img[1].img_url+'" alt="'+gm[i].p_img[1].product_name+'"> \
                                                            <img src="'+gm[i].p_img[3].img_url+'" alt="'+gm[i].p_img[3].product_name+'"> \
                                                        </div> \
                                                        <div class="span6 pm0 evenimg"> \
                                                            <img src="'+gm[i].p_img[2].img_url+'" alt="'+gm[i].p_img[2].product_name+'"> \
                                                            <img src="'+gm[i].p_img[4].img_url+'" alt="'+gm[i].p_img[4].product_name+'"> \
                                                        </div> \
                                                    </div> \
                                                </div> \
                                            </div> \
                                        </div> \
                                    </a> \
                                    <div class="clearfix"></div> \
                                    <div class="nama-toko"> \
                                        <div class="center"> \
                                            <a href="'+gm[i].s_uri_ad+'" target="_blank" onmousedown=\''+gm[i].topads_gtm_click+'\'> \
                                                <img class="img-circle" src="'+gm[i].s_img+'" alt="'+gm[i].s_name_enc+'" itemprop="logo"> \
                                            </a> \
                                        </div> \
                                        <div class="row-fluid"> \
                                            <div class="span6"> \
                                                <div class="mt-15 nama-toko-judul fs-12 word-break-w ellipsis" itemprop="name"> \
                                                    <a href="'+gm[i].s_uri_ad+'" target="_blank" onmousedown=\''+gm[i].topads_gtm_click+'\'>'+gm[i].s_name_enc+'</a><br> \
                                                    <span class="gray fs-10">'+gm[i].s_location_enc+'</span> \
                                                </div> \
                                            </div> \
                                            <div class="span6"> \
                                                <div class="mt-15 pull-right"> \
                                                <a class="label label-success stop-fav-gm fs-11 fw-normal" id="gm_s_'+gm[i].s_id+'" key="'+gm[i].ad_key+'" onmousedown=\''+gm[i].topads_gtm_click+'\'><i class="icon-heart-alt mr-5"></i>'+tokopedia.loc("Favorite")+'</a> \
                                                <a href="'+gm[i].s_uri+'" target="_blank" class="label label-warning fs-11 hide" id="gmv_s_'+gm[i].s_id+'"> &raquo;'+tokopedia.loc("Visit Shop")+'</a> \
                                                </div> \
                                            </div> \
                                        </div> \
                                    </div> \
                                </div> \
                            </div> \
                        </div> \
                    ');}
                        <script type="text/javascript"> \ '
topads_gtm_view_shop_list
topads_gtm_shop_js_function+' \
                        </script> \
                    ');}
'<div class="row-fluid">'+
'<div class="span12">'+
'<div id="fav-prod-grid" class="clear-b">'+
'<ProductListFrame/>'+
'</div>'+
'</div>'+
'</div>'+
'<Paging/>';}else{compMap.container=''+
'<div class="well well-small text-center mt-5 p-0 w-977">'+
'<h2 class="mt-20 mb-0">{{tokopedia.loc("SEARCH_NOT_FOUND_1")}}</h2>'+
'<div class="mb-20">{{tokopedia.loc("SEARCH_NOT_FOUND_2")}}</div>'+
'</div>';}
return searchTemplate.buildTemplate(searchTemplate.buildComponents(compMap.container,compMap.components),undefined);};searchTemplate.constructProductList=function(productList){var compMap={components:{}};compMap.container=''+
'<div class="product">'+
'<a href="{{this.uri}}">'+
'<div class="product-hover relative">'+
'<WholeSalePriceFrame/>'+
'<ImageFrame/>'+
'<InfoFrame/>'+
'</div>'+
'</a>'+
'<div class="meta">'+
'<div class="meta-misc">'+
'<div class="row-fluid">'+
'<div class="span8 no-minheight">'+
'<ShopRatingFrame/>'+
'<ShopNameFrame/>'+
'</div>'+
'<div class="span4 no-minheight text-right">'+
'<div class="pull-right badge-right">'+
'<LuckyShopFrame/>'+
'<GoldShopFrame/>'+
'<FavShopFrame/>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</div>'+
'</a>'+
'</div>';compMap.components.ImageFrame=''+
'<div class="product-image">'+
'<img itemprop="image" src="{{this.image_uri}}" alt="{{this.sanitizedName}}">'+
'</div>';compMap.components.InfoFrame=''+
'<div class="meta-product">'+
'<div class="name ellipsis">'+
'<b itemprop="name">{{this.sanitizedName}}</b>'+
'</div>'+
'<div class="row-fluid" itemprop="offers" itemscope itemtype="http://schema.org/Offer">'+
'<div class="span7">'+
'<span itemprop="price" class="price">{{this.price}}</span>'+
'<meta itemprop="priceCurrency" content="IDR" />'+
'</div>'+
'<div class="span5 text-right ellipsis">'+
'<small class="muted info-tooltip" data-hover="tooltip" data-original-title="{{this.shop.location}}"><i class="icon-pin-alt"></i>{{this.shop.location}}</small>'+
'</div>'+
'</div>'+
'</div>';compMap.components.ShopRatingFrame=''+
'<div class="mr-5 rating-hover relative pull-left">'+
'<span class="label label-small label-muted">'+
'<i class="icon-statistic icon-large"></i>'+
'</span>'+
'<div class="hovered reput-backend">'+
'<div class="clear-b text-center">'+
'<div class="fs-10 gray bold lh-1" value="">{{tokopedia.loc("Reputation")}}:</div>'+
'<img src="{{this.shop.reputation_image_uri}}" id="badge-reputation">'+
'<br>'+
'</div>'+
'</div>'+
'</div>';compMap.components.ShopNameFrame=''+
'<div class="span8 no-minheight ellipsis pull-left">'+
'<small>'+
'<a href="{{this.shop.uri}}" class="muted">{{this.shop.name}}</a>'+
'</small>'+
'</div>';compMap.components.FavShopFrame=''+
'<div class="pull-right ico-fav-shop hide ico-fav-shop-{{this.shop.id}}" value="{{this.shop.id}}">'+
'<a class="gray cursor-default" title="{{tokopedia.loc("Favorite Shop")}}"><i class="icon-heart-alt icon-large"></i></a>'+
'</div>';var preRendered=searchTemplate.buildComponents(compMap.container,compMap.components);var listItems=[];for(var i=0;i<productList.length;i++){if(productList[i].wholesale_price){compMap.components.WholeSalePriceFrame=''+
'<span class="grosir-hover">'+
'<div class="grosir-sign">'+
'<i class="icon-info-alt"></i>{{tokopedia.loc("Whole Sale")}}'+
'</div>'+
'<div class="hovered">'+
'<WholeSalePriceListFrame/>'+
'</div>'+
'</span>';compMap.components.WholeSalePriceListFrame=searchTemplate.constructWholeSalePriceList(productList[i].wholesale_price);}else{compMap.components.WholeSalePriceFrame='';}
compMap.components.LuckyShopFrame='<img title="Lucky Merchant" src="'+host_clover+'/badges/merchant/v1?shop_id='+productList[i].shop.id+'&t=web" class="cursor-default inline-block va-middle space-badge"/>';compMap.components.GoldShopFrame=!productList[i].shop.is_gold?'':''+
'<i title="Gold Merchant" class="image-gold-merchant cursor-default inline-block va-middle"></i>';productList[i].name=productList[i].name.replace(/\\/g,"\\\\");productList[i].sanitizedName=searchTemplate.escapeHtml(productList[i].name);var postRendered=searchTemplate.buildComponents(preRendered,compMap.components);listItems.push(searchTemplate.buildTemplate(postRendered,productList[i]));}
return listItems.join('');};searchTemplate.constructWholeSalePriceList=function(wspList){var container=''+
'<li>'+
'<span>{{this.qtyRange}}</span>'+
'<span class="pull-right">{{this.price}}</span>'+
'</li>';var listItems=[];for(var i=0;i<wspList.length-1;i++){wspList[i].qtyRange=wspList[i].count_min+' - '+wspList[i].count_max;listItems.push(searchTemplate.buildTemplate(container,wspList[i]));}
var last=wspList[wspList.length-1];last.qtyRange='&#8805; '+last.count_min;listItems.push(searchTemplate.buildTemplate(container,last));return listItems.join('');};function sortByKey(array,key){return array.sort(function(a,b){var x=a[key];var y=b[key];var sanitizedX=x.replace(/\D/g,'');var sanitizedY=y.replace(/\D/g,'');var xInt=parseInt(sanitizedX);var yInt=parseInt(sanitizedY);return((xInt>yInt)?-1:((xInt<yInt)?1:0));});}
searchTemplate.constructBreadcrumb=function(categoryResult,totalData){if(totalData===0)return'';var qs=parseUri(location.href).queryKey;if(qs.q=='')return'';var getUriSc=function getUriSc(sc){var qs=parseUri(location.href).queryKey;if(sc!=0){qs.sc=sc;}else{delete(qs.sc);}
delete(qs.page);return searchTemplate.generateUrl(location.href,qs);};var data=categoryResult.data;for(var k in data){if(data.hasOwnProperty(k)){data[k].uri=getUriSc(data[k].id);}}
var firstLevelData=[];if(qs.sc!=0&&qs.sc!=undefined){var selectedData=categoryResult.data[String(categoryResult.selected_id)];firstLevelData.push(selectedData);if(selectedData!=undefined){var firstLevelId=selectedData.parent_id;while(firstLevelId!=0){var firstLevelElement=categoryResult.data[String(firstLevelId)];firstLevelData.push(firstLevelElement);firstLevelId=firstLevelElement.parent_id;}}}
var universalData={id:0,name:tokopedia.loc('Category'),total_data:searchTemplate.formatNumber(totalData),children:[],uri:getUriSc(0)};var constructChildren=function(categoryResultData,targetData){targetData.children=[];if(targetData.child_id==null){return targetData;}else{for(var i in targetData.child_id){var dataToInsert=categoryResultData[String(targetData.child_id[i])];if(dataToInsert!=undefined){targetData.children.push(dataToInsert);targetData.children[targetData.children.length-1]=constructChildren(categoryResultData,targetData.children[targetData.children.length-1]);}}
if(targetData.children.constructor===Array){targetData.children=sortByKey(targetData.children,'total_data');}
return targetData;}};var constructUniversalChildren=function(categoryResultData){var children=[];for(var k in categoryResultData){if(categoryResultData.hasOwnProperty(k)){if(categoryResultData[k].parent_id==0){children.push(categoryResultData[k]);children[children.length-1]=constructChildren(categoryResultData,children[children.length-1]);}}}
if(children.constructor===Array){return sortByKey(children,'total_data');}else{return children;}};universalData.children=constructUniversalChildren(data);var constructUniversalCategoryView=function(universalData){var compMap={components:{}};compMap.container=''+
'<li>'+
'<a href="{{this.uri}}"><span>'+
'{{this.name}} ({{this.total_data}})'+
'<i class="icon-circle-arrow-down ml-5"></i>'+
'</span></a>'+
'<ChildrenView/>'+
'</li>';compMap.components.ChildrenView=constructChildrenView(universalData.children);return searchTemplate.buildComponents(searchTemplate.buildTemplate(compMap.container,universalData),compMap.components);};var breadcrumbElements=[];var constructChildrenView=function constructChildrenView(childrenArray){var compMap={components:{}};compMap.container=''+
'<ul style="display:none">'+
'<ChildrenListView/>'+
'</ul>';var childrenView=''+
'<li><a href="{{this.uri}}"><span>'+
'{{this.name}} ({{this.total_data}})'+
'</span></a>';var childrenList=[];for(var i=0;i<childrenArray.length;i++){var childrenElement=searchTemplate.buildTemplate(childrenView,childrenArray[i]);childrenElement+=constructChildrenView(childrenArray[i].children);childrenElement+='</li>';childrenList.push(childrenElement);for(var j=0;j<firstLevelData.length;j++){if(childrenArray[i].id===firstLevelData[j].id){var catDOM=document.createElement('div');catDOM.innerHTML=childrenElement;catDOM=catDOM.firstChild;if(catDOM.getElementsByTagName('ul').length==0){catDOM.innerHTML=catDOM.getElementsByTagName('a')[0].innerHTML;}else{catDOM.getElementsByTagName('a')[0].innerHTML+='<i class="icon-circle-arrow-down ml-5"></i>';}
breadcrumbElements.push(catDOM.outerHTML);breadcrumbElements.push('<li><span class="breadcrumb-divider"><i class="icon-chevron-right-alt muted"></i></span></li>');break;}}}
compMap.components.ChildrenListView=childrenList.join('');return(childrenList.length>0?searchTemplate.buildComponents(compMap.container,compMap.components):'');};var compMap={components:{}};compMap.container=''+
'<ul class="search-cat-box breadcrumb sf-menu ml-20" itemprop="breadcrumb">'+
'<UniversalCategoryView/>'+
'<PreceedingFirstLevelCategoryView/>'+
'</ul>';compMap.components.UniversalCategoryView=constructUniversalCategoryView(universalData);compMap.components.PreceedingFirstLevelCategoryView=breadcrumbElements.reverse().join('');return searchTemplate.buildComponents(compMap.container,compMap.components);};searchTemplate.constructSpellCheck=function(spellCheckData){var container=''+
'<div class="well well-small mb-10 w-977 p-0">'+
'<p class="fs-12 mb-0 p-10">{{tokopedia.loc("Product Search Result")}} "<strong class="fs-14">{{this.query}}</strong>". {{tokopedia.loc("Did you mean")}} <a class="fs-12" href="{{this.uri}}"><strong><u>{{this.suggest}}</u></strong></a> ({{this.total_data}} {{this.pluralText}}) ?</p>'+
'</div>';spellCheckData.query=parseUri(location.href).queryKey.q.replace(/\++/g,' ');spellCheckData.pluralText=spellCheckData.total_data>1?tokopedia.loc('products'):tokopedia.loc('product');spellCheckData.uri=window.domain_url+"/search?q="+spellCheckData.suggest+"&st=product&correction=true";spellCheckData.suggest=spellCheckData.suggest.replace(/\++/g,' ');return searchTemplate.buildTemplate(container,spellCheckData);}
searchTemplate.generateUrl=function(url,qs){var uri=parseUri(url);var decodedQs=decodeURIComponent($.param(qs));return uri.protocol+'://'+uri.host+uri.path+(decodedQs.length?'?'+decodedQs:'');};searchTemplate.constructFavProductPaging=function(totalData,defaultNumPage){if(!totalData){return'';}
var uri=parseUri(location.href);var qs=uri.queryKey;qs.page=(qs.page===undefined||qs.page==='')?1:Number(qs.page)?Number(qs.page):1;var rows=(qs.per_page===undefined||qs.per_page==='')?defaultNumPage:Number(qs.per_page);var start=Number((qs.page-1)*rows);var compMap={components:{}};compMap.container=''+
'<div class="row-fluid clear-b w-590">'+
'<hr class="mt-0 mb-5 clear-b"/>'+
'<div class="span12 ml-0">'+
'<PagingDescription/>'+
'<PagingPagination/>'+
'</div>'+
'<hr class="mt-0 mb-5 clear-b"/>'+
'</div>';compMap.components.PagingDescription=''+
'<div class="span4 pull-left mt-5">'+
'<small>'+
'{{this.locSt}}'+
'&nbsp;'+
'<b>{{this.min}} - {{this.max}}</b>&nbsp;'+
'{{tokopedia.loc("from")}}&nbsp;'+
'<b>{{this.total}}</b>'+
'</small>'+
'</div>';compMap.components.PagingPagination=''+
'<div class="span8">'+
'<div class="pagination pull-right">'+
'<ul>'+
'{{this.pages}}'+
'</ul>'+
'</div>'+
'</div>';var dataMap={};var totalPage=Math.ceil(totalData/rows);var currentPage=qs.page;var pages=[];var pagesHTML=[];var numPagination=(totalPage>7)?7:totalPage;var minPagination;if(currentPage-3<=1){minPagination=1;}else if(currentPage+3>totalPage){minPagination=totalPage-(numPagination-1);}else{minPagination=currentPage-3;}
var generateUrl=function generateUrl(qs){var decodedQs=decodeURIComponent($.param(qs));return uri.protocol+'://'+uri.host+uri.path+(decodedQs.length?'?'+decodedQs:'');};var generatePageObj=function generatePageObj(qs,i,key){qs.page=i;pages.push({key:(key===undefined?qs.page:key),url:generateUrl(qs)});};if(currentPage>1){generatePageObj(qs,currentPage-1,'&laquo;');}
for(var i=0;i<numPagination;i++){generatePageObj(qs,i+minPagination);}
if(currentPage<totalPage){generatePageObj(qs,currentPage+1,'&raquo;');}
for(var i=0;i<pages.length;i++){pagesHTML.push('<li'+(currentPage===pages[i].key?' class="active"':'')+'><a href="'+pages[i].url+'">'+pages[i].key+'</a></li>');}
dataMap.min=searchTemplate.formatNumber(start+1);dataMap.max=searchTemplate.formatNumber((totalData<start+rows)?totalData:start+rows);dataMap.total=searchTemplate.formatNumber(totalData);dataMap.pages=pagesHTML.join('');if(qs.st===undefined||qs.st==='product'){dataMap.locSt=tokopedia.loc('Product List');}else if(qs.st==='catalog'){dataMap.locSt=tokopedia.loc('Catalog List');}else if(qs.st==='shop'){dataMap.locSt=tokopedia.loc('Shop List');}
var renderedHTMLSearch=searchTemplate.buildComponents(compMap.container,compMap.components);return searchTemplate.buildTemplate(renderedHTMLSearch,dataMap);};})(window);/**! hopscotch - v0.2.0
*
* Copyright 2014 LinkedIn Corp. All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
(function(context,namespace){var Hopscotch,HopscotchBubble,HopscotchCalloutManager,HopscotchI18N,customI18N,customRenderer,customEscape,noCache=false,templateToUse='bubble_default',Sizzle=window.Sizzle||null,utils,callbacks,helpers,winLoadHandler,defaultOpts,winHopscotch=context[namespace],undefinedStr='undefined',waitingToStart=false,hasJquery=(typeof window.jQuery!==undefinedStr),hasSessionStorage=false,document=window.document;try{hasSessionStorage=(typeof window.sessionStorage!==undefinedStr);}catch(err){}
defaultOpts={smoothScroll:true,scrollDuration:1000,scrollTopMargin:200,showCloseButton:true,showPrevButton:false,showNextButton:true,bubbleWidth:280,bubblePadding:15,arrowWidth:20,skipIfNoElement:true,cookieName:'hopscotch.tour.state'};if(winHopscotch){return;}
if(!Array.isArray){Array.isArray=function(obj){return Object.prototype.toString.call(obj)==='[object Array]';};}
winLoadHandler=function(){if(waitingToStart){winHopscotch.startTour();}};utils={addClass:function(domEl,classToAdd){var domClasses,classToAddArr,setClass,i,len;if(!domEl.className){domEl.className=classToAdd;}
else{classToAddArr=classToAdd.split(/\s+/);domClasses=' '+domEl.className+' ';for(i=0,len=classToAddArr.length;i<len;++i){if(domClasses.indexOf(' '+classToAddArr[i]+' ')<0){domClasses+=classToAddArr[i]+' ';}}
domEl.className=domClasses.replace(/^\s+|\s+$/g,'');}},removeClass:function(domEl,classToRemove){var domClasses,classToRemoveArr,currClass,i,len;classToRemoveArr=classToRemove.split(/\s+/);domClasses=' '+domEl.className+' ';for(i=0,len=classToRemoveArr.length;i<len;++i){domClasses=domClasses.replace(' '+classToRemoveArr[i]+' ',' ');}
domEl.className=domClasses.replace(/^\s+|\s+$/g,'');},hasClass:function(domEl,classToCheck){var classes;if(!domEl.className){return false;}
classes=' '+domEl.className+' ';return(classes.indexOf(' '+classToCheck+' ')!==-1);},getPixelValue:function(val){var valType=typeof val;if(valType==='number'){return val;}
if(valType==='string'){return parseInt(val,10);}
return 0;},valOrDefault:function(val,valDefault){return typeof val!==undefinedStr?val:valDefault;},invokeCallbackArrayHelper:function(arr){var fn;if(Array.isArray(arr)){fn=helpers[arr[0]];if(typeof fn==='function'){return fn.apply(this,arr.slice(1));}}},invokeCallbackArray:function(arr){var i,len;if(Array.isArray(arr)){if(typeof arr[0]==='string'){return utils.invokeCallbackArrayHelper(arr);}
else{for(i=0,len=arr.length;i<len;++i){utils.invokeCallback(arr[i]);}}}},invokeCallback:function(cb){if(typeof cb==='function'){return cb();}
if(typeof cb==='string'&&helpers[cb]){return helpers[cb]();}
else{return utils.invokeCallbackArray(cb);}},invokeEventCallbacks:function(evtType,stepCb){var cbArr=callbacks[evtType],callback,fn,i,len;if(stepCb){return this.invokeCallback(stepCb);}
for(i=0,len=cbArr.length;i<len;++i){this.invokeCallback(cbArr[i].cb);}},getScrollTop:function(){var scrollTop;if(typeof window.pageYOffset!==undefinedStr){scrollTop=window.pageYOffset;}
else{scrollTop=document.documentElement.scrollTop;}
return scrollTop;},getScrollLeft:function(){var scrollLeft;if(typeof window.pageXOffset!==undefinedStr){scrollLeft=window.pageXOffset;}
else{scrollLeft=document.documentElement.scrollLeft;}
return scrollLeft;},getWindowHeight:function(){return window.innerHeight||document.documentElement.clientHeight;},getWindowWidth:function(){return window.innerWidth||document.documentElement.clientWidth;},addEvtListener:function(el,evtName,fn){return el.addEventListener?el.addEventListener(evtName,fn,false):el.attachEvent('on'+evtName,fn);},removeEvtListener:function(el,evtName,fn){return el.removeEventListener?el.removeEventListener(evtName,fn,false):el.detachEvent('on'+evtName,fn);},documentIsReady:function(){return document.readyState==='complete'||document.readyState==='interactive';},evtPreventDefault:function(evt){if(evt.preventDefault){evt.preventDefault();}
else if(event){event.returnValue=false;}},extend:function(obj1,obj2){var prop;for(prop in obj2){if(obj2.hasOwnProperty(prop)){obj1[prop]=obj2[prop];}}},getStepTargetHelper:function(target){var result=document.getElementById(target);if(result){return result;}
if(document.querySelector){return document.querySelector(target);}
if(hasJquery){result=jQuery(target);return result.length?result[0]:null;}
if(Sizzle){result=new Sizzle(target);return result.length?result[0]:null;}
if(/^#[a-zA-Z][\w-_:.]*$/.test(target)){return document.getElementById(target.substring(1));}
return null;},getStepTarget:function(step){var queriedTarget;if(!step||!step.target){return null;}
if(noCache===true&&typeof step.target==='object'){var tourSetting=winHopscotch.getCurrTour();var steps=tourSetting.steps;var new_id;if(steps[winHopscotch.getCurrStepNum()]){var tg=steps[winHopscotch.getCurrStepNum()].target;if(typeof tg==='object'){if(tg.id){new_id=tg.id;}
else{new_id=$(tg).attr('class');var temp=new_id.split(' ');for(x in temp){if(temp[x].substring(0,3)==='hs-'){new_id=temp[x];break;}}}}
else if(typeof tg==='string'){new_id=tg;}}
if(new_id){$('.'+new_id).removeClass(new_id);step.target=new_id;var $step_target=$('#'+step.target);if(!$step_target.hasClass(new_id)){$step_target.addClass(new_id);}}}
if(typeof step.target==='string'){step.target=utils.getStepTargetHelper(step.target);return step.target;}
else if(Array.isArray(step.target)){var i,len;for(i=0,len=step.target.length;i<len;i++){if(typeof step.target[i]==='string'){queriedTarget=utils.getStepTargetHelper(step.target[i]);if(queriedTarget){step.target=queriedTarget;return queriedTarget;}}}
return null;}
return step.target;},getI18NString:function(key){return customI18N[key]||HopscotchI18N[key];},setState:function(name,value,days){var expires='',date;if(hasSessionStorage){sessionStorage.setItem(name,value);}
else{date=new Date();date.setTime(date.getTime()+(60*60*1000));expires='; expires='+date.toGMTString();if(days){date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires='; expires='+date.toGMTString();}
document.cookie=name+'='+value+expires+'; path=/';}},getState:function(name){var nameEQ=name+'=',ca=document.cookie.split(';'),i,c,state;if(hasSessionStorage){state=sessionStorage.getItem(name);}
else{for(i=0;i<ca.length;i++){c=ca[i];while(c.charAt(0)===' '){c=c.substring(1,c.length);}
if(c.indexOf(nameEQ)===0){state=c.substring(nameEQ.length,c.length);break;}}}
return state;},clearState:function(name){if(hasSessionStorage){sessionStorage.removeItem(name);}
else{this.setState(name,'',-1);}}};utils.addEvtListener(window,'load',winLoadHandler);callbacks={next:[],prev:[],start:[],end:[],show:[],error:[],close:[]};helpers={};HopscotchI18N={stepNums:null,nextBtn:'Next',prevBtn:'Back',doneBtn:'Done',skipBtn:'Skip',closeTooltip:'Close'};customI18N={};HopscotchBubble=function(opt){this.init(opt);};HopscotchBubble.prototype={isShowing:false,currStep:undefined,setPosition:function(step){var bubbleBoundingHeight,bubbleBoundingWidth,boundingRect,top,left,arrowOffset,targetEl=utils.getStepTarget(step),el=this.element,arrowEl=this.arrowEl;bubbleBoundingWidth=el.offsetWidth;bubbleBoundingHeight=el.offsetHeight;utils.removeClass(el,'fade-in-down fade-in-up fade-in-left fade-in-right');if(!step.placement&&step.orientation){step.placement=step.orientation;}
boundingRect=targetEl.getBoundingClientRect();if(step.placement==='top'){top=(boundingRect.top-bubbleBoundingHeight)-this.opt.arrowWidth;left=boundingRect.left;}
else if(step.placement==='bottom'){top=boundingRect.bottom+this.opt.arrowWidth;left=boundingRect.left;}
else if(step.placement==='left'){top=boundingRect.top;left=boundingRect.left-bubbleBoundingWidth-this.opt.arrowWidth;}
else if(step.placement==='right'){top=boundingRect.top;left=boundingRect.right+this.opt.arrowWidth;}
else{throw'Bubble placement failed because step.placement is invalid or undefined!';}
if(step.arrowOffset!=='center'){arrowOffset=utils.getPixelValue(step.arrowOffset);}
else{arrowOffset=step.arrowOffset;}
if(!arrowOffset){arrowEl.style.top='';arrowEl.style.left='';}
else if(step.placement==='top'||step.placement==='bottom'){arrowEl.style.top='';if(arrowOffset==='center'){arrowEl.style.left=Math.floor((bubbleBoundingWidth/2)-arrowEl.offsetWidth/2)+'px';}
else{arrowEl.style.left=arrowOffset+'px';}}
else if(step.placement==='left'||step.placement==='right'){arrowEl.style.left='';if(arrowOffset==='center'){arrowEl.style.top=Math.floor((bubbleBoundingHeight/2)-arrowEl.offsetHeight/2)+'px';}
else{arrowEl.style.top=arrowOffset+'px';}}
if(step.xOffset==='center'){left=(boundingRect.left+targetEl.offsetWidth/2)-(bubbleBoundingWidth/2);}
else{left+=utils.getPixelValue(step.xOffset);}
if(step.yOffset==='center'){top=(boundingRect.top+targetEl.offsetHeight/2)-(bubbleBoundingHeight/2);}
else{top+=utils.getPixelValue(step.yOffset);}
if(!step.fixedElement){top+=utils.getScrollTop();left+=utils.getScrollLeft();}
el.style.position=(step.fixedElement?'fixed':'absolute');el.style.top=top+'px';el.style.left=left+'px';},render:function(step,idx,callback){var el=this.element,tourSpecificRenderer,customTourData,unsafe,currTour,totalSteps,nextBtnText,isLast,opts;if(step){this.currStep=step;}
else if(this.currStep){step=this.currStep;}
if(this.opt.isTourBubble){currTour=winHopscotch.getCurrTour();if(currTour){customTourData=currTour.customData;tourSpecificRenderer=currTour.customRenderer;unsafe=currTour.unsafe;if(Array.isArray(currTour.steps)){totalSteps=currTour.steps.length;isLast=(idx===totalSteps-1);}}}else{customTourData=step.customData;tourSpecificRenderer=step.customRenderer;unsafe=step.unsafe;}
if(isLast){nextBtnText=utils.getI18NString('doneBtn');}else if(step.showSkip){nextBtnText=utils.getI18NString('skipBtn');}else{nextBtnText=utils.getI18NString('nextBtn');}
if(!step.placement&&step.orientation){step.placement=step.orientation;}
this.placement=step.placement;opts={i18n:{prevBtn:utils.getI18NString('prevBtn'),nextBtn:nextBtnText,closeTooltip:utils.getI18NString('closeTooltip'),stepNum:this._getStepI18nNum(idx),},buttons:{showPrev:(utils.valOrDefault(step.showPrevButton,this.opt.showPrevButton)&&(idx>0)),showNext:utils.valOrDefault(step.showNextButton,this.opt.showNextButton),showCTA:utils.valOrDefault((step.showCTAButton&&step.ctaLabel),false),ctaLabel:step.ctaLabel,showClose:utils.valOrDefault(this.opt.showCloseButton,true)},step:{num:idx,isLast:utils.valOrDefault(isLast,false),title:(step.title||''),content:(step.content||''),placement:step.placement,padding:utils.valOrDefault(step.padding,this.opt.bubblePadding),width:utils.getPixelValue(step.width)||this.opt.bubbleWidth,customData:(step.customData||{})},tour:{isTour:this.opt.isTourBubble,numSteps:totalSteps,unsafe:utils.valOrDefault(unsafe,false),customData:(customTourData||{})}};if(typeof tourSpecificRenderer==='function'){el.innerHTML=tourSpecificRenderer(opts);}
else if(typeof tourSpecificRenderer==='string'){if(!hopscotch.templates||(typeof hopscotch.templates[tourSpecificRenderer]!=='function')){throw'Bubble rendering failed - template "'+tourSpecificRenderer+'" is not a function.';}
el.innerHTML=hopscotch.templates[tourSpecificRenderer](opts);}
else if(customRenderer){el.innerHTML=customRenderer(opts);}
else{if(!hopscotch.templates||(typeof hopscotch.templates[templateToUse]!=='function')){throw'Bubble rendering failed - template "'+templateToUse+'" is not a function.';}
el.innerHTML=hopscotch.templates[templateToUse](opts);}
children=el.children;numChildren=children.length;for(i=0;i<numChildren;i++){node=children[i];if(utils.hasClass(node,'hopscotch-arrow')){this.arrowEl=node;}}
el.style.zIndex=step.zindex||'';this._setArrow(step.placement);this.hide(false);this.setPosition(step);if(callback){callback(!step.fixedElement);}
return this;},_getStepI18nNum:function(idx){var stepNumI18N=utils.getI18NString('stepNums');if(stepNumI18N&&idx<stepNumI18N.length){idx=stepNumI18N[idx];}
else{idx=idx+1;}
return idx;},_setArrow:function(orientation){utils.removeClass(this.arrowEl,'down up right left');if(orientation==='top'){utils.addClass(this.arrowEl,'down');}
else if(orientation==='bottom'){utils.addClass(this.arrowEl,'up');}
else if(orientation==='left'){utils.addClass(this.arrowEl,'right');}
else if(orientation==='right'){utils.addClass(this.arrowEl,'left');}},_getArrowDirection:function(){if(this.placement==='top'){return'down';}
if(this.placement==='bottom'){return'up';}
if(this.placement==='left'){return'right';}
if(this.placement==='right'){return'left';}},show:function(){var self=this,fadeClass='fade-in-'+this._getArrowDirection(),fadeDur=1000;utils.removeClass(this.element,'hide');utils.addClass(this.element,fadeClass);setTimeout(function(){utils.removeClass(self.element,'invisible');},50);setTimeout(function(){utils.removeClass(self.element,fadeClass);},fadeDur);this.isShowing=true;return this;},hide:function(remove){var el=this.element;remove=utils.valOrDefault(remove,true);el.style.top='';el.style.left='';if(remove){utils.addClass(el,'hide');utils.removeClass(el,'invisible');}
else{utils.removeClass(el,'hide');utils.addClass(el,'invisible');}
utils.removeClass(el,'animate fade-in-up fade-in-down fade-in-right fade-in-left');this.isShowing=false;return this;},destroy:function(){var el=this.element;if(el){el.parentNode.removeChild(el);}
utils.removeEvtListener(el,'click',this.clickCb);},_handleBubbleClick:function(evt){var action;function findMatchRecur(el){if(el===evt.currentTarget){return null;}
if(utils.hasClass(el,'hopscotch-cta')){return'cta';}
if(utils.hasClass(el,'hopscotch-next')){return'next';}
if(utils.hasClass(el,'hopscotch-prev')){return'prev';}
if(utils.hasClass(el,'hopscotch-close')){return'close';}
return findMatchRecur(el.parentElement);}
action=findMatchRecur(evt.target);if(action==='cta'){if(!this.opt.isTourBubble){winHopscotch.getCalloutManager().removeCallout(this.currStep.id);}
if(this.currStep.onCTA){utils.invokeCallback(this.currStep.onCTA);}}
else if(action==='next'){winHopscotch.nextStep(true);}
else if(action==='prev'){winHopscotch.prevStep(true);}
else if(action==='close'){if(this.opt.isTourBubble){var currStepNum=winHopscotch.getCurrStepNum(),currTour=winHopscotch.getCurrTour(),doEndCallback=(currStepNum===currTour.steps.length-1);utils.invokeEventCallbacks('close');winHopscotch.endTour(true,doEndCallback);}else{if(this.opt.onClose){utils.invokeCallback(this.opt.onClose);}
if(this.opt.id&&!this.opt.isTourBubble){winHopscotch.getCalloutManager().removeCallout(this.opt.id);}
else{this.destroy();}}
utils.evtPreventDefault(evt);}},init:function(initOpt){var el=document.createElement('div'),self=this,resizeCooldown=false,onWinResize,appendToBody,children,numChildren,node,i,opt;this.element=el;opt={showPrevButton:defaultOpts.showPrevButton,showNextButton:defaultOpts.showNextButton,bubbleWidth:defaultOpts.bubbleWidth,bubblePadding:defaultOpts.bubblePadding,arrowWidth:defaultOpts.arrowWidth,showNumber:true,isTourBubble:true};initOpt=(typeof initOpt===undefinedStr?{}:initOpt);utils.extend(opt,initOpt);this.opt=opt;if(opt.noCache===true){noCache=true;}
el.className='hopscotch-bubble animated';if(!opt.isTourBubble){utils.addClass(el,'hopscotch-callout no-number');}
onWinResize=function(){if(resizeCooldown||!self.isShowing){return;}
resizeCooldown=true;setTimeout(function(){self.setPosition(self.currStep);resizeCooldown=false;},100);};utils.addEvtListener(window,'resize',onWinResize);this.clickCb=function(evt){self._handleBubbleClick(evt);};utils.addEvtListener(el,'click',this.clickCb);this.hide();if(utils.documentIsReady()){document.body.appendChild(el);}
else{if(document.addEventListener){appendToBody=function(){document.removeEventListener('DOMContentLoaded',appendToBody);window.removeEventListener('load',appendToBody);document.body.appendChild(el);};document.addEventListener('DOMContentLoaded',appendToBody,false);}
else{appendToBody=function(){if(document.readyState==='complete'){document.detachEvent('onreadystatechange',appendToBody);window.detachEvent('onload',appendToBody);document.body.appendChild(el);}};document.attachEvent('onreadystatechange',appendToBody);}
utils.addEvtListener(window,'load',appendToBody);}}};HopscotchCalloutManager=function(){var callouts={};this.createCallout=function(opt){var callout;if(opt.id){if(callouts[opt.id]){throw'Callout by that id already exists. Please choose a unique id.';}
opt.showNextButton=opt.showPrevButton=false;opt.isTourBubble=false;callout=new HopscotchBubble(opt);callouts[opt.id]=callout;if(opt.target){callout.render(opt,null,function(){callout.show();});}}
else{throw'Must specify a callout id.';}
return callout;};this.getCallout=function(id){return callouts[id];};this.removeAllCallouts=function(){var calloutId,callout;for(calloutId in callouts){if(callouts.hasOwnProperty(calloutId)){this.removeCallout(calloutId);}}};this.removeCallout=function(id){var callout=callouts[id];callouts[id]=null;if(!callout){return;}
callout.destroy();};};Hopscotch=function(initOptions){var self=this,bubble,calloutMgr,opt,currTour,currStepNum,cookieTourId,cookieTourStep,_configure,getBubble=function(setOptions){if(!bubble){bubble=new HopscotchBubble(opt);}
if(setOptions){utils.extend(bubble.opt,{bubblePadding:getOption('bubblePadding'),bubbleWidth:getOption('bubbleWidth'),showNextButton:getOption('showNextButton'),showPrevButton:getOption('showPrevButton'),showCloseButton:getOption('showCloseButton'),arrowWidth:getOption('arrowWidth')});}
return bubble;},getOption=function(name){if(typeof opt==='undefined'){return defaultOpts[name];}
return utils.valOrDefault(opt[name],defaultOpts[name]);},getCurrStep=function(){var step;if(currStepNum<0||currStepNum>=currTour.steps.length){step=null;}
else{step=currTour.steps[currStepNum];}
return step;},targetClickNextFn=function(){self.nextStep();},adjustWindowScroll=function(cb){var bubble=getBubble(),bubbleEl=bubble.element,bubbleTop=utils.getPixelValue(bubbleEl.style.top),bubbleBottom=bubbleTop+utils.getPixelValue(bubbleEl.offsetHeight),targetEl=utils.getStepTarget(getCurrStep()),targetBounds=targetEl.getBoundingClientRect(),targetElTop=targetBounds.top+utils.getScrollTop(),targetElBottom=targetBounds.bottom+utils.getScrollTop(),targetTop=(bubbleTop<targetElTop)?bubbleTop:targetElTop,targetBottom=(bubbleBottom>targetElBottom)?bubbleBottom:targetElBottom,windowTop=utils.getScrollTop(),windowBottom=windowTop+utils.getWindowHeight(),scrollToVal=targetTop-getOption('scrollTopMargin'),scrollEl,yuiAnim,yuiEase,direction,scrollIncr,scrollTimeout,scrollTimeoutFn;if(targetTop>=windowTop&&(targetTop<=windowTop+getOption('scrollTopMargin')||targetBottom<=windowBottom)){if(cb){cb();}}
else if(!getOption('smoothScroll')){window.scrollTo(0,scrollToVal);if(cb){cb();}}
else{if(typeof YAHOO!==undefinedStr&&typeof YAHOO.env!==undefinedStr&&typeof YAHOO.env.ua!==undefinedStr&&typeof YAHOO.util!==undefinedStr&&typeof YAHOO.util.Scroll!==undefinedStr){scrollEl=YAHOO.env.ua.webkit?document.body:document.documentElement;yuiEase=YAHOO.util.Easing?YAHOO.util.Easing.easeOut:undefined;yuiAnim=new YAHOO.util.Scroll(scrollEl,{scroll:{to:[0,scrollToVal]}},getOption('scrollDuration')/1000,yuiEase);yuiAnim.onComplete.subscribe(cb);yuiAnim.animate();}
else if(hasJquery){jQuery('body, html').animate({scrollTop:scrollToVal},getOption('scrollDuration'),cb);}
else{if(scrollToVal<0){scrollToVal=0;}
direction=(windowTop>targetTop)?-1:1;scrollIncr=Math.abs(windowTop-scrollToVal)/(getOption('scrollDuration')/10);scrollTimeoutFn=function(){var scrollTop=utils.getScrollTop(),scrollTarget=scrollTop+(direction*scrollIncr);if((direction>0&&scrollTarget>=scrollToVal)||(direction<0&&scrollTarget<=scrollToVal)){scrollTarget=scrollToVal;if(cb){cb();}
window.scrollTo(0,scrollTarget);return;}
window.scrollTo(0,scrollTarget);if(utils.getScrollTop()===scrollTop){if(cb){cb();}
return;}
setTimeout(scrollTimeoutFn,10);};scrollTimeoutFn();}}},goToStepWithTarget=function(direction,cb){var target,step,goToStepFn;if(currStepNum+direction>=0&&currStepNum+direction<currTour.steps.length){currStepNum+=direction;step=getCurrStep();goToStepFn=function(){target=utils.getStepTarget(step);if(target){cb(currStepNum);}
else{utils.invokeEventCallbacks('error');goToStepWithTarget(direction,cb);}};if(step.delay){setTimeout(goToStepFn,step.delay);}
else{goToStepFn();}}
else{cb(-1);}},changeStep=function(doCallbacks,direction){var bubble=getBubble(),self=this,step,origStep,wasMultiPage,changeStepCb;bubble.hide();doCallbacks=utils.valOrDefault(doCallbacks,true);step=getCurrStep();origStep=step;if(direction>0){wasMultiPage=origStep.multipage;}
else{wasMultiPage=(currStepNum>0&&currTour.steps[currStepNum-1].multipage);}
changeStepCb=function(stepNum){var doShowFollowingStep;if(stepNum===-1){return this.endTour(true);}
if(doCallbacks){if(direction>0){doShowFollowingStep=utils.invokeEventCallbacks('next',origStep.onNext);}
else{doShowFollowingStep=utils.invokeEventCallbacks('prev',origStep.onPrev);}}
if(stepNum!==currStepNum){return;}
if(wasMultiPage){utils.setState(getOption('cookieName'),currTour.id+':'+currStepNum,1);return;}
doShowFollowingStep=utils.valOrDefault(doShowFollowingStep,true);if(doShowFollowingStep){this.showStep(stepNum);}
else{this.endTour(false);}};if(!wasMultiPage&&getOption('skipIfNoElement')){goToStepWithTarget(direction,function(stepNum){changeStepCb.call(self,stepNum);});}
else if(currStepNum+direction>=0&&currStepNum+direction<currTour.steps.length){currStepNum+=direction;step=getCurrStep();if(!utils.getStepTarget(step)&&!wasMultiPage){utils.invokeEventCallbacks('error');return this.endTour(true,false);}
changeStepCb.call(this,currStepNum);}
return this;},loadTour=function(tour){var tmpOpt={},prop,tourState,tourPair;for(prop in tour){if(tour.hasOwnProperty(prop)&&prop!=='id'&&prop!=='steps'){tmpOpt[prop]=tour[prop];}}
_configure.call(this,tmpOpt,true);tourState=utils.getState(getOption('cookieName'));if(tourState){tourPair=tourState.split(':');cookieTourId=tourPair[0];cookieTourStep=tourPair[1];cookieTourStep=parseInt(cookieTourStep,10);}
return this;},findStartingStep=function(startStepNum,cb){var step,target,stepNum;currStepNum=startStepNum||0;step=getCurrStep();target=utils.getStepTarget(step);if(target){cb(currStepNum);return;}
if(!target){utils.invokeEventCallbacks('error');if(getOption('skipIfNoElement')){goToStepWithTarget(1,cb);return;}
else{currStepNum=-1;cb(currStepNum);}}},showStepHelper=function(stepNum){var step=currTour.steps[stepNum],tourSteps=currTour.steps,numTourSteps=tourSteps.length,cookieVal=currTour.id+':'+stepNum,bubble=getBubble(),targetEl=utils.getStepTarget(step),isLast,showBubble;showBubble=function(){bubble.show();utils.invokeEventCallbacks('show',step.onShow);};currStepNum=stepNum;bubble.hide(false);isLast=(stepNum===numTourSteps-1);bubble.render(step,stepNum,function(adjustScroll){if(adjustScroll){adjustWindowScroll(showBubble);}
else{showBubble();}
if(step.nextOnTargetClick){utils.addEvtListener(targetEl,'click',targetClickNextFn);}});utils.setState(getOption('cookieName'),cookieVal,1);},init=function(initOptions){if(initOptions){this.configure(initOptions);}};this.getCalloutManager=function(){if(typeof calloutMgr===undefinedStr){calloutMgr=new HopscotchCalloutManager();}
return calloutMgr;};this.startTour=function(tour,stepNum){var bubble,currStepNum,self=this;if(!currTour){currTour=tour;loadTour.call(this,tour);}
if(typeof stepNum!==undefinedStr){if(stepNum>=currTour.steps.length){throw'Specified step number out of bounds.';}
currStepNum=stepNum;}
if(!utils.documentIsReady()){waitingToStart=true;return this;}
if(typeof currStepNum==="undefined"&&currTour.id===cookieTourId&&typeof cookieTourStep!==undefinedStr){currStepNum=cookieTourStep;}
else if(!currStepNum){currStepNum=0;}
findStartingStep(currStepNum,function(stepNum){var target=(stepNum!==-1)&&utils.getStepTarget(currTour.steps[stepNum]);if(!target){self.endTour(false,false);return;}
utils.invokeEventCallbacks('start');bubble=getBubble();bubble.hide(false);self.isActive=true;if(!utils.getStepTarget(getCurrStep())){utils.invokeEventCallbacks('error');if(getOption('skipIfNoElement')){self.nextStep(false);}}
else{self.showStep(stepNum);}});return this;};this.showStep=function(stepNum){var step=currTour.steps[stepNum];if(step.delay){setTimeout(function(){showStepHelper(stepNum);},step.delay);}
else{showStepHelper(stepNum);}
return this;};this.prevStep=function(doCallbacks){changeStep.call(this,doCallbacks,-1);return this;};this.nextStep=function(doCallbacks){var step=getCurrStep(),targetEl=utils.getStepTarget(step);if(step.nextOnTargetClick){utils.removeEvtListener(targetEl,'click',targetClickNextFn);}
changeStep.call(this,doCallbacks,1);return this;};this.endTour=function(clearState,doCallbacks){var bubble=getBubble();clearState=utils.valOrDefault(clearState,true);doCallbacks=utils.valOrDefault(doCallbacks,true);currStepNum=0;cookieTourStep=undefined;bubble.hide();if(clearState){utils.clearState(getOption('cookieName'));}
if(this.isActive){this.isActive=false;if(currTour&&doCallbacks){utils.invokeEventCallbacks('end');}}
this.removeCallbacks(null,true);this.resetDefaultOptions();currTour=null;return this;};this.getCurrTour=function(){return currTour;};this.getCurrTarget=function(){return utils.getStepTarget(getCurrStep());};this.getCurrStepNum=function(){return currStepNum;};this.refreshBubblePosition=function(){bubble.setPosition(getCurrStep());return this;};this.listen=function(evtType,cb,isTourCb){if(evtType){callbacks[evtType].push({cb:cb,fromTour:isTourCb});}
return this;};this.unlisten=function(evtType,cb){var evtCallbacks=callbacks[evtType],i,len;for(i=0,len=evtCallbacks.length;i<len;++i){if(evtCallbacks[i]===cb){evtCallbacks.splice(i,1);}}
return this;};this.removeCallbacks=function(evtName,tourOnly){var cbArr,i,len,evt;for(evt in callbacks){if(!evtName||evtName===evt){if(tourOnly){cbArr=callbacks[evt];for(i=0,len=cbArr.length;i<len;++i){if(cbArr[i].fromTour){cbArr.splice(i--,1);--len;}}}
else{callbacks[evt]=[];}}}
return this;};this.registerHelper=function(id,fn){if(typeof id==='string'&&typeof fn==='function'){helpers[id]=fn;}};this.unregisterHelper=function(id){helpers[id]=null;};this.invokeHelper=function(id){var args=[],i,len;for(i=1,len=arguments.length;i<len;++i){args.push(arguments[i]);}
if(helpers[id]){helpers[id].call(null,args);}};this.setCookieName=function(name){opt.cookieName=name;return this;};this.resetDefaultOptions=function(){opt={};return this;};this.resetDefaultI18N=function(){customI18N={};return this;};this.getState=function(){return utils.getState(getOption('cookieName'));};_configure=function(options,isTourOptions){var bubble,events=['next','prev','start','end','show','error','close'],eventPropName,callbackProp,i,len;if(!opt){this.resetDefaultOptions();}
utils.extend(opt,options);if(options){utils.extend(customI18N,options.i18n);}
for(i=0,len=events.length;i<len;++i){eventPropName='on'+events[i].charAt(0).toUpperCase()+events[i].substring(1);if(options[eventPropName]){this.listen(events[i],options[eventPropName],isTourOptions);}}
bubble=getBubble(true);return this;};this.configure=function(options){return _configure.call(this,options,false);};this.setRenderer=function(render){var typeOfRender=typeof render;if(typeOfRender==='string'){templateToUse=render;customRenderer=undefined;}
else if(typeOfRender==='function'){customRenderer=render;}
return this;};this.setEscaper=function(esc){if(typeof esc==='function'){customEscape=esc;}
return this;};init.call(this,initOptions);};winHopscotch=new Hopscotch();context[namespace]=winHopscotch;(function(){var _={};_.escape=function(str){if(customEscape){return customEscape(str);}
if(str==null)return'';return(''+str).replace(new RegExp('[&<>"\']','g'),function(match){if(match=='&'){return'&amp;'}
if(match=='<'){return'&lt;'}
if(match=='>'){return'&gt;'}
if(match=='"'){return'&quot;'}
if(match=="'"){return'&#x27;'}});}
this["hopscotch"]=this["hopscotch"]||{};this["hopscotch"]["templates"]=this["hopscotch"]["templates"]||{};this["hopscotch"]["templates"]["bubble_default"]=function(obj){obj||(obj={});var __t,__p='',__e=_.escape,__j=Array.prototype.join;function print(){__p+=__j.call(arguments,'')}
with(obj){function optEscape(str,unsafe){if(unsafe){return _.escape(str);}
return str;};__p+='\n<div class="hopscotch-bubble-container" style="width: '+
((__t=(step.width))==null?'':__t)+
'px; padding: '+
((__t=(step.padding))==null?'':__t)+
'px;">\n  ';if(tour.isTour){;__p+='<span class="hopscotch-bubble-number">'+
((__t=(i18n.stepNum))==null?'':__t)+
'</span>';};__p+='\n  <div class="hopscotch-bubble-content">\n    ';if(step.title!==''){;__p+='<h3 class="hopscotch-title">'+
((__t=(optEscape(step.title,tour.unsafe)))==null?'':__t)+
'</h3>';};__p+='\n    ';if(step.content!==''){;__p+='<div class="hopscotch-content">'+
((__t=(optEscape(step.content,tour.unsafe)))==null?'':__t)+
'</div>';};__p+='\n  </div>\n  <div class="hopscotch-actions">\n    ';if(buttons.showPrev){;__p+='<button class="hopscotch-nav-button prev hopscotch-prev">'+
((__t=(i18n.prevBtn))==null?'':__t)+
'</button>';};__p+='\n    ';if(buttons.showCTA){;__p+='<button class="hopscotch-nav-button next hopscotch-cta">'+
((__t=(buttons.ctaLabel))==null?'':__t)+
'</button>';};__p+='\n    ';if(buttons.showNext){;__p+='<button class="hopscotch-nav-button next hopscotch-next">'+
((__t=(i18n.nextBtn))==null?'':__t)+
'</button>';};__p+='\n  </div>\n  ';if(buttons.showClose){;__p+='<a title="'+
((__t=(i18n.closeTooltip))==null?'':__t)+
'" href="#" class="hopscotch-bubble-close hopscotch-close">'+
((__t=(i18n.closeTooltip))==null?'':__t)+
'</a>';};__p+='\n</div>\n<div class="hopscotch-bubble-arrow-container hopscotch-arrow">\n  <div class="hopscotch-bubble-arrow-border"></div>\n  <div class="hopscotch-bubble-arrow"></div>\n</div>';}
return __p};}());}(window,'hopscotch'));var tour={id:'hello-tokopedia-buyer-home',i18n:{nextBtn:$('.hopscotch-text').find('.btn-next').html(),prevBtn:$('.hopscotch-text').find('.btn-prev').html(),doneBtn:$('.hopscotch-text').find('.btn-done').html(),skipBtn:$('.hopscotch-text').find('.btn-skip').html(),closeTooltip:$('.hopscotch-text').find('.btn-close').html()},steps:[{target:'b-nav',title:$('.hopscotch-text').find('.title-1').html(),content:$('.hopscotch-text').find('.text-1').html(),placement:'left',xOffset:120,yOffset:5,width:450,fixedElement:true},{target:'side-profile',title:$('.hopscotch-text').find('.title-2').html(),content:$('.hopscotch-text').find('.text-2').html(),placement:'right',arrowOffset:30,xOffset:-10,width:300,zindex:1020},{target:'side-inbox',title:$('.hopscotch-text').find('.title-3').html(),content:$('.hopscotch-text').find('.text-3').html(),placement:'right',arrowOffset:30,xOffset:-10,yOffset:150,width:300,zindex:1020},{target:'b-prod-fav',content:$('.hopscotch-text').find('.text-4').html(),placement:'right',yOffset:-20,xOffset:-20,zindex:1020},{target:'b-shop-fav',content:$('.hopscotch-text').find('.text-5').html(),placement:'right',yOffset:-20,xOffset:-20,zindex:1020},{target:'b-prod-last',content:$('.hopscotch-text').find('.text-6').html(),placement:'right',yOffset:-20,xOffset:-20,width:250,zindex:1020}],onEnd:function(){if(tokopedia.processAjax==0){var $data=new Object;$data.guide_type='home';$.ajax({url:'/ajax/quick-guide-taken.pl?type='+$data.guide_type,global:false,type:"POST",data:($data),dataType:"json",success:function(result){if(result.message_error){var message_error=tokopedia.render_message('error',result.message_error);tokopedia.alert('',message_error);}},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){tokopedia.processAjax++;},complete:function(){tokopedia.processAjax=0;}});}},onClose:function(){if(tokopedia.processAjax==0){var $data=new Object;$data.guide_type='home';$.ajax({url:'/ajax/quick-guide-taken.pl?inc=1&type='+$data.guide_type,global:false,type:"POST",data:($data),dataType:"json",success:function(result){if(result.message_error){var message_error=tokopedia.render_message('error',result.message_error);tokopedia.alert('',message_error);}},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){tokopedia.processAjax++;},complete:function(){tokopedia.processAjax=0;}});}},showPrevButton:true,scrollTopMargin:100},init=function(){var startBtnId='startTourBtn',calloutId='startTourCallout',state=hopscotch.getState();if(state&&state.indexOf('hello-hopscotch:')===0){hopscotch.startTour(tour);}
else{setTimeout(function(){hopscotch.startTour(tour);});}};init();var tour_steps=[{title:$('.hopscotch-text').find('.title-gmstat-1').html(),content:$('.hopscotch-text').find('.text-gmstat-1').html(),target:"new-feature",placement:"right",yOffset:-20}];var tour={id:'hello-tokopedia-gmstat',steps:tour_steps,onEnd:function(){if(tokopedia.processAjax==0){var $data=new Object;$data.guide_type='shop_stat_home';$.ajax({url:'/ajax/quick-guide-taken.pl?type='+$data.guide_type,global:false,type:"POST",data:($data),dataType:"json",success:function(result){if(result.message_error){var message_error=tokopedia.render_message('error',result.message_error);tokopedia.alert('',message_error);}},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){tokopedia.processAjax++;},complete:function(){tokopedia.processAjax=0;}});}},onClose:function(){if(tokopedia.processAjax==0){var $data=new Object;$data.guide_type='shop_stat_home';$.ajax({url:'/ajax/quick-guide-taken.pl?inc=1&type='+$data.guide_type,global:false,type:"POST",data:($data),dataType:"json",success:function(result){if(result.message_error){var message_error=tokopedia.render_message('error',result.message_error);tokopedia.alert('',message_error);}},error:function(XMLHttpRequest,textStatus,errorThrown){},beforeSend:function(){tokopedia.processAjax++;},complete:function(){tokopedia.processAjax=0;}});}},showPrevButton:true,scrollTopMargin:100};init=function(){var startBtnId='startTourBtn',calloutId='startTourCallout',state=hopscotch.getState();if(state&&state.indexOf('hello-tokopedia:')===0){hopscotch.startTour(tour);}
else{setTimeout(function(){hopscotch.startTour(tour);});}};init();function process_admin_sidebar(jq_obj){var params=new Object();params.source_obj=jq_obj;params.destination_obj=$('.inbox-unread-container');if(params.destination_obj.length&&params.source_obj){params.source_selector='.count-unread-inbox';params.destination_selector='.msg-unread-counter';_process_selector(params);params.source_selector='.count-unread-talk';params.destination_selector='.talk-unread-counter';_process_selector(params);params.source_selector='.count-unread-review';params.destination_selector='.review-unread-counter';_process_selector(params);params.source_selector='.count-unread-reputation';params.destination_selector='.reputation-unread-counter';_process_selector(params);params.source_selector='.count-unread-wishlist';params.destination_selector='.wishlist-unread-counter';_process_selector(params);params.source_selector='.count-unread-ticket';params.destination_selector='.ticket-unread-counter';_process_selector(params);params.source_selector='.count-sales-new-order';params.destination_selector='.sales-new-order-counter';_process_selector(params);params.source_selector='.count-sales-shipping-confirm';params.destination_selector='.sales-shipping-confirm-counter';_process_selector(params);params.source_selector='.count-sales-shipping-status';params.destination_selector='.sales-shipping-status-counter';_process_selector(params);params.source_selector='.count-purchase-reorder';params.destination_selector='.purchase-reorder-counter';_process_selector(params);params.source_selector='.count-purchase-payment-conf';params.destination_selector='.purchase-payment-conf-counter';_process_selector(params);params.source_selector='.count-purchase-order-status';params.destination_selector='.purchase-order-status-counter';_process_selector(params);params.source_selector='.count-purchase-delivery-confirm';params.destination_selector='.purchase-delivery-confirm-counter';_process_selector(params);params.source_selector='.count-resolution-buyer';params.destination_selector='.res-buyer-unread-counter';_process_selector(params);params.source_selector='.count-resolution-seller';params.destination_selector='.res-seller-unread-counter';_process_selector(params);}}
function _process_selector(args){if(!args.source_obj&&!args.destination_obj){return false;}
var selector_element=args.source_obj.find(args.source_selector);var destination_element=args.destination_obj.find(args.destination_selector);if(selector_element.length){if(destination_element.length){destination_element.show();var selector_element_html=selector_element.wrap('<p/>').parent().html();destination_element.html(selector_element_html);selector_element.unwrap();return true;}}
else{if(destination_element.length){destination_element.hide();return true;}}
return false;}