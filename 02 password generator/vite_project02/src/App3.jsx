import { useState, useCallback, useEffect, useRef } from "react"

function App3(){
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState();
    const passwordRef = useRef(null);
    const passwordGenerator = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed){str+="0123456789"}
        if(charAllowed){str+="!@#$%^&*-_+=[]{}~`"}
        for(let i=1; i<length; i++){
            let char = Math.floor(Math.random()*str.length+1)
            pass += str.charAt(char);
        }
        setPassword(pass)
    }, [length,numberAllowed,charAllowed,setPassword])
    const copyPasswordToClipboard = useCallback(()=>{
        passwordRef.current.select()
        window.navigator.clipboard.writeText(password)
    }, [password])
    useEffect(()=>{
        passwordGenerator()
    }, [length,numberAllowed,charAllowed,passwordGenerator])
    return(
        <>
        <div className="flex justify-center items-center flex-col mt-10 bg-gray-800 mx-80 rounded-xl text-orange-400">
            <h1 className="text-white my-8 text-2xl">Password Generator</h1>
            <div>
                <input type="text" value={password} placeholder="password" className="rounded-xl py-2 px-2 w-96" readOnly ref={passwordRef}/>
                <button className="bg-blue-800 text-white py-2 px-2 rounded-xl ms-2 mb-10"
                onClick={copyPasswordToClipboard}
                >Copy</button>
            </div>
            <div className="mb-10 text-lg font-bold">
                <input type="range" min={6} max={50} value={length} id="range"
                className="cursor-pointer"
                onChange={(e)=>{
                    setLength(e.target.value)
                }}
                />
                <label htmlFor="range" className="px-2">Length: {length}</label>
                <input type="checkBox" defaultChecked={numberAllowed} id="numb"
                onClick={()=>{
                    setNumberAllowed((prev)=>!prev)
                }}
                />
                <label htmlFor="numb" className="px-2">Numbers</label>
                <input type="checkBox" defaultChecked={charAllowed} id="symb"
                onChange={()=>{
                    setCharAllowed((prev)=>!prev)
                }}
                />
                <label htmlFor="symb" className="px-2">Characters</label>
            </div>
        </div>
        </>
    )
}
export default App3