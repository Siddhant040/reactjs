import React from 'react'

export default function (props) {
    console.log(props)
//     {
//     id: 4,
//     title: "In Progress",
//     value: "66%",
//     icon: Loader,
//     color: "bg-purple-500"
//   }
const { id, title, value, icon: Icon, color } = props
  return (
       <div className="
      flex
      w-50
      bg-[#111827]
      p-4
      rounded-2xl
      border border-white/5
      
    ">

      <div className="flex items-center gap-6 justify-between">

        <div>

          <p className="text-gray-400">
            {title}
          </p>

          <h2 className="text-white text-2xl font-semibold">
            {value}
          </h2>

        </div>

        {/* icon container */}
        <div className={`${color} p-3 rounded-xl`}>

          <Icon
            size={20}
            className="text-white"
          />

        </div>

      </div>

    </div>
  )
}

