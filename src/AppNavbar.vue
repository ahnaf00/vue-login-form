<script setup>
</script>

<template>

   <nav class="flex sm:justify-center space-x-4 font-medium text-base py-2"> 
        <router-link class="nav-link text-gray-700" :to="{name:'home'}">Home</router-link>  
        <router-link class="nav-link text-gray-700" :to="{name:'about'}">About</router-link> 
        <router-link class="nav-link text-gray-700" :to="{name:'contact'}">Contact</router-link> 
        <router-link class="nav-link text-gray-700" :to="{name:'service'}">Service</router-link>
        <router-link class="nav-link text-gray-700" :to="{name:'login'}">Login</router-link>
        <router-link class="nav-link text-gray-700" :to="{name:'register'}">Register</router-link>
   </nav>
  
  <router-view/>
</template>

<style scoped></style>