goog.provide('byoubu.spec');
/**
 * Every backdrop names the same nine roles. A fixed vocabulary is what lets
 *   `byoubu.plate` build a plate for any entry without special-casing, and
 *   what lets two backdrops be compared.
 */
byoubu.spec.required_palette_keys = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky-zenith","sky-zenith",-20065151),new cljs.core.Keyword(null,"sky-mid","sky-mid",106630624),new cljs.core.Keyword(null,"sky-horizon","sky-horizon",-157541617),new cljs.core.Keyword(null,"haze","haze",-1024870708),new cljs.core.Keyword(null,"ridge-far","ridge-far",762525090),new cljs.core.Keyword(null,"ridge-near","ridge-near",1102584738),new cljs.core.Keyword(null,"dune-lit","dune-lit",790638115),new cljs.core.Keyword(null,"dune-shadow","dune-shadow",423450330),new cljs.core.Keyword(null,"star","star",279424429)], null);
byoubu.spec.required_scene_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sky","sky",1271496862),new cljs.core.Keyword(null,"atmosphere","atmosphere",523254734),new cljs.core.Keyword(null,"terrain","terrain",704966005),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"grade","grade",2117054771)], null);
byoubu.spec.textures = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"moderate","moderate",-1039163165),null,new cljs.core.Keyword(null,"calm","calm",-533989756),null,new cljs.core.Keyword(null,"busy","busy",-328286801),null], null), null);
byoubu.spec.missing = (function byoubu$spec$missing(m,ks){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22646_SHARP_){
return cljs.core.contains_QMARK_(m,p1__22646_SHARP_);
}),ks);
});
/**
 * Vector of problem descriptions for one backdrop; empty means valid.
 */
