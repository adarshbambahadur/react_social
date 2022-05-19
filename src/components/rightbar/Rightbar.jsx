import './rightbar.css'
import { Users } from '../../dummyData'
import Online from '../online/Online'

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <div className="brightdayContainer">
          <img src="assets/gift.png" alt="birthday" className="birthdayImg" />
          <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends </b>have a birthday today</span>
        </div>
        <img src="assets/ad.png" alt="ad" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Rightbar