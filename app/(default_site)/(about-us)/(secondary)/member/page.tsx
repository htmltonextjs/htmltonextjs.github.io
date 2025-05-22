import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Member | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Member", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
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



import { FadeIn } from "@/components/animation/fade-in"



import { pis, members } from "@/data/member"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "About Us",
        url: "/about-us"
    },
    {
        path: "Member",
        url: "/about-us#member"
    },
]



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full h-72 pl-6 pr-6 flex flex-row justify-center bg-gradient-landing bg-fixed">
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
                    <h1 className="font-bold text-t1 text-white">
                        <FadeIn>
                            All Members
                        </FadeIn>
                    </h1>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex justify-center 2xl:justify-evenly">



                {/* navigator */}
                <div className="w-48 hidden 3xl:block">
                    <div className="w-full h-fit mt-20 flex flex-col gap-3 sticky top-64">
                        <Link className="select-none flex items-center gap-3 group" href="#faculty" key="faculty">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Faculty
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#student" key="student">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Student
                                </span>
                            </FadeIn>
                        </Link>
                        <Link className="select-none flex items-center gap-3 group" href="#alumni" key="alumni">
                            <FadeIn>
                                <span className="border-l-4 border-l-mgray text-sm group-hover:border-l-mred">
                                    &nbsp;
                                </span>
                            </FadeIn>
                            <FadeIn>
                                <span className="text-xl font-bold text-mgray group-hover:text-mred">
                                    Alumni
                                </span>
                            </FadeIn>
                        </Link>
                    </div>
                </div>
                


                <div className="w-full max-w-7xl flex flex-col">



                    {/* Faculty */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#faculty" className="scroll-mt-32 group flex items-center" id="faculty">
                                Faculty
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
                    {/* to keep the same in /about-us / img */}
                    {pis.map((pi) => (
                        <FadeIn key={pi.name}>
                            <div className="w-full max-w-7xl mt-20 flex flex-col gap-10 md:flex-row md:gap-20 justify-between">
                                <div className="flex-1/3 md:max-w-64">
                                    <AspectRatio ratio={1/1}>
                                        <Image
                                            src={pi.img}
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



                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* Student */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#student" className="scroll-mt-32 group flex items-center" id="student">
                                Student
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
                        <div className="w-full max-w-7xl mt-20 grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                            {[...members.values()].filter(member => !member.keys.includes("Alumni")).map((member) => (
                                <div className="flex flex-col gap-3" key={member.name}>
                                    <AspectRatio ratio={1/1}>
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="h-full w-full rounded-md object-cover bg-gradient-loading"
                                        />
                                    </AspectRatio>
                                    <span className="font-bold text-xl">{member.name}</span>
                                    <span>{member.title}</span>
                                    <div className="flex flex-row gap-1 flex-wrap text-mgray text-sm">
                                        <span>
                                            Supervised by: 
                                        </span>
                                        {member.pi.map((pi, index) => (
                                            <div key={pi}>
                                                <Link href={"/member/#" + pi.toLowerCase().replace(/ /g, '_')} className="animated-underline" >{pi}</Link>
                                                {index < member.pi.length - 1 && (
                                                    <span className="select-none"> | </span>
                                                )}
                                            </div>
                                        ))} 
                                    </div>
                                    <div className="flex gap-3 flex-wrap">
                                        {member.links.map((link) => (
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
                            ))}
                        </div>
                    </FadeIn>



                    <div className="w-full flex flex-col items-center">
                        <Separator className="max-w-7xl mt-20"/>
                    </div>



                    {/* Alumni */}
                    <div className="w-full flex flex-col items-center">
                        <h2 className="w-full max-w-7xl mt-20 text-t1 font-bold"> 
                            <FadeIn>
                                <Link href="#alumni" className="scroll-mt-32 group flex items-center" id="alumni">
                                Alumni
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
                        <div className="w-full max-w-7xl mt-20 grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                            {[...members.values()].filter(member => member.keys.includes("Alumni")).map((member) => (
                                <div className="flex flex-col gap-3" key={member.name}>
                                    <AspectRatio ratio={1/1}>
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="h-full w-full rounded-md object-cover bg-gradient-loading"
                                        />
                                    </AspectRatio>
                                    <span className="font-bold text-xl">{member.name}</span>
                                    <span>{member.title}</span>
                                    <div className="flex flex-row gap-1 flex-wrap text-mgray text-sm">
                                        <span>
                                            Supervised by: 
                                        </span>
                                        {member.pi.map((pi, index) => (
                                            <div key={pi}>
                                                <Link href={"/member/#" + pi.toLowerCase().replace(/ /g, '_')} className="animated-underline" >{pi}</Link>
                                                {index < member.pi.length - 1 && (
                                                    <span className="select-none"> | </span>
                                                )}
                                            </div>
                                        ))} 
                                    </div>
                                    <div className="flex gap-3 flex-wrap">
                                        {member.links.map((link) => (
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
                            ))}
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
