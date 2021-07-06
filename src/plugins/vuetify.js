import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme:{
        themes:{
            light:{
                primary : '#ff80ab',
                secondary : '#81c784'
            },
            dark:{
                primary:'#c94f7c',


            }
        }
    }
})
export default vuetify
