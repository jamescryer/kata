export default function rotate(matrix: number[][]): void {
    const len = matrix.length;

    matrix.reverse();

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < i; j++) {
            const tmp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = tmp;
        }
    }
}
