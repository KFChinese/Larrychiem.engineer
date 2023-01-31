import Container from 'components/Container';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from "react";



export default function Uses() {
  

  
  return (
    <Container
      title="Tier List | Larry Chiem"
      description="Here's my Tier List for What Languages that I think are Great."
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Programming Tier List
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          This is the Programming Tier List on What I (Currently Think 🧠) are the best Language/Framework/TechStack to use, based on my personal experience with prior and/or current usage of the technology. <br></br>Change My Mind By <Link className="underline decoration-sky-500 dark:text-white" href="/contact">Contacting</Link> Me!
        </p>
        <table className=" text-gray-700 dark:text-gray-300 table-auto mt-2 mb-8">

  <tbody className="divide-y-[3px] pb-3 bg-gray-700">
    <tr>
    <td className="w-auto mx-1 p-3 px-8 border-gray-700 dark:border-white border text-black rounded bg-red-600">S</td>
      <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png`}
          width={65}
          height={65}
          priority
        />
        </td>
            <td> 
              <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/6c7084bb772f6fabaae377f5ae4a607594234ee6/topics/selenium/selenium.png`}
          width={65}
          height={65}
          priority
        />
        </td>
              <td> 
                <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/bbd48b997e8d0bef63f676eca4da5e1f76487b56/topics/visual-studio-code/visual-studio-code.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
      <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        
        <td> 
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://avatars.githubusercontent.com/u/1335026`}
         
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/89bdd9644f44d1b12180fd512b95574fe4c54617/topics/github-api/github-api.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/markdown/markdown.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://avatars.githubusercontent.com/u/10251060?s=200&v=4`}
          width={65}
          height={65}
          priority
        />
        </td>
    </tr>

    <tr>
    <td className="w-auto mx-1 p-3 px-8 border-gray-700 dark:border-white border text-black rounded bg-orange-400">A</td>
    <td> 
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}

          src={`https://avatars2.githubusercontent.com/u/11524380?s=200&v=4`}
         
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/expo/expo/main/.github/resources/banner.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/latex/latex.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/tensorflow/tensorflow.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vim/vim.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://avatars.githubusercontent.com/u/5155369?s=200&v=4`}
          width={65}
          height={65}
          priority
        />
        </td>

    </tr>
    <tr>
    <td className="w-auto mx-1 p-3 px-8 border-gray-700 dark:border-white border text-black rounded bg-yellow-500">B</td>
      <td> 
        <Image
        className="lg:mt-1 lg:mb-1 lg:ml-1"
        alt={``}
        src={`https://raw.githubusercontent.com/github/explore/180320cffc25f4ed1bbdfd33d4db3a66eeeeb358/topics/cpp/cpp.png`}
        width={65}
        height={65}
        priority
        />
      </td>
      <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/json/json.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/e65ef46ef3e7bc457c93622f6a89fe8d3fd131d5/topics/graphql/graphql.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://avatars.githubusercontent.com/u/67109815?s=200&v=4`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/terminal/terminal.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td>
          <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://avatars.githubusercontent.com/u/639823?s=200&v=4`}
          width={65}
          height={65}
          priority
        />
        </td>
    </tr>
    
    <tr>
    <td className="w-auto mx-1 p-3 px-8 border-gray-700 dark:border-white border text-black rounded bg-yellow-300">C</td>
      <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/flask/flask.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://camo.githubusercontent.com/fa13fd3d5737d87e0ece5135ec7834edf37f2df05674a2892a5d619334b94bcb/68747470733a2f2f676574626f6f7473747261702e636f6d2f646f63732f352e332f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react-native/react-native.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/go/go.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/a5995564b5ff71c41da080abc49f1ba4132127c1/topics/sketch/sketch.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/logo/webhooks/master/images/logo.svg`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/eaef8552d8b082ffafe2bfc8a5023d47da904aac/topics/azure/azure.png`}
          width={65}
          height={65}
          priority
        />
        </td>
    </tr>

    <tr>
    <td className="w-auto mx-1 p-3 px-8 border-gray-700 dark:border-white border text-black rounded bg-green-300">D</td>
    <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/wordpress/wordpress.png`}
          width={65}
          height={65}
          priority
        />
        </td>
      <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={`https://raw.githubusercontent.com/github/explore/ccc16358ac4530c6a69b1b80c7223cd2744dea83/topics/php/php.png`}
          src={`https://raw.githubusercontent.com/github/explore/e495457f5ff28c343f9e422f8e3cf80fd3e80890/topics/assembly/assembly.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/ccc16358ac4530c6a69b1b80c7223cd2744dea83/topics/php/php.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png`}
          width={65}
          height={65}
          priority
        />
        </td>
