import CategoryItem from './category-item.component';
import Category from '../models/category';
import './directory.style.scss';

interface DirectoryProps {
    categories: Category[];
}

function Directory({ categories }: DirectoryProps) {
    return (
        <div className="directory-container">
            {categories.map((category) => (
                <CategoryItem {...category} key={category.id} />
            ))}
        </div>
    );
}

export default Directory;
