import { QuestionMarkCircleIcon, TrophyIcon } from '@heroicons/react/24/outline'
import React from 'react'

const InfoSection = () => {
  return (
    <dl className="px-20 mt-10 flex flex-col gap-5">
                <div className="flex flex-col items-start">
                    <div className="rounded-md p-2 ring-1">
                        <TrophyIcon aria-hidden="true" className="size-6" />
                    </div>
                    <dt className="mt-4 text-base font-semibold">
                        Earn Points & Win!
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-500">
                        Answer questions correctly to earn points and climb the
                        leaderboard.
                    </dd>
                </div>
                <div className="flex flex-col items-start">
                    <div className="rounded-md p-2 ring-1">
                        <QuestionMarkCircleIcon
                            aria-hidden="true"
                            className="size-6"
                        />
                    </div>
                    <dt className="mt-4 text-base font-semibold">
                        Fun & Challenging Questions
                    </dt>
                    <dd className="mt-2 text-base/7 text-gray-500">
                        Test your knowledge with a variety of trivia questions
                        across multiple categories.
                    </dd>
                </div>
            </dl>
  )
}

export default InfoSection