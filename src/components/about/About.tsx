import PS from './client/PS';
import { SmotionDiv, SmotionHeader } from '@/libs/framer-motion';

const About = () => {
  return (
    <section
      className='overflow-hidden scrollbar-hidden bg-primary
                h-[400px]
                md:h-[450px]
                lg:h-[500px]'
    >
      {/* container */}
      <div
        className='flex flex-col items-center text-white
                mt-6
                sm:mt-9
                md:mt-12
                2xl:max-w-[100rem] 2xl:mx-auto'
      >
        {/* header */}
        <div>
          <SmotionHeader
            elementType='h2'
            initial={{ opacity: 0, x: -90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
            className='text-3xl sm:text-4xl font-extrabold'
          >
            About.
          </SmotionHeader>
          <SmotionDiv
            initial={{ opacity: 0, x: 90 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.38 }}
            viewport={{ amount: 'some', margin: '100% 0% -9% 0%' }}
            className='flex justify-center -mt-0.5'
          >
            <hr className='bg-white h-[0.2rem] w-12 sm:w-16 rounded-xl' />
          </SmotionDiv>
        </div>

        {/* body */}
        <SmotionDiv
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          viewport={{ amount: 'some', margin: '100% 0% -8% 0%' }}
          className='font-semibold text-center
                px-4 mt-6 text-lg
                md:mt-12 md:text-xl
                lg:px-9'
        >
          {/* first sentence */}
          <SmotionDiv>
            <p>
              These days, I'm diving deep into AI-powered healthcare{' '}
              <br className='hidden xxsm:block xsm:hidden' /> solutions and{' '}
              <br className='hidden xsm:block sm:hidden' /> environmental
              <br className='hidden lg:block' /> sustainability.
            </p>
          </SmotionDiv>

          {/* @medium-device: second sentence */}
          <SmotionDiv className='hidden sm:block'>
            <p>
              From working on respiratory disease detection at USF to{' '}
              <br className='hidden md:block lg:hidden' /> developing AquaEmi,{' '}
              <br className='hidden lg:block' /> an AI-driven water quality{' '}
              <br className='hidden sm:block md:hidden lg:hidden' /> monitoring system{' '}
              for the Mekong River, I love using technology to create{' '}
              <br className='hidden lg:block' /> solutions that help underserved communities.
            </p>
          </SmotionDiv>

          {/* third sentence */}
          <div className='mt-6 flex justify-center'>
            <PS />
          </div>
        </SmotionDiv>
      </div>
    </section>
  );
};

export default About;
