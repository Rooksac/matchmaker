class CreateMatchmakers < ActiveRecord::Migration[6.1]
  def change
    create_table :matchmakers do |t|
      t.boolean :available?
      t.string :username
    end
  end
end
