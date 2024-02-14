import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {
  constructor(
    private readonly carsService: CarsService
  ){}
  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  // ParseIntPipe -> transforma a un entero
  // ParseUUIDPipe -> valida que sea un uuid
  @Get(':id')
  // getCarById( @Param('id', ParseIntPipe) id:string ) {
  getCarById( @Param('id', ParseUUIDPipe) id:string ) {
    return this.carsService.findByOneId( id );
  }

  @Post()
  createCar( @Body() createCarDto: CreateCarDto ) {
    return createCarDto;
  }

  @Patch(':id')
  updateCar( 
    @Param('id', ParseIntPipe) id: number,
    @Body() body: any 
  ) {
    return body;
  }

  @Delete(':id')
  deleteCar( @Param('id', ParseIntPipe) id:number ) {
    console.log("deleted");
    
  }
}
