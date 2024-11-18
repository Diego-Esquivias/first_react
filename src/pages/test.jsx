import { GiCrackedAlienSkull } from "react-icons/gi";
import Question from "../components/Question";
import ProfileCard from "../components/ProfileCard"

function Test(){
    const sports = "football"
    let src = "https://i.pinimg.com/474x/e0/ca/79/e0ca7913e7b45d4f82de98e17ebc0407.jpg"
    let w="300", h="500", alt="moon knight"
    let info = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic sed ducimus dolorum similique cumque, suscipit error sapiente incidunt tempore blanditiis!"
    let triggered = [28, 56, 19]
    return(
    <>
        <h1>Diego Esquivias</h1>
        <p>Hello, my name is Diego Esquivias</p>
        <h3>{sports}</h3>
        <img src={src} width={w} height={h} alt={alt} />
        <button><GiCrackedAlienSkull size={300} style={{backgroundColor: "red", color: "black"}}/></button>
        <Question title="Murders only happen in the building" info={info}/>

        <ProfileCard profileImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmDwycVzCsWaZx5AaCTeqz6e8qLbt8UaQz7g&s" firstName="John" lastName="Doe" email="johndoe@example.com" socialLinks={{ github: "https://github.com/johndoe", instagram: "https://instagram.com/johndoe", facebook: "https://facebook.com/johndoe" }} />

        {
            triggered.length > 0 ? <h1>Hello Data</h1> : <h1>Nothing Found</h1>
        }


    </>
    )
}

export default Test;