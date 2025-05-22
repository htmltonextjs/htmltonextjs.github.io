import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Open Source | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Open Source", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Image from 'next/image'
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Slash } from "lucide-react"



import { FadeIn } from "@/components/animation/fade-in"



import { open_source_categories, open_sources } from "@/data/open-source"
const paths: { path: string; url: string; }[] = [
    {
        path: "MMLab",
        url: "/"
    },
    {
        path: "Resaerch",
        url: "/research"
    },
    {
        path: "Open Source",
        url: "/research#open-source"
    },
]



export default function Home() {
    return (
        <main className="h-full">



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
                            Projects & Datasets
                        </FadeIn>
                    </h1>
                </div>
            </div>
 
 
            
            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full max-w-7xl mt-20">
                    <Tabs defaultValue={open_source_categories[0].category}>



                        <FadeIn>
                            <TabsList className="grid w-full grid-cols-3">
                                {open_source_categories.map((category) => (
                                    <TabsTrigger value={category.category} key={category.category}>{category.category}</TabsTrigger>
                                ))}
                            </TabsList>
                        </FadeIn>



                        {open_source_categories.map((category) => (
                            <TabsContent value={category.category} key={category.category}>

                                {category.years.map((year) => (
                                    <div className="mt-20" key={year}>

                                        <FadeIn>
                                            <h2 className="w-full max-w-7xl mb-20 text-t1 font-bold"> 
                                                {year}                    
                                            </h2>
                                        </FadeIn>

                                        <div className="grid w-full grid-cols-1 gap-6">
                                            {[...open_sources.values()]
                                                .filter(open_source => open_source.keys.includes(category.category))
                                                .filter(open_source => open_source.keys.includes(year))
                                                .map((open_source) => 
                                            (
                                                <FadeIn key={open_source.title}>
                                                    <div>
                                                        <Card className="border-border flex flex-col md:flex-row px-6 md:gap-6">
                                                            <div className="flex justify-center items-center">
                                                                <Image
                                                                    src={open_source.img}
                                                                    alt="stars"
                                                                    width={512}
                                                                    height={512}
                                                                    className="flex-1/3 bg-gradient-loading"
                                                                />
                                                            </div>
                                                            <div className="flex-2/3 flex flex-col gap-3 justify-between">
                                                                <CardHeader className="p-0">
                                                                    <CardTitle className="text-xl scroll-mt-32" id={open_source.id}>{open_source.title}</CardTitle>
                                                                    <CardDescription>{open_source.description}</CardDescription>
                                                                </CardHeader>
                                                                <div className="flex flex-col gap-3">
                                                                    <CardContent className="flex flex-row gap-3 flex-wrap items-center p-0">
                                                                        {
                                                                            open_source.githubstars != '' ? 
                                                                            <Image
                                                                                src={open_source.githubstars}
                                                                                alt="stars"
                                                                                width={96}
                                                                                height={96}
                                                                            />
                                                                            : <div></div>
                                                                        }
                                                                        {open_source.tags.map((tag) => (
                                                                            <p className="bg-mred text-background px-3 rounded-xl py-1 text-xs" key={tag}>{tag}</p>
                                                                        ))} 
                                                                    </CardContent>
                                                                    <div className="flex flex-col lg:flex-row justify-between gap-3">
                                                                        <CardFooter className="flex flex-row gap-3 flex-wrap p-0">
                                                                            {open_source.links.map((link) => (
                                                                                <Link href={link.url} target="_blank" className="animated-underline text-mred" key={link.website}>{link.website}</Link>
                                                                            ))} 
                                                                        </CardFooter>
                                                                        <CardFooter className="flex flex-row gap-1 text-mgray text-sm p-0 justify-end">
                                                                            <span>[</span>
                                                                            {open_source.pis.map((pi, index) => (
                                                                                <div key={pi}>
                                                                                    <Link href={"/about-us/#" + pi.toLowerCase().replace(/ /g, '_')} target="_self" className="animated-underline">{pi}</Link>
                                                                                    {index < open_source.pis.length - 1 && (
                                                                                        <span className="select-none"> | </span>
                                                                                    )}
                                                                                </div>
                                                                            ))} 
                                                                            <span>]</span>
                                                                        </CardFooter>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Card>
                                                    </div>
                                                </FadeIn>
                                            ))}   
                                        </div>

                                        <div className="w-full flex flex-col items-center">
                                            <Separator className="max-w-7xl mt-20"/>
                                        </div>

                                    </div>
                                ))}

                            </TabsContent>
                        ))}



                    </Tabs>
                </div>
            </div>



        </main>
    );
}
