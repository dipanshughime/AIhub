import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home, CreatePost } from "./pages";
import { logo } from "./assets";

function App() {

  return (
    <div className=" min-h-screen bg-[rgb(7,12,34)]">
      <BrowserRouter>
        <header
          className="w-full h-20 rounded flex justify-between items-center sm:px-8 px-4 py-4  bg-[rgb(7,12,34)]"
          
        >
          <Link to="/" className="flex items-center relative">
            <span className="absolute left-0 mt-5 text-3xl font-bold text-indigo-400 z-10">
              AI-Hub
            </span>
            <img
              src="https://i.gifer.com/yy3.gif"
              alt="logo"
              className="w-60 ml-6 z-0"
            />
          </Link>

          <Link
            to="/create-post"
            className="font-medium bg-indigo-500 hover:bg-indigo-600 text-white mt-4 px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </header>

        <main className="sm:p-8 px-4 py-8 w-full min-h-[calc(100vh-73px) ]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
