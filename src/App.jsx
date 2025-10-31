import { Provider } from "react-redux"
import Body from "./Components/Body" 
import Appstore from "./Components/utils/appstore"


const App = () => {
  return (
   <Provider store={Appstore}>
    <Body/>
   </Provider>
  )
}

export default App
