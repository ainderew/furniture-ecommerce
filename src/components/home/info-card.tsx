import Image from 'next/image';
import { poppins } from '@/utils/fonts';

interface props {
  text: string;
  label: string;
  image: string;
}

const InfoCard: React.FC<props> = ({ text, label, image }) => {
  return (
    <div className='flex h-full w-full flex-col gap-4 bg-greyLight p-14'>
      <div className='relative h-5 w-5'>
        <Image src={image} alt='test' fill />
      </div>
      <h4 className='text-lg'>{label}</h4>
      <p className={`${poppins.className} font-thin`}>{text}</p>
    </div>
  );
};

export default InfoCard;
