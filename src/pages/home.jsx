import PropTypes from "prop-types";
import Hero from "../components/hero";
import Layout from "../components/layouts/layout";
import Step from "../components/ui/step";
import Button from "../components/ui/button";

function ImageContainer({ src, alt }) {
  return (
    <div className="flex-shrink-0 overflow-hidden rounded-lg">
      <img src={src} alt={alt} className="h-auto max-w-full" />
    </div>
  );
}

ImageContainer.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};

function Content() {
  return (
    <section className="pt-24 md:pt-[114px] w-full static lg:absolute lg:top-[30.5rem]">
      <div className="flex items-center justify-center w-full mb-16">
        <Step label="01" />
      </div>
      <div className="grid grid-cols-2 w-full place-items-center gap-4 px-6 md:grid-cols-4 mb-14 md:mb-[38px] lg:mb-[66px]">
        <ImageContainer
          src="/assets/desktop/image-woman-in-videocall.jpg"
          alt="woman on a videocall"
        />
        <ImageContainer
          src="/assets/desktop/image-women-videochatting.jpg"
          alt="women videochatting"
        />
        <ImageContainer
          src="/assets/desktop/image-men-in-meeting.jpg"
          alt="men in a meeting"
        />
        <ImageContainer
          src="/assets/desktop/image-man-texting.jpg"
          alt="men texting"
        />
      </div>
      <div className="flex flex-col items-center text-center">
        <p className="font-black tracking-[4px] uppercase text-brand-blue mb-6">
          Built for modern use
        </p>
        <h2 className="text-brand-space-cadet text-[32px] leading-9 font-black mb-[38px] w-3/4 md:text-[40px] md:w-[445px]">
          Smarter meetings, all in one place
        </h2>
        <p className="text-brand-cool-gray leading-[26px] w-4/5 md:w-3/4 lg:text-lg lg:w-[510px]">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
      <footer className="bg-[url('/assets/mobile/image-footer.jpg')] md:bg-[url('/assets/tablet/image-footer.jpg')] lg:bg-[url('/assets/desktop/image-footer.jpg')] h-full w-full bg-no-repeat bg-cover mt-[184px] relative  before:content-[''] before:absolute before:inset-0 before:block before:bg-brand-blue before:opacity-85 before:z-[-5] z-10 px-6 py-20">
        <Step
          label="02"
          className="absolute -translate-x-1/2 -top-28 left-1/2"
        />
        <div className="flex flex-col items-center justify-center text-center text-brand-seasalt lg:flex-row lg:gap-20 lg:text-start">
          <div className=" text-[32px] font-black leading-9 mb-6 lg:text-[40px] lg:w-96">
            Experience more together
          </div>
          <p className="text-lg leading-[26px] mb-8 md:w-3/4 lg:w-96">
            Stay connected with reliable HD meetings and unlimited one-on-one
            and group video sessions.
          </p>
          <Button className="bg-brand-royal-purple hover:bg-brand-mauve group">
            Download{" "}
            <span className="ml-1 group-hover:text-brand-royal-purple">
              v1.3
            </span>
          </Button>
        </div>
      </footer>
    </section>
  );
}
export default function Home() {
  return (
    <Layout>
      <Hero />
      <Content />
    </Layout>
  );
}
