import { Body, Controller, Post } from '@nestjs/common'
import { OrthographyDto } from './dtos/orthography.dto'
import { GptService } from './gpt.service'
import { ImageGenerationDto } from './dtos/ImageGeneration.dto'

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}
  @Post('/orthography')
  orthographyCheck(@Body() orthographyDto: OrthographyDto) {
    return this.gptService.orthographyCheck(orthographyDto)
  }

  @Post('/images')
  async imageCaptioning(@Body() imageGenerationDto: ImageGenerationDto) {
    return this.gptService.imageGeneration(imageGenerationDto)
  }
}
