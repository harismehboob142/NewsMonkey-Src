import './App.css';
import Navbar from './components/Navbar';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"

import React, { useState } from 'react'
import News from './components/News';


const App = () => {
  const [progress, setProgress] = useState(10);

  return (
    <div>
      <Router>
        <Navbar key="navigationBar" />
        <LoadingBar key="loadingBar"
          color='#f11946'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}

        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} key="/slash" pageSize={6} category="General" />}></Route>
          <Route exact path="/NewsMonkey" element={<News setProgress={setProgress} key="/NewsMonkey" pageSize={6} category="General" />}></Route>
          <Route exact path="" element={<News setProgress={setProgress} key="empty" pageSize={6} category="General" />}></Route>
          <Route exact path="/General" element={<News setProgress={setProgress} key="general" pageSize={6} category="General" />}></Route>
          <Route exact path="/home" element={<News setProgress={setProgress} key="home" pageSize={6} category="General" />}></Route>
          <Route exact path="/Business" element={<News setProgress={setProgress} key="business" pageSize={6} category="Business" />}></Route>
          <Route exact path="/Entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={6} category="Entertainment" />}></Route>
          <Route exact path="/Health" element={<News setProgress={setProgress} key="health" pageSize={6} category="Health" />}></Route>
          <Route exact path="/Science" element={<News setProgress={setProgress} key="science" pageSize={6} category="Science" />}></Route>
          <Route exact path="/Sports" element={<News setProgress={setProgress} key="sports" pageSize={6} category="Sports" />}></Route>
          <Route exact path="/Technology" element={<News setProgress={setProgress} key="technology" pageSize={6} category="Technology" />}></Route>

        </Routes>
      </Router>
    </div>
  )
}
export default App