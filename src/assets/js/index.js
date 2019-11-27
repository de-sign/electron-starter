const
    fs = require('fs'),
    path = require('path'),
    ES = require('./plugins/electron-starter/core');

ES.initialize().then( () => {

    ES.oVue = new Vue({
        el: '.ES-wrap',
        
        components: {
            'window-control': require('./components/WindowControl')
        },
        
        data: {},
        
        mounted() {
            this.$nextTick( setTimeout( () => document.body.classList.remove('ES-loading'), 800 ) );
        },
        methods: {}
    } );
} );