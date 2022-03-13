import React, { useState, useEffect } from 'react';
import getBlockchain from './ethereum.js';

function App() {
  const [tokenInstance, setTokenInstance] = useState(undefined);
  const [Symbol, setData] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const { tokenInstance, currentAcc } = await getBlockchain();
      console.log(currentAcc);
      let Symbol = await tokenInstance.symbol();
      let decimal = await tokenInstance.decimals();
      decimal = Number(decimal);
      let tokenBalance = await tokenInstance.balanceOf(currentAcc);
      tokenBalance = (Number(tokenBalance) / 10**decimal).toFixed(3);
      console.log(tokenBalance); 
      setTokenInstance(tokenInstance);
      setData(Symbol); 
    };
    init();
  }, []);

  // const updateData = async e => {
  //   e.preventDefault();
  //   const Symbol = e.target.elements[0].value;
  //   const tx = await tokenInstance.updateData(Symbol);
  //   const receipt = await tx.wait();
  //   console.log(receipt.transactionHash);

  //   const newData = await tokenInstance.readData();
  //   setData(newData);
  // };

  if(
    typeof tokenInstance === 'undefined'
    || typeof Symbol === 'undefined'
  ) {
    return 'Loading...';
  }

  return (
    <div className='container'>
      <div className='row'>

        <div className='col-sm-6'>
          <h2>Token Details:</h2>
          {/* <p>Name : {name}</p> */}
          <p>Symbol: {Symbol}</p>
          {/* <p>Decimals: {decimal}</p> 
          <br />
          <p>My Address: {currentAcc}</p> 

          <p>Balance: {tokenBalance}</p>  */}

        </div>

        <div className='col-sm-6'>
           {/* <form className="form-inline" onSubmit={e => updateData(e)}>
            <input 
              type="text" 
              className="form-control" 
              placeholder="data"
            />
            <button 
              type="submit" 
              className="btn btn-primary"
            >
              Submit
            </button>
          </form> */}
        </div>

      </div>
    </div>
  );
}

export default App;
