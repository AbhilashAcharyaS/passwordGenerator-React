import { useCallback, useEffect, useRef, useState } from "react";

const App = ()=>{

  const [length,setLength]= useState(8);
  const [numbersAllowed,setNumbersAllowed]= useState(false);
  const [charsAllowed,setCharsAllowed]= useState(false);
  const [password , setPassword] = useState("");
  const [copied, setCopied] = useState(false)

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass="";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if(numbersAllowed) str+="0123456789"
    if(charsAllowed) str+="~!@#$%^&*()[]{}|:;<>?,."
    
    for (let i = 0; i < length; i++) {
      let randomIndex= Math.floor(Math.random()*str.length)
      pass += str[randomIndex]   
    }

    setPassword(pass);

  },[length,numbersAllowed,charsAllowed]);

  const handleCopy = ()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
    setCopied(true);
    setTimeout(()=>setCopied(false), 3000)    
  }

  useEffect(()=>{
    passwordGenerator();
  },[length,numbersAllowed,charsAllowed])

  return(
    <>
    {copied && 
      <div className="w-1/3 mx-auto bg-blue-500 text-white text-center font-bold px-4 py-3 rounded-xl mt-2 absolute left-0 right-0 top-4" role="alert">
      <p className="text-center">Password Copied to Clipboard!</p>
    </div>
    }
    <div className="w-full max-w-xl mx-auto shadow-md rounded-xl p-8 mt-[10%] bg-gray-800 text-orange-400">
      <h1 className="text-4xl text-white my-4 text-center">Password Generator</h1>

      <div className="flex rounded-xl mt-8 mb-8">
        <input type="text" placeholder="Password" readOnly value={password} ref={passwordRef} className="w-full outline-none px-4 py-4 rounded-l-xl"/>
        <button onClick={handleCopy} className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0 rounded-r-xl">Copy</button>
      </div>
      <div className="flex justify-between text-md gap-x-2">
        <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={30} value={length} onChange={(e)=>setLength(e.target.value)} className="cursor-pointer" />
            <label>Length: {length} </label>
        </div>
        <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numbersAllowed} onChange={()=>setNumbersAllowed(!numbersAllowed)}  id="numberAllowed" className="cursor-pointer" />
            <label htmlFor="numberAllowed">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charsAllowed} onChange={()=>setCharsAllowed(!charsAllowed)} id='charsAllowed' className="cursor-pointer" />
            <label htmlFor="charsAllowed">Characters</label>
        </div>

      </div>
    </div>
    </>
  )
}

export default App;