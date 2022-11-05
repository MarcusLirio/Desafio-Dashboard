// import { NotFoundException } from "@nestjs/common";
// import { Test, TestingModule } from "@nestjs/testing";
// import { getRepositoryToken } from "@nestjs/typeorm";
// import { Repository } from "typeorm";
// import { CreateNestDto } from "./dto/create-nest.dto";
// import { UpdateNestDto } from "./dto/update-nest.dto";
// import { NestEntity } from "./nest.entity";
// import { NestService } from "./nest.service";


// const nestEntityList: NestEntity[] = [
//     new NestEntity({ task:'task-1', isDone: 0}),
//     new NestEntity({ task:'task-2', isDone: 0}),
//     new NestEntity({ task:'task-3', isDone: 0}),
// ]

// const updateNestEntityItem = new NestEntity({ task: 'task-1', isDone: 1});

// describe('NestService', () => {
//     let nestService: NestService;
//     let nestRepository: Repository<NestEntity>;
//     beforeEach(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             providers: [
//                 NestService,
//                 {
//                     provide: getRepositoryToken(NestEntity),
//                     useValue: {
//                         find: jest.fn().mockResolvedValue(nestEntityList),
//                         findOneById: jest.fn().mockReturnValue(nestEntityList[0]),
//                         create: jest.fn().mockReturnValue(nestEntityList[0]),
//                         merge: jest.fn().mockReturnValue(updateNestEntityItem),
//                         save: jest.fn().mockResolvedValue(nestEntityList[0]),
//                         softDelete: jest.fn().mockReturnValue(undefined),
//                     }
//                 }
//             ],
//         }).compile();

//         nestService = module.get<NestService>(NestService);
//         nestRepository = module.get<Repository<NestEntity>>
//         (getRepositoryToken(NestEntity));
//     });
//     ''
//     it('should be defined', () => {
//         expect(nestService).toBeDefined();
//         expect(nestRepository).toBeDefined();
//     });

//     describe('findAll', () => {
//         it('should return a nest list entity successfuly', async () => {
//             // Act 
//             const result = await nestService.findAll();

//             // Assert
//             expect(result).toEqual(nestEntityList);
//             expect(nestRepository.find).toHaveBeenCalledTimes(1);
//         });
  
//         it('should throw an exception', () => {
//             // Arrange
//             jest.spyOn(nestRepository, 'find').mockRejectedValueOnce( new Error());

//             // Assert
//             expect(nestService.findAll()).rejects.toThrowError();
//         });     
//     });

//     describe('findOne', () => {
//         it('should return a nest entity item successufully', async () => {
//             // Act 
//             const result = await nestService.findOne('1');

//             // Assert 
//             expect(result).toEqual(nestEntityList[0]);
//             expect(nestRepository.findOneById).toHaveReturnedTimes(1);
//         });

//         it('should throw a not found execption', () => {
//             // Arrange
//             jest.spyOn(nestRepository, 'findOneById').mockRejectedValueOnce(new Error());

//             // Assert
//             expect(nestService.findOne('1')).rejects.toThrowError(
//                 NotFoundException,
//             );
//         });
//     });

//     describe('create', () => {
//         it('should return a nest entity item successufuly', async () => {
//             // Arrange
//             const data: CreateNestDto = {
//                 task: 'task-1',
//                 isDone: 0,
//             };
             
//             // Act
//             const result = await nestService.create(data);

//             // Assert
//             expect(result).toEqual(nestEntityList[0]);
//             expect(nestRepository.create).toHaveBeenCalledTimes(1);
//             expect(nestRepository.save).toHaveBeenCalledTimes(1);
//         });

//         it('should throw an exception', () => {
//             // Arrange
//             const data: CreateNestDto = {
//                 task: 'task-1',
//                 isDone: 0,
//             };
            
//             jest.spyOn(nestRepository, 'save').mockRejectedValueOnce(new Error());

//             // Assert 
//             expect(nestService.create(data)).rejects.toThrowError();
//         });
//     });

//     describe('update', () => {
//         it('should ', async () => {
//            // Arrange
//            const data: UpdateNestDto = {
//             task: 'task-1',
//             isDone: 1,
//            }

//            jest
//            .spyOn(nestRepository, 'save')
//            .mockResolvedValueOnce(updateNestEntityItem);

//             // Act
//             const result = await nestService.update('1', data);

//             // Assert 
//             expect(result).toEqual(updateNestEntityItem);
//         });

//         it('should a not found execption', () => {
//             // Arrange 
//             const data: UpdateNestDto = {
//                 task: 'task-1',
//                 isDone: 1,
//             }

//             jest
//             .spyOn(nestRepository, 'findOneById')
//             .mockRejectedValueOnce(new Error());

//             //Assert
//             expect(nestService.update('1', data)).rejects.toThrowError(
//                 NotFoundException,
//             );
//         }); 

//         it('should throw an exeception', () => {
//             // Arrange 
//             const data: UpdateNestDto = {
//                 task: 'task-1',
//                 isDone: 1,
//             }

//             jest
//             .spyOn(nestRepository, 'save')
//             .mockRejectedValueOnce(new Error());

//             // Assert
//             expect(nestService.update('1', data)).rejects.toThrowError();
//         });
//     });

//     describe('deleteById', () => {
//         it('should  delete a nest entity successufuly', async () => {
//             // Act  
//             const result = await nestService.delete('1');

//             // Assert
//             expect(result).toBeUndefined();
//             expect(nestRepository.findOneById).toHaveBeenCalledTimes(1);
//             expect(nestRepository.softDelete).toHaveBeenCalledTimes(1);
//         });

//         it('should throw a not found execption', () => {
//             // Arrange 
//             jest.spyOn(nestRepository, 'findOneById').mockRejectedValueOnce(new Error);

//             // Assert
//             expect(nestService.delete('1')).rejects.toThrowError(
//                 NotFoundException,
//             );
//         });

//         it('should throw an execption', () => {
//             // Arrange 
//             jest
//             .spyOn(nestRepository, 'softDelete')
//             .mockRejectedValueOnce(new Error());

//             // Assert
//             expect(nestService.delete('1')).rejects.toThrowError();
//         });
//     });
// });