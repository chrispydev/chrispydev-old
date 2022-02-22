import Header from './Header';
import HtmlHead from './HtmlHead';

export default function Layout({ children }) {
  return (
    <div className='max-w-screen-2xl mx-auto font-poppins selection:bg-secondary selection:text-primary'>
      <HtmlHead />
      <Header />
      {children}
    </div>
  );
}
