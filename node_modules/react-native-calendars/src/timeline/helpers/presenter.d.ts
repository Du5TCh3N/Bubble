export declare function calcTimeByPosition(yPosition: number, hourBlockHeight: number): {
    hour: number;
    minutes: number;
};
export declare function calcDateByPosition(xPosition: number, timelineLeftInset: number, numberOfDays?: number, firstDate?: string): any;
export declare function buildTimeString(hour?: number, minutes?: number, date?: string): string;
export declare function calcTimeOffset(hourBlockHeight: number, hour?: number, minutes?: number): number;
