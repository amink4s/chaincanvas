'use client';

import { useNeynarContext } from "@neynar/react";

export default function Home() {
  const { user, login } = useNeynarContext();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-900 text-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-700 bg-gray-800 from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-700 lg:p-4">
          Chain Canvas
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {user ? (
            <div>
              <p>Welcome, FID: {user.fid}</p>
            </div>
          ) : (
             <button
                onClick={login}
                className="rounded bg-purple-600 px-4 py-2 font-bold text-white hover:bg-purple-700"
            >
                Sign in with Farcaster
            </button>
          )}
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="w-[560px] h-[560px] bg-gray-800 border border-gray-600 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">Today's canvas will be here.</p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* Placeholder for actions or gallery */}
      </div>
    </main>
  );
}