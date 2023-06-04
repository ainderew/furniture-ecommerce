import Button, { colorEnum } from '../common/button';

const HeroBanner: React.FC = () => {
  return (
    <div className='h-[calc(50vh-6.5rem)] w-full items-center bg-[url("/hero.jpeg")] bg-cover bg-center xl:flex xl:h-[calc(100vh-13rem)] xl:justify-end xl:p-9 xl:px-20'>
      <div className='div flex h-full w-full flex-col gap-10 bg-white p-8 xl:h-[70%] xl:w-1/2 xl:items-start xl:p-20'>
        <h3 className='text-2xl xl:text-4xl'>
          Luxury homeware for people who love timeless design quality
        </h3>
        <p className='hidden text-left text-xl font-thin xl:block'>
          Shop the new Spring 2022 collection today
        </p>
        <p className='text-left font-thin xl:hidden'>
          With our new collection, view over 400 bespoke pieces from homeware through to furniture
          today
        </p>
        <div className='mt-auto flex flex-1 xl:block xl:flex-grow-0'>
          <Button color={colorEnum.greyLight} label='View Collection' />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
