import type { PageLoad } from "./$types";

export const load : PageLoad= async ({ params }) => {
    let {id} = params
    let transactionList;
    try {
      const response = await fetch(`http://localhost:5173/api/transactions/${id}`);
      transactionList = await response.json();
  
    } catch (error) {
      console.log(error);
  
    }
    return {
      transactionList
    }
  }