import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
	return (
		<div>
			Visit the <Link to="/_hello">/_hello</Link> route to see the bug.
		</div>
	)
}
