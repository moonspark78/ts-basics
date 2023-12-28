function addNumbers(a: number,b: number): number{
    return a + b;
}

export default addNumbers;


export const addString = (str1: string, str2: string = ""): string => `${str1} ${str2}`;

// Union Types
export const format = (title: string , param: string | number) : string => `${title} ${param}`