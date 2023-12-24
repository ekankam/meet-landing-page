import PropTypes from "prop-types";
import Button from "./ui/button";

function Image({ url, className }) {
  return <img src={url} alt="image" className={className} />;
}

Image.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
};

function Content() {
  return (
    <div className="text-center w-full px-6 mt-12 static lg:absolute lg:top-1/2">
      <h1 className="mb-6 text-brand-space-cadet text-[40px] font-black leading-[44px] md:text-[48px] lg:text-[64px] lg:mb-[34px] lg:leading-[64px]">
        Group Chat <br /> for Everyone
      </h1>
      <p className="text-brand-cool-gray leading-[26px] lg:text-lg w-5/6 md:w-[55%] lg:w-[550px] mx-auto mb-8">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className="flex flex-col md:flex-row items-center w-full justify-center gap-4">
        <Button className="bg-brand-blue hover:bg-brand-photo-blue group">
          Download{" "}
          <span className="text-brand-photo-blue ml-1 group-hover:text-brand-blue">
            v1.3
          </span>
        </Button>
        <Button className="bg-brand-royal-purple hover:bg-brand-mauve">
          What is it?
        </Button>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className=" w-full relative">
      <Image
        url="/assets/desktop/image-hero-left.png"
        className="absolute left-0 hidden lg:block"
      />
      <Image
        url="/assets/desktop/image-hero-right.png"
        className="absolute right-0 hidden lg:block"
      />
      <Image url="/assets/tablet/image-hero.png" className="block lg:hidden" />
      <Content />
    </section>
  );
}
