/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0pl50xXM4wZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger } from "@/components/ui/select"
import { SelectContent, SelectItem, SelectValue } from "@radix-ui/react-select"
import Link from "next/link"
import { SVGProps } from "react"
import { FaGithub } from "react-icons/fa";
import Head from '../../components/component/head'

export default function Component() {
  return (

    <div> 
      <Head />
    <div className="w-full">
      <section className="w-full py-12 md:py-24 lg:py-8">
        <div className="container px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">Meet the Team</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-[#084c9d]">
              Our talented team is dedicated to delivering exceptional results.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            <div id="Sajal" className="group relative overflow-hidden rounded-lg">
              <img
                src="./assets/Sajal.jpg"
                width={300}
                height={400}
                alt="Sajal Jha"
                className="h-[300px] w-full object-cover transition-all duration-300 group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <Link href="https://github.com/Sajaljha09" target="_blank" className="text-white hover:text-primary" prefetch={true}>
                    <FaGithub className="h-6 w-6"  />
                  </Link>
                  <Link href="https://www.linkedin.com/in/sajal-jha-52a050256/" target="_blank" className="text-white hover:text-primary" prefetch={true}>
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.instagram.com/sajaljha_/" target="_blank" className="text-white hover:text-primary" prefetch={true}>
                    <InstagramIcon className="h-6 w-6" />
                  </Link>
                </div>
                <div className="mt-4 text-white flex flex-col items-center justify-center ">
                  <h3 className="text-lg font-bold ">Sajal Jha</h3>
                  <p className="text-sm font-semibold">Team Leader <br /> FrontEnd Dev</p>
                </div>
              </div>
            </div>
            <div id="Harshit" className="group relative overflow-hidden rounded-lg">
              <img
                src="./assets/harshit.jpg"
                width={300}
                height={300}
                alt="Harhsit"
                className="h-[300px] w-full object-cover transition-all duration-300 group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <Link href="https://github.com/UxHarshit" target="_blank" className="text-white hover:text-primary" prefetch={true}>
                    <FaGithub className="h-6 w-6"  />
                  </Link>
                  <Link href="https://www.linkedin.com/in/harshit-katheria/" target="_blank" className="text-white hover:text-primary" prefetch={true}>
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link href="#" target="_blank" className="text-white hover:text-primary" prefetch={true}>
                    <InstagramIcon className="h-6 w-6" />
                  </Link>
                </div>
                <div className="mt-4 text-white flex flex-col items-center justify-center">
                  <h3 className="text-lg font-bold">Harshit Katheria</h3>
                  <p className="text-sm font-semibold">BackEnd Dev</p>
                </div>
              </div>
            </div>
            <div id="Pratibha" className="group relative overflow-hidden rounded-lg">
              <img
                src="./assets/pratibha.jpg"
                width={300}
                height={400}
                alt="Pratibha"
                className="h-[300px] w-full object-cover transition-all duration-300 group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <Link href="#" className="text-white hover:text-primary" prefetch={true}>
                    <FaGithub className="h-6 w-6"  />
                  </Link>
                  <Link href="#" className="text-white hover:text-primary" prefetch={true}>
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link href="#" className="text-white hover:text-primary" prefetch={true}>
                    <InstagramIcon className="h-6 w-6" />
                  </Link>
                </div>
                <div className="mt-4 text-white flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold">Prtibha Naulakha</h3>
                  <p className="text-sm">Presenter <br /> </p>
                </div>
              </div>
            </div>
            <div id="Harsh" className="group relative overflow-hidden rounded-lg">
              <img
                src="./assets/harsh.jpg"
                width={300}
                height={400}
                alt="Harsh"
                className="h-[300px] w-full object-cover transition-all duration-300 group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <Link href="https://github.com/Zyrus-47" className="text-white hover:text-primary" prefetch={true}>
                    <FaGithub className="h-6 w-6"  />
                  </Link>
                  <Link href=" https://www.linkedin.com/in/harsh-raj-9b4443182" className="text-white hover:text-primary" prefetch={true}>
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.instagram.com/iharsh_47?igsh=ZnQzbmJ2dWVmOHhw " className="text-white hover:text-primary" prefetch={true}>
                    <InstagramIcon className="h-6 w-6" />
                  </Link>
                </div>
                <div className="mt-4 text-white flex items-center flex-col justify-center">
                  <h3 className="text-lg font-semibold">Harsh Raj</h3>
                  <p className="text-sm">Presenter <br />Editor</p>
                </div>
              </div>
            </div>
            <div id="Aanchal" className="group relative overflow-hidden rounded-lg">
              <img
                src="./assets/aanchal.jpg"
                width={300}
                height={400}
                alt="Aanchal Bhargava"
                className="h-[300px] w-full object-cover transition-all duration-300 group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <Link href="https://github.com/aancha2124" className="text-white hover:text-primary" prefetch={true}>
                    <FaGithub className="h-6 w-6"  />
                  </Link>
                  <Link href="https://www.linkedin.com/in/aanchal-bhargava-7306172a3/" className="text-white hover:text-primary" prefetch={true}>
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                  <Link href="https://www.instagram.com/aanchal._.21_/" className="text-white hover:text-primary" prefetch={true}>
                    <InstagramIcon className="h-6 w-6" />
                  </Link>
                </div>
                <div className="mt-4 text-white flex flex-col items-center justify-center">
                  <h3 className="text-lg font-bold">Aanchal Bhargava</h3>
                  <p className="text-sm font-semibold"> GFX & VFX Editor</p>
                </div>
              </div>
            </div>
            <div id="Pari" className="group relative overflow-hidden rounded-lg">
              <img
                src="./assets/pari.jpg"
                width={300}
                height={400}
                alt="pari"
                className="h-[300px] w-full object-cover transition-all duration-300 group-hover:scale-110"
                style={{ aspectRatio: "300/300", objectFit: "cover" }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-4">
                  <Link href="https://github.com/Parikatariya10" className="text-white hover:text-primary" prefetch={true}>
                    <FaGithub className="h-6 w-6"  />
                  </Link>
                  <Link href="https://www.linkedin.com/in/pari-katariya-aa75382aa" className="text-white hover:text-primary" prefetch={true}>
                    <LinkedinIcon className="h-6 w-6" />
                  </Link>
                </div>
                <div className="mt-4 text-white flex flex-col items-center justify-center">
                  <h3 className="text-lg font-bold">Pari</h3>
                  <p className="text-sm font-semibold">Data Analyist</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </div>
    </div>
  )
}

function GitlabIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
    </svg>
  )
}


function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}


function LinkedinIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}