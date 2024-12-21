import Student from './Students'
const App = () => {
    const val = [{"id":"1"}]
  return (
    <div>
       <Student name='Akash' age={20} ismarried={false}/>
       <Student name='Guhan' age={20} ismarried={true}/>      
    </div>
  )
}

export default App
