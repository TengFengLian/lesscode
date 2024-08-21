/*
 * @FilePath: /lesscode/src/router.js
 * @Description: 路由
 */
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/edit/:page_id",
      name: "page_edit",
      component: () => import("./pages/editor.vue"),
    },
    {
      path: "/edit/preview/:page_id",
      name: "page_edit_preview",
      component: () => import("./pages/editor-view.vue"),
    }, 
  ]
})