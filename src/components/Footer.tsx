import { Instagram, Twitter, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full max-w-[1200px] flex flex-col px-8">
      <h1 className="font-bold">Carscout: European online car platform.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 py-8 gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Carscout</h1>
          <p className="cursor-pointer">Press</p>
          <p className="cursor-pointer">Career</p>
          <p className="cursor-pointer">Legal information</p>
          <p className="cursor-pointer">Privacy</p>
          <p className="cursor-pointer">Media</p>
          <p className="cursor-pointer">About Carscout</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Service</h1>
          <p className="cursor-pointer">Contact</p>
          <p className="cursor-pointer">Frequently Asked</p>
          <p className="cursor-pointer">Questions</p>
          <p className="cursor-pointer">Brand overview</p>
          <p className="cursor-pointer">Occasions by region</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Car company</h1>
          <p className="cursor-pointer">Login</p>
          <p className="cursor-pointer">Register</p>
          <p className="cursor-pointer">Information</p>
          <p className="cursor-pointer">Contact</p>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Follow us on</h1>
            <p className="cursor-pointer">Carscout for IOS</p>
            <p className="cursor-pointer">Carscout for Android</p>
            <div className="flex flex-row gap-4 items-center">
              <Instagram
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://www.instagram.com/Carscout---");
                }}
              />
              <Twitter
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://twitter.com/Carscout---");
                }}
              />
              <Linkedin
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://www.linkedin.com/company/Carscout---");
                }}
              />
              <Youtube
                size={24}
                className="cursor-pointer"
                onClick={() => {
                  window.open("https://www.youtube.com/user/Carscout---");
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-2 py-6">
        <p className="font-light text-sm text-gray-400">
          © Copyright 2024 AutoScout24 Nederland B.V. All rights reserved.
        </p>
        <p className="font-light text-sm text-gray-400">
          AutoScout24.nl, LeaseVergelijker, AutoProff, Carscout Media and Smyle
          are part of the Carscout family.
        </p>
      </div>
    </footer>
  );
}
