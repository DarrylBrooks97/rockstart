export default function Home() {
  return (
    <main className="bg-black h-screen w-screen p-3">
      <div className="p-3 flex justify-center items-center h-full w-full">
        <div
          className="flex flex-col justify-center w-[394px] items-center relative bg-black rounded-md h-[700px] before:absolute before:animate-glow before:-top-0.5 before:-left-0.5 before:h-[calc(100%+4px)] before:w-[calc(100%+4px)] before:bg-[linear-gradient(45deg,red,green,
    rgb(45,45,131),yellow,pink,skyblue,
    purple,red,green,blue,tomato,yellow)] before:-z-10 before:rounded-md before:bg-[length:400%] after:absolute after:animate-glow after:-top-0.5 after:-left-0.5 after:h-[calc(100%+4px)] after:w-[calc(100%+4px)] after:bg-[linear-gradient(45deg,red,green,
      rgb(45,45,131),yellow,pink,skyblue,
      purple,red,green,blue,tomato,yellow)] after:-z-10 after:rounded-md after:bg-[length:400%] after:blur-sm"
        >
          <div className="w-28 h-28 rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="profile-img"
              className="w-28 h-28"
            />
          </div>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-yellow-300 font-bold text-3xl md:text-5xl p-3">
            Darryl Brooks
          </h1>
          <h2 className="text-white text-2xl">
            Software artist <span>🔨</span>
          </h2>
        </div>
      </div>
    </main>
  );
}
