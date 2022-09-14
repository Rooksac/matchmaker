class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'


   

    post '/signup/matchmakers' do
        matchmaker = Matchmaker.create(
            username: params[:username],
            password: params[:password]
        )
        matchmaker.to_json
    end

    post '/signup/daters' do
        dater = Dater.create(
            username: params[:username],
            password: params[:password],
            gender: params[:gender],
            age: params[:age],
            interested_in: params[:interestedIn],
            image: params[:image] 
        )
        dater.to_json
    end

    post '/login/matchmaker' do
        if Matchmaker.all.exists?(username: params[:username])
            if Matchmaker.find_by_username(params[:username]).password == params[:password]
               matchmaker = Matchmaker.find_by_username(params[:username])
               matchmaker.to_json(include: {hires:{include: :dater}})
            else 
                "Incorrect Password"
            end
        else 
            "Incorrect Username"
        end

    end

    get '/matchmakers' do
        matchmakers = Matchmaker.all
        matchmakers.to_json
    end

    get '/availabledaters/' do
        hired_daters = Hire.all.pluck(:dater_id).map{|id| Dater.find(id)}.uniq
        daters = Dater.all.each{|dater| hired_daters.exists?(dater)?dater:nil}
        daters.to_json
    end

    post '/add-client' do
       hire = Hire.create(
            dater_id: params[:dater_id],
            matchmaker_id: params[:matchmaker_id],
        )
        hire.to_json
    end

    patch '/delete-client' do
        hire = Hire.find_by(matchmaker_id: params[:matchmaker_id], dater_id: params[:dater_id]).destroy
        hire.to_json
    end
        
end

    


