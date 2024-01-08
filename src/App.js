import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes';
import { Fragment } from 'react';

function App() {
  return (
    <div>
      <Router>
        <Routes>
            {routes.map((route) => {
              const Page = route.page;
              const Layout = route.IsHeader ? DefaultComponent : Fragment;
              return (
                <Route path={route.path} element={
                  <Layout>
                    <Page/>
                  </Layout>
                }/>
              )
            })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
