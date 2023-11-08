import { GalleryTypeEnum } from 'src/infra/shared/enum';
export declare class Gallery {
    id: string;
    type: GalleryTypeEnum;
    url: string[];
    date: string;
    descriptionUz: string;
    descriptionRu: string;
    descriptionEn: string;
}
