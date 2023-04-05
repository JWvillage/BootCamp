import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import {HomeView} from "./home";
import {SignView} from "./sign";
import {BoardDetailView, BoardView} from "./board";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<HomeView />} />
          <Route path={"/signIn"} element={<SignView sign={'signIn'}/>} />
          <Route path={"/signUp"} element={<SignView sign={'signUp'}/>} />
          <Route path={"/signOut"} element={<SignView sign={'signOut'}/>}/>
          <Route path={"/idSearch"} element={<SignView sign={'idSearch'}/>}/>
          <Route path={"/pwSearch"} element={<SignView sign={'pwSearch'}/>}/>
          <Route path={"/board/normal"} element={<BoardView flag={'normal'} />} />
          <Route path={"/board/notice"} element={<BoardView flag={'notice'} />} />
          <Route path={"/board/faq"} element={<BoardView flag={'faq'}/>} />
          <Route path={"/board/qna"} element={<BoardView flag={'qna'}/>} />
          <Route path={"/board/normal/detail"} element={<BoardDetailView />} />
          <Route path={"/board/notice/detail"} element={<BoardDetailView />} />
          <Route path={"/board/faq/detail"} element={<BoardDetailView />} />
          <Route path={"/board/qna/detail"} element={<BoardDetailView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
