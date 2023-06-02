import Image from 'next/image';
import ProductCard from '../product-card';
import WebNavbar from '../web-navbar/web-navbar';
import HeroBanner from './banner';
import InfoCard from './info-card';

const Home: React.FC = () => {
  return (
    <main className='flex flex-col'>
      <div className='flex h-screen w-full flex-col'>
        <WebNavbar />
        <HeroBanner />
      </div>
      <section className='flex h-1/2 flex-col items-center justify-center gap-16 p-8 py-8 xl:px-32'>
        <h3 className='text-2xl font-thin'>What makes our brand different</h3>
        <div className='info-section grid h-full w-full grid-cols-1 gap-8 xl:grid-cols-4'>
          <InfoCard
            image='/delivery.svg'
            text='Order before 3pm and get your order the next day as standard'
            label='Next day as standard'
          />
          <InfoCard
            image='/checkmark.svg'
            text='Handmade crafted goods made with real passion and craftmanship'
            label='Made by true artisans'
          />
          <InfoCard
            image='/card.svg'
            text="For our materials and quality you won't find better prices anywhere"
            label='Unbeatable prices'
          />
          <InfoCard
            image='/sprout.svg'
            text='We use 100% recycled to ensure our footprint is more manageable'
            label='Recycled Packaging'
          />
        </div>
      </section>

      <section className='mt-16 flex h-full w-full flex-col items-center justify-center gap-20 p-8 xl:h-[75vh] xl:px-32 xl:py-8'>
        <div className='grid w-full grid-cols-2 gap-4 xl:h-3/4 xl:grid-cols-4 xl:gap-8'>
          <ProductCard image='/prod1.jpg' name='The Dandy chair' price='$250' />
          <ProductCard image='/prod2.jpg' name='Rustic Vase Set' price='$155' />
          <ProductCard image='/prod3.jpg' name='The Silky Vase' price='$125' />
          <ProductCard image='/prod4.jpg' name='The Lucy Lamp' price='$399' />
        </div>
        <button className='bg-greyLight px-8 py-4'>View collection</button>
      </section>

      <section className='flex items-center xl:h-[75vh] xl:w-full xl:px-32'>
        <div className='grid h-3/4 w-full grid-cols-2 gap-4'>
          <div className='bg-darkPrimary'></div>
          <div className='relative'>
            <Image src={'/display1.jpg'} fill alt='furniture display' />
          </div>
        </div>
      </section>

      <section className="w-full bg-[url('/email-banner.jpg')] bg-center xl:h-[50vh]"></section>
      <footer className='bg-darkPrimary xl:h-[40vh]'></footer>
    </main>
  );
};

export default Home;
