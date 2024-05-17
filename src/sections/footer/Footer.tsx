import Link from 'next/link';

import { CenteredFooter } from './CenteredFooter';
import { Logo } from '../../components/Logo';

const Footer = () => (
  <footer className="p-5">
    <CenteredFooter
      logo={<Logo className="footer-logo"/>}
      iconList={
        <>
          <Link href="/" className="w-[8.5rem]">
            <img src="/assets/images/socials/Social.png" alt="X" />
          </Link>

          <Link href="/" className="w-[8.5rem]">
            <img src="/assets/images/socials/Social2.png" alt="Youtube" />
          </Link>

          <Link href="/" className="w-[8.5rem]">
            <img src="/assets/images/socials/Social3.png" alt="Youtube" />
          </Link>

          <Link href="/" className="w-[8.5rem]">
            <img src="/assets/images/socials/Social4.png" alt="Youtube" />
          </Link>
        </>
      }
    ></CenteredFooter>
  </footer>
)

export { Footer };
