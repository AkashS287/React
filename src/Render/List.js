import styles from './Lapp.module.css'
const List = (props) => {
    const itemList = props.items; 
    const category = props.category;
    const listitems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp;
                                               {item.cal}
    
    </li>);
    return(
        <div className={styles.box}>
          <h2 className={styles.category}>{category}</h2>
          <ul className={styles.Font}>{listitems}</ul>
        </div>
    )
}
export default List