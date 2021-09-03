export const initialState ={
   basket:[],
   user:null,
};

export const getBasketTotal =(basket) => 
basket?.reduce((amount,item)=>item.price+amount,0);

const reducer = (state,action)=>{
   console.log(action);
   switch(action.type){
      case "SET_USER":
         return{
            ...state,
            user: action.user,
         };
      case 'ADD_TO_BASKET':
         //logic for addint item to basket 
         return{
            ...state,
           basket:[...state.basket, action.item]
         };
         break;
         case 'REMOVE_FROM_BASKET':
         //logic to remove something from basket 

         //here we cloned the basket 
        let newBasket =[...state.basket];


       //we check to see id product exists
        const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
        
        if(index>=0){
           //item in bakset remove it 
           newBasket.splice(index,1);
        }else{
           console.warn(
              `Cant remove product `
           );
        }


       //this is like after every action we have to define how the new state look like 
         return{
            ...state,
            basket:newBasket};
         default:
            return state;
   }
}


export default reducer;