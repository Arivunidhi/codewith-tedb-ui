import React from 'react';
import TopNav from './TopNav';

const BlogPost = () => {
	return (
		<React.Fragment>
			<TopNav isHome={true} />
			<div id="blog" className="blog-wrapper">
				<h2>Technical Blog</h2>
				<p>Coming Soon ...!!! </p>
			</div>
		</React.Fragment>
	);
};

export default BlogPost;
