import Button from "../components/Button";
import { exploreCities, quickLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-accent-2 py-12 text-white">
      <div className="container mx-auto">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center border-b pb-12 border-b-grey-3/10">
          <img src="/images/logo.png" alt="logo" />
          <div>
            <span className="text-center block mb-2">Follow Us</span>
            <ul className="flex gap-6 items-center">
              <li>
                <a href="#">
                  <img src="/images/icons/fb.png" alt="fb" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icons/x.png" alt="x" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icons/instagram.png" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/images/icons/in.png" alt="in" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle */}

        <div className="grid md:justify-items-start grid-cols-1 lg:grid-cols-4 xl:grid-cols-6 gap-8 px-4 py-12 p3">
          {/* 1 */}
          <div className="flex flex-col gap-4 col-span-1 lg:col-span-2 w-full lg:w-[75%]">
            <h4 className="h4 text-white/70">Subscribe</h4>
            <div className="flex p3">
              <input
                className="bg-transparent flex-1 outline-none"
                type="email"
                placeholder="Your e-mail"
              />
              <Button
                icon={"/images/icons/arrow.png"}
                classnames={"border-none bg-white/15 hover:bg-white/10"}
              >
                Send
              </Button>
            </div>
            <span className="text-sm">
              Subscribe to our newsletter to receive our weekly feed.
            </span>
          </div>
          {/* 2 */}
          <div className="space-y-4">
            <h4 className="h4 text-white/70">Discover</h4>
            <ul className="space-y-2">
              {exploreCities.map((city, idx) => (
                <li key={idx}>
                  <a href="#">{city.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* 3 */}
          <div className="space-y-4">
            <h4 className="h4 text-white/70">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div className="space-y-4 lg:col-span-2 xl:col-span-1">
            <h4 className="h4 text-white/70">Contact Us</h4>
            <ul className="space-y-2">
              <li>99 Fifth Avenue, 3rd Floor San Francisco, CA 1980</li>
              <li>hi@justhome.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>
          {/* App */}
          <div className="space-y-4 col-span-1 lg:col-span-2 xl:col-span-1">
            <h4 className="h4 text-white/70">Get the app</h4>
            {/*  */}
            <a
              href="#"
              className="bg-white/15 hover:bg-white/10 rounded-xl flex items-center gap-4 p-4 transition-all duration-200"
            >
              <img src="/images/icons/apple.png" alt="apple" />
              <div className="border-l border-l-grey-3/30 pl-4">
                <span className="block text-xs">Download on the</span>
                <span className="block font-medium">Apple Store</span>
              </div>
            </a>
            {/*  */}
            <a
              href="#"
              className="bg-white/15 hover:bg-white/10 rounded-xl flex items-center gap-4 p-4 transition-all duration-200"
            >
              <img src="/images/icons/playstore.png" alt="apple" />
              <div className="border-l border-l-grey-3/30 pl-4">
                <span className="block text-xs">Get it on</span>
                <span className="block font-medium">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs border-t pt-12 mt-12 border-t-grey-3/10">
          Copyright © 2024. JustHome
        </p>
      </div>
    </footer>
  );
};

export default Footer;
