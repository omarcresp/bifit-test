<template>
    <div class="row my-5">
        <div class="col-12 col-md-6">
            <h2 class="text-center t-d-primary">¿Ya eres usuario?</h2>
            <h3 class="text-center t-darkgray">¡Vuelve a agendar una clase con nosotros!</h3>
        </div>
        <div class="col-12 col-md-6 full-center">
            <button type="button" class="btn fb-btn-complement mt-3 font-weight-bold text-24-px" @click="$router.push('login')">
                INICIA SESIÓN
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
