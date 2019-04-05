<template>
    <div>
        <header-component :menu="menu" />

        <login-widget />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import HeaderComponent from './header/header.vue';
import LoginWidget from './widgets/login-widget.vue';

@Component({
    components: {
        HeaderComponent,
        LoginWidget,
    },
})
export default class HomeController extends Vue {
    menu: any[] = [
        { name: 'INICIO', link: '#' },
        { name: 'CÓMO FUNCIONA', link: '#' },
        { name: 'TESTIMONIOS', link: '#' },
        { name: 'BLOG', link: 'https://www.bifit.com.co/blog' },
    ];
}
</script>
