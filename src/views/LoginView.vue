<template>
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      
      <div  class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Inicio de Sesion
              </h1>
              <form @submit.prevent="login" class="space-y-4 md:space-y-6  " action="#">
                
                <!-- email= eve.holt@reqres.in -->
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo Electronico</label>
                      <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="user@gmail.com">     
                  </div>  
                  
                  <!-- password= cityslicka -->
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                      <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                  </div>
                  <div class="flex items-center justify-between">
                      
                      
                  </div>
                  
                    <button type="submit" class="w-full bg-blue-600 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                 
                  
                  
              </form>
          </div>
      </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from 'vue';
import axios from 'axios';
import  router  from '../routes/index.routes';
import  {useAuthStore} from '../store/authorization' 

   const authStore = useAuthStore();
   const email = ref('');
   const password = ref('');

 
   const login = async () => {
     try {
       const response = await axios.post('https://reqres.in/api/login', {
         email: email.value,
         password: password.value,
         

       });
       
       console.log('Inicio de sesión exitoso', response.data);
        authStore.setAuthenticated(true);
        router.push('/home');

        
     } catch (error) {
       console.error('Error al iniciar sesión', error);
        alert("Error Al iniciar sesion")
        
     }
   };

</script>

<style lang="scss" scoped>


</style>