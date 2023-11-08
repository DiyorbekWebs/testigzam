import { DocumentType } from 'src/infra/shared/type';
declare class CreateDocumentDto {
    type: DocumentType;
    link: string;
    readonly titleUz: string;
    readonly titleRu: string;
    readonly titleEn: string;
}
export default CreateDocumentDto;
