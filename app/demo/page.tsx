/**
 * v0 by Vercel.
 * @see https://v0.dev/t/iFyEACoyk7i
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Component() {
  return (
    <div>
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
    <main className="container mx-auto py-12 px-8 sm:px-8 lg:px-40">
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="./placeholder.svg"
            width="400"
            height="200"
            alt="Card Image"
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "400/200", objectFit: "cover" }}
          />
          <div className="p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">Face Recognition</h3>
            <p className="text-gray-600 mb-4">
              This is the description for the first card. It can contain information about the product or service.
            </p>
            <Link
            href=""
            className="inline-flex h-10 items-center justify-center text-white rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
            prefetch={true}
          >
            Learn More
          </Link>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img
            src="./placeholder.svg"
            width="1080"
            height="720"
            alt="Card Image"
            className="w-full h-48 object-cover"
            style={{ aspectRatio: "16/9", objectFit: "cover" }}
          />
          <div className="p-6 bg-white">
            <h3 className="text-xl font-bold mb-2">Dashboard</h3>
            <p className="text-gray-600 mb-4">
              This is the description for the second card. It can contain information about the product or service.
            </p>
            <Link
            href="./dashboard"
            className="inline-flex h-10 items-center justify-center text-white rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
            prefetch={true}
          >
            Learn More
          </Link>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}