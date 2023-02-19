import './category-item.style.scss';
import Category from '../models/category';

function CategoryItem({ id, title, imgUrl }: Category) {
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
