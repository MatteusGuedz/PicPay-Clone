import React, { useState }from 'react'
import {
    Container,    
     Wrapper,
     Header,
     HeaderContainer,
     Title,
     BalanceContainer,
     Value,
     Bold,
     EyeButton,
     Info,
     Actions,
     Action,
     ActionLabel,
     UseBalance,
     UseBalanceTitle,
     PaymentMethods,
     PaymentMethodTitle,
     Card,
     CardBody,
     CardDetails,
     CardDetailTitle,
     CardInfo,
     Img,
     AddButton,
     AddLabel,
     UseTicketContainer,
     UseTicketButton,
     UseTicketLabel,
    } from './styles'
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons'
import { Switch} from 'react-native'
import creditCard from '../../images/credit-card.png'

export default function Wallet(){
    const [isVisible, setIsVisible] = useState(true)
    const [useBalance, setUseBalance] = useState(true)

    function handleToggleVisibility(){
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance(){
        setUseBalance((prevState) => !prevState);
    }
 return (
    <Wrapper>
    <Container>
    <Header colors={
         useBalance 
         ? ['#52e75c', '#1ab563']
         : ['#d3d3d3', '#868686']
    }>
    <HeaderContainer>
        <Title>Saldo PicPay </Title>

        <BalanceContainer>
            <Value>R$<Bold> {isVisible ? "0,00" : "----"}</Bold> </Value>
            <EyeButton onPress={handleToggleVisibility}>
            <Feather name={isVisible ? "eye" : "eye-off"}  color="#fff" size={28}/>
            </EyeButton>      
        </BalanceContainer>
        <Info> Seu Saldo está rendendo 100% do CDI </Info>

        <Actions>
            <Action>
                <MaterialCommunityIcons name="cash" size={28} color="#fff"/>
                <ActionLabel>Adicionar</ActionLabel>
            </Action>
            <Action>
                <FontAwesome name="bank" size={20} color="#fff"/>
                <ActionLabel>Retirar</ActionLabel>
            </Action>
        </Actions>       
    </HeaderContainer>
    </Header>

    <UseBalance>
        <UseBalanceTitle>
            Usar saldo ao pagar
        </UseBalanceTitle>
        <Switch 
            value={useBalance}
            onValueChange={handleToggleUseBalance}
            />
    </UseBalance>

    <PaymentMethods>
        <PaymentMethodTitle>
            Formas de pagamento
        </PaymentMethodTitle>

        <Card>
            <CardBody>
            <CardDetails>
         <CardDetailTitle> Cadastre seu cartão de crédito </CardDetailTitle>

            <CardInfo>
            Cadastre seu cartão de crédito para pode fazer pagamentos mesmo quando 
            não tiver saldo no seu PicPay
            </CardInfo>
        </CardDetails>
        <Img source={creditCard} resizeMode="contain"/>
            </CardBody>

            <AddButton>
                <AntDesign name="pluscircleo" size={30} color="#0db060"/>
                <AddLabel>
                    Adiconar Cartão de crédito
                </AddLabel>
            </AddButton>
        </Card>

        <UseTicketContainer>
        <UseTicketButton>
        <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
        <UseTicketLabel>Usar código promocional</UseTicketLabel>
        </UseTicketButton>

        </UseTicketContainer>
            
    </PaymentMethods>
    </Container>
    </Wrapper>
        )
}