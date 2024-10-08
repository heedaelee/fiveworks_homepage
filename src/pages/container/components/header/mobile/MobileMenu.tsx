import {MouseEvent, useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {ChevronDown, ChevronUp} from 'lucide-react';
import {MENU_LIST} from '@/constants/menu-list';
import {Link} from 'react-router-dom';
import MenuButton from './MenuButton';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<number[]>([]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleSubMenu = (index: number) => {
    // console.log('index : ', index);
    // console.log(openSubMenus);
    // openSubMenus 배열에 숫자가 포함된 인덱스는 Open되어 있다는 뜻. 그러므로 포함되어 있다면 배열에 인덱스 제거하고, 아니라면 추가
    setOpenSubMenus(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index],
    );
  };
  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, url: string) => {
    // 클라이언트 사이드 내비게이션 보다 새로고침으로 해둠
    // setIsOpen(false); // isOpen 상태를 false로 설정
    event.preventDefault(); // Prevent the default behavior of the link
    window.location.href = url; // Navigate to the URL and refresh the page
  };

  return (
    <>
      <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{clipPath: 'circle(0% at calc(100% - 2rem) 2rem)'}}
            animate={{clipPath: 'circle(150% at calc(100% - 2rem) 2rem)'}}
            exit={{clipPath: 'circle(0% at calc(100% - 2rem) 2rem)'}}
            transition={{duration: 0.5, ease: 'easeInOut'}}
            className='fixed inset-0 bg-gray-600 text-white z-40 overflow-y-auto'>
            <nav className='p-8 pt-16'>
              <ul className='space-y-2'>
                {MENU_LIST.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: index * 0.1}}>
                    <button
                      className='flex justify-between items-center w-full text-left text-xl font-bold py-2'
                      onClick={() => toggleSubMenu(index)}
                      aria-expanded={openSubMenus.includes(index)}>
                      {item.label}
                      {openSubMenus.includes(index) ? (
                        <ChevronUp className='w-5 h-5' />
                      ) : (
                        <ChevronDown className='w-5 h-5' />
                      )}
                    </button>
                    <AnimatePresence>
                      {openSubMenus.includes(index) && (
                        <motion.ul
                          initial={{height: 0, opacity: 0}}
                          animate={{height: 'auto', opacity: 1}}
                          exit={{height: 0, opacity: 0}}
                          transition={{duration: 0.3, ease: 'easeInOut'}}
                          className='ml-4 overflow-hidden'>
                          {item.subItems.map((subItem, subIndex) => (
                            <motion.li
                              key={subIndex}
                              initial={{opacity: 0, x: -20}}
                              animate={{opacity: 1, x: 0}}
                              transition={{delay: subIndex * 0.05}}
                              className='py-2'>
                              <Link
                                to={subItem.to}
                                onClick={e => handleLinkClick(e, subItem.to)}
                                className='text-white'>
                                {subItem.label}
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
