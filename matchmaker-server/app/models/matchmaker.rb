class Matchmaker < ActiveRecord::Base
    has_many :hires
    has_many :daters, through: :hires

    def current_clients
        clients = self.hires.where(terminated_at: nil).pluck(:dater_id)
        clients.map{|client| Dater.find(client)} 

    end
end