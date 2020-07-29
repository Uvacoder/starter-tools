import classnames from 'classnames';
import { FC, useEffect, useState } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
   const [scrolled, setScrolled] = useState(false);
   useEffect(() => {
      const onScroll = () => {
         if (!scrolled && window.scrollY > 20) {
            setScrolled(true);
         } else if (window.scrollY <= 20) {
            setScrolled(false);
         }
      };
      window.addEventListener('scroll', onScroll);
      return () => {
         window.removeEventListener('scroll', onScroll);
      };
      // eslint-disable-next-line
   }, []);

   return (
      <div
         className={classnames('navbar fadeInDown', {
            scrolled,
         })}
      >
         <div className="container-lg fx fx-jcsb fx-aic">
            <div className="brand">
               <Link href="/">
                  <a>
                     <h1 style={{ margin: '0' }}>MyTools</h1>
                  </a>
               </Link>
            </div>
         </div>
         <style jsx>{`
            .navbar {
               // background: #003366;
               background: #fff;
               position: fixed;
               top: 0;
               left: 0;
               width: 100%;
               z-index: 1000;
               box-shadow: -2px 0 30px -10px rgba(0, 0, 0, 0.2);

               * {
                  transition: all 0.2s ease-in-out;
               }
               .container-lg {
                  height: 90px;
                  .brand {
                     img {
                        height: 20px;
                     }
                  }
               }
               &.scrolled {
                  box-shadow: -2px 0 30px -10px rgba(0, 0, 0, 0.2);
                  .container-lg {
                     height: 60px;
                  }
               }
            }
            :global(html) {
               padding-top: 90px;
            }
         `}</style>
      </div>
   );
};

export default Navbar;
