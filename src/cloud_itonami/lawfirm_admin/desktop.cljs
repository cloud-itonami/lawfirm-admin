(ns cloud-itonami.lawfirm-admin.desktop
  "Entry point for the shadow-cljs :app build (appview/lawfirm-admin-mcp-component/web/dist/js/main.js,
  loaded by web/index.html) — same mount pattern as murakumo-studio.desktop,
  cloud-itonami.crypto-asset-freeze.desktop and cloud-itonami.market.desktop."
  (:require [reagent.dom.client :as rdomc]
            [cloud-itonami.lawfirm-admin.ui :as ui]))

(defonce root (atom nil))

(defn- mount! []
  (let [el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdomc/create-root el)))
    (rdomc/render @root [ui/root])))

(defn init! []
  ;; reagent's r/atom re-renders subscribed components on change
  ;; (ui/root derefs state/state) — mount once.
  (mount!))
