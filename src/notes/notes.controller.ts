import {
  Controller,
  Get,
  Post,
  HttpCode,
  Param,
  Body,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  getNotes() : Promise<Note[]> {
    return this.notesService.getAll();
  }

  @Get(':id')
  get(@Param('id') id: number) : Promise<Note> {
    return this.notesService.getNoteById(id);
  }

  @Post()
  @HttpCode(204)
  addNote(@Body() createNoteDto: CreateNoteDto) : Promise<Note> {
    return this.notesService.createNote(createNoteDto);
  }

  @Patch(':id')
  updateNote(@Param('id') id: number, @Body() updateNoteDto: UpdateNoteDto) : Promise<Note> {
    return this.notesService.update(id, updateNoteDto);
  }

  @Delete(':id')
  @HttpCode(200)
  removeNote(@Param('id') id: number) : Promise<Note> {
    return this.notesService.remove(id);
  }
}
