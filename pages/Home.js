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
       setRepos(data.public_repos)
     })

  },[])

  const [bio,setBio] = useState("")
  useEffect(async () =>{
      await axios.get('https://api.github.com/users/gabrielaraamoss').then((response) =>{
        const data = response.data;
        setBio(data.bio);
      })
 
   },[])
  return (
    <>
      <head>
        <title>Gabriela Ramos</title>
      </head>
     <Header/>
     <body className={styles.color} >
      <section class="section" >
        <h1 class="title" className={styles.title}>Welcome to my page </h1>
      </section>
      <section >
        <span>
          <div class="card" className={styles.card}>
            <div class="card-content">
              <div class="content" >"When something is important enough, you do it even if the odds are not in your favor."</div>
              <p>-Elon Musk</p>
            </div>
          </div>
        </span>
        <span className>
          <div class="card" className={styles.card}>
            <div class="card-content">
              <div class="content">
              "Don't compare yourself with anyone in this world ... if you do so, you are insulting yourself."
              </div>
              <p>-Bill gates</p>
            </div>
          </div>
        </span>
      </section>


      <footer class="footer container">
        <div class="content has-text-centered is-flex">
          <span>
          <figure className="image is-128x128">
            <img src={avatarUrl} />
          </figure>
          </span>
          <span>
          {`My name is ${userName} and I'm ${bio}`}
          </span>       
        </div>
      </footer>
    </body>
  </>
    
  )
}
