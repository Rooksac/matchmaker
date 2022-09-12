class CreateDaters < ActiveRecord::Migration[6.1]
  def change
    create_table :daters do |t|
      t.string :username
      t.string :gender
      t.integer :age
      t.string :interested_in
    end
  end
end
