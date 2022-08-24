export interface Config {
    width: number,
    height: number,
    layout: {
        width: number,
        height: number,
        flat: boolean,
        spacing: number
    },
    origin: {
        x: number,
        y: number
    },
    map: string,
    mapProps: number[]
}