<template>
    <div>
        <h1>Liste des Machines</h1>
        <Machine v-for="machine in machines"
                 v-bind:key="machine.id"
                 v-bind:machine="machine"> </Machine>
    </div>
</template>

<script>
    import Machine from "./Machine.vue";

    export default {
        name: "machines-list",
        components: {
            Machine
        },
        data() {
            return {
                machines : [{
                    id:1,
                    name: 'What else ?',
                    status: true,
                    checkedAt: new Date(),
                }, {
                    id: 2,
                    name: 'Broken',
                    status: false,
                    checkedAt: new Date(),
                }]
            }
        }
    }
</script>

<style scoped>

</style>
