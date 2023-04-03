import { useSelector } from "react-redux";
// import { checkStatus } from "../redux/categories/categoriesSlice";
const Categories = () => {
  // const dispatch = useDispatch();
  const {Categories} = useSelector((state)=> state.category);

  if (Categories.length < 1 ){
    return (
      <div>
        <button type="button" className="check">Check Status</button>
        <div>Under construction</div>
      </div>
    );
  }
};

export default Categories;
