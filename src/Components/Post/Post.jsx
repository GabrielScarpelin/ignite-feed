import { ButtonPublish } from "../Button/Button"
import ProfilePhoto from "../ProfilePhoto/ProfilePhoto"
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
                Fala galeraa 👋

                Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

                👉<span>jane.design/doctorcare</span>

                <span>#novoprojeto #nlw #rocketseat</span>
                </p>
            </div>
            <div className="line"></div>
            <h3>Deixe seu feedback</h3>
            <input type="text" name="" id="" />
            <ButtonPublish />
        </div>
    )
}

export default Post