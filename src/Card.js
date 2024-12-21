import Profile_pic from './Pictures/profile_pic.png'
import './Card.css'
const Card = () =>{
    return(
        <div className='card-body'>
          <img src={Profile_pic} alt="Profile" width={250} height={250}/>
          <h1 className="Name">Akash</h1>
          <h3>Iam currently pursuing KPR Institute and Engineering</h3>
        </div>
    )
}
export default Card