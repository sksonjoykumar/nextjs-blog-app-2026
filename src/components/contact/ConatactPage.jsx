"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto w-full max-w-350 px-10 py-10 md:px-24">
        <div className="h-125 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.06396691728!2d90.25487771867817!3d23.780753031822396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1769433485924!5m2!1sen!2sbd"
            className="h-full w-full rounded-xl border-2 shadow-sm"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="bg-[#F8F5EE]">
        <div className="mx-auto w-full max-w-350 px-10 py-12 md:px-24">
          <div className="flex flex-col items-center justify-between gap-8 text-center md:flex-row md:gap-16 md:text-left">
            <div className="w-1/2">
              <h1 className="text-4xl font-semibold text-indigo-400 md:text-5xl">
                Contact Us.
              </h1>
              <p className="mt-4 text-sm text-gray-600">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit,
                ad suscipit eos voluptatem quas aliquam hic doloribus laboriosam
                in labore, facere dolores! Officiis earum minima dolores
                recusandae, repellat eos dignissimos incidunt voluptas libero
                consequatur consectetur placeat doloribus, praesentium nisi ad!
              </p>
              <div className="mt-8 flex justify-between gap-10">
                <div>
                  <h3 className="font-semibold text-balance text-gray-700">
                    Dhaka
                  </h3>
                  <p className="text-sm leading-5 text-gray-600">
                    House 97 Road 25,
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    Block-A Banani, Dhaka 1213
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    infoexample@gmail.com
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-balance text-gray-700">
                    Chattrogram
                  </h3>
                  <p className="text-sm leading-5 text-gray-600">
                    House 97 Road 25,
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    Block-A Banani, Chattrogram 1213
                  </p>
                  <p className="text-sm leading-5 text-gray-600">
                    infoexample@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl font-semibold text-indigo-400">
                Send Your Message
              </h1>
              <form className="mt-5 w-full">
                <Input
                  type="text"
                  className="mb-5 w-full border border-gray-300 bg-white py-4.5 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Name"
                />
                <Input
                  type="email"
                  className="mb-5 w-full border border-gray-300 bg-white py-4.5 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Your Email"
                />
                <textarea
                  className="mb-5 h-40 w-full resize-none rounded-md border border-gray-300 bg-white p-2 text-gray-900 focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Enter message"
                />
                <Button
                  type="submit"
                  className="w-full cursor-pointer bg-indigo-500 text-white hover:bg-[#6a67fc]"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
