import React from 'react'

const page = () => {
  return (
    <div><figure className ="md:flex bg-green-200 rounded-x5 p-8 md:p-0 dark:bg-blue-400">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-full mx-auto" src="/image-4.jpg" alt="" width="384" height="512"/>
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-full mx-RIGHT" src="/image-5.jpg" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “As a farmer, I take pride in working the land, nurturing the soil, and cultivating life. With every sunrise, I tend to my crops with care and dedication, watching them grow and flourish under my hands. The rhythms of nature guide my days, from the planting of seeds to the harvest of fruits. I find joy in the simple, yet profound, act of coaxing sustenance from the earth, and I am grateful for the opportunity to live in harmony with the natural world, providing for my community and leaving a lasting legacy on the land I love.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          IBRAHIM CHEEMA
        </div>
        <div className="text-red-400 dark:text-slate-500">
          RAHIMYARKAHN
        </div>
      </figcaption>
    </div>
  </figure>
      
    </div>
  )
}

export default page
