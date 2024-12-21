
const Table = (props) => {
    const {ch} = props;
    return (
        <div className="student">
          <table>
           <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
            {ch.map((c,i)=>(
                <tr key={i}>
                  <td>{c.name}</td>
                  <td>{c.age}</td>
                </tr>
            ))}
           </tbody>
          </table>  
    </div>
     );
        
}

export default Table;