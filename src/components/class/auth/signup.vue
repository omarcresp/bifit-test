<template>
    <div>
        <h2 class="t-d-primary">Entrenamiento personalizado a domicilio</h2>
        <p class="t-d-complement">RESERVA TU PRIMERA CLASE CON EL 40% DE DESCUENTO</p>

        <div class="p-4 rounded-lg bg-white">
            <h3 class="t-d-primary">Registrate</h3>
            <hr class="mt-0 hr-complement">

            <div class="row text-left t-d-complement">
                <div class="col-md-6 form-group">
                    <label for="name">Nombre:</label>
                    <input type="text" class="form-control col-12" id="name" placeholder="Nombre">
                </div>
                <div class="col-md-6 form-group">
                    <label for="lastname">Apellido:</label>
                    <input type="text" class="form-control col-12" id="lastname" placeholder="Apellido">
                </div>
                <div class="col-md-12 form-group">
                    <label for="tel">Telefono:</label>
                    <input type="tel" class="form-control col-12" id="tel" placeholder="+561432523523">
                </div>
                <div class="col-md-12 form-group">
                    <label for="mail">Email:</label>
                    <input type="email" class="form-control col-12" id="mail" placeholder="nombre@ejemplo.com">
                </div>
                <div class="col-md-12 form-group">
                    <label for="password">Contraseña:</label>
                    <input type="password" class="form-control col-12" id="password">
                </div>

                <div class="col-md-12 form-group">
                    <input type="checkbox" class="form-control form-checkbox" value="policy" id="policy">
                    <label for="policy" class="m-2">
                        Acepto la
                        <a href="https://www.bifit.com.co/formulario/politica-de-datos-personales.html" target="_blank">
                            política de privacidad
                        </a>
                    </label>
                </div>
            </div>

            <button class="btn fb-btn-secondary mt-3 d-block ml-auto" @click="$router.push('reserve')">RESGISTRATE</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="sass">
.form-checkbox
    float: left
    display: inline-block
    width: 24px
</style>
