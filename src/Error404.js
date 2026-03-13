import { Link } from "react-router-dom";

export default function Error404() {
    return (
        <section>
            <h1>Дуло не существует</h1>
            <p>
                Вернитесь на <Link to="/">перечень дел</Link> и 
                выбирите какое либо другое.
            </p>
        </section>
    )
}