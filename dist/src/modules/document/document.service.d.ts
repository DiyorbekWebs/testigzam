import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { UpdateDocumentDto, CreateDocumentDto } from './dto';
import { Document } from './document.entity';
export declare class DocumentService {
    private readonly documentRepository;
    constructor(documentRepository: Repository<Document>);
    getAll(options: IPaginationOptions): Promise<Pagination<Document>>;
    getOne(id: string): Promise<Document>;
    getRegulatoryDocument(options: IPaginationOptions): Promise<Pagination<Document>>;
    getOpenDocument(options: IPaginationOptions): Promise<Pagination<Document>>;
    getSubsidyDocument(options: IPaginationOptions): Promise<Pagination<Document>>;
    getOnlineCreditDocument(options: IPaginationOptions): Promise<Pagination<Document>>;
    deleteOne(id: string): Promise<import("typeorm").DeleteResult>;
    change(value: UpdateDocumentDto, id: string): Promise<import("typeorm").UpdateResult>;
    create(value: CreateDocumentDto): Promise<Document>;
}
