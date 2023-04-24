interface Arguments {
    sourceFile: string;
}

export interface GetBreakpointTypesResponse {
    breakpointTypes: BreakpointType[];
}

export interface BreakpointType {
    id: string;
    name: string;
    targetElementTypeId: string;
    description: string;
    isEnabled: boolean;
}

export interface EnableBreakpointTypeArgs extends Arguments {
    breakpointTypeIds: string[];
}