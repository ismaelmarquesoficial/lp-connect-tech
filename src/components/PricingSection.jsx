import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import colors from '../styles/colors';
import { Section, Container } from './layout/Section';
import ScrollReveal from './ScrollReveal';
import AnimatedIcon from './AnimatedIcon';

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

  ${props => props.$featured && `
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

  ${props => props.$promotion && `
    border: 2px solid ${colors.secondary};
  `}
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

  .promo-below {
    display: inline-block;
    margin-top: 0.4rem;
    background: ${colors.secondary};
    color: ${colors.white};
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.15rem 1.1rem;
    border-radius: 4px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    border: 1px solid ${colors.secondary};
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
  margin: 1.2rem 0 0.8rem 0;
  text-align: left;
  padding: 0 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

const FeatureItem = styled(motion.div)`
  color: ${colors.white};
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  background: none;
  border: none;
  padding: 0;

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background: ${colors.primary}20;
    border-radius: 50%;
    color: ${colors.primary};
    font-size: 1.1rem;
    margin-right: 0.2rem;
  }

  .title {
    font-weight: 600;
    margin-right: 0.3rem;
    color: ${colors.white};
  }

  .description {
    opacity: 0.8;
    font-size: 0.95rem;
    color: ${colors.whiteTransparent};
  }

  .badge {
    background: ${colors.secondary};
    color: #fff;
    font-size: 0.7rem;
    font-weight: 700;
    border-radius: 8px;
    padding: 0.1rem 0.6rem;
    margin-left: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 8px ${colors.secondary}30;
  }
`;

const PricingButton = styled(motion.button)`
  width: 100%;
  padding: 0.7rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.$featured ? colors.primary : props.$promotion ? colors.secondary : 'rgba(255, 255, 255, 0.1)'};
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

  ${props => props.$featured && `
    background: ${colors.primary};
    box-shadow: 0 4px 15px ${colors.primary}50;
    
    &:hover {
      background: ${colors.primaryLight};
      transform: translateY(-2px);
    }
  `}

  ${props => props.$promotion && `
    background: ${colors.secondary};
    box-shadow: 0 4px 15px ${colors.secondary}50;
    
    &:hover {
      background: ${colors.secondaryLight};
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

const sharedBenefits = [
  "WhatsApp Business",
  "Mercado Pago",
  "Cal.com",
  "Perplexity AI",
  "Plataformas de Venda",
  "Transferências",
  "Carrinho Abandonado",
  "CRM Avançado"
];

const PricingSection = () => {
  const plans = [
    {
      title: "Plano Anual",
      price: "R$ 297",
      period: "por mês",
      totalPrice: "R$ 3.564",
      features: sharedBenefits.map(title => ({ title })),
      featured: true,
      link: "https://checkout.doppus.app/73257821"
    },
    {
      title: "Plano Semestral",
      price: "R$ 399",
      period: "por mês",
      totalPrice: "R$ 2.394",
      features: sharedBenefits.map(title => ({ title })),
      link: "https://checkout.doppus.app/39660707"
    },
    {
      title: "Plano Mensal",
      price: "R$ 499",
      period: "por mês",
      promotion: true,
      features: sharedBenefits.map(title => ({ title })),
      link: "https://checkout.doppus.app/85606372"
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
            <PricingCard
              key={index}
              $featured={plan.featured}
              $promotion={plan.promotion}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.5,
                  delay: index * 0.2 
                }
              }}
              viewport={{ once: true }}
            >
              {plan.featured && (
                <div className="discount-badge">Mais Popular</div>
              )}
              <PlanTitle>{plan.title}</PlanTitle>
              <PriceTag>
                <div className="current-price">
                  {plan.price}
                  <span>/mês</span>
                  {plan.totalPrice && (
                    <small>Total: {plan.totalPrice}</small>
                  )}
                </div>
                {plan.promotion && (
                  <div className="promo-below">Primeiro mês R$ 50</div>
                )}
              </PriceTag>
              <FeatureList>
                {plan.features.map((feature, idx) => (
                  <FeatureItem
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ 
                      opacity: 1, 
                      x: 0,
                      transition: { 
                        duration: 0.3,
                        delay: 0.1 * idx 
                      }
                    }}
                    viewport={{ once: true }}
                  >
                    <span className="title">{feature.title}</span>
                  </FeatureItem>
                ))}
              </FeatureList>
              <PricingButton
                $featured={plan.featured}
                $promotion={plan.promotion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                as="a"
                href={plan.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Começar Agora
              </PricingButton>
            </PricingCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default PricingSection; 