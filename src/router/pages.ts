import { RouteRecordRaw } from "vue-router";

import Index from "../pages/index.page.vue";
const NotFound = {
  template: `<h1>Page not found</h1>`
};

const pages: RouteRecordRaw[] = [
  {
    name: "index",
    path: "/",
    component: Index
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: NotFound,
    redirect: { name: "index" }
  }
];

export default pages;
