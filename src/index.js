import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faSlidersH, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DocsView } from "./views/docs";
import { MainView } from "./views/main";
import { SettingsView } from "./views/settings";

import "./styles/globalStyles.scss";

// Create a library for our FontAwesome icons
library.add(faUser, faSlidersH, faPlus);

function App() {

	// Output
	return (
		<Provider store={store}>
			<Router>
				<Route exact path="/" component={MainView} />
				<Route exact path="/design-system" component={DocsView} />
				<Route exact path="/settings" component={SettingsView} />
			</Router>
		</Provider>
	);
}

// Render
const rootElement = document.getElementById("app");
ReactDOM.render(<App />, rootElement);