(ns cloud-itonami.lawfirm-admin.state
  "App state for the lawfirm-admin appview UI. Ported 1:1 from the former
  svelte/src/routes/+page.svelte template shell — a single static screen
  describing the app surface (title / project / routes / bindings / source
  path). Single reagent atom, murakumo-studio構成."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:app {:title "Lawfirm Admin Mcp Component"
          :project "etzhayyim-project-lawfirm-admin"
          :name "lawfirm-admin-mcp-component"
          :kind "appview"
          :route-count 0
          :routes []
          :vars []
          :xrpc? true
          :relative-path "60-apps/etzhayyim-project-lawfirm-admin/appview/lawfirm-admin-mcp-component/svelte/src/routes/+page.svelte"}}))
