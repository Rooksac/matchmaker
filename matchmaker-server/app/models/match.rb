class Match < ActiveRecord::Base
    belongs_to :dater
    belongs_to :dated, class_name: "Dater"
end