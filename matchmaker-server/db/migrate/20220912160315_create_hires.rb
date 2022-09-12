class CreateHires < ActiveRecord::Migration[6.1]
  def change
    create_table :hires do |t|
      t.integer :matchmaker_id
      t.integer :dater_id
      t.integer :dater_review
      t.integer :matchmaker_review
      t.datetime :terminated_at
      t.timestamps
    end
  end
end
