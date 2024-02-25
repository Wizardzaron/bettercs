import Link from "next/link";

export default function DataStructures() {
	return (
		<ol>
			<li>
				<Link className = "header-neon-blue"href="/lessons/dsa/array">Array</Link>
			</li>
			<li>
				<Link className = "header-neon-blue"href="/lessons/dsa/hashmaps">Hash Maps</Link>
			</li>
		</ol>
	);
}
