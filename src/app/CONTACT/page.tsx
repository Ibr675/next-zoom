import React from 'react'
import Image from 'next/image'
const page = () => (
  <div><figure className="bg-blue-200 rounded-x5s p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-100 h-100 md:w-48 md;h-auto md:rounded full rounded-full mx auto"src="/image.3.jpg"alt=""width="384"height="412"/>
    <div className="pt-7 space-y-4">
      <blockquote>
        <p className="text-lg font-large">
          "I can assist you in my Rahimyarkhan  i am available between 6am to 9am if you have any sort of problem can physically meet me betweeen the give time ."
        </p>
      </blockquote>
      <figcaption className="font-large">
        <div className="text-black-200 dark:text-blue-200">
          M Ibrahim Cheema
        </div>
        <div className="text-green-700 dark:text-green-700">
          From Rahimyarkhancd
      </div>
  </figcaption>
  </div>
  </figure>
  </div>
  )


export default page