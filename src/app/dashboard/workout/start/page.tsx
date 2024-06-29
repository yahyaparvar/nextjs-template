'use client'

import React, { useState } from 'react';
import { randInt } from 'three/src/math/MathUtils.js';

// Define a type for Workout data
type Workout = {
    id: number;
    name: string;
    description: string;
};

const workoutsData: Workout[] = [
    { id: 1, name: 'Push-ups', description: 'Do 3 sets of 15 push-ups.' },
    { id: 2, name: 'Squats', description: 'Do 3 sets of 20 squats.' },
    { id: 3, name: 'Plank', description: 'Hold a plank position for 1 minute.' },
    // Add more workouts as needed
];

export default function WorkoutSelectionPage() {
    const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);

    let fuckme = randInt(0, 100)
    const handleStartWorkout = (workout: Workout) => {
        // Implement logic to start the selected workout
        console.log(`Starting workout: ${workout.name}`);
        setSelectedWorkout(workout); // For demonstration, set the selected workout
        
    };




    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-800 py-6 px-4 sm:px-6 lg:px-8">
            <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                <div className="bg-blue-500 text-white py-1 text-center" style={{ width: {fuckme} + '%' }}>
                    <span className="text-xs font-semibold">{fuckme}</span>
                </div>
            </div>
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-6">Choose a Workout</h1>
                <ul className="grid gap-6 sm:grid-cols-2">
                    {workoutsData.map((workout) => (
                        <li key={workout.id} className="rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-700">
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{workout.name}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{workout.description}</p>
                                <button
                                    onClick={() => handleStartWorkout(workout)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800"
                                >
                                    Start Workout
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                {selectedWorkout && (
                    <div className="mt-6 rounded-lg shadow-md overflow-hidden bg-white dark:bg-gray-700">
                        <div className="p-4">
                            <h2 className="text-2xl font-bold mb-2">Current Workout: {selectedWorkout.name}</h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedWorkout.description}</p>
                            {/* Include timer or workout progress components here */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
