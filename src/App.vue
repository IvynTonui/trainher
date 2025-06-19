<template>
  <div>
    <h1>🍑 TrainHer</h1>

    <!-- Simple navigation -->
    <nav>
      <button @click="currentView = 'workout'">Workouts</button>
      <button @click="currentView = 'measurements'">Measurements</button>
      <button @click="currentView = 'cycle'">Cycle</button>
    </nav>

    <!-- Show different components based on what's selected -->
    <main>
      <WorkoutLogger v-if="currentView === 'workout'" />
      <MeasurementTracker v-if="currentView === 'measurements'" />
      <CycleTracker v-if="currentView === 'cycle'" />
    </main>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import WorkoutLogger from './components/workout/WorkoutLogger.vue'
import MeasurementTracker from './components/measurements/MeasurementTracker.vue'
import CycleTracker from './components/cycle/CycleTracker.vue'
import {storageService} from "@/services/storageService.js";

// This controls which section is shown
const currentView = ref('workout')


// Load data when app starts
onMounted(() => {
  const existingWorkouts = storageService.loadWorkouts()
  console.log('App started. Existing workouts:', existingWorkouts)
})
</script>

<style>
nav {
  margin: 20px 0;
}

button {
  margin-right: 10px;
  padding: 10px 15px;
  background: #ff69b4;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background: #ff1493;
}
</style>