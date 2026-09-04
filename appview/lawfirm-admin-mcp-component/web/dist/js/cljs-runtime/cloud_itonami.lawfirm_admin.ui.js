goog.provide('cloud_itonami.lawfirm_admin.ui');
cloud_itonami.lawfirm_admin.ui.css_text = "\n.lfa-app { min-height: 100vh; padding: 24px; background: var(--liquid-glass-bg, #11161d); color: var(--liquid-glass-fg, #eef4f8); font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif; }\n.lfa-top { margin-bottom: 18px; }\n.lfa-top p, .lfa-top span, .lfa-muted, .lfa-app h2, .lfa-facts span { color: #96a6b8; }\n.lfa-top p { margin: 0 0 8px; font-size: 12px; font-weight: 700; text-transform: uppercase; }\n.lfa-app h1, .lfa-app h2, .lfa-app p { margin: 0; }\n.lfa-app h1 { font-size: clamp(28px, 5vw, 48px); line-height: 1.05; }\n.lfa-top span { display: block; margin-top: 8px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.lfa-facts { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin-bottom: 12px; }\n.lfa-facts > div, .lfa-panel { border: 1px solid #2b3948; border-radius: 8px; background: #171f28; }\n.lfa-facts > div { padding: 14px; }\n.lfa-facts span { display: block; margin-bottom: 8px; font-size: 12px; }\n.lfa-facts strong { overflow-wrap: anywhere; }\n.lfa-panel { margin-bottom: 12px; padding: 16px; }\n.lfa-app h2 { margin-bottom: 12px; font-size: 13px; text-transform: uppercase; }\n.lfa-app ul { display: grid; gap: 8px; margin: 0; padding: 0; list-style: none; }\n.lfa-app li, .lfa-path p { border: 1px solid #263443; border-radius: 6px; background: #101720; padding: 9px 10px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; overflow-wrap: anywhere; }\n.lfa-chips { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); }\n@media (max-width: 760px) { .lfa-app { padding: 18px; } .lfa-facts { grid-template-columns: 1fr; } }\n";
cloud_itonami.lawfirm_admin.ui.panel = (function cloud_itonami$lawfirm_admin$ui$panel(title,body){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.lfa-panel","section.lfa-panel",1347245771),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),title], null),body], null);
});
cloud_itonami.lawfirm_admin.ui.facts = (function cloud_itonami$lawfirm_admin$ui$facts(app){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.lfa-facts","section.lfa-facts",1860235159),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Project"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"project","project",1124394579).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Routes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"route-count","route-count",-1535759193).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"XRPC"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),(cljs.core.truth_(new cljs.core.Keyword(null,"xrpc?","xrpc?",938402752).cljs$core$IFn$_invoke$arity$1(app))?"enabled":"not configured")], null)], null)], null);
});
cloud_itonami.lawfirm_admin.ui.public_routes = (function cloud_itonami$lawfirm_admin$ui$public_routes(p__23831){
var map__23832 = p__23831;
var map__23832__$1 = cljs.core.__destructure_map(map__23832);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23832__$1,new cljs.core.Keyword(null,"routes","routes",457900162));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.lawfirm_admin.ui.panel,"Public Routes",((cljs.core.seq(routes))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5480__auto__ = (function cloud_itonami$lawfirm_admin$ui$public_routes_$_iter__23833(s__23834){
return (new cljs.core.LazySeq(null,(function (){
var s__23834__$1 = s__23834;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23834__$1);
if(temp__5825__auto__){
var s__23834__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23834__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23834__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23836 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23835 = (0);
while(true){
if((i__23835 < size__5479__auto__)){
var r = cljs.core._nth(c__5478__auto__,i__23835);
cljs.core.chunk_append(b__23836,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)));

var G__23855 = (i__23835 + (1));
i__23835 = G__23855;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23836),cloud_itonami$lawfirm_admin$ui$public_routes_$_iter__23833(cljs.core.chunk_rest(s__23834__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23836),null);
}
} else {
var r = cljs.core.first(s__23834__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),r], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),r], null)),cloud_itonami$lawfirm_admin$ui$public_routes_$_iter__23833(cljs.core.rest(s__23834__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(routes);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lfa-muted","p.lfa-muted",-1397748333),"No public route is declared next to this app surface."], null))], null);
});
cloud_itonami.lawfirm_admin.ui.runtime_bindings = (function cloud_itonami$lawfirm_admin$ui$runtime_bindings(p__23837){
var map__23838 = p__23837;
var map__23838__$1 = cljs.core.__destructure_map(map__23838);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23838__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.lawfirm_admin.ui.panel,"Runtime Bindings",((cljs.core.seq(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.lfa-chips","ul.lfa-chips",-978646117),(function (){var iter__5480__auto__ = (function cloud_itonami$lawfirm_admin$ui$runtime_bindings_$_iter__23839(s__23840){
return (new cljs.core.LazySeq(null,(function (){
var s__23840__$1 = s__23840;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__23840__$1);
if(temp__5825__auto__){
var s__23840__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__23840__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__23840__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__23842 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__23841 = (0);
while(true){
if((i__23841 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__23841);
cljs.core.chunk_append(b__23842,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)));

var G__23856 = (i__23841 + (1));
i__23841 = G__23856;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23842),cloud_itonami$lawfirm_admin$ui$runtime_bindings_$_iter__23839(cljs.core.chunk_rest(s__23840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23842),null);
}
} else {
var k = cljs.core.first(s__23840__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),k], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null)),cloud_itonami$lawfirm_admin$ui$runtime_bindings_$_iter__23839(cljs.core.rest(s__23840__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(vars);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.lfa-muted","p.lfa-muted",-1397748333),"No public vars are declared in the nearest wrangler config."], null))], null);
});
cloud_itonami.lawfirm_admin.ui.source = (function cloud_itonami$lawfirm_admin$ui$source(p__23844){
var map__23850 = p__23844;
var map__23850__$1 = cljs.core.__destructure_map(map__23850);
var relative_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23850__$1,new cljs.core.Keyword(null,"relative-path","relative-path",1848635172));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.lfa-panel.lfa-path","section.lfa-panel.lfa-path",-625815528),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Source"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),relative_path], null)], null);
});
cloud_itonami.lawfirm_admin.ui.root = (function cloud_itonami$lawfirm_admin$ui$root(){
var map__23852 = cljs.core.deref(cloud_itonami.lawfirm_admin.state.state);
var map__23852__$1 = cljs.core.__destructure_map(map__23852);
var app = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23852__$1,new cljs.core.Keyword(null,"app","app",-560961707));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),cloud_itonami.lawfirm_admin.ui.css_text], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [appkit.core.panel,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main.lfa-app","main.lfa-app",-1008068934),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.lfa-top","section.lfa-top",-2144707723),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cloudflare ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(app))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(app)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.lawfirm_admin.ui.facts,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.lawfirm_admin.ui.public_routes,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.lawfirm_admin.ui.runtime_bindings,app], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.lawfirm_admin.ui.source,app], null)], null)], null)], null);
});

//# sourceMappingURL=cloud_itonami.lawfirm_admin.ui.js.map
