import React from 'react'
import Image from 'next/image'
const page = () => (
  <div><figure className="md:flex bg-blue-200 rounded-x5s p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-100 h-100 md:w-48 md;h-auto md:rounded full rounded-full mx auto"src="/image-5.jpg"alt=""width="384"height="412"/>
    Here's a sample contact paragraph:


"Get in touch with me:


Phone: 0312-1234567
Email: example@email.com
Location: Rahim Yar Khan, Punjab, Pakistan
Available: 9am - 5pm (PKT)


Feel free to reach out to discuss your queries, collaborate, or simply say hello!"

    <div className="pt-7 space-y-4">
      <blockquote>
        <p className="text-lg font-large">
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