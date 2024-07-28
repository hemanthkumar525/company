import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import EmailForm from "./component/contact";
import Dome from './component/channel/dome'
import cost from './component/channel/costume'
import Black from './component/content/dome'
import House from './component/content/houses'
import Sidebar from "./component/sidebar";
import Ginne from './component/content/costume'
import TopNavigation from "./component/topnav";
import slides from "./component/slides"

const Cost = cost;
const Slide = slides;


function App() {
  return (
    <>
    <TopNavigation/>
    <Slide />
    <Router>
      <div className="flex">
        <Sidebar/>
        <div className="flex-1 p-5">
          <Routes>
            <Route path='/dome' element={<Dome/>}/>
                  <Route path='/dome/black' element={<Black/>}/>
                  <Route path='/dome/House' element={<House/>}/>
                  <Route path='/costume/Costume' element={<Ginne/>}/>
            <Route path='/costume' element={<Cost/>}/>
            <Route path='/contact' element={<EmailForm/>}/>
          </Routes>
        </div>
      </div>
    </Router>

    </>
  );
}

export default App;
