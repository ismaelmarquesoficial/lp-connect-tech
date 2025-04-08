import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import { Section, Container } from './layout/Section';
import ScrollReveal from './ScrollReveal';

const Title = styled.h2`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  text-align: center;
  color: ${colors.white};
  margin-bottom: 0.5rem;
  
  
  span {
    color: ${colors.primary};
  }
`;

const Subtitle = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
  text-align: center;
  color: ${colors.whiteTransparent};
  margin-bottom: 3rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
  justify-content: center;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  width: 100%;
  height: 100%;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  isolation: isolate;
  transition: all 0.3s ease;

  ${props => props.featured && `
    background: rgba(0, 0, 0, 0.9);
    box-shadow: 0 8px 32px ${colors.primary}30;
    
    &::before {
      background: linear-gradient(
        90deg,
        ${colors.primary}80,
        ${colors.primary},
        ${colors.primary}80
      );
      opacity: 1;
    }

    .discount-badge {
      position: absolute;
      top: -50px;
      left: -55px;
      background: ${colors.primary};
      color: ${colors.white};
      font-size: 0.55rem;
      padding: 0.2rem 2rem;
      font-weight: 700;
      transform: rotate(-45deg);
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      z-index: 1;
      border-radius: 4px;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
  `}

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1px;
    background: linear-gradient(
      90deg,
      ${colors.primary}60,
      ${colors.primary}80,
      ${colors.primary}60
    );
    border-radius: inherit;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.8;
  }

  &:hover::before {
    background: linear-gradient(
      90deg,
      ${colors.primary}80,
      ${colors.primary},
      ${colors.primary}80
    );
    opacity: 1;
  }
`;

const PriceTag = styled.div`
  text-align: center;
  margin: 0.5rem 0;
  position: relative;

  .current-price {
    font-size: 1.8rem;
    font-weight: 800;
    line-height: 1.2;
    
    span {
      font-size: 0.9rem;
      opacity: 0.9;
      font-weight: 600;
      margin-left: 0.2rem;
    }

    small {
      font-size: 0.8rem;
      opacity: 0.8;
      display: block;
      margin-top: 0.2rem;
    }
  }
`;

const PlanTitle = styled.h3`
  font-size: 1.5rem;
  color: ${colors.white};
  margin-bottom: 0.3rem;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FeatureList = styled.div`
  margin: 0.8rem 0;
  text-align: left;
  padding: 0 0.5rem;
  flex: 1;
`;

const FeatureItem = styled(motion.div)`
  color: ${colors.white};
  font-size: 0.8rem;
  margin-bottom: 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '•';
    color: ${colors.primary};
    font-size: 1rem;
  }

  .title {
    font-weight: 600;
    margin-right: 0.3rem;
  }

  .description {
    opacity: 0.8;
  }
`;

const PricingButton = styled(motion.button)`
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.featured ? colors.primary : 'rgba(255, 255, 255, 0.1)'};
  color: ${colors.white};
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: auto;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  ${props => props.featured && `
    background: ${colors.primary};
    box-shadow: 0 4px 15px ${colors.primary}50;
    
    &:hover {
      background: ${colors.primaryLight};
      transform: translateY(-2px);
    }
  `}

  &:hover {
    transform: translateY(-2px);
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  color: white;
  font-weight: 900;
  span {
    color: ${colors.primary};
  }
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: white;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const PricingSection = () => {
  const features = [
    {
      description: "Integração completa com WhatsApp"
    },
    {

      description: "Gateway do Mercado Pago integrado"
    },
    {
      description: "Sistema de agendamento Cal.com"
    },
    {
      description: "Consultas inteligentes a sites com Perplexity.ia"
    },
    {
      description: "Integração com Hotmart, Eduzz e Kiwify"
    },
    {
      description: "Sistema de transferências"
    },
    {
      description: "CRM"
    },
    {
      description: "Recuperação de Carrinho automática"
    }
  ];

  const plans = [
    {
      title: "Plano Anual",
      price: "299,00",
      installments: "12x",
      featured: true,
      link: "https://chk.eduzz.com/E05X8DAKWX"
    },
    {
      title: "Plano Semestral",
      price: "399,00",
      installments: "6x",
      link: "https://chk.eduzz.com/KW8KV68201"
    },
    {
      title: "Plano Mensal",
      price: "499,00",
      installments: "Mês",
      link: "https://chk.eduzz.com/Q9N5V15B01"
    }
  ];

  return (
    <Section id="pricing-section">
      <Container>
        <ScrollReveal>
          <Title>
            Invista no Futuro do seu Atendimento<span>.</span>
          </Title>
          <Subtitle>
            Transforme seu WhatsApp em uma central inteligente
          </Subtitle>
        </ScrollReveal>

        <Grid>
          {plans.map((plan, index) => (
            <ScrollReveal key={index}>
              <PricingCard
                featured={plan.featured}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TitleContainer>
                  <PlanTitle>{plan.title}</PlanTitle>
                </TitleContainer>
                <PriceTag>
                  {plan.featured && <div className="discount-badge">Melhor Oferta</div>}
                  <div className="price-wrapper">
                    <motion.div 
                      className="current-price"
                      whileHover={{ 
                        scale: 1.1,
                        transition: { 
                          type: "spring",
                          stiffness: 300,
                          damping: 10
                        }
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {plan.installments ? (
                        <>
                          {plan.installments} 
                          <br />
                          R$ {plan.price}
                          <br />
        
                        </>
                      ) : (
                        <>
                          R$ {plan.price}
                          <br />
                          <span>{plan.period}</span>
                        </>
                      )}
                    </motion.div>
                  </div>
                </PriceTag>
                <FeatureList>
                  {features.map((feature, index) => (
                    <FeatureItem
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="title">{feature.title}</div>
                      <div className="description">{feature.description}</div>
                    </FeatureItem>
                  ))}
                </FeatureList>
                <PricingButton
                  as="a"
                  href={plan.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  featured={plan.featured}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { 
                      type: "spring",
                      stiffness: 400,
                      damping: 10
                    }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Quero transformar meu WhatsApp</span>
                  <i className="fab fa-whatsapp whatsapp-icon"></i>
                </PricingButton>
              </PricingCard>
            </ScrollReveal>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default PricingSection; 