import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import homeView from "@/views/home.vue";
import uploadView from "@/views/upload.vue";
import downloadView from "@/views/download.vue";
import deleteView from "@/views/delete.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: homeView,
    },
    {
        path: "/upload",
        name: "upload",
        component: uploadView,
    },
    {
        path: "/download",
        name: "download",
        component: downloadView,
    },
    {
        path: "/delete",
        name: "delete",
        component: deleteView,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
        };
    },
});

// router.beforeEach((_to, _from, next) => {
//     next();
// });

export default router;
