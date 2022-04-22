import { config } from "@/config";
import * as fs from "fs";

const photoFilenames = fs.readdirSync(config.photosDir)
export function getRandomPhotoURL() {
    const filename = photoFilenames[Math.floor(Math.random() * photoFilenames.length)]
    return `${config.photosURL}/${filename}`;
}