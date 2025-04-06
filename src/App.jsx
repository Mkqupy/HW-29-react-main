import { useDispatch } from "react-redux";

export const App = () => {
    const dispatch = useDispatch();
    const onPlus = () => {
      dispatch({
        type: "plus"
        
      })
  };
  const onMinus = () =>{
    dispatch({
      type: "minus"
    })
  };
  return (
    <>
    <div>
      <span>0</span>
      <button onClick={onPlus}>+</button>
      <button onClick={onMinus}>-</button>
    <div/>
    </>
  );
};

