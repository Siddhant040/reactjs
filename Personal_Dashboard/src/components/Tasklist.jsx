// import React from 'react'

export default function Tasklist() {
    return (
        <div className="
            bg-[#1f2937]
            rounded-3xl
            p-6
            flex flex-col
            h-full
        ">

            {/* Top Section */}
            <div className="flex items-center justify-between mb-5">

                <h1 className="text-5xl text-white font-semibold">
                    Task
                </h1>

                <button className="
                    bg-blue-500
                    hover:bg-blue-600
                    transition
                    text-white
                    py-2 px-5
                    rounded-full
                ">
                    Add Task
                </button>

            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3 mb-5">

                <button className="
                    bg-blue-500
                    text-white
                    px-4 py-2
                    rounded-xl
                    text-sm
                ">
                    All
                </button>

                <button className="
                    bg-[#374151]
                    text-gray-300
                    px-4 py-2
                    rounded-xl
                    text-sm
                ">
                    Pending
                </button>

                <button className="
                    bg-[#374151]
                    text-gray-300
                    px-4 py-2
                    rounded-xl
                    text-sm
                ">
                    Completed
                </button>

            </div>

            {/* Scrollable Task List */}
            <div className="
                flex-1
                overflow-y-auto
                pr-2
                space-y-4
            ">

                {/* Task Card */}
                <div className="
                    bg-[#374151]
                    rounded-2xl
                    p-4
                    flex items-center justify-between
                ">

                    {/* Left */}
                    <div>

                        <h2 className="text-white font-medium">
                            Design Dashboard UI
                        </h2>

                        <p className="text-gray-400 text-sm mt-1">
                            Web Design
                        </p>

                    </div>

                    {/* Right */}
                    <span className="
                        bg-red-500/20
                        text-red-400
                        text-xs
                        px-3 py-1
                        rounded-full
                    ">
                        High
                    </span>

                </div>

                {/* Task Card */}
                <div className="
                    bg-[#374151]
                    rounded-2xl
                    p-4
                    flex items-center justify-between
                ">

                    <div>

                        <h2 className="text-white font-medium">
                            Build Login System
                        </h2>

                        <p className="text-gray-400 text-sm mt-1">
                            Development
                        </p>

                    </div>

                    <span className="
                        bg-yellow-500/20
                        text-yellow-400
                        text-xs
                        px-3 py-1
                        rounded-full
                    ">
                        Medium
                    </span>

                </div>

                {/* Task Card */}
                <div className="
                    bg-[#374151]
                    rounded-2xl
                    p-4
                    flex items-center justify-between
                ">

                    <div>

                        <h2 className="text-white font-medium">
                            Fix Sidebar Layout
                        </h2>

                        <p className="text-gray-400 text-sm mt-1">
                            Frontend
                        </p>

                    </div>

                    <span className="
                        bg-green-500/20
                        text-green-400
                        text-xs
                        px-3 py-1
                        rounded-full
                    ">
                        Low
                    </span>

                </div>

                {/* Task Card */}
                <div className="
                    bg-[#374151]
                    rounded-2xl
                    p-4
                    flex items-center justify-between
                ">

                    <div>

                        <h2 className="text-white font-medium">
                            Connect Backend API
                        </h2>

                        <p className="text-gray-400 text-sm mt-1">
                            Backend
                        </p>

                    </div>

                    <span className="
                        bg-red-500/20
                        text-red-400
                        text-xs
                        px-3 py-1
                        rounded-full
                    ">
                        High
                    </span>

                </div>

                {/* Task Card */}
                <div className="
                    bg-[#374151]
                    rounded-2xl
                    p-4
                    flex items-center justify-between
                ">

                    <div>

                        <h2 className="text-white font-medium">
                            Add Calendar Widget
                        </h2>

                        <p className="text-gray-400 text-sm mt-1">
                            UI Feature
                        </p>

                    </div>

                    <span className="
                        bg-yellow-500/20
                        text-yellow-400
                        text-xs
                        px-3 py-1
                        rounded-full
                    ">
                        Medium
                    </span>

                </div>

            </div>

        </div>
    )
}