import { ArrayLesson } from "@/components/Lessons/Arrays/ArrayLesson";
export default function Array() {
	const array = [1, 2, 3, 4, 5];
	const array2 = [6, 7, 8, 9, 10];

	return (
		<div>
			<h1>Array</h1>
			<p>
				An array is a collection of things that are all of the same data
				type, such as an integer or string. They are commonly used to
				organize linear data.
			</p>
			<ArrayLesson
				array={array}
				question="Given an array of integers, move all even numbers to the beginning of the array while maintaining their relative order, and all odd numbers to the end of the array."
			/>
			<ArrayLesson array={array2} />
		</div>
	);
}
