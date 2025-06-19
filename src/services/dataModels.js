// This file shows what our data looks like

// What does ONE workout session look like?
export const sampleWorkout = {
    id: 'workout_2025_01_15_001',
    date: '2025-01-15',
    type: 'glutes', // or 'upper', 'legs', 'full-body'
    exercises: [
        {
            name: 'Hip Thrust',
            sets: [
                { reps: 12, weight: 135, rpe: 7, notes: 'felt strong' },
                { reps: 10, weight: 145, rpe: 8, notes: '' },
                { reps: 8, weight: 155, rpe: 9, notes: 'almost failed' }
            ]
        },
        {
            name: 'Bulgarian Split Squat',
            sets: [
                { reps: 12, weight: 25, rpe: 6, notes: 'left leg' },
                { reps: 12, weight: 25, rpe: 6, notes: 'right leg' }
            ]
        }
    ],
    notes: 'Great session overall, felt powerful',
    duration: 45 // minutes
}

// What does ONE measurement entry look like?
export const sampleMeasurement = {
    id: 'measurement_2025_01_15',
    date: '2025-01-15',
    measurements: {
        weight: 135,
        waist: 26,
        hips: 38,
        glutes: 40,
        leftThigh: 23,
        rightThigh: 23,
        leftArm: 11,
        rightArm: 11
    },
    notes: 'Morning measurement, fasted'
}

// What does cycle data look like?
export const sampleCycleData = {
    lastPeriodStart: '2025-01-10',
    averageCycleLength: 28,
    periodHistory: [
        { startDate: '2025-01-10', endDate: '2025-01-14' },
        { startDate: '2024-12-13', endDate: '2024-12-17' }
    ]
}