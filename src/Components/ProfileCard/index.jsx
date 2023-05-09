import './style.css'
import backgroundUser from '../../assets/background-user.png'
import { ButtonEditProfile } from '../Button'
import ProfilePhoto from '../ProfilePhoto'

function SideBar(){
    return (
        <div className="profile-card">
          <img src={backgroundUser} alt="" />
          <div className="content">
            <ProfilePhoto />
            <h3>Leslie Alexander</h3>
            <h4>UI Designer</h4>
            <div className="line"></div>
            <ButtonEditProfile />
          </div>
        </div>
    )
}
export default SideBar