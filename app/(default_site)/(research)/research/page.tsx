import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Research | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Research", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Link from "next/link"
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"



import { FadeIn } from "@/components/animation/fade-in"



import { events } from "@/data/event"
import { publications } from "@/data/publication"



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center relative items-center bg-gradient-to-br from-mblue via-morange to-mred bg-fixed">
                <div>
                    <Image
                        src="https://ik.imagekit.io/mmlab/rMmibFe4czY.jpg"
                        alt="landing"
                        fill
                        className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                    />
                </div>
                <div className="w-full px-6 xl:px-0 max-w-7xl flex absolute flex-col gap-6 items-start">
                    <h1 className="font-bold text-t0 text-white">
                        <FadeIn>Research</FadeIn>
                    </h1>
                </div>
            </div>



            {/* Publication */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                    <FadeIn>
                        <Link href="#publication" className="scroll-mt-32 group flex items-center" id="publication">
                            Publication
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



            <div className="w-full pl-6 pr-6 flex flex-col items-center">

                <FadeIn>
                    <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 xl:flex-row xl:gap-20 justify-between">
                        <Link className="h-96 xl:h-64 xl:flex-1/3 w-full relative rounded-xl shadow-sm overflow-hidden group" href="https://mmlab.ie.cuhk.edu.hk/projects/CelebA.html" target="_blank">
                            <div>
                                <Image
                                    src="https://ik.imagekit.io/mmlab/CelebA.png"
                                    alt="CelebA"
                                    fill
                                    className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                />
                            </div>
                        </Link>
                        <div className="flex-2/3 flex flex-col gap-6">
                            <Link className="text-3xl font-bold hover:text-mred" href="https://mmlab.ie.cuhk.edu.hk/projects/CelebA.html" target="_blank">
                                Deep Learning Face Attributes in the Wild
                            </Link>
                            <div className="flex flex-col gap-3">
                                <p>
                                    <b>CelebFaces Attributes Dataset (CelebA)</b> is a large-scale face attributes dataset with more than <b>200K</b> celebrity images, each with <b>40</b> attribute annotations. The images in this dataset cover large pose variations and background clutter. CelebA has large diversities, large quantities, and rich annotations, including
                                </p>
                                <ul className="ml-6 space-y-3 list-outside list-disc">
                                    <li>
                                        <b>10,177</b> number of <b>identities</b>,
                                    </li>
                                    <li>
                                        <b>202,599</b> number of <b>face images</b>, and
                                    </li>
                                    <li>
                                        <b>5 landmark locations, 40 binary attributes</b> annotations per image.
                                    </li>
                                </ul>
                                <p>
                                    The dataset can be employed as the training and test sets for the following computer vision tasks: face attribute recognition, face recognition, face detection, landmark (or facial part) localization, and face editing & synthesis.
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <CardFooter className="flex flex-row gap-1 flex-wrap text-mgray text-sm select-none">
                                    <span>[</span>
                                        <Link target="_self" href="/about-us/#ping_luo" className="animated-underline">Ping Luo</Link>
                                    <span>]</span>
                                </CardFooter>
                            </div>
                        </div>
                    </div>
                </FadeIn>



                <FadeIn>
                    <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 xl:flex-row-reverse xl:gap-20 justify-between">
                        <Link className="h-96 xl:h-64 xl:flex-1/3 w-full relative rounded-xl shadow-sm overflow-hidden group" href="https://github.com/opendrivelab/uniad" target="_blank">
                            <div>
                                <Image
                                    src="https://ik.imagekit.io/mmlab/UniAD.png"
                                    alt="UniAD"
                                    fill
                                    className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                />
                            </div>
                        </Link>
                        <div className="flex-2/3 flex flex-col gap-6">
                            <Link className="text-3xl font-bold hover:text-mred" href="https://github.com/opendrivelab/uniad" target="_blank">
                                Planning-oriented Autonomous Driving
                            </Link>
                            <div className="flex flex-col gap-3">
                                <p>
                                    🚘 <b>Planning-oriented philosophy</b>: UniAD is a Unified Autonomous Driving algorithm framework following a planning-oriented philosophy. Instead of standalone modular design and multi-task learning, we cast a series of tasks, including perception, prediction and planning tasks hierarchically.
                                </p>
                                <p>
                                    🏆 <b>SOTA performance</b>: All tasks within UniAD achieve SOTA performance, especially prediction and planning (motion: 0.71m minADE, occ: 63.4% IoU, planning: 0.31% avg.Col)
                                </p>
                            </div>
                            <div className="flex justify-end">
                                <CardFooter className="flex flex-row gap-1 flex-wrap text-mgray text-sm select-none">
                                    <span>[</span>
                                        <Link target="_self" href="/about-us/#hongyang_li" className="animated-underline">Hongyang Li</Link>
                                    <span>]</span>
                                </CardFooter>
                            </div>
                        </div>
                    </div>
                </FadeIn>



            </div>



            <div className="w-full pl-6 pr-6 bg-gradient-landing bg-fixed mt-20">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-7xl mt-20 mb-20 flex flex-col xl:flex-row gap-20 xl:items-center"> 
                        <div className="w-full flex flex-col gap-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"> 
                                <FadeIn>Explore All Works</FadeIn>
                            </h2>
                            <FadeIn>
                                <Link href="/publication" className="font-bold text-xl text-white animated-underline">More</Link>
                                <span className="font-bold text-xl text-white">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                        <div className="xl:w-3/4 pl-12 pr-12">
                            <FadeIn>
                                <Carousel
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                >
                                    <CarouselContent>
                                        {Array.from({ length: 10 }).map((_, index) => (
                                            <CarouselItem key={index} className="md:basis-1/1 xl:basis-1/2 max-h-64">
                                                <Card className="border-border h-full flex flex-col justify-between">
                                                    <CardHeader>
                                                        <CardTitle className="text-xl select-none">{publications[index].title}</CardTitle>
                                                    </CardHeader>
                                                    <CardContent className="hidden md:block">
                                                        <p className="select-none">{publications[index].proceedings}</p>
                                                    </CardContent>
                                                    <div className=" hidden md:flex justify-end">
                                                        <CardFooter className="flex flex-row gap-1 flex-wrap text-mgray text-sm select-none">
                                                            <span>[</span>
                                                            {publications[index].pis.map((pi, i) => (
                                                                <div key={pi}>
                                                                    <Link href={"/about-us/#" + pi.toLowerCase().replace(/ /g, '_')} target="_self" className="animated-underline">{pi}</Link>
                                                                    {i < publications[index].pis.length - 1 && (
                                                                        <span className="select-none"> | </span>
                                                                    )}
                                                                </div>
                                                            ))} 
                                                            <span>]</span>
                                                        </CardFooter>
                                                    </div>
                                                </Card>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="border-0" />
                                    <CarouselNext className="border-0" />
                                </Carousel>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>



            {/* Open Source */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                    <FadeIn>
                        <Link href="#open-source" className="scroll-mt-32 group flex items-center" id="open-source">
                            Open Source
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
                <div className="w-full pl-6 pr-6 flex flex-col items-center mt-20">
                    <div className="w-full max-w-7xl grid gap-20 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">

                        

                        <div className="flex flex-col gap-6 2xl:col-span-2">
                            <Link className="w-full h-64 relative rounded-xl shadow-sm overflow-hidden group" href="/open-source#UniAD">
                                <div>
                                    <Image
                                        src="https://mmlabassets.github.io/open-source/odl_uniad.jpg"
                                        alt="UniAD"
                                        fill
                                        className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                    />
                                </div>
                                <div className="w-full h-full absolute flex flex-col justify-center items-center p-6">
                                    <h3 className="text-white font-bold text-t1">
                                        UniAD
                                    </h3>
                                </div>
                            </Link>
                        </div>



                        <div className="flex flex-col gap-6">
                            <Link className="w-full h-64 relative rounded-xl shadow-sm overflow-hidden group" href="/open-source#LlamaGen">
                                <div>
                                    <Image
                                        src="https://mmlabassets.github.io/open-source/LlamaGen.png"
                                        alt="LlamaGen"
                                        fill
                                        className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                    />
                                </div>
                                <div className="w-full h-full absolute flex flex-col justify-center items-center p-6">
                                    <h3 className="text-white font-bold text-t1">
                                        LlamaGen
                                    </h3>
                                </div>
                            </Link>
                        </div>







                        <div className="flex flex-col gap-6">
                            <Link className="w-full h-64 relative rounded-xl shadow-sm overflow-hidden group" href="/open-source#UniVLA">
                                <div>
                                    <Image
                                        src="https://mmlabassets.github.io/open-source/odl_univla.jpg"
                                        alt="UniVLA"
                                        fill
                                        className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                    />
                                </div>
                                <div className="w-full h-full absolute flex flex-col justify-center items-center p-6">
                                    <h3 className="text-white font-bold text-t1">
                                        UniVLA
                                    </h3>
                                </div>
                            </Link>
                        </div>



                        <div className="flex flex-col gap-6 2xl:col-span-2">
                            <Link className="w-full h-64 relative rounded-xl shadow-sm overflow-hidden group" href="/open-source#AgiBot-World">
                                <div>
                                    <Image
                                        src="https://mmlabassets.github.io/open-source/odl_agibotworld.jpg"
                                        alt="AgiBot World"
                                        fill
                                        className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                    />
                                </div>
                                <div className="w-full h-full absolute flex flex-col justify-center items-center p-6">
                                    <h3 className="text-white font-bold text-t1">
                                        AgiBot World
                                    </h3>
                                </div>
                            </Link>
                        </div>
                        


                        <div className="flex flex-col gap-6">
                            <Link className="w-full h-64 relative rounded-xl shadow-sm overflow-hidden group" href="/open-source#Janus">
                                <div>
                                    <Image
                                        src="https://mmlabassets.github.io/open-source/Janus.jpg"
                                        alt="Janus"
                                        fill
                                        className="object-cover object-right bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                    />
                                </div>
                                <div className="w-full h-full absolute flex flex-col justify-center items-center p-6">
                                    <h3 className="text-white font-bold text-t1">
                                        Janus
                                    </h3>
                                </div>
                            </Link>
                        </div>


                        <div className="flex flex-col gap-6">
                            <Link className="w-full h-64 relative rounded-xl shadow-sm overflow-hidden group" href="/open-source#DriveLM">
                                <div>
                                    <Image
                                        src="https://mmlabassets.github.io/open-source/odl_drivelm.jpg"
                                        alt="DriveLM"
                                        fill
                                        className="object-cover object-right bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                    />
                                </div>
                                <div className="w-full h-full absolute flex flex-col justify-center items-center p-6">
                                    <h3 className="text-white font-bold text-t1">
                                        DriveLM
                                    </h3>
                                </div>
                            </Link>
                        </div>


                    </div>
                </div>
            </FadeIn>




            <div className="w-full pl-6 pr-6 bg-gradient-landing bg-fixed mt-20">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-7xl mt-20 mb-20 flex flex-col xl:flex-row gap-20 xl:items-center"> 
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"> 
                                <FadeIn>Discover All<br></br>Projects and Datasets</FadeIn>
                            </h2>
                            <FadeIn>
                                <Link href="/open-source" className="font-bold text-xl text-white animated-underline">More</Link>
                                <span className="font-bold text-xl text-white">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>



            {/* Event */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                    <FadeIn>
                        <Link href="#event" className="scroll-mt-32 group flex items-center" id="event">
                            Event
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



            <div className="w-full pl-6 pr-6 flex flex-col items-center mt-20">
                <div className="w-full max-w-7xl grid gap-20 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                    {[...events.values()].filter(n => n.keys.includes("selected")).map((item) => (
                        <FadeIn key={item.title}>
                            <div className="flex flex-col gap-6">
                                <Link className="w-full h-64 relative rounded-xl shadow-sm overflow-hidden group" href={item.link}>
                                    <div>
                                        <Image
                                            src={item.figure}
                                            alt={item.location}
                                            fill
                                            className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                                        />
                                    </div>
                                    <div className="w-full h-full absolute flex flex-col justify-end items-end p-6">
                                        <h3 className="text-white font-bold text-t1">
                                            {item.location}
                                        </h3>
                                    </div>
                                </Link>
                                <h3 className="font-bold text-3xl">
                                    {item.title}
                                </h3>
                                <span className="font-bold">
                                    {item.date}
                                </span>
                            </div>
                        </FadeIn>
                    ))}   
                </div>
            </div>



            {/* <div className="w-full pl-6 pr-6 mt-20">
                <div className="w-full flex flex-col items-center">
                    <div className="w-full max-w-7xl mt-20 mb-20 flex flex-col xl:flex-row gap-20 xl:items-center"> 
                        <div className="flex flex-col gap-6">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"> 
                                <FadeIn>Check out<br></br>All Events</FadeIn>
                            </h2>
                            <FadeIn>
                                <Link href="/event" className="font-bold text-xl animated-underline">More</Link>
                                <span className="font-bold text-xl">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div> */}




            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



        </main>
    );
}
