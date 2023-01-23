import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import {HomeView} from "./home";
import {SignView} from "./sign";
import {BoardView} from "./board";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomeView />} />
                <Route path={"/signIn"} element={<SignView sign={'signIn'}/>} />
                <Route path={"/signUp"} element={<SignView sign={'signUp'}/>} />
                <Route path={"/board/normal"} element={<BoardView flag={'normal'} />} />
                <Route path={"/board/notice"} element={<BoardView flag={'notice'} />} />
                <Route path={"/board/faq"} element={<BoardView flag={'faq'}/>} />
                <Route path={"/board/qna"} element={<BoardView flag={'qna'}/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
