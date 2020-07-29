import React from 'react'
import {Container, Option, Title, Img} from './styles'

import Img8 from '../../images/08.png'
import Img9 from '../../images/09.png'
import Img10 from '../../images/10.png'
import Img11 from '../../images/11.png'
import Img12 from '../../images/12.png'

const items = [
    {
        key: String(Math.random()),
        title: 'Pague suas contas sem sair de casa',
        img: Img8,
        bgColor: '#6a0159'
    },

    {
        key: String(Math.random()),
        title: 'Pague suas contas sem sair de casa',
        img: Img9,
        bgColor: '#4139c8'
    },

    {
        key: String(Math.random()),
        title: 'Pague suas contas sem sair de casa',
        img: Img10,
        bgColor: '#00ab4b'
    },

    {
        key: String(Math.random()),
        title: 'Pague suas contas sem sair de casa',
        img: Img11,
        bgColor: '#ba2f76'
    },

    {
        key: String(Math.random()),
        title: 'Pague suas contas sem sair de casa',
        img: Img12,
        bgColor: '#4139c8'
    },
]

export default function Tips() {
    return (
        <Container>
            {items.map(item => {
                return (
            <Option bgColor={item.bgColor} key={item.key}>
                <Title>{item.title}</Title>
                <Img source={item.img}/>
            </Option>
                )
            })}
        </Container>
    )
}