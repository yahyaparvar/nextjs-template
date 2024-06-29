import React from 'react';

interface Workout {
    name: string;
    description: string;
    duration: string;
    difficulty: string;
    imageUrl: string;
}

interface WorkoutCardProps {
    workout: Workout;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ workout }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-xs mx-auto my-2">
            <img className="object-cover w-full h-56" src={workout.imageUrl} alt={workout.name} />

            <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{workout.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{workout.description}</p>
                
                <div className="flex items-center mt-3">
                    <div className="flex items-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <span className="text-gray-600 text-sm ml-2">{workout.duration}</span>
                    </div>
                    <div className="flex items-center ml-4">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10a7 7 0 0 1-14 0m14 0a7 7 0 0 1-14 0m14 0c0-3.87-3.134-7-7-7s-7 3.13-7 7m14 0c0 3.87-3.134 7-7 7s-7-3.13-7-7"></path>
                        </svg>
                        <span className="text-gray-600 text-sm ml-2">{workout.difficulty}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkoutCard;
