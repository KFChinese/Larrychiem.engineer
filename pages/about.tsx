import Link from 'next/link';
import Image from 'next/image';

import Container from 'components/Container';


export default function About() {
  return (
    <Container title="About – Larry Chiem">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Links</h2>
          <ul>
            <li>
              GitHub: <a href="https://github.com/KFChinese">@KFChinese</a>
            </li>
            <li>
              Website: <Link href="https://larrychiem.engineer">https://larrychiem.engineer</Link>
            </li>
            <li>
              LinkedIn:{' '}
              <a href="https://www.linkedin.com/in/larry-chiem/">
                https://www.linkedin.com/in/larry-chiem
              </a>
            </li>
          </ul>
          <h2>Bio</h2>
          <h3>Job Title</h3>
          <p>Larry Chiem, IT Engineer at RingCentral</p>
          <h3>About Me</h3>
          <p>
            Larry Chiem is an IT Engineer III at {' '}
            <a href="http://www.ringcentral.com/">RingCentral</a>, where I help IT Technicians
            Automate daily tasks & minimize overhead with manual workloads. I help contribute to the
            Research and Development in Automation with different departments at RingCentral. As an explorer, researcher, and developer I have built and automated on Python, Next.js, and Typescript.
          </p>
  

        </div>
      </div>
    </Container>
  );
}
