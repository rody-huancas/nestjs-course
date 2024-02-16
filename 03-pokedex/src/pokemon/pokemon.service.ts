import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Model, isValidObjectId } from 'mongoose';

import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from './entities/pokemon.entity';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class PokemonService {

  constructor(
    @InjectModel( Pokemon.name )
    private readonly pokemonMoldel: Model<Pokemon>
  ){}

  async create(createPokemonDto: CreatePokemonDto) {
    createPokemonDto.name = createPokemonDto.name.toLocaleLowerCase();
    try {
      const pokemon = await this.pokemonMoldel.create( createPokemonDto ); 
      return pokemon;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  findAll(paginationDto: PaginationDto) {
    const { limit = 10, offset = 0 } = paginationDto;

    return this.pokemonMoldel.find()
      .limit( limit )
      .skip( offset )
      .sort({ no: 1 })
      .select('-__v')
  }

  async findOne(term: string) {
    let pokemon: Pokemon;
    if(!isNaN(+term)){
      pokemon = await this.pokemonMoldel.findOne({no: term});
    }

    // MongoID
    if( !pokemon && isValidObjectId(term) ){
      pokemon = await this.pokemonMoldel.findById( term );
    }

    // Name
    if( !pokemon ){
      pokemon = await this.pokemonMoldel.findOne({ name: term.toLocaleLowerCase().trim() });
    }

    if(!pokemon) throw new NotFoundException(`Pokemon with id, name or no "${ term }" not found`);

    return pokemon
  }

  async update(term: string, updatePokemonDto: UpdatePokemonDto) {
    const pokemon = await this.findOne( term )
    if( updatePokemonDto.name )
      updatePokemonDto.name = updatePokemonDto.name.toLocaleLowerCase();

    try {
      await pokemon.updateOne( updatePokemonDto );
      return { ...pokemon.toJSON(), ...updatePokemonDto };
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async remove(id: string) {
    // const pokemon = await this.findOne( id );
    // await pokemon.deleteOne();
    // return { id }
    // const result = await this.pokemonMoldel.findByIdAndDelete( id );
    const { deletedCount } = await this.pokemonMoldel.deleteOne({ _id: id })
    if(deletedCount === 0) 
      throw new NotFoundException(`Pokemon with id "${ id }" not found`);
    
    return;
  }

  private handleExceptions( error: any ) {
    if(error.code === 11000){
      throw new BadRequestException( `Pokemon exist in db ${JSON.stringify( error.keyValue )}` )
     }
     console.log(error)
     throw new InternalServerErrorException( `Can't create pokemon - Check server logs` )
  }
}