<td></td>
<td></td>
<td></td>
    </tr>
    <tr>
    <td className="w-auto mx-1 p-3 px-8 border-gray-700 dark:border-white border text-black rounded bg-green-500">E</td>
      <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rails/rails.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://avatars.githubusercontent.com/u/95248176?s=200&v=4`}
          width={65}
          height={65}
          priority
        />
        </td>
              <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>

    </tr>

    <tr>
    <td className="w-auto mx-1 p-3 px-8 border-gray-700 dark:border-white border text-black rounded bg-sky-500">F</td>
      <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/spring-boot/spring-boot.png`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td> 
        <Image
          className="lg:mt-1 lg:mb-1 lg:ml-1"
          alt={``}
          src={`https://avatars.githubusercontent.com/u/210414?s=200&v=4`}
          width={65}
          height={65}
          priority
        />
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    
  </tbody>
</table>
<p className="font-bold text-xl md:text-2xl tracking-tight mb-4 text-black dark:text-white">
        Tier List Legend
        </p>
<p className="text-gray-700 dark:text-gray-300 mt-2">
           <a className="underline decoration-red-600 text-black dark:text-white" >S-Tier:</a> 
           <a target="_blank"
    rel="noopener noreferrer"
href="https://python.org"> Python</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://selenium.dev"> Selenium</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://code.visualstudio.com"> Visual Studio Code</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://nextjs.org"> Next.JS (TypeScript)</a>,

           <a target="_blank"
    rel="noopener noreferrer"
href="https://firebase.google.com"> FireBase</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://github.com"> GitHub</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://markdownguide.org"> MarkDown</a>,
 <a target="_blank"
    rel="noopener noreferrer"
href="https://postman.com"> Postman API</a>

        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
           <a className="underline decoration-orange-400 text-black dark:text-white" >A-Tier:</a> 
           <a target="_blank"
    rel="noopener noreferrer"
href="https://microsoft.com/powershell"> PowerShell</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://typescriptlang.org"> TypeScript</a>,
<a target="_blank"
    rel="noopener noreferrer"
href="https://expo.dev"> Expo</a>,
           <a target="_blank"
    rel="noopener noreferrer"
    href="https://latex-project.org"> LaTeX</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://tensorflow.org"> TensorFlow</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://www.vim.org"> Vim</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://www.docker.com"> Docker</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://figma.com"> Figma</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
           <a className="underline decoration-yellow-500 text-black dark:text-white" >B-Tier:</a> 
           <a target="_blank"
    rel="noopener noreferrer"
href="https://cplusplus.com/"> C++</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://json.org"> JavaScript Object Notation (JSON)</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://github.com/topics/html"> HTML5</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://graphql.org"> Graph QL</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://tailwindcss.com"> Tailwind CSS</a>,
      <a target="_blank"
    rel="noopener noreferrer"
href="https://python.org"> GIT</a>,
<a target="_blank"
    rel="noopener noreferrer"
href="https://shellscript.sh"> Batch / Bash (.Batch / .sh / .Zsh)</a>,
<a target="_blank"
    rel="noopener noreferrer"
href="https://travis-ci.com"> Travis CI</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
           <a className="underline decoration-yellow-300 text-black dark:text-white" >C-Tier:</a> 
           <a target="_blank"
    rel="noopener noreferrer"
href="https://flask.palletsprojects.com"> Flask (Python)</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://getbootstrap.com"> BootStrap</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://python.org"> JavaScript</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://reactjs.org"> React</a> & <a target="_blank"
rel="noopener noreferrer"
href="https://reactnative.dev"> React Native</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://go.dev"> Go(Golang)</a>,
<a target="_blank"
    rel="noopener noreferrer"
href="https://sketch.com"> Sketch</a>,
<a target="_blank"
    rel="noopener noreferrer"
href="https://webhook.site"> Webhooks</a>,
<a target="_blank"
    rel="noopener noreferrer"
href="https://azure.microsoft.com"> Microsoft Azure (Azure / Azure AD -- AAD / Intune)</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
           <a className="underline decoration-green-300 text-black dark:text-white" >D-Tier:</a> 
           <a target="_blank"
    rel="noopener noreferrer"
href="https://wordpress.com"> WordPress</a>,
           <a target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/topics/assembly-language"> Assembly Language(ASM)</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://php.net"> php</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://mongodb.com"> MongoDB</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://mysql.com"> MySQL</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
           <a id="imageAudio" className="underline decoration-green-500 text-black dark:text-white" >E-Tier:</a> 
           <a target="_blank"
    rel="noopener noreferrer"
href="https://rubyonrails.org"> Ruby on Rails (RoR)</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://eclipse.org"> Eclipse</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://java.com"> Java</a>

        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
           <a className="underline decoration-sky-500 text-black dark:text-white" >F-Tier:</a> 
           <a target="_blank"
    rel="noopener noreferrer"
href="https://spring.io"> Spring Boot</a>,
           <a target="_blank"
    rel="noopener noreferrer"
href="https://ruby-lang.org"> Ruby</a>
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2 mb-8">
          *Subject to change based on Projects given, and new technologies emerging.
        </p>
      </article>
    </Container>
  );
}
