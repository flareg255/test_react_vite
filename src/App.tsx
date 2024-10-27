import './App.css'
import TestComponent from './components/TestComponent'
import TestComponent2 from './components/TestComponent2'

function App() {

  return (
    <>
      <TestComponent name="権太" initNumber={4}/>
      <TestComponent2 name="ゴンザレス" initNumber={3}/>
    </>
  )
}

export default App
