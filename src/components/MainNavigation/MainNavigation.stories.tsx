import * as React from "react";
import { MemoryRouter } from "react-router-dom";
import { MainNavigation } from "./MainNavigation";

export default {
	title: "Components/MainNavigation",
	component: MainNavigation,
};

export const Default = () => (
	<MemoryRouter>
		<MainNavigation
			imagePath="https://placehold.co/200x50"
			homeLink={{ label: "Hem", to: "/" }}
			menuItems={[
				{
					label: "Ärenden",
					items: [
						{ label: "Mina ärenden", to: "/myCases" },
						{ label: "Skapa ärende", to: "/createCase" }
					]
				},
				{
					label: "Administration",
					items: [{ label: "Användare", to: "/users" }]
				}
			]}
			rightContent={<div className="text-end">Ärendehantering</div>}
			informationTopRight="Dina aktiviteter i systemet loggas och kan komma att kontrolleras i efterhand"
		/>
	</MemoryRouter>
);

export const HomeOnly = () => (
	<MemoryRouter>
		<MainNavigation imagePath="https://placehold.co/200x50" homeLink={{ label: "Hem", to: "/" }} />
	</MemoryRouter>
);
