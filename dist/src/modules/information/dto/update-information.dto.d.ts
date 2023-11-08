import { InformationType } from 'src/infra/shared/type';
declare class UpdateInformationDto {
    url: string;
    type: InformationType;
    readonly titleUz: string;
    readonly titleRu: string;
    readonly titleEn: string;
    readonly descriptionUz: string;
    readonly descriptionRu: string;
    readonly descriptionEn: string;
}
export default UpdateInformationDto;
