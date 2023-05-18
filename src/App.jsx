import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./redux/operations";
import { getUsers } from "./redux/selectors";
import s from "./App.css";
import Card from "./components/Card/Card";

function App() {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <div className={s.loader}>
        {isLoading && <p>Loading cards...</p>}
        {error && <p>{error}</p>}
      </div>
      <ul className={s.cards}>
        {items.map((item) => (
          <Card key={item.createdAt} {...item} />
        ))}
      </ul>
    </>
  );
}

export default App;
