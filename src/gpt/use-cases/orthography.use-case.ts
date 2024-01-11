import OpenAI from 'openai'

interface OrthographyUseCaseOptions {
  prompt: string
}

export const orthographyUseCase = async (
  openai: OpenAI,
  options: OrthographyUseCaseOptions,
) => {
  const { prompt } = options
  // const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // const chat = model.startChat({
  //   history: [
  //     {
  //       role: "user",
  //       parts: "Hola, ¿cómo estás?",
  //     },
  //     {
  //       role: "model",
  //       parts: "",
  //     },
  //   ],
  //   generationConfig: {
  //     maxOutputTokens: 100,
  //   },
  // });

  // const result = await chat.sendMessage(prompt);

  // console.log(result);
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: 'system',
        content: `
        Te van a dar un texto en el que hay errores de ortografía.
        Tienes que corregirlos.

        Ejemplo:
        "El perro es de kolor marron."

        Respuesta:
        {
          errors: [
            'kolor -> color',
            marron -> marrón
          ],
          punctuation: 90,
          text: 'El perro es de color marrón.'

        }
      
      `,
      },
      { role: 'user', content: prompt },
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion.choices[0])
  return completion.choices[0]
}
