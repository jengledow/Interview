import './index.css';

import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router';
import { definePreset } from '@primeuix/themes';

const app = createApp(App);

const preset = definePreset(Aura, {
	semantic: {
		colorScheme: {
			light: {
				primary: {
					50: '{indigo.50}',
					100: '{indigo.100}',
					200: '{indigo.200}',
					300: '{indigo.300}',
					400: '{indigo.400}',
					500: '{indigo.500}',
					600: '{indigo.600}',
					700: '{indigo.700}',
					800: '{indigo.800}',
					900: '{indigo.900}',
					950: '{indigo.950}'
				},
				surface: {
					0: '#ffffff',
					50: '{zinc.50}',
					100: '{zinc.100}',
					200: '{zinc.200}',
					300: '{zinc.300}',
					400: '{zinc.400}',
					500: '{zinc.500}',
					600: '{zinc.600}',
					700: '{zinc.700}',
					800: '{zinc.800}',
					900: '{zinc.900}',
					950: '{zinc.950}'
				}
			},
			dark: {
				primary: {
					50: '{indigo.50}',
					100: '{indigo.100}',
					200: '{indigo.200}',
					300: '{indigo.300}',
					400: '{indigo.400}',
					500: '{indigo.500}',
					600: '{indigo.600}',
					700: '{indigo.700}',
					800: '{indigo.800}',
					900: '{indigo.900}',
					950: '{indigo.950}'
				},
				surface: {
					0: '#ffffff',
					50: '{slate.50}',
					100: '{slate.100}',
					200: '{slate.200}',
					300: '{slate.300}',
					400: '{slate.400}',
					500: '{slate.500}',
					600: '{slate.600}',
					700: '{slate.700}',
					800: '{slate.800}',
					900: '{slate.900}',
					950: '{slate.950}'
				}
			}
		}
	}
})

app.use(router);
app.use(PrimeVue, {
	theme: {
		preset: preset 
	}
});

app.mount('#app');
