
export let words = [
    'fish',
    'nemo',
    'trout',
    'shrimp',
    'turtle',
    'coral',
    'seahorse',
    'clam',
    'calm',
    'pirate',
    'snorkel',
    'aquatic',
    'shark',
    'seaweed',
    'boat',
    'scuba'
]

export const getRandomWords = (num: number): string[] => {
    return words.slice(0, num);
}