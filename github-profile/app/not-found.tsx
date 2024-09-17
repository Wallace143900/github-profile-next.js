import Image from "next/image";
import notFoundImage from "./assets/not-found.svg";
import not from "./notFound.module.scss";

export default function NotFound () {
    return (
        <main className="notFound" style={{marginTop: 113, height: "100vh"}}>
            <Image className={not.image} src={notFoundImage} alt="not found" width={400} height={439}/>
            <h1 style={{
                textAlign:"center",
                fontSize:"40px"
            }}>404 - Not Found</h1>
        </main>
    )
}