'use client';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Social from '@/components/Social';
import { useState } from 'react';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '513 383 4750',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'jcordell316@email.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Location',
    description: 'Cincinnati, Ohio',
  },
];

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard
      .writeText('jcordell316@email.com')
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // Reset after 2 seconds
      })
      .catch((err) => console.error('Failed to copy email:', err));
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together.</h3>
              <p className="text-white/60">
                Thank you for taking the time to view my web portfolio. If
                you&apos;d like to get in touch, please click on the email icon
                to copy my email address, and I&apos;ll respond as soon as I
                can. To connect on LinkedIn or view my GitHub, click on the
                respective icons on the left.
              </p>
            </form>
          </div>
          {/* social and contact */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div
                      className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center"
                      onClick={item.title === 'Email' ? handleEmailClick : null}
                    >
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                      {item.title === 'Email' && emailCopied && (
                        <p className="text-accent text-sm">
                          Email copied to clipboard!
                        </p>
                      )}
                    </div>
                  </li>
                );
              })}
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
