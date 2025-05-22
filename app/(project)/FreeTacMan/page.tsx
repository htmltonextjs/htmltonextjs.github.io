import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MMLab | Multimedia Laboratory",
    description: "Multimedia Laboratory",
    keywords: ["MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Image from 'next/image'



import { FadeIn } from "@/components/animation/fade-in"


export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full   h-svh flex flex-row justify-center relative items-center bg-gradient-to-br from-mblue via-morange to-mred bg-fixed">
                <div className="w-full px-6 xl:px-0 max-w-7xl flex absolute flex-col gap-6 items-start">
                    <h1 className="font-bold text-t0 text-white">
                        <FadeIn>xxx</FadeIn>
                    </h1>
                </div>
            </div>

                

        </main>
    );
}