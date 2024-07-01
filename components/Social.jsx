import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/J0hn316',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/john-wrimene-3b0735228/',
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;