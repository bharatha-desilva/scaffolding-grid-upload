export class TemplateDef {
    keyField!: string;
    columns!: TemplateColumnDef[];
}

export class TemplateColumnDef {
    property!: string;
    caption?: string;
    dataType?: DataType;
    dataLookup?: TemplateColumnDataLookUp;
    validationRules?: TemplateDataValidationRule[];
}

export class TemplateColumnDataLookUp {
    property!: string;
    caption!: string;
    data!: any[];
}

export class TemplateDataValidationRule {
    type!: ValidationType;
    message!: string;
    pattern!: string;
    min!: Date | number;
    max!: Date | number;
    maxlength!: string | number | null;
    validate!: Function;
    compare!: Function;
}

export enum DataType {
    NUMBER = 'number',
    DATE = 'date',
    STRING = 'string',
}

export enum ValidationType {
    ASYNC = 'async',
    REQUIRED = 'required',
    NUMERIC = 'numeric',
    RANGE = 'range',
    STRING_LENGTH = 'stringLength',
    CUSTOM = 'custom',
    COMPARE = 'compare',
    EMAIL = 'email',
    PATTERN = 'pattern',
}
