import { Link, Outlet } from "react-router-dom"
import { useLoaderData } from "react-router-dom";

export const loader = async() =>{
    const repos = await(await (fetch('http://api.github.com/users/akaren29/repos'))).json();
    return {repos}
}

export default function Repos(){
    const {repos}= useLoaderData();
    console.log(repos)
    return(
        <div>
        <h2>Repositorio de proyectos</h2>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px"}}>
          {repos.map(repo => (
            <div style={{background:"#fff", boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px", width:"30%", height:"10vh", borderRadius:"10px"}} key={repo.id}>
                <p>{repo.name}</p>
            </div>
              
          ))}
        </div>
        
        </div>
    )
}