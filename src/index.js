import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./js/redux/store";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faSlidersH, faPlus } from "@fortawesome/free-solid-svg-icons";
import { DocsView } from "./js/components/docs-view";
import { MainView } from "./js/components/main-view";
import { SettingsView } from "./js/components/settings-view";
import "./scss/styles.scss";

// Create a library for our FontAwesome icons
library.add(faUser, faSlidersH, faPlus);

function App() {

	// Output
	return (
		<Provider store={store}>
			<Router basename={process.env.PUBLIC_URL}>
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
