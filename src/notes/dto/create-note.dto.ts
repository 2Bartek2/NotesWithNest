import { IsNumber, IsString } from "class-validator"



export class CreateNoteDto {
    
    @IsString()
    title: string
    @IsString()
    content: string
}
