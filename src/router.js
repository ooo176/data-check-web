import Vue from 'vue'
import Router from 'vue-router'
import Demo from './views/data-check'
import Demo1 from './views/Demo1'
import Table1 from './views/Table1'
import HelloWorld from "./components/HelloWorld";
import Login from "./views/Login";
import Home from "./views/Home";
import TodoList from "./views/todoList.vue";
import weibo from "./views/weibo.vue";

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/data-check',
            name: 'data-check',
            component: Demo,
            hidden: true
        },
        {
            path: '/table1',
            name: 'Table1',
            component: Table1,
            hidden: true
        }, {
            path: '/demo1',
            name: 'Demo1',
            component: Demo1,
            hidden: true
        }, {
            path: '/helloWorld',
            name: 'helloWorld',
            component: HelloWorld,
            hidden: true
        }, {
            path: '/login',
            name: 'Login',
            component: Login,
            hidden: true
        }, {
            path: '/todoList',
            name: 'TodoList',
            component: TodoList,
            hidden: true
        }, {
            path: '/home',
            name: 'Home',
            component: Home,
            hidden: true,
            meta: {
                roles: ['admin', 'user']
            }
        }, {
            path: '/weibo',
            name: 'weibo',
            component: weibo,
            hidden: true
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
