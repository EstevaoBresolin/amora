import React from 'react';
import styled from 'styled-components';
import { FaCalendarAlt } from 'react-icons/fa';
import img1 from './img1.png';

const Page = styled.div`
  background: #0e0e10;
  color: white;
  min-height: 100vh;
  padding: 20px;
  font-family: sans-serif;
  text-align: center;
`;

const Logo = styled.div`
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  font-weight: normal;
  margin: 10px 0;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Player = styled.div`
  background: #1a1a1d;
  border-radius: 8px;
  padding: 10px;
  margin: 20px 0;
  display: inline-block;
`;

const CoupleImage = styled.img`
  width: 100%;
  max-width: 250px;
  border-radius: 12px;
  margin: 20px 0;
`;

const TimeTogether = styled.div`
  margin: 20px 0;
  font-size: 14px;

  div {
    margin-top: 5px;
    font-weight: bold;
  }
`;

const DateBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const DateItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #a855f7;
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;

  svg {
    margin-right: 5px;
  }
`;

const RelationshipPage = () => {
  return (
    <Page>
      <Logo>💖Amora</Logo>

      <Subtitle>
        Vamos para o segundo ano <br /> <Bold>juntos</Bold>
      </Subtitle>

      <Player>
        {/* Aqui você pode colocar um player real ou manter como ilustração */}
        <div>🎵 Current Song</div>
        <input type="range" min="0" max="100" value="50" readOnly />
      </Player>

     <CoupleImage src={img1} alt="Casal" />

      <TimeTogether>
        Juntos há
        <div>1 anos, 11 meses, 29 dias</div>
        <div>8 horas, 54 segundos</div>
      </TimeTogether>

      <DateBox>
        <DateItem>
          <FaCalendarAlt />
          23/08/2022
        </DateItem>

        <DateItem>
          <FaCalendarAlt />
          23/08/2021
        </DateItem>
      </DateBox>
    </Page>
  );
};

export default RelationshipPage;
