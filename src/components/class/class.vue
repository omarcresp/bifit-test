<template>
    <div>
        <h1 class="t-d-primary">¡Ya casi esta listo!</h1>
        <p class="t-d-complement">CUENTAMOS QUE TIPO DE CLASE QUIERES RECIBIR</p>

        <div class="p-4 rounded-lg bg-white">
            <h3 class="t-d-primary">Tipo de clase</h3>
            <hr class="mt-0 hr-complement">
            <div class="row text-left t-d-complement">
                <div class="col-md-12 form-group">
                    <label for="goal">Objetivo:</label>
                    <select class="custom-select" v-model="goal" id="goal">
                        <option selected class="d-none"></option>
                        <option value="1">Adelgazar</option>
                        <option value="2">Diversión</option>
                        <option value="3">Tonificar</option>
                    </select>
                </div>
                <div class="col-md-12 form-group">
                    <label for="level">Nivel de actividad:</label>
                    <select class="custom-select" v-model="level" id="level">
                        <option selected class="d-none"></option>
                        <option value="1">Sueve</option>
                        <option value="2">Moderado</option>
                        <option value="3">Intenso</option>
                    </select>
                </div>
                <div class="col-md-12 form-group">
                    <label for="trainer">Tipo de entrenador:</label>
                    <select class="custom-select" v-model="trainer" id="trainer">
                        <option selected class="d-none"></option>
                        <option value="1">Yoga</option>
                        <option value="2">Pilates</option>
                        <option value="3">Cardio</option>
                    </select>
                </div>
                <button class="btn btn-c2a mt-3 mx-auto d-block" @click="$router.push('finish')">Agendar clase</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data () {
        return {
            goal: 0,
            level: 0,
            trainer: 0,
        };
    },
});
</script>
