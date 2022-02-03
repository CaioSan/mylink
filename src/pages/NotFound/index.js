import './notFound.css'
import { Link } from 'react-router-dom'
export default function NotFound() {
    return (
        <div className="container-error">
            <img src='./notfound.png' />
            <h1>Pagina não encontrada!</h1>
            <Link to="/">
                Voltar para home
            </Link>
        </div>
    )
}