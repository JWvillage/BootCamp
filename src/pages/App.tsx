import {HomeView} from './home'
import {SignIn} from './sign'
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
                <Route path={"/signIn"} element={<SignIn />} />
                {/*<Rouxte path={"/signUp"} element={<SignUp />} />*/}
                {/*<Route path={"/board/normal"} element={<Normal />} />*/}
                {/*<Route path={"/board/notice"} element={<Notice />} />*/}
                {/*<Route path={"/board/faq"} element={<FAQ />} />*/}
                {/*<Route path={"/board/qna"} element={<QNA />}/>*/}
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
