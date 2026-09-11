(ns lawfirm-admin.app-test
  (:require [cljs.test :refer [deftest is testing use-fixtures]]
            [re-frame.core :as rf]
            [re-frame.db :as rf-db]
            [lawfirm-admin.app :as app]))

(use-fixtures :each
  {:before (fn [] (rf/clear-subscription-cache!) (reset! rf-db/app-db {}))})

(deftest initialize-db-sets-defaults
  (testing ":initialize-db populates the app-info scaffold defaults"
    (rf/dispatch-sync [:initialize-db])
    (is (= app/default-db @rf-db/app-db))
    (is (= "Lawfirm Admin Mcp Component" (:title @(rf/subscribe [:app]))))
    (is (= "etzhayyim-project-lawfirm-admin" (:project @(rf/subscribe [:app]))))
    (is (true? (:xrpc? @(rf/subscribe [:app]))))
    (is (= [] (:routes @(rf/subscribe [:app]))))
    (is (= [] (:vars @(rf/subscribe [:app]))))))

(deftest app-sub-reflects-db-not-a-fixed-value
  (testing ":app subscription reads whatever is in the db, not a fixed value"
    (reset! rf-db/app-db {:app {:title "違うタイトル" :project "p" :name "n" :kind "k"
                                 :route-count 3 :routes ["a" "b" "c"] :vars ["X"]
                                 :xrpc? false :relative-path "x/y.cljs"}})
    (let [app @(rf/subscribe [:app])]
      (is (= "違うタイトル" (:title app)))
      (is (= 3 (:route-count app)))
      (is (= ["a" "b" "c"] (:routes app)))
      (is (= ["X"] (:vars app)))
      (is (false? (:xrpc? app))))))

(deftest initialize-db-overwrites-prior-state
  (testing ":initialize-db resets to defaults even if the db already had other data"
    (reset! rf-db/app-db {:app {:title "stale"} :unrelated 42})
    (rf/dispatch-sync [:initialize-db])
    (is (= app/default-db @rf-db/app-db))))
