export interface Employee {
    id? : string,
    photo: string | null,
    completeName: string,
    department: string,
    salary: string,
    status: string,
    admission: Date,
    beneficiary: Beneficiary,
}
export interface Beneficiary {
    id?: string,
    name: string,
    relationship: string,
    birthdate: Date,
}