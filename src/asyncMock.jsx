import Teleport from './components/ItemListContainer/assets/Teleport.png'
import Andromeda from './components/ItemListContainer/assets/Andromeda.png'
import Nautilus from './components/ItemListContainer/assets/Nautilus.png'
import Lighthouse from './components/ItemListContainer/assets/Lighthouse.png'
import Saturno from './components/ItemListContainer/assets/Saturno.png'
import Apocalipsis from './components/ItemListContainer/assets/Apocalipsis.png'
import Fuzzilla from './components/ItemListContainer/assets/Fuzzilla.png'


const products =[
    {
        id: '1',
        name: 'Teleport',
        price: 45000,
        category: 'delayyreverb',
        img: Teleport,
        stock: 25,
        description: 'Delay Digital'
    },

    {
        id: '2',
        name: 'Andromeda',
        price: 45000,
        category: 'delayyreverb',
        img: Andromeda,
        stock: 25,
        description: 'Delay y Reverb Digital'
    },

    {
        id: '3',
        name: 'Nautilus',
        price: 45000,
        category: 'delayyreverb',
        img: Nautilus,
        stock: 25,
        description: 'Delay y Chorus Analogico'
    },

    {
        id: '4',
        name: 'Ligthouse',
        price: 45000,
        category: 'modulacion',
        img: Lighthouse,
        stock: 25,
        description: 'OTA Phaser'
    },
    {
        id: '5',
        name: 'Saturno',
        price: 50000,
        category: 'modulacion',
        img: Saturno,
        stock: 25,
        description: 'Tremolo Optico'
    },
    {
        id: '6',
        name: 'Fuzzilla',
        price: 50000,
        category: 'distorsion',
        img: Fuzzilla,
        stock: 25,
        description: 'Silicon Fuzz'
    },
    {
        id: '7',
        name: 'Apoalipsis',
        price: 50000,
        category: 'distorsion',
        img: Apocalipsis,
        stock: 25,
        description: 'Overdrive'
    }    



]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productsId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productsId))
        },500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}