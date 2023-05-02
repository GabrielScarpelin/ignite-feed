import './style.css'
import userPhoto from '../../assets/user-foto.png'

function ProfilePhoto(){
    return (
        <div className="photo">
            <img src={userPhoto} alt="" />
        </div>
    )
}
export default ProfilePhoto