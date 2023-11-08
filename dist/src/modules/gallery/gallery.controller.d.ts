import { UpdateResult } from 'typeorm';
import { CreateGalleryDto, UpdateGalleryDto } from './dto';
import { Gallery } from './gallery.entity';
import { GalleryService } from './gallery.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class GalleryController {
    private readonly galleryService;
    constructor(galleryService: GalleryService);
    getData(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Gallery, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getPhotGallery(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Gallery, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getVideoGallery(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Gallery, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<Gallery>;
    saveData(data: CreateGalleryDto): Promise<Gallery>;
    changeData(data: UpdateGalleryDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
