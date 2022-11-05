// import { Test, TestingModule } from "@nestjs/testing";
// import { CreateNestDto } from "./dto/create-nest.dto";
// import { UpdateNestDto } from "./dto/update-nest.dto";
// import { NestController } from "./nest.controller";
// import { NestEntity } from "./nest.entity";
// import { NestService } from "./nest.service";

// const nestEntityList: NestEntity[] = [
//     new NestEntity({ id:'1', task: 'task-1', isDone: 0}),
//     new NestEntity({ id:'2', task: 'task-2', isDone: 0}),
//     new NestEntity({ id:'3', task: 'task-3', isDone: 0}),
// ];

// const newNestEntity = new NestEntity({  task: 'new-task', isDone: 0 });

// const updateNestEntity = new NestEntity({ task: 'update-task', isDone: 1});

// describe('NestController', () => {
//     let nestControllers: NestController;
//     let nestService: NestService;
//     beforeEach(async () => {
//         const module: TestingModule = await Test.createTestingModule({
//             controllers: [NestController],
//             providers: [
//                 {
//                     provide: NestService,
//                     useValue: {
//                         findAll: jest.fn().mockResolvedValue(nestEntityList),
//                         create: jest.fn().mockResolvedValue(newNestEntity),
//                         findOne: jest.fn().mockResolvedValue(nestEntityList[0]),
//                         update: jest.fn().mockResolvedValue(updateNestEntity),
//                         delete: jest.fn().mockResolvedValue(undefined),
//                     },
//                 },
//             ],
//         }).compile();

//         nestControllers = module.get<NestController>(NestController);
//         nestService = module.get<NestService>(NestService);
//     });

//     it('should be defined', () => {
//         expect(nestControllers).toBeDefined();
//         expect(nestService).toBeDefined();
//     });

//     describe('index', () => {
//         it('should return a nest list entity sucefully', async () => {
//             // Act
//             const result = await nestControllers.index(); 

//             // Assert
//             expect(result).toEqual(nestEntityList);
//             expect(typeof result).toEqual('object');
//             expect(nestService.findAll).toHaveBeenCalledTimes(1);
//         });
        
//         it('should throw an execption', () => {
//             // Arrange
//             jest.spyOn(nestService, 'findAll').mockRejectedValueOnce(new Error());

//             // Assert
//             expect(nestControllers.index()).rejects.toThrowError();
//         });
//     });

//     describe('store', () => {
//         it('should create a new nest item sucefully', async () => {
//             // Arrange
//             const body: CreateNestDto = {
//                 task: 'new-task',
//                 isDone: 0,
//             };
//             // Act
//             const result = await nestControllers.create(body);

//             //Assert 
//             expect(result).toEqual(newNestEntity);
//             expect(nestService.create).toHaveBeenCalledTimes(1);     
//             expect(nestService.create).toHaveBeenCalledWith(body);
//         });

//         it('should throw an execption', () => {

//             const body: CreateNestDto = {
//                 task: 'new-task',
//                 isDone: 0,
//             };
            
//             // Arrange
//             jest.spyOn(nestService, 'create').mockRejectedValueOnce(new Error());

//             // Assert
//             expect(nestControllers.create(body)).rejects.toThrowError();
//         });
//     });

//     describe('show', () => {
//         it('should get nest item successufuly', async () => {
//             // Act
//             const result = await nestControllers.show('1');

//             // Assert 
//             expect(result).toEqual(nestEntityList[0]);
//             expect(nestService.findOne).toHaveBeenCalledTimes(1);
//             expect(nestService.findOne).toHaveBeenCalledWith('1');  
//         }); 

//         it('should throw an execption', () => {
//             // Arrange 
//             jest.spyOn(nestService, 'findOne').mockRejectedValueOnce(new Error());

//             // Assert
//             expect(nestControllers.show('1')).rejects.toThrowError();
//         });
//     });

//     describe('update', () => {
//         it('should update a nest item successufuly', async () => {
//             // Arrange
//             const body: UpdateNestDto = {
//                 task: 'task-1',
//                 isDone: 1,
//             };

//             // Act 
//             const result = await nestControllers.update('1', body);

//             // Assert 
//             expect(result).toEqual(updateNestEntity);
//             expect(nestService.update).toHaveBeenCalledTimes(1);
//             expect(nestService.update).toHaveBeenCalledWith('1', body);
//         });

//         it('should throw an exception', () => {
//             // Arrange
//             const body: UpdateNestDto = {
//                 task: 'task-1',
//                 isDone: 1,
//             };

//             jest.spyOn(nestService, 'update').mockRejectedValueOnce(new Error());

//             // Assert 
//             expect(nestControllers.update('1', body)).rejects.toThrowError();
//         });
//     });

//     describe('destroy', () => {
//         it('should remove a nest item successufuly', async () => {
//             // Act 
//             const result = await nestControllers.destroy('1');

//             //Assert
//             expect(result).toBeUndefined();
//         });

//         it('should throw an exeception', () => {
//             // Arrange
//             jest.spyOn(nestService, 'delete').mockRejectedValueOnce(new Error());

//             //Assert
//             expect(nestControllers.destroy('1')).rejects.toThrowError();    
//         });
//     });
// });