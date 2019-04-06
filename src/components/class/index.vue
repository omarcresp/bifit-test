<template>
    <div>
        <div class="row position-abosulte">
            <div class="col-12 mt-3 ml-2">
                <img src="../../assets/images/logo2.png" alt="Logo" class="logo" @click="$router.push('/')">
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6 d-none d-lg-block" style="z-index: -1">
                <img src="../../assets/images/cover.png" alt="Cover" class="cover-img">
            </div>
            
            <router-view class="text-center col-12 col-lg-6 px-md-5 mt-5 py-5 my-lg-2" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="sass">
.cover-img
    max-width: 50vw
    position: absolute
    top: 0px
    left: 20px
    max-height: 95vh
</style>
