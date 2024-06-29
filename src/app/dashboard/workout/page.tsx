'use client'

import React, { useState } from 'react';
import { randInt } from 'three/src/math/MathUtils.js';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Press_Start_2P } from 'next/font/google'
import { Progressbar } from '../../components/Progressbar'
const pressStart2P = Press_Start_2P({
  subsets: ['latin'],
  weight: '400'
})

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
    { id: 3, name: 'Sit-ups', description: 'Do 3 sets of 15 sit-ups.' },
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
        <div>
            <div className="text-center w-full bg-black-200 rounded-lg overflow-hidden">
                <span className={`text-center text-7xl font-extrabold leading-tight ${pressStart2P.className} bg-span-bg bg-clip-text text-transparent bg-black`}>
                    workouts
                </span>
                {/* <div className="bg-blue-500 text-white py-1 text-center" style={{ width: {fuckme} + '%' }}>
                    <span className="text-xs font-semibold">{fuckme}</span>
                </div> */}
            </div>
            <div className="max-w-3xl mx-auto">
                {/* <h1 className="text-3xl font-bold text-center mb-6">Choose a Workout</h1> */}
                <h1 className={`text-center text-xl font-extrabold leading-tight pt-4 pb-8 pl-6 pr-6 ${pressStart2P.className} bg-span-bg bg-clip-text text-white bg-black`}>
                    Choose a Workout
                </h1>

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
                <div className="text-center">
                    <button
                        // onClick={() => handleStartWorkout(workout)}
                        className="text-center bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition duration-300 mt-10 text-lg"
                    >
                        End Workout
                    </button>
                    <h1 className={`pt-12 text-center text-2xl font-extrabold leading-tight pt-4 pb-8 pl-6 pr-6 ${pressStart2P.className} bg-span-bg bg-clip-text text-white bg-black`}>
                        Current Level: 10
                     </h1>
                </div>
                <Progressbar/>
            </div>
            <BottomNavigation/>
        </div>
    );
}
