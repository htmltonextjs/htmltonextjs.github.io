import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MMLab at CVPR 2025",
    description: "Multimedia Laboratory",
    keywords: ["CVPR 2025", "Event", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Image from 'next/image'
import Link from "next/link"
import { Slash } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import { FadeIn } from "@/components/animation/fade-in"



import { publications } from "@/data/publication"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "Research",
        url: "/research"
    },
    {
        path: "Event",
        url: "/research#event"
    },
]



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-48 pl-6 pr-6 flex flex-row justify-center bg-gradient-landing bg-fixed">
                <div className="w-full h-full max-w-7xl flex flex-col justify-end pb-10 gap-6">
                    <FadeIn>
                        <Breadcrumb>
                            <BreadcrumbList>
                                {paths.map((path) => (
                                    <BreadcrumbList key={path.path}>
                                        <BreadcrumbLink asChild>
                                            <Link href={path.url} className="text-white animated-underline hover:text-white">
                                                {path.path}
                                            </Link>
                                        </BreadcrumbLink>
                                        <BreadcrumbSeparator>
                                            <Slash className="text-white" />
                                        </BreadcrumbSeparator>
                                    </BreadcrumbList>
                                ))}
                            </BreadcrumbList>
                        </Breadcrumb>
                    </FadeIn>
                </div>
            </div>




            <div className="w-full pl-6 pr-6 flex justify-center 2xl:justify-evenly">



                {/* navigator */}
                <div className="w-48 hidden 3xl:block">
                    <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                        <Link className="select-none flex items-center gap-3 group" href="#competition">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Competition
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#workshop">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Workshop
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#tutorial">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Tutorial
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#paper">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Paper
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#service">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Service
                                </span>
                            </FadeIn>
                        </Link>
                    </div>
                </div>
                


                <div className="w-full max-w-7xl flex flex-col">


                    <div className="flex flex-row justify-between w-full xl:overflow-visible xl:h-[416px] gap-20">
                        <div className="pt-20 flex flex-col gap-6 flex-2/3">
                            <h1 className="font-bold text-t1">
                                <FadeIn>
                                    MMLab at CVPR 2025
                                </FadeIn>
                            </h1>
                            <h2 className="font-bold">
                                <FadeIn>
                                    June 11 - 15 2025<br></br>Nashville, USA
                                </FadeIn>
                            </h2>
                            <FadeIn>
                                <p>
                                    The <Link className="text-mred animated-underline" href="https://cvpr.thecvf.com/Conferences/2025" target="_blank">CVPR 2025</Link> is being held Wednesday, June 11th through Sunday June, 15th, 2025 at the Music City Center, Nashville TN, USA. MMLab at HKU will have a presence with active involvement in <b className="text-mred">xxx</b> competitions, workshops, and tutorials, and <b className="text-mred">xxx</b> papers being presented at the main conference.
                                </p>
                            </FadeIn>
                            <FadeIn>
                                <p>
                                    Many of the greatest ideas come from a diverse mix of minds, backgrounds, and experiences. We provide equal opportunities to all participants without regard to nationality, affiliation, race, religion, color, age, disability, or any other restriction. We believe diversity drives innovation. When we say we welcome participation from everyone, we mean everyone.
                                </p>
                            </FadeIn>
                        </div>
                        <div className="hidden xl:flex flex-col justify-end ">
                            <Image
                                src="https://ik.imagekit.io/mmlab/9wWMLO0JqHQ.jpg"
                                alt="Nashville"
                                width={352}
                                height={384}
                                className="object-cover object-center shadow-sm bg-gradient-loading select-none"
                            />
                        </div>
                    </div>



                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* competition */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#competition" className="scroll-mt-32 group flex items-center" id="competition">
                                    Competition
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    <FadeIn>
                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
                            <Link href="https://opendrivelab.com/challenge2025/" target="_blank" className="group">
                                <Card className="border-border rounded-none p-6 group-hover:border-mred group-hover:shadow-mred">
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-xl">Autonomous Grand Challenge 2025</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 text-mgray">
                                        <p>
                                            Organizer: <b>Hongyang Li</b>, <b>Yihang Qiu</b>
                                        </p>
                                    </CardContent>
                                    <div className="flex justify-end select-none group-hover:text-mred">
                                        More&nbsp;{'>'}
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    </FadeIn>




                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* workshop */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#workshop" className="scroll-mt-32 group flex items-center" id="workshop">
                                    Workshop
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    <FadeIn>
                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
                            <Link href="https://coop-intelligence.github.io/" target="_blank" className="group">
                                <Card className="border-border rounded-none p-6 group-hover:border-mred group-hover:shadow-mred">
                                    <CardHeader className="p-0">
                                        <CardDescription>June 12</CardDescription>
                                        <CardTitle className="text-xl">Multi-Agent Embodied Intelligent Systems Meet Generative-AI Era: Opportunities, Challenges and Futures</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 text-mgray">
                                        <p>
                                            Organizer: <b>Ping Luo</b>, <b>Haibao Yu</b>, <b>Yao Mu</b>, <b>Li Chen</b>
                                            <br></br>
                                            Speaker: <b>Hongyang Li</b>
                                        </p>
                                    </CardContent>
                                    <div className="flex justify-end select-none group-hover:text-mred">
                                        More&nbsp;{'>'}
                                    </div>
                                </Card>
                            </Link>
                            <Link href="https://opendrivelab.com/cvpr2025/workshop/" target="_blank" className="group">
                                <Card className="border-border rounded-none p-6 group-hover:border-mred group-hover:shadow-mred">
                                    <CardHeader className="p-0">
                                        <CardDescription>June 11</CardDescription>
                                        <CardTitle className="text-xl">Embodied Intelligence for Autonomous Systems on the Horizon</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 text-mgray">
                                        <p>
                                            Organizer: <b>Hongyang Li</b>
                                        </p>
                                    </CardContent>
                                    <div className="flex justify-end select-none group-hover:text-mred">
                                        More&nbsp;{'>'}
                                    </div>
                                </Card>
                            </Link>
                            <Link href="https://cvpr2025.wad.vision/" target="_blank" className="group">
                                <Card className="border-border rounded-none p-6 group-hover:border-mred group-hover:shadow-mred">
                                    <CardHeader className="p-0">
                                        <CardDescription>June 11</CardDescription>
                                        <CardTitle className="text-xl">Workshop on Autonomous Driving</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 text-mgray">
                                        <p>
                                            Speaker: <b>Hongyang Li</b>
                                        </p>
                                    </CardContent>
                                    <div className="flex justify-end select-none group-hover:text-mred">
                                        More&nbsp;{'>'}
                                    </div>
                                </Card>
                            </Link>
                            <Link href="https://wdfm-ad.github.io/" target="_blank" className="group">
                                <Card className="border-border rounded-none p-6 group-hover:border-mred group-hover:shadow-mred">
                                    <CardHeader className="p-0">
                                        <CardDescription>June 12</CardDescription>
                                        <CardTitle className="text-xl">Distillation of Foundation Models for Autonomous Driving</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 text-mgray">
                                        <p>
                                            Speaker: <b>Hongyang Li</b>
                                        </p>
                                    </CardContent>
                                    <div className="flex justify-end select-none group-hover:text-mred">
                                        More&nbsp;{'>'}
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    </FadeIn>


                    


                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* tutorial */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#tutorial" className="scroll-mt-32 group flex items-center" id="tutorial">
                                    Tutorial
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    <FadeIn>
                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
                            <Link href="https://opendrivelab.com/cvpr2025/tutorial/" target="_blank" className="group">
                                <Card className="border-border rounded-none p-6 group-hover:border-mred group-hover:shadow-mred">
                                    <CardHeader className="p-0">
                                        <CardDescription>June 12 | 202B</CardDescription>
                                        <CardTitle className="text-xl">Robotics 101: An Odyssey from A Vision Perspective</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 text-mgray">
                                        <p>
                                            Organizer: <b>Hongyang Li</b>
                                        </p>
                                    </CardContent>
                                    <div className="flex justify-end select-none group-hover:text-mred">
                                        More&nbsp;{'>'}
                                    </div>
                                </Card>
                            </Link>
                        </div>
                    </FadeIn>


                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* paper */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#paper" className="scroll-mt-32 group flex items-center" id="paper">
                                Paper
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    <FadeIn>
                        <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 mt-20">
                            {[...publications.values()].filter(publication => publication.proceedings.includes("CVPR 2025")).map((publication) => (
                                <FadeIn key={publication.title}>
                                    <Card className="border-border rounded-none">
                                        <CardHeader>
                                            <CardTitle className="text-xl">{publication.title}</CardTitle>
                                            <CardDescription>{publication.authors}</CardDescription>
                                        </CardHeader>
                                        <div className="flex flex-col lg:flex-row justify-between gap-3">
                                            <CardFooter className="flex flex-row gap-3 flex-wrap">
                                                {publication.links.map((link) => (
                                                    <Link href={link.url} target="_blank" className="animated-underline text-mred" key={link.website}>{link.website}</Link>
                                                ))} 
                                            </CardFooter>
                                            <CardFooter className="flex flex-row gap-1 text-mgray text-sm justify-end">
                                                <span>[</span>
                                                {publication.pis.map((pi, index) => (
                                                    <div key={pi}>
                                                        <Link href={"/about-us/#" + pi.toLowerCase().replace(/ /g, '_')} target="_self" className="animated-underline">{pi}</Link>
                                                        {index < publication.pis.length - 1 && (
                                                            <span className="select-none"> | </span>
                                                        )}
                                                    </div>
                                                ))} 
                                                <span>]</span>
                                            </CardFooter>
                                        </div>
                                    </Card>
                                </FadeIn>
                            ))}   
                        </div>
                    </FadeIn>



                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* service */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#service" className="scroll-mt-32 group flex items-center" id="service">
                                    Service
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                    </div>
                    <FadeIn>
                        <div className="mt-20">
                            <p>
                                Many team members make their contribution to CVPR 2025, altogether we are building a more professional community to shape the future of AI. We sincerely thank all for their service:
                            </p>
                            <ul className="mt-6 ml-6 space-y-6 list-outside list-disc">
                                <li>
                                    <b>Area Chair</b>: Ping Luo, Xihui Liu, Hongyang Li
                                </li>
                                <li>
                                    <b>Reviewer</b>: Li Chen, Chonghao Sima
                                </li>
                            </ul>
                        </div>
                    </FadeIn>
                    



                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                </div>



                <div className="w-48 hidden 3xl:block"></div>



            </div>



        </main>
    );
}
