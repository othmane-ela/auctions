import Navbar from './components/navbar/Navbar'
import LeftSide from './components/leftside/LeftSide'
import RightSide from './components/rightside/RightSide'
import styled from 'styled-components'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import Subscriptions from './pages/subscriptions/Subscriptions'
import NotFound from './notFound';

const Grid = styled.div`
  padding : 0;
  margin : 0;
  box-sizing : border-box;
  display:grid;
  grid-template-columns : 20% auto 5%;
  grid-template-rows: 72px 93vh;
  grid-template-areas: "head head head"
 "left middle right"
`;


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
          <Grid>
                <Navbar />
                <LeftSide />
        <Switch>
                           <Route path="/" exact component={Home}/>
                            <Route path="/subscriptions" exact component={Subscriptions} />
                            <Route path="/*" exact component={NotFound} />
              </Switch>
              <RightSide />
      </Grid>
    </Router>

  );
}

export default App;
