"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleSearchRoute = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push(`/detail/${name}`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-2 ">
      <header className="text-green text-5xl font-black">
        <h1>My FC</h1>
      </header>
      <form
        className="flex items-center rounded-md border-solid border-2 border-green"
        onSubmit={(event) => handleSearchRoute(event)}
      >
        <input
          type="text"
          placeholder="구단주명을 입력해주세요."
          className="p-2 border border-gray-300 text-black "
          value={name}
          onChange={(e) => handleSearchName(e)}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white h-full"
        >
          검색
        </button>
      </form>
    </main>
  );
}
