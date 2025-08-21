const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017") // mongodb bağlantısı
    .then(() => { console.log("database connected successfully") })
    .catch((e) => { console.log(e) })


const userSchema = new mongoose.Schema({ // mongo db ye kaydedilecek verinin bir şeması olmalı. yani sabit bir yapıda olmalı. bu şemadaki her filed ın dolu olması zorunlou değildir. required yapıldığı takdirde zprunlu olacaktır. yani bir burdaki verilerin durumlarını belirliyoruz.
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now }
})

// create user model
const user = mongoose.model('User', userSchema)

async function runQueryExamples() {
    try {
        //create a new document
        // const newUser = await user.create({
        //     name: 'begüm',
        //     email: 'barisoy.gmail.com',
        //     age: 21,
        //     isActive: false,
        //     tags: ['artist', 'gamer', 'germanist',],
        // })
        // console.log('Created a new user', newUser)

        // veri mongodb ye iki farklı şekilde kaydedilebilir. direkt .create() metodu ile ve önce new ile oluşturup sonra save metodu ile kaydetme
        //------------------------------------
        // const newUser2 = new user({ 
        //     name: 'murat',
        //     email: 'mrtsvs.gmail.com',
        //     age: 23,
        //     isActive: true,
        //     tags: ['developer', 'designer', 'manager',],
        // })

        // await newUser2.save()
        //-----------------------------------

        // filtrelenmemiş bir şekilde user modelinin altındaki bütün verileri getirir.
        // const allUsers = await user.find({}) 
        // console.log(allUsers)


        // filtreleme 
        // const getUserOfActiveFalse = await user.find({ isActive: false })
        // console.log(getUserOfActiveFalse)


        // verilerin sadece istediğimiz özelliklerini alma select ile yapılıyor.
        // const selectedFileds = await user.find({}).select('name age -_id') // _id yi biz istemesek de veriyor. _id yi istemedeğimiz zaman başına -(kısa çizgi) koyuyoruz
        // console.log(selectedFileds)

        // verileri limitli bir şekilde bir kısmını alma
        // limit(5) ilk beş kullanıcı
        // skip(1) birinciyi atla devamını getir.
        // const limitedUsers = await user.find().limit(5).skip(1)
        // console.log(limitedUsers)

        // sıralı bir şekilde getirme
        // // sort({age: -1}) yaşa göre azalan bir şekilde getir.
        // const sortedUsers = await user.find().sort({ age: -1 })
        // console.log(sortedUsers)

        // sayma işlemi
        // countDocuments({ isActive: false }) isActive: false olanlarıns sayısı
        // const countIsActiveDocuments = await user.countDocuments({ isActive: false })
        // console.log(countIsActiveDocuments)

        // veri silme
        // const deletedUSer = await user.findByIdAndDelete('68a42b65d19f15c1ad784cfc')
         // console.log(deletedUSer)
 
        // veri güncelleme
        const updatedUser = await user.findByIdAndUpdate('68a42d507bc562d12881f01c',{
            $set:{age: 18}, $push: {tags: 'updated'}
        },{new: true}) // new: true' nun amacı biz bu güncelleme sırasında updatedUser değişkeni var ya ona verinin güncellenmiş halini yükler. bunu eklemezsek verinin eski halini döner
        console.log('updated user: ',updatedUser.name)
    } catch (e) {
        console.log('Error -> ', e)
    } finally {
        await mongoose.connection.close
    }
}

runQueryExamples()