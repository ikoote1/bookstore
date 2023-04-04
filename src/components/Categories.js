import { useSelector } from 'react-redux';

const Categories = () => {
  const { categories } = useSelector((state) => state.category);

  if (categories.length < 1) {
    return (
      <div className="cat">
        <button type="button" className="check">Check Status</button>
        <div><h1>Under construction</h1></div>
      </div>
    );
  }
  return (
    <div className="cat">
      <button type="button" className="check">Check Status</button>
      <div><h1>Under construction</h1></div>
    </div>
  );
};

export default Categories;
