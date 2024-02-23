import './App.css';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ArticlesPage from "./components/ArticlesPage";
import NewsPage from "./components/NewsPage";
import store from "./store/store";

function App() {
  return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<ArticlesPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </Router>
      </Provider>
  );
}

export default App;
