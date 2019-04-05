<template>
    <div class="row header-bg">
        <div class="col-12">
            <fb-navbar :menu="menu"></fb-navbar>

            <div class="row">
                <div class="col-12">
                    <div class="ml-auto d-block mr-5 mt-3 header-widget text-center">
                        <img src="../../../assets/images/header.png" alt="header" width="300px">

                        <h4 class="mt-4">Entrenamiento Personalizado a Domicilio</h4>
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
    height: 600px

.header-widget
    width: 600px
    color: #7ab020
</style>
