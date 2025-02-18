"use client";
import { Link } from "@heroui/react"

const ResultsFooter = () => {
  return (
    <div className="bg-primary flex flex-col justify-center items-center gap-3 py-7 mt-14">
            <div className="flex gap-6">
                <Link href="#" className='text-white'>Privacy Policy</Link>
                <Link href="#" className='text-white'>Terms of Service</Link>
                <Link href="#" className='text-white'>Help</Link>
            </div>
        </div>
  )
}

export default ResultsFooter