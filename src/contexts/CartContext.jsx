import React,{createContext, useState, useEffect, useTransition, useDeferredValue} from 'react'
export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const addToCart = ( product)=>{
        const exist = cart.find((item)=> item.id === product.id);
        if(exist){
            const newItem = cart.map((item)=>
                item.id === product.id ? {...exist, qty: exist.qty + 1} : item
            )
            setCart(newItem);
            localStorage.setItem('cart', JSON.stringify(newItem));
        } else{
            const newItem = [...cart, {...product, qty: 1}];
            setCart(newItem);
            localStorage.setItem('cart', JSON.stringify(newItem));
        }
    };
    const onRemove = (product)=>{
        const exist = cart.find((x)=> x.id === product.id);
        if(exist.qty === 1){
          const newItem = cart.filter((x)=> x.id !== product.id);
          setCart(newItem);
          localStorage.setItem('cart', JSON.stringify(newItem));
        } else{
          const newItem = cart.map((x)=>
            x.id === product.id ? {...exist, qty: exist.qty-1} : x
          );
          setCart(newItem);
          localStorage.setItem('cart', JSON.stringify(newItem));
        }
    }
    const cartCount = useDeferredValue(cart.length)
    // fn to reset cart
    const onReset = (cart)=>{
        setCart([]);
        localStorage.clear();
    }
    // console.log(cart)
    const [isPending, startTransition] = useTransition();

  useEffect(()=>{
    startTransition(()=>{
      // this code is given low priority in comparison to key events
      setCart(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])
      // to load cart items from localStorage on pageload
    });
  }, []);


    return isPending? (<div>Loading!!!</div>):(
    <CartContext.Provider value={{cart, addToCart, onRemove, cartCount, onReset}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;