require "faker"
Dater.destroy_all
Hire.destroy_all
Match.destroy_all
Matchmaker.destroy_all
puts "seeding begun"
gender = ['male', 'female', 'non-binary']
puts 'seeding daters'
images = ['https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxNTQxOTYwNDQ3MTA4NTk0/sam-heughan-gettyimages-1383742913.jpg', 'https://media1.popsugar-assets.com/files/thumbor/dyhFA4A14A4tw2knp2h6zzfPtX4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/08/10/838/n/1922283/tmp_telKLu_86a36849f0585ca3_GettyImages-1389153012.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg/1200px-Gilbert_Stuart_Williamstown_Portrait_of_George_Washington.jpg', 'https://people.com/thmb/F8lOpJVJOmYF4_gmxGCWgP37htg=/400x262/filters:no_upscale():max_bytes(150000):strip_icc():focal(674x349:676x351)/Emilia-Clarke_01-08179df68d634074a9cc25b5a6959edf.jpg', 'https://static.wikia.nocookie.net/villains/images/7/71/Yzma.png/revision/latest?cb=20220303224520']
10.times do |t|
    Dater.create(
        username: Faker::Name.name,
        password: Faker::Number.number(digits: 5),
        gender: gender[rand(0..2)],
        age: rand(21..40),
        interested_in: gender[rand(0..2)],
        image: images[rand(0..4)],
        
    )
end

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