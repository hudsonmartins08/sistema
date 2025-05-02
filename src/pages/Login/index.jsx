import { Link, Navigate, useNavigate } from "react-router-dom"
import svg from "/public/image-login.svg"

export default function LoginPage(){
    const navigate = useNavigate()
    return(
        <div className="w-full h-screen flex">
            <div className="w-[40%] h-full flex items-center justify-center">
                <Link to="/cadastro">Cadastrar</Link>
                <button
                    onClick={() => navigate("/cadastro")}
                >Cadastrar</button>
                <button
                    onClick={() => window.location.href= "/cadastro"}
                >
                    Cadastrar
                </button>
            </div>
            <div className="w-[60%] h-screen bg-[#6366ee] flex items-center justify-center rounded-l-lg flex-col">
                <img width={600} src={svg} alt="imagem-animada" />
                <p className="text-white font-bold w-[400px] text-center text-[25px]">A melhor experiência de login que você já teve na sua vida</p>
            </div>
        </div>
    )
}