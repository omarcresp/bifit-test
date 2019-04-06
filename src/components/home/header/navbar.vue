<template>
    <nav class="navbar position-fixed navbar-dark navbar-expand-lg col-12">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
        <a class="navbar-brand" href="#">
            <img src="../../../assets/images/logo.png" class="logo" alt="">
        </a>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
                <li class="nav-item" v-for="(item, i) in menu" :key="i">
                    <a class="nav-link" :href="item.link">{{item.name}}</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: ['menu'],
});
</script>

<style lang="sass" scoped>
.nav-link::after
    transition: width .3s
    content: ''
    display: block
    width: 0
    height: 2px
    background: #00b

.nav-link:hover::after
    width: 100%

.nav-link
    color: #fffc !important

.nav-link:hover
    color: #fff !important
</style>
