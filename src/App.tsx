import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {

  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="text-xl flex">
      <button
        className="mr-5 ml-5 py-2 px-3 border border-green-500 bg-green-300 rounded-xl"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <div>{count}</div>
      <button
        className="mr-5 ml-5 py-2 px-3 border border-red-500 bg-red-300 rounded-xl"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="mr-5 ml-5 py-2 px-3 border border-green-500 bg-green-300 rounded-xl"
        onClick={() => dispatch(incrementByAmount(2))}
      >
        increment By Amount
      </button>
    </div>
  );
}

export default App
