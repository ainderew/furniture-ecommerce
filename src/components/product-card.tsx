import Image from 'next/image';
import { poppins } from '@/utils/fonts';

interface props {
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<props> = ({ image, name, price }) => {
  return (
    <div className='flex h-[35vh] w-full flex-col gap-2 transition duration-300 hover:scale-[1.02] xl:h-full xl:gap-4'>
      <div className='relative h-full w-full'>
        <Image src={image} alt='product' fill />
      </div>
      <span className='text-lg '>{name}</span>
      <span className={`${poppins.className} text-lg font-thin`}>{price}</span>
    </div>
  );
};

export default ProductCard;
