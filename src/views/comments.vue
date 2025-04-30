<template>
<p>{{  }}</p>
</template>
<script lang="ts" setup name="Comments">
import { reactive } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
const route = useRoute();

console.log(route);
</script>
<style>

</style>