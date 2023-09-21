import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataApi } from "./redux/operations/getDataSlice";
function App() {
  const dispatch = useDispatch();
  const dataFetched = useSelector((state) => state.data);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchDataApi());
  }, [dispatch]);

  const filteredArr = search
    ? dataFetched.data.filter((k) =>
        k.title.toLowerCase().includes(search.toLowerCase())
      )
    : dataFetched.data;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header setSearch={setSearch} />}>
        <Route
          index
          element={<Body data={filteredArr} loading={dataFetched.isLoading} />}
        ></Route>

        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    )
  );

  return (
    <div className="w-full min-h-[100vh] bg-white dark:bg-zinc-900">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
