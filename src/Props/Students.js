
const Students = (props,index) => {
  return (
    <div>
       <h1 key={index}>Name:{props.name}</h1>
       <h1>Age:{props.age}</h1>
       <h1>Married:{props.ismarried ? "Yes" : "No"}</h1>
       <h1>ID:{props.id}</h1>
    </div>
  )
}

export default Students
