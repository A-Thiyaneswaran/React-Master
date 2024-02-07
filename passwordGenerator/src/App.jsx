import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [num, setNum] = useState(false)
  const [char, setChar] = useState(false)
  const [pw, setPw] = useState("")
  //UseREference
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (num) str += "0123456789"
    if (char) str += "+=!@#$%^&*(){}|-=";
    for (let i = 0; i <= length; i++) {
      // this c is the random index in str
      let c = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(c)
    }
    setPw(pass);
  }, [length, num, char, setPw])

  const copyPass = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(pw)
  }, [pw])
  useEffect(() => {
    passwordGenerator()
  }, [length, num, char, setPw])
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg
      px-4 py-1 my-10 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={pw}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPass}
            className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'
          >COPY</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center px-2 gap-x-1'>
            <input
              type="checkbox"
              checked={num}
              id="numberInput"
              onChange={() => {
                setNum((prev) => !prev)
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={char}
              id="charInput"
              onChange={() => {
                setChar((prev) => !prev)
              }}
            />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
