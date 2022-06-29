import { useCallback, useState } from "react";

// Parameter is the boolean, with default "false" value
const useToggle = (initialState = false) => {
	// Initialize the state
	const [state, setState] = useState(initialState);

	// Define and memorize toggler function in case we pass down the comopnent,
	const toggle = useCallback(() => setState((state) => !state), []);

	return [state, toggle];
};

export default useToggle;
