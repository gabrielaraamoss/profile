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
        <div className="tile is-ancestor container">
            <div className="tile is-vertical is-8">
                <div className="tile">
                    <div className="tile is-parent is-vertical">
                        <article className="tile is-child notification is-primary">
                        <p className="title">I am...</p>
                        <p className="title">{`${bio}`}</p>
                        </article>
                        <article className="tile is-child notification is-warning">
                        <p className="subtitle">“Don’t let the noise of others’ opinions drown out your own inner voice.”</p>
                        <p className="subtitle">-Steve Job</p>
                        </article>
                     </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-info">
                <p className="title">I'm big fan of</p>
                <p className="title">DC Comics</p>
                <figure className="image is-4by3">
                    <img src="https://upost.info/assets/images/640-480/czvtdtak1tputk55lcyc.jpg"/>
                </figure>
                </article>
            </div>
            </div>
            <div className="tile is-parent">
            <article className="tile is-child notification is-danger">
                <p className="title">...</p>
                <p className="subtitle">..</p>
                <div className="content">
                </div>
            </article>
            </div>
        </div>
        <div className="tile is-parent">
            <article className="tile is-child notification is-success">
            <div className="content">
                <p className="title">I love photography!</p>
                <p className="subtitle">A little bit of what I've grasped...</p>
                <div className="content">
                </div>
            </div>
            </article>
            </div>
        </div>
        </div>
        
        </>
    )



}