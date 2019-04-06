<template>
    <div>
        <h1 class="t-d-primary">¡Que bueno verte!</h1>
        <p class="t-d-complement">VUELVE A AGENDAR UNA CLASE CON NOSOTROS</p>

        <div class="p-4 rounded-lg bg-white">
            <h3 class="t-d-primary">Inicia Sesión</h3>
            <hr class="mt-0 hr-complement">
            <div class="row text-left t-d-complement">
                <div class="col-md-12 form-group">
                    <label for="mail">Email:</label>
                    <input v-model="mail" type="email" class="form-control col-12" id="mail" placeholder="nombre@ejemplo.com">
                </div>
                <div class="col-md-12 form-group">
                    <label for="password">Contraseña:</label>
                    <input v-model="pass" type="password" class="form-control col-12" id="password">
                </div>
            </div>
            <button class="btn fb-btn-secondary mt-3" @click="ready">INICIAR SESIÓN</button>
        </div>
    </div>
</template>

 <script lang="ts">
 import Vue from 'vue';
 export default Vue.extend({
     methods: {
        ready () {
            if (!(this.mail && this.pass)) return;

            this.$router.push('class');
        },
     },
     data () {
        return {
            mail: '',
            pass: '',
        };
    },
 });
</script>
