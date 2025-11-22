export default function PageSelector() {
  return (
    <div id="pageSelector" className="w-full h-full flex flex-col gap-4  justify-items-center items-center content-center ">
      <div id="attacks" className="w-full h-full flex flex-col gap-4 pt-24  justify-items-center items-center content-center hover:cursor-pointer hover:bg-red-100/5 ">
        <img src="/attack.avif" alt="Attacks" id="attacks" />
        <p className="text-red-300 text-2xl font-bold">Attack</p>
      </div>
      <div id="pots" className="w-full h-full flex flex-col gap-4 pb-24  justify-items-center items-center content-center justify-center hover:cursor-pointer hover:bg-red-100/5">
        <img src="/pot.avif" alt="Pots" id="pots" />
        <p className="text-red-900 text-2xl font-bold">Join the horde</p>
      </div>
    </div>
  );
}

