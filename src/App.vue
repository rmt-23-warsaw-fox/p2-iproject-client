<script>
import { RouterView } from "vue-router";
import {mapWritableState} from 'pinia';
import {mainStore} from './stores/mainStore.js';
export default{
    computed: {
        ...mapWritableState(mainStore, ['isLoggedIn']),
    },
    created(){
        if (localStorage.getItem('access_token')) {
            this.isLoggedIn = true;
        }
    }
}
</script>
<template>
<RouterView/>
</template>