class Matchmaker < ActiveRecord::Base
    has_many :hires
    has_many :daters, through: :hires

    def current_clients
        self.hires.where(terminated_at: nil)
    end
end