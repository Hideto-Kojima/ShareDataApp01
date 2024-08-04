import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { AuthData } from './auth-data';

@Injectable({ providedIn: 'root' })
export class AuthDataService extends EntityCollectionServiceBase<AuthData> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('AuthData', serviceElementsFactory);
  }
}
