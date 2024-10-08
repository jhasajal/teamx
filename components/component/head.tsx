/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/zPWEdfgCLTH
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import '../../app/globals.css'

function header() {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between p-4 bg-white border-b">
        <div className="flex items-center space-x-4">
          <img
            src="https://it.delhi.gov.in/sites/default/files/logo/emblem-dark-logo_5.png"
            alt="Logo"
            className="h-12"
            width="28"
            height="25"
            style={{ aspectRatio: "50/50", objectFit: "cover" }}
          />
          <div>
            <h1 className="text-xl font-bold">Smart Classroom Management System</h1>
            <p className="text-sm">Government of NCT of Delhi</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
        <Link href="/demo" prefetch={true}><Button className="bg-[#099610] text-white ">Demo</Button></Link>
        
          <Button className="bg-yellow-500 text-white">Login</Button>
          <Select>
            <SelectTrigger className="text-white bg-blue-900">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </header>
      <nav className="flex flex-col items-center justify-between p-4 bg-[#084c9d] text-[#ffffff]">
        <div className="flex space-x-4">
          <Link href="/" prefetch={true}>
            Home
          </Link>
          <Link href="/about" prefetch={true}>
            About Us
          </Link>
          <Link href="/docs" prefetch={true}>
            Documents
          </Link>
          <Link href="/media" prefetch={true}>
            Media
          </Link>
          <Link href="#" prefetch={true}>
            Upcoming
          </Link>
          <Link href="/faq" prefetch={true}>
            FAQs
          </Link>
        </div>

        
      </nav>
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
export default header;
