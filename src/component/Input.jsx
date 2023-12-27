import React from 'react'

function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  options=[],
  currency,
  fieldDisabled=false
}) {
  return (
    <div className='flex flex-wrap mb-4  py-5 justify-between '>
      <div className="flex flex-wrap flex-col">
        <label className='text-gray-500' htmlFor="">{label}</label>
        <input value={amount} onChange={(e)=>(onAmountChange(Number(e.target.value)))}  type="text" className='' placeholder='Enter Amount' disabled={fieldDisabled}/>

      </div>
      <div className="flex flex-wrap flex-col">
           <h3 className='text-gray-500'>Currency Type</h3>
           <select value={currency} onChange={(e)=>(onCurrencyChange(e.target.value))} name="" id="">
           {
            options.map((curr)=>(
              <option key={curr} value={curr}>{curr}</option>
            ))
           }

           </select>
      </div>
     
    </div>
  )
}

export default Input
