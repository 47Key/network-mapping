import { useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Image from "next/image";
import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import Upload from "../components/upload/upload";

function App() {
  // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
  // setGreetMsg(await invoke("greet", { name }));
  
  return (
    <div className="w-screen h-screen flex">
      <Sidebar />
      <div className="flex flex-col bg-slate-800 items-end justify-start w-full h-full">
        <Header />
        <div className="flex flex-col w-full h-full justify-center items-center z-10">
          <Upload />
        </div>
      </div>
    </div>
  );
}

export default App;
