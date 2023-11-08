import { BannerType } from 'src/infra/shared/type';
declare class CreateBannnerDto {
    url: string;
    readonly type: BannerType;
    readonly titleUz: string;
    readonly titleRu: string;
    readonly titleEn: string;
    readonly descriptionUz: string;
    readonly descriptionRu: string;
    readonly descriptionEn: string;
}
export default CreateBannnerDto;
