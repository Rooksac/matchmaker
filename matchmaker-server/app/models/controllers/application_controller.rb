class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'

    # post '/login/matchmaker' do
    #     if Matchmaker.all.exists?(username: params[:username]) do
    #         if Matchmaker.find_by_username(params[:username]).password == params[:password] do
    #             Matchmaker.find_by_username.to_json
    #         else 
    #             "Incorrect Password"
    #         end
    #     else 
    #         "Incorrect Username"
    #     end

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
    end


