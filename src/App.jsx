const App = ()=>{

  return(
    <div className="w-full max-w-lg mx-auto shadow-md rounded-xl p-8 mt-20 bg-gray-800 text-orange-400">
      <h1 className="text-4xl text-white my-4 text-center">Password Generator</h1>
      <div className="flex rounded-xl mt-8 mb-4">
        <input type="text" placeholder="Password" readOnly className="w-full outline-none px-4 py-2 rounded-l-xl"/>
        <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-r-xl">Copy</button>
      </div>
      <div className="flex justify-between text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={20} className="cursor-pointer" />
            <label>Length: </label>
        </div>
        <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked="" id="numberAllowed" className="cursor-pointer" />
            <label htmlFor="numberAllowed">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked="" id='charsAllowed' className="cursor-pointer" />
            <label htmlFor="charsAllowed">Characters</label>
        </div>

      </div>
    </div>
  )
}

export default App;