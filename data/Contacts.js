import { FaGithub, FaHome, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export const Contacts = [
	{
		id: 1,
		name: 'Email',
		value: 'mschodeihsan@gmail.com',
		href: 'mailto:mschodeihsan@gmail.com',
		icon: (className) => {
			return <HiOutlineMail className={className}/>
		}
	},
  {
    id: 2,
    name: 'WhatsApp',
    value: '+62 898-3900-757',
    href: 'https://wa.me/628983900757',
    icon: (className) => {
    	return <FaWhatsapp className={className}/>
    }
  },
  {
    id: 3,
    name: 'GitHub',
    value: 'github.com/xzfrost',
    href: 'https://github.com/xzfrost',
    icon: (className) => {
    	return <FaGithub className={className}/>
    }
  },
  {
    id: 5,
    name: 'Instagram',
    value: 'instagram.com/mscihsnhrd',
    href: 'https://www.instagram.com/mscihsnhrd',
    icon: (className) => {
    	return <FaInstagram className={className}/>
    }
  },
  {
  	id: 6,
  	name: 'Home',
  	value: 'Cimahi City, West Java, Indonesia',
  	href: 'https://maps.app.goo.gl/goamvunRHCcgPQrB8',
  	viewBox: '3.3 1 24 24',
  	icon: (className) => {
    	return <FaHome className={className}/>
    }
  }
]