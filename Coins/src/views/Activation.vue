<template>
<div class=" d-flex justify-content-center align-items-center" style="height: 100vh;">
    <img src="../assets/loading.gif"  width="250" />
</div>
</template>
<script>
import { mapActions, mapWritableState } from "pinia";
import { useCoinsStore } from '../stores/coins'
export default {
    methods: {
        ...mapActions(useCoinsStore, ['active'])
    },
    created() {
        this.active(this.$route.query.token)
    },


}
</script>
<style lang="">
    
</style>