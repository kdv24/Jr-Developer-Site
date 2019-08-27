import React from 'react';

import styles from './resources.module.css';

const Resources = () => (
<div className={styles.ivory_bg} >
	<h3>Resources Component (Basic Responsive 1, 2, 3 col)</h3>
	<div className={styles.grid}>
		<div className={styles.navy_text}>Column 1<br/>content</div>
		<div className={styles.alt_grid_tile}>
			<p className={styles.zero_margins}>
			Column 2<br/>content</p>
		</div>
		<div className={styles.darkgreen_text}>Column 3<br/>content</div>
	</div>
</div>
)
export default Resources;