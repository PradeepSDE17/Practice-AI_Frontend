<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-96">
      <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

      <form @submit.prevent="registerUser">
        <!-- Username -->
        <div class="mb-4">
          <label class="block text-gray-600 text-sm font-medium mb-2">Username</label>
          <input
            v-model="form.username"
            type="text"
            placeholder="Enter your username"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Email -->
        <div class="mb-4">
          <label class="block text-gray-600 text-sm font-medium mb-2">Email</label>
          <input
            v-model="form.email"
            type="email"
            placeholder="Enter your email"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Password -->
        <div class="mb-4">
          <label class="block text-gray-600 text-sm font-medium mb-2">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Enter your password"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Confirm Password -->
        <div class="mb-6">
          <label class="block text-gray-600 text-sm font-medium mb-2">Confirm Password</label>
          <input
            v-model="form.confirmpassword"
            type="password"
            placeholder="Confirm your password"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>

      <!-- Success/Error Message -->
      <p v-if="message" class="mt-4 text-center text-sm" :class="messageColor">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  username: "",
  email: "",
  password: "",
  confirmpassword: ""
});

const message = ref("");
const messageColor = ref("text-green-600");

const registerUser = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      message.value = "User registered successfully!";
      messageColor.value = "text-green-600";
      form.value = { username: "", email: "", password: "", confirmpassword: "" };
    } else {
      const error = await response.json();
      message.value = error.detail || "Something went wrong!";
      messageColor.value = "text-red-600";
    }
  } catch (err) {
    message.value = "Server not reachable!";
    messageColor.value = "text-red-600";
  }
};
</script>
