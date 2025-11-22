import PageSelector from "@/components/PageSelector";

export default function Home() {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-black overflow-hidden">
      
      <div className="flex items-center justify-center max-w-[500px] w-auto h-full" id="main-container">
        <img src="/frame.avif" alt="Bleeth" className="w-14 h-full" />
        <div className="w-auto h-full -top-3.5 relative bg-black/50 flex items-center flex-col">
        <video
        autoPlay
        muted
        playsInline
        className="max-w-[90vw] max-h-[200px] w-full h-full"
      >
        <source src="/bleeth-02.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <PageSelector />
      



      
      </div>
        <img src="/frame.avif" alt="Bleeth" className="w-14 h-full rotate-180" />
      </div>
    </div>
  );
}
