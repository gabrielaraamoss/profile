import axios from "axios";
import { useEffect, useState } from "react"
import { Header } from './Header'

export default function Repositories() {
    const[repo,setRepo] = useState([]);

    useEffect(async ()=>{
        await axios.get("https://api.github.com/users/gabrielaraamoss/repos").then((res)=>{
            const data = res.data
            {console.log(data)}
            setRepo(data);

        })

    },[])

    return(
        <>
        <Header/>
        <div className="footer">
            
            <h1><strong>These are the repositories that I have worked with</strong></h1>
                {repo.map((info,index)=>{
                    return(
                        <div class="content is-medium">
                        <ul>
                            <li><a href={`${info.html_url}`}>{`${info.name}`}</a></li>

                        </ul>
                        </div>
                        
                    )
                })}
            <img src="https://c.tenor.com/U8UYZtk3eNAAAAAC/good-job-batman.gif"/>        
        </div>
        </>
    )

}