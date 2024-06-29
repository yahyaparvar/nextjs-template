import React from 'react';
import WorkoutCard from '../../components/WorkoutCard';
import { BottomNavigation } from '@/src/app/components/BottomNavigation';
import { Inter } from 'next/font/google'; // Check if this import is correct as per your setup
import Link from 'next/link';

// Assuming Inter font is properly configured in your project
const inter = Inter({
    subsets: ['latin'],
    weight: '400'
});

export default function WorkoutPage() {
    // Replace this with actual workout data
    const sampleWorkout = {
        name: "Sample Workout",
        description: "This is a sample workout description.",
        duration: "30 minutes",
        difficulty: "Intermediate",
        imageUrl: 'https://media.licdn.com/dms/image/D5603AQF-lO9RiUnqJw/profile-displayphoto-shrink_800_800/0/1711788248350?e=1724889600&v=beta&t=cdSrg7oImqO8V7FtkTFsYGLVUXi2aFPnAjbPUJAwFoU'
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Link href="/dashboard/workout/start" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Start workout
            </Link>
            <WorkoutCard workout={sampleWorkout} />
            <WorkoutCard workout={sampleWorkout} />
            <WorkoutCard workout={sampleWorkout} />

            <BottomNavigation /> {/* Adjust props as needed */}
        </div>
    );
}
