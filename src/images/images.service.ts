import { Injectable, StreamableFile } from '@nestjs/common';
import { createReadStream, existsSync } from 'fs';

@Injectable()
export class ImagesService {
  findOne(id: number): StreamableFile {
    let path = existsSync(`images/${id}.jpg`)
      ? `images/${id}.jpg`
      : 'images/missing.jpg';

    const file = createReadStream(path);
    return new StreamableFile(file);
  }
}
