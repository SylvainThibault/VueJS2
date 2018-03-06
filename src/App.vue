<template>
    <div id="app">
        <img src="http://vuejs.org/images/logo.png">
        <h1>{{ msg }}</h1>
        <div class="inline-button" @click="onMachinesListClick"><router-link to="/machines"> Consulter la liste des machines </router-link></div>
        <div class="inline-button" @click="onMapClick"><router-link to="/map"> Voir la carte </router-link></div>
        <router-view> </router-view>
    </div>
</template>

<script>
    import MachinesList from "./MachinesList.vue";
    import MachinesMap from "./MachinesMap.vue";
    import Machine from "./Machine.vue";

    export default {
        name: 'app',
        components: {
            MachinesMap,
            MachinesList,
            Machine
        },

        data () {
            return {
                msg: "Qu'est-ce tu veux faire gros ?"
            }
        },

        methods: {
            onMachinesListClick: function(){
                //window.alert('machines');
            },
            onMapClick: function() {
                //window.alert('maps')
            }
        },
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    img {
        width: 200px;
        height: 200px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #fff;
        text-decoration: none;
    }

    .inline-button {
        display: inline-block;
        background-color: #14b776;
        color: white;
        padding: 20px 40px;
    }
</style>
