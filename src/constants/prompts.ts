export interface BioData {
  age: string,
  height: string,
  weight: string,
  allergies: string,
  exercise: string,
  food: string
}

export const prefillIntialMessage = (data?: BioData) => {

  if (!data) return '';

  const str = `I am a ${data.age}-year old. 
Here is my biodata, use it to aid in the accuracy of your reponses
<biodata>
age: ${data.age},
height: ${data.height}m,
weight: ${data.weight}kg,
allergies: ${data.allergies},
exercise: ${data.exercise},
food preferences: ${data.food}
</biodata>`
  return str;
}