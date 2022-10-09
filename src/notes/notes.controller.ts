import { Controller, Get, Post,HttpCode, Param, Body, Patch, Delete } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
    constructor(private readonly notesService:NotesService){}

    @Get()
    getNotes() {
        return this.notesService.findAll()
    }

    @Get(':id')
    getNote(@Param('id') id:number){
        return this.notesService.getNoteById(id)
    } 

    @Post()
    @HttpCode(204)
    addNote(@Body() createNoteDto: CreateNoteDto) {
        return this.notesService.createNote(createNoteDto)

    }

    @Patch(':id')
    updateNote(@Param('id') id:number, @Body() updateNoteDto:UpdateNoteDto){
        return this.notesService.update(id, updateNoteDto)
    }

    @Delete(':id')
    @HttpCode(200)
    removeNote(@Param('id') id:number) {
        return this.notesService.remove(id)
    }
}
