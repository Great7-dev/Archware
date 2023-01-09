import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url('https://wp.disruptiveadvertising.com/wp-content/uploads/2018/12/ad-campaigns-blog.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .grid-container {
      width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
    place-items: center;
    align-items: flex-start;
    height: 610px;
    overflow: scroll;
    }
    .datecont{
      flex-direction: row;
      display: flex;
      
    }
  
`;