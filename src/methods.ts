export const symbols:string[] = ['☘', 'Ω', '♫', 'λ', 'µ', 'Ψ', '$', '&', 'Ж', '⚐', '★', '♠', '♥', '♣', '♦', '♮', '∞', '♩', '♭', '♯'];

export const randomInt = (min:number, max:number):number => Math.floor(Math.random() * (max - min)) + min;

export const shuffle = (array:string[]):string[] => {
    let currentIndex:number = array.length, temporaryValue:string, randomIndex:number;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}