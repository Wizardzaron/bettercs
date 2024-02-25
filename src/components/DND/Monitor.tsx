import { useDndMonitor } from "@dnd-kit/core";

// https://docs.dndkit.com/api-documentation/context-provider/use-dnd-monitor
export function Monitor() {
	useDndMonitor({
		onDragStart(event) {},
		onDragMove(event) {},
		onDragOver(event) {},
		onDragEnd(event) {
			console.log("onDragEnd event: ", event);
		},
		onDragCancel(event) {},
	});
}
