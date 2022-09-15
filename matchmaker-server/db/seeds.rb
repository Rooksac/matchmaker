require "faker"
Dater.destroy_all
Hire.destroy_all
Match.destroy_all
Matchmaker.destroy_all
puts "seeding begun"
gender = ['male', 'female', 'non-binary']
puts 'seeding daters'
images = ['https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxNTQxOTYwNDQ3MTA4NTk0/sam-heughan-gettyimages-1383742913.jpg', 'https://media1.popsugar-assets.com/files/thumbor/dyhFA4A14A4tw2knp2h6zzfPtX4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/08/10/838/n/1922283/tmp_telKLu_86a36849f0585ca3_GettyImages-1389153012.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg', 'https://people.com/thmb/F8lOpJVJOmYF4_gmxGCWgP37htg=/400x262/filters:no_upscale():max_bytes(150000):strip_icc():focal(674x349:676x351)/Emilia-Clarke_01-08179df68d634074a9cc25b5a6959edf.jpg', 'https://static.wikia.nocookie.net/villains/images/7/71/Yzma.png/revision/latest?cb=20220303224520']

Dater.create(username: "Tsering", password: 12345, gender: "male", age: 24, interested_in: "female", image: "https://w7.pngwing.com/pngs/454/418/png-transparent-despicable-me-character-illustration-despicable-me-minion-rush-el-macho-dr-nefario-supervillain-despicable-me-villain-fictional-character-film.png")
Dater.create(username: "Chalky", password: 65273, gender: "male", age: 31, interested_in: "female", image: "https://bamfstyle.com/wp-content/uploads/2017/04/bechalkytux-crop2.jpg")
Dater.create(username: "Josh", password: 12638, gender: "male", age: 25, interested_in: "male", image: "https://www.kindpng.com/picc/m/173-1730337_transparent-johnny-bravo-png-cartoon-character-johnny-bravo.png")
Dater.create(username: "John", password: 86373, gender: "male", age: 30, interested_in: "male", image: "https://i.pinimg.com/originals/cc/3d/32/cc3d328909d6db8f1d559308329d7222.jpg")
Dater.create(username: "Steve", password: 27947, gender: "male", age: 39, interested_in: "non-binary", image: "https://media1.popsugar-assets.com/files/thumbor/j47jU-UO_Aa37Bb_RyUSs5yOpJ8/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2016/01/22/708/n/1922398/2b91023bbacf13c5_502199560/i/Steve-Harvey.jpg")
Dater.create(username: "Shaggy", password: 29373, gender: "male", age: 21, interested_in: "non-binary", image: "https://pbs.twimg.com/media/DW9YUkjUMAAlmmh.png")
Dater.create(username: "Hermoine", password: 93737, gender: "female", age: 21, interested_in: "male", image: "https://i.pinimg.com/474x/98/b8/b9/98b8b9163865312af379f3b963f8042b.jpg")
Dater.create(username: "Betty", password: 27383, gender: "female", age: 35, interested_in: "male", image: "https://www.webrockonline.com/images/betty.jpg")
Dater.create(username: "Jessica", password: 28222, gender: "female", age: 38, interested_in: "female", image: "https://m.media-amazon.com/images/I/61pSNqPeNxL._AC_SL1024_.jpg")
Dater.create(username: "Brooke", password: 94746, gender: "female", age: 22, interested_in: "female", image: "https://i.pinimg.com/originals/98/b0/a2/98b0a2268d333473dcd907dfdb92ee6e.jpg")
Dater.create(username: "Yzma", password: 92736, gender: "female", age: 39, interested_in: "non-binary", image: "https://i.pinimg.com/736x/86/41/49/8641495167c7e7f0a134daee50d16474--emperors-new-groove-disney-villains.jpg")
Dater.create(username: "Cruella", password: 26373, gender: "female", age: 38, interested_in: "non-binary", image: "https://people.com/thmb/YblAegU_aYtabKP9ODJbVSVNRFs=/1080x1080/filters:fill(auto,1)/glenn-close-1-fefb5266623e4d5cb60b5583b6429126.jpg")
Dater.create(username: "Edna", password: 92737, gender: "non-binary", age: 37, interested_in: "female", image: "http://surbrook.devermore.net/adaptationswesternanimation/incredibles/Edna_Mode.jpg")
Dater.create(username: "Willy", password: 12836, gender: "non-binary", age: 25, interested_in: "female", image: "https://m.media-amazon.com/images/M/MV5BMTgxMTU5NjEwM15BMl5BanBnXkFtZTcwNDgyNTYyNw@@._V1_.jpg")
Dater.create(username: "Jason", password: 73548, gender: "non-binary", age: 31, interested_in: "male", image: "https://media1.popsugar-assets.com/files/thumbor/8sy-2uyTqNlbwEJ94iupqmsny7M/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2016/03/18/896/n/1922398/1385d1ed_edit_img_image_36158137_1416727436_JMomoa/i/Jason-Momoa.jpg")
Dater.create(username: "Nucky", password: 83522, gender: "non-binary", age: 31, interested_in: "male", image: "https://i.pinimg.com/originals/bf/3a/b4/bf3ab45c7636fcf091b9710089a34de7.jpg")
Dater.create(username: "Professor D", password: 73625, gender: "non-binary", age: 31, interested_in: "non-binary", image: "https://i.pinimg.com/originals/54/8a/d0/548ad00f6124a24184ce47cc6a19f113.jpg")
Dater.create(username: "Zac", password: 93746, gender: "non-binary", age: 31, interested_in: "non-binary", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Zac_Efron_at_the_Baywatch_Red_Carpet_Premiere_Sydney_Australia.jpg/1200px-Zac_Efron_at_the_Baywatch_Red_Carpet_Premiere_Sydney_Australia.jpg")

# success = [true, false]
puts 'seeding matches'
1.times do |t|
    Match.create(
        dater_id: Dater.all.sample.id,
        dated_id: Dater.all.sample.id,
        
    )
end
puts 'seeding matchmakers'
Matchmaker.create(username: 'Test', password: 12345)
5.times do |t|
    Matchmaker.create(
        
        username: Faker::Name.name,
        password: Faker::Number.number(digits: 5)
    )
end
puts 'seeding hires'
1.times do |t|
    Hire.create(
        matchmaker_id: Matchmaker.all.sample.id,
        dater_id: Dater.all.sample.id,
        
    )
end

puts "done seeding"