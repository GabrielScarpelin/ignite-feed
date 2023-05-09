import { ButtonPublish } from "../Button"
import FeedbackComment from "../Comment"
import ProfilePhoto from "../ProfilePhoto"
import './style.css'

function Post(){
    return (
        <div className="post">
            <div className="headerPost">
                <div className="info">
                    <ProfilePhoto />
                    <div>
                        <h3>Jane Cooper</h3>
                        <h4>Dev Front-End</h4>
                    </div>
                </div>
                <h4>Publicado há 1h</h4>
            </div>
            <div className="text">
                <p>
                Fala galeraa 👋<br></br>
                <br></br>
                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀<br></br>
                <br></br>
                👉<span>jane.design/doctorcare</span><br></br>
                <br></br>
                <span>#novoprojeto #nlw #rocketseat</span>
                </p>
            </div>
            <div className="line"></div>
            <h3>Deixe seu feedback</h3>
            <textarea placeholder="Escreva um comentário..."></textarea>
            <ButtonPublish />
            <FeedbackComment />
        </div>
    )
}

export default Post