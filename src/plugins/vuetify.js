import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const vuetify = new Vuetify({
    theme:{
        themes:{
            light:{
                primary : '#ff80ab',

                secondary : '#ffb6c1'
            },
            dark:{
                primary:'#c94f7c',



            }
        }
    }
})
export default vuetify
