import { GalleryTypeEnum } from '../../../infra/shared/enum';
declare class CreateGalleryDto {
    type: GalleryTypeEnum;
    url: string[];
    readonly descriptionUz: string;
    readonly descriptionRu: string;
    readonly descriptionEn: string;
}
export default CreateGalleryDto;
