import { useSelector } from 'react-redux';
// import { checkStatus } from "../redux/categories/categoriesSlice";
const Categories = () => {
  // const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  if (categories < 1) {
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
