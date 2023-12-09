import Listing from './Listing.tsx'
import Etsy from './Etsy.tsx'
import './App.css'

function App() {

  return (

    <>

      <div className="item-list">
        {Etsy.map((item) => (
          (item.state === 'active') ? <Listing items={item} key={item.listing_id} /> : false
        ))}
      </div>
    </>
  )
}

export default App
