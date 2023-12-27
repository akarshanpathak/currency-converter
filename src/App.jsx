
import { useState } from 'react'
import './App.css'
import Input from './component/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo';


function App() {
  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);
  const [currency,setCurrency]=useState("usd");
  const [convertedCurrency,setConvertedCurrency]=useState("inr");

  const currencyInfo=useCurrencyInfo(currency);
  const options=Object.keys(currencyInfo);
  console.log(options);
  console.log(currencyInfo[convertedCurrency]);
  
  const handleConvert=()=>{
    setConvertedAmount(amount*currencyInfo[convertedCurrency]);
  }

  return (
    <>
      <div style={{background:`url('https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600')`,backgroundRepeat:"no-repeat", backgroundSize:"cover",backgroundPosition:"center",}} className='w-full h-screen  flex flex-wrap flex-col justify-center items-center'>
         
         <div className='flex flex-wrap flex-col border rounded-xl backdrop-blur-sm bg-white/30 px-10 py-5'>
            < div className='bg-white w-full  mb-3 rounded-xl px-5'>
            <Input fieldDisabled={false} amount={amount} label='To' onAmountChange={(e)=>(setAmount(e))} onCurrencyChange={(e)=>(setCurrency(e))} currency={currency} options={options}/>
            </div>
            < div className='bg-white  w-full mb-3 rounded-xl px-5 '>
            <Input fieldDisabled={true} amount={convertedAmount} onCurrencyChange={(e)=>(setConvertedCurrency(e))} label='From' options={options} currency={convertedCurrency}/>
            </div>
            <button onClick={handleConvert} className='bg-blue-600 px-4 py-3 rounded-xl text-white'>Convert {currency} to {convertedCurrency} </button>
         </div>
         

      </div>
    </>
  )
}

export default App
