class Dater < ActiveRecord::Base
 has_many :matches
 has_many :dateds, through: :matches
 has_many :inverse_matches, class_name: "Match", foreign_key: :dated_id
 has_many :inverse_dateds, through: :inverse_matches, source: :dater
 has_many :hires
 has_many :matchmakers, through: :hires

    def dating_history
        dating_history = []
        self.dateds.each {|dated| dating_history.push(dated)}
        self.inverse_dateds.each {|dated| dating_history.push(dated)}
        dating_history
    end
end