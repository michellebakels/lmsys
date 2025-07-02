import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-[#f0efeb]" style={{ fontFamily: 'var(--font-norb-pen)' }}>
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
          className="absolute top-0 left-0 w-[300px] sm:w-[400px] h-auto"
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
          className="absolute bottom-0 right-0 rotate-180 w-[300px] sm:w-[400px] h-auto"
        />
        <main className="flex flex-col gap-[32px] items-center sm:items-start font-norbpen text-6xl">
          Developer Meetup
        </main>
      </div>
    </div>
  );
}
