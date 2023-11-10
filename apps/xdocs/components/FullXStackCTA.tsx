import Link from "next/link";

function FullXStackCTA() {
  return (
    <div className="flex flex-col items-start w-full gap-4 p-6 mt-8 bg-white shadow-lg md:items-center md:flex-row rounded-xl dark:bg-opacity-5">
      <div className="justify-start flex-1">
        <h3 className="font-semibold leading-6 tracking-tight">
          Ready to launch a DAO for your organization?
        </h3>
        <div className="text-base font-medium leading-7 text-gray-500 dark:text-gray-400">
          XBallot&apos;s dev team can get you up and running in no time.
        </div>
      </div>
      <div className="flex-none">
        <Link
          href="/contact"
          className="justify-center block px-4 py-2 text-black no-underline bg-white rounded-full dark:bg-opacity-5 dark:text-white"
        >
          Talk to an Expert
        </Link>
      </div>
      <style jsx global>{`
        .full-turbo {
          background-image: linear-gradient(
            60deg,
            rgba(50, 134, 241, 1) 0%,
            rgba(255, 30, 86, 1) 100%
          );
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}

export default FullXStackCTA;
