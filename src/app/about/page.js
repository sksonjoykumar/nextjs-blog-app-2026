"use client";
import Img1 from "@/public/images/im-3.jpg";
import Img2 from "@/public/images/img-02.jpg";
import Img3 from "@/public/images/img-04.jpg";
import Img4 from "@/public/images/img-05.jpg";
import Image from "next/image";

export default function About() {
  return (
    <>
      <main>
        <div className="bg-[#F8F5EE]">
          <div className="mx-auto max-w-350 px-10 md:px-24">
            <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row lg:gap-14">
              <div className="">
                <h1 className="text-4xl font-semibold text-indigo-400 md:text-5xl">
                  About Us
                </h1>
                <p className="mt-4 text-sm text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore libero quod id sint, voluptatem laboriosam
                  distinctio labore velit! At aliquam magnam dolor dolorum
                  voluptatibus consequuntur optio nostrum ab voluptatem neque.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore libero quod id sint, voluptatem laboriosam
                  distinctio labore velit! At aliquam magnam dolor dolorum
                  voluptatibus consequuntur optio nostrum ab voluptatem neque.
                </p>
              </div>
              <Image
                src={Img1}
                className="w-full rounded-4xl object-cover shadow-sm md:w-1/2"
                placeholder="blur"
                alt="About-img"
              />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-350 px-10 md:px-24">
          <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row lg:gap-14">
            <Image
              src={Img2}
              className="w-full rounded-4xl object-cover shadow-sm md:w-1/2"
              placeholder="blur"
              alt="About-img"
            />
            <div className="">
              <h1 className="text-3xl font-semibold text-gray-700">
                Our Mission: Helping Millions of Organizations Grow Better
              </h1>
              <p className="mt-4 text-sm text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore libero quod id sint, voluptatem laboriosam distinctio
                labore velit! At aliquam magnam dolor dolorum voluptatibus
                consequuntur optio nostrum ab voluptatem neque. Lorem ipsum,
                dolor sit amet consectetur adipisicing elit. Inventore libero
                quod id sint, voluptatem laboriosam distinctio labore velit! At
                aliquam magnam dolor dolorum voluptatibus consequuntur optio
                nostrum ab voluptatem neque.
              </p>
            </div>
          </div>
        </div>

        <div >
          <div className="mx-auto max-w-350 px-10 md:px-24">
            <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row lg:gap-14">
              <div className="">
                <h1 className="text-3xl font-semibold text-gray-700">
                  Our Story
                </h1>
                <p className="mt-4 text-sm text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore libero quod id sint, voluptatem laboriosam
                  distinctio labore velit! At aliquam magnam dolor dolorum
                  voluptatibus consequuntur optio nostrum ab voluptatem neque.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore libero quod id sint, voluptatem laboriosam
                  distinctio labore velit! At aliquam magnam dolor dolorum
                  voluptatibus consequuntur optio nostrum ab voluptatem neque.
                </p>
              </div>
              <Image
                src={Img3}
                className="w-full rounded-4xl object-cover shadow-sm md:w-1/2"
                placeholder="blur"
                alt="About-img"
              />
            </div>
          </div>
        </div>
        <div className="bg-indigo-50">
          <div className="mx-auto max-w-350 px-10 md:px-24">
            <div className="flex flex-col items-center justify-between gap-8 py-10 md:flex-row lg:gap-14">
              <Image
                src={Img4}
                className="w-full rounded-4xl object-cover shadow-sm md:w-1/2"
                placeholder="blur"
                alt="About-img"
              />
              <div className="">
                <h1 className="text-3xl font-semibold text-gray-700">
                  Our Mission
                </h1>
                <p className="mt-4 text-sm text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore libero quod id sint, voluptatem laboriosam
                  distinctio labore velit! At aliquam magnam dolor dolorum
                  voluptatibus consequuntur optio nostrum ab voluptatem neque.
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore libero quod id sint, voluptatem laboriosam
                  distinctio labore velit! At aliquam magnam dolor dolorum
                  voluptatibus consequuntur optio nostrum ab voluptatem neque.
                </p>
              </div>
            </div>
          </div>
        </div>
       

        <div className="mx-auto max-w-350 px-10 md:px-24 mt-10 mb-12">
          <div className="sm:max-w-1/2">
            <h1 className="text-2xl font-semibold text-indigo-400">
              🌱 Simple & Friendly
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Our story began with a love for sharing ideas, experiences, and
              knowledge. This blog was created as a space where curiosity meets
              creativity, and where stories are told honestly and thoughtfully.
              What started as a small passion project has grown into a platform
              dedicated to learning, inspiration, and meaningful conversations.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex justify-end">
              <div className="sm:w-1/2">
                <h1 className="text-2xl font-semibold text-indigo-400">
                  ✍️ Professional & Inspiring
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  This blog was founded with a clear purpose: to create valuable
                  content that informs, inspires, and connects people. We
                  believe that powerful stories and practical insights can make
                  a real difference. Every article we publish is crafted with
                  care, authenticity, and a deep respect for our readers.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="mt-10 sm:max-w-1/2">
            <h1 className="text-2xl font-semibold text-indigo-400">
              🚀 Passion-Driven & Creative
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Our journey started with a simple idea—to turn thoughts into
              stories and stories into impact. This blog is a reflection of our
              passion for creativity, technology, and personal growth. We aim to
              explore fresh perspectives, share real experiences, and build a
              community that values learning and originality.
            </p>
          </div>
          <div className="mt-10">
            <div className="flex justify-end">
              <div className="sm:w-1/2">
                <h1 className="text-2xl font-semibold text-indigo-400">
                  🌍 Community-Focused
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                  At the heart of our blog is a growing community of readers who
                  believe in sharing knowledge and supporting one another. Our
                  story is not just about writing—it’s about connection. We
                  welcome diverse voices, new ideas, and thoughtful discussions
                  that help us all grow together.
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="mt-10 sm:max-w-1/2">
            <h1 className="text-2xl font-semibold text-indigo-400">
              💡 Modern & Tech-Friendly (Great for Dev/Portfolio Blogs)
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Our blog was born from a desire to document learning, share
              insights, and stay curious in a fast-changing digital world. From
              technology and development to creativity and ideas, this platform
              is where knowledge is shared openly and growth is continuous.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
