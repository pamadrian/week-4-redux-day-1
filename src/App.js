import { useState } from "react";
import { useDispatch } from "react-redux";
import { deposit } from "./store/balance/actions";

function App() {
  const dispatch = useDispatch();
  const [balance, setBalance] = useState(0);

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>
    </div>
  );
}

export default App;
