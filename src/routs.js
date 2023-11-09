import Products from "./component/Products/Products"
import Comment from "./component/Comment/Comment"
import User from "./component/User/User"
import Order from "./component/Order/Order"
import Offer from "./component/Offer/Offers"

const routs = [
    {path: "/products" , element:<Products/> },
    {path:'/comment' , element:<Comment/>},
    {path:'/user' , element:<User/>},
    {path:'/order' , element:<Order/>},
    {path:'/offers' , element:<Offer/>}
]

export default routs;