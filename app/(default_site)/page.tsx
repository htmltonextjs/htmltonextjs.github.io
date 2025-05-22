import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "MMLab | Multimedia Laboratory",
    description: "Multimedia Laboratory",
    keywords: ["MMLab", "Multimedia Laboratory", "HKU", "CUHK", "NTU"],
};



import Link from "next/link"
import Image from 'next/image'



import { FadeIn } from "@/components/animation/fade-in"



export default function Home() {
    return (
        <main>



            {/* Landing */}
            <div className="w-full   h-svh flex flex-row justify-center relative items-center bg-gradient-to-br from-mblue via-morange to-mred bg-fixed">
                <div>
                    <Image
                        src="https://ik.imagekit.io/mmlab/uhRgPO215cE.jpg"
                        alt="landing"
                        fill
                        className="object-cover object-center bg-gradient-loading select-none group-hover:scale-105 transition delay-100 duration-200"
                    />
                </div>
                <div className="w-full px-6 xl:px-0 max-w-7xl flex absolute flex-col gap-6 items-start">
                    <h1 className="font-bold text-t0 text-white">
                        <FadeIn>Multimedia</FadeIn>
                    </h1>
                    <h1 className="font-bold text-t0 text-white">
                        <FadeIn>Laboratory</FadeIn>
                    </h1>
                </div>
            </div>



            <FadeIn> 
                <div className="w-full px-6 flex flex-row justify-center pb-32 bg-gradient-to-br from-morange/60 via-mred/40 to-mblue/60 bg-fixed">
                    <div className="max-w-7xl w-full flex flex-row">
                        <div className="w-full justify-between flex flex-col lg:flex-row gap-10 lg:gap-20">
                            <div className="flex-1">
                                <Link href="/about-us" className="font-bold text-t1 animated-underline">About Us</Link>
                                <span className="font-bold text-t1">&nbsp;{'>'}</span>
                            </div>
                            <div className="flex-1">
                                <Link href="/research" className="font-bold text-t1 animated-underline">Research</Link>
                                <span className="font-bold text-t1">&nbsp;{'>'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </FadeIn>   

            
            <div className="w-full flex flex-col lg:flex-row scroll-mt-32" id="MMLab@HKU">
                <div className="flex-2/5 min-h-96 relative">
                    <Image
                        src="https://ik.imagekit.io/mmlab/mmlab@hku.jpg"
                        alt="mmlab@hku"
                        fill
                        className="object-cover object-center bg-gradient-loading select-none"
                    />
                </div>
                <div className="flex-3/5 bg-[#25520d]">
                    <div className="flex flex-col p-6 pt-16 pb-10 lg:p-20 lg:pb-12 gap-6">
                        <h1 className="text-t1 font-bold text-[#b5a774] mb-6">
                            <FadeIn>MMLab @ HKU</FadeIn>
                        </h1>
                        <FadeIn>
                            <p className="text-white">
                                The Multimedia Lab at The University of Hong Kong is a leading research group dedicated to deep learning, reinforcement learning, robotics, <i>etc.</i> The lab focuses on various key areas, such as autonomous driving, multimodality, generative AI, and 3D vision. The lab has built a global reputation for cutting-edge research and impactful open-source contributions with a strong publication record in top-tier conferences like CVPR, ICCV and NeurIPS.
                            </p>
                        </FadeIn>
                        <div className="flex justify-end mt-6">
                            <FadeIn>
                                <Link href="#" className="text-[#b5a774] animated-underline">Explore</Link>
                                <span className="text-[#b5a774]">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row-reverse scroll-mt-32" id="MMLab@CUHK">
                <div className="flex-2/5 min-h-96 relative">
                    <Image
                        src="https://ik.imagekit.io/mmlab/mmlab@cuhk.jpg"
                        alt="mmlab@cuhk"
                        fill
                        className="object-cover object-center bg-gradient-loading select-none"
                    />
                </div>
                <div className="flex-3/5 bg-[#652371]">
                    <div className="flex flex-col p-6 pt-16 pb-10 lg:p-20 lg:pb-12 gap-6">
                        <h1 className="text-t1 font-bold text-[#e59c2e] mb-6">
                            <FadeIn>MMLab @ CUHK</FadeIn>
                        </h1>
                        <FadeIn>
                            <p className="text-white">
                                The CUHK Multimedia Lab is one of the pioneering institutes on deep learning. In GPU Technology Conference (GTC) 2016, a world-wide technology summit, the lab is recognized as one of the top ten AI pioneers, and listed together with top research groups in the world (e.g. MIT, Stanford, Berkeley, and Univ. of Toronto). Today, the lab remains one of the most active research labs in computer vision and deep learning, publishing over 40 papers on top conferences (CVPR/ICCV/ECCV/NIPS) every year.
                            </p>
                        </FadeIn>
                        {/* <FadeIn>
                            <p className="text-white">
                                The lab has a large group of talented students, plenty of computational resources, and steady financial support, and free research environment.
                            </p>
                        </FadeIn> */}
                        <div className="flex justify-end mt-6">
                            <FadeIn>
                                <Link href="https://mmlab.ie.cuhk.edu.hk/" target="_blank" className="text-[#e59c2e] animated-underline">More</Link>
                                <span className="text-[#e59c2e]">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row scroll-mt-32" id="MMLab@NTU">
                <div className="flex-2/5 min-h-96 relative">
                    <Image
                        src="https://ik.imagekit.io/mmlab/mmlab@ntu.jpg"
                        alt="mmlab@ntu"
                        fill
                        className="object-cover object-center bg-gradient-loading select-none"
                    />
                </div>
                <div className="flex-3/5 bg-[#181C62]">
                    <div className="flex flex-col p-6 pt-16 pb-10 lg:p-20 lg:pb-12 gap-6">
                        <h1 className="text-t1 font-bold text-[#D71440] mb-6">
                            <FadeIn>MMLab @ NTU</FadeIn>
                        </h1>
                        <FadeIn>
                            <p className="text-white">
                                MMLab@NTU was formed on the 1 August 2018, with a research focus on computer vision and deep learning. It is now a group with three faculty members and more than 40 members including research fellows, research assistants, research engineers and PhD students.
                            </p>
                        </FadeIn>
                        <FadeIn>
                            <p className="text-white">
                                Members in MMLab@NTU conduct research primarily in low-level vision, image and video understanding, and generative AI. Have a look at the overview of <Link href="https://www.mmlab-ntu.com/research.html" target="_blank" className="text-[#D71440] animated-underline">the research</Link>. All publications are listed <Link href="https://www.mmlab-ntu.com/publication_topic.html" target="_blank" className="text-[#D71440] animated-underline">here</Link>. 
                            </p>
                        </FadeIn>
                        {/* <FadeIn>
                            <p className="text-white">
                                The lab is always looking for motivated PhD students, postdocs, research assistants who have the same interests. Check out the <Link href="https://www.mmlab-ntu.com/careers.html" target="_blank" className="text-[#D71440] animated-underline">careers</Link> page and follow the lab on <Link href="https://twitter.com/MMLabNTU" target="_blank" className="text-[#D71440] animated-underline">Twitter</Link>.
                            </p>
                        </FadeIn> */}
                        <div className="flex justify-end mt-6">
                            <FadeIn>
                                <Link href="https://www.mmlab-ntu.com/" target="_blank" className="text-[#D71440] animated-underline">More</Link>
                                <span className="text-[#D71440]">&nbsp;{'>'}</span>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
            
                

        </main>
    );
}
