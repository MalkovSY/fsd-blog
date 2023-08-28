import { Currency, Country } from 'shared/const/common';

export interface Profile {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    middlename: string;
    age: number;
    currency: Currency;
    country: Country;
    city: string;
    avatar: string;
}

export interface ProfileSchema {
    isLoading: boolean;
    readonly: boolean;
    data?: Profile;
    error?: string;
}
