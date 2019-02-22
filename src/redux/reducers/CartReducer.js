const search = (elements, id) => {
  let position = -1;
  
  elements.some((element, index) => {
    if (element.id === id){
      position = index;
      return true;
    }
    return false;
  });
  return position;
}

const remove = (elements, id, total) => {
  let position = search(elements, id);
  
  if (position >= 0){
    let newTotal = total - (elements[position].value * elements[position].amount);
    let newArray = [...elements.slice(0, position), ...elements.slice(position+1)];
    return {items: newArray, amount: newArray.length, total: newTotal};
  }else{
    return {items: elements, amount: elements.length, total: total};
  }
}

const update = (elements, cartItem, position, total, inc=true) => {
    let newTotal = (inc) ? (total + cartItem.value) : (total - cartItem.value);
    let newArray = [...elements.slice(0, position), cartItem, ...elements.slice(position+1)];
    return {items: newArray, amount: newArray.length, total: newTotal};
}

const add = (elements, cartItem, total) => {
  let position = search(elements, cartItem.id);
  
  if (position >= 0){
    let newCartItem = {...elements[position]};
    newCartItem.amount = newCartItem.amount+1;
    
    return update(elements, newCartItem, position, total);
  }else{
    let newTotal = total + cartItem.value;
    return {
      items: [...elements, cartItem], 
      amount: elements.length+1,
      total: newTotal
    };
  }
}

const increment = (elements, id, total) => {
  let position = search(elements, id);
  
  if (position >= 0){
    let newCartItem = {...elements[position]};
    newCartItem.amount = newCartItem.amount+1;
    
    return update(elements, newCartItem, position, total);
  }else{
    return {items: elements, amount: elements.length, total: total};
  }
}

const decrement = (elements, id, total) => {
  let position = search(elements, id);
  
  if (position >= 0){
    let newCartItem = {...elements[position]};
    newCartItem.amount = newCartItem.amount-1;
    
    return update(elements, newCartItem, position, total, false);
  }else{
    return {items: elements, amount: elements.length, total: total};
  }
}


const initialState = {
  items: [],
  amount: 0,
  total: 0.00
}

export function CartReducer(state = initialState, action){
  switch(action.type){
    case 'ADD_CART_ITEM':
      return add(state.items, action.cartItem, state.total);
    case 'REMOVE_CART_ITEM':
      return remove(state.items, action.id, state.total);
    case 'INC_AMOUNT_CART_ITEM':
      return increment(state.items, action.id, state.total);
    case 'DEC_AMOUNT_CART_ITEM':
      return decrement(state.items, action.id, state.total);
    default:
      return state;
  }
}

