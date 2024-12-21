import styles from './Button.module.css'
const Button = () => {
  return (
    <div>
       <button className={styles.button}>Click me</button>
       <input className={styles.id} type="text" 
          placeholder='Useraname'
       />
    </div>
  )
}

export default Button
