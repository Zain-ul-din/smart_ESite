import React , { useRef, useState , useEffect } from "react"

// Could Storage
import {  AppAuth , auth , googleAuthProvider , SignInWithPopup , SignOut , FireBaseStore} from "./Firebase/FireBaseInit"
import { useAuthState } from 'react-firebase-hooks/auth'
import { collection , getDocs } from "firebase/firestore"

// Components
import Navbar from "./Components/Navbar"
import Intro from "./Components/Intro";
import Products from "./Components/Products"
import GoogleMap from "./Components/GoogleMap"
import Footer from "./Components/Footer"
import LoginProfile from './Components/LoginProfile'
import Admin from './Components/Admin'

// Toaster
import { Toaster } from 'react-hot-toast'

// App Auth
import {ADMIN_MAIL} from './Env'

AppAuth()


export default function App() {
 
  

  const productsRef = useRef (null)
  const mapRef = useRef(null)
  const aboutUsRef = useRef(null)

  // firebase hooks
  const [isLogin] = useAuthState(auth)
  const [user , setUser] = useState(null)
  const [ isAdmin , setIsAdmin ] = useState(false)

  

  function ProductsScrollAction () {
    productsRef.current.scrollIntoView({behavior : 'smooth'})
  }
   
  function MapScrollAction () {
    mapRef.current.scrollIntoView({behavior : 'smooth'})
  }
  
  function AboutUsScrollAction(){
     aboutUsRef.current.scrollIntoView({behavior : 'smooth'})
  }

  useEffect(()=>{
      if (!isLogin){
        setUser(null)
        return;
      }
      const _user = isLogin
      setUser({
        name : _user.displayName ,
        email :_user.email ,
        verified : _user.emailVerified ,
        isAnonymous : _user.isAnonymous
      })
  
    //  setIsAdmin(process.env.REACT_APP_ADMIN_MAIL === user.email)
    setIsAdmin(ADMIN_MAIL == _user.email)
  } ,[isLogin])

  function SignInWithGoogle (){
    SignInWithPopup(auth , googleAuthProvider).then(res=>{})
    .catch(err => console.log(`Auth Fail ${err}`))
  }
  
  function SignOutAction(){
    setIsAdmin(false)
    SignOut(auth)
  }
  
  

  const [productsArr , setProductsArr] = useState([])

  // Read Data
  async function ReadData (){
    const querySnapshot = await getDocs(collection(FireBaseStore, "products"))
    let arr = []
    
    querySnapshot && querySnapshot.forEach((doc) => {
      arr.push({_id : doc.id , data : doc.data()})
    })

    setProductsArr(arr)
  }
  
   useEffect(()=>{
     ReadData()
   } , [])

  return (
    <>
      <Toaster
        reverseOrder={false}
      />
      <LoginProfile 
        user = {user}
      />

      <Navbar 
         ProductsScrollAction = {ProductsScrollAction}
         isLogin = {isLogin}
         SignInWithGoogle = {SignInWithGoogle}
         SignOutAction = {SignOutAction}
         user = {user}
         isAdmin = {isAdmin}
         AboutUsScrollAction = {AboutUsScrollAction}
      />

      <Intro 
         ProductsScrollAction = {ProductsScrollAction}  
      />

      <Products
        productsRef = {productsRef}
        isAdmin = {isAdmin}
        productsArr = {productsArr}
        reRender = {ReadData}
      />

      <GoogleMap
        mapRef = {mapRef}
      />

      <Footer
        aboutUsRef = {aboutUsRef}
        ProductsScrollAction = {ProductsScrollAction}
        MapScrollAction = {MapScrollAction}
      />

      <Admin
        isAdmin = {isAdmin}
        reRender = {ReadData}
      />
    </>
  );
}


// Helper Functions

export function CopyToClipBoard (value) { window.navigator.clipboard.writeText(value) }


export function HomeScrollAction () {
  window.scrollTo(0 , 0) // scrolls to start
}

// export function AboutUsScrollAction () {
//   window.scrollTo(0 , document.body.scrollHeight) // scrolls to end of the page
// }