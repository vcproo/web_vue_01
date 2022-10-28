/*
 * @Author: han hants666@163.com
 * @Date: 2021-07-03 09:22:30
 * @LastEditors: han hants666@163.com
 * @LastEditTime: 2022-10-28 13:22:31
 * @FilePath: \web_vue_01\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue'
import App from './App.vue'
import { Button,Row,Container,Aside,Menu,Submenu,MenuItemGroup,MenuItem,Dropdown,DropdownMenu,DropdownItem,Header,Main,Table,TableColumn,Popover,Tag } from 'element-ui';

Vue.config.productionTip = false
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(Container.name, Container);
Vue.component(Aside.name, Aside);
Vue.component(Menu.name, Menu);
Vue.component(Submenu.name, Submenu);
Vue.component(MenuItemGroup.name, MenuItemGroup);
Vue.component(MenuItem.name, MenuItem);
Vue.component(Dropdown.name, Dropdown);
Vue.component(DropdownMenu.name, DropdownMenu);
Vue.component(DropdownItem.name, DropdownItem);
Vue.component(Header.name, Header);
Vue.component(Main.name, Main);
Vue.component(Table.name, Table);
Vue.component(TableColumn.name, TableColumn);
Vue.component(Popover.name, Popover);
Vue.component(Tag.name, Tag);
new Vue({
  render: h => h(App),
}).$mount('#app')
