import { FindOptionsWhere, Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateGalleryDto, CreateGalleryDto } from './dto';
import { Gallery } from './gallery.entity';
export declare class GalleryService {
    private readonly galleryRepository;
    constructor(galleryRepository: Repository<Gallery>);
    getAll(options: IPaginationOptions, where?: FindOptionsWhere<Gallery>): Promise<Pagination<Gallery>>;
    getOne(id: string): Promise<Gallery>;
    getPhotoGallery(options: IPaginationOptions): Promise<Pagination<Gallery>>;
    getVideoGallery(options: IPaginationOptions): Promise<Pagination<Gallery>>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateGalleryDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateGalleryDto): Promise<Gallery>;
}
