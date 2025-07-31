const path = require("path")
// path modülü, dosya ve klasör yollarını (file paths) işlemek, birleştirmek, ayrıştırmak ve platforma uyumlu hale getirmek için kullanılır.
// Özellikle dosya sistemine erişen uygulamalarda (örneğin Express.js ile sunucu kurarken) sık kullanılır.

console.log("Directory name: ", path.dirname(__filename)); // kodun çalıştığı dosyanın, dosya ismiyle beraber dizinini verir

console.log("File name: ", path.basename(__filename)) // kodun çalıştığı dosyanın ismini verir

console.log('file extention', path.extname(__filename)); // kodun çalıştığı dosyanın dosya uzantısını verir

//dosya uzantısı birleştirme
const joinPath = path.join('/user','documents', 'node', 'projects') 
console.log("Joined path: ", joinPath);

const resolvePath = path.resolve("user", "documents", "node", " project") // mevcut dizinin devamına yol ekler. eğer mutlak
// verilen yol parçalarını birleştirip, mutlak (absolute) bir dosya yolu üretir.
console.log("Resolve path: ", resolvePath)

const normalizePath = path.normalize('/user/.documents/../node/projects')
console.log("Normalized path: ",normalizePath);

