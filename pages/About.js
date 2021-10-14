import axios from 'axios'
import Image from 'next/image'
import { useState , useEffect } from 'react';
import { Header } from './Header'


export default function About() {
    const [bio,setBio] = useState("")
    useEffect(async () =>{
        await axios.get('https://api.github.com/users/gabrielaraamoss').then((response) =>{
          const data = response.data;
          setBio(data.bio);
        })
   
     },[])
    return(
        <>
        <Header/>
        <div className="footer">
        <div class="tile is-ancestor container">
            <div class="tile is-vertical is-8">
                <div class="tile">
                    <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-primary">
                        <p class="title">I am...</p>
                        <p class="title">{`${bio}`}</p>
                        </article>
                        <article class="tile is-child notification is-warning">
                        <p class="subtitle">“Don’t let the noise of others’ opinions drown out your own inner voice.”</p>
                        <p class="subtitle">-Steve Job</p>
                        </article>
                     </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                <p class="title">I'm big fan of</p>
                <p class="title">DC Comics</p>
                <figure class="image is-4by3">
                    <img src="https://upost.info/assets/images/640-480/czvtdtak1tputk55lcyc.jpg"/>
                </figure>
                </article>
            </div>
            </div>
            <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
                <p class="title">...</p>
                <p class="subtitle">..</p>
                <div class="content">
                </div>
            </article>
            </div>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification is-success">
            <div class="content">
                <p class="title">I love photography!</p>
                <p class="subtitle">A little bit of what I've grasped...</p>
                <div class="content">
                </div>
            </div>
            </article>
            </div>
        </div>
        </div>
        
        </>
    )



}