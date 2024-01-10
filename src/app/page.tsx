import Image from 'next/image'
import Slider from './components/slider'
import Description from './components/description'
import Salesbar from './components/salesbar'
import OtherProducts from './components/otherProducts'
import CustomerReviews from './components/customerReviews'

export default function Home() {
  return (
    <main className='mt-14 lg:w-[65%] md:w-[75%] w-[90%] mx-auto'>
      <div className='grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
        {/* 3 kolumny, jedna na zdjecia, jedna na opis, jedna na promocje, na telefonie wszystko przeskakuje na dol */}
        <Slider />
        <Description />
        <Salesbar />
      </div>
      <div className='mt-10 mx-auto'>
        <OtherProducts />
      </div>
      <div className='mt-20 mx-auto'>
        <CustomerReviews />
      </div>
    </main>
  )
}
