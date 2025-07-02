import Image from "next/image";

export default function Home() {
  return (
    <div
      className="min-h-screen p-8 bg-[#f0efeb]"
      style={{ fontFamily: "var(--font-norb-pen)" }}
    >
      <div
        className="bg-[#f0efeb] h-[calc(100vh-4rem)] border-7 border-black overflow-hidden"
        style={{
          position: "relative",
        }}
      >
        <Image
          src="/bubbles.svg"
          alt="Decorative bubbles"
          width={400}
          height={400}
          className="absolute top-0 left-0 w-[300px] sm:w-[400px] h-auto z-0"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "black",
            transform: "rotate(-10deg)",
            width: "150%",
            height: "7px",
            position: "absolute",
            top: "50%",
            left: "-25%",
            zIndex: 1,
          }}
        />
        <Image
          src="/bubbles.svg"
          alt="Decorative bubbles"
          width={400}
          height={400}
          className="absolute bottom-0 right-0 rotate-180 w-[300px] sm:w-[400px] h-auto z-0"
        />
        <Image
          src="/bubble-logo.svg"
          alt="Let Me Show You Something"
          width={200}
          height={200}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] sm:w-[300px] h-auto z-20"
        />
        <main className="flex flex-col p-6 items-center sm:items-start font-norbpen text-6xl relative z-10">
          <p>Developer Meetup</p>
        </main>
      </div>
    </div>
  );
}
