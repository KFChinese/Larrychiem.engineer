import Link from 'next/link';

import Container from 'components/Container';
import Latex from 'react-latex-next'
import Image from 'next/image';
import  ProjectCard_main  from 'components/projectcard_main';




export default function Projects() {
  return (
    <Container title="Projects | Larry Chiem">


<div className="justify-center items-start max-w-2xl mx-auto mb-16 w-full">
  <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
  Projects
  </h1>
  <p className='text-black dark:text-white'> These are Projects that I have Developed that Have Been Completed, or Ongoing.</p>

  <ProjectCard_main
                bg_img="https://raw.githubusercontent.com/KFChinese/Larrychiem.engineer/master/public/background.webp"
                title="Gabrielle's Cello"
                status = "Ongoing"
                footer_txt_1 = "A Website that I had Built From Scratch"
                footer_txt_2 = "With Next.JS Self Hosting For Free From Oracle OCI."
                btn_lnk = "#"
                link_text = "Under Construction; Not Live"
  />
  <ProjectCard_main
                bg_img="https://raw.githubusercontent.com/KFChinese/Larrychiem.engineer/master/public/background.webp"
                title="TBD"
                status = "TBD"
                footer_txt_1 = "TBD"
                footer_txt_2 = "TBD"
                btn_lnk = ""
                link_text = "TBD"
  />






  </div>
  

</Container>
  );
}
