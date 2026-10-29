import * as React from "react";
import { faHouse, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { MemoryRouter } from "react-router-dom";
import { CustomNavLink } from "./CustomNavLink";

export default {
	title: "Components/CustomNavLink",
	component: CustomNavLink,
};

export const Default = () => (
	<MemoryRouter>
		<CustomNavLink to="/overview">Overview</CustomNavLink>
	</MemoryRouter>
);

export const WithIcon = () => (
	<MemoryRouter>
		<CustomNavLink to="/overview" icon={faHouse}>
			Overview
		</CustomNavLink>
	</MemoryRouter>
);

export const LogOut = () => (
	<MemoryRouter>
		<CustomNavLink to="/logout" icon={faPowerOff}>
			Log Out
		</CustomNavLink>
	</MemoryRouter>
);
