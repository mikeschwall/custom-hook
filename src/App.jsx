import './App.css'
import * as containerStyles from "./App.module.css"
import PostComponent from './PostComponent'


function App() {

  return (
    <div className={containerStyles.container}>
      <PostComponent/>
    </div>
  )
}

export default App
