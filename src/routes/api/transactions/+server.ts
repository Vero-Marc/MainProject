import {json} from '@sveltejs/kit'
import type { RequestHandler } from '@sveltejs/kit';
export async function GET(){
  let transactionList;
  try {
    const response = await fetch('http://localhost:3003/Test/Transactions');
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

  export const POST : RequestHandler = async ({request}) => {
    const body = await request.json()
    let transactionRes
    try {
      const response = await fetch('http://localhost:3003/Test/Transactions',{
        method:"POST",
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(body)
      });

       transactionRes = await response.json();
      
      return new Response(JSON.stringify(transactionRes),{
        headers:{
          'Content-Type' :'application/json'
        }
      })
    } catch(error){
      return new Response(JSON.stringify(error),{
        headers:{
          'Content-Type' :'application/json'
        }
      })
    }
  }
  