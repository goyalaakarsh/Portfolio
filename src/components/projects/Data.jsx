import React from 'react'
import TownTies from '../../assets/townties.png'
import WanderLust from '../../assets/wanderlust.png'
import MunWeb from '../../assets/munweb.png'
import QuickBite from '../../assets/QuickBite.png'
import ChatGPT from '../../assets/ChatGPT.png'

export const projectsData = [
    {
        id:1,
        image: ChatGPT,
        title: 'ChatGPT Clone ',
        description: 'Interactive AI Chatbot for Real-Time Conversations.',
        github: '#',
        category: 'web',
    },
    {
        id:2,
        image: QuickBite,
        title: 'QuickBite ',
        description: 'A food ordering website with real-time cart updates and order tracking.',
        github: 'https://github.com/goyalaakarsh/QuickBite',
        category: 'web',
    },
    {
        id:3,
        image: TownTies,
        title: 'TownTies ',
        description: 'Dynamic marketplace with user auth, forums, and product listings.',
        github: 'https://github.com/goyalaakarsh/TownTies',
        category: 'web',
    },
    {
        id:4,
        image: WanderLust,
        title: 'WanderLust',
        description: 'Airbnb-inspired vacation rental platform with listings and image uploads.',
        github: 'https://github.com/goyalaakarsh/WanderLust',
        category: 'web',
    },
    {
        id:5,
        image: MunWeb,
        title: 'BML Munjal MUN Website',
        description: 'Minimalist brand identity oriented UI design for BMU MUN info website.',
        figma: 'https://www.figma.com/design/UumJqiON1ULxax7TYeQoDd/MUN-Website?node-id=0-1&t=cHq6sn5aLY3l9W6v-1',
        category: 'design',
    },
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'web',
    },
    {
        name: 'design',
    },
]