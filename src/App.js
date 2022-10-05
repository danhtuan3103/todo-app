import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute } from './router';
import DefaultLayout from '~/layouts/DefaultLayout';
function App() {
    return (
        <Router>
            <Routes>
                {publicRoute.map((route, index) => {
                    let Layout = DefaultLayout;
                    let Page = route.component;
                    if (route.layout) Layout = route.layout;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        ></Route>
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
