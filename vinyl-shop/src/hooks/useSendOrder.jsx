import { useState } from "react"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useShopCart } from "../contexts/CartShopContext"

export function useSendOrder(){
    const {cartItems, clear} = useShopCart()
    const [formValues, setFormValues] = useState({
        name: "",
        lastname: "",
        email: "",
        phone: ""
    })
    const handleChange =(e)=>{
        setFormValues(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const onSendOrder = (totalOrder) => {
        const db = getFirestore()
        const orderCollection = collection(db, "orders");
        const order = {
            buyer: formValues,
            items: cartItems,
            total: totalOrder
        }
        addDoc(orderCollection, order).then(({id})=>{
            if (id){
                toast.success(`Your order ${id} has been sucessfully submitted`,{
                    position: "top-center",
                    autoclose:200,
                    hideProgressBar:true,
                    closeOnClick: true,
                    pauseOnHover:false,
                    draggable:false,
                    progress:undefined,
                    theme: "colored",
                })
            }
        }
    )
       
        setFormValues({
            name:"",
            lastname:"",
            email:"",
            phone:""
        })
        clear()
    }
    return{
        formValues, handleChange, onSendOrder,
    }
}