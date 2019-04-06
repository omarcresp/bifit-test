<template>
    <div>
        <h1 class="t-d-primary">¡Que bueno verte!</h1>
        <p class="t-d-complement">SELECCIONA UN DÍA Y LUGAR PARA TU CLASE</p>

        <div class="p-4 rounded-lg bg-white">
            <h3 class="t-d-primary">Reserva un día</h3>
            <hr class="mt-0 hr-complement">
            <div class="row text-left t-d-complement">
                <div class="col-md-12 form-group">
                    <label for="address">Dirección:</label>
                    <input v-model="address" type="text" class="form-control col-12" id="address" placeholder="Plaza Simón Bolivar, Bógota">
                </div>
                <div class="col-md-12 form-group">
                    <label for="place">Lugar:</label>
                    <select class="custom-select" v-model="place" id="place">
                        <option selected class="d-none"></option>
                        <option value="1">Parque</option>
                        <option value="2">Plaza</option>
                        <option value="3">Gimnasio</option>
                        <option value="4">Casa</option>
                    </select>
                </div>
                <div class="col-md-6 form-group">
                    <label for="date">Fecha:</label>
                    <input v-model="date" type="date" class="form-control col-12" id="date">
                </div>
                <div class="col-md-6 form-group">
                    <label for="time">Hora:</label>
                    <input v-model="time" type="time" class="form-control col-12" id="time">
                </div>
                <div class="col-md-6 form-group">
                    <label for="peoploe">Numero de personas:</label>
                    <input v-model="people" type="number" class="form-control col-12" id="people">
                </div>
            </div>
            <button class="btn fb-btn-secondary mt-3 ml-auto d-block" @click="$router.push('class')">Siguiente</button>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data () {
        return {
            address: '',
            place: '',
            objective: '',
            date: '',
            time: '',
            people: 0,
        };
    },
});
</script>
