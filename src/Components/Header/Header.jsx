import igniteLogo from '../../assets/logo.png'
import './style.css'
function Header(){
    return (
        <div className="header">
            <img src={igniteLogo} alt="" />
        </div>
    )
}
export default Header