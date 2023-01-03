import HomeView from './home'
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/home"} element={<HomeView />} />
                {/*<Route path={"/SignIn"} element={<SignIn />} />*/}
                {/*<Route path={"/SignUp"} element={<SignUp />} />*/}
                {/*<Route path={"/Normal"} element={<Normal />} />*/}
                {/*<Route path={"/Notice"} element={<Notice />} />*/}
                {/*<Route path={"/FAQ"} element={<FAQ />} />*/}
                {/*<Route path={"/Q&A"} element={<QNA />}/>*/}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
