import React, { useState } from "react";



//include images into your bundle


//create your first component
const Home = () => {
	const [color, setColor] = useState(null);
	return (
		<div>
			<div className="trafficsignal"></div>
			<div className="traffic-light">

				<div className={"light red " + (color == "red" ? "glow" : null)}
					onClick={() => setColor("red")}></div>

				<div className={
						"light yellow " + (color == "yellow" ? "glow" : null)
					}
					onClick={() => setColor("yellow")}></div>

				<div className={
						"light green " + (color == "green" ? "glow" : null)
					}
					onClick={() => setColor("green")}></div>
         
			</div>
		</div>
	);
};

export default Home;
