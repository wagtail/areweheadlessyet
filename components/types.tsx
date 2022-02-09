export default interface StreamFieldBlock {
    type: string;
    value: any;
    id: string;
}

export interface StreamFieldProps {
    body: Array<StreamFieldBlock>;
}
