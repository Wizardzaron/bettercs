// TODO: Draw shapes that represent an array and its individual elements.

import { useEffect, FC, ReactNode } from "react";
import { Draggable } from "@/components/DND/Draggable";
import { Droppable } from "@/components/DND/Droppable";

interface ArrayProps {
	array: number[];
}

export const RenderArray: FC<ArrayProps> = ({
	array,
}: ArrayProps): ReactNode => {
	// Just for testing.
	useEffect(() => {
		console.log("Array: ", array);
	}, [array]);

	return (
		<>
			{array.map((elem, idx) => (
				<Droppable key={idx} id={idx.toString()}>
					<Draggable id={idx.toString()}>
						<div>
							Item {elem} | Index {idx}
						</div>
					</Draggable>
				</Droppable>
			))}
		</>
	);
};
