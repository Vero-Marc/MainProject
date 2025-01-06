const API_URL = "http://localhost:3003/Test/Transactions"
import type { RequestHandler } from '@sveltejs/kit';

export const GET :RequestHandler = async({params}) =>{
    const {id} = params
    let transactionList;
    try {
      const response = await fetch(`${API_URL}/${id}`);
      transactionList = await response.json();
      return new Response(JSON.stringify(transactionList),{
        headers:{
          'Content-Type' :'application/json'
        }
      })
    } catch(error){
      return new Response(JSON.stringify(error),{status:500})
    }
      // return json(transactionList)
    }

export const PUT :RequestHandler = async({ params, request, cookies }) => {
  
  const  body  = await request.json();
  
   const {id} = params

    const response = await fetch(`${API_URL}/${id}`,{
        method:"PUT",
        headers:{
          'content-type' : 'application/json'
        },
        body:JSON.stringify(body)
      });
    const jsonres = await response.json()  

	return new Response(JSON.stringify(jsonres));
}

export const DELETE :RequestHandler = async({ params, cookies }) => {
    let {id} = params
    const response = await fetch(`${API_URL}/${id}`,{
        method:"DELETE",
        headers:{
          'content-type' : 'application/json'
        },
      });
    const jsonres = await response.json()  
	return new Response(null, { status: 204 });
}