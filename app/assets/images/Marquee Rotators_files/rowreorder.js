/*
   Copyright 2015-2016 SpryMedia Ltd.

 This source file is free software, available under the following license:
   MIT license - http://datatables.net/license/mit

 This source file is distributed in the hope that it will be useful, but
 WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.

 For details please refer to: http://www.datatables.net
 RowReorder 1.2.0
 2015-2016 SpryMedia Ltd - datatables.net/license
*/
(function(d){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(f){return d(f,window,document)}):"object"===typeof exports?module.exports=function(f,h){f||(f=window);h&&h.fn.dataTable||(h=require("datatables.net")(f,h).$);return d(h,f,f.document)}:d(jQuery,window,document)})(function(d,f,h,r){var n=d.fn.dataTable,m=function(b,c){if(!n.versionCheck||!n.versionCheck("1.10.8"))throw"DataTables RowReorder requires DataTables 1.10.8 or newer";this.c=d.extend(!0,{},n.defaults.rowReorder,
m.defaults,c);this.s={bodyTop:null,dt:new n.Api(b),getDataFn:n.ext.oApi._fnGetObjectDataFn(this.c.dataSrc),middles:null,scroll:{},scrollInterval:null,setDataFn:n.ext.oApi._fnSetObjectDataFn(this.c.dataSrc),start:{top:0,left:0,offsetTop:0,offsetLeft:0,nodes:[]},windowHeight:0,bufferOffset:0,fullHeightContainer:null,fullHeight:0};this.dom={clone:null,dtScroll:d("div.dataTables_scrollBody",this.s.dt.table().container())};var a=this.s.dt.settings()[0],e=a.rowreorder;if(e)return e;a.rowreorder=this;this._constructor()};
d.extend(m.prototype,{_constructor:function(){var b=this,c=this.s.dt,a=d(c.table().node());"static"===a.css("position")&&a.css("position","relative");d(c.table().container()).on("mousedown.rowReorder touchstart.rowReorder",this.c.selector,function(a){if(b.c.enabled){var e=d(this).closest("tr");if(c.row(e).any())return b._mouseDown(a,e),!1}});c.on("destroy.rowReorder",function(){d(c.table().container()).off(".rowReorder");c.off(".rowReorder")})},_cachePositions:function(){var b=this.s.dt,c=d(b.table().node()).find("thead").outerHeight(),
a=d.unique(b.rows({page:"current"}).nodes().toArray()),e=d.map(a,function(a,b){return d(a).position().top-c}),a=d.map(e,function(a,c){return e.length<c-1?(a+e[c+1])/2:(a+a+d(b.row(":last-child").node()).outerHeight())/2});this.s.bufferOffset=0<a.length?a[0]-.01:0;this.s.middles=a;this.s.bodyTop=d(b.table().body()).offset().top;this.s.windowHeight=d(f).height()},_clone:function(b){var c=d(this.s.dt.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(b.clone(!1)),
a=b.outerWidth(),e=b.outerHeight(),g=b.children().map(function(){return d(this).width()});c.width(a).height(e).find("tr").children().each(function(a){this.style.width=g[a]+"px"});c.appendTo("body");this.dom.clone=c},_clonePosition:function(b){var c=this.s.start,a=this._eventToPage(b,"Y")-c.top;b=this._eventToPage(b,"X")-c.left;var e=this.c.snapX;this.dom.clone.css({top:a+c.offsetTop,left:!0===e?c.offsetLeft:"number"===typeof e?c.offsetLeft+e:b+c.offsetLeft})},_emitEvent:function(b,c){this.s.dt.iterator("table",
function(a,e){d(a.nTable).triggerHandler(b+".dt",c)})},_eventToPage:function(b,c){return-1!==b.type.indexOf("touch")?b.originalEvent.touches[0]["page"+c]:b["page"+c]},_mouseDown:function(b,c){var a=this,e=this.s.dt,g=this.s.start,p=c.offset();g.top=this._eventToPage(b,"Y");g.left=this._eventToPage(b,"X");g.offsetTop=p.top;g.offsetLeft=p.left;g.nodes=d.unique(e.rows({page:"current"}).nodes().toArray());this.s.fullHeightContainer=c.closest("table");this.s.fullHeight=this.s.fullHeightContainer.outerHeight();
this._cachePositions();this._clone(c);this._clonePosition(b);this.dom.target=c;c.addClass("dt-rowReorder-moving");d(h).on("mouseup.rowReorder touchend.rowReorder",function(b){a._mouseUp(b)}).on("mousemove.rowReorder touchmove.rowReorder",function(b){a._mouseMove(b)});d(f).width()===d(h).width()&&d(h.body).addClass("dt-rowReorder-noOverflow");e=this.dom.dtScroll;this.s.scroll={windowHeight:d(f).height(),windowWidth:d(f).width(),dtTop:e.length?e.offset().top:null,dtLeft:e.length?e.offset().left:null,
dtHeight:e.length?e.outerHeight():null,dtWidth:e.length?e.outerWidth():null}},_mouseMove:function(b){this._clonePosition(b);for(var c=this._eventToPage(b,"Y")-this.s.bodyTop,a=this.s.middles,e=null,g=this.s.dt,p=g.table().body(),l=0,h=a.length;l<h;l++)if(c>=a[l]-this.s.bufferOffset&&c<=a[l]+this.s.bufferOffset){e=l;break}null===e&&(e=this.s.fullHeightContainer.outerHeight()==this.s.fullHeight?this.s.lastInsert:a.length);if(null===this.s.lastInsert||this.s.lastInsert!==e)0===e?this.dom.target.prependTo(p):
(c=d.unique(g.rows({page:"current"}).nodes().toArray()),e>this.s.lastInsert?this.dom.target.insertAfter(c[e]):this.dom.target.insertBefore(c[e])),this.s.lastInsert=e;this._shiftScroll(b)},_mouseUp:function(b){var c=this,a=this.s.dt,e=this.c.dataSrc;this.dom.clone.remove();this.dom.clone=null;this.dom.target.removeClass("dt-rowReorder-moving");d(h).off(".rowReorder");d(h.body).removeClass("dt-rowReorder-noOverflow");clearInterval(this.s.scrollInterval);this.s.scrollInterval=null;var g=this.s.start.nodes,
p=d.unique(a.rows({page:"current"}).nodes().toArray()),l={},f=[],m=[],n=this.s.getDataFn,q=this.s.setDataFn;var k=0;for(b=g.length;k<b;k++)if(g[k]!==p[k]){var t=a.row(p[k]).id(),r=a.row(p[k]).data(),u=a.row(g[k]).data();t&&(l[t]=n(u));f.push({node:p[k],oldData:n(r),newData:n(u),newPosition:k,oldPosition:d.inArray(p[k],g)});m.push(p[k])}g=[f,{dataSrc:e,nodes:m,values:l,triggerRow:a.row(this.dom.target)}];this._emitEvent("row-reorder",g);this.c.editor&&(this.c.enabled=!1,this.c.editor.edit(m,!1,d.extend({submit:"changed"},
this.c.formOptions)).multiSet(e,l).one("submitComplete",function(){c.c.enabled=!0}).submit());if(this.c.update){k=0;for(b=f.length;k<b;k++)l=a.row(f[k].node).data(),q(l,f[k].newData),a.columns().every(function(){this.dataSrc()===e&&a.cell(f[k].node,this.index()).invalidate("data")});this._emitEvent("row-reordered",g);a.draw(!1)}},_shiftScroll:function(b){var c=this,a=this.s.scroll,e=!1,d=b.pageY-h.body.scrollTop,f,l;65>d?f=-5:d>a.windowHeight-65&&(f=5);null!==a.dtTop&&b.pageY<a.dtTop+65?l=-5:null!==
a.dtTop&&b.pageY>a.dtTop+a.dtHeight-65&&(l=5);f||l?(a.windowVert=f,a.dtVert=l,e=!0):this.s.scrollInterval&&(clearInterval(this.s.scrollInterval),this.s.scrollInterval=null);!this.s.scrollInterval&&e&&(this.s.scrollInterval=setInterval(function(){a.windowVert&&(h.body.scrollTop+=a.windowVert);if(a.dtVert){var b=c.dom.dtScroll[0];a.dtVert&&(b.scrollTop+=a.dtVert)}},20))}});m.defaults={dataSrc:0,editor:null,enabled:!0,formOptions:{},selector:"td:first-child",snapX:!1,update:!0};var q=d.fn.dataTable.Api;
q.register("rowReorder()",function(){return this});q.register("rowReorder.enable()",function(b){b===r&&(b=!0);return this.iterator("table",function(c){c.rowreorder&&(c.rowreorder.c.enabled=b)})});q.register("rowReorder.disable()",function(){return this.iterator("table",function(b){b.rowreorder&&(b.rowreorder.c.enabled=!1)})});m.version="1.2.0";d.fn.dataTable.RowReorder=m;d.fn.DataTable.RowReorder=m;d(h).on("init.dt.dtr",function(b,c,a){"dt"===b.namespace&&(b=c.oInit.rowReorder,a=n.defaults.rowReorder,
b||a)&&(a=d.extend({},b,a),!1!==b&&new m(c,a))});return m});