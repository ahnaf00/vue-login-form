<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
// import AppNavbar from './AppNavbar.vue';
// import AppNavbar from './AppNavbar.vue';

const router    = useRouter();
const data      = reactive({});
const message   = ref();

const register = () => {
  if (
        data.username.trim() === "" ||
        data.email.trim() === "" ||
        data.password.trim() === "" ||
        data.rePassword.trim() === ""
    ) {
        message.value = "Please fill in all fields";
        return;
    }

  if (data.password !== "" && data.rePassword !== "" && data.password === data.rePassword) {
    const usersJSON = localStorage.getItem("users");
    const users = usersJSON ? JSON.parse(usersJSON) : [];

    const existingUsername = users.find((user) => user.username === data.username);
    if (existingUsername) {
      message.value = "Username already exists";
      return;
    }

    const newUser = {
      username: data.username,
      email: data.email,
      password: data.password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    data.username   = "";
    data.email      = "";
    data.password   = "";
    data.rePassword = "";

    router.push("login");
  } else {
    message.value = "Password didn't match";
  }
}

const login = () => {
    router.push({name:'login'});
}
</script>


<template>
    <section class="flex h-screen w-full">
        <div class="w-1/2" style="background-image: url(https://images.unsplash.com/photo-1690555575753-7aa27df96b52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80); background-repeat: no-repeat; background-size: cover;">
        <h1 class="mb-5 text-2xl mt-10 ml-10 text-white">Kosmos!</h1>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center bg-gray-200">
        <h2 class="mb-5 text-xl font-bold">Register</h2>
        <div class="w-full max-w-xs">
            <!-- Form starts -->

            <div role="alert"><pre class="bg-red-500 text-white font-bold rounded-t px-4 py-2">{{ message }}</pre></div>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Username
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" v-model="data.username">
                </div>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                        Email
                    </label>
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="email" v-model="data.email">
                </div>
                <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                        Password
                    </label>
                    <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" v-model="data.password">

                    <label class="block text-gray-700 text-sm font-bold mb-2" for="rePassword">
                        Re-Type Password
                    </label>
                    <input class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="rePassword" type="password" placeholder="******************" v-model="data.rePassword">
                <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
                </div>
                <div class="flex items-center justify-between">
                <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="register" type="button">
                    Registe
                </button>
                <button class="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="login" type="button">
                    Login
                </button>
                </div>
            </form>   
            <!-- Form Ends -->
            <p class="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
            </p>
        </div>
        </div>
    </section>
 
   
</template>