import { Navbar } from "../Navbar/navbar";
import { Bebas_Neue } from 'next/font/google';
const bebas = Bebas_Neue({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});


export default function login() {
  return (
    <>
      <div className="h-screen bg-slate-100">
        <Navbar />
        <div className="grid h-3/4 place-items-center bg-slate-100">
          <div>
            <h1 className={`${bebas.className} "text-cyan-100 text-5xl flex justify-center"`}>WELCOME TO TRITON ESPORTS CENTER</h1>
            <h2 className={`${bebas.className} flex justify-center mt-10 text-2xl text-ucsd font-bold"`}>CHECK IN TO USE PC</h2>
            <div className="flex justify-center mt-10">
              <p className="float-left p-1 mr-6 font-bold">PID:</p>
              <input className="float-right p-1 border border-black"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
