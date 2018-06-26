import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@//views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: () => import('@/views/form/article-publish/preview.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = 
    {
        path: '/',
        name: 'otherRouter',
        redirect: '/home',
        component: Main,
        children: [
            { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: () => import('@/views/home/home.vue') },
            { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: () => import('@/views/own-space/own-space.vue') },
            { path: 'order/:order_id', title: '订单详情', name: 'order-info', component: () => import('@/views/advanced-router/component/order-info.vue') }, // 用于展示动态路由
            { path: 'shopping', title: '购物详情', name: 'shopping', component: () => import('@/views/advanced-router/component/shopping-info.vue') }, // 用于展示带参路由
            { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') },
            { path: 'topic-add', title: '新增话题', name: 'topic-add', component: () => import('@/views/topic-manage/topic-add/topic-add.vue') }
        ]
    };




// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/homes',
        icon: 'key',
        name: 'homes',
        title: '首页',
        component: Main,
        children: [
            { path: 'home', title: '首页', name: 'home', component: () => import('@/views/home/home.vue') },
            { path: 'system-setting', title: '系统信息', name: 'system-setting', access: 0, component: () => import('@/views/system-setting/system-setting.vue') }
        ]
    },
    {
        path: '/content-manage',
        title: '内容管理',
        name: 'content-manage',
        access: 0,
        component: Main,
        children: [
            { path: 'content-reviews', title: '内容审核', name: 'content-review', access: 0, component: () => import('@/views/content-manage/content-review/content-review.vue') },
            { path: 'theme-posts-manage', title: '主题帖管理', name: 'theme-posts-manage', component: () => import('@/views/content-manage/theme-posts-manage/theme-posts-manage.vue') },
            { path: 'recycle-bin-manage', title: '回收站管理', name: 'scroll-bar-page', component: () => import('@/views/my-components/scroll-bar/scroll-bar-page.vue') }
        ]
    },
    {
        path: '/topic-manage',
        title: '话题管理',
        name: 'topic-manage',
        component: Main,
        children: [
            { path: 'topic-list', title: '话题列表', name: 'topic-list', component: () => import('@/views/topic-manage/topic-list/topic-list.vue')},
            { path: 'topic-classify', title: '话题分类', name: 'topic-classify', component: () => import('@/views/topic-manage/topic-classify/topic-classify.vue') },
            { path: 'equip-manage', title: '设备管理', name: 'equip-manage', component: () => import('@/views/topic-manage/equip-manage/equip-manage.vue') }
        ]
    },
    {
        path: '/run-manage',
        name: 'run-manage',
        title: '运营管理',
        component: Main,
        children: [
            {
                path: 'banner-intervene',
                name: 'banner-intervene',
                title: '首页banner干预',
                component: () => import('@/views/run-manage/banner-intervene/banner-intervene.vue')
            },
            {
                path: 'topic-intervene',
                name: 'topic-intervene',
                title: '客户端首页话题干预',
                component: () => import('@/views/run-manage/topic-intervene/topic-intervene.vue')
            },
            {
                path: 'special-manage',
                name: 'special-manage',
                title: '专题管理',
                component: () => import('@/views/run-manage/special-manage/special-manage.vue')
            },
            {
                path: 'draggable-list',
                icon: 'arrow-move',
                name: 'draggable-list',
                title: '热门内容管理',
                component: () => import('@/views/my-components/draggable-list/draggable-list.vue')
            }
        ]
    },
    {
        path: '/form',
        name: 'form',
        title: '用户管理',
        component: Main,
        children: [
            { path: 'artical-publish', title: '文章发布', name: 'artical-publish', icon: 'compose', component: () => import('@/views/form/article-publish/article-publish.vue') },
            { path: 'workflow', title: '工作流', name: 'workflow', icon: 'arrow-swap', component: () => import('@/views/form/work-flow/work-flow.vue') }

        ]
    },
    // {
    //     path: '/charts',
    //     icon: 'ios-analytics',
    //     name: 'charts',
    //     title: '图表',
    //     component: Main,
    //     children: [
    //         { path: 'pie', title: '饼状图', name: 'pie', icon: 'ios-pie', component: resolve => { require('@/views/access/access.vue') },
    //         { path: 'histogram', title: '柱状图', name: 'histogram', icon: 'stats-bars', component: resolve => { require('@/views/access/access.vue') }

    //     ]
    // },
    {
        path: '/tables',
        name: 'tables',
        title: '统计分析',
        component: Main,
        children: [
            { path: 'dragableTable', title: '可拖拽排序', name: 'dragable-table', icon: 'arrow-move', component: () => import('@/views/tables/dragable-table.vue') },
            { path: 'editableTable', title: '可编辑表格', name: 'editable-table', icon: 'edit', component: () => import('@/views/tables/editable-table.vue') },
            { path: 'searchableTable', title: '可搜索表格', name: 'searchable-table', icon: 'search', component: () => import('@/views/tables/searchable-table.vue') },
            { path: 'exportableTable', title: '表格导出数据', name: 'exportable-table', icon: 'code-download', component: () => import('@/views/tables/exportable-table.vue') },
            { path: 'table2image', title: '表格转图片', name: 'table-to-image', icon: 'images', component: () => import('@/views/tables/table-to-image.vue') }
        ]
    },
    {
        path: '/advanced-router',
        name: 'advanced-router',
        title: '系统设置',
        component: Main,
        children: [
            { path: 'mutative-router', title: '成员管理', name: 'mutative-router', icon: 'link', component: () => import('@/views/advanced-router/mutative-router.vue') },
            { path: 'argument-page', title: '权限管理', name: 'argument-page', icon: 'android-send', component: () => import('@/views/advanced-router/argument-page.vue') }
        ]
    },
    {
        path: '/error-page',
        icon: 'android-sad',
        title: '错误页面',
        name: 'errorpage',
        component: Main,
        children: [
            { path: 'index', title: '错误页面', name: 'errorpage_index', component: () => import('@/views/error-page/error-page.vue') }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page403,
    page404
];
