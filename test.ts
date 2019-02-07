export interface IAnInterface {
	readonly name: string
	readonly created: Date
	readonly uploaded?: Date
}

export const addition = (a: number, b: number) => a + b
export function subtraction(a: number, b: number) {
	return a - b
}
