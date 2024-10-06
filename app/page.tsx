import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import './globals.css'
import Head from '../components/component/head'
import Foot from '../components/component/footer'

export function landing() {
  return (
    <div className="w-full">
      <Head />
      {/* page1 */}
      <main className="relative">
        <img
          src="./assets/school.png"
          alt="Banner"
          className="w-full object-cover"
          style={{ aspectRatio: "16/6" }}
        />
        <div className="absolute bottom-4 left-4 text-white">
          <h2 className="text-3xl font-bold">Welcome to</h2>
          <h3 className="text-2xl font-bold text-yellow-400">SCRM</h3>
        </div>
        
      </main>

      {/* page2 */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#d5ecfa]">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Smart Classroom Management Software</h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          The Smart Classroom Management Software (SCMS) represents a revolutionary approach to classroom management and student engagement by integrating advanced machine learning, IoT, and real-time video analytics. The system’s ability to detect emotional distress, monitor teacher performance, and ensure classroom safety makes it a comprehensive tool for modern educational settings. Its cost-effectiveness, scalability, and ability to provide personalized insights for both students and teachers make it an innovative solution that caters to the dynamic needs of today’s classrooms.
          </p>

          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center text-white rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
            prefetch={true}
          >
            Learn More
          </Link>
        </div>
        <img
          src="./assets/scms1.png"
          width="600"
          height="500"
          alt="Platform Overview"
          className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-fit object-center sm:w-full"
        />
      </div>
    </section>
    <Foot />
    </div>
  )
  function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    )
  }
}
export default landing;