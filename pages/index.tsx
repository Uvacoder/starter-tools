import Navbar from '../components/navbar';
import { Card, Typography, Button } from 'antd';
import Router from 'next/router';

export default function Home() {
   return (
      <>
         <Navbar />
         <div className="container-lg">
            <div className="content">
               <Card>
                  <Typography.Title level={3}>Slugger</Typography.Title>
                  <Button
                     type="primary"
                     block
                     onClick={() => {
                        Router.push('/slugger');
                     }}
                  >
                     Go to
                  </Button>
               </Card>
               <Card>
                  <Typography.Title level={3}>Decode Asscii</Typography.Title>
                  <Button
                     type="primary"
                     block
                     onClick={() => {
                        Router.push('/ascii-to-text');
                     }}
                  >
                     Go to
                  </Button>
               </Card>
            </div>
         </div>
         <style jsx>{`
            .container-lg {
               padding: 20px 15px;
            }
            .content {
               display: grid;
               grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
               grid-gap: 25px;
               :global(.ant-card) {
                  box-shadow: -4px 4px 15px rgba(0, 0, 0, 0.1);
                  border: none;
               }
            }
         `}</style>
      </>
   );
}
