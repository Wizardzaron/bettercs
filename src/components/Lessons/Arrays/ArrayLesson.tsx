// Resource used for designing layout:
// https://docs.dndkit.com/introduction/getting-started

import { useState, FC } from "react";
import { RenderArray } from "@/components/Lessons/Arrays/RenderArray";
import { DndContext } from "@dnd-kit/core";
import type { ArrayProps } from "@/types/ArrayProps";

export const ArrayLesson: FC<ArrayProps> = ({ array, question }) => {
	const [items, setItems] = useState(array);
	const itemsStr = items.map((item) => item.toString()).join(", ");

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<div>Question: {question}</div>
			<RenderArray array={items} />
			<div>Current Array: {itemsStr}</div>
		</DndContext>
	);

	function handleDragEnd(event: any) {
		const { active, over } = event;

		if (!over || !active) return;

		const startIndex = parseInt(active.id);
		const endIndex = parseInt(over.id);

		if (startIndex !== endIndex) {
			const newItems = [...items];
			const [removed] = newItems.splice(startIndex, 1);
			newItems.splice(endIndex, 0, removed);
			setItems(newItems);
		}
	}
};
