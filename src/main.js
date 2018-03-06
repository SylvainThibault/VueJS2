import Vue from 'vue'
import App from './App.vue'

import MachinesList from "./MachinesList.vue";
import MachinesMap from "./MachinesMap.vue";
import Machine from "./Machine.vue";

// CONFIGURATION  DES ROUTES
import VueRouter from 'vue-router'
Vue.use(VueRouter);
const routes = [
    {path: '/machines' , component: MachinesList},
    {path: '/map' , component: MachinesMap},
    {path: '/machine' , component: Machine}
];

const router = new VueRouter({
    routes // raccourci pour `routes: routes`
});

// COMPOSANT GOOGLE MAP
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: require('../env.json').APIToken,
    }
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
