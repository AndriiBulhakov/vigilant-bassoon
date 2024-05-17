import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';
import Link from 'next/link';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className="bg-white-background rounded-[2rem] p-12 flex justify-between flex-wrap">
    <div className="flex flex-col gap-20 max-w-[18.7rem] w-full">
      {props.logo}
      <a
        href="https://www.producthunt.com/posts/interview-copilot-by-final-round-ai"
        target="_blank"
        id="elzFsCrTr"
      >
        <img
          src="/assets/images/badge.png"
          alt="Product Hunt Badge"
          width="250"
          height="54"
        />
      </a>
    </div>

    <div className="max-w-[46.1rem] w-full">
      <nav className="flex items-start justify-between px-8">
        <ul className="flex flex-col justify-center gap-3">
          <li>Products</li>
          <li>
            <Link href="/about">Interview Copilot®️</Link>
          </li>
          <li>
            <Link href="/about">AI Material Generator</Link>
          </li>
          <li>
            <Link href="/about">Mock Interview α</Link>
          </li>
          <li>
            <Link href="/about">Coding Copilot β</Link>
          </li>
        </ul>
        <ul className="flex flex-col justify-center gap-3">
          <li>Tutorials</li>
          <li>
            <Link href="/about">AI Material Generator</Link>
          </li>
          <li>
            <Link href="/about">Change Log</Link>
          </li>
          <li>
            <Link href="/about">Contact Us</Link>
          </li>
        </ul>
        <ul className="flex flex-col justify-center gap-3">
          <li>Other</li>
          <li>
            <Link href="/about">Affiliate Partnership</Link>
          </li>
          <li>
            <Link href="/about">Share Success Stories</Link>
          </li>
          <li>
            <Link href="/about">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/about">Terms & Conditions</Link>
          </li>
        </ul>
      </nav>

      <div className="mt-32 ml-4 mb-[-1rem]">
        <FooterIconList>{props.iconList}</FooterIconList>
      </div>
    </div>

    <div className="w-full text-body/small ">
      <FooterCopyright />
    </div>
  </div>
)

export { CenteredFooter };
