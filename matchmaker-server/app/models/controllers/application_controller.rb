class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'


   

    post '/signup/matchmakers' do
        matchmaker = Matchmaker.create(
            username: params[:username],
            password: params[:password],
            available?: true
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
            image: params[:image],
            available?: true 
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

    get '/availabledaters' do
        daters = Hire.all.where.not(terminated_at: nil).pluck(:dater_id).map{|id| Dater.find(id)}.uniq
        daters.to_json
    end

    post '/add-client' do
       hire = Hire.create(
            dater_id: params[:dater_id],
            matchmaker_id: params[:matchmaker_id],
            dater_review: nil,
            matchmaker_review: nil,
            terminated_at: nil
        )
        hire.to_json
    end

    patch '/delete-client' do
        hire = Hire.find_by(matchmaker_id: params[:matchmaker_id], dater_id: params[:dater_id], terminated_at: nil)
        hire.update(terminated_at: DateTime.now)
        hire.to_json
    end
        
end

    


