import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import InterviewCard from '@/components/interviewCard'
import { dummyInterviews } from '@/constants'

const page = () => {
  return (
    <>

    <section className='card-cta '>
      <div className="flex flex-col gap-6  text-center items-center">
        <h2>Get interview ready with AI</h2>
        <p className='text-lg'>Practice real time and get instant Feedback</p>

        <Button asChild className='btn-primary max-sm:w-full'>
          <Link href={'/interview'}>Start an Interview</Link>
        </Button>
      </div>
      <Image src="/robot.png" alt='robo guy' width={400} height={400} className='max-sm:hidden'/>
    </section>


    <section className='flex flex-col gap-6 mt-8'>
      <h2>Your interviews</h2>

      <div className="interviews-section">
        {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>)
        )}
      </div>

      <div className="flex flex-col gap-6 mt-8">
        <h2>Take an interview</h2>

        <div className="interviews-section">
             {dummyInterviews.map((interview)=>(
          <InterviewCard {...interview} key={interview.id}/>)
        )}
          {/* <p>There are no interviews available yet</p> */}
        </div>
      </div>

    </section>
    </>
  )
}

export default page