import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Header } from './Header'
import { Paisaje } from '/public/assets'


export default function Home() {
  const [userName,setUser] = useState('');
  const [avatarUrl,setAvatar] = useState('');
  const [nRepositories,setRepos] = useState('');

  useEffect(async () =>{
     await axios.get('https://api.github.com/users/gabrielaraamoss').then((response) =>{
       const data = response.data;
       setUser(data.name);
       setAvatar(data.avatar_url);
     })

  },[])
  return (
    <>
     <Header/>
     {/* <Image src={`${Paisaje}`} width="900" height="700" />  */}
     <div>
      <img src={avatarUrl}/>
      
     </div>

    <div>
    <section class="container is-widescreen">
      <strong>{`Welcome to my page! My name is ${userName}`}</strong>
    </section>
    </div>
  </>
    
  )
}
