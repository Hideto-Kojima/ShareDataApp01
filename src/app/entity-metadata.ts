import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
    AuthData: {
        //様々なoptionを記載します sort,Filter,id名の変更など
    },
};
const pluralNames = {
    //複数形が単純に末尾sでない場合、ここに記載します 例　Hero : Heroes
};
export const entityConfig: EntityDataModuleConfig = {
    entityMetadata,
    pluralNames
};

