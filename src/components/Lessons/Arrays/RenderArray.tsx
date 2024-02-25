// TODO: Draw shapes that represent an array and its individual elements.

import { useEffect, FC, ReactNode } from "react";
import { Draggable } from "@/components/DND/Draggable";
import { Droppable } from "@/components/DND/Droppable";
import type { ArrayOnlyProps } from "@/types/ArrayOnlyProps";
import { Monitor } from "@/components/DND/Monitor";

export const RenderArray: FC<ArrayOnlyProps> = ({
	array,
}: ArrayOnlyProps): ReactNode => {
	// Just for testing.
	// useEffect(() => {
	// 	console.log("Array: ", array);
	// }, [array]);

	// Activate the monitor for parent "Dndcontext" provider.
	Monitor();

	return (
		<div className="container">
			{array.map((elem, idx) => (
				<Droppable key={idx} id={idx.toString()}>
					<Draggable id={idx.toString()}>
						<div>
							Item {elem} | Index {idx}
						</div>
					</Draggable>
				</Droppable>
			))}
		</div>
	);
};
