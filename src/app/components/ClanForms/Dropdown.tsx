import React, { useState } from 'react';

// Dropdown component
export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="p-2 text-zinc-700 flex items-center justify-center">
      <button
        onClick={toggleDropdown}
        className="relative group transition-all duration-200 focus:overflow-visible w-max h-max p-2 overflow-hidden flex flex-row items-center justify-center bg-white gap-2 rounded-lg border border-zinc-200"
      >
        <span>Dropdown</span>
        <svg
          className={`rotate-90 ${isOpen ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m12 10.8l-3.9 3.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.6-4.6q.3-.3.7-.3t.7.3l4.6 4.6q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
          />
        </svg>
        {isOpen && (
          <div className="absolute shadow-lg -bottom-40 left-0 w-full h-max p-2 bg-white border border-zinc-200 rounded-lg flex flex-col gap-2">
            <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 5q-.425 0-.712-.288T11 4V2q0-.425.288-.712T12 1q.425 0 .713.288T13 2v2q0 .425-.288.713T12 5m4.95 2.05q-.275-.275-.275-.687t.275-.713l1.4-1.425q.3-.3.712-.3t.713.3q.275.275.275.7t-.275.7L18.35 7.05q-.275.275-.7.275t-.7-.275M20 13q-.425 0-.713-.288T19 12q0-.425.288-.712T20 11h2q.425 0 .713.288T23 12q0 .425-.288.713T22 13zm-8 10q-.425 0-.712-.288T11 22v-2q0-.425.288-.712T12 19q.425 0 .713.288T13 20v2q0 .425-.288.713T12 23M5.65 7.05l-1.425-1.4q-.3-.3-.3-.725t.3-.7q.275-.275.7-.275t.7.275L7.05 5.65q.275.275.275.7t-.275.7q-.3.275-.7.275t-.7-.275m12.7 12.725l-1.4-1.425q-.275-.3-.275-.712t.275-.688q.275-.275.688-.275t.712.275l1.425 1.4q.3.275.288.7t-.288.725q-.3.3-.725.3t-.7-.3M2 13q-.425 0-.712-.288T1 12q0-.425.288-.712T2 11h2q.425 0 .713.288T5 12q0 .425-.288.713T4 13zm2.225 6.775q-.275-.275-.275-.7t.275-.7L5.65 16.95q.275-.275.687-.275t.713.275q.3.3.3.713t-.3.712l-1.4 1.4q-.3.3-.725.3t-.7-.3M12 18q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18m0-2q1.65 0 2.825-1.175T16 12q0-1.65-1.175-2.825T12 8q-1.65 0-2.825 1.175T8 12q0 1.65 1.175 2.825T12 16m0-4"
                />
              </svg>
              <p>Light</p>
            </span>
            <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 21q-3.775 0-6.387-2.613T3 12q0-3.45 2.25-5.988T11 3.05q.325-.05.575.088t.4.362q.15.225.163.525t-.188.575q-.425.65-.638 1.375T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q.775 0 1.538-.225t1.362-.625q.275-.175.563-.162t.512.137q.25.125.388.375t.087.6q-.35 3.45-2.937 5.725T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75"
                />
              </svg>
              <p>Dark</p>
            </span>
            <span className="flex flex-row gap-2 items-center hover:bg-zinc-100 p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" stroke-width="4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19 32h10v9H19z" />
                  <rect width="38" height="24" x="5" y="8" rx="2" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M22 27h4M14 41h20" />
                </g>
              </svg>
              <p>System</p>
            </span>
          </div>
        )}
      </button>
    </main>
  );
};
