<template>
    <div class="machine-border">
        <h1>Machine : {{machine.name}}</h1>
        <h2 v-bind:class="machine.statusColor">{{getStatus()}}</h2>
        <h5>Last time checked : {{machine.checkedAt.toLocaleString('en-GB', {timeZone: 'UTC'})}}</h5>
    </div>
</template>

<script>
    export default {
        name: "machine",
        props: ['machine'],

        methods: {
            getStatus: function () {
                if (this.machine.status) {
                    this.machine.statusColor = 'green';
                    return 'Status OK'
                }
                this.machine.statusColor = 'red';
                return 'Status KO'
            }
        }
    }
</script>

<style scoped>
    .green {
        color: green;
    }

    .red {
        color: red;
    }

    .machine-border {
        /*width: 50%;*/
        padding: 10px;
        margin: 5px 10px;
        border: 2px solid #7c7c7e;
    }
</style>