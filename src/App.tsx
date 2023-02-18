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
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <div className="category-container" key={category.id}>
                    <div
                        className="background-image"
                        style={{ backgroundImage: `url(${category.imgUrl})` }}
                    />
                    <div className="category-body">
                        <h2>{category.title}</h2>
                        <p>Shop now</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default App;

