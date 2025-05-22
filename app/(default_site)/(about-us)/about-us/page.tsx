import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "About Us | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["About Us", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};


import Image from 'next/image'
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"



import { FadeIn } from "@/components/animation/fade-in"



import { pis } from "@/data/member"



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-svh flex flex-row justify-center relative items-center bg-gradient-to-br from-mblue via-morange to-mred bg-fixed">
                <div>
                    <Image
                        src="https://ik.imagekit.io/mmlab/LPKk3wtkC-g.jpg"
                        alt="landing"
                        fill
                        className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                    />
                </div>
                <div className="w-full px-6 xl:px-0 max-w-7xl flex absolute flex-col gap-6 items-start">
                    <h1 className="font-bold text-t0 text-white">
                    <FadeIn>About Us</FadeIn>
                    </h1>
                </div>
            </div>


            <FadeIn>
                <div className="w-full pl-6 pr-6 flex flex-col items-center">
                    <div className="w-full flex flex-col items-center mt-20">
                        <div className="w-full max-w-7xl flex flex-col relative p-10 gap-6">
                            <div className="absolute top-0 left-0 w-8 h-8 border-t-8 border-l-8 border-black"></div>
                            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-8 border-r-8 border-black"></div>
                            <h2 className="text-xl font-bold">
                                In Memoriam: Xiaoou Tang
                            </h2>
                            <p>
                                The Multimedia Laboratory (MMLab) is established by Prof. Xiaoou Tang  (24 January 1968 - 15 December 2023) in July 2001.
                            </p>
                            <p>
                                Prof. Xiaoou Tang's expertise covered a wide spectrum of computer vision and image processing areas. Among the pioneering and influential examples, he significantly advanced the facial recognition system to the level that exceeded human capability when their GaussianFace system designed by him and collaborators, achieving a world-record accuracy of 98.52% on the Labeled Faces in the Wild benchmark in 2014. He is also well known for his number of excellent works on image super-resolution, image haze removal, and object detection and recognition.
                            </p>
                            <p>
                                Prof. Xiaoou Tang's influence went beyond his research achievements. Throughout two decades, he guided and inspired a new generation of scholars in the fields of AI and computer vision, creating a lasting imprint for generations to come. For those fortunate enough to have known Xiaoou, his clever wit remains memorable, making the time with him both pleasant and intellectually engaging. He will be greatly missed, but his memory will serve as an enduring source of inspiration, motivating all of us to strive for better things.
                            </p>
                        </div>
                    </div>
                </div>
            </FadeIn>




            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



            {/* Members */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full flex flex-col items-center mt-20">
                    <div className="w-full max-w-7xl flex flex-row justify-between">
                        <h2 className="text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#member" className="scroll-mt-32 group flex items-center" id="member">
                                    Members
                                    <span className="ml-6 hidden group-hover:inline-block size-10 text-foreground">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path d="M15.197 3.35462C16.8703 1.67483 19.4476 1.53865 20.9536 3.05046C22.4596 4.56228 22.3239 7.14956 20.6506 8.82935L18.2268 11.2626M10.0464 14C8.54044 12.4882 8.67609 9.90087 10.3494 8.22108L12.5 6.06212" strokeWidth="2.5" strokeLinecap="round"/>
                                            <path d="M13.9536 10C15.4596 11.5118 15.3239 14.0991 13.6506 15.7789L11.2268 18.2121L8.80299 20.6454C7.12969 22.3252 4.55237 22.4613 3.0464 20.9495C1.54043 19.4377 1.67609 16.8504 3.34939 15.1706L5.77323 12.7373" strokeWidth="2.5" strokeLinecap="round"/>
                                        </svg>
                                    </span> 
                                </Link>
                            </FadeIn>
                        </h2>
                        <div className="flex flex-col justify-end">
                            <FadeIn>
                                <Link href="/member" className="font-bold text-xl animated-underline">All</Link>
                                <span className="font-bold text-xl">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">

                {/* to keep the same in /member / img_full */}
                {pis.map((pi) => (
                    <FadeIn key={pi.name}>
                        <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                            <div className="flex-1/3 md:max-w-64">
                                <AspectRatio ratio={1/1}>
                                    <Image
                                        src={pi.img_full}
                                        alt={pi.name}
                                        fill
                                        className="h-full w-full rounded-md object-cover bg-gradient-loading"
                                    />
                                </AspectRatio>
                            </div>
                            <div className="flex-2/3 flex flex-col gap-6 scroll-mt-32" id={pi.id}>
                                <h3 className="text-3xl sm:text-4xl text-t1 font-bold">
                                    {pi.name}
                                </h3>
                                <span>
                                    {pi.title}
                                </span>
                                <p className="member_bio" dangerouslySetInnerHTML={{ __html: pi.bio }}></p>
                                <div className="flex gap-6 flex-wrap">
                                    {pi.links.map((link) => (
                                        <Link href={link.link} target="_blank" key={link.icon}  className="h-8 w-8 group">
                                            <AspectRatio ratio={1/1}>
                                                <Image
                                                    src={"/icon/" + link.icon + ".svg"}
                                                    alt={link.link}
                                                    fill
                                                    className="group-hover:scale-125 transition duration-200"
                                                />
                                            </AspectRatio>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}

            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



            {/* Career */}
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full flex flex-col items-center mt-20">
                    <div className="w-full max-w-7xl flex flex-row justify-between">
                        <h2 className="text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#career" className="scroll-mt-32 group flex items-center" id="career">
                                    Career
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
                </div>
            </div>
            <FadeIn>
                <div className="w-full pl-6 pr-6 flex flex-col items-center">
                    <div className="w-full flex flex-col items-center mt-20">
                        <div className="w-full max-w-7xl flex flex-col gap-6">
                            <p>
                                Positions of Postdocs, RAs, full-time/part-time PhDs, Internships, Research Scientists, <i>etc.</i>, are available.
                                Enquiries about the duties of the posts could be sent to:
                            </p>
                            <ul className="ml-6 space-y-6 list-outside list-disc">
                                <li>
                                    <Link href="mailto:pluo.lhi@gmail.com" className="text-mred animated-underline">pluo.lhi@gmail.com</Link> [ <Link target="_self" href="/about-us/#ping_luo" className="text-mred animated-underline">Ping Luo</Link> ]
                                </li>
                                <li>
                                    <Link href="mailto:xihuiliu@eee.hku.hk" className="text-mred animated-underline">xihuiliu@eee.hku.hk</Link> [ <Link  target="_self" href="/about-us/#xihui_liu" className="text-mred animated-underline">Xihui Liu</Link> ]
                                </li>
                                <li>
                                    <Link href="mailto:hongyang@hku.hk" className="text-mred animated-underline">hongyang@hku.hk</Link> [ <Link target="_self" href="/about-us/#hongyang_li" className="text-mred animated-underline">Hongyang Li</Link> ]
                                </li>
                                <li>
                                    <Link href="mailto:doubledaibo@gmail.com" className="text-mred animated-underline">doubledaibo@gmail.com</Link> [ <Link target="_self" href="/about-us/#bo_dai" className="text-mred animated-underline">Bo Dai</Link> ]
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </FadeIn>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



        </main>
    );
}
