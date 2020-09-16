import React from 'react';
import Test from "./Header1";

function App() {
  return (
    <div className="flex flex-col h-24 w-screen mx-auto bg-blue-500">
      <div className="container flex h-full w-full mx-auto bg-gray-700">
        <h1 className="mx-auto self-center text-blue-200">Displaying Tailwind Installed.</h1>
      </div>
      <Test />
    </div>
  );
}

export default App;
