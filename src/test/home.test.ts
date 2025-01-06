import { describe, it, expect,vi } from 'vitest';
import Navbar from '$lib/components/navbar.svelte';
import Textbox from '$lib/components/textbox.svelte'
import { render ,screen,fireEvent, waitFor} from '@testing-library/svelte';
import SelectField from '$lib/components/selectfield.svelte'
// import '@testing-library/jest-dom';


describe('Navbar ',()=>{
    it('text displays',()=>{
        // const {getByText} = render(Navbar);
        // expect(getByText('Check balance')).toBeInTheDocument();
        
        const result = render(Navbar);
    
        const headerText = result.getByText('Check balance');
    
        expect(headerText).toBeInTheDocument();
    })
})

describe('Textbox component ',()=>{
    it('has a text box field',()=>{
        const result = render(Textbox);
        const inputbox = result.getByRole("textbox");
        expect(inputbox).toBeInTheDocument()
    })

    it('contains placeholder in text field',async()=>{
        const result = render(Textbox,{
            props:{
                placeholder:'Order'
            }
        });
        const inputbox = result.getByRole("textbox");
        console.log(inputbox, 'input')

        // var inputElement = document.querySelector('input[type="text"]');
// var placeholderText = inputbox.getAttribute('name');
// console.log(placeholderText);

// expect(placeholderText).toBe('Order')

        // expect(inputbox).toHaveAttribute('placeholder')

//         const { getByPlaceholderText } = render(Textbox);
//         await waitFor(() => screen.getByPlaceholderText('OrderId'));
//   const input = getByPlaceholderText('Order');  // Select the input by placeholder text
//   expect(input).toHaveAttribute('placeholder', 'Order');
            
       
    })

    it('contains empty text field',()=>{
        const result = render(Textbox);
        const inputbox = result.getByRole("textbox");
        expect(inputbox).toHaveValue('')
    })



    // it('contains on focus',()=>{
    //     const result = render(Textbox);
    //     const inputbox = result.getByRole("textbox");
    //     // inputbox.focus()
    //     expect(inputbox.querySelector('input:focus')).toBeInTheDocument();
    // })

   
    
})

describe('Select Field component ',()=>{
    it('has a select field',()=>{
        const result = render(SelectField);
        const selectField = result.getByRole('combobox');
        expect(selectField).toBeInTheDocument()
    })
    it('has atleast one option',async()=>{
        const result = render(SelectField);
        await waitFor(() => result.getAllByRole('option'));
        const optionCount = result.getAllByRole('option').length;
        expect(optionCount).toBeGreaterThan(1)
    })

    it('has selected an option',async()=>{
        const result = render(SelectField);
        const selectField = result.getByTestId('selectField') as HTMLSelectElement;
        fireEvent.change(selectField ,{target :{value:'Select'}})
        expect(selectField.value).toBe('Select')
    })
 
    
})

