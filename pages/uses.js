import Heading from '../components/Heading';
import HighlightText from '../components/HighlightText';

export default function uses() {
  return (
    <main className='lg:max-w-[80%] mx-auto p-2'>
      <div className='p-4'>
        <div className='h-[450px] md:h-[400px] lg:h-[500px] w-full'>
          <img
            className='object-cover object-center w-full h-full'
            src='/images/uses/banner.jpg'
            alt='user-banner'
          />
        </div>
        <div className='mt-7'>
          <Heading center={false} headingText='Uses' />
          <div className='font-lobsterTwo text-gray-700 flex justify-start items-center space-x-12 mt-3'>
            <p className='text-lg '>December 12, 2019</p>
            <p>Other</p>
          </div>

          <div className='flex flex-col space-y-3 font-light italic text-[0.9rem]'>
            <p>
              I have getting question about what I use for coding, apps I use
              and so much.
            </p>
            <p>
              I mostly change my settings to fit my current work depending on
              what I am doing. If if I am creating a website or creating a
              mobile app or even web scrapping.
            </p>
            <p>
              And if you have something you want to know just let me know{' '}
              <a href='mailto:chrispydev.owusu@gmail.com'>
                <HighlightText highlightText='chrispydev.owusu@gmail.com' />
              </a>
            </p>
          </div>
          <div className='mt-8'>
            <div>
              <Heading center={false} headingText='Machine & OS' />

              <div className='flex flex-col space-y-3 font-light italic text-[0.9rem]'>
                <p>
                  My machine of choice is{' '}
                  <HighlightText highlightText='Dell Latitude E7240 00.' />{' '}
                  Which runs on a ubuntu Ubuntu 20.04.4 LTS x86_64 since I am a
                  linux user. I prefer linux or unix over windows because of
                  some past experience with windows.
                </p>
                <p>
                  I also started using garuda linux which is arch based linux
                  and awesome for coding and gaming.
                  <a href='https://garudalinux.org/'>
                    <HighlightText highlightText='Garuda Linux  .' />{' '}
                  </a>
                  Plus you get any application you want to install and there is
                  nothing like bloatware
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
