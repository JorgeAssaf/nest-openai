import { Injectable } from '@nestjs/common'
import OpenAI from 'openai'
import { OrthographyDto } from './dtos/orthography.dto'
import { orthographyUseCase } from './use-cases/orthography.use-case'
import { GoogleGenerativeAI } from '@google/generative-ai'
import { ImageGenerationDto } from './dtos/ImageGeneration.dto'
import { imageGenerationUseCase } from './use-cases/ImageGeneration.use-case'

@Injectable()
export class GptService {
  private gemini = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY)
  private openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    })
  }
  async imageGeneration(imageGenerationDto: ImageGenerationDto) {
    return await imageGenerationUseCase(this.openai, {
      prompt: imageGenerationDto.prompt,
    })
  }
}
