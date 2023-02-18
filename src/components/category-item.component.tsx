import './category-item.style.scss';

interface CategoryItemProps {
    id: number;
    title: string;
    imgUrl: string;
}

function CategoryItem({ id, title, imgUrl }: CategoryItemProps) {
    return (
        <div className="category-container" key={id}>
            <div
                className="background-image"
                style={{ backgroundImage: `url(${imgUrl})` }}
            />
            <div className="category-body">
                <h2>{title}</h2>
                <p>Shop now</p>
            </div>
        </div>
    );
}

export default CategoryItem;
