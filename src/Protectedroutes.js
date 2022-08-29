import React,{useEffect} from 'react'
import { useNavigate } from 'react-router'

function Protectedroutes(props) {
    let Cmp=props.Cmp
    let navigate = useNavigate()
    useEffect(()=>{
        if(!localStorage.getItem('user-info')){
          navigate('/register')
        }
      } ,)
  return (
    <div>
    <Cmp />
    </div>
  )
}

export default Protectedroutes