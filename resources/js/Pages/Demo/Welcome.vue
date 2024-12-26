<template>
  <div>
    <h1>{{ title }}</h1>
    <p>This is my first Inertia + Vue component</p>
  </div>
</template>

<script setup>
defineProps({ title: String })
</script> 