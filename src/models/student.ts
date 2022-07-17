export interface Student {
    id?: string; // khi ta post thì chưa có id
    name: string;
    age: number;
    mark: number;
    gender: 'male' | 'female';
    city: string;

    createAt?: number;
    updatedAt?: number;
}