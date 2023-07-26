import { createBrowserRouter, createRoutesFromElements,RouterProvider, Route} from "react-router-dom";
import './App.css';
import HomePage from "./homepage";
import Numbers from "./numbers";
// import axios from 'axios';
// const res = axios.get(`/`).then((resp)=>{console.log(resp)})
const route = createBrowserRouter(
  createRoutesFromElements(
     <Route path="/" >
       <Route index element={<HomePage/>}/>
       <Route path="numbers" element={<Numbers/>} />
     </Route>
  )
)
function App() {
  return (
    <div>
    <RouterProvider router={route}/>
    </div>
  );
}

export default App;
