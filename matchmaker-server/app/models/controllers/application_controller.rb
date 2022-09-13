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

    post '/daters' do
        dater = Dater.create(
            username: params[:username],
            password: params[:password],
            gender: params[:gender],
            age: params[:age],
            
        )
        dater.to_json
    end

    post '/login/matchmaker' do
        if Matchmaker.all.exists?(username: params[:username])
            if Matchmaker.find_by_username(params[:username]).password == params[:password]
               matchmaker = [Matchmaker.find_by_username(params[:username]), Matchmaker.find_by_username(params[:username]).current_clients]
               matchmaker.to_json
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
end

    


