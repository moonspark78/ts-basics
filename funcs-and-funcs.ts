export function printToFile(text: string, callback: () => void): void{
    console.log(text); 
    callback();
}



type MuatationFunction = (v: number) => number;


export function arrayMutate(numbers: number[], mutate: MuatationFunction): number[] {
    return numbers.map(mutate)
}

console.log(arrayMutate([1,2,3], (v) => v *10));
