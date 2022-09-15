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
               matchmaker.to_json(include: {daters:{include: :hires}})
            else 
                "Incorrect Password"
            end
        else 
            "Incorrect Username"
        end

    end

    # post '/login/dater' do
    #     if Dater.all.exists?(username: params[:username])
    #         if Dater.find_by_username(params[:username]).password == params[:password]
    #            dater = Dater.find_by_username(params[:username])
    #            dater.to_json
    #         else 
    #             "Incorrect Password"
    #         end
    #     else 
    #         "Incorrect Username"
    #     end

    # end

    get '/matchmakers' do
        matchmakers = Matchmaker.all
        matchmakers.to_json
    end

    get '/availabledaters' do
        hired_daters = Hire.all.pluck(:dater_id)
        matched_daters = Match.all.pluck(:dater_id).uniq.concat(Match.all.pluck(:dated_id).uniq)
        unavailable_daters = hired_daters.uniq.concat(matched_daters)
        available_daters = []
        Dater.all.map{|dater| if !unavailable_daters.include?(dater.id) then available_daters << dater end}
        available_daters.to_json
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

    get '/find-match/:id' do
        matched_daters = Match.all.pluck(:dater_id).uniq.concat(Match.all.pluck(:dated_id).uniq)
        daters = []
        Dater.all.where(gender: Dater.find(params[:id]).interested_in, interested_in: Dater.find(params[:id]).gender).map{|dater| if !matched_daters.include?(dater.id) then daters << dater end}
        daters.to_json
    end

    post '/make-match' do
        newmatch = Match.create(
            dater_id: params[:dater_id],
            dated_id: params[:dated_id]
        )
        Hire.all.where(
            dater_id: params[:dater_id],
            matchmaker_id: params[:matchmaker_id]
        ).destroy_all
        newmatch.to_json
    end
        
end

    


