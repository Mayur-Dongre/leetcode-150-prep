// Problem Statement

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells must be validated according to the following rules:
// 1. Each row must contain the digits 1-9 without repetition.
// 2. Each column must contain the digits 1-9 without repetition.
// 3. Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Example
// Input: board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],...]
// Output: true

const isValidSudoku = function (board) {
	const rows = Array.from({ length: 9 }, () => new Set());
	const cols = Array.from({ length: 9 }, () => new Set());
	const squares = Array.from({ length: 9 }, () => new Set());
	for (let r = 0; r < 9; r++) {
		for (let c = 0; c < 9; c++) {
			const val = board[r][c];
			if (val === ".") continue;

			// Square index calculation: (row/3)*3 + (col/3)
			const squareIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
			if (rows[r].has(val) || cols[c].has(val) || squares[squareIdx].has(val)) {
				return false;
			}
			rows[r].add(val);
			cols[c].add(val);
			squares[squareIdx].add(val);
		}
	}
	return true;
};

/////////////////////////////////////////////////
// Time & Space Complexity
// Time Complexity: O(81) -> O(1) as the board is always 9x9
// Space Complexity: O(81) -> O(1)
/////////////////////////////////////////////////
