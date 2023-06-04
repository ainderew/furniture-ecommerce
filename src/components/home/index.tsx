import Image from 'next/image';
import ProductCard from '../product-card';
import WebNavbar from '../web-navbar/web-navbar';
import HeroBanner from './banner';
import InfoCard from './info-card';
import Button, { colorEnum } from '../common/button';

const Home: React.FC = () => {
  return (
    <main className='flex flex-col'>
      <div className='flex h-screen w-full flex-col'>
        <WebNavbar />
        <HeroBanner />
        <div className='phone-banner h-[calc(50vh-6.5rem)] w-full bg-[url("/hero.jpeg")] bg-cover xl:hidden'></div>
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
            image='/check.svg'
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
        <div className=''>
          <Button color={colorEnum.greyLight} label='View collection' />
        </div>
      </section>

      <section className='flex items-center xl:h-[75vh] xl:w-full xl:px-32'>
        <div className='grid h-3/4 w-full grid-cols-2 gap-4'>
          <div className='flex flex-col gap-8 bg-darkPrimary p-24 text-white'>
            <h3 className='text-3xl'>It started with a small idea</h3>
            <p className='text-base font-thin'>
              A global brand with local beginnings, our story begain in a small studio in South
              London in early 2014
            </p>
            <div className='mt-auto'>
              <Button color={colorEnum.transparentWhite} label='View Collection' />
            </div>
          </div>
          <div className='relative'>
            <Image src={'/display1.jpg'} fill alt='furniture display' />
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col items-center gap-8 bg-[url('/email-banner.jpg')] bg-center p-28 text-white xl:h-[50vh]">
        <div className='w-[40%]'>
          <h4 className='text-center text-3xl'>Join the club and get the benefits</h4>
        </div>
        <div className='w-[31%] whitespace-normal'>
          <p className='text-center font-thin'>
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up
            stores and more
          </p>
        </div>
        <div className='flex w-[31%] justify-between'>
          <div className='flex gap-2'>
            <Image src={'/checkWhite.svg'} alt='check mark' width={14} height={14} />
            <span className='font-thin'>Exclusive offers</span>
          </div>
          <div className='flex gap-2'>
            <Image src={'/checkWhite.svg'} alt='check mark' width={14} height={14} />
            <span className='font-thin'>Free events</span>
          </div>
          <div className='flex gap-2'>
            <Image src={'/checkWhite.svg'} alt='check mark' width={14} height={14} />
            <span className='font-thin'>Large discounts</span>
          </div>
        </div>
      </section>
      <footer className='bg-darkPrimary xl:h-[40vh]'></footer>
    </main>
  );
};

export default Home;
