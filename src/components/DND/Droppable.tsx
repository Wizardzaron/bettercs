import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ children, id }: any) {
	const { isOver, setNodeRef } = useDroppable({
		id,
	});

	// temporary style
	const style = {
		color: isOver ? "green" : undefined,
	};

	return (
		<div ref={setNodeRef} style={style}>
			{children}
		</div>
	);
}
