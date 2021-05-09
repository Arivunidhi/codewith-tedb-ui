import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar';
import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import AboutMe from './components/AboutMe';

function App() {
	return (
		<React.Fragment>
			<Navbar />

			<Switch>
				{/* <Route path="/products/:id" component={ProductDetails} /> */}
				{/* <Route path="/not-found" component={NotFound} /> */}
				<Route path="/blog" exact component={BlogPost} />
				<Route path="/home" exact component={Home} />
				<Route path="/" exact component={Home} />
				{/* <Redirect to="/not-found" /> */}
			</Switch>
		</React.Fragment>
	);
}

export default App;
