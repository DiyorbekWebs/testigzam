import { ManagementType } from 'src/infra/shared/type';
declare class UpdateManagementDto {
    type: ManagementType;
    url: string;
    phone: string;
    gmail: string;
    telegram: string;
    twitter: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    readonly firstNameUz: string;
    readonly firstNameRu: string;
    readonly firstNameEn: string;
    readonly lastNameUz: string;
    readonly lastNameRu: string;
    readonly lastNameEn: string;
    readonly fatherNameUz: string;
    readonly fatherNameRu: string;
    readonly fatherNameEn: string;
    readonly positionUz: string;
    readonly positionRu: string;
    readonly positionEn: string;
    ManagementType: any;
    readonly taskUz: string;
    readonly taskRu: string;
    readonly taskEn: string;
}
export default UpdateManagementDto;
