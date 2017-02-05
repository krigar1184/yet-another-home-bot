import {IRaspiphoto} from "./interfaces/raspiphoto";
import {Raspistill} from 'node-raspistill';

export class RaspiphotoService {
    private constructor() {}

    public static takePhoto(): Promise<IRaspiphoto> {
        const camera = new Raspistill();
        return camera.takePhoto();
    }
}