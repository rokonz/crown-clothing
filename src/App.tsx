import Directory from './components/directory.component';
import './categories.style.scss';

function App() {
    const categories = [
        {
            id: 1,
            title: 'hats',
            imgUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
            id: 2,
            title: 'Jackets',
            imgUrl: 'https://picsum.photos/400/250.webp',
        },
        {
            id: 3,
            title: 'Sneakers',
            imgUrl: 'https://picsum.photos/401/250.webp',
        },
        {
            id: 4,
            title: 'Womens',
            imgUrl: 'https://picsum.photos/400/249.webp',
        },
        {
            id: 5,
            title: 'Mens',
            imgUrl: 'https://picsum.photos/399/250.webp',
        },
    ];
    return <Directory categories={categories} />;
}

export default App;

