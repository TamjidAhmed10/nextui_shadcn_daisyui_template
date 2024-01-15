import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { Button as NextButton } from "@nextui-org/button";

import { title, subtitle } from "@/components/primitives";
import NextCard from "@/components/nextCards";
import { ShadcnButton } from "@/components/ShadcnButton";
import { CardWithForm } from "@/components/ShadCnCards";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Make&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
        <br />
        <h1 className={title()}>
          websites regardless of your design experience.
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </h2>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div>
          <h2 className=" text-3xl font-semibold mb-4 text-center">
            NextUI Components
          </h2>
          <div className=" grid grid-cols-3 gap-4">
            <NextButton color="default">Default</NextButton>
            <NextButton color="primary">Primary</NextButton>
            <NextButton color="secondary">Secondary</NextButton>
            <NextButton color="success">Success</NextButton>
            <NextButton color="warning">Warning</NextButton>
          </div>
          <div className="mt-4">
            <NextCard />
          </div>
        </div>
        <div>
          <h2 className=" text-3xl font-semibold mb-4 text-center">
            Daisy Ui Components
          </h2>
          <div className=" grid grid-cols-3 gap-4">
            <button className="btn">Button</button>
            <button className="btn btn-neutral">Neutral</button>
            <button className="btn btn-primary">Primary</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-accent">Accent</button>
            <button className="btn btn-ghost">Ghost</button>
          </div>
          <div className="mt-4">
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="stats shadow mt-4">
            <div className="stat">
              <div className="stat-figure text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
             
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-8 h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-primary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>
        <div>
        <h2 className=" text-3xl font-semibold mb-4 text-center">
            Shadcn Components
          </h2>
          <ShadcnButton/>
          <CardWithForm/>
        </div>
      </div>
      <div className="mt-8">
        <Snippet hideSymbol hideCopyButton variant="flat">
          <span>
            Get started by editing <Code color="primary">app/page.tsx</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
