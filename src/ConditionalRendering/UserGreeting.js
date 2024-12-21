import styles from './User.module.css'
const UserGreeting = (props) => {
  return(props.isLoggedIn ? <h2 className={styles.welcomeUname}>Welcome : {props.name}</h2> : <h2 className={styles.welcomeText}>Please log in to continue</h2>)
}

export default UserGreeting
