import { UpdateResult } from 'typeorm';
import { CreateDocumentDto, UpdateDocumentDto } from './dto';
import { Document } from './document.entity';
import { DocumentService } from './document.service';
import { PaginationDto } from '../../infra/shared/dto';
export declare class DocumentController {
    private readonly documentService;
    constructor(documentService: DocumentService);
    getRegulatoryDoc(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Document, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getOnlineCreditDoc(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Document, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getSubsidyDoc(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Document, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getOpenDoc(route: string, query: PaginationDto): Promise<import("nestjs-typeorm-paginate").Pagination<Document, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    getMe(id: string): Promise<Document>;
    saveData(data: CreateDocumentDto): Promise<Document>;
    changeData(data: UpdateDocumentDto, id: string): Promise<UpdateResult>;
    deleteData(id: string): Promise<import("typeorm").DeleteResult>;
}
