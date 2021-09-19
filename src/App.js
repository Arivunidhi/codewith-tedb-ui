import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';

function App() {
	return (
		<React.Fragment>
			<Switch>
				<Route path="/blog" exact component={BlogPost} />
				<Route path="/home" exact component={Home} />
				<Route path="/" exact component={Home} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
