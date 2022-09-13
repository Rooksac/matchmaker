class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    post '/login/matchmaker' do
        if Matchmaker.all.exists?(username: params[:username])
            if Matchmaker.find_by_username(params[:username]).password == params[:password]
                Matchmaker.find_by_username(params[:username]).to_json
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

    


