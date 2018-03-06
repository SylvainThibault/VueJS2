<template>
    <div>
        <h1> Carte des machines </h1>
    <gmap-map
            :center="{lat:10, lng:10}"
            :zoom="7"
            style="width: 100%; height: 400px"
    >
    </gmap-map>
    </div>
</template>

<script>
    export default {
        name: "machines-map"
    }
</script>

<style scoped>

</style>
