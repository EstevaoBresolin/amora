
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaUsers, FaCalendarAlt, FaImage } from 'react-icons/fa';

const Page = styled.div`
  background: #0e0e10;
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

const Card = styled.div`
  border: 2px solid #a855f7;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  margin: 10px 0;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
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

const Plus = styled.div`
  background: #fff;
  color: #000;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 12px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Input = styled.input`
  background: #0e0e10;
  border: 1px solid #a855f7;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 10px;
  color: white;
`;

const TextArea = styled.textarea`
  background: #0e0e10;
  border: 1px solid #a855f7;
  padding: 10px;
  border-radius: 8px;
  width: 100%;
  color: white;
`;

const Section = styled.div`
  margin-bottom: 30px;
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

      <Title>Compartilhe Seu AMOR</Title>

      <Card>
        <div>1 ano, 1 foto e sem música</div>
        <Price>R$ 9,99</Price>
      </Card>

      <Card>
        <div>Pra sempre, 5 fotos e com música</div>
        <Price>R$ 29,99</Price>
      </Card>

      <UploadBox>
        <UploadIcon>
          <FaUsers size={30} color="#a855f7" />
          <Plus>+</Plus>
        </UploadIcon>
        <Button>Escolha a foto</Button>
      </UploadBox>

      <Section>
        <label>Nome do casal</label>
        <Input placeholder="Jorge e Jorgina (Sem Emojis)" />

        <label>Início do Relacionamento</label>
        <div style={{ position: 'relative' }}>
          <Input placeholder="19/19/1900" />
          <FaCalendarAlt style={{ position: 'absolute', right: 10, top: 12 }} />
        </div>

        <label>Mensagem Fofa</label>
        <TextArea placeholder="Mostre todo seu amor"></TextArea>
      </Section>

      {/* Preview Section */}

      <PreviewCard>
        <h4>VEJA SUA OBRA DE ARTE</h4>
        <div style={{ fontSize: '20px', marginBottom: '10px' }}>💕</div>

        <Input readOnly value="amora.com-jorge-e-jorgina" />

        <div style={{ background: '#1a1a1d', padding: '20px', borderRadius: '8px', margin: '10px 0' }}>
          <FaImage size={48} />
        </div>

        <div>Juntos há</div>
        <div style={{ fontWeight: 'bold', margin: '10px 0' }}>
          0 anos, 0 meses, 29 dias<br />
          8 horas, 54 segundos
        </div>

        <Divider />

        <div>*Mensagem</div>

        <Button style={{ background: '#ff2e9e', marginTop: '20px' }}>   
               <Link to="/relacionamento" style={{ color: '#fff', textDecoration: 'none' }}>
                  Ver site
                </Link>
        </Button>
      </PreviewCard>
    </Page>
  );
};

export default LoveSharePage;