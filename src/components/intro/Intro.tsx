import Image from 'next/image';
import { ImMail } from 'react-icons/im';
import { VerticalCommonVariants } from '@/utils/framerVariants';
import {
  SmotionDiv,
  SmotionLink,
  SmotionHeader,
  SmotionSpan,
} from '@/libs/framer-motion';
import {
  QUIET_NODE_LINKEDIN_LINK,
  QUIET_NODE_GITHUB_LINK,
  QUIET_NODE_TWITTER_LINK,
  QUIET_NODE_EMAIL_LINK,
} from '@/utils/constants';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from 'react-icons/ai';

const Intro = () => {
  const descriptionVariants = VerticalCommonVariants(60, 9, 0.9);
  return (
    <section
      className='h-screen overflow-hidden scrollbar-hidden
                lg:min-h-[100vh]
                2xl:max-w-[100rem] 2xl:mx-auto'
      id='intro'
    >
      {/* container */}
      <div className='h-full flex flex-col items-center justify-around relative'>
        {/* headers */}
        <div
          className='flex flex-col text-center mt-28
                     gap-6
                     sm:gap-12'
        >
          {/* Greetings */}
          <div className='drop-shadow-xl'>
            <SmotionHeader
              elementType='h1'
              initial={{ opacity: 0, y: -60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className='text-primary font-extrabold flex gap-1 justify-center
                    text-4xl
                    sm:text-5xl'
            >
              Howdy,
              <SmotionSpan
                animate={{
                  rotate: [0, 30, 0, 30, 0, 0, 0],
                  transition: { duration: 1.4, repeat: Infinity },
                }}
                className='cursor-pointer select-none'
              >
                👋
              </SmotionSpan>{' '}
                It&apos;s Gia Linh <span className='hidden xxsm:inline'>;)</span>
            </SmotionHeader>
            <SmotionHeader
              elementType='h2'
              initial={{ opacity: 0, x: -90 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='text-primary font-medium
                    text-xl sm:text-2xl'
            >
              (a.k.a. Linh Adora)
            </SmotionHeader>
          </div>

          {/* Description */}
          <SmotionDiv
            initial='hidden'
            whileInView='shown'
            viewport={{ once: true }}
            variants={descriptionVariants}
            className='text-xxxl sm:text-2xl font-bold drop-shadow-xl'
          >
            <SmotionDiv variants={descriptionVariants}>
              Hi, I’m Gia Linh—a researcher, developer, and lifelong learner with a passion for blending technology and impact.
            </SmotionDiv>
            {/* <SmotionDiv variants={descriptionVariants}>
              Blockchain and Web 3.0 Enthusiast.
            </SmotionDiv>
            <SmotionDiv variants={descriptionVariants}>
              Innovating technology for a brighter future.
            </SmotionDiv> */}
          </SmotionDiv>
        </div>

        {/* Social & Avatar */}
        <div className='flex flex-col'>
          {/* Social Medias */}
          <div className='text-6xl flex flex-wrap justify-center gap-9 xxsm:gap-12 sm:gap-16 lg:gap-20 py-3 text-teal-600'>
            <SmotionLink
              initial={{ opacity: 0, x: -21 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href={QUIET_NODE_LINKEDIN_LINK as string}
              target='_blank'
              className='cursor-pointer hover:text-[#0A66C2]'
              title='LinkedIn'
            >
              <AiFillLinkedin />
            </SmotionLink>
            <SmotionLink
              initial={{ opacity: 0, y: 21 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              href={QUIET_NODE_GITHUB_LINK}
              target='_blank'
              className='cursor-pointer hover:text-black'
              title='GitHub'
            >
              <AiFillGithub />
            </SmotionLink>

            <SmotionLink
              initial={{ opacity: 0, y: 21 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              href={`https://www.instagram.com/_twinklelittlemoon_/`}
              target='_blank'
              className='cursor-pointer hover:text-[#1DA1F2]'
              title='instagram'
            >
              <Image 
                src="/assets/avatars/ins_icon.png"
                alt="Instagram"
                width={48}
                height={48}
                className="object-contain"
              />
            </SmotionLink>
            <SmotionLink
              initial={{ opacity: 0, x: 21 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -0.5 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              href={QUIET_NODE_EMAIL_LINK}
              target='_blank'
              className='cursor-pointer hover:text-red-600 flex items-center'
              title='Gmail'
            >
              <ImMail size={40} />
            </SmotionLink>
          </div>

          {/* Avatar */}
          <div className='flex justify-center'>
            <SmotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileInView={{
                y: [0, 21, 0],
                transition: { duration: 2, repeat: Infinity },
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: 1.4 }}
              className={`rounded-full relative
                        w-80 h-80
                        sm:w-[21rem] sm:h-[21rem]
                        lg:w-96 lg:h-96
                        2xl:w-[24rem] 2xl:h-[24rem]`}
            >
              <Image
                className='absolute inset-0 w-full h-full object-center object-cover rounded-full select-none'
                src={'/assets/avatars/profile_pic.jpg'}
                alt='quiet-node'
                width={300}
                height={300}
              />
            </SmotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
