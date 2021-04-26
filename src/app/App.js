import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from '../components/header/Header';
import FeaturedSubReddit from '../components/featuredsubreddit/FeaturedSubReddit';
import QuickLinks from '../components/quicklinks/QuickLinks';
import PostsPreview from '../components/postsPreview/postsPreview';
import Programmerhumor from '../components/featuredsubreddit/programmerhumor';
import Funny from '../components/featuredsubreddit/funny';
import Softwaregore from '../components/featuredsubreddit/softwaregore';
import New from '../components/quicklinks/new';
import Hot from '../components/quicklinks/hot';
import Post from '../components/post/post';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<div className='grid-container'>
					<div className='sub-column'>
						<QuickLinks />
						<FeaturedSubReddit />
					</div>
					<Switch className='post-preview-container'>
						<Route path='/' exact component={PostsPreview} />
						<Route path='/r/funny' exact component={Funny} />
						<Route path='/r/programmerhumor' exact component={Programmerhumor} />
						<Route path='/r/softwaregore' exact component={Softwaregore} />
						<Route path='/new' exact component={New} />
						<Route path='/hot' exact component={Hot} />
						<Route path='/r/:subreddit/:comment/:id' component={Post} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
