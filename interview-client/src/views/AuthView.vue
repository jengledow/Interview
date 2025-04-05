<script setup>
	import Button from 'primevue/button';
	import Card from 'primevue/card';
	import { Form } from '@primevue/forms';
	import IftaLabel from 'primevue/iftalabel';
	import InputText from 'primevue/inputtext'
	import Password from 'primevue/password'
	import { reactive, ref } from 'vue';

	const login = ref(true);
	const loginValues = reactive({
		email: '',
		password: '',
	})
	const registerValues = reactive({
		email: '',
		password: '',
		confirm: '',
	})

	function toggle(){
		login.value = !login.value;
	}
	
	async function submitLogin(e){
		let res = await fetch('http://localhost:5000/login', {
			method: 'POST',
			body: JSON.stringify(e.values)
		})

		console.log(res);
	}

	function submitRegister(e){
		console.log(e);
	}
</script>

<template>
	<Card class="w-1/2 mx-auto my-30">
		<template #title>{{ login ? "Login" : "Register" }}</template>
		<template #content>

			<Form @submit="submitLogin" v-if="login">
				<IftaLabel>
					<InputText id="email" name="email" type="text" placeholder="jsmith@gmail.com" fluid />
					<label for="email">Email</label>
				</IftaLabel>
				<IftaLabel class="my-5">
					<Password id="password" name="password" :feedback="true" fluid />
					<label for="password">Password</label>
				</IftaLabel>

				<footer>
					<div v-if="login" class="flex justify-between w-full">
						<Button @click="toggle" label="Don't have an account?" />
						<Button label="Log In" type="submit" />
					</div>
				</footer>
			</Form>

			<Form @submit="submitRegister" v-else>
				<IftaLabel>
					<InputText id="email" name="email" type="text" placeholder="jsmith@gmail.com" fluid />
					<label for="email">Email</label>
				</IftaLabel>
				<IftaLabel class="my-5">
					<Password id="password" name="password" :feedback="true" fluid />
					<label for="password">Password</label>
				</IftaLabel>
				<IftaLabel class="my-5">
					<Password id="confirm-password" name="confirm-password" fluid />
					<label for="confirm-password">Confirm Password</label>
				</IftaLabel>

				<footer>
					<div class="flex justify-between w-full">
						<Button @click="toggle" label="Already have an account?" />
						<Button label="Register" type="submit" />
					</div>
				</footer>
			</Form>
		</template>
	</Card>
</template>