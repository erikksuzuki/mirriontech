import './App.css'
import ImageGallery from './components/ImageGallery'
import ImageModal from './components/ImageModal'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="my-6 text-capitalize">Past Projects</h1>
        <div className="">
          <ImageGallery />
        </div>

        <div className="overflow-hidden w-[1px] h-[1px]">
          <ImageModal />
        </div>
      </header>
    </div>
  )
}

export default App
