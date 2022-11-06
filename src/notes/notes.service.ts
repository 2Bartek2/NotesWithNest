import { Injectable, NotFoundException, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateNoteDto } from './dto/create-note.dto';
import { Note } from './entities/note.entity';
import { Repository, DataSource } from 'typeorm';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}
  getAll(): Promise<Note[]> {
    return this.noteRepository.find();
  }

  async getNoteById(id: number): Promise<Note> {
    const note = await this.noteRepository.findOne({ where: { id } });
    if (!note) {
      throw new NotFoundException(`Note ${id} doesnt exist`);
    }
    return note;
  }

  async createNote(createNoteDto: CreateNoteDto): Promise<Note> {
    const note = await this.noteRepository.findOne({
      where: { title: createNoteDto.title },
    });
    if (note) {
      throw new NotFoundException(`Note already exist`);
    }
    const newNote = await this.noteRepository.create(createNoteDto);
    return this.noteRepository.save(newNote);
  }
  async update(id: number, updateNoteDto): Promise<Note> {
    const existingNote = await this.noteRepository.preload({
      id,
      ...updateNoteDto,
    });
    if (!existingNote) {
      throw new NotFoundException('note doesnt exist');
    }
    return this.noteRepository.save(existingNote);
  }
  async remove(id: number): Promise<Note> {
    const note = await this.noteRepository.findOne({ where: { id } });
    if (!note) {
      throw new NotFoundException('note doesnt exist');
    }
    return this.noteRepository.softRemove(note);
  }
}
