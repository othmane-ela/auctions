import Navbar from './components/navbar/Navbar'
import LeftSide from './components/leftside/LeftSide'
import Content from './components/content/Content'
import RightSide from './components/rightside/RightSide'
import styled from 'styled-components'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'


const Grid = styled.div`
  padding : 0;
  margin : 0;
  box-sizing : border-box;
  display:grid;
  grid-template-columns : 15% auto 5%;
  grid-template-rows: 60px 93vh;
  grid-template-areas: "head head head"
 "left middle right"
`;


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
             <Switch>
                <Route path="/">
                            <Grid>
                              <Navbar/>
                              <LeftSide />
                              <Content />
                              <RightSide />
                            </Grid>
                    </Route>
                    <Route path="/subscriptions" /> 
              </Switch> 
    </Router>

  );
}

export default App;
