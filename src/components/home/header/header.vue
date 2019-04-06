<template>
    <div class="row header-bg pb-5">
        <div class="col-12 mb-lg-5">
            <fb-navbar :menu="menu"></fb-navbar>

            <div class="row mb-5" style="padding-top: 90px">
                <div class="col-12">
                    <div class="col-lg-6 ml-lg-auto d-block mr-lg-5 pr-lg-5 mt-3 header-widget text-center">
                        <img src="../../../assets/images/header.png" alt="header" width="300px" class="d-none d-lg-inline header-img">

                        <h3 class="mt-4 t-l-primary">Entrenamiento Personalizado a Domicilio</h3>
                        <button type="button" class="btn btn-c2a mt-3 font-weight-bold text-14-px" @click="$router.push('signup')">
                            RESERVA TU CLASE DE PRUEBA
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FbNavbar from './navbar.vue';

export default Vue.extend({
    props: ['menu'],
    components: {
        FbNavbar,
    },
});
</script>

<style lang="sass">
.header-bg
    background-image: url('../../../assets/images/bg.jpg')
    background-size: cover

.header-widget
    color: #7ab020
</style>
