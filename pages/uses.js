import Image from 'next/image';

import Heading from '../components/Heading';
import HighlightText from '../components/HighlightText';

import usesBanner from '../public/images/uses/banner.jpg';

export default function uses() {
  return (
    <main className='lg:max-w-[80%] mx-auto p-2'>
      <div className='p-4'>
        <Image
          height={550}
          objectFit='cover'
          src={usesBanner}
          alt='user-banner'
        />
        <div className='mt-7'>
          <Heading center={false} headingText='Uses' />
          <div className='font-lobsterTwo text-gray-700 flex justify-start items-center space-x-12 mt-3'>
            <p className='text-lg '>December 12, 2019</p>
            <p>Other</p>
          </div>

          <ul className='uses-container'>
            <li>
              I have getting question about what I use for coding, apps I use
              and so much.
            </li>
            <li>
              I mostly change my settings to fit my current work depending on
              what I am doing. If if I am creating a website or creating a
              mobile app or even web scrapping.
            </li>
            <li>
              And if you have something you want to know just let me know{' '}
              <a href='mailto:chrispydev.owusu@gmail.com'>
                <HighlightText highlightText='chrispydev.owusu@gmail.com .' />
              </a>
            </li>
          </ul>
          <div className='mt-8'>
            <Heading center={false} headingText='Machine & OS' />
            <ul className='uses-container'>
              <li>
                My machine of choice is{' '}
                <HighlightText highlightText='Dell Latitude E7240 00 .' /> Which
                runs on a ubuntu Ubuntu 20.04.4 LTS x86_64 since I am a linux
                user. I prefer linux or unix over windows because of some past
                experience with windows.
              </li>
              <li>
                I also started using garuda linux which is arch based linux and
                awesome for coding and gaming.
                <a href='https://garudalinux.org/'>
                  <HighlightText highlightText='Garuda Linux  .' />{' '}
                </a>
                Plus you get any application you want to install with their AUR
                and there is nothing like bloatware. Just like what you get on
                other operating systems.
              </li>
            </ul>
            <Heading center={false} headingText='Desktop App' />
            <ul className='uses-container'>
              <li>
                <a href='https://code.visualstudio.com/'>
                  <HighlightText highlightText='Vscode' /> is my day to day app
                </a>
                for coding. I do almost everything with vscode. With the
                exception of python heavy app which I use pycharm for. I use
                this because it has a lot of extensions for any kind of project
                you are doing whether it is Web, Mobile, AI or even Data
                Science.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
