import Link from "next/link";

export default function Lessons() {
	return (
		<div>
			<ol>
				<li>
					<Link className = "header-neon-blue" href="/lessons/dsa">Data Structures</Link>
				</li>
				<li>
					<Link className = "header-neon-blue" href="/lessons/comporg">
						Computer Organization & Assembly
					</Link>
				</li>
				<li>
					<Link className = "header-neon-blue" href="/lessons/discrete">Discrete Math</Link>
				</li>

				<li>
					<Link className = "body-neon-blue" href="/"> More to Come! </Link>
				</li>
			</ol>
		</div>
	);
}
