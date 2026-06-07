import { Outlet } from "react-router"

export default function PageLayout() {
	// Hide the Navbar until we get more pages
	return (
		<div className="flex min-h-screen flex-col p-6">
			{/* <NavBar /> */}
			<main className="flex flex-grow flex-col">
				<Outlet />
			</main>
		</div>
	)
}
