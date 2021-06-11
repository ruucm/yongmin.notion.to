import sharp from "sharp"
import fs from "fs"
import path from "path"

// source from https://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object

const dirname = "./original-images"

fs.readdir(dirname, function (err, filenames) {
  if (err) {
    // onError(err);
    return
  }
  filenames.forEach(function (filename) {
    // get current file extension
    const ext = path.parse(filename).ext

    if ([".jpeg", ".jpg", ".png"].includes(ext)) {
      // get current file name
      const name = path.parse(filename).name
      // get current file path
      const filepath = path.resolve(dirname, filename)
      resizeImage(filepath, name)
      placeholderImage(filepath, name)
    }
  })
})

function resizeImage(filepath, name) {
  const imageSize = 1720
  sharp(filepath)
    .resize(imageSize)
    .toFile(`./public/images/${name}.webp`, (err, info) => {
      console.log("err", err)
      console.log("info", info)
    })

  sharp(filepath)
    .resize(imageSize)
    .toFile(`./public/images/${name}.png`, (err, info) => {
      console.log("err", err)
      console.log("info", info)
    })
}

function placeholderImage(filepath, name) {
  const imageSize = 20
  sharp(filepath)
    .resize(imageSize)
    .toFile(`./pages/assets/placeholders/${name}.webp`, (err, info) => {
      console.log("err", err)
      console.log("info", info)
    })

  sharp(filepath)
    .resize(imageSize)
    .toFile(`./pages/assets/placeholders/${name}.png`, (err, info) => {
      console.log("err", err)
      console.log("info", info)
    })
}
