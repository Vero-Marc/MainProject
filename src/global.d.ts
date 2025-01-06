declare module '*.svelte' {
    export { SvelteComponentDev as default } from 'svelte/internal';
   }
   
   declare module '*.png' {
    const value: string;
    export default value;
   }