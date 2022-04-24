import { config } from "@/config";
import * as fs from "fs";

const photoFilenames = fs.readdirSync(config.photosDir)
    .filter(filename => !filename.startsWith("."))

export function getRandomPhotoFilename() {
    return photoFilenames[Math.floor(Math.random() * photoFilenames.length)]
}

export function getPhotoURL(filename: string) {
    return `${config.photosURL}/${filename}`;
}