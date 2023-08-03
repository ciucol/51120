import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateCharacterDto {
  @ApiProperty({
    example: 'Mate',
    description: 'Nombre del personaje',
  })
  @IsString()
  first_name: string;

  @ApiProperty({
    example: 'Naran',
    description: 'Apellido del personaje',
  })
  @IsString()
  last_name: string;

  @ApiProperty({
    example: 'Mate',
    description: 'Nombre del personaje',
  })
  @IsString()
  image: string;

  @ApiProperty({
    example: 'Mate',
    description: 'Nombre del personaje',
  })
  @IsNumber()
  @Min(10)
  @Max(100)
  weight: number;

  @ApiProperty({
    example: 'Mate',
    description: 'Nombre del personaje',
  })
  @IsString()
  story: string;
}
