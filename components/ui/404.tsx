'use client'



// import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'



import { FadeIn } from "@/components/animation/fade-in"



export default function NotFound404() {



    const pathname = usePathname()
    if (pathname.toLowerCase() == '/') {
        redirect('/legacy/index.html')
    }
    if (
        pathname.toLowerCase() == '/team' ||
        pathname.toLowerCase() == '/team/') {
        redirect('/legacy/team/index.html')
    }
    if (
        pathname.toLowerCase() == '/recruit' ||
        pathname.toLowerCase() == '/recruit/') {
        redirect('/legacy/recruit/index.html')
    }
    if (
        pathname.toLowerCase() == '/dataset' || 
        pathname.toLowerCase() == '/dataset/' ||
        pathname.toLowerCase() == '/datasets' ||
        pathname.toLowerCase() == '/datasets/') {
        redirect('/legacy/datasets/index.html')
    }
    if (
        pathname.toLowerCase() == '/publication' || 
        pathname.toLowerCase() == '/publication/' ||
        pathname.toLowerCase() == '/publications' ||
        pathname.toLowerCase() == '/publications/') {
        redirect('/legacy/publications/index.html')
    }
    if (
        pathname.toLowerCase() == '/event' || 
        pathname.toLowerCase() == '/event/' ||
        pathname.toLowerCase() == '/events' ||
        pathname.toLowerCase() == '/events/') {
        redirect('/legacy/events/index.html')
    }
    // project
    if (pathname.toLowerCase().startsWith('/mpi')) {
        redirect('/legacy/MPI/index.html')
    }
    if (pathname.toLowerCase().startsWith('/vista')) {
        redirect('/legacy/Vista/index.html')
    }
    if (pathname.toLowerCase().startsWith('/drivelm')) {
        redirect('/legacy/DriveLM/index.html')
    }
    if (pathname.toLowerCase().startsWith('/nexus')) {
        redirect('/legacy/Nexus/index.html')
    }
    if (pathname.toLowerCase().startsWith('/robodual')) {
        redirect('/legacy/RoboDual/index.html')
    }
    if (pathname.toLowerCase().startsWith('/elm')) {
        redirect('https://opendrivelab.github.io/elm.github.io/')
    }
    // misc.
    if (pathname.toLowerCase().startsWith('/lihongyang')) {
        redirect('https://lihongyang.info/')
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
