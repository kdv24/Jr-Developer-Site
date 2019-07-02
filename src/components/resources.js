import React from 'react';

const Resources = () => (
<div style={{ backgroundColor: `ivory` }} >
	<h3>Resources Component (Basic Responsive 1 to 3 col)</h3>
	<div style={{ 
		display: `grid`,
		gridGap :`1rem`,
		alignItems: `center`,
		justifyItems: `center`,
		gridTemplateColumns: `repeat(auto-fit, minmax(230px, 1fr))`,
		gridTemplateRows: `repeat(auto-fill, minmax(30vh, 1fr))`,
		backgroundColor: `papayawhip`
	 }}>
		<div style={{ color: `navy` }}>Column 1<br/>content</div>
		<div style={{
			color: `maroon`,
			backgroundColor: `ivory`,
			width: `100%`,
			height: `100%`,
			display: `flex`,
			justifyContent: `center`,
			alignItems: `center`,
			}}>
			<p>Column 2<br/>content</p>
		</div>
		<div style={{ color: `forestgreen` }}>Column 3<br/>content</div>
	</div>
</div>
)
export default Resources;