import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {deleteRequest, getRequest, postKeyValueRequest, postRequest, putRequest} from "./utils/api";
import {
    Aside,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Card,
    Checkbox,
    Col,
    Collapse,
    CollapseItem,
    Container,
    DatePicker,
    Dialog,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    Form,
    FormItem,
    Header,
    Icon,
    Input,
    Loading,
    Main,
    Menu,
    MenuItem,
    Option,
    Pagination,
    Popover,
    Radio,
    RadioGroup,
    Row,
    Select,
    Step,
    Steps,
    Submenu,
    Switch,
    Table,
    TableColumn,
    TabPane,
    Tabs,
    Tag,
    Tooltip,
    Tree,
    Upload
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Switch);
Vue.use(CollapseItem);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(DatePicker);
Vue.use(Upload);
Vue.use(Row);
Vue.use(Col);
Vue.use(Option);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Header);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Checkbox);
Vue.use(FormItem);
Vue.use(Collapse);
Vue.use(Popover);
Vue.use(Menu);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Dropdown);
Vue.use(Steps);
Vue.use(Step);
Vue.use(Tooltip);
Vue.use(Tree);
Vue.use(Pagination);
Vue.use(Badge);
Vue.use(Loading);
Vue.use(Button);
Vue.use(Input);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Card);
Vue.use(Container);
Vue.use(Icon);
Vue.use(Select);
Vue.use(Form);
Vue.use(Tag);


Vue.config.productionTip = false
Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
