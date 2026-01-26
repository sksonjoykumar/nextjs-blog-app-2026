import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="mx-auto max-w-350 bg-[#F8F5EE] px-10 md:px-24">
        <div className="flex justify-between gap-10">
          <div className="">
            <h1 className="text-4xl font-semibold text-indigo-400">About Us</h1>
            <p className="text-balance text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore libero quod id sint, voluptatem laboriosam distinctio
              labore velit! At aliquam magnam dolor dolorum voluptatibus
              consequuntur optio nostrum ab voluptatem neque.
            </p>
          </div>
          {/* <Image src={} alt='About-img'/> */}
        </div>
      </div>
    </>
  );
}
