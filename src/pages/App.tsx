import React, { lazy, memo, Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import 'antd/dist/antd.css';



const Layout = lazy(() => import(/* webpackChunkName: "about" */'./layout'))
const Home = lazy(() => import(/* webpackChunkName: "about" */'./home'))


const RouterModule = memo(() => {

  return (
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
  )
})


const App: React.FC = () => {
  return (
        <RouterModule />
  );
}

export default App;

