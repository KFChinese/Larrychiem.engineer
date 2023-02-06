import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

import TechStack from '../components/TechStack';
import { ParallaxBanner, ParallaxBannerLayer, ParallaxProvider } from 'react-scroll-parallax';


export default function Home() {
  return (
    
    <Suspense fallback={null}>
      <Container>
  <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 sm:mb-10">



            <ParallaxProvider>
    <ParallaxBanner
      
      className="aspect-[3/2] md:aspect-[2.75/1]"
    >


      <ParallaxBannerLayer
        image="https://raw.githubusercontent.com/KFChinese/Larrychiem.engineer/master/public/background.webp"
        speed={-20}
      >

      </ParallaxBannerLayer>

      <ParallaxBannerLayer>
    <div className="flex flex-row items-start">
            <div className="flex flex-col pr-8">
              <h1 className="font-bold text-center text-3xl md:text-5xl tracking-tight  mt-10 md:mt-10 lg:mt-10 sm:mt-10 ml-5 mb-1  text-white dark:text-white">
                Larry Chiem
              </h1>
              <h2 className="text-gray-200 text-center dark:text-gray-200 ml-5 mb-4">
                IT Engineer III at{' '}
              
                <Link href="https://www.ringcentral.com"itemProp="item">
    
       <span itemProp="name" className="font-semibold">
       RingCentral
       </span>
     
</Link>
              </h2>
              <p className=" text-gray-200 text-[14px] md:text-l text-center dark:text-gray-200 ml-5 mb-5">
                A Full-Stack Engineer in the Bay Area. <br></br> Developing Solutions and Building the Future With Innovative Technologies. 
              </p>
            </div>
            <div className="w-[0px] sm:w-[375px] relative mb-8 sm:mb-5 mr-auto">
              <Image
                alt="Larry Chiem"
                height={700}
                width={600}
                src="/img.webp"
                sizes="75vw"
                priority
                className="full "
              />
            </div>
          </div>
          </ParallaxBannerLayer>
      

      </ParallaxBanner>
      </ParallaxProvider>

          <h3 className="font-bold m-auto text-center  text-2xl md:text-4xl tracking-tight  mt-5 mb-6 text-black dark:text-white">
          
            Featured Projects
            <div className="flex-grow h-px bg-gray-400"></div> 
          </h3>
          <div className="flex gap-6 m-auto text-center  flex-col text-center md:flex-row">
            <ProjectCard
              title="FedEx & FedEx RMA Automation"
              slug=""
              gradient="animate-text from-[#4d148c] to-[#ff6200]"
            />
            <ProjectCard
              title="Larry's Buttons & Coupons"
              slug=""
              gradient=" animate-text from-[#2A97C7] via-[#5CFAD5] to-[#C72038]"
            />
            <ProjectCard
              title="The Year Up Application"
              slug=""
              gradient="animate-text from-[#0154a0] via-[#ffcf71] to-[#de9c18]"
            />
          </div>
          <Link
            href="/blog"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            <>
              {'Read all Projects'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 ml-1"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
                />
              </svg>
            </>
          </Link>

          <h3 className="font-bold  m-auto text-center text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          <div className="flex items-center py-4">
       
        

      
      
       
    </div>
            Technologies & Tech Stacks
            <div className="flex-grow h-px bg-gray-400"></div> 
          </h3>
          <p className="text-gray-600 m-auto text-center  dark:text-gray-400 mb-4">
          This Is My Current Top 5 Favorite Technologies & Tech Stacks I Personally Use Overall, But Does Change Overtime Based On Discovery With Support & Project Requirements. 
          
          
          </p>
          <TechStack
            index="01"
            href="https://python.org"
            img="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png"
            title="Python"
          />
          <TechStack
            index="02"
            href="https://selenium.dev"
            img="https://raw.githubusercontent.com/github/explore/6c7084bb772f6fabaae377f5ae4a607594234ee6/topics/selenium/selenium.png"
            title="Selenium"
          />
          <TechStack
            index="03"
            
            href="https://code.visualstudio.com"
            img="https://raw.githubusercontent.com/github/explore/bbd48b997e8d0bef63f676eca4da5e1f76487b56/topics/visual-studio-code/visual-studio-code.png"
            title="Visual Studio Code"
          />
          <TechStack
            index="04"
            href="https://github.com/vercel/next.js"
            img="https://camo.githubusercontent.com/f21f1fa29dfe5e1d0772b0efe2f43eca2f6dc14f2fede8d9cbef4a3a8210c91d/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6c696768745f6261636b67726f756e642e706e67"
            title="Next.js (With TypeScript)"
          />
          <TechStack
            index="05"
            href="https://firebase.google.com/"
            img="https://avatars.githubusercontent.com/u/1335026"
            title="FireBase"
          />
          <Link
            href="/tier-list"
            className="flex items-center mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6"
          >
            See More of My Technologies & Tech Stacks
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </Link>
          <span className="h-16" />
         
        </div>

      </Container>
    </Suspense>

    
  );
}
