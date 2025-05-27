
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaImage } from 'react-icons/fa';
import img1 from '../assets/users.svg';

import '../styles/LoveShare.css';

const Page = styled.div`
  background: #0D0D12;
  color: white;
  min-height: 100vh;
  padding: 20px;
  font-family: sans-serif;
`;

const Logo = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const UploadBox = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const UploadIcon = styled.div`
  background: #1a1a1d;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Button = styled.button`
  background: #1a1a1d;
  color: white;
  padding: 10px;
  border-radius: 8px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
`;

const Divider = styled.hr`
  border-color: #ff2e9e;
  margin: 10px 0;
`;

const PreviewCard = styled.div`
  border: 2px solid #ff2e9e;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  background: #0e0e10;
`;

const LoveSharePage = () => {
  return (
    <Page>
      <Logo>💖Amora</Logo>

      <Title>Compartilhe Seu<br/> AMOR</Title>

      <div className='Card'>
        <p className='card-txt'>1 ano, 1 foto e sem música</p>
        <p className='price'>R$ 9,99</p>
      </div>

      <div className='Card'>
        <p className='card-txt'>Pra sempre, 5 fotos e com música</p>
        <p className='price'>R$ 29,99</p>
      </div>

      <UploadBox>
        <UploadIcon>
          <img style={{ width: '45px' }} src={img1}></img>
          <div className='icone-adicionar-foto'>+</div>
        </UploadIcon>
        <Button>Escolha a foto</Button>
      </UploadBox>

      <div className='section'>
        <p className='section-text'>Nome do casal</p>
        <input type='text' placeholder="Jorge e Jorgina (Sem Emojis)" />

        <p className='section-text'>Início do Relacionamento</p>
        <div style={{ position: 'relative' }}>
          <input type='text' placeholder="19/19/1900" />
          <FaCalendarAlt style={{ position: 'absolute', right: 10, top: 12 }} />
        </div>

        <p className='section-text'>Mensagem Fofa</p>
        <textarea placeholder="Mostre todo seu amor"></textarea>
      </div>

      {/* Preview Section */}

        <h4 className='titulo-4'>VEJA SUA OBRA DE ARTE</h4>
      <PreviewCard>
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>💕</div>

        <input className='arte-nomes' type='text' readOnly placeholder="amora.com-jorge-e-jorgina" />

        <div className='preview-arte'>
          <FaImage size={48} />
        </div>

        <div>Juntos há</div>
        <div style={{ fontWeight: 'bold', margin: '10px 0', fontSize: '14px' }}>
          <p>
              0 anos, 0 meses, 29 dias<br />
              8 horas, 54 segundos
          </p>
          
        </div>

        <Divider />

        <div>*Mensagem</div>

      </PreviewCard>
        <Button style={{ background: '#ff2e9e', marginTop: '20px' }}>   
               <Link to="/relacionamento" style={{ color: '#fff', textDecoration: 'none' }}>
                  CRIE MINHA PAGINA
                </Link>
        </Button>
    </Page>
  );
};


export default LoveSharePage;