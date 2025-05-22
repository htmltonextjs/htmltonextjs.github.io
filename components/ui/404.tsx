'use client'



// import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'



import { FadeIn } from "@/components/animation/fade-in"



export default function NotFound404() {



    const pathname = usePathname()
    if (pathname.toLowerCase() == '/') {
        redirect('/legacy/index.html')
    }
    if (pathname.toLowerCase().startsWith('/mpi')) {
        redirect('/legacy/MPI/index.html')
    }
    



    return (
        <main>
            <div className="w-full h-svh flex flex-row justify-center items-center pl-6 pr-6 bg-gradient-loading">
                <div className="w-full max-w-7xl flex flex-col gap-6 select-none">
                    <FadeIn>
                        <h1 className="font-bold text-t0 text-white">
                            404
                        </h1>
                    </FadeIn>
                    <FadeIn>
                        <h1 className="font-bold text-t0 text-white">
                            Not Found
                        </h1>
                    </FadeIn>
                    {/* <Link href="/" className='font-bold text-white animated-underline'>
                        return home
                    </Link> */}
                </div>
            </div>
        </main>
    )
}
