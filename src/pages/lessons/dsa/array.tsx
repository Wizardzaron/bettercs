import { ArrayLesson } from "@/components/Lessons/Arrays/ArrayLesson";
import { HorizontalDivider } from "@/components/Dividers/HorizontalDivider";

export function ArrayLessonText({ children }: { children: String }) {
	return <p className="pr-24">{children}</p>;
}

export default function Array() {
	const array = [1, 2, 3, 4, 5];
	const array2 = [1, 2, 3, 4, 5];

	return (
		<div className="container">
			<h1>Array</h1>
			<ArrayLessonText>
				An array is simply a collection of things. These things are
				usually called elements. They can be made up of numbers, text,
				or other types. Arrays are widely used in programming to store
				information.
			</ArrayLessonText>
			<p>
				Arrays are zero-indexed, meaning that the first element starts
				at index 0 and increments by 1 for each element after it. They
				are used to access an element. Think of them as ID tags for the
				elements.
			</p>
			<p>You can drag and drop each element of the array below!</p>
			<HorizontalDivider />
			<ArrayLesson array={array2} />
			<HorizontalDivider />

			<ArrayLesson
				array={array}
				question="Given an array of integers, drag and drop the elements to move all even numbers to the beginning of the array while maintaining their relative order, and all odd numbers to the end of the array."
				answer={[2, 4, 1, 3, 5]}
			/>
			{/* <p>
				It's easy for a human to do it, but what about for a computer?
			</p> */}
		</div>
	);
}
