<script lang="ts" setup></script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col gap-2">
      <span>niTask</span>
      <UButton to="/api/auth/google" external label="Login" />
    </div>
  </div>
</template>
