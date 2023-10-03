import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCategories(data);
            });
    }, []);
    return (
        <div>
            <h2 className="text-2xl">All Categories</h2>
            {/* <p>{categories.length}</p> */}
            {
                categories.map(category => <Link className="block" key={category.id} to={`/catagory/${category.name}`}>{category.name}</Link>)
            }

        </div>
    );
};

export default LeftSideNav;