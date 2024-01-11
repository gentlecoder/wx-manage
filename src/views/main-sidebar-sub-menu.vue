<template>
    <el-sub-menu v-if="menu.list && menu.list.length >= 1" :index="menu.menuId + ''"
        :popper-class="'site-sidebar--' + sidebarLayoutSkin + '-popper'">
        <template v-slot:title>
            <i class="site-sidebar__menu-icon" :class="menu.icon"></i>
            <!-- <icon-svg :name="menu.icon || ''" class="site-sidebar__menu-icon"></icon-svg> -->
            <span>{{ menu.name }}</span>
        </template>
        <sub-menu v-for="item in menu.list" :key="item.menuId" :menu="item" :dynamicMenuRoutes="dynamicMenuRoutes">
        </sub-menu>
    </el-sub-menu>
    <el-menu-item v-else :index="menu.menuId + ''" @click="gotoRouteHandle(menu)">
        <!-- <icon-svg :name="menu.icon || ''" class="site-sidebar__menu-icon"></icon-svg> -->
        <i class="site-sidebar__menu-icon fa" :class="menu.icon"></i>
        <span>{{ menu.name }}</span>
    </el-menu-item>
</template>

<script>
export default {
    name: 'sub-menu',
    props: {
        menu: {
            type: Object,
            required: true
        },
        dynamicMenuRoutes: {
            type: Array,
            required: true
        }
    },
    components: {
    },
    computed: {
        sidebarLayoutSkin: {
            get() { return this.$store.state.common.sidebarLayoutSkin }
        }
    },
    methods: {
        // 通过menuId与动态(菜单)路由进行匹配跳转至指定路由
        gotoRouteHandle(menu) {
            var route = this.dynamicMenuRoutes.filter(item => item.meta.menuId === menu.menuId)
            if (route.length >= 1) {
                this.$router.push({ name: route[0].name })
            }
        }
    }
}
</script>
