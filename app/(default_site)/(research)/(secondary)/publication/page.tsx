import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Publication | MMLab",
    description: "Multimedia Laboratory",
    keywords: ["Publication", "MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    MultiTabsList,
    MultiTabsTrigger,
} from "@/components/ui/multitabs"
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



import { publications, publication_categories } from "@/data/publication"
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
        path: "Publication",
        url: "/research#publication"
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
                            All Publications
                        </FadeIn>
                    </h1>
                </div>
            </div>
 
 

            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <div className="w-full max-w-7xl mt-20">
                    <Tabs defaultValue={publication_categories[0].c1}>



                        <FadeIn>
                            <TabsList className="grid w-full grid-cols-3">
                                {publication_categories.map((category) => (
                                    <TabsTrigger value={category.c1} key={category.c1}>{category.c1}</TabsTrigger>
                                ))}
                            </TabsList>
                        </FadeIn>



                        {publication_categories.map((c) => (
                            <TabsContent value={c.c1} key={c.c1}>
                                <Tabs defaultValue={c.c2s[0]} className="mt-6">

                                    <FadeIn>
                                        <MultiTabsList>
                                            {c.c2s.map((c2) => (
                                                <MultiTabsTrigger value={c2} key={c2}>{c2}</MultiTabsTrigger>
                                            ))}
                                        </MultiTabsList>
                                    </FadeIn>

                                    {c.c2s.map((c2) => (
                                        <TabsContent value={c2} key={c2} className="mt-20">
                                            <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
                                                {[...publications.values()].filter(publication => publication.keys.includes(c2) || publication.pis.includes(c2)).map(( publication) => (
                                                    <FadeIn key={publication.title}>
                                                        <div>
                                                            <Card className="border-border">
                                                                <CardHeader>
                                                                    <CardTitle className="text-xl">{publication.title}</CardTitle>
                                                                    <CardDescription>{publication.authors}</CardDescription>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <p>{publication.proceedings}</p>
                                                                </CardContent>
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
                                                        </div>
                                                    </FadeIn>
                                                ))}   
                                            </div>
                                        </TabsContent>
                                    ))}     

                                </Tabs>       
                            </TabsContent>
                        ))}



                    </Tabs>
                </div>
            </div>



            <div className="w-full pl-6 pr-6 flex flex-col items-center">
                <Separator className="max-w-7xl mt-20"/>
            </div>



        </main>
    );
}
