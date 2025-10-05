"use client";
// import Footer from "@/component/footer";
import Navbar from "@/app/component/navbar";
import React from "react";
import { Code2, Zap, Smartphone, MoveRight } from "lucide-react";
import Aurora from "@/app/component/arora"
import { useRouter } from "next/navigation";

function LandingPage() {
  const router = useRouter();

  return (
    <>
      <div className="fixed top-0">
        <Navbar />
        <Aurora
          colorStops={["#7CFF67", "#7CFF67", "#5227FF"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.8}
        />
      </div>
      <main>
        <div className="flex flex-col items-center justify-center h-screen text-center max-w-3xl mx-auto space-y-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10 mb-4">
            <Code2 className="w-10 h-10 text-primary" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
            React Native Code Editor
          </h1>

          <p className="text-xl  max-w-2xl">
            A lightweight, simple code editor built for React Native
            development. Write, edit, and preview your code seamlessly.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="gap-2 bg-stone-950 text-white p-2 border rounded-2xl flex hover:cursor-pointer" onClick={()=> {router.push('/login')}}>
              Get Started
              {/* <MoveRight /> */}
            </button>
            <button size="lg" variant="outline">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-32 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-black">Simple Interface</h3>
            <p className="text-sm text-black">
              Clean, distraction-free editing experience
            </p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Zap className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg text-black font-semibold">Fast & Lightweight</h3>
            <p className="text-sm text-black">Optimized performance for smooth editing</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-lg bg-card">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-black" />
            </div>
            <h3 className="text-lg font-semibold text-black">React Native</h3>
            <p className="text-sm text-black">Purpose-built for React Native projects</p>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default LandingPage;