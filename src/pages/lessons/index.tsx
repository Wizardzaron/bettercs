import Link from "next/link";

export default function Lessons() {
	return (
		<div>
			<ol>
				<li>
					<Link href="/lessons/dsa">Data Structures</Link>
				</li>
				<li>
					<Link href="/lessons/comporg">
						Computer Organization & Assembly
					</Link>
				</li>
				<li>
					<Link href="/lessons/discrete">Discrete Math</Link>
				</li>
			</ol>
			<p>More to come!</p>
		</div>
	);
}
