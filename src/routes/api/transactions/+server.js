import {json} from '@sveltejs/kit'
export async function GET(){
  let transactionList;
  try {
    const response = await fetch('http://localhost:3003/Transactions/GetTransactionList');
    transactionList = await response.json();
    return new Response(JSON.stringify(transactionList),{
      headers:{
        'Content-Type' :'application/json'
      }
    })
  } catch(error){
    console.log(error);
    return new Response("internal server error",{status:500})
  }
    // return json(transactionList)
  }


  