import OpenAI from 'openai'

interface ImageGenerationUseCaseOptions {
  prompt: string
}

export const imageGenerationUseCase = async (
  openai: OpenAI,
  { prompt }: ImageGenerationUseCaseOptions,
) => {
  const image = await openai.images.generate({
    model: 'dall-e-2',
    prompt,
    n: 1,
    size: '1024x1024',
  })
  const image_url = image.data
  return image_url
}
