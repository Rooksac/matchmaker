require "faker"
Dater.destroy_all
Hire.destroy_all
Match.destroy_all
Matchmaker.destroy_all
puts "seeding begun"
gender = ['male', 'female', 'non-binary']
puts 'seeding daters'
10.times do |t|
    Dater.create(
        username: Faker::Name.name,
        gender: gender[rand(0..2)],
        age: rand(21..40),
        interested_in: gender[rand(0..2)],
        available?: true
    )
end

success = [true, false]
puts 'seeding matches'
10.times do |t|
    Match.create(
        dater_id: Dater.all.sample.id,
        dated_id: Dater.all.sample.id,
        success?: success[rand(0..1)]
    )
end
puts 'seeding matchmakers'
Matchmaker.create(available?: true, username: 'Test', password: 12345)
5.times do |t|
    Matchmaker.create(
        available?: true,
        username: Faker::Name.name,
        password: Faker::Number.number(digits: 5)
    )
end
puts 'seeding hires'
10.times do |t|
    Hire.create(
        matchmaker_id: Matchmaker.all.sample.id,
        dater_id: Dater.all.sample.id,
        dater_review: rand(1..5),
        matchmaker_review: rand(1..5),
        terminated_at: Faker::Date.backward(days: 14)
    )
end

puts "done seeding"