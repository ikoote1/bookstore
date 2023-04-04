import { useSelector } from 'react-redux';

const Categories = () => {
  const { categories } = useSelector((state) => state.category);

  if (categories.length < 1) {
    return (
      <div>
        <button type="button" className="check">Check Status</button>
        <div>Under construction</div>
      </div>
    );
  }
  return (
    <div>
      <button type="button" className="check">Check Status</button>
      <div>Under</div>
    </div>
  );
};

export default Categories;
