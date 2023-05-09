import './style.css'
import ProfilePhoto from '../ProfilePhoto'

function FeedbackComment() {
    return (
        <div className="comment">
            <img src={ ProfilePhoto } alt="" />
            <div className="group">
                <div className="texts">
                    
                </div>
                <div className="liked">

                </div>
            </div>
        </div>
    )
}
export default FeedbackComment