import React, {useState, useEffect} from 'react'


function App() {
const [holdState, setHoldState] = useState([])
const [isLoader, setIsLoader] = useState(false)
console.log(isLoader)

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response => response.json()))
    .then((data) => {
        setHoldState(data.message)
        setIsLoader(true)
     })
}, [])

if(!isLoader) return <p>Loading...</p>

  return (
    <div>
      <img src={holdState} alt="A Random Dog" />
    </div>
  )
}


export default App 