export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-2 ">
      <header className="text-green text-5xl font-black">
        <h1>My FC</h1>
      </header>
      <form className="flex items-center rounded-md border-solid border-2 border-green">
        <input
          type="text"
          placeholder="감독명을 입력해주세요."
          className="p-2 border border-gray-300 "
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
          검색
        </button>
      </form>
    </main>
  );
}
