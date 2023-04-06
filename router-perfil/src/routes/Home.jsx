import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom"

export const loader = async() => {
    const data = (await(await (fetch('http://api.github.com/users/anakaren29'))).json());
    return {data}
}

export default function Home(){
    const {pathname} = useLocation();
    const {data} = useLoaderData();
    console.log(data)

    const activeStyles = {width:"15%", height:"35px", marginLeft:"10px",borderRadius:"20px", border: "2px solid rgb(145, 54, 196)", cursor:"pointer"}
    const styleButton = {width:"15%", height:"35px", marginLeft:"10px",borderRadius:"20px", background:"rgb(145, 54, 196)", color:"white", border:"none", cursor:"pointer"}

    return(
        <section style={{display:'flex', flexDirection:'column', alignItems:'center',
        maxWidth:"768px", margin:'0 auto',height:"auto"}}>
            <div style={{padding:'20px', 
                textAlign:'center',
                background:"#ffffff",
                width:"100%",
                borderTopLeftRadius:"10px",
                borderTopRightRadius:"10px"}}>
               <img src={data.avatar_url} width="200" alt="avatar" style={{borderRadius:"50%"}}/>
               <p>{data.bio}</p>
               <p>@{data.login}</p>
               <span>{data.followers} seguidores</span> -
               <span>  {data.following} seguidos</span>
            </div>
            
        <div style={{background:"#E6E6EA",width:"100%",height:"100vh", padding:"20px",textAlign:"center"}}>
              <Link to="repos">
                  <button style={pathname.includes("repos")?activeStyles: styleButton}>Repos</button>
              </Link>
              <Link to="/">
                  
              </Link>
              <Link to="/">
                  
              </Link>
              <Outlet />
            
        </div>
        </section>
    )
}