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
    // challenge
    if (
        pathname.toLowerCase().startsWith('/AD23Challenge') || 
        pathname.toLowerCase() == '/challenge2023/') {
        redirect('/legacy/challenge2023/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/cvpr2024/challenge') || 
        pathname.toLowerCase() == '/challenge2024/') {
        redirect('/legacy/challenge2024/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/challenge2025/temp') || 
        pathname.toLowerCase() == '/challenge2025/'
    ) {
        redirect('/legacy/challenge2025/index.html')
    }
    // workshop / tutorial
    if (
        pathname.toLowerCase().startsWith('/event/iclr23_ADworkshop') || 
        pathname.toLowerCase().startsWith('/sr4ad/iclr23') || 
        pathname.toLowerCase() == '/iclr2023/workshop/') {
        redirect('/legacy/iclr2023/workshop/index.html')
    }
    if (
        pathname.toLowerCase().startsWith('/event/cvpr23_ADworkshop') ||
        pathname.toLowerCase() == '/e2ead/cvpr23' ||
        pathname.toLowerCase() == '/e2ead/cvpr23/' || 
        pathname.toLowerCase() == '/cvpr2023/workshop/') {
        redirect('/legacy/cvpr2023/workshop/index.html')
    }
    if (pathname.toLowerCase().startsWith('/valse2024')) {
        redirect('/legacy/valse2024/workshop/index.html')
    }
    // misc.
    if (pathname.toLowerCase().startsWith('/lihongyang')) {
        redirect('https://lihongyang.info/')
    }
    if (
        pathname.toLowerCase().startsWith('/e2ead/cvpr23_CN') || 
        pathname.toLowerCase() == '/event2023/') {
        redirect('/legacy/event2023/index.html')
    }
        if (pathname.toLowerCase() == '/event2024/') {
        redirect('https://starleague.ai/event2024/')
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
