import Heading from '../components/Heading';

export default function uses() {
  return (
    <main className='max-w-[80%]'>
      <div className='p-4'>
        <Heading headingText='Uses' />

        <div className='container mt-[3rem]'>
          <p className='text-left leading-8'>
            Make sure to check out [uses.tech]{' '}
            <small className='text-primary'>(https://uses.tech)</small> for a
            list of everyone's /uses pages! Everyday I get a few emails asking
            about the specifics of some piece of software or hardware I use. I
            change up things fairly often, so this page will serve as a living
            document and a place to point curious developers to when I get
            asked. If there is something missing shoot me a tweet{' '}
            <a href='https://twitter.com/wesbos'>@wesbos</a> and I'll add it.
            Most of these links are amazon affiliate links, so I'll get philthy
            rich if you click them and buy something.
          </p>
        </div>
      </div>
    </main>
  );
}
