 import { useRouter } from 'next/navigation'
 import {auth} from '../firebase'
import {createUserWithEmailAndPassword}  from 'firebase/auth'
 import './Input.css'
const Input = () => {
  const router = useRouter();

 const handleSubmit = async(e)=>{
  e.preventDefualt();
  const email = e.target.value;
  const password = e.target.value;

   await createUserWithEmailAndPassword(auth,email,password).then(data=>{
    console.log( data,"authdata")
    router.push('/dashboard')
  })


 }
 const handleLogin = async (e) => {
  try {
    const email= e.target.email;
    const password = e.target.password;
    await signInWithEmailAndPassword(auth, email, password);
    router.push('/dashboard')
  } catch (error) {
    console.error(error);
  }
};
 
  return (
    <div className='input_labels'>
    <form onClick={(e)=>handleSubmit(e)}>
    <label> Email address</label><br/>
    <input type="email"/><br/>
    <label>   Password</label><br/>
    <input type="password"/><br/>
<a href="www" style={{'textDecoration':'none'}}> Forgot  password ?</a><br/>
<button className='sign_in'  >Sign In</button>    
</form>
 
    </div>
  )
}

export default Input