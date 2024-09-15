import React from 'react'
import Image from 'next/image'
const page = () => (
  <div><figure className="bg-blue-200 rounded-x5s p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-40 h-40 rounded-full not-rounded" src="/image1.jpg" alt="" width="500" height="700" />
    <div className="pt-5 space-y-4">
      <blockquote>
        <p className="text-lg font-large">
          "My house is cozy and comfortable place where I live with my family. It's a two-story building with a bright red door and a beautiful garden in the front. The moment I step inside, I feel a sense of warmth and happiness.

The living room is my favorite place in the house, with its soft couches and big windows that let in plenty of sunlight. We spend most of our evenings there, watching TV or chatting together."
        </p>
      </blockquote>
      <figcaption className="font-small">
        <div className="text-black-200 dark:text-blue-200">
          M Ibrahim Cheema
        </div>
        <div className="text-green-700 dark:text-green-700">
          From Rahimyarkhan
      </div>
  </figcaption>
  </div>
  </figure>
  </div>
  )


export default page