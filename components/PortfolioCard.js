import { useState } from 'react';
import Image from 'next/image';
import macbook from '../public/images/portfolio/macbook.png';

export default function PortfolioCard({
  projectImage,
  link,
  sourceCode,
  info,
  technology,
}) {
  const [show, setShow] = useState(false);

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(!show)}
      className='relative shadow-md dark:shadow-none dark:hover:shadow-none dark:border-white dark:border-[1px] hover:shadow-2xl transition p-4 rounded-md'
    >
      {show && (
        <>
          <div className='flex justify-center items-center z-10 space-x-10 absolute inset-0 bg-gray-700 opacity-80 rounded-md'>
            <div className='block text-center'>
              <a
                className='inline-block p-1 rounded-full text-white border'
                href={sourceCode}
                target='_blank'
                rel='noopener noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-10 w-10'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <p className='text-xs text-white font-bold'>SourceCode</p>
            </div>
            {link && (
              <>
                <div className='block text-center'>
                  <a
                    className='inline-block p-1 rounded-full text-white border'
                    href={link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-10 w-10'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
                      />
                    </svg>
                  </a>
                  <p className='text-xs text-white font-bold'>Visit Project</p>
                </div>
              </>
            )}
          </div>
        </>
      )}

      <div className='b-preview__laptop'>
        <Image className='object-cover' src={macbook} alt={info} />
        <img className='b-preview__holder' src={projectImage} />
        {/* <img className='object-cover' src='/images/portfolio/macbook.png' />  */}
        {/* <img className='object-cover' src='/images/portfolio/macbook.png' /> */}
      </div>
      <p className='text-xs text-center text-gray-700 -mt-5 dark:text-gray-500'>
        {info}
      </p>
      <div className='mt-5 flex justify-around item-center flex-wrap'>
        {technology.map((tech, index) => (
          <div className='p-1' key={index}>
            <small className='bg-gray-600 py-1 px-2 rounded-lg text-gray-200 text-xs'>
              {tech}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