byoubu.spec.problems = (function byoubu$spec$problems(backdrop){
var id = new cljs.core.Keyword("byoubu","id","byoubu/id",459733156).cljs$core$IFn$_invoke$arity$1(backdrop);
var palette = new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321).cljs$core$IFn$_invoke$arity$1(backdrop);
var band = new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238).cljs$core$IFn$_invoke$arity$1(backdrop);
var scene = new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071).cljs$core$IFn$_invoke$arity$1(backdrop);
var pfx = [cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0)),": "].join('');
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22651(s__22652){
return (new cljs.core.LazySeq(null,(function (){
var s__22652__$1 = s__22652;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22652__$1);
if(temp__5825__auto__){
var s__22652__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22652__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22652__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22654 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22653 = (0);
while(true){
if((i__22653 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22653);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
cljs.core.chunk_append(b__22654,[pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22734 = (i__22653 + (1));
i__22653 = G__22734;
continue;
} else {
var G__22736 = (i__22653 + (1));
i__22653 = G__22736;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22654),byoubu$spec$problems_$_iter__22651(cljs.core.chunk_rest(s__22652__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22654),null);
}
} else {
var k = cljs.core.first(s__22652__$2);
if((cljs.core.get.cljs$core$IFn$_invoke$arity$2(backdrop,k) == null)){
return cljs.core.cons([pfx,"missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22651(cljs.core.rest(s__22652__$2)));
} else {
var G__22738 = cljs.core.rest(s__22652__$2);
s__22652__$1 = G__22738;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("byoubu","id","byoubu/id",459733156),new cljs.core.Keyword("byoubu","title","byoubu/title",1943539519),new cljs.core.Keyword("byoubu","summary","byoubu/summary",1753941440),new cljs.core.Keyword("byoubu","tags","byoubu/tags",-743870735),new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191),new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445),new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268),new cljs.core.Keyword("byoubu","palette","byoubu/palette",851879321),new cljs.core.Keyword("byoubu","content-band","byoubu/content-band",-1665630238),new cljs.core.Keyword("byoubu","scene","byoubu/scene",1831525071)], null));
})(),(((id instanceof cljs.core.Keyword))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"id must be a keyword"].join('')], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.int_QMARK_(new cljs.core.Keyword("byoubu","seed","byoubu/seed",841916191).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"seed must be an integer \u2014 a backdrop nobody can re-render ","is an asset, not a spec"].join('')], null)),((cljs.core.contains_QMARK_(byoubu.spec.textures,new cljs.core.Keyword("byoubu","texture","byoubu/texture",1576630445).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"texture must be one of ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(byoubu.spec.textures))].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22658(s__22659){
return (new cljs.core.LazySeq(null,(function (){
var s__22659__$1 = s__22659;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22659__$1);
if(temp__5825__auto__){
var s__22659__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22659__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22659__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22661 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22660 = (0);
while(true){
if((i__22660 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22660);
cljs.core.chunk_append(b__22661,[pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22741 = (i__22660 + (1));
i__22660 = G__22741;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22661),byoubu$spec$problems_$_iter__22658(cljs.core.chunk_rest(s__22659__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22661),null);
}
} else {
var k = cljs.core.first(s__22659__$2);
return cljs.core.cons([pfx,"palette missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22658(cljs.core.rest(s__22659__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(palette,byoubu.spec.required_palette_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22664(s__22665){
return (new cljs.core.LazySeq(null,(function (){
var s__22665__$1 = s__22665;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22665__$1);
if(temp__5825__auto__){
var s__22665__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22665__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22665__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22667 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22666 = (0);
while(true){
if((i__22666 < size__5479__auto__)){
var vec__22670 = cljs.core._nth(c__5478__auto__,i__22666);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22670,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22670,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
cljs.core.chunk_append(b__22667,[pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));

var G__22744 = (i__22666 + (1));
i__22666 = G__22744;
continue;
} else {
var G__22745 = (i__22666 + (1));
i__22666 = G__22745;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22667),byoubu$spec$problems_$_iter__22664(cljs.core.chunk_rest(s__22665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22667),null);
}
} else {
var vec__22675 = cljs.core.first(s__22665__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22675,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22675,(1),null);
if((byoubu.color.hex__GT_rgb(v) == null)){
return cljs.core.cons([pfx,"palette ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''),byoubu$spec$problems_$_iter__22664(cljs.core.rest(s__22665__$2)));
} else {
var G__22746 = cljs.core.rest(s__22665__$2);
s__22665__$1 = G__22746;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(palette);
})(),((cljs.core.contains_QMARK_(palette,new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"accent ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("byoubu","accent","byoubu/accent",553460268).cljs$core$IFn$_invoke$arity$1(backdrop)], 0))," is not a palette key"].join('')], null)),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22678(s__22679){
return (new cljs.core.LazySeq(null,(function (){
var s__22679__$1 = s__22679;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22679__$1);
if(temp__5825__auto__){
var s__22679__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22679__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22679__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22681 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22680 = (0);
while(true){
if((i__22680 < size__5479__auto__)){
var vec__22683 = cljs.core._nth(c__5478__auto__,i__22680);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22683,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22683,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
cljs.core.chunk_append(b__22681,[pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22749 = (i__22680 + (1));
i__22680 = G__22749;
continue;
} else {
var G__22750 = (i__22680 + (1));
i__22680 = G__22750;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22681),byoubu$spec$problems_$_iter__22678(cljs.core.chunk_rest(s__22679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22681),null);
}
} else {
var vec__22688 = cljs.core.first(s__22679__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22688,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22688,(1),null);
if((!(cljs.core.contains_QMARK_(palette,k)))){
return cljs.core.cons([pfx,"content-band references unknown palette key ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22678(cljs.core.rest(s__22679__$2)));
} else {
var G__22751 = cljs.core.rest(s__22679__$2);
s__22679__$1 = G__22751;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(band);
})(),(function (){var total = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,0.0,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,band));
var drift = (total - 1.0);
var drift__$1 = (((drift < (0)))?(- drift):drift);
if((drift__$1 > 0.001)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[pfx,"content-band weights sum to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(total),", not 1.0"].join('')], null);
} else {
return null;
}
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22691(s__22692){
return (new cljs.core.LazySeq(null,(function (){
var s__22692__$1 = s__22692;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22692__$1);
if(temp__5825__auto__){
var s__22692__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22692__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22692__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22694 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22693 = (0);
while(true){
if((i__22693 < size__5479__auto__)){
var k = cljs.core._nth(c__5478__auto__,i__22693);
cljs.core.chunk_append(b__22694,[pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''));

var G__22827 = (i__22693 + (1));
i__22693 = G__22827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22694),byoubu$spec$problems_$_iter__22691(cljs.core.chunk_rest(s__22692__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22694),null);
}
} else {
var k = cljs.core.first(s__22692__$2);
return cljs.core.cons([pfx,"scene missing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join(''),byoubu$spec$problems_$_iter__22691(cljs.core.rest(s__22692__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.spec.missing(scene,byoubu.spec.required_scene_keys));
})(),(function (){var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22697(s__22698){
return (new cljs.core.LazySeq(null,(function (){
var s__22698__$1 = s__22698;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22698__$1);
if(temp__5825__auto__){
var s__22698__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22698__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22698__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22700 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22699 = (0);
while(true){
if((i__22699 < size__5479__auto__)){
var vec__22701 = cljs.core._nth(c__5478__auto__,i__22699);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22701,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
cljs.core.chunk_append(b__22700,[pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''));

var G__22892 = (i__22699 + (1));
i__22699 = G__22892;
continue;
} else {
var G__22893 = (i__22699 + (1));
i__22699 = G__22893;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22700),byoubu$spec$problems_$_iter__22697(cljs.core.chunk_rest(s__22698__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22700),null);
}
} else {
var vec__22706 = cljs.core.first(s__22698__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22706,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22706,(1),null);
if((byoubu.color.hex__GT_rgb(new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)) == null)){
return cljs.core.cons([pfx,"measured ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tier)," content-color is not a hex color: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content-color","content-color",1294205929).cljs$core$IFn$_invoke$arity$1(m)], 0))].join(''),byoubu$spec$problems_$_iter__22697(cljs.core.rest(s__22698__$2)));
} else {
var G__22897 = cljs.core.rest(s__22698__$2);
s__22698__$1 = G__22897;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.select_keys(new cljs.core.Keyword("byoubu","measured","byoubu/measured",-610808208).cljs$core$IFn$_invoke$arity$1(backdrop),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plate","plate",-1920178141),new cljs.core.Keyword(null,"poster","poster",-1616913550)], null)));
})(),(function (){var f = byoubu.facts.derive_facts(backdrop);
var ink = new cljs.core.Keyword("byoubu.facts","ink","byoubu.facts/ink",567836213).cljs$core$IFn$_invoke$arity$1(f);
var iter__5480__auto__ = (function byoubu$spec$problems_$_iter__22709(s__22710){
return (new cljs.core.LazySeq(null,(function (){
var s__22710__$1 = s__22710;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__22710__$1);
if(temp__5825__auto__){
var s__22710__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__22710__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__22710__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__22712 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__22711 = (0);
while(true){
if((i__22711 < size__5479__auto__)){
var vec__22715 = cljs.core._nth(c__5478__auto__,i__22711);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22715,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22715,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
cljs.core.chunk_append(b__22712,[pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''));

var G__22902 = (i__22711 + (1));
i__22711 = G__22902;
continue;
} else {
var G__22903 = (i__22711 + (1));
i__22711 = G__22903;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22712),byoubu$spec$problems_$_iter__22709(cljs.core.chunk_rest(s__22710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22712),null);
}
} else {
var vec__22718 = cljs.core.first(s__22710__$2);
var tier = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22718,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22718,(1),null);
var r = byoubu.color.contrast_ratio(ink,c);
if(((function (){var or__5002__auto__ = r;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return 0.0;
}
})() < byoubu.facts.wcag_aa_body)){
return cljs.core.cons([pfx,"recommended ink ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ink)," on the ",cljs.core.name(tier)," content band ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)," has contrast ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),", below AA body ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(byoubu.facts.wcag_aa_body)].join(''),byoubu$spec$problems_$_iter__22709(cljs.core.rest(s__22710__$2)));
} else {
var G__22905 = cljs.core.rest(s__22710__$2);
s__22710__$1 = G__22905;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(byoubu.facts.tier_colors(backdrop));
})()], 0)));
});
byoubu.spec.valid_QMARK_ = (function byoubu$spec$valid_QMARK_(backdrop){
return cljs.core.empty_QMARK_(byoubu.spec.problems(backdrop));
});

//# sourceMappingURL=byoubu.spec.js.map
