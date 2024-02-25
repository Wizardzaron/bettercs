// Resource used for designing layout:
// https://docs.dndkit.com/introduction/getting-started

import { useState, FC, useEffect } from "react";
import { RenderArray } from "@/components/Lessons/Arrays/RenderArray";
import { DndContext } from "@dnd-kit/core";
import type { ArrayProps } from "@/types/ArrayProps";
import { CodeEditor } from "../CodeEditor";

export const ArrayLesson: FC<ArrayProps> = ({ array, question, answer }) => {
	const [items, setItems] = useState(array);
	const [isCorrect, setIsCorrect] = useState(false);
	const itemsStr = items.map((item) => item.toString()).join(", ");

	useEffect(() => {
		setIsCorrect(JSON.stringify(items) === JSON.stringify(answer));
	}, [items]);

	// If wanted to simply display an interactable array, without a question or answer
	if (!question || !answer) {
		return (
			<DndContext onDragEnd={handleDragEnd}>
				<RenderArray array={items} />
				<div>Current Array: {itemsStr}</div>
			</DndContext>
		);
	}

	return (
		<div className="flex">
			<DndContext onDragEnd={handleDragEnd}>
				<div className="flex flex-col mr-4">
					<div className="pr-24">Question: {question}</div>
					<RenderArray array={items} />
					<div>Current Array: {itemsStr}</div>
					{isCorrect && <div>Correct!</div>}
				</div>
			</DndContext>
			<div className="flex-grow">
				<CodeEditor />
			</div>
		</div>
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
