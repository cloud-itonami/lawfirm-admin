goog.provide('cloud_itonami.lawfirm_admin.desktop');
if((typeof cloud_itonami !== 'undefined') && (typeof cloud_itonami.lawfirm_admin !== 'undefined') && (typeof cloud_itonami.lawfirm_admin.desktop !== 'undefined') && (typeof cloud_itonami.lawfirm_admin.desktop.root !== 'undefined')){
} else {
cloud_itonami.lawfirm_admin.desktop.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
cloud_itonami.lawfirm_admin.desktop.mount_BANG_ = (function cloud_itonami$lawfirm_admin$desktop$mount_BANG_(){
var el = document.getElementById("app");
if(cljs.core.truth_(cljs.core.deref(cloud_itonami.lawfirm_admin.desktop.root))){
} else {
cljs.core.reset_BANG_(cloud_itonami.lawfirm_admin.desktop.root,reagent.dom.client.create_root(el));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cloud_itonami.lawfirm_admin.desktop.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cloud_itonami.lawfirm_admin.ui.root], null));
});
cloud_itonami.lawfirm_admin.desktop.init_BANG_ = (function cloud_itonami$lawfirm_admin$desktop$init_BANG_(){
return cloud_itonami.lawfirm_admin.desktop.mount_BANG_();
});

//# sourceMappingURL=cloud_itonami.lawfirm_admin.desktop.js.map
