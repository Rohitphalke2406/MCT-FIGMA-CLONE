import Image from "next/image";

const Loader = () => (
  <div className='flex h-screen w-screen flex-col items-center justify-center gap-2'>
    <Image
      src='/assets/loader.gif'
      alt='loader'
      width={200}
      height={200}
      className='object-contain'
    />
    <p className='text-lg font-bold text-slate-200'>
      Your App is Getting Ready to Roll!!!
    </p>
  </div>
);

export default Loader;
