import { useState } from 'react'
import {InputBox} from "./components"
import useCurrencyInfo from "./hooks/useCurrencyInfo"
// import './App.css'

function App() {
 
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("USd")
  const [to, setTo] = useState("INR")
  const [convertedAmount, setConvertedAmount] = useState("")

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)  

  console.log(amount)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }
  
  return (
   <>
    <div className='w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat border' 
    style={{backgroundImage : `url('data:image/jpeg;base64,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)`}}>

      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form onSubmit={(e) => {
            e.preventDefault()
          }} >

            <div className='w-full mb-1'>

              <InputBox label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(amount)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />

            </div>
        
            <div className='relative w-full h-0.5'>
              <button onClick={swap} type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>
                Swap
              </button>
            </div>
        
            <div className='w-full mt-1 mb-4'>
        
              <InputBox 
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => 
                  setTo(currency)
                }
                selectCurrency={to}
                amountDisable

              />
            </div>
              
            <button onClick={convert} type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
   </>
  )
}

export default App
