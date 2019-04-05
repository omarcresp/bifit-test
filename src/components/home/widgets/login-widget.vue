<template>
    <div class="row my-5">
        <div class="col-6">
            <h1 class="text-center t-primary">¿Ya eres usuario?</h1>
            <h3 class="text-center t-darkgray">Deseas volver a agendar una clase</h3>
        </div>
        <div class="col-6 full-center">
            <button type="button" class="btn fb-btn-secondary mt-3 font-weight-bold text-24-px" @click="$router.push('login')">
                INICIA SESIÓN
            </button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({});
</script>
