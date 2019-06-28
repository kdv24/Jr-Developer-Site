import React from 'react';

const Resources = () => (
<div style={{ backgroundColor: `ivory`, width: `100vw` }} >
	<h2>Resources Component (Very Basic Layout Skeleteon)</h2>
	<div style={{ 
		display: `grid`,
		gridTemplateColumns: `1fr 1fr 1fr`,
		gridTemplateRows: `30vh`,
		width: `100vw`, 
		backgroundColor: `papayawhip`
	 }}>
		<div style={{ color: `navy` }}>Column 1</div>
		<div style={{ color: `maroon`, backgroundColor: `ivory` }}>Column 2</div>
		<div style={{ color: `forestgreen` }}>Column 3</div>
	</div>
</div>
)
export default Resources;