import React from "react";
import { Route, DefaultRoute, NotFoundRoute } from "react-router";

import Application from "containers/Application";
import HomePage from "containers/HomePage";
import NotFoundPage from "containers/NotFoundPage";
import InstanceInfoHolderBrowser from "containers/InstanceInfoHolderBrowser";

// polyfill
if(!Object.assign)
	Object.assign = React.__spread; // eslint-disable-line no-underscore-dangle

// export routes
module.exports = (
	<Route name="app" path="/" handler={Application}>
		<Route name="instanceInfoHolderBrowser" path="/ui/diagnostic/registry/entryholders" handler={InstanceInfoHolderBrowser} />
		<DefaultRoute handler={HomePage} />
		<NotFoundRoute handler={NotFoundPage} />
	</Route>
);