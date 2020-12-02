export const initialstate = {
    basket : [],
    user:null
}

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_To_Basket" :
      return {
        ...state,
        basket:[...state.basket,action.item]
      }
    case "SET_USER":
      return {
        ...state,
        user : action.user
      }

      case 'EMPTY_BASKET':
        return {
          ...state,
          basket: []
        }
    case "RemoveFromBasket":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);

      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        )
      }

      return {
        ...state,
        basket: newBasket
      }
    default:
      return state;
  }
};

export default reducer;