// Keys for storing different types of data
const STORAGE_KEYS = {
    WORKOUTS: 'glutelog_workouts',
    MEASUREMENTS: 'glutelog_measurements',
    CYCLE_DATA: 'glutelog_cycle_data'
}

export const storageService = {
    // WORKOUT functions
    saveWorkouts(workouts) {
        try {
            localStorage.setItem(STORAGE_KEYS.WORKOUTS, JSON.stringify(workouts))
            return true
        } catch (error) {
            console.error('Failed to save workouts:', error)
            return false
        }
    },

    loadWorkouts() {
        try {
            const stored = localStorage.getItem(STORAGE_KEYS.WORKOUTS)
            return stored ? JSON.parse(stored) : []
        } catch (error) {
            console.error('Failed to load workouts:', error)
            return []
        }
    },

    // MEASUREMENT functions
    saveMeasurements(measurements) {
        try {
            localStorage.setItem(STORAGE_KEYS.MEASUREMENTS, JSON.stringify(measurements))
            return true
        } catch (error) {
            console.error('Failed to save measurements:', error)
            return false
        }
    },

    loadMeasurements() {
        try {
            const stored = localStorage.getItem(STORAGE_KEYS.MEASUREMENTS)
            return stored ? JSON.parse(stored) : []
        } catch (error) {
            console.error('Failed to load measurements:', error)
            return []
        }
    },

    // CYCLE DATA functions
    saveCycleData(cycleData) {
        try {
            localStorage.setItem(STORAGE_KEYS.CYCLE_DATA, JSON.stringify(cycleData))
            return true
        } catch (error) {
            console.error('Failed to save cycle data:', error)
            return false
        }
    },

    loadCycleData() {
        try {
            const stored = localStorage.getItem(STORAGE_KEYS.CYCLE_DATA)
            return stored ? JSON.parse(stored) : null
        } catch (error) {
            console.error('Failed to load cycle data:', error)
            return null
        }
    }
}