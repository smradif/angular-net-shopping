import { Injectable } from '@angular/core';
import { IStorageItem } from '../models';

@Injectable()
export class StorageService {
    public setItems(items: IStorageItem[]) {
        if (this.canStore) {
            items.forEach(item => {
                this.setItem(item.key, item.value);
            });
            return true;
        }
        return false;
    }

    public setItem(key: string, value: string) {
        if (this.canStore) {
            localStorage.setItem(key, value);
            return true;
        }
        return false;
    }

    public getItem(key: string) {
        if (this.canStore) {
            const item = localStorage.getItem(key);
            return item !== 'undefined' ? item : null;
        }
        return null;
    }

    public removeItem(key: string) {
        if (this.canStore) {
            localStorage.removeItem(key);
        }
    }

    public clear(keys: string[]): void {
        if (this.canStore) {
            keys.forEach(key => {
                localStorage.removeItem(key);
            });
        }
    }

    public get canStore() {
        return localStorage;
    }
}
