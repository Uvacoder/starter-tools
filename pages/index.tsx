import styled from 'styled-components';
import Navbar from '../components/navbar';

const Title = styled.h1`
   color: red;
   font-size: 50px;
`;

export default function Home() {
   return (
      <>
         <Navbar />
      </>
   );
}
